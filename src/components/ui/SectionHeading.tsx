import type { ReactNode } from 'react'
import PixelIcon from './PixelIcon'
import type { PixelIconName } from './pixel-icons'

export interface SectionHeadingProps {
  /** Tiny pixel label above the title. Short and concrete ("Step 1", "Economy"). */
  eyebrow?: string
  title: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  lead?: ReactNode
  align?: 'start' | 'center'
  /** Small icon shown before the eyebrow. */
  icon?: PixelIconName
  id?: string
  className?: string
}

/**
 * Heading block used at the top of sections: gold eyebrow chip, pixel title,
 * a three-block sunburst underline, optional lead paragraph.
 * Put it on a panel or a plate when the section sits on the sky.
 * Owner: PIXEL UI DESIGNER.
 */
export default function SectionHeading({ eyebrow, title, as: Tag = 'h2', lead, align = 'start', icon, id, className }: SectionHeadingProps) {
  return (
    <div className={['kc-heading', `kc-heading--${align}`, className].filter(Boolean).join(' ')}>
      {eyebrow ? (
        <span className="kc-heading__eyebrow t-label">
          {icon ? <PixelIcon name={icon} size={16} /> : null}
          {eyebrow}
        </span>
      ) : null}
      <Tag id={id} className="kc-heading__title">
        {title}
      </Tag>
      <span className="kc-heading__rule" aria-hidden="true" />
      {lead ? <p className="kc-heading__lead">{lead}</p> : null}
    </div>
  )
}
