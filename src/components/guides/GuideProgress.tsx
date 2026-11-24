'use client'

import Link from 'next/link'
import XpBar from '@/components/ui/XpBar'
import { useGuidesRead } from './useGuidesRead'
import s from './progress.module.css'

export interface GuideProgressProps {
  /** Every guide in reading order. */
  items: { slug: string; title: string }[]
  className?: string
}

/**
 * XP-bar style "how many starter guides have I read". Counts only live in this
 * browser. Before hydration it shows 0, which is also the honest default.
 * Owner: STARTER-GUIDE WRITER.
 */
export default function GuideProgress({ items, className }: GuideProgressProps) {
  const { read } = useGuidesRead()
  const total = items.length
  const done = items.filter((g) => read.includes(g.slug)).length
  const next = items.find((g) => !read.includes(g.slug))

  return (
    <div className={[s.progress, className].filter(Boolean).join(' ')}>
      <div className={s.progressHead}>
        <span className={s.progressTitle}>Your progress</span>
        <span className={s.progressCount} aria-live="polite">
          {done}/{total}
        </span>
      </div>
      <XpBar value={done} max={total} label="Starter guides read" />
      <p className={s.progressNext}>
        {next ? (
          <>
            {done === 0 ? 'Start with ' : 'Next up: '}
            <Link href={`/guides/${next.slug}`}>{next.title}</Link>
          </>
        ) : (
          'Every guide read. You are ready for anything.'
        )}
      </p>
    </div>
  )
}
