import { NextResponse } from 'next/server'
import { site } from '@/lib/site'
import {
  STATUS_CACHE_SECONDS,
  STATUS_OFFLINE_CACHE_SECONDS,
  STATUS_PORT,
  STATUS_TIMEOUT_MS,
  offlineStatus,
  type ServerStatus,
} from '@/lib/server-status'
import { motdToText, normalisePlayers, pingJavaServer, versionName } from './ping'

/**
 * GET /api/status -> ServerStatus JSON (src/lib/server-status.ts).
 * Owner: INTERACTIVITY ENGINEER.
 *
 * - Pings play.kasadyacraft.com:25565 with the Java status protocol (./ping.ts),
 *   straight from this function. No third-party status sites.
 * - The Velocity proxy answers the ping, so the count is network-wide (hub + Survival).
 * - Two cache layers, so a thousand visitors still mean about one ping per 30 s:
 *   1. in-memory per server instance (30 s when online, 15 s when offline), with
 *      concurrent requests sharing one in-flight ping;
 *   2. the CDN, via Cache-Control s-maxage + stale-while-revalidate.
 * - Never throws: any failure becomes an honest { online: false, source: 'offline' }.
 *
 * Optional env overrides (testing only): KC_STATUS_HOST, KC_STATUS_PORT.
 */
export const runtime = 'nodejs' // raw TCP needs Node, not the edge runtime
export const dynamic = 'force-dynamic' // never pinged at build time; caching is handled below

const HOST = process.env.KC_STATUS_HOST || site.address
const PORT = Number(process.env.KC_STATUS_PORT) || STATUS_PORT

let cached: { status: ServerStatus; expires: number } | null = null
let inflight: Promise<ServerStatus> | null = null

async function pingNow(): Promise<ServerStatus> {
  try {
    const { raw, latencyMs } = await pingJavaServer(HOST, PORT, STATUS_TIMEOUT_MS)
    return {
      online: true,
      players: normalisePlayers(raw.players),
      version: versionName(raw.version),
      motd: motdToText(raw.description),
      latencyMs,
      checkedAt: new Date().toISOString(),
      source: 'live',
    }
  } catch {
    return offlineStatus('offline')
  }
}

async function getStatus(): Promise<ServerStatus> {
  if (cached && cached.expires > Date.now()) {
    return cached.status.online ? { ...cached.status, source: 'cache' } : cached.status
  }
  if (!inflight) {
    inflight = pingNow()
      .then((status) => {
        const ttl = (status.online ? STATUS_CACHE_SECONDS : STATUS_OFFLINE_CACHE_SECONDS) * 1000
        cached = { status, expires: Date.now() + ttl }
        return status
      })
      .finally(() => {
        inflight = null
      })
  }
  return inflight
}

export async function GET() {
  let body: ServerStatus
  try {
    body = await getStatus()
  } catch {
    body = offlineStatus('offline')
  }
  const sMaxAge = body.online ? STATUS_CACHE_SECONDS : STATUS_OFFLINE_CACHE_SECONDS
  return NextResponse.json(body, {
    headers: {
      'Cache-Control': `public, max-age=0, s-maxage=${sMaxAge}, stale-while-revalidate=${sMaxAge * 2}`,
    },
  })
}
