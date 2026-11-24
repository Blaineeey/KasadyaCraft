import type { CSSProperties } from 'react'

export interface SkyBackdropProps {
  /** page = fixed sky behind every page (mounted in layout). hero = extra foreground layer for the home hero. */
  variant?: 'page' | 'hero'
  className?: string
}

/*
 * Decorative pixel sky. All original art, generated here from a seeded RNG so
 * server and client always agree. Server component: zero client JS.
 *
 * page:  sky gradient (tokens), twinkling stars + square moon at night, sun by day,
 *        two layers of blocky clouds drifting at different speeds (depth parallax),
 *        and a far-off festival town with lit windows and lantern strings.
 *        Where the browser supports scroll-driven animations, scrolling the page
 *        sets the moon/sun and sinks the town a little (pure CSS, no listeners).
 * hero:  a garland of big paper lanterns that sway, plus fireflies at night.
 *
 * aria-hidden, pointer-events none, transforms/opacity only, and frozen under
 * prefers-reduced-motion (see src/styles/interactive.css).
 * Owner: INTERACTIVITY ENGINEER.
 */

function rng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/* ---------- Stars: one 2px element, many box-shadows (cheapest possible) ---- */
function starShadows(seed: number, count: number): string {
  const r = rng(seed)
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    const x = (r() * 100).toFixed(1)
    const y = (r() * 62).toFixed(1)
    const big = r() > 0.82 ? 1 : 0
    out.push(`${x}vw ${y}vh 0 ${big}px var(--star)`)
  }
  return out.join(',')
}


