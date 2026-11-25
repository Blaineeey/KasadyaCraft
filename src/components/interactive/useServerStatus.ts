'use client'

import { useCallback, useSyncExternalStore } from 'react'
import { STATUS_ENDPOINT, STATUS_POLL_MS, type ServerStatus } from '@/lib/server-status'

export interface UseServerStatus {
  status: ServerStatus | null
  loading: boolean
  /** The last request failed. `status` may still hold the previous good answer. */
  error: boolean
}

/*
 * One shared poller for the whole page. The header chip, the home hero card and
 * /play all read the same snapshot, so three widgets still mean one request.
 * Polling pauses while the tab is hidden and catches up when it comes back.
 * Owner: INTERACTIVITY ENGINEER.
 */

const INITIAL: UseServerStatus = { status: null, loading: true, error: false }

let snapshot: UseServerStatus = INITIAL
let lastFetch = 0
let inflight: Promise<void> | null = null
let timer: ReturnType<typeof setTimeout> | undefined
const listeners = new Set<() => void>()
const pollers = new Map<symbol, number>()

function emit() {
  for (const l of listeners) l()
}

function refresh(): Promise<void> {
  if (inflight) return inflight
  inflight = (async () => {
    try {
      const res = await fetch(STATUS_ENDPOINT, { cache: 'no-store', headers: { accept: 'application/json' } })
      if (!res.ok) throw new Error(String(res.status))
      const data = (await res.json()) as ServerStatus
      if (typeof data?.online !== 'boolean' || !data.players) throw new Error('bad payload')
      snapshot = { status: data, loading: false, error: false }
    } catch {
      snapshot = { status: snapshot.status, loading: false, error: true }
    } finally {
      lastFetch = Date.now()
      inflight = null
      emit()
    }
  })()
  return inflight
}

function interval(): number {
  let min = Infinity
  for (const ms of pollers.values()) min = Math.min(min, ms)
  return Number.isFinite(min) ? Math.max(min, 10_000) : STATUS_POLL_MS
}

function schedule() {
  if (timer) clearTimeout(timer)
  timer = undefined
  if (pollers.size === 0 || document.visibilityState === 'hidden') return
  const wait = Math.max(0, lastFetch + interval() - Date.now())
  timer = setTimeout(() => {
    refresh().then(schedule)
  }, wait)
}

function onVisibility() {
  schedule()
}

function subscribeWith(pollMs: number) {
  return (onChange: () => void) => {
    const key = Symbol('poller')
    listeners.add(onChange)
    pollers.set(key, pollMs)
    if (pollers.size === 1) document.addEventListener('visibilitychange', onVisibility)
    if (lastFetch === 0 && !inflight) refresh().then(schedule)
    else schedule()
    return () => {
      listeners.delete(onChange)
      pollers.delete(key)
      if (pollers.size === 0) {
        document.removeEventListener('visibilitychange', onVisibility)
        if (timer) clearTimeout(timer)
        timer = undefined
      }
    }
  }
}

const getSnapshot = () => snapshot
const getServerSnapshot = () => INITIAL

/**
 * Live server status from /api/status, shared across every component on the page.
 * `pollMs` is a ceiling: the fastest active caller wins (never faster than 10 s).
 */
export function useServerStatus(pollMs: number = STATUS_POLL_MS): UseServerStatus {
  const subscribe = useCallback((onChange: () => void) => subscribeWith(pollMs)(onChange), [pollMs])
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
