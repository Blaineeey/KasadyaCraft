'use client'

import { useState } from 'react'
import { useToast } from '@/components/interactive/ToastProvider'
import PixelButton from '@/components/ui/PixelButton'
import s from './play-mocks.module.css'

/**
 * The resource-pack question players get when they enter Survival, as a practice run.
 * The prompt text is the one in the Survival server.properties (resource-pack-prompt).
 * Clicking only shows what would happen; nothing downloads. Owner: STARTER-GUIDE WRITER.
 */
const PROMPT = 'KasadyaCraft needs its resource pack for custom items, dungeon mobs and menus.'

export default function PackPrompt() {
  const [answer, setAnswer] = useState<'yes' | 'no' | null>(null)
  const { toast } = useToast()

  function choose(a: 'yes' | 'no') {
    setAnswer(a)
    if (a === 'yes') toast({ title: 'Pack loaded. Welcome to Survival!', icon: 'check' })
    else toast({ title: 'Sent back to the hub. Try Yes!', heading: 'Oops!', icon: 'cross' })
  }

  return (
    <figure className={s.figure}>
      <div className={s.dialog}>
        <p className={s.dialogTitle}>Resource pack</p>
        <p className={s.dialogText}>{PROMPT}</p>
        <div className={s.buttons} role="group" aria-label="Practice answer">
          <PixelButton variant="grass" onClick={() => choose('yes')} aria-pressed={answer === 'yes'}>
            Yes
          </PixelButton>
          <PixelButton variant="stone" onClick={() => choose('no')} aria-pressed={answer === 'no'}>
            No
          </PixelButton>
        </div>
        <p className={`${s.result} ${answer === 'yes' ? s.resultYes : answer === 'no' ? s.resultNo : ''}`} aria-live="polite">
          {answer === 'yes'
            ? 'Right answer. The pack loads and you walk into Survival.'
            : answer === 'no'
              ? 'Survival sends you back to the hub. Go through the portal again and pick Yes.'
              : ''}
        </p>
      </div>
      <figcaption className={s.caption}>Practice run: try both buttons. Nothing downloads from this page.</figcaption>
    </figure>
  )
}
