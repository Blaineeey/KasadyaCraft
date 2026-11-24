'use client'

import PixelIcon from '@/components/ui/PixelIcon'
import { useGuidesRead } from './useGuidesRead'
import s from './progress.module.css'

/** Small green "Read" tag on a guide card, only after this visitor marked the guide as read. */
export default function ReadMark({ slug }: { slug: string }) {
  const { read } = useGuidesRead()
  if (!read.includes(slug)) return null
  return (
    <span className={s.readMark}>
      <PixelIcon name="check" size={16} />
      Read
    </span>
  )
}
