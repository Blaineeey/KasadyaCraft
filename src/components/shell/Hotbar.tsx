'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import IntentLink from '@/components/shell/IntentLink'
import PixelIcon from '@/components/ui/PixelIcon'
import { hotbar } from '@/lib/site'

function activeIndex(pathname: string): number {
  return hotbar.findIndex((item) => {
    if (item.external) return false
    if (item.href === '/') return pathname === '/'
    return pathname === item.href || pathname.startsWith(`${item.href}/`)
  })
}

function isTypingTarget(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false
  const tag = el.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable
}

/** How long the item name stays up after a page load or a slot change before it fades. */
const LABEL_MS = 1800

/**
 * Main navigation as a 9-slot hotbar fixed to the bottom of the screen.
 * - The current page's slot wears the thick white selection frame.
 * - The hovered/focused (or current) item's name floats above the bar on a
 *   dark plate, like an item name, with a one-line hint under it. As in the
 *   game it fades after about two seconds, so it never sits on page content;
 *   hovering the bar or tabbing through it brings it back (shell.css).
 * - Number keys 1-9 jump to a slot (ignored while typing or with modifier keys).
 * - Every slot is a real link with a text label for screen readers.
 * - Fits a 320px phone: slots shrink to ~32px there (token --hotbar-slot).
 * Owner: PIXEL UI DESIGNER.
 */
export default function Hotbar() {
  const pathname = usePathname()
  const router = useRouter()
  const current = activeIndex(pathname)
  const [preview, setPreview] = useState<number | null>(null)
  const shownIndex = preview ?? (current >= 0 ? current : 0)
  const shown = hotbar[shownIndex]

  // Every new page and every slot change wakes the name plate; LABEL_MS later it goes to sleep.
  // The wake happens during render (not in an effect), so the plate never flashes hidden first.
  const wakeKey = `${pathname}|${preview ?? 'current'}`
  const [label, setLabel] = useState({ key: wakeKey, asleep: false })
  if (label.key !== wakeKey) setLabel({ key: wakeKey, asleep: false })
  const asleep = label.key === wakeKey && label.asleep

  useEffect(() => {
    const t = window.setTimeout(() => setLabel((l) => (l.key === wakeKey ? { key: wakeKey, asleep: true } : l)), LABEL_MS)
    return () => window.clearTimeout(t)
  }, [wakeKey])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
      if (isTypingTarget(e.target)) return
      const n = Number(e.key)
      if (!Number.isInteger(n) || n < 1 || n > hotbar.length) return
      const item = hotbar[n - 1]
      if (item.external) window.open(item.href, '_blank', 'noopener,noreferrer')
      else router.push(item.href)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [router])

  return (
    <nav className="kc-hotbar" aria-label="Main">
      <p className="kc-hotbar__label" aria-hidden="true" key={wakeKey} data-asleep={asleep || undefined}>
        <span className="kc-hotbar__label-name">{shown.label}</span>
        <span className="kc-hotbar__label-hint">{shown.hint}</span>
      </p>
      <ul className="kc-hotbar__slots">
        {hotbar.map((item, i) => {
          const selected = i === current
          const common = {
            className: 'kc-hotbar__slot',
            'data-selected': selected || undefined,
            onMouseEnter: () => setPreview(i),
            onMouseLeave: () => setPreview(null),
            onFocus: () => setPreview(i),
            onBlur: () => setPreview(null),
          }
          const inner = (
            <>
              <PixelIcon name={item.icon} size={32} />
              <span className="kc-sr-only">
                {item.label}
                {item.external ? ' (opens in a new tab)' : ''}
              </span>
              <span className="kc-hotbar__key" aria-hidden="true">
                {i + 1}
              </span>
            </>
          )
          return (
            <li key={item.href} className="kc-hotbar__cell">
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" {...common}>
                  {inner}
                </a>
              ) : (
                // Prefetch on hover/focus/touch only: the hotbar is on every page, and viewport
                // prefetch fetched all of its routes on every view.
                <IntentLink href={item.href} aria-current={selected ? 'page' : undefined} {...common}>
                  {inner}
                </IntentLink>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
