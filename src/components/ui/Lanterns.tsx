import type { CSSProperties } from 'react'
import PixelIcon from './PixelIcon'

export interface LanternsProps {
  /** How many lanterns hang in the row. */
  count?: number
  /** lantern = paper lanterns, parol = Filipino star lanterns, mixed = alternate. */
  kind?: 'lantern' | 'parol' | 'mixed'
  /** Icon size in px (multiples of 16). */
  size?: 32 | 48 | 64
  className?: string
}

/* Hand-picked string lengths so the row looks hung by a person, not by a formula. */
const drops = [18, 42, 28, 54, 22, 46, 34, 14]

/**
 * A row of hanging festival lanterns. At night they glow with square,
 * stepped halos (no blur); in daylight they are unlit. They sway in two
 * frames, and stay still under prefers-reduced-motion.
 * Pure decoration: aria-hidden, no pointer events.
 * Owner: PIXEL UI DESIGNER.
 */
export default function Lanterns({ count = 4, kind = 'mixed', size = 32, className }: LanternsProps) {
  return (
    <div className={['kc-lanterns', className].filter(Boolean).join(' ')} aria-hidden="true">
      {Array.from({ length: Math.max(1, count) }, (_, i) => {
        const icon = kind === 'mixed' ? (i % 2 === 0 ? 'lantern' : 'parol') : kind
        const style = {
          '--drop': `${drops[i % drops.length]}px`,
          '--delay': `${(i % 3) * -0.7}s`,
          '--size': `${size}px`,
        } as CSSProperties
        return (
          <span key={i} className="kc-lantern" style={style}>
            <PixelIcon name={icon} size={size} />
          </span>
        )
      })}
    </div>
  )
}
