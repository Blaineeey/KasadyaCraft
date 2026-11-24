'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState, type ReactNode } from 'react'
import { useToast } from '@/components/interactive'
import { getStoreItem, type StoreItem } from '@/lib/store'

/**
 * Shopping-list state for /store: which items are on the list, which item's
 * detail window is open, and whether the list drawer is open.
 * The list is a PLANNER: it never charges anyone. With a Tebex store configured
 * it hands the items to Tebex's own checkout (see checkout.ts).
 * Owner: STORE ENGINEER.
 */

export interface ListLine {
  item: StoreItem
  quantity: number
}

interface StoreApi {
  lines: ListLine[]
  count: number
  quantityOf: (id: string) => number
  add: (id: string, quantity?: number) => void
  setQuantity: (id: string, quantity: number) => void
  remove: (id: string) => void
  clear: () => void
  /** Item whose detail window is open, or null. */
  openItemId: string | null
  openItem: (id: string | null) => void
  listOpen: boolean
  setListOpen: (open: boolean) => void
}

const StoreContext = createContext<StoreApi | null>(null)

export function useStore(): StoreApi {
  const api = useContext(StoreContext)
  if (!api) throw new Error('useStore must be used inside <StoreProvider>')
  return api
}

type State = Record<string, number>
type Action =
  | { type: 'add'; id: string; quantity: number }
  | { type: 'set'; id: string; quantity: number }
  | { type: 'remove'; id: string }
  | { type: 'clear' }
  | { type: 'load'; state: State }

function clampQty(id: string, quantity: number): number {
  const item = getStoreItem(id)
  if (!item || item.maxQuantity <= 0) return 0
  return Math.max(0, Math.min(item.maxQuantity, Math.floor(quantity)))
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add': {
      const q = clampQty(action.id, (state[action.id] ?? 0) + action.quantity)
      return q > 0 ? { ...state, [action.id]: q } : state
    }
    case 'set': {
      const q = clampQty(action.id, action.quantity)
      const next = { ...state }
      if (q > 0) next[action.id] = q
      else delete next[action.id]
      return next
    }
    case 'remove': {
      const next = { ...state }
      delete next[action.id]
      return next
    }
    case 'clear':
      return {}
    case 'load': {
      const next: State = {}
      for (const [id, q] of Object.entries(action.state)) {
        const qty = typeof q === 'number' ? clampQty(id, q) : 0
        if (qty > 0) next[id] = qty
      }
      return next
    }
  }
}

const STORAGE_KEY = 'kc-store-list'

export default function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {})
  const [loaded, setLoaded] = useState(false)
  const [openItemId, setOpenItemId] = useState<string | null>(null)
  const [listOpen, setListOpen] = useState(false)
  const { toast } = useToast()

  // Per-viewer convenience only: the list survives a reload on this browser.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) dispatch({ type: 'load', state: JSON.parse(raw) as State })
    } catch {
      // storage blocked or corrupt: start with an empty list
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // ignore: the list still works for this visit
    }
  }, [state, loaded])

  const add = useCallback(
    (id: string, quantity = 1) => {
      const item = getStoreItem(id)
      if (!item || item.maxQuantity <= 0) return
      const isNew = (state[id] ?? 0) === 0
      dispatch({ type: 'add', id, quantity })
      // Toast only when something first lands on the list, so fast "+1" taps do not pile toasts over the page.
      if (isNew) toast({ heading: 'Added to your list', title: item.name, icon: 'chest', frame: 'task', duration: 2500 })
    },
    [toast, state],
  )

  const api = useMemo<StoreApi>(() => {
    const lines: ListLine[] = []
    for (const [id, quantity] of Object.entries(state)) {
      const item = getStoreItem(id)
      if (item && quantity > 0) lines.push({ item, quantity })
    }
    return {
      lines,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      quantityOf: (id) => state[id] ?? 0,
      add,
      setQuantity: (id, quantity) => dispatch({ type: 'set', id, quantity }),
      remove: (id) => dispatch({ type: 'remove', id }),
      clear: () => dispatch({ type: 'clear' }),
      openItemId,
      openItem: setOpenItemId,
      listOpen,
      setListOpen,
    }
  }, [state, add, openItemId, listOpen])

  return <StoreContext.Provider value={api}>{children}</StoreContext.Provider>
}
