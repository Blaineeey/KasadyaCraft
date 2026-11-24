'use client'

import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type PointerEvent,
  type ReactElement,
  type ReactNode,
} from 'react'
import TooltipCard, { type Rarity, type TooltipLine } from './TooltipCard'

export interface ItemTooltipProps {
  title: ReactNode
  rarity?: Rarity
  lines?: TooltipLine[]
  /** The trigger. If it is not focusable itself, set `focusable` so keyboard users can open the tooltip. */
  children: ReactNode
  focusable?: boolean
  /** Preferred side. Flips automatically when there is no room. */
  placement?: 'top' | 'bottom'
  className?: string
}

type Side = 'top' | 'bottom'

interface TipState {
  open: boolean
  /** Opened by a tap: stays until the next tap, Escape or a tap outside. */
  pinned: boolean
  side: Side
  /** Horizontal nudge (px) that keeps the panel inside the viewport. */
  shift: number
}

const EDGE = 8 // min distance from the viewport edge
const GAP = 8 // distance between trigger and panel
const CLOSE_DELAY = 120 // lets the pointer cross the gap onto the panel

/**
 * Floating Minecraft-style item tooltip.
 * - Opens on mouse hover, on keyboard focus, and on tap (touch toggles it).
 * - Closes on Escape, on blur, on mouse leave, or on a tap outside.
 * - Stays inside the viewport: nudges sideways and flips top/bottom.
 * - The pointer can move onto the panel without it closing (WCAG 1.4.13).
 * - Linked to the trigger with aria-describedby.
 * Never put info ONLY in a tooltip: touch users may never open it.
 * Owner: PIXEL UI DESIGNER.
 */
export default function ItemTooltip({ title, rarity, lines, children, focusable = false, placement = 'top', className }: ItemTooltipProps) {
  const id = useId()
  const wrapRef = useRef<HTMLSpanElement>(null)
  const panelRef = useRef<HTMLSpanElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)
  const lastPointer = useRef<string>('mouse')
  const [tip, setTip] = useState<TipState>({ open: false, pinned: false, side: placement, shift: 0 })

  const place = useCallback((): Pick<TipState, 'side' | 'shift'> => {
    const wrap = wrapRef.current
    const panel = panelRef.current
    if (!wrap || !panel) return { side: placement, shift: 0 }
    const r = wrap.getBoundingClientRect()
    // The panel is laid out even while hidden (visibility), so it can be measured.
    const pw = panel.offsetWidth
    const ph = panel.offsetHeight
    const vw = document.documentElement.clientWidth
    const vh = window.innerHeight

    const left = r.left + r.width / 2 - pw / 2
    let shift = 0
    if (left < EDGE) shift = EDGE - left
    else if (left + pw > vw - EDGE) shift = vw - EDGE - (left + pw)

    let side: Side = placement
    const roomTop = r.top - GAP - ph >= EDGE
    const roomBottom = r.bottom + GAP + ph <= vh - EDGE
    if (placement === 'top' && !roomTop && roomBottom) side = 'bottom'
    if (placement === 'bottom' && !roomBottom && roomTop) side = 'top'
    return { side, shift: Math.round(shift) }
  }, [placement])

  const show = useCallback(
    (pinned: boolean) => {
      window.clearTimeout(closeTimer.current)
      setTip({ open: true, pinned, ...place() })
    },
    [place],
  )

  const hide = useCallback(() => {
    window.clearTimeout(closeTimer.current)
    setTip((t) => (t.open ? { ...t, open: false, pinned: false } : t))
  }, [])

  const hideSoon = useCallback(() => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(hide, CLOSE_DELAY)
  }, [hide])

  // Escape closes; a tap/click outside closes a pinned tooltip; resizing closes.
  useEffect(() => {
    if (!tip.open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') hide()
    }
    function onDown(e: globalThis.PointerEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) hide()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    window.addEventListener('resize', hide)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
      window.removeEventListener('resize', hide)
    }
  }, [tip.open, hide])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  const handlers = {
    onPointerDown: (e: PointerEvent) => {
      lastPointer.current = e.pointerType
    },
    onPointerEnter: (e: PointerEvent) => {
      if (e.pointerType !== 'touch') show(false)
    },
    onPointerLeave: (e: PointerEvent) => {
      if (e.pointerType !== 'touch' && !tip.pinned) hideSoon()
    },
    onClick: () => {
      if (lastPointer.current !== 'touch') return
      if (tip.open && tip.pinned) hide()
      else show(true)
    },
    onFocus: () => show(false),
    onBlur: (e: FocusEvent) => {
      if (!wrapRef.current?.contains(e.relatedTarget as Node | null)) hide()
    },
  }

  // Describe the real focus target: the wrapper when it is the focusable one,
  // otherwise the interactive child (link/button) we were given.
  let trigger: ReactNode = children
  if (!focusable && isValidElement(children)) {
    const child = children as ReactElement<{ 'aria-describedby'?: string }>
    const existing = child.props['aria-describedby']
    trigger = cloneElement(child, { 'aria-describedby': existing ? `${existing} ${id}` : id })
  }

  return (
    <span
      ref={wrapRef}
      className={['kc-tip', `kc-tip--${placement}`, className].filter(Boolean).join(' ')}
      data-open={tip.open || undefined}
      data-side={tip.side}
      style={{ '--tip-shift': `${tip.shift}px` } as CSSProperties}
      tabIndex={focusable ? 0 : undefined}
      aria-describedby={focusable ? id : undefined}
      {...handlers}
    >
      {trigger}
      <span ref={panelRef} role="tooltip" id={id} className="kc-tip__panel">
        <TooltipCard as="span" title={title} rarity={rarity} lines={lines} />
      </span>
    </span>
  )
}
