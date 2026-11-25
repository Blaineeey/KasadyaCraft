'use client'

import { useState } from 'react'
import { useToast } from '@/components/interactive/ToastProvider'
import PixelButton from '@/components/ui/PixelButton'
import s from './play-mocks.module.css'

/**
 * The resource-pack question players get when they enter Survival, as a practice run.
 * Survival server.properties has require-resource-pack=true, so the game (1.20.3+) shows its
 * "required pack" screen: the two vanilla lines, our resource-pack-prompt under "Message from
 * server:", and the buttons Proceed / Disconnect. Disconnect makes the game itself close the
 * connection to the proxy, so the player leaves the whole network (no fallback to the hub).
 * The hub sends no pack. Clicking only shows what would happen; nothing downloads.
 * Owner: STARTER-GUIDE WRITER.
 */
const PROMPT = 'KasadyaCraft needs its resource pack for custom items, dungeon mobs and menus.'

type Answer = 'proceed' | 'disconnect'

export default function PackPrompt() {
  const [answer, setAnswer] = useState<Answer | null>(null)
  const { toast } = useToast()

  function choose(a: Answer) {
    setAnswer(a)
    if (a === 'proceed') toast({ title: 'Pack loaded. Welcome to Survival!', icon: 'check' })
    else toast({ title: 'You left the server. Rejoin and pick Proceed!', heading: 'Oops!', icon: 'cross' })
  }

  return (
    <figure className={s.figure}>
      <div className={s.dialog}>
        <p className={s.dialogTitle}>This server requires the use of a custom resource pack.</p>
        <p className={s.dialogText}>
          <strong>Rejecting this custom resource pack will disconnect you from this server.</strong>
        </p>
        <p className={s.dialogText}>
          Message from server:
          <br />
          {PROMPT}
        </p>
        <div className={s.buttons} role="group" aria-label="Practice answer">
          <PixelButton variant="grass" onClick={() => choose('proceed')} aria-pressed={answer === 'proceed'}>
            Proceed
          </PixelButton>
          <PixelButton variant="stone" onClick={() => choose('disconnect')} aria-pressed={answer === 'disconnect'}>
            Disconnect
          </PixelButton>
        </div>
        <p
          className={`${s.result} ${answer === 'proceed' ? s.resultYes : answer === 'disconnect' ? s.resultNo : ''}`}
          aria-live="polite"
        >
          {answer === 'proceed'
            ? 'Right answer. The pack loads and you walk into Survival. It only asks once.'
            : answer === 'disconnect'
              ? 'You leave the whole server, not just Survival. Rejoin, head back into Survival and click Proceed.'
              : ''}
        </p>
      </div>
      <figcaption className={s.caption}>Practice run: try both buttons. Nothing downloads from this page.</figcaption>
    </figure>
  )
}
