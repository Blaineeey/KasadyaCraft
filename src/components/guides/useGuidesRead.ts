'use client'

import { useCallback, useSyncExternalStore } from 'react'

/**
 * Which starter guides this visitor has marked as read. Per-browser convenience only:
 * stored in localStorage (falls back to memory when storage is blocked), never sent anywhere.
 * The server render always sees "nothing read", the client fills in after hydration.
 * Owner: STARTER-GUIDE WRITER.
 */
const KEY = 'kc-guides-read'
const EVENT = 'kc-guides-read-change'
const EMPTY: readonly string[] = Object.freeze([])

let memoryRaw: string | null = null
let cacheRaw: string | null | undefined
let cacheValue: readonly string[] = EMPTY

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

function snapshot(): readonly string[] {
  const raw = getRaw()
  if (raw === cacheRaw) return cacheValue
  cacheRaw = raw
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : []
    cacheValue = Array.isArray(parsed) ? Object.freeze(parsed.filter((x): x is string => typeof x === 'string')) : EMPTY
  } catch {
    cacheValue = EMPTY
  }
  return cacheValue
}

function serverSnapshot(): readonly string[] {
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

export function useGuidesRead() {
  const read = useSyncExternalStore(subscribe, snapshot, serverSnapshot)

  const setRead = useCallback((slug: string, value: boolean) => {
    const current = new Set(snapshot())
    if (value) current.add(slug)
    else current.delete(slug)
    setRaw(JSON.stringify([...current]))
    window.dispatchEvent(new Event(EVENT))
  }, [])

  return { read, setRead }
}
