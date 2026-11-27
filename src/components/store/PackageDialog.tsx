'use client'

import Link from 'next/link'
import { useEffect, useRef, type CSSProperties } from 'react'
import Command from '@/components/ui/Command'
import PixelButton from '@/components/ui/PixelButton'
import PixelIcon from '@/components/ui/PixelIcon'
import Slot from '@/components/ui/Slot'
import SlotGrid from '@/components/ui/SlotGrid'
import TooltipCard from '@/components/ui/TooltipCard'
import { site } from '@/lib/site'
import {
  CHECKOUT_MODE,
  formatPrice,
  getRank,
  getStoreItem,
  listPrice,
  packageUrl,
  sellsOnWeb,
  webPrice,
  type StoreItem,
} from '@/lib/store'
import { itemTooltipLines, statusLabel } from './itemLines'
import PriceTag from './PriceTag'
import StoreSprite from './StoreSprite'
import { useStore } from './StoreProvider'
import s from './StoreDialog.module.css'

/**
 * Detail window for one package. Native <dialog>: Escape closes it, focus is
 * trapped inside and goes back to the button that opened it.
 * Owner: STORE ENGINEER.
 */
export default function PackageDialog() {
  const { openItemId, openItem } = useStore()
  const ref = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLElement | null>(null)
  const item = openItemId ? getStoreItem(openItemId) : undefined

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (item && !dialog.open) {
      opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      dialog.showModal()
    }
    if (!item && dialog.open) dialog.close()
  }, [item])

  function onClose() {
    openItem(null)
    // Native <dialog> restores focus in current browsers; this covers older Safari.
    const el = opener.current
    opener.current = null
    if (el?.isConnected) window.requestAnimationFrame(() => el.focus())
  }

  // Click on the dimmed backdrop closes the window (mouse convenience; Escape and the X button also work).
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const onClick = (e: MouseEvent) => {
      if (e.target === dialog) dialog.close()
    }
    dialog.addEventListener('click', onClick)
    return () => dialog.removeEventListener('click', onClick)
  }, [])

  return (
    <dialog ref={ref} className={s.dialog} aria-labelledby="store-item-title" onClose={onClose}>
      {item ? <ItemDetail key={item.id} item={item} onClose={() => ref.current?.close()} /> : null}
    </dialog>
  )
}

