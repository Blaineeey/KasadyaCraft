import { spriteRuns, type SpriteRef } from './sprites'

export interface StoreSpriteProps extends SpriteRef {
  /** CSS px. Multiples of 16 keep pixels crisp. */
  size?: number
  /** Only when the sprite carries meaning on its own; otherwise it is decorative. */
  title?: string
  className?: string
}

/**
 * One original store sprite (rank banner, key, kit item) as crisp SVG rects.
 * Same rendering as the kit's PixelIcon. Owner: STORE ENGINEER.
 */
export default function StoreSprite({ shape, tone, size = 32, title, className }: StoreSpriteProps) {
  const runs = spriteRuns({ shape, tone })
  const a11y = title ? { role: 'img' as const, 'aria-label': title } : { 'aria-hidden': true as const }
  return (
    <svg
      className={['kc-icon', className].filter(Boolean).join(' ')}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      focusable="false"
      data-sprite={shape}
      {...a11y}
    >
      {title ? <title>{title}</title> : null}
      {runs.map(([x, y, w, fill]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={1} fill={fill} />
      ))}
    </svg>
  )
}
