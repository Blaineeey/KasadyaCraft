import net from 'node:net'

/**
 * Minimal Minecraft Java "Server List Ping" client (the status protocol the
 * multiplayer screen uses). No dependencies, only node:net.
 *
 * Wire format (https://minecraft.wiki/w/Java_Edition_protocol/Server_List_Ping):
 *   C->S  Handshake      [len][0x00][protocol varint][host string][port u16][next state = 1]
 *   C->S  Status request [len][0x00]
 *   S->C  Status reply   [len][0x00][json string]
 * Strings are a VarInt byte length followed by UTF-8.
 *
 * Owner: INTERACTIVITY ENGINEER. Used only by ./route.ts.
 */

/** 767 = 1.21 / 1.21.1. Velocity answers any protocol in status mode. */
const PROTOCOL_VERSION = 767
/** Refuse absurd replies (a status JSON with a favicon is ~10-40 KB). */
const MAX_PACKET_BYTES = 1024 * 1024

export interface RawStatus {
  version?: { name?: unknown; protocol?: unknown }
  players?: { online?: unknown; max?: unknown; sample?: unknown }
  description?: unknown
}

export interface PingResult {
  raw: RawStatus
  latencyMs: number
}

function writeVarInt(value: number): Buffer {
  const bytes: number[] = []
  let v = value >>> 0
  do {
    let b = v & 0x7f
    v >>>= 7
    if (v !== 0) b |= 0x80
    bytes.push(b)
  } while (v !== 0)
  return Buffer.from(bytes)
}

/** Returns [value, nextOffset], or null when the buffer ends mid-VarInt. Throws on a malformed VarInt. */
function readVarInt(buf: Buffer, offset: number): [number, number] | null {
  let value = 0
  let shift = 0
  let pos = offset
  for (;;) {
    if (pos >= buf.length) return null
    const b = buf[pos++]
    value |= (b & 0x7f) << shift
    if ((b & 0x80) === 0) return [value >>> 0, pos]
    shift += 7
    if (shift >= 35) throw new Error('VarInt too long')
  }
}

function packet(id: number, ...fields: Buffer[]): Buffer {
  const body = Buffer.concat([writeVarInt(id), ...fields])
  return Buffer.concat([writeVarInt(body.length), body])
}

function mcString(s: string): Buffer {
  const b = Buffer.from(s, 'utf8')
  return Buffer.concat([writeVarInt(b.length), b])
}

function u16(n: number): Buffer {
  const b = Buffer.alloc(2)
  b.writeUInt16BE(n & 0xffff)
  return b
}

/**
 * Tries to read one complete status-reply packet from `buf`.
 * Returns the JSON text, or null if more bytes are needed.
 */
function tryParseReply(buf: Buffer): string | null {
  const len = readVarInt(buf, 0)
  if (!len) return null
  const [packetLength, bodyStart] = len
  if (packetLength <= 0 || packetLength > MAX_PACKET_BYTES) throw new Error('Bad packet length')
  if (buf.length < bodyStart + packetLength) return null
  const id = readVarInt(buf, bodyStart)
  if (!id || id[0] !== 0x00) throw new Error('Unexpected packet id')
  const strLen = readVarInt(buf, id[1])
  if (!strLen) throw new Error('Truncated string length')
  const [jsonLength, jsonStart] = strLen
  if (jsonStart + jsonLength > bodyStart + packetLength) throw new Error('String overruns packet')
  return buf.subarray(jsonStart, jsonStart + jsonLength).toString('utf8')
}

/**
 * Pings host:port and resolves with the parsed status JSON.
 * Rejects on DNS failure, refused connection, malformed reply or timeout.
 * The timeout covers the whole exchange (DNS + connect + reply).
 */