function ItemDetail({ item, onClose }: { item: StoreItem; onClose: () => void }) {
  const { add, quantityOf, setListOpen } = useStore()
  const rank = item.rankId ? getRank(item.rankId) : undefined
  const realPrice = webPrice(item.web)
  // Web-only items (ranks, the Cardael key) show their decided price even before the checkout opens.
  const webOnlyPrice = item.status === 'web' ? listPrice(item.web) : null
  const inList = quantityOf(item.id)
  const canList = item.maxQuantity > 0
  const full = canList && inList >= item.maxQuantity
  const style = { '--item-color': rank?.color ?? `var(--rarity-${item.rarity})` } as CSSProperties

  const lines = itemTooltipLines(item)

  return (
    <div className={s.frame} style={style}>
      <header className={s.head}>
        <h2 id="store-item-title" className={s.title}>
          {item.name}
        </h2>
        <button type="button" className={s.close} onClick={onClose} aria-label="Close">
          <PixelIcon name="cross" size={24} />
        </button>
      </header>

      <div className={s.body}>
        <div className={s.hero}>
          <span className={s.bigSlot}>
            <StoreSprite shape={item.sprite.shape} tone={item.sprite.tone} size={64} />
          </span>
          <div className={s.heroText}>
            {rank ? <span className={s.prefix}>{rank.prefix}</span> : null}
            {item.status === 'in-game' ? (
              <PriceTag price={item.price} from={item.priceFrom} size="lg" className={s.bigPrice} />
            ) : webOnlyPrice ? (
              <PriceTag price={webOnlyPrice} size="lg" className={s.bigPrice} />
            ) : (
              <span className={s.status}>{statusLabel(item)}</span>
            )}
            {webOnlyPrice ? (
              <span className={s.webPrice}>{CHECKOUT_MODE === 'off' ? 'On our web store, opening soon' : 'On our web store'}</span>
            ) : realPrice && item.status !== 'web' ? (
              <span className={s.webPrice}>or {formatPrice(realPrice)} on the web store</span>
            ) : null}
            <p className={s.summary}>{item.summary}</p>
          </div>
        </div>

        <div className={s.cols}>
          <section className={s.block} aria-labelledby="store-item-what">
            <h3 id="store-item-what" className={s.blockTitle}>
              {rank ? 'What you get' : item.contents ? 'What can drop' : 'What it is'}
            </h3>
            <TooltipCard title={<span className={s.tipTitle}>{item.name}</span>} rarity={item.rarity} lines={lines} />
            {item.chips?.length ? (
              <ul className={s.chips} aria-label="Tags in this set">
                {item.chips.map((c) => (
                  <li key={c.label} className={s.chip} data-color={c.color}>
                    <span className={s.swatch} aria-hidden="true" />
                    {c.label}
                  </li>
                ))}
              </ul>
            ) : null}
            {item.category === 'keys' && item.odds ? (
              <p className={s.small}>
                <strong>Chances:</strong> {item.odds}
              </p>
            ) : null}
            {item.category === 'keys' ? (
              <p className={s.small}>
                The odds for every reward in every crate are on the wiki: <Link href="/wiki/crates">Crates and keys</Link>.
              </p>
            ) : null}
          </section>

          {rank?.kit ? (
            <section className={s.block} aria-labelledby="store-item-kit">
              <h3 id="store-item-kit" className={s.blockTitle}>
                {rank.kit.name} kit, every {rank.kit.cooldown}
              </h3>
              <SlotGrid label={`${rank.kit.name} kit contents`} columns={rank.kit.contents.length > 8 ? 5 : 4}>
                {rank.kit.contents.map((k) => (
                  <Slot
                    key={k.name}
                    label={k.name}
                    art={<StoreSprite shape={k.sprite.shape} tone={k.sprite.tone} size={32} />}
                    count={k.count}
                    rarity={k.lore?.length ? 'rare' : 'common'}
                    lines={k.lore}
                  />
                ))}
              </SlotGrid>
              <ul className={s.kitList}>
                {rank.kit.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className={s.small}>
                Claim it with <code>/kit {rank.kit.name.toLowerCase()}</code>. Kit gear cannot be sold to the shop.
              </p>
            </section>
          ) : null}

          {item.alsoFrom?.length ? (
            <section className={s.block} aria-labelledby="store-item-also">
              <h3 id="store-item-also" className={s.blockTitle}>
                Also comes from
              </h3>
              <ul className={s.kitList}>
                {item.alsoFrom.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className={s.block} aria-labelledby="store-item-how">
            <h3 id="store-item-how" className={s.blockTitle}>
              How to get it
            </h3>
            <p className={s.how}>{item.howToGet}</p>
            {item.commands?.length ? (
              <div className={s.commands}>
                {item.commands.map((c) => (
                  <Command key={c} command={c} />
                ))}
              </div>
            ) : null}
          </section>
        </div>
      </div>

      <footer className={s.foot}>
        {canList ? (
          <PixelButton
            variant="grass"
            icon="chest"
            onClick={() => add(item.id)}
            disabled={full}
            aria-label={full ? `${item.name} is on your list` : `Add ${item.name} to your list`}
          >
            {full ? 'On your list' : inList > 0 ? `Add another (${inList})` : 'Add to list'}
          </PixelButton>
        ) : null}

        {/* Only packages with a web listing (ranks, keys) get a Buy button. Tags, colours and Points are in-game only. */}
        {(item.status === 'in-game' || item.status === 'web') && canList && item.web ? (
          CHECKOUT_MODE === 'link' && sellsOnWeb(item) ? (
            <PixelButton variant="gold" icon="coin" href={packageUrl(item) ?? site.discord} external>
              Buy on the web store
            </PixelButton>
          ) : CHECKOUT_MODE === 'headless' && sellsOnWeb(item) ? (
            <PixelButton
              variant="gold"
              icon="coin"
              onClick={() => {
                if (inList === 0) add(item.id)
                onClose()
                setListOpen(true)
              }}
            >
              Buy now
            </PixelButton>
          ) : (
            /* No web store yet (no Tebex URL or token set): an honest, disabled button with the reason right next to it.
               The gold Buy button above comes back by itself once NEXT_PUBLIC_TEBEX_STORE_URL or _PUBLIC_TOKEN is set. */
            <>
              <PixelButton
                variant="stone"
                icon="lantern"
                className={s.soonButton}
                aria-disabled="true"
                aria-describedby="store-item-soon-note"
              >
                Web store: soon
              </PixelButton>
              <p id="store-item-soon-note" className={s.soonNote}>
                {item.status === 'web' ? <>This one is sold only on the web store, which opens soon.</> : <>No real money yet.</>}{' '}
                {item.status === 'web' ? null : item.commands?.[0] ? (
                  <>
                    Get it in game right now: type <code>{item.commands[0]}</code> in Survival.
                  </>
                ) : (
                  <>
                    Get it in game right now with <code>/purchase</code>.
                  </>
                )}{' '}
                Want to know the day the web store opens?{' '}
                <a href={site.discord} target="_blank" rel="noopener noreferrer">
                  Ask in our Discord
                  <span className="kc-sr-only"> (opens in a new tab)</span>
                </a>
                .
              </p>
            </>
          )
        ) : null}
      </footer>
    </div>
  )
}
