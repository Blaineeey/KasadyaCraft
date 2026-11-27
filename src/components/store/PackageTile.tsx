'use client'

import type { CSSProperties } from 'react'
import ItemTooltip from '@/components/ui/ItemTooltip'
import { getRank, priceLabel, webPrice, type StoreItem } from '@/lib/store'
import { itemTooltipLines, statusLabel } from './itemLines'
import PriceTag from './PriceTag'
import StoreSprite from './StoreSprite'
import { useStore } from './StoreProvider'
import s from './StoreBrowser.module.css'

const rarityName = { common: 'Common', uncommon: 'Uncommon', rare: 'Rare', epic: 'Epic', legendary: 'Legendary' } as const

/**
 * One package as an inventory item: a slot you can hover or focus for the
 * tooltip (real perks), click for the detail window, plus an "add to list" button.
 * Owner: STORE ENGINEER.
 */
export default function PackageTile({ item }: { item: StoreItem }) {
  const { openItem, add, quantityOf } = useStore()
  const rank = item.rankId ? getRank(item.rankId) : undefined
  const inList = quantityOf(item.id)
  const canList = item.maxQuantity > 0
  const full = canList && inList >= item.maxQuantity
  const plate = rank ? rank.prefix : rarityName[item.rarity]
  const style = { '--item-color': rank?.color ?? `var(--rarity-${item.rarity})` } as CSSProperties

  return (
    <li className={s.tile} style={style} data-status={item.status}>
      <ItemTooltip
        title={<span className={s.tipTitle}>{item.name}</span>}
        rarity={item.rarity}
        lines={itemTooltipLines(item)}
        className={s.tipWrap}
      >
        <button
          type="button"
          className={s.slotButton}
          onClick={() => openItem(item.id)}
          aria-haspopup="dialog"
          aria-label={`${item.name}, ${item.status === 'free' ? 'free' : item.status === 'web' ? (webPrice(item.web) ? `${priceLabel(webPrice(item.web))} on the web store` : 'web store, opening soon') : priceLabel(item.price)}. Show details`}
        >
          <span className={s.slot}>
            <StoreSprite shape={item.sprite.shape} tone={item.sprite.tone} size={48} />
          </span>
        </button>
      </ItemTooltip>

      <div className={s.tileBody}>
        <span className={s.plate}>{plate}</span>
        <h4 className={s.tileName}>{item.name}</h4>
        <p className={s.tileSummary}>{item.summary}</p>
      </div>

      <div className={s.tileFoot}>
        {item.status === 'in-game' ? (
          <PriceTag price={item.price} from={item.priceFrom} size="sm" className={s.tilePrice} />
        ) : item.status === 'web' && webPrice(item.web) ? (
          <PriceTag price={webPrice(item.web)} size="sm" className={s.tilePrice} />
        ) : (
          <span className={s.statusChip}>{statusLabel(item)}</span>
        )}
        <div className={s.tileActions}>
          <button type="button" className={s.miniBtn} onClick={() => openItem(item.id)} aria-haspopup="dialog">
            Details<span className="kc-sr-only"> about {item.name}</span>
          </button>
          {canList ? (
            <button
              type="button"
              className={[s.miniBtn, s.miniBtnAdd].join(' ')}
              onClick={() => add(item.id)}
              disabled={full}
              aria-label={
                full
                  ? `${item.name} is on your list`
                  : inList > 0
                    ? `Add one more ${item.name}, ${inList} on your list`
                    : `Add ${item.name} to your list`
              }
            >
              {full ? 'On list' : inList > 0 ? `+1 (${inList})` : '+ List'}
            </button>
          ) : null}
        </div>
      </div>
    </li>
  )
}
