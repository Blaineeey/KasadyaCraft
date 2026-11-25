import Link from 'next/link'
import type { ReactNode } from 'react'
import PixelIcon from '@/components/ui/PixelIcon'
import type { PixelIconName } from '@/components/ui/pixel-icons'
import s from './WikiCard.module.css'

export interface WikiCardProps {
  href: string
  title: ReactNode
  summary?: ReactNode
  icon: PixelIconName
  /** Small label under the summary, e.g. a category or "In section: Raid chests". */
  meta?: ReactNode
  /** Plain-text title for the accessible name when `title` contains markup (highlights). */
  label?: string
}

/**
 * One wiki page as a clickable "item": icon in an inventory slot, pixel title,
 * short summary. Used by the /wiki search results and the "Read next" lists.
 * Works in server and client components (no hooks). Owner: WIKI WRITER.
 */
export default function WikiCard({ href, title, summary, icon, meta, label }: WikiCardProps) {
  return (
    <Link href={href} className={s.card} aria-label={label}>
      <span className={s.slot} aria-hidden="true">
        <PixelIcon name={icon} size={32} />
      </span>
      <span className={s.body}>
        <span className={s.title}>{title}</span>
        {summary ? <span className={s.summary}>{summary}</span> : null}
        {meta ? <span className={s.meta}>{meta}</span> : null}
      </span>
      <span className={s.arrow} aria-hidden="true">
        <PixelIcon name="arrow-right" size={16} />
      </span>
    </Link>
  )
}
