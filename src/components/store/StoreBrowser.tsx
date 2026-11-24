'use client'

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { formatPrice, itemsIn, storeCategories, type StoreCategoryId } from '@/lib/store'
import PackageTile from './PackageTile'
import StoreSprite from './StoreSprite'
import { useStore } from './StoreProvider'
import { listTotals } from './totals'
import s from './StoreBrowser.module.css'

const ids = storeCategories.map((c) => c.id)

function isCategory(value: string): value is StoreCategoryId {
  return (ids as string[]).includes(value)
}

/**
 * The store as a creative-inventory window: category tabs along the top,
 * items as slots inside a grey container, and a sticky shopping-list bar.
 * Deep links: /store#keys, /store#cosmetics, /store#support.
 * Owner: STORE ENGINEER.
 */
export default function StoreBrowser({ support }: { support: ReactNode }) {
  const [active, setActive] = useState<StoreCategoryId>('ranks')
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const { count, lines, setListOpen } = useStore()

  // Follow #hash links (from the wiki, home page, or the hotbar) without a page jump.
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1)
      if (isCategory(hash)) setActive(hash)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const select = useCallback((id: StoreCategoryId, focus = false) => {
    setActive(id)
    try {
      window.history.replaceState(null, '', `#${id}`)
    } catch {
      // history can be locked down in embeds; the tab still switches
    }
    if (focus) tabRefs.current[id]?.focus()
  }, [])

  function onTabKey(e: KeyboardEvent<HTMLButtonElement>) {
    const i = ids.indexOf(active)
    let next: number | null = null
    if (e.key === 'ArrowRight') next = (i + 1) % ids.length
    else if (e.key === 'ArrowLeft') next = (i - 1 + ids.length) % ids.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = ids.length - 1
    if (next !== null) {
      e.preventDefault()
      select(ids[next], true)
    }
  }

  const totals = listTotals(lines)

  return (
    <div className={s.browser}>
      <div className={s.toolbar}>
        <p className={s.toolbarText}>
          <span className="t-label">Your list</span>
          <span className={s.toolbarSummary} aria-live="polite">
            {count === 0
              ? 'Nothing yet'
              : `${count} ${count === 1 ? 'item' : 'items'}${totals.length ? ` · ${totals.map((t) => formatPrice(t)).join(' + ')}` : ''}`}
          </span>
        </p>
        <button type="button" className={s.listButton} onClick={() => setListOpen(true)} aria-haspopup="dialog">
          <StoreSprite shape="shulker" size={32} />
          <span>Open list</span>
          {count > 0 ? (
            <span className={s.listCount} aria-hidden="true">
              {count}
            </span>
          ) : null}
        </button>
      </div>

      <div className={s.windowWrap}>
        <div role="tablist" aria-label="Store sections" className={s.tabs}>
          {storeCategories.map((c) => {
            const selected = c.id === active
            return (
              <button
                key={c.id}
                ref={(el) => {
                  tabRefs.current[c.id] = el
                }}
                type="button"
                role="tab"
                id={`store-tab-${c.id}`}
                aria-selected={selected}
                aria-controls={`store-panel-${c.id}`}
                tabIndex={selected ? 0 : -1}
                className={s.tab}
                onClick={() => select(c.id)}
                onKeyDown={onTabKey}
              >
                <StoreSprite shape={c.sprite.shape} tone={c.sprite.tone} size={32} />
                <span className={s.tabLabel}>{c.name}</span>
              </button>
            )
          })}
        </div>

        <div className={s.window}>
          {storeCategories.map((c) => {
            const items = itemsIn(c.id)
            return (
              <section
                key={c.id}
                role="tabpanel"
                id={`store-panel-${c.id}`}
                aria-labelledby={`store-tab-${c.id}`}
                hidden={c.id !== active}
                className={s.panel}
                tabIndex={0}
              >
                <div className={s.panelHead}>
                  <h3 className={s.panelTitle}>{c.name}</h3>
                  <p className={s.panelBlurb}>{c.blurb}</p>
                </div>
                {items.length > 0 ? (
                  <ul className={s.grid} aria-label={`${c.name}: ${items.length} items`}>
                    {items.map((item) => (
                      <PackageTile key={item.id} item={item} />
                    ))}
                  </ul>
                ) : null}
                {c.id === 'support' ? support : null}
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
