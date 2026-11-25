import { iconRuns } from '@/components/ui/pixel-icons'
import { memoPaths, type PixelPath } from '@/components/ui/pixel-paths'
import { guideArt, type GuideArtName } from './guide-art'

export interface GuideArtProps {
  name: GuideArtName
  /** CSS px, multiples of 16 keep the pixels crisp. */
  size?: number
  className?: string
}

const pathCache = new Map<GuideArtName, PixelPath[]>()

/**
 * Renders one of the guide-only pixel items as crisp SVG, one <path> per colour. Always
 * decorative: the slot or caption around it carries the name. Owner: STARTER-GUIDE WRITER.
 */
export default function GuideArt({ name, size = 32, className }: GuideArtProps) {
  const paths = memoPaths(pathCache, name, () => iconRuns(guideArt[name]))
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
      {paths.map((p) => (
        <path key={p.fill} fill={p.fill} d={p.d} />
      ))}
    </svg>
  )
}
