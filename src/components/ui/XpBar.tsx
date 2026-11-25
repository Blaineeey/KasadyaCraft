import type { CSSProperties } from 'react'

export interface XpBarProps {
  value: number
  max: number
  /** Accessible label, e.g. "Guide progress". */
  label: string
  /** Show the level-style number above the bar (bright green with a black outline). */
  showValue?: boolean
  /** Number of notches drawn on the track. Default 10. */
  segments?: number
  className?: string
}

/**
 * Green, notched experience-style progress bar. The fill snaps in pixel steps.
 * Owner: PIXEL UI DESIGNER.
 */
export default function XpBar({ value, max, label, showValue = false, segments = 10, className }: XpBarProps) {
  const safeMax = max > 0 ? max : 0
  const clamped = Math.max(0, Math.min(value, safeMax))
  const pct = safeMax > 0 ? (clamped / safeMax) * 100 : 0
  return (
    <div className={['kc-xp', className].filter(Boolean).join(' ')} style={{ '--xp-seg': Math.max(1, segments) } as CSSProperties}>
      {showValue ? (
        <span className="kc-xp__value" aria-hidden="true">
          {clamped}
        </span>
      ) : null}
      <div
        className="kc-xp__track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={clamped}
        aria-valuetext={`${clamped} of ${safeMax}`}
      >
        <div className="kc-xp__fill" style={{ '--xp': `${pct}%` } as CSSProperties} />
      </div>
    </div>
  )
}
