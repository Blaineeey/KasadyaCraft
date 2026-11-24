'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
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

/**
 * Main navigation as a 9-slot hotbar fixed to the bottom of the screen.
 * - The current page's slot wears the thick white selection frame.
 * - The hovered/focused (or current) item's name floats above the bar on a
 *   dark plate, like an item name, with a one-line hint under it.
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
      <p className="kc-hotbar__label" aria-hidden="true" key={shownIndex}>
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
                <Link href={item.href} aria-current={selected ? 'page' : undefined} {...common}>
                  {inner}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
