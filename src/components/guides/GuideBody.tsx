import type { ReactNode } from 'react'
import ContentBlocks from '@/components/content/ContentBlocks'
import { slugify, type ContentBlock } from '@/lib/content'
import type { FigurePlacement } from './GuideFigures'
import s from './progress.module.css'

export interface GuideBodyProps {
  blocks: ContentBlock[]
  figures?: FigurePlacement[]
}

/**
 * Renders a guide body with the shared ContentBlocks renderer and drops the
 * guide's illustrations in at their sections. A figure whose heading is missing
 * goes to the end, so a renamed heading never hides it. Owner: STARTER-GUIDE WRITER.
 */
export default function GuideBody({ blocks, figures = [] }: GuideBodyProps) {
  const headingIds = blocks.map((b) => (b.type === 'h2' || b.type === 'h3' ? (b.id ?? slugify(b.text)) : null))

  const inserts = new Map<number, FigurePlacement[]>()
  for (const f of figures) {
    const h = headingIds.indexOf(f.section)
    let at = blocks.length
    if (h !== -1) {
      if (f.at === 'start') {
        at = h + 1
      } else {
        at = h + 1
        while (at < blocks.length && headingIds[at] === null) at++
      }
    }
    inserts.set(at, [...(inserts.get(at) ?? []), f])
  }

  const out: ReactNode[] = []
  let start = 0
  for (const point of [...inserts.keys()].sort((a, b) => a - b)) {
    if (point > start) out.push(<ContentBlocks key={`b${start}`} blocks={blocks.slice(start, point)} tone="light" />)
    inserts.get(point)!.forEach(({ Figure }, i) => out.push(<Figure key={`f${point}-${i}`} />))
    start = point
  }
  if (start < blocks.length) out.push(<ContentBlocks key={`b${start}`} blocks={blocks.slice(start)} tone="light" />)

  return <div className={s.body}>{out}</div>
}
