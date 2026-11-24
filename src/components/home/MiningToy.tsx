'use client'

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type MouseEvent } from 'react'
import { useToast } from '@/components/interactive/ToastProvider'
import { PixelIcon, type PixelIconName } from '@/components/ui'
import s from './MiningToy.module.css'

/**
 * A row of little 3D blocks on the hero's grass. Click (or hold, or press
 * Enter/Space) to mine one: the cracks grow, it pops into bits and drops an
 * item that bobs like a real dropped item, then the block grows back.
 * Purely for fun; nothing important lives here. ~2 KB of JS, CSS does the rest.
 * Owner: INTERACTIVITY ENGINEER.
 */

interface BlockDef {
  id: string
  name: string
  hits: number
  material: 'grass' | 'stone' | 'planks' | 'fiesta'
  drop: PixelIconName
  dropName: string
}

const BLOCKS: BlockDef[] = [
  { id: 'grass', name: 'grass block', hits: 3, material: 'grass', drop: 'grass', dropName: 'a grass block' },
  { id: 'stone', name: 'stone block', hits: 5, material: 'stone', drop: 'emerald', dropName: 'a lucky emerald' },
  { id: 'planks', name: 'plank block', hits: 4, material: 'planks', drop: 'key', dropName: 'a key (it only opens website crates)' },
  { id: 'fiesta', name: 'fiesta block', hits: 6, material: 'fiesta', drop: 'lantern', dropName: 'a fiesta lantern' },
]

const RESPAWN_MS = 5200
const HOLD_MS = 230
/** Fixed spread so server and client agree (no Math.random in render). */
const CHIPS = [
  [-34, -30],
  [30, -36],
  [-40, 4],
  [42, -6],
  [-18, -48],
  [16, 18],
  [-26, 22],
  [36, 26],
]

type BlockState = { hits: number; broken: boolean; bump: number }

export default function MiningToy() {
  const [blocks, setBlocks] = useState<BlockState[]>(() => BLOCKS.map(() => ({ hits: 0, broken: false, bump: 0 })))
  const [tally, setTally] = useState<Record<string, number>>({})
  const [announce, setAnnounce] = useState('')
  const { toast } = useToast()
  const holdTimer = useRef<ReturnType<typeof setInterval> | undefined>(undefined)
  const respawnTimers = useRef<ReturnType<typeof setTimeout>[]>([])
  const mined = useRef(new Set<string>())
  const blocksRef = useRef(blocks)

  useEffect(() => {
    blocksRef.current = blocks
  }, [blocks])

  useEffect(() => {
    const timers = respawnTimers.current
    return () => {
      timers.forEach(clearTimeout)
      if (holdTimer.current) clearInterval(holdTimer.current)
    }
  }, [])

  function hit(i: number) {
    const cur = blocksRef.current[i]
    if (cur.broken) return
    const def = BLOCKS[i]
    const hits = cur.hits + 1
    const done = hits >= def.hits
    // Update the ref right away so fast key-repeat hits never read a stale count.
    const next = blocksRef.current.map((b, j) => (j === i ? { hits: done ? 0 : hits, broken: done, bump: b.bump + 1 } : b))
    blocksRef.current = next
    setBlocks(next)
    if (!done) return
    stopHold()
    setTally((t) => ({ ...t, [def.drop]: (t[def.drop] ?? 0) + 1 }))
    setAnnounce(`You mined the ${def.name} and picked up ${def.dropName}.`)

    const first = mined.current.size === 0
    mined.current.add(def.id)
    if (first) {
      toast({ title: 'First block mined! The real ones are on play.kasadyacraft.com.', icon: 'pickaxe' })
    } else if (mined.current.size === BLOCKS.length && !mined.current.has('__all')) {
      mined.current.add('__all')
      toast({ frame: 'goal', title: 'Cleared the plaza. Now try it in game!', icon: 'star' })
    }

    respawnTimers.current.push(
      setTimeout(() => setBlocks((prev) => prev.map((b, j) => (j === i ? { ...b, broken: false } : b))), RESPAWN_MS),
    )
  }

  function startHold(i: number) {
    hit(i)
    stopHold()
    holdTimer.current = setInterval(() => hit(i), HOLD_MS)
  }

  function stopHold() {
    if (holdTimer.current) clearInterval(holdTimer.current)
    holdTimer.current = undefined
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault() // stop the synthetic click; key auto-repeat = holding
      hit(i)
    }
  }

  function onClick(e: MouseEvent<HTMLButtonElement>, i: number) {
    // Pointer clicks were already counted on pointerdown. detail === 0 means a
    // click from a screen reader or other assistive tech, so count it here.
    if (e.detail === 0) hit(i)
  }

  const collected = BLOCKS.filter((b) => (tally[b.drop] ?? 0) > 0)

  return (
    <div className={s.toy}>
      <p className={s.hint}>
        <span aria-hidden="true">Psst!</span> These blocks can be mined. Click or hold.
      </p>
      <ul className={s.row} aria-label="Blocks you can mine for fun">
        {BLOCKS.map((def, i) => {
          const b = blocks[i]
          const stage = b.broken ? 0 : Math.min(4, Math.ceil((b.hits / def.hits) * 4))
          return (
            <li key={def.id} className={s.cell}>
              <button
                type="button"
                className={s.blockBtn}
                data-material={def.material}
                data-broken={b.broken || undefined}
                aria-disabled={b.broken || undefined}
                aria-label={b.broken ? `${def.name}, growing back` : `Mine the ${def.name}, ${def.hits - b.hits} ${def.hits - b.hits === 1 ? 'hit' : 'hits'} left`}
                onPointerDown={(e) => {
                  if (e.button !== 0) return
                  startHold(i)
                }}
                onPointerUp={stopHold}
                onPointerLeave={stopHold}
                onPointerCancel={stopHold}
                onKeyDown={(e) => onKeyDown(e, i)}
                onClick={(e) => onClick(e, i)}
                onContextMenu={(e) => e.preventDefault()}
              >
                <span className={s.cube} data-stage={stage} data-bump={b.bump % 2} aria-hidden="true">
                  <span className={`${s.face} ${s.top}`} />
                  <span className={`${s.face} ${s.front}`} />
                  <span className={`${s.face} ${s.side}`} />
                </span>
              </button>
              {b.broken ? (
                <span className={s.burst} aria-hidden="true">
                  {CHIPS.map(([dx, dy], c) => (
                    <span key={c} className={s.chip} data-material={def.material} style={{ '--dx': `${dx}px`, '--dy': `${dy}px` } as CSSProperties} />
                  ))}
                  <span className={s.drop}>
                    <PixelIcon name={def.drop} size={32} />
                  </span>
                </span>
              ) : null}
            </li>
          )
        })}
      </ul>
      {collected.length > 0 ? (
        <div className={s.loot}>
          <span className={s.lootLabel}>Picked up</span>
          <ul className={s.lootSlots}>
            {collected.map((b) => (
              <li key={b.drop} className={s.lootSlot}>
                <PixelIcon name={b.drop} size={32} />
                <span className={s.lootCount} aria-hidden="true">
                  {tally[b.drop]}
                </span>
                <span className="kc-sr-only">
                  {b.dropName}, {tally[b.drop]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="kc-sr-only" aria-live="polite">
        {announce}
      </p>
    </div>
  )
}
