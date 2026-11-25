'use client'

import { useState } from 'react'
import PixelSprite from '@/components/interactive/PixelSprite'
import { useToast } from '@/components/interactive/ToastProvider'
import s from './vote.module.css'

/** Original 16x14 chained chest with a gold padlock. Palette keys: see PixelSprite. */
const CHEST = [
  '................',
  '.kkkkkkkkkkkkkk.',
  '.knnnnnnnnnnnnk.',
  '.knnnnnnnnnnnnk.',
  '.knnnnnnnnnnnnk.',
  '.kkkkkkyykkkkkk.',
  '.knnnnykkynnnnk.',
  'ssssssyyyyssssss',
  '.knnnnykkynnnnk.',
  '.knnnnyyyynnnnk.',
  '.knnnnnnnnnnnnk.',
  '.knnnnnnnnnnnnk.',
  '.kkkkkkkkkkkkkk.',
  '................',
]

/**
 * The locked "ballot box" on /vote. Rattle it and it stays locked, with a toast
 * that points to Discord. Pure fun; the real info is in the page text.
 * Owner: INTERACTIVITY ENGINEER.
 */
export default function VoteChest({ size = 112 }: { size?: number }) {
  const [tries, setTries] = useState(0)
  const { toast } = useToast()

  function rattle() {
    const n = tries + 1
    setTries(n)
    if (n === 1) toast({ icon: 'key', title: 'Still locked. Vote links go up on Discord first.' })
    else if (n === 7) toast({ frame: 'challenge', icon: 'star', title: 'Very persistent. Still locked, though!' })
  }

  return (
    <button type="button" className={s.chestBtn} onClick={rattle}>
      {/* The sprite's bottom row is empty: pull it down one sprite pixel so the chest stands on what is under it. */}
      <span
        className={s.chestArt}
        key={tries}
        data-rattle={tries > 0 || undefined}
        style={{ marginBottom: -Math.round(size / 16) }}
      >
        <PixelSprite rows={CHEST} size={size} />
      </span>
      <span className={s.chestHint}>
        <span className="kc-sr-only">Locked ballot box: </span>
        {tries === 0 ? 'Try the lock' : `Locked (tried ${tries}x)`}
      </span>
    </button>
  )
}
