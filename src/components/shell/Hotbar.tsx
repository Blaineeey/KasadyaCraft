'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent as ReactKeyboardEvent, type MouseEvent } from 'react'
import IntentLink from '@/components/shell/IntentLink'
import Kbd from '@/components/ui/Kbd'
import PixelButton from '@/components/ui/PixelButton'
import PixelIcon, { type PixelIconName } from '@/components/ui/PixelIcon'
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

function isFocusVisible(el: Element): boolean {
  try {
    return el.matches(':focus-visible')
  } catch {
    return true
  }
}

/** How long the item name stays up after a page load or a slot change before it fades. */
const LABEL_MS = 1800

/** The 10th slot: opens the inventory, a labelled grid of every page. */
const INV_INDEX = hotbar.length
const INVENTORY = { label: 'Inventory', hint: 'Every page, with its name', external: false }
const INV_ID = 'kc-inventory'

/** Deep pages players ask for most. Shown under the grid. Routes checked against src/content. */
const handyPages: { label: string; href: string; icon: PixelIconName }[] = [
  { label: 'Your first 30 minutes', href: '/guides/first-day', icon: 'sun' },
  { label: 'Rules', href: '/wiki/rules', icon: 'shield' },
  { label: 'Commands', href: '/wiki/commands', icon: 'scroll' },
  { label: 'FAQ', href: '/wiki/faq', icon: 'question' },
  { label: 'Lab of Horrors', href: '/wiki/dungeon', icon: 'skull' },
  { label: 'Delves', href: '/wiki/delves', icon: 'lantern' },
  { label: 'Ranks', href: '/wiki/ranks', icon: 'crown' },
]

/** Arrow keys move around the 3x3 grid like a cursor in a game menu. */
const GRID_COLS = 3

/**
 * A small "leaves the site" arrow, drawn on a 6x6 grid (original art). Sits in the corner of
 * the Discord slot, like an item count, so nobody is surprised by the new tab.
 */
function ExternalBadge({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 6 6" width="12" height="12" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      <rect width="6" height="6" fill="#17121c" />
      <path fill="#ffd23f" d="M2 1h3v1H2zM3 2h2v1H3zM4 3h1v1H4zM2 3h1v1H2zM1 4h1v1H1z" />
    </svg>
  )
}

/**
 * Main navigation as a 9-slot hotbar fixed to the bottom of the screen, plus a 10th
 * "E" slot that opens the inventory.
 * - The current page's slot wears the thick white selection frame.
 * - The hovered/focused (or current) item's name floats above the bar on a
 *   dark plate, like an item name, with a one-line hint under it. As in the
 *   game it fades after about two seconds, so it never sits on page content;
 *   hovering the bar or tabbing through it brings it back (shell.css).
 * - Touch screens have no hover, so there the selected slot also keeps a tiny
 *   caption under it (shell.css, @media (hover: none)).
 * - The E slot (or the E key) opens the inventory: a full-screen grid with every
 *   page's icon, name and hint, plus a few handy deep links. Native <dialog>, so
 *   Escape closes it, focus stays inside, and the page behind is inert.
 * - Slot 9 (Discord) wears a small arrow badge: it opens a new tab.
 * - A `featured` item (Vote) sits in a gold slot, and `stack` puts a count in the bottom-right corner,
 *   like a stack of items. Both are data in src/lib/site.ts, and both stay still.
 * - Number keys 1-9 jump to a slot (ignored while typing, with modifier keys, or
 *   while another window such as a store item is open).
 * - Every slot is a real link with a text label for screen readers.
 * - Fits a 320px phone: 9 slots + the E slot shrink to ~28px there (shell.css).
 * Owner: PIXEL UI DESIGNER.
 */
