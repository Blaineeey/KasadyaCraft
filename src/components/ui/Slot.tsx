'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import ItemTooltip from './ItemTooltip'
import PixelIcon from './PixelIcon'
import type { PixelIconName } from './pixel-icons'
import type { Rarity, TooltipLine } from './TooltipCard'

export interface SlotProps {
  /** Item name. Tooltip title and accessible name. Required even for icon-only slots. */
  label: string
  icon?: PixelIconName
  /** Custom artwork instead of a PixelIcon (original art only, never Mojang textures). */
  art?: ReactNode
  count?: number
  rarity?: Rarity
  /** Tooltip lore lines. */
  lines?: TooltipLine[]
  href?: string
  onClick?: () => void
  selected?: boolean
  /** Render an empty slot (no item, no tooltip). */
  empty?: boolean
  size?: 'md' | 'lg'
  /** Show the item name under the slot (good on touch screens, where tooltips are hard to reach). */
  caption?: boolean
}

/**
 * One inventory slot: sunken grey square, item art, stack count, white hover
 * highlight, tooltip on hover/focus/tap. Epic and legendary items get a stepped
 * enchant shimmer. Always render inside <SlotGrid> (it provides the list role).
 * Owner: PIXEL UI DESIGNER.
 */
export default function Slot({
  label,
  icon,
  art,
  count,
  rarity = 'common',
  lines,
  href,
  onClick,
  selected,
  empty,
  size = 'md',
  caption = false,
}: SlotProps) {
  const cls = ['kc-slot', `kc-slot--${size}`, selected ? 'is-selected' : '', empty ? 'is-empty' : ''].filter(Boolean).join(' ')
  const cellCls = ['kc-slotgrid__cell', caption ? 'has-caption' : ''].filter(Boolean).join(' ')

  if (empty) {
    return (
      <div role="listitem" className={cellCls}>
        <span className={cls}>
          <span className="kc-sr-only">Empty slot</span>
        </span>
      </div>
    )
  }

  const stack = count && count > 1 ? count : undefined
  const content = (
    <>
      <span className="kc-slot__art">{art ?? (icon ? <PixelIcon name={icon} size={size === 'lg' ? 48 : 32} /> : null)}</span>
      {stack ? (
        <span className="kc-slot__count" aria-hidden="true">
          {stack}
        </span>
      ) : null}
      <span className="kc-sr-only">
        {label}
        {stack ? ` x${stack}` : ''}
      </span>
    </>
  )

  const inner = href ? (
    <Link href={href} className={cls} data-rarity={rarity} aria-current={selected ? 'page' : undefined}>
      {content}
    </Link>
  ) : onClick ? (
    <button type="button" className={cls} data-rarity={rarity} onClick={onClick} aria-pressed={selected}>
      {content}
    </button>
  ) : (
    <span className={cls} data-rarity={rarity}>
      {content}
    </span>
  )

  return (
    <div role="listitem" className={cellCls}>
      <ItemTooltip title={label} rarity={rarity} lines={lines} focusable={!href && !onClick}>
        {inner}
      </ItemTooltip>
      {caption ? (
        <span className="kc-slot__caption" aria-hidden="true">
          {label}
        </span>
      ) : null}
    </div>
  )
}
