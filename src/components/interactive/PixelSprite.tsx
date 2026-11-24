export interface PixelSpriteProps {
  /** Rows of equal length. '.' = transparent; every other character is a palette key (see below). */
  rows: string[]
  /** Rendered width in CSS px. Height follows the row count. */
  size?: number
  /** Give a title only if the sprite means something on its own; otherwise it is decorative. */
  title?: string
  className?: string
}

/**
 * Renders small original pixel art from strings as crisp SVG rects (runs merged
 * per row). Colours come from the shared token palette in src/styles/interactive.css:
 *   y gold  o orange  r red  p magenta  v purple  t teal  g leaf  w light text
 *   k outline  s stone  d deepslate  m moon/paper  c paper-dark  n dirt
 * Server-safe (no hooks). Owner: INTERACTIVITY ENGINEER.
 */
export default function PixelSprite({ rows, size = 32, title, className }: PixelSpriteProps) {
  const w = rows[0]?.length ?? 16
  const h = rows.length
  const rects: { x: number; y: number; len: number; c: string }[] = []
  rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const c = row[x]
      let len = 1
      while (row[x + len] === c) len++
      if (c !== '.') rects.push({ x, y, len, c })
      x += len
    }
  })
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
      {rects.map((r) => (
        <rect key={`${r.x}-${r.y}`} x={r.x} y={r.y} width={r.len} height={1} className={`kc-px-${r.c}`} />
      ))}
    </svg>
  )
}
