'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import AchievementToast, { type AdvancementFrame } from '@/components/ui/AchievementToast'
import type { PixelIconName } from '@/components/ui/pixel-icons'
import KonamiEgg from './KonamiEgg'

export interface ToastInput {
  title: string
  heading?: string
  icon?: PixelIconName
  frame?: AdvancementFrame
  /** ms on screen. Default 4000. */
  duration?: number
}

interface ToastApi {
  toast: (t: ToastInput) => void
}

const ToastContext = createContext<ToastApi>({ toast: () => {} })

/** Fire an advancement-style toast from any client component: `const { toast } = useToast()`. */
export function useToast(): ToastApi {
  return useContext(ToastContext)
}

const MAX_VISIBLE = 3
/** Matches the kc-toast-out animation in src/styles/interactive.css. */
const EXIT_MS = 320

type Item = ToastInput & { id: number; leaving: boolean }

/**
 * Queue + stack for advancement toasts (top-right, like the game).
 * - Max 3 on screen; a 4th pushes the oldest out early.
 * - Slide in (designer's .kc-toast animation), slide out (.kc-toast-slot[data-leaving]).
 * - Reduced motion: the global rule makes both instant; timing does not depend on animation events.
 * - The stack never blocks clicks on the header underneath it.
 * Also hosts the site-wide Konami easter egg, because this is the one client
 * component mounted on every page.
 * Mounted once in src/app/layout.tsx. Owner: INTERACTIVITY ENGINEER.
 */
export default function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([])
  const nextId = useRef(1)
  /** Ids on screen and not yet leaving, oldest first. Kept in a ref so bursts of toasts in one tick count correctly. */
  const active = useRef<number[]>([])
  const timers = useRef(new Map<number, ReturnType<typeof setTimeout>>())

  const dismiss = useCallback((id: number) => {
    if (!active.current.includes(id)) return
    active.current = active.current.filter((x) => x !== id)
    clearTimeout(timers.current.get(id))
    setItems((prev) => prev.map((x) => (x.id === id ? { ...x, leaving: true } : x)))
    timers.current.set(
      id,
      setTimeout(() => {
        timers.current.delete(id)
        setItems((prev) => prev.filter((x) => x.id !== id))
      }, EXIT_MS),
    )
  }, [])

  const toast = useCallback(
    (t: ToastInput) => {
      const id = nextId.current++
      active.current.push(id)
      while (active.current.length > MAX_VISIBLE) dismiss(active.current[0])
      setItems((prev) => [...prev, { ...t, id, leaving: false }])
      timers.current.set(
        id,
        setTimeout(() => dismiss(id), t.duration ?? 4000),
      )
    },
    [dismiss],
  )

  useEffect(() => {
    const map = timers.current
    return () => map.forEach(clearTimeout)
  }, [])

  const api = useMemo(() => ({ toast }), [toast])

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div className="kc-toast-stack" role="status" aria-live="polite">
        {items.map((t) => (
          <div key={t.id} className="kc-toast-slot" data-leaving={t.leaving || undefined}>
            <AchievementToast title={t.title} heading={t.heading} icon={t.icon} frame={t.frame} />
          </div>
        ))}
      </div>
      <KonamiEgg />
    </ToastContext.Provider>
  )
}
