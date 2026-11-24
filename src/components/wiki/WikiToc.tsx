import type { TocEntry } from '@/lib/content'
import s from './WikiArticle.module.css'

export interface WikiTocProps {
  entries: TocEntry[]
  /** 'aside' = sticky list next to the article (desktop), 'inline' = collapsible above it (phones). */
  variant: 'aside' | 'inline'
}

/** Table of contents built with tocFromBlocks(). Owner: WIKI WRITER. */
export default function WikiToc({ entries, variant }: WikiTocProps) {
  if (entries.length < 2) return null

  const list = (
    <ol className={s.tocList}>
      {entries.map((e) => (
        <li key={e.id} className={e.level === 3 ? s.tocSub : undefined}>
          <a href={`#${e.id}`}>{e.text}</a>
        </li>
      ))}
    </ol>
  )

  if (variant === 'inline') {
    return (
      <details className={s.tocInline}>
        <summary className={s.tocSummary}>
          On this page <span className={s.tocCount}>{entries.length}</span>
        </summary>
        <nav aria-label="On this page">{list}</nav>
      </details>
    )
  }

  return (
    <nav aria-label="On this page" className={s.tocAside}>
      <p className={s.tocTitle}>On this page</p>
      {list}
    </nav>
  )
}
