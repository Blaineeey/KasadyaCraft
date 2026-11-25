import { runsToPaths, type PixelPath, type PixelRun } from '@/components/ui/pixel-paths'

export interface PixelSpriteProps {
  /** Rows of equal length. '.' = transparent; every other character is a palette key (see below). */
  rows: string[]
  /** Rendered width in CSS px. Height follows the row count. */
  size?: number
  /** Give a title only if the sprite means something on its own; otherwise it is decorative. */
  title?: string
  className?: string
}

/** Sprites are module-level constants, so the converted paths are kept per rows array. */
const pathCache = new WeakMap<string[], PixelPath[]>()

function spritePaths(rows: string[]): PixelPath[] {
  const hit = pathCache.get(rows)
  if (hit) return hit
  const runs: PixelRun[] = []
  rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const c = row[x]
      let len = 1
      while (row[x + len] === c) len++
      if (c !== '.') runs.push([x, y, len, c])
      x += len
    }
  })
  const paths = runsToPaths(runs)
  pathCache.set(rows, paths)
  return paths
}

/**
 * Renders small original pixel art from strings as crisp SVG, one <path> per palette
 * key (see pixel-paths.ts). Colours come from the shared token palette in src/styles/interactive.css:
 *   y gold  o orange  r red  p magenta  v purple  t teal  g leaf  w light text
 *   k outline  s stone  d deepslate  m moon/paper  c paper-dark  n dirt
 * Server-safe (no hooks). Owner: INTERACTIVITY ENGINEER.
 */
export default function PixelSprite({ rows, size = 32, title, className }: PixelSpriteProps) {
  const w = rows[0]?.length ?? 16
  const h = rows.length
  const paths = spritePaths(rows)
  const a11y = title ? { role: 'img' as const, 'aria-label': title } : { 'aria-hidden': true as const }
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={size}
      height={Math.round((size * h) / w)}
      shapeRendering="crispEdges"
      focusable="false"
      className={['kc-sprite', className].filter(Boolean).join(' ')}
      {...a11y}
    >
      {title ? <title>{title}</title> : null}
      {paths.map((p) => (
        <path key={p.fill} d={p.d} className={`kc-px-${p.fill}`} />
      ))}
    </svg>
  )
}
