/**
 * Live server status contract.
 * Owner: INTERACTIVITY ENGINEER (implements src/app/api/status/route.ts).
 * Consumers: home hero, header chip, /play. Do not rename fields.
 */

export interface ServerStatus {
  online: boolean
  players: {
    online: number
    max: number
    /** A few names from the ping sample, if the proxy sends them. */
    sample?: string[]
  }
  /** Raw version string from the ping. Show site.versionLabel to players instead. */
  version: string | null
  /** MOTD as plain text (colour codes stripped). */
  motd: string | null
  latencyMs: number | null
  /** ISO timestamp of the check. */
  checkedAt: string
  /** live = pinged now, cache = recent cached ping, offline = no answer, stub = not implemented yet. */
  source: 'live' | 'cache' | 'offline' | 'stub'
}

export const STATUS_ENDPOINT = '/api/status'

/** How often clients refetch (ms). The route caches for about half as long. */
export const STATUS_POLL_MS = 60_000

/** Game port the proxy listens on. */
export const STATUS_PORT = 25565
/** Whole ping exchange (DNS + connect + reply) must finish within this. */
export const STATUS_TIMEOUT_MS = 5_000
/** Route + CDN cache while the server answers. */
export const STATUS_CACHE_SECONDS = 30
/** Shorter cache when the ping failed, so a blip clears quickly. */
export const STATUS_OFFLINE_CACHE_SECONDS = 15

export function offlineStatus(source: ServerStatus['source'] = 'offline'): ServerStatus {
  return {
    online: false,
    players: { online: 0, max: 0 },
    version: null,
    motd: null,
    latencyMs: null,
    checkedAt: new Date().toISOString(),
    source,
  }
}

/** "1 player" / "12 players". */
export function playersLabel(n: number): string {
  return `${n.toLocaleString('en-US')} ${n === 1 ? 'player' : 'players'}`
}

/**
 * The MOTD line worth showing under the server name. The live MOTD is
 * "✦ KASADYACRAFT ✦" + "Survival | Dungeons | Plots | Shops"; the first line just
 * repeats the name, so prefer the last line.
 */
export function motdTagline(motd: string | null | undefined): string | null {
  if (!motd) return null
  const lines = motd.split('\n').filter(Boolean)
  return lines.length > 0 ? lines[lines.length - 1] : null
}
