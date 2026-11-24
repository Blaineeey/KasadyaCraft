import type { ReactNode } from 'react'
import type { ChatColor } from './TooltipCard'

export interface NameTagProps {
  /** The player name. */
  children: ReactNode
  /** Rank or role prefix shown in square brackets, e.g. "MVP+" or "Mod". */
  prefix?: string
  /** Chat colour of the prefix. Default gold. */
  tone?: ChatColor
  className?: string
}

/**
 * The floating name label over a player's head: translucent black plate,
 * white pixel text, optional coloured [prefix]. Good for staff lists and
 * rank previews. Owner: PIXEL UI DESIGNER.
 */
export default function NameTag({ children, prefix, tone = 'gold', className }: NameTagProps) {
  return (
    <span className={['kc-nametag', className].filter(Boolean).join(' ')}>
      {prefix ? (
        <span className="kc-nametag__prefix" data-color={tone}>
          [{prefix}]
        </span>
      ) : null}
      <span className="kc-nametag__name">{children}</span>
    </span>
  )
}
