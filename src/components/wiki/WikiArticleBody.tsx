import { Fragment, type ReactNode } from 'react'
import ContentBlocks from '@/components/content/ContentBlocks'
import { slugify, type ContentBlock, type WikiPage } from '@/lib/content'
import { wikiInserts } from './inserts'
import s from './WikiArticle.module.css'

/**
 * Renders a wiki page body. When a page has live inserts (ranks, crates), the
 * body is split right after the matching h2 and the insert is rendered there,
 * so the heading still appears in the table of contents. Owner: WIKI WRITER.
 */
export default function WikiArticleBody({ page }: { page: WikiPage }) {
  const inserts = wikiInserts[page.slug] ?? {}
  const parts: ReactNode[] = []
  let segment: ContentBlock[] = []

  const flush = () => {
    if (segment.length > 0) {
      parts.push(<ContentBlocks key={`seg-${parts.length}`} blocks={segment} tone="dark" />)
      segment = []
    }
  }

  for (const block of page.body) {
    segment.push(block)
    if (block.type === 'h2') {
      const id = block.id ?? slugify(block.text)
      const insert = inserts[id]
      if (insert) {
        flush()
        parts.push(<Fragment key={`ins-${id}`}>{insert()}</Fragment>)
      }
    }
  }
  flush()

  return <div className={s.body}>{parts}</div>
}
