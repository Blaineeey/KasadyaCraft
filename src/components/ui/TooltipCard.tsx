import type { ReactNode } from 'react'
import PixelIcon from './PixelIcon'
import type { PixelIconName } from './pixel-icons'

export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
export type ChatColor = 'gray' | 'dark-gray' | 'green' | 'aqua' | 'red' | 'gold' | 'yellow' | 'pink' | 'white'

/** A tooltip line: plain text (grey lore colour) or text with a chat colour. */
export type TooltipLine = string | { text: string; color?: ChatColor }

export interface TooltipCardProps {
  title: ReactNode
  rarity?: Rarity
  lines?: TooltipLine[]
  /** Extra content under the lines (e.g. a button inside a store card). */
  children?: ReactNode
  /**
   * Outer element. 'span' renders only phrasing content (spans), so the card is
   * valid inside a paragraph. ItemTooltip uses it for the floating panel.
   */
  as?: 'div' | 'article' | 'section' | 'span'
  /** Render the title as a real heading (store cards, loot lists with an outline). Default: plain text. */
  titleAs?: 'h2' | 'h3' | 'h4'
  /** Item art shown left of the title (original pixel icons only). */
  icon?: PixelIconName
  className?: string
}

/**
 * The item-tooltip LOOK (near-black panel, purple frame, notched pixel corners,
 * title coloured by rarity) as a static card. Use it inline (store cards, loot
 * lists). For a floating hover/focus tooltip use <ItemTooltip>.
 * Owner: PIXEL UI DESIGNER.
 */
export default function TooltipCard({
  title,
  rarity = 'common',
  lines = [],
  children,
  as: Tag = 'div',
  titleAs,
  icon,
  className,
}: TooltipCardProps) {
  const phrasing = Tag === 'span'
  const Title = titleAs ?? (phrasing ? 'span' : 'div')
  const Extra = phrasing ? 'span' : 'div'
  const items = lines.map((line) => (typeof line === 'string' ? { text: line } : line))

  return (
    <Tag className={['kc-tooltip', className].filter(Boolean).join(' ')} data-rarity={rarity}>
      <Title className="kc-tooltip__title">
        {icon ? <PixelIcon name={icon} size={32} className="kc-tooltip__icon" /> : null}
        <span className="kc-tooltip__name">{title}</span>
      </Title>
      {items.length > 0 ? (
        phrasing ? (
          <span className="kc-tooltip__lines">
            {items.map((l, i) => (
              <span key={i} className="kc-tooltip__line" data-color={l.color ?? 'gray'}>
                {l.text}
              </span>
            ))}
          </span>
        ) : (
          <ul className="kc-tooltip__lines">
            {items.map((l, i) => (
              <li key={i} className="kc-tooltip__line" data-color={l.color ?? 'gray'}>
                {l.text}
              </li>
            ))}
          </ul>
        )
      ) : null}
      {children ? <Extra className="kc-tooltip__extra">{children}</Extra> : null}
    </Tag>
  )
}