export function pingJavaServer(host: string, port: number, timeoutMs: number): Promise<PingResult> {
  return new Promise((resolve, reject) => {
    let settled = false
    let connectedAt = 0
    let received: Buffer = Buffer.alloc(0)
    const socket = net.connect({ host, port })

    const finish = (err: Error | null, result?: PingResult) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      socket.removeAllListeners()
      socket.on('error', () => {}) // late errors after destroy must not crash the process
      socket.destroy()
      if (err) reject(err)
      else resolve(result as PingResult)
    }

    const timer = setTimeout(() => finish(new Error(`Timed out after ${timeoutMs} ms`)), timeoutMs)

    socket.setNoDelay(true)
    socket.once('connect', () => {
      connectedAt = Date.now()
      const handshake = packet(0x00, writeVarInt(PROTOCOL_VERSION), mcString(host), u16(port), writeVarInt(1))
      const statusRequest = packet(0x00)
      socket.write(Buffer.concat([handshake, statusRequest]))
    })

    socket.on('data', (chunk: Buffer) => {
      received = received.length === 0 ? chunk : Buffer.concat([received, chunk])
      if (received.length > MAX_PACKET_BYTES + 16) return finish(new Error('Reply too large'))
      let json: string | null
      try {
        json = tryParseReply(received)
      } catch (e) {
        return finish(e instanceof Error ? e : new Error('Malformed reply'))
      }
      if (json === null) return
      const latencyMs = Date.now() - connectedAt
      try {
        const raw = JSON.parse(json) as RawStatus
        if (!raw || typeof raw !== 'object') throw new Error('Status is not an object')
        finish(null, { raw, latencyMs })
      } catch (e) {
        finish(e instanceof Error ? e : new Error('Bad JSON'))
      }
    })

    socket.once('error', (e) => finish(e))
    socket.once('end', () => finish(new Error('Connection closed before a reply')))
    socket.once('close', () => finish(new Error('Connection closed')))
  })
}

/* ---------- Normalising the reply ----------------------------------------- */

/** Removes legacy section-sign colour/format codes (§a, §l, §x§F§F...). */
export function stripFormatting(s: string): string {
  return s.replace(/§[0-9a-fk-orx]/gi, '')
}

/** Flattens a chat component (string | {text, extra[]} | array) to plain text. */
export function chatToText(node: unknown, depth = 0): string {
  if (depth > 32 || node === null || node === undefined) return ''
  if (typeof node === 'string') return node
  if (typeof node === 'number' || typeof node === 'boolean') return String(node)
  if (Array.isArray(node)) return node.map((n) => chatToText(n, depth + 1)).join('')
  if (typeof node === 'object') {
    const o = node as { text?: unknown; extra?: unknown; translate?: unknown }
    let out = typeof o.text === 'string' || typeof o.text === 'number' ? String(o.text) : ''
    if (!out && typeof o.translate === 'string') out = o.translate
    if (o.extra !== undefined) out += chatToText(o.extra, depth + 1)
    return out
  }
  return ''
}

/** MOTD as tidy plain text: no colour codes, each line trimmed, inner runs of spaces collapsed. */
export function motdToText(description: unknown): string | null {
  const lines = stripFormatting(chatToText(description))
    .split(/\r?\n/)
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
  return lines.length > 0 ? lines.join('\n').slice(0, 300) : null
}

function toCount(v: unknown): number {
  const n = typeof v === 'number' ? v : Number(v)
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 0
}

/** Real player names from the ping sample (skips the fake "text line" entries some servers send). */
export function sampleNames(sample: unknown): string[] | undefined {
  if (!Array.isArray(sample)) return undefined
  const names = sample
    .filter((p): p is { name: string; id?: string } => !!p && typeof p === 'object' && typeof (p as { name?: unknown }).name === 'string')
    .filter((p) => p.id !== '00000000-0000-0000-0000-000000000000')
    .map((p) => stripFormatting(p.name).trim())
    .filter((name) => /^[A-Za-z0-9_]{1,16}$/.test(name))
    .slice(0, 12)
  return names.length > 0 ? names : undefined
}

export function normalisePlayers(players: RawStatus['players']): { online: number; max: number; sample?: string[] } {
  const online = toCount(players?.online)
  const max = toCount(players?.max)
  const sample = sampleNames(players?.sample)
  return sample ? { online, max, sample } : { online, max }
}

export function versionName(version: RawStatus['version']): string | null {
  const name = version?.name
  return typeof name === 'string' && name.trim() ? stripFormatting(name).trim().slice(0, 80) : null
}
