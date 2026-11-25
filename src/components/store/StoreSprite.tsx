import { memoPaths, type PixelPath } from '@/components/ui/pixel-paths'
import { spriteRuns, type SpriteRef } from './sprites'

export interface StoreSpriteProps extends SpriteRef {
  /** CSS px. Multiples of 16 keep pixels crisp. */
  size?: number
  /** Only when the sprite carries meaning on its own; otherwise it is decorative. */
  title?: string
  className?: string
}

const pathCache = new Map<string, PixelPath[]>()

/**
 * One original store sprite (rank banner, key, kit item) as crisp SVG, one <path> per colour.
 * Same rendering as the kit's PixelIcon. Owner: STORE ENGINEER.
 */
export default function StoreSprite({ shape, tone, size = 32, title, className }: StoreSpriteProps) {
  const paths = memoPaths(pathCache, `${shape}:${tone ?? ''}`, () => spriteRuns({ shape, tone }))
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
      {paths.map((p) => (
        <path key={p.fill} fill={p.fill} d={p.d} />
      ))}
    </svg>
  )
}
