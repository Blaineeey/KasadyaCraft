'use client'

import { useRef, useState, type CSSProperties } from 'react'
import PixelSprite from '@/components/interactive/PixelSprite'
import { useToast } from '@/components/interactive/ToastProvider'
import { PixelButton } from '@/components/ui'
import s from './DungeonTeaser.module.css'

/**
 * A pocket-sized Draedon fight that follows the real boss rules from the
 * dungeon codex (DeluxeMenus DUNGEON/Codex.yml): 2,048 health, at 80/50/25/10%
 * he floats up and rains soul lanterns, and from 50% he is immune until the
 * Lost Souls are dead. Silly on purpose; the real fight is in game.
 * Owner: INTERACTIVITY ENGINEER.
 */

const MAX_HP = 2048
const PHASES = [0.8, 0.5, 0.25, 0.1]
const SOULS = 3

const DRAEDON = [
  '................',
  '.....vvvvvv.....',
  '....vvvvvvvv....',
  '...vvkkkkkkvv...',
  '...vkwwwwwwkv...',
  '...vkwtwwtwkv...',
  '...vkwwwwwwkv...',
  '...vkkwkkwkkv...',
  '....vkwwwwkv....',
  '...vvvkkkkvvv...',
  '..vvpvvvvvvpvv..',
  '..vvpvvvvvvpvv..',
  '.vv.pvvvvvvp.vv.',
  '.k..vvvvvvvv..k.',
  '....vv....vv....',
  '....kk....kk....',
]

const SOUL = [
  '..........',
  '...tttt...',
  '..tttttt..',
  '.ttkttktt.',
  '.ttkttktt.',
  '.tttttttt.',
  '.tttttttt.',
  '.tt.tt.tt.',
  '..........',
]

export default function BossFight() {
  const [hp, setHp] = useState(MAX_HP)
  /** Which Lost Souls are still alive (fixed slots, so the others never move). */
  const [souls, setSouls] = useState<boolean[]>([])
  const [log, setLog] = useState('Draedon is waiting at the end of the lab. Hit him.')
  const [hits, setHits] = useState(0)
  const btnsRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const arenaRef = useRef<HTMLDivElement>(null)

  /** A clicked soul vanishes; move keyboard focus to the next soul, or back to Attack. */
  function refocus() {
    requestAnimationFrame(() => {
      const next = arenaRef.current?.querySelector<HTMLButtonElement>('button') ?? btnsRef.current?.querySelector('button')
      next?.focus()
    })
  }

  const alive = souls.filter(Boolean).length
  const immune = alive > 0
  const down = hp <= 0
  const pct = Math.max(0, hp / MAX_HP)

  function attack() {
    if (down) return
    if (immune) {
      setLog('He is immune! Kill the Lost Souls first.')
      return
    }
    const dmg = 123 + Math.floor(Math.random() * 102)
    const next = Math.max(0, hp - dmg)
    setHits((h) => h + 1)
    setHp(next)
    const crossed = PHASES.find((p) => hp / MAX_HP > p && next / MAX_HP <= p)
    if (next === 0) {
      setLog('Draedon is down! In game, this opens the Raid Chest room.')
      toast({ frame: 'challenge', icon: 'trophy', title: 'Beat Draedon (the website one). The real one hits harder.' })
    } else if (crossed === 0.5) {
      setSouls(Array.from({ length: SOULS }, () => true))
      setLog('Half health: Draedon is immune and calls Lost Souls. Kill them!')
    } else if (crossed) {
      setLog('He floats up and rains soul lanterns from the sky!')
    } else {
      setLog(`You hit Draedon for ${dmg.toLocaleString('en-US')}.`)
    }
  }

  function killSoul(i: number) {
    const next = souls.map((a, j) => (j === i ? false : a))
    const left = next.filter(Boolean).length
    setSouls(left > 0 ? next : [])
    setLog(left > 0 ? `Lost Soul gone. ${left} left.` : 'The Lost Souls are gone. He can be hurt again!')
    refocus()
  }

  function reset() {
    setHp(MAX_HP)
    setSouls([])
    setHits(0)
    setLog('Draedon is back. Of course he is.')
  }

  return (
    <div className={s.fight} data-immune={immune || undefined} data-down={down || undefined}>
      <div className={s.bossbar}>
        <p className={s.bossName}>
          <span aria-hidden="true">&#9760; </span>Draedon<span aria-hidden="true"> &#9760;</span>
          {immune ? <span className={s.immune}>Immune</span> : null}
        </p>
        <div
          className={s.track}
          role="progressbar"
          aria-label="Draedon health"
          aria-valuemin={0}
          aria-valuemax={MAX_HP}
          aria-valuenow={hp}
          aria-valuetext={`${hp.toLocaleString('en-US')} of ${MAX_HP.toLocaleString('en-US')} health`}
        >
          <span className={s.fill} style={{ '--hp': pct } as CSSProperties} />
        </div>
        <p className={s.hp} aria-hidden="true">
          {hp.toLocaleString('en-US')} / {MAX_HP.toLocaleString('en-US')}
        </p>
      </div>

      <div className={s.arena} ref={arenaRef}>
        <span className={s.boss} key={hits} data-hit={hits > 0 || undefined}>
          <PixelSprite rows={DRAEDON} size={96} />
        </span>
        {immune ? (
          <ul className={s.souls} aria-label="Lost Souls">
            {souls.map((isAlive, i) => (
              <li key={i} className={s.soulSlot}>
                {isAlive ? (
                  <button type="button" className={s.soul} onClick={() => killSoul(i)}>
                    <PixelSprite rows={SOUL} size={40} />
                    <span className="kc-sr-only">Hit Lost Soul {i + 1}</span>
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <p className={s.log} aria-live="polite">
        {log}
      </p>

      <div className={s.fightBtns} ref={btnsRef}>
        {down ? (
          <PixelButton variant="stone" onClick={reset}>
            Fight again
          </PixelButton>
        ) : (
          <PixelButton variant="redstone" icon="sword" onClick={attack} aria-disabled={immune || undefined}>
            Attack
          </PixelButton>
        )}
      </div>
    </div>
  )
}
