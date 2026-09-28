'use client'

import type { MouseEvent } from 'react'
import type { ShowcaseGame } from '@/lib/site'

/**
 * Stacked, overlapping game cards.
 * Idle: each card bobs gently on its own rhythm.
 * Hover: the card lifts, scales up, tilts toward the cursor and a spotlight
 * follows the pointer. Neighbours slide apart to make room.
 */
export default function GameStack({ games, perRow = 7 }: { games: ShowcaseGame[]; perRow?: number }) {
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
    el.style.setProperty('--ry', `${(x - 0.5) * 18}deg`)
    el.style.setProperty('--rx', `${(0.5 - y) * 14}deg`)
  }

  function onLeave(e: MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget
    el.style.removeProperty('--rx')
    el.style.removeProperty('--ry')
  }

  const rows: ShowcaseGame[][] = []
  for (let i = 0; i < games.length; i += perRow) rows.push(games.slice(i, i + perRow))

  return (
    <div className="gstack" role="list" aria-label="Games we play">
      {rows.map((row, r) => (
        <div key={r} className="gstack-row">
          {row.map((g, i) => (
            <div
              key={g.name}
              role="listitem"
              className="gcard"
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              style={{ '--d': `${((r * perRow + i) * 0.7) % 4}s` } as React.CSSProperties}
            >
              <div className="gcard-inner">
                <div className="gcard-head">
                  <div>
                    <div className="gcard-title">{g.name}</div>
                    <div className="gcard-sub">{g.sub}</div>
                  </div>
                </div>
                <div className="gcard-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.logo} alt="" loading="lazy" draggable={false} />
                </div>
                {g.hosted && (
                  <div className="gcard-foot">
                    <span className="gcard-badge">Hosted</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
