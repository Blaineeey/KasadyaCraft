'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import PixelIcon from '@/components/ui/PixelIcon'

/**
 * Frame for every data table on the wiki and in the guides (ContentBlocks, RankMatrix, CrateKeyPrices).
 * Styling: src/styles/content.css, "Table frame".
 *
 * - The visible caption sits ABOVE the scroll box, so it never scrolls away or gets cut off. Put the
 *   same text in a <caption className="kc-sr-only"> inside the table for screen readers.
 * - When the table is wider than the box, a stepped shadow shows on the edge that still has columns,
 *   and a "Swipe" cue with an arrow appears next to the caption. Both go away at the end of the scroll.
 * - `stack`: under 600px the table turns into one card per row (each <td> needs a data-label), so
 *   nothing scrolls at all. Wide tables with short cells, like the rank matrix, scroll instead.
 * - `sticky`: the first column stays put while the rest scrolls (the table styles it), so the left
 *   edge shadow is skipped.
 */
export interface TableFrameProps {
  /** Accessible name of the scroll region, usually the caption text. */
  label: string
  caption?: ReactNode
  stack?: boolean
  sticky?: boolean
  className?: string
  children: ReactNode
}

type More = 'none' | 'right' | 'left' | 'both'

export default function TableFrame({ label, caption, stack, sticky, className, children }: TableFrameProps) {
  const box = useRef<HTMLDivElement>(null)
  const [more, setMore] = useState<More>('none')
  /* null until measured: keep the region focusable until we know it does not scroll. */
  const [scrolls, setScrolls] = useState<boolean | null>(null)

  useEffect(() => {
    const el = box.current
    if (!el) return
    let frame = 0
    const update = () => {
      frame = 0
      const max = el.scrollWidth - el.clientWidth
      if (max <= 2) {
        setScrolls(false)
        setMore('none')
        return
      }
      const left = el.scrollLeft > 2
      const right = el.scrollLeft < max - 2
      setScrolls(true)
      setMore(left && right ? 'both' : right ? 'right' : left ? 'left' : 'none')
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    el.addEventListener('scroll', schedule, { passive: true })
    const ro = new ResizeObserver(schedule)
    ro.observe(el)
    if (el.firstElementChild) ro.observe(el.firstElementChild)
    return () => {
      el.removeEventListener('scroll', schedule)
      ro.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      className={['kc-tframe', stack && 'kc-tframe--stack', sticky && 'kc-tframe--sticky', className].filter(Boolean).join(' ')}
      data-more={more}
    >
      {/* caption tab + cue sit ABOVE the box, so both are seen before a tall table, never cut off */}
      <div className="kc-tframe__head" aria-hidden="true">
        {caption ? <p className="kc-tframe__caption">{caption}</p> : null}
        <p className="kc-tframe__cue">
          <span className="kc-tframe__touch">Swipe</span>
          <span className="kc-tframe__mouse">Scroll</span>
          <PixelIcon name="arrow-right" size={16} className="kc-tframe__arrow" />
        </p>
      </div>
      <div className="kc-tframe__box">
        <div ref={box} className="kc-table-wrap" role="region" aria-label={label} tabIndex={scrolls === false ? undefined : 0}>
          {children}
        </div>
      </div>
    </div>
  )
}
