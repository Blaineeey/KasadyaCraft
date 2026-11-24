import type { CSSProperties } from 'react'

export interface BuntingProps {
  /** Number of pennants. */
  flags?: number
  /** Sag of the string in px (how far the middle hangs down). */
  sag?: number
  /** Tiny bulbs between the flags that light up at night. */
  lights?: boolean
  className?: string
}

const colors = ['var(--kc-red)', 'var(--kc-gold)', 'var(--kc-teal)', 'var(--kc-magenta)', 'var(--kc-orange)', 'var(--kc-leaf)']

/** Height of the string at fraction f (0..1) of the width: the same parabola the SVG path draws. */
function stringY(f: number, sag: number): number {
  return 2 + 4 * sag * f * (1 - f)
}

/**
 * Festival bunting: stepped pixel pennants in the logo colours hanging from a
 * sagging string, fluttering in two frames. Optional night bulbs.
 * Pure decoration: aria-hidden, no pointer events.
 * Owner: PIXEL UI DESIGNER.
 */
export default function Bunting({ flags = 14, sag = 18, lights = false, className }: BuntingProps) {
  const n = Math.max(1, Math.round(flags))
  const h = sag + 4
  return (
    <div
      className={['kc-bunting', lights ? 'has-lights' : '', className].filter(Boolean).join(' ')}
      aria-hidden="true"
      style={{ '--sag': `${sag}px` } as CSSProperties}
    >
      <svg className="kc-bunting__string" viewBox={`0 0 100 ${h}`} preserveAspectRatio="none" focusable="false">
        <path d={`M0 2 Q50 ${2 + 2 * sag} 100 2`} vectorEffect="non-scaling-stroke" shapeRendering="crispEdges" />
      </svg>
      {Array.from({ length: n }, (_, i) => {
        const f = (i + 0.5) / n
        const style = {
          '--x': `${(f * 100).toFixed(3)}%`,
          '--y': `${Math.round(stringY(f, sag)) - 1}px`,
          '--c': colors[i % colors.length],
          '--delay': `${(i % 4) * -0.6}s`,
        } as CSSProperties
        return <span key={i} className={['kc-bunting__flag', i % 3 === 1 ? 'has-sun' : ''].filter(Boolean).join(' ')} style={style} />
      })}
      {lights
        ? Array.from({ length: n - 1 }, (_, i) => {
            const f = (i + 1) / n
            const style = { '--x': `${(f * 100).toFixed(3)}%`, '--y': `${Math.round(stringY(f, sag))}px`, '--delay': `${(i % 3) * -0.8}s` } as CSSProperties
            return <span key={`b${i}`} className="kc-bunting__bulb" style={style} />
          })
        : null}
    </div>
  )
}
