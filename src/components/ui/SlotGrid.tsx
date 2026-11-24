import type { CSSProperties, ReactNode } from 'react'

export interface SlotGridProps {
  /** Slots per row on wide screens. 9 = a hotbar/inventory row. Wraps on phones. */
  columns?: number
  /** Accessible name for the list, e.g. "Rank perks". */
  label: string
  /** Optional visible caption, like "Inventory" above a container. */
  title?: string
  /** Slot size for the whole grid. Use 'lg' with <Slot size="lg">. */
  size?: 'md' | 'lg'
  children: ReactNode
  className?: string
}

/**
 * Inventory-style grid of <Slot>s on the grey container background.
 * Rows wrap on narrow screens (slots never shrink below a 44px tap target).
 * Owner: PIXEL UI DESIGNER.
 */
export default function SlotGrid({ columns = 9, label, title, size = 'md', children, className }: SlotGridProps) {
  return (
    <div
      className={['kc-slotgrid', `kc-slotgrid--${size}`, className].filter(Boolean).join(' ')}
      style={{ '--cols': columns } as CSSProperties}
    >
      {title ? <div className="kc-slotgrid__title">{title}</div> : null}
      <div role="list" aria-label={label} className="kc-slotgrid__cells">
        {children}
      </div>
    </div>
  )
}
