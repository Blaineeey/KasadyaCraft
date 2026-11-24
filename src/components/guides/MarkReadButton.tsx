'use client'

import { useToast } from '@/components/interactive/ToastProvider'
import PixelButton from '@/components/ui/PixelButton'
import PixelIcon from '@/components/ui/PixelIcon'
import { useGuidesRead } from './useGuidesRead'
import s from './progress.module.css'

export interface MarkReadButtonProps {
  slug: string
  title: string
  /** Every guide slug, to know when the last one is done. */
  allSlugs: string[]
}

/**
 * "I read this guide" at the bottom of every guide. Fires an advancement toast,
 * and a challenge toast when it was the last unread guide. Owner: STARTER-GUIDE WRITER.
 */
export default function MarkReadButton({ slug, title, allSlugs }: MarkReadButtonProps) {
  const { read, setRead } = useGuidesRead()
  const { toast } = useToast()
  const isRead = read.includes(slug)

  function markRead() {
    setRead(slug, true)
    const readCount = allSlugs.filter((g) => g === slug || read.includes(g)).length
    if (readCount === allSlugs.length) {
      toast({ title: 'Read every starter guide!', frame: 'challenge', icon: 'trophy' })
    } else {
      toast({ title: `Read: ${title}`, icon: 'book' })
    }
  }

  return (
    <div className={s.mark} aria-live="polite">
      {isRead ? (
        <div className={s.done}>
          <PixelIcon name="check" size={32} />
          <span className={s.doneText}>Guide read</span>
          <button type="button" className={s.undo} onClick={() => setRead(slug, false)}>
            Mark as unread
          </button>
        </div>
      ) : (
        <PixelButton variant="grass" icon="book" onClick={markRead}>
          I read this guide
        </PixelButton>
      )}
    </div>
  )
}
