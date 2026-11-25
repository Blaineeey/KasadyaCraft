'use client'

import { useState } from 'react'
import PixelSprite from '@/components/interactive/PixelSprite'
import { useToast, type ToastInput } from '@/components/interactive/ToastProvider'
import { voteRewards } from '@/lib/vote'
import s from './vote.module.css'

/*
 * Original open ballot chest in three 20x17 layers, back to front: the lid, the loot (a ticked
 * ballot slip and a gold key), the front. Same palette keys as PixelSprite.
 */
const LID = [
  '....................',
  '....................',
  '....................',
  '....................',
  '.kkkkkkkkkkkkkkkkkk.',
  '.ksnnnnnnnnnnnnnnsk.',
  '.knddddddddddddddnk.',
  '.knddddddddddddddnk.',
  '.knddddddddddddddnk.',
  '.kkkkkkkkkkkkkkkkkk.',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
]

const LOOT = [
  '...........kkkkk....',
  '...........kyyyk....',
  '...kkkkkk..kykyk....',
  '...kmmmmk..kyyyk....',
  '...kmmmgk...kyk.....',
  '...kgmgmk...kyk.....',
  '...kmgmmk...kyyk....',
  '...kmmmmk...kyk.....',
  '...kcccck...kyyk....',
  '...kcccck...kyk.....',
  '...kcccck...kyk.....',
  '...kcccck...kyk.....',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
]

const FRONT = [
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  'kkkkkkkkkkkkkkkkkkkk',
  'ksnnnnnnyyyynnnnnnsk',
  'knnnnnnnykkynnnnnnnk',
  'knnnnnnnyyyynnnnnnnk',
  'knnnnnnnnnnnnnnnnnnk',
  'ksnnnnnnnnnnnnnnnnsk',
  'kkkkkkkkkkkkkkkkkkkk',
]

const { keysPerVote, partyVotes, partyKeys } = voteRewards

function keys(n: number) {
  return `${n} Vote crate key${n === 1 ? '' : 's'}`
}

/** One per click, then around again. All from src/lib/vote.ts. */
const FACTS: readonly ToastInput[] = [
  { icon: 'key', title: `Every vote gives you ${keys(keysPerVote)}.` },
  { icon: 'firework', title: `Every ${partyVotes} votes, everyone online on Survival gets ${keys(partyKeys)}.` },
  { icon: 'chest', title: 'Open your keys at /warp crates.' },
]

/**
 * The ballot chest on /vote: unlocked, with a key and a ballot slip sticking out. Click it and the
 * loot hops while a toast says one true thing about voting. Pure fun; the page text has it all.
 * Owner: INTERACTIVITY ENGINEER.
 */
export default function VoteChest() {
  const [clicks, setClicks] = useState(0)
  const { toast } = useToast()

  function peek() {
    toast(FACTS[clicks % FACTS.length])
    setClicks(clicks + 1)
  }

  return (
    <button type="button" className={s.chestBtn} onClick={peek}>
      <span className={s.chestArt}>
        <PixelSprite rows={LID} size={200} className={s.chestLayer} />
        <span key={clicks} className={s.loot} data-hop={clicks > 0 || undefined}>
          <PixelSprite rows={LOOT} size={200} className={s.chestLayer} />
        </span>
        <PixelSprite rows={FRONT} size={200} className={s.chestLayer} />
      </span>
      <span className={s.chestHint}>
        <span className="kc-sr-only">Open ballot chest: </span>
        What is inside?
      </span>
    </button>
  )
}
