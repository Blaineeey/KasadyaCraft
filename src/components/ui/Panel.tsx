import type { ReactNode } from 'react'
import PixelIcon from './PixelIcon'
import type { PixelIconName } from './pixel-icons'

export type PanelMaterial = 'stone' | 'deepslate' | 'planks' | 'darkwood' | 'dirt' | 'obsidian' | 'paper' | 'gui'

export interface PanelProps {
  /**
   * stone/deepslate/obsidian/darkwood/dirt = dark panels, light text.
   * paper (guides, "book pages") and gui (inventory grey, store) = light panels, dark text.
   * planks = mid wood under a dark wash, light text (small boxes, signs).
   */
  material?: PanelMaterial
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer'
  title?: ReactNode
  titleAs?: 'h2' | 'h3' | 'h4'
  /** Small pixel icon left of the title. */
  titleIcon?: PixelIconName
  padding?: 'sm' | 'md' | 'lg'
  /** Iron nail heads in the four corners (nice on wood and signs). */
  rivets?: boolean
  id?: string
  className?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  children: ReactNode
}

/**
 * Framed block container: textured fill, 3px black outline, bevelled edge,
 * hard drop shadow. With a title it gets a darker header strip like a sign.
 * Owner: PIXEL UI DESIGNER.
 */
export default function Panel({
  material = 'deepslate',
  as: Tag = 'div',
  title,
  titleAs: Title = 'h2',
  titleIcon,
  padding = 'md',
  rivets = false,
  id,
  className,
  children,
  ...aria
}: PanelProps) {
  return (
    <Tag
      id={id}
      className={[
        'kc-panel',
        `kc-panel--${material}`,
        `kc-panel--pad-${padding}`,
        title ? 'has-title' : '',
        rivets ? 'has-rivets' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...aria}
    >
      {title ? (
        <Title className="kc-panel__title">
          {titleIcon ? <PixelIcon name={titleIcon} size={32} className="kc-panel__title-icon" /> : null}
          <span>{title}</span>
        </Title>
      ) : null}
      <div className="kc-panel__body">{children}</div>
    </Tag>
  )
}
