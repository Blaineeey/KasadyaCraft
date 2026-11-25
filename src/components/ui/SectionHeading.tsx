import type { ReactNode } from 'react'
import PixelIcon from './PixelIcon'
import type { PixelIconName } from './pixel-icons'
import s from './SectionHeading.module.css'

/**
 * How the section opens. Mix them on a page so sections do not all start the same way.
 * - chip:  gold eyebrow chip, pixel title, sunburst underline (the original).
 * - sign:  an oak wall sign with the title (and lead) painted on it.
 * - frame: the icon in a wooden item frame, title beside it.
 * - chat:  an in-game chat line: "[Eyebrow] Title" with a blinking cursor.
 */
export type SectionHeadingVariant = 'chip' | 'sign' | 'frame' | 'chat'

export interface SectionHeadingProps {
  /** Tiny pixel label above the title. Short and concrete ("Step 1", "Economy"). */
  eyebrow?: string
  title: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  lead?: ReactNode
  align?: 'start' | 'center'
  /** Small icon shown before the eyebrow (chip, sign), or in the item frame (frame). */
  icon?: PixelIconName
  id?: string
  className?: string
  /** Opener style. Default 'chip'. */
  variant?: SectionHeadingVariant
}

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ')

/**
 * Heading block used at the top of sections, in four openers (see SectionHeadingVariant).
 * Lead text on the open sky gets a plate; inside panels and books it does not; on a sign
 * it is painted on the board. Owner: PIXEL UI DESIGNER.
 */
export default function SectionHeading({
  eyebrow,
  title,
  as: Tag = 'h2',
  lead,
  align = 'start',
  icon,
  id,
  className,
  variant = 'chip',
}: SectionHeadingProps) {
  if (variant === 'sign') {
    return (
      <div className={cx(s.root, s.sign, align === 'center' && s.center, className)}>
        <div className={s.signBoard}>
          {eyebrow ? (
            <span className={s.signEyebrow}>
              {icon ? <PixelIcon name={icon} size={16} /> : null}
              {eyebrow}
            </span>
          ) : null}
          <Tag id={id} className={s.signTitle}>
            {title}
          </Tag>
          {lead ? <p className={s.signLead}>{lead}</p> : null}
        </div>
      </div>
    )
  }

  if (variant === 'frame') {
    return (
      <div className={cx(s.root, s.frame, align === 'center' && s.center, className)}>
        <div className={s.frameHead}>
          <span className={s.frameBox} aria-hidden="true">
            <PixelIcon name={icon ?? 'book'} size={48} />
          </span>
          <div className={s.frameText}>
            {eyebrow ? <span className={s.frameEyebrow}>{eyebrow}</span> : null}
            <Tag id={id} className={s.frameTitle}>
              {title}
            </Tag>
          </div>
        </div>
        {lead ? <p className={cx('kc-heading__lead', s.lead)}>{lead}</p> : null}
      </div>
    )
  }

  if (variant === 'chat') {
    return (
      <div className={cx(s.root, s.chat, align === 'center' && s.center, className)}>
        <div className={s.chatLine}>
          {eyebrow ? (
            <span className={s.chatTag}>
              <span aria-hidden="true">[</span>
              {eyebrow}
              <span aria-hidden="true">]</span>
            </span>
          ) : null}
          <Tag id={id} className={s.chatTitle}>
            {title}
            <span className={s.caret} aria-hidden="true" />
          </Tag>
        </div>
        {lead ? <p className={s.chatLead}>{lead}</p> : null}
      </div>
    )
  }

  return (
    <div className={cx('kc-heading', `kc-heading--${align}`, className)}>
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
