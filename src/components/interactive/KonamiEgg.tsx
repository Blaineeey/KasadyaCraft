'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import { useToast } from './ToastProvider'

/**
 * Hidden easter egg: type up up down down left right left right B A anywhere
 * (not inside a text field) and the festival sky fills with pixel fireworks,
 * plus a "Challenge Complete!" toast. Reduced motion: toast only, no fireworks.
 * Mounted by ToastProvider so it lives on every page. ~1 KB, no deps.
 * Owner: INTERACTIVITY ENGINEER.
 */

const SEQUENCE = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']
const SHOW_MS = 3600
const COLORS = ['var(--kc-gold)', 'var(--kc-orange)', 'var(--kc-red)', 'var(--kc-magenta)', 'var(--kc-teal)', 'var(--kc-leaf)']
const PARTICLES = 12

interface Burst {
  x: number
  y: number
  delay: number
  color: string
  size: number
}

function makeBursts(): Burst[] {
  return Array.from({ length: 7 }, (_, i) => ({
    x: 10 + Math.random() * 80,
    y: 12 + Math.random() * 45,
    delay: i * 320 + Math.random() * 200,
    color: COLORS[i % COLORS.length],
    size: 70 + Math.random() * 70,
  }))
}

function isTyping(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false
  return el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName)
}

export default function KonamiEgg() {
  const { toast } = useToast()
  const [bursts, setBursts] = useState<Burst[] | null>(null)

  useEffect(() => {
    let pos = 0
    let hideTimer: ReturnType<typeof setTimeout> | undefined
    function onKey(e: KeyboardEvent) {
      if (e.ctrlKey || e.metaKey || e.altKey || isTyping(e.target)) return
      const key = e.key.toLowerCase()
      pos = key === SEQUENCE[pos] ? pos + 1 : key === SEQUENCE[0] ? 1 : 0
      if (pos < SEQUENCE.length) return
      pos = 0
      toast({ frame: 'challenge', icon: 'star', title: 'Old school! Fireworks over the plaza.', duration: 5000 })
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      setBursts(makeBursts())
      if (hideTimer) clearTimeout(hideTimer)
      hideTimer = setTimeout(() => setBursts(null), SHOW_MS)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      if (hideTimer) clearTimeout(hideTimer)
    }
  }, [toast])

  if (!bursts) return null
  return (
    <div className="kc-fireworks" aria-hidden="true">
      {bursts.map((b, i) => (
        <span
          key={i}
          className="kc-fireworks__burst"
          style={{ '--x': `${b.x}%`, '--y': `${b.y}%`, '--delay': `${Math.round(b.delay)}ms`, '--c': b.color, '--r': `${Math.round(b.size)}px` } as CSSProperties}
        >
          {Array.from({ length: PARTICLES }, (_, p) => (
            <span key={p} className="kc-fireworks__spark" style={{ '--a': `${(360 / PARTICLES) * p}deg` } as CSSProperties} />
          ))}
        </span>
      ))}
    </div>
  )
}