/* ---------- Festival town skyline ------------------------------------------ */
const W = 1600
const H = 220
const rect = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}z`
const snap = (n: number, g = 4) => Math.round(n / g) * g

interface Town {
  far: string
  near: string
  windows: string
  rope: string
  halo: string
  lanterns: [string, string, string, string]
}

function buildTown(seed: number): Town {
  const r = rng(seed)
  let far = ''
  let near = ''
  let windows = ''
  let rope = ''
  let halo = ''
  const lanterns: [string, string, string, string] = ['', '', '', '']

  // Far row: taller, simple, lighter silhouettes.
  for (let x = -16; x < W; ) {
    const w = snap(40 + r() * 64, 8)
    const h = snap(70 + r() * 70, 4)
    far += rect(x, H - h, w, h)
    if (r() > 0.6) far += rect(x + w / 4, H - h - 8, w / 2, 8)
    x += w + (r() > 0.7 ? 8 : 0)
  }

  // Near row: houses with stepped roofs, lit windows, and a bell tower near the middle.
  const tops: { x: number; y: number }[] = []
  for (let x = -8; x < W; ) {
    const tower = x > 640 && x < 760 && !tops.some((t) => t.y < 60)
    const w = tower ? 48 : snap(48 + r() * 72, 8)
    const h = tower ? 176 : snap(36 + r() * 76, 4)
    const y = H - h
    near += rect(x, y, w, h)
    // stepped roof: two shrinking slabs
    near += rect(x + 4, y - 4, w - 8, 4)
    near += rect(x + 12, y - 8, Math.max(8, w - 24), 4)
    if (tower) {
      near += rect(x + 16, y - 24, 16, 16) // belfry cap
      near += rect(x + 22, y - 36, 4, 12) // flag pole
      windows += rect(x + 18, y + 12, 12, 16) // belfry opening, lit
    }
    // window grid
    for (let wy = y + 10; wy < H - 14; wy += 14) {
      for (let wx = x + 8; wx < x + w - 10; wx += 12) {
        if (r() > 0.58) windows += rect(wx, wy, 4, 6)
      }
    }
    tops.push({ x: x + w / 2, y: y - 8 })
    x += w + (r() > 0.75 ? snap(8 + r() * 16, 8) : 0)
  }

  // Lantern strings between some neighbouring rooftops.
  let colour = 0
  for (let i = 0; i < tops.length - 1; i++) {
    if (r() > 0.55) continue
    const a = tops[i]
    const b = tops[i + 1]
    const dist = b.x - a.x
    if (dist < 40) continue
    const sag = 10 + r() * 16
    for (let px = 0; px <= dist; px += 6) {
      const t = px / dist
      const y = a.y + (b.y - a.y) * t + Math.sin(t * Math.PI) * sag
      rope += rect(Math.round(a.x + px), Math.round(y), 2, 2)
    }
    for (let px = 12; px < dist - 6; px += 18) {
      const t = px / dist
      const x = Math.round(a.x + px)
      const y = Math.round(a.y + (b.y - a.y) * t + Math.sin(t * Math.PI) * sag) + 2
      lanterns[colour % 4] += rect(x - 2, y, 6, 8)
      halo += rect(x - 6, y - 4, 14, 16)
      colour++
    }
  }

  return { far, near, windows, rope, halo, lanterns }
}

/* ---------- Hero garland ------------------------------------------------------ */
function buildGarland() {
  return Array.from({ length: 9 }, (_, i) => ({
    left: `${6 + i * 11}%`,
    drop: Math.round(Math.sin((i / 8) * Math.PI) * 34),
    hue: i % 4,
    delay: `${(i % 3) * -0.7}s`,
  }))
}

/*
 * Built once, on first render, then reused. Kept lazy (no work at import time)
 * so a client bundle that pulls this file in through the barrel pays nothing.
 */
let art:
  | { starsA: string; starsB: string; town: Town; garland: ReturnType<typeof buildGarland>; fireflies: string }
  | undefined

function getArt() {
  art ??= {
    starsA: starShadows(11, 46),
    starsB: starShadows(29, 26),
    town: buildTown(7),
    garland: buildGarland(),
    fireflies: starShadows(53, 18).replace(/var\(--star\)/g, 'var(--kc-gold)'),
  }
  return art
}

export default function SkyBackdrop({ variant = 'page', className }: SkyBackdropProps) {
  const cls = ['kc-sky', `kc-sky--${variant}`, className].filter(Boolean).join(' ')
  const { starsA: STARS_A, starsB: STARS_B, town: TOWN, garland: GARLAND, fireflies: FIREFLIES } = getArt()

  if (variant === 'hero') {
    return (
      <div className={cls} aria-hidden="true">
        <div className="kc-sky__garland">
          {GARLAND.map((l, i) => (
            <span
              key={i}
              className="kc-sky__lantern"
              data-hue={l.hue}
              style={{ '--left': l.left, '--drop': `${l.drop}px`, '--delay': l.delay } as CSSProperties}
            />
          ))}
        </div>
        <div className="kc-sky__fireflies" style={{ '--flies': FIREFLIES } as CSSProperties} />
      </div>
    )
  }

  return (
    <div className={cls} aria-hidden="true">
      <div className="kc-sky__stars" style={{ '--stars': STARS_A } as CSSProperties} />
      <div className="kc-sky__stars kc-sky__stars--twinkle" style={{ '--stars': STARS_B } as CSSProperties} />
      <div className="kc-sky__orbit">
        <span className="kc-sky__sun" />
        <span className="kc-sky__moon" />
      </div>
      <div className="kc-sky__clouds kc-sky__clouds--far" />
      <div className="kc-sky__clouds kc-sky__clouds--near" />
      <div className="kc-sky__town">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax slice" shapeRendering="crispEdges" focusable="false">
          <path className="kc-sky__town-far" d={TOWN.far} />
          <path className="kc-sky__town-halo" d={TOWN.halo} />
          <path className="kc-sky__town-near" d={TOWN.near} />
          <path className="kc-sky__town-win" d={TOWN.windows} />
          <path className="kc-sky__town-rope" d={TOWN.rope} />
          {TOWN.lanterns.map((d, i) => (
            <path key={i} className="kc-sky__town-lantern" data-hue={i} d={d} />
          ))}
        </svg>
      </div>
    </div>
  )
}