export default function Hotbar() {
  const pathname = usePathname()
  const router = useRouter()
  const current = activeIndex(pathname)
  const [preview, setPreview] = useState<number | null>(null)
  const shownIndex = preview ?? (current >= 0 ? current : 0)
  const shown = shownIndex === INV_INDEX ? INVENTORY : hotbar[shownIndex]

  const [invOpen, setInvOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLElement | null>(null)

  // A new page (back/forward, a number key) closes the inventory. Adjusted during render, like the plate.
  const [invPath, setInvPath] = useState(pathname)
  if (invPath !== pathname) {
    setInvPath(pathname)
    if (invOpen) setInvOpen(false)
  }

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
      // Another window (store item, shopping list) owns the keyboard while it is open.
      const modal = document.querySelector('dialog[open]')
      if (modal && modal !== dialogRef.current) return
      if (e.key === 'e' || e.key === 'E') {
        if (e.repeat) return
        e.preventDefault()
        setInvOpen((open) => !open)
        return
      }
      const n = Number(e.key)
      if (!Number.isInteger(n) || n < 1 || n > hotbar.length) return
      const item = hotbar[n - 1]
      setInvOpen(false)
      if (item.external) window.open(item.href, '_blank', 'noopener,noreferrer')
      else router.push(item.href)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [router])

  // Keep the native dialog in step with state.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (invOpen && !dialog.open) {
      opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      dialog.showModal()
      // Start on the page you are on, so arrow keys and Tab begin from "here".
      const start =
        dialog.querySelector<HTMLElement>('.kc-inv__item[aria-current="page"]') ?? dialog.querySelector<HTMLElement>('.kc-inv__item')
      start?.focus()
    } else if (!invOpen && dialog.open) {
      dialog.close()
    }
  }, [invOpen])

  function openInventory() {
    // A tap fires mouseenter on touch screens; drop that preview so the plate shows the
    // real page again once the inventory closes.
    setPreview(null)
    setInvOpen(true)
  }

  function onDialogClose() {
    setInvOpen(false)
    // Native <dialog> hands focus back in current browsers; this covers older Safari.
    const el = opener.current
    opener.current = null
    if (el?.isConnected && (document.activeElement === null || document.activeElement === document.body)) {
      window.requestAnimationFrame(() => el.focus())
    }
  }

  // A click on the dimmed backdrop (tablet and desktop) closes the inventory.
  function onDialogClick(e: MouseEvent<HTMLDialogElement>) {
    if (e.target === e.currentTarget) setInvOpen(false)
  }

  function onGridKey(e: ReactKeyboardEvent<HTMLUListElement>) {
    const moves: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: GRID_COLS, ArrowUp: -GRID_COLS }
    if (!(e.key in moves) && e.key !== 'Home' && e.key !== 'End') return
    const items = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('.kc-inv__item'))
    const at = items.indexOf(document.activeElement as HTMLElement)
    if (at < 0) return
    e.preventDefault()
    let next = e.key === 'Home' ? 0 : e.key === 'End' ? items.length - 1 : at + moves[e.key]
    next = Math.max(0, Math.min(items.length - 1, next))
    items[next]?.focus()
  }

  const closeInventory = () => setInvOpen(false)

  return (
    <>
      <nav className="kc-hotbar" aria-label="Main">
        <p className="kc-hotbar__label" aria-hidden="true" key={wakeKey} data-asleep={asleep || undefined}>
          <span className="kc-hotbar__label-name">
            {shown.label}
            {shown.external ? <ExternalBadge className="kc-hotbar__label-ext" /> : null}
          </span>
          <span className="kc-hotbar__label-hint">
            {shown.hint}
            {shown.external ? '. Opens in a new tab' : ''}
          </span>
        </p>
        <div className="kc-hotbar__row">
          <ul className="kc-hotbar__slots">
            {hotbar.map((item, i) => {
              const selected = i === current
              const common = {
                className: 'kc-hotbar__slot',
                'data-selected': selected || undefined,
                'data-featured': item.featured || undefined,
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
                    {item.stack ? `, ${item.stack.count} ${item.stack.unit}` : ''}
                    {item.external ? ' (opens in a new tab)' : ''}
                  </span>
                  <span className="kc-hotbar__key" aria-hidden="true">
                    {i + 1}
                  </span>
                  {item.stack ? (
                    <span className="kc-hotbar__count" aria-hidden="true">
                      {item.stack.count}
                    </span>
                  ) : null}
                  {item.external ? <ExternalBadge className="kc-hotbar__ext" /> : null}
                  {selected ? (
                    <span className="kc-hotbar__cap" aria-hidden="true">
                      {item.label}
                    </span>
                  ) : null}
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
          <button
            type="button"
            className="kc-hotbar__inv"
            aria-haspopup="dialog"
            aria-expanded={invOpen}
            aria-controls={INV_ID}
            onClick={openInventory}
            onMouseEnter={() => setPreview(INV_INDEX)}
            onMouseLeave={() => setPreview(null)}
            // Only keyboard focus previews: when the inventory closes after a tap, the browser
            // hands focus back here, and the plate should keep naming the page, not "Inventory".
            onFocus={(e: FocusEvent<HTMLButtonElement>) => {
              if (isFocusVisible(e.currentTarget)) setPreview(INV_INDEX)
            }}
            onBlur={() => setPreview(null)}
          >
            <span className="kc-hotbar__slot kc-hotbar__slot--inv">
              <PixelIcon name="menu" size={32} />
              <span className="kc-hotbar__key" aria-hidden="true">
                E
              </span>
            </span>
            <span className="kc-sr-only">All pages</span>
          </button>
        </div>
      </nav>

      <dialog
        ref={dialogRef}
        id={INV_ID}
        className="kc-inv"
        aria-labelledby="kc-inv-title"
        onClose={onDialogClose}
        onClick={onDialogClick}
      >
        <div className="kc-inv__frame">
          <header className="kc-inv__head">
            <h2 id="kc-inv-title" className="kc-inv__title">
              <PixelIcon name="compass" size={32} />
              Inventory
            </h2>
            <button type="button" className="kc-inv__close" onClick={closeInventory}>
              <PixelIcon name="cross" size={16} />
              <span className="kc-sr-only">Close</span>
            </button>
          </header>
          <p className="kc-inv__lead">Every page on the site. The white frame is where you are now.</p>

          <nav className="kc-inv__nav" aria-label="All pages">
            <ul className="kc-inv__grid" onKeyDown={onGridKey}>
              {hotbar.map((item, i) => {
                const here = i === current
                const inner = (
                  <>
                    <span className="kc-inv__slot" data-selected={here || undefined} data-featured={item.featured || undefined}>
                      <PixelIcon name={item.icon} size={32} />
                      <span className="kc-inv__key" aria-hidden="true">
                        {i + 1}
                      </span>
                      {item.stack ? (
                        <span className="kc-inv__count" aria-hidden="true">
                          {item.stack.count}
                        </span>
                      ) : null}
                      {item.external ? <ExternalBadge className="kc-inv__ext" /> : null}
                    </span>
                    <span className="kc-inv__name">
                      {item.label}
                      {item.stack ? <span className="kc-sr-only">{`, ${item.stack.count} ${item.stack.unit}`}</span> : null}
                    </span>
                    <span className="kc-inv__hint">
                      {item.hint}
                      {item.external ? <span className="kc-inv__newtab">Opens in a new tab</span> : null}
                    </span>
                  </>
                )
                return (
                  <li key={item.href} className="kc-inv__cell">
                    {item.external ? (
                      <a className="kc-inv__item" href={item.href} target="_blank" rel="noopener noreferrer" onClick={closeInventory}>
                        {inner}
                      </a>
                    ) : (
                      <IntentLink
                        className="kc-inv__item"
                        href={item.href}
                        aria-current={here ? 'page' : undefined}
                        onClick={closeInventory}
                      >
                        {inner}
                      </IntentLink>
                    )}
                  </li>
                )
              })}
            </ul>

            <h3 className="kc-inv__sub">Handy pages</h3>
            <ul className="kc-inv__handy">
              {handyPages.map((page) => (
                <li key={page.href}>
                  <IntentLink
                    className="kc-inv__chip"
                    href={page.href}
                    aria-current={pathname === page.href ? 'page' : undefined}
                    onClick={closeInventory}
                  >
                    <PixelIcon name={page.icon} size={16} />
                    {page.label}
                  </IntentLink>
                </li>
              ))}
            </ul>
          </nav>

          <footer className="kc-inv__foot">
            <p className="kc-inv__keys">
              <Kbd>1</Kbd> to <Kbd>9</Kbd> jump to a page. <Kbd>E</Kbd> or <Kbd>Esc</Kbd> closes this.
            </p>
            <PixelButton variant="stone" className="kc-inv__done" onClick={closeInventory}>
              Done
            </PixelButton>
          </footer>
        </div>
      </dialog>
    </>
  )
}
