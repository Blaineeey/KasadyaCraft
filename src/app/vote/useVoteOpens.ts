'use client'

import { useCallback, useSyncExternalStore } from 'react'

/**
 * When this visitor last opened each vote link. Per-browser convenience only: stored in
 * localStorage (falls back to memory when storage is blocked), never sent anywhere. It knows a
 * link was OPENED, not that a vote counted. Same pattern as components/guides/useGuidesRead.
 * The server render always sees "nothing opened", the client fills in after hydration.
 * Owner: INTERACTIVITY ENGINEER.
 */
const KEY = 'kc-vote-opened'
const EVENT = 'kc-vote-opened-change'
const MINUTE_MS = 60_000
const HOUR_MS = 60 * MINUTE_MS

type Opens = Readonly<Record<string, number>>
const EMPTY: Opens = Object.freeze({})

let memoryRaw: string | null = null
let cacheRaw: string | null | undefined
let cacheValue: Opens = EMPTY

function getRaw(): string | null {
  try {
    return window.localStorage.getItem(KEY)
  } catch {
    return memoryRaw
  }
}

function setRaw(raw: string) {
  memoryRaw = raw
  try {
    window.localStorage.setItem(KEY, raw)
  } catch {
    // Private mode or blocked storage: the in-memory copy keeps this visit working.
  }
}

function parse(raw: string | null): Opens {
  try {
    const value: unknown = raw ? JSON.parse(raw) : null
    if (!value || typeof value !== 'object' || Array.isArray(value)) return EMPTY
    const good = Object.entries(value).filter((e): e is [string, number] => Number.isFinite(e[1]))
    return Object.freeze(Object.fromEntries(good))
  } catch {
    return EMPTY
  }
}

function snapshot(): Opens {
  const raw = getRaw()
  if (raw === cacheRaw) return cacheValue
  cacheRaw = raw
  cacheValue = parse(raw)
  return cacheValue
}

function serverSnapshot(): Opens {
  return EMPTY
}

function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange)
  window.addEventListener(EVENT, onChange)
  return () => {
    window.removeEventListener('storage', onChange)
    window.removeEventListener(EVENT, onChange)
  }
}

/* A clock that only moves once a minute, and catches up when the tab is shown again. */
function subscribeClock(onChange: () => void) {
  const id = window.setInterval(onChange, MINUTE_MS)
  document.addEventListener('visibilitychange', onChange)
  return () => {
    window.clearInterval(id)
    document.removeEventListener('visibilitychange', onChange)
  }
}

function clockSnapshot() {
  return Math.floor(Date.now() / MINUTE_MS)
}

function serverClock() {
  return 0
}

export function useVoteOpens() {
  const opens = useSyncExternalStore(subscribe, snapshot, serverSnapshot)
  const minute = useSyncExternalStore(subscribeClock, clockSnapshot, serverClock)

  const markOpened = useCallback((id: string) => {
    setRaw(JSON.stringify({ ...snapshot(), [id]: Date.now() }))
    window.dispatchEvent(new Event(EVENT))
  }, [])

  /**
   * Milliseconds until this site should take another vote, counted from when its link was opened.
   * null = never opened here, 0 = opened before and the wait is over.
   */
  const waitLeft = useCallback(
    (id: string, cooldownHours: number): number | null => {
      const at = opens[id]
      if (at === undefined || minute === 0) return null
      const now = minute * MINUTE_MS
      // A stamp from the future means the device clock was changed. Do not trust it.
      if (at > now + 2 * MINUTE_MS) return null
      const cooldown = cooldownHours * HOUR_MS
      return Math.max(0, Math.min(cooldown, at + cooldown - now))
    },
    [opens, minute],
  )

  return { waitLeft, markOpened }
}

/**
 * "23h" or, in the last hour, "40m". Rounded up, so it never promises too early (the minute taken
 * off first is the one the clock above may lag behind).
 */
export function waitLabel(ms: number): string {
  if (ms > HOUR_MS) return `${Math.ceil((ms - MINUTE_MS) / HOUR_MS)}h`
  return `${Math.max(1, Math.ceil(ms / MINUTE_MS))}m`
}
