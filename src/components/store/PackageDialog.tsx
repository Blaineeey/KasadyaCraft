'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
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
  packageUrl,
  sellsOnWeb,
  tokensToReach,
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
  const [soon, setSoon] = useState(false)
  const rank = item.rankId ? getRank(item.rankId) : undefined
  const needs = rank?.requires ? getRank(rank.requires) : undefined
  const realPrice = webPrice(item.web)
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
            ) : (
              <span className={s.status}>{statusLabel(item)}</span>
            )}
            {realPrice ? <span className={s.webPrice}>or {formatPrice(realPrice)} on the web store</span> : null}
            <p className={s.summary}>{item.summary}</p>
          </div>
        </div>

        {needs ? (
          <p className={s.needs}>
            <PixelIcon name="warning" size={16} />
            <span>
              You need <strong>{needs.name}</strong> before the menu lets you buy {rank?.name}. From no rank at all, reaching{' '}
              {rank?.name} costs {formatPrice({ currency: 'tokens', amount: tokensToReach(rank!.id) })} in total.
            </span>
          </p>
        ) : null}

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
            {item.contents && item.category === 'keys' ? (
              <p className={s.small}>Every listed reward can drop. We do not publish exact odds yet.</p>
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
        {item.status === 'in-game' && canList && item.web ? (
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
            <PixelButton variant="gold" icon="coin" onClick={() => setSoon(true)} aria-expanded={soon} aria-controls="store-item-soon">
              Buy online
            </PixelButton>
          )
        ) : null}

        <div id="store-item-soon" className={s.soonWrap} role="status">
          {soon ? <OpeningSoon item={item} /> : null}
        </div>
      </footer>
    </div>
  )
}

/** The friendly "no web store yet" state. Never a broken checkout. */
export function OpeningSoon({ item }: { item?: StoreItem }) {
  return (
    <div className={s.soon}>
      <p className={s.soonTitle}>
        <PixelIcon name="lantern" size={24} /> The web store is opening soon
      </p>
      <p>
        We do not take real money yet.{' '}
        {item?.commands?.[0] ? (
          <>
            You can get this in game right now: join <strong>{site.address}</strong>, hop into Survival and type{' '}
            <code>{item.commands[0]}</code>.
          </>
        ) : (
          <>Everything here can be bought in game right now with /store.</>
        )}{' '}
        Want to know the day the web store opens? Join our Discord.
      </p>
      <PixelButton variant="discord" icon="chat" href={site.discord}>
        Join the Discord
      </PixelButton>
    </div>
  )
}
