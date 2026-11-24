import { iconRuns, pixelIcons, type PixelIconName } from './pixel-icons'

export type { PixelIconName }

export interface PixelIconProps {
  name: PixelIconName
  /** Rendered size in CSS px. Use multiples of 16 (16, 32, 48, 64) so pixels stay crisp. */
  size?: number
  /** Give a title only when the icon carries meaning on its own. Otherwise it is decorative (aria-hidden). */
  title?: string
  className?: string
}

/**
 * Original pixel-art icon rendered as crisp SVG rects.
 * Owner: PIXEL UI DESIGNER.
 */
export default function PixelIcon({ name, size = 32, title, className }: PixelIconProps) {
  const def = pixelIcons[name] ?? pixelIcons.missing!
  const runs = iconRuns(def)
  const a11y = title ? { role: 'img' as const, 'aria-label': title } : { 'aria-hidden': true as const }
  return (
    <svg
      className={['kc-icon', className].filter(Boolean).join(' ')}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      focusable="false"
      data-icon={name}
      {...a11y}
    >
      {title ? <title>{title}</title> : null}
      {runs.map(([x, y, w, fill]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={1} fill={fill} />
      ))}
    </svg>
  )
}
