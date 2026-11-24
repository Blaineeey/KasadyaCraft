import { iconRuns } from '@/components/ui/pixel-icons'
import { guideArt, type GuideArtName } from './guide-art'

export interface GuideArtProps {
  name: GuideArtName
  /** CSS px, multiples of 16 keep the pixels crisp. */
  size?: number
  className?: string
}

/**
 * Renders one of the guide-only pixel items as crisp SVG rects. Always decorative:
 * the slot or caption around it carries the name. Owner: STARTER-GUIDE WRITER.
 */
export default function GuideArt({ name, size = 32, className }: GuideArtProps) {
  const runs = iconRuns(guideArt[name])
  return (
    <svg
      className={['kc-icon', className].filter(Boolean).join(' ')}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      focusable="false"
      aria-hidden="true"
      data-art={name}
    >
      {runs.map(([x, y, w, fill]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={1} fill={fill} />
      ))}
    </svg>
  )
}
