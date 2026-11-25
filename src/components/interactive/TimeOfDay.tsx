'use client'

import { useEffect, useState } from 'react'
import PixelSprite from './PixelSprite'

export type TimeOfDay = 'day' | 'night'

export const TIME_STORAGE_KEY = 'kc-time'

/*
 * Tiny original 16x16 sun and moon (drawn here so the toggle never depends on
 * an undrawn kit icon). '.' = transparent; letters map to the palette classes
 * in src/styles/interactive.css.
 */
const SUN = [
  '.......yy.......',
  '.......yy.......',
  '..yy........yy..',
  '..yy........yy..',
  '.....oooooo.....',
  '....oyyyyyyo....',
  '....oywyyyyo....',
  'yy..oyyyyyyo..yy',
  'yy..oyyyyyyo..yy',
  '....oyyyyyyo....',
  '....oyyyyyyo....',
  '.....oooooo.....',
  '..yy........yy..',
  '..yy........yy..',
  '.......yy.......',
  '.......yy.......',
]

const MOON = [
  '................',
  '................',
  '....kkkkkkkk....',
  '...kmmmmmmmmk...',
  '..kmmmmmmcmmmk..',
  '..kmccmmmmmmmk..',
  '..kmccmmmmmmmk..',
  '..kmmmmmmmccmk..',
  '..kmmmmmmmccmk..',
  '..kmmcmmmmmmmk..',
  '..kmmmmmmmmmmk..',
  '..kmmmmmccmmmk..',
  '...kmmmmmmmmk...',
  '....kkkkkkkk....',
  '................',
  '................',
]

function readTime(): TimeOfDay {
  return document.documentElement.getAttribute('data-time') === 'day' ? 'day' : 'night'
}

/**
 * Sun/moon toggle (header). The sky starts from the visitor's local clock
 * (see TimeOfDayScript) until they pick one; the pick is remembered.
 * Accessible as a toggle button: constant name "Daytime sky", aria-pressed.
 * Owner: INTERACTIVITY ENGINEER.
 */
export function TimeOfDayToggle({ className }: { className?: string }) {
  const [time, setTime] = useState<TimeOfDay>('night')

  useEffect(() => {
    setTime(readTime())
  }, [])

  function flip() {
    const next: TimeOfDay = readTime() === 'night' ? 'day' : 'night'
    const root = document.documentElement
    // Animate only on a real toggle, never on first paint.
    root.setAttribute('data-sky-anim', '')
    root.setAttribute('data-time', next)
    setTime(next)
    try {
      localStorage.setItem(TIME_STORAGE_KEY, next)
    } catch {
      // Storage blocked: the choice lasts for this page view only.
    }
  }

  return (
    <button
      type="button"
      className={['kc-timetoggle', className].filter(Boolean).join(' ')}
      data-time={time}
      onClick={flip}
      aria-pressed={time === 'day'}
      title={time === 'day' ? 'Switch to the night sky' : 'Switch to the daytime sky'}
    >
      <span className="kc-timetoggle__face kc-timetoggle__face--sun">
        <PixelSprite rows={SUN} size={32} />
      </span>
      <span className="kc-timetoggle__face kc-timetoggle__face--moon">
        <PixelSprite rows={MOON} size={32} />
      </span>
      <span className="kc-sr-only">Daytime sky</span>
    </button>
  )
}
