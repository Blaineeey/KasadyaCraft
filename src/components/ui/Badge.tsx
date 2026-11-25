import type { ReactNode } from 'react'

export type BadgeTone = 'gold' | 'teal' | 'red' | 'green' | 'gray' | 'magenta'

export interface BadgeProps {
  tone?: BadgeTone
  children: ReactNode
  className?: string
}

/** Small pixel label ("NEW", "VIP+", "Coming soon"). Owner: PIXEL UI DESIGNER. */
export default function Badge({ tone = 'gold', children, className }: BadgeProps) {
  return <span className={['kc-badge', `kc-badge--${tone}`, className].filter(Boolean).join(' ')}>{children}</span>
}
