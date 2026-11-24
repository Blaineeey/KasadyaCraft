'use client'

import { useRef, useState } from 'react'
import { site } from '@/lib/site'
import { useToast } from './ToastProvider'

export interface CopyIpProps {
  address?: string
  /** sm = header, md = cards, lg = hero. */
  size?: 'sm' | 'md' | 'lg'
  /** Small helper line under the button ("Paste it in Multiplayer, Add Server"). */
  showHint?: boolean
  className?: string
}

/** Rotates so copying twice does not repeat the exact same toast. Shared by every CopyIp on the page. */
const TOAST_LINES = [
  'Address copied! See you in game.',
  'Copied. Multiplayer, Add Server, paste.',
  'Still copied. Tara, laro tayo!',
]
let copies = 0

/** Old-school copy for browsers or frames where the async Clipboard API is blocked. */
function legacyCopy(text: string): boolean {
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.top = '-1000px'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}

/**
 * The server address as a big pressable block. Click copies it and fires an
 * advancement toast. If every copy method is blocked, the address gets selected
 * and the hint tells the player to copy it by hand.
 * Owner: INTERACTIVITY ENGINEER.
 */
export default function CopyIp({ address = site.address, size = 'md', showHint = false, className }: CopyIpProps) {
  const [state, setState] = useState<'idle' | 'copied' | 'manual'>('idle')
  const addrRef = useRef<HTMLSpanElement>(null)
  const resetRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const { toast } = useToast()

  async function copy() {
    let ok = false
    try {
      await navigator.clipboard.writeText(address)
      ok = true
    } catch {
      ok = legacyCopy(address)
    }

    if (resetRef.current) clearTimeout(resetRef.current)
    if (ok) {
      setState('copied')
      toast({ title: TOAST_LINES[copies++ % TOAST_LINES.length], icon: 'grass' })
      resetRef.current = setTimeout(() => setState('idle'), 2000)
    } else {
      setState('manual')
      const el = addrRef.current
      const sel = window.getSelection()
      if (el && sel) {
        sel.removeAllRanges()
        const range = document.createRange()
        range.selectNodeContents(el)
        sel.addRange(range)
      }
    }
  }

  const hint =
    state === 'manual'
      ? 'Copy is blocked here. The address is selected: press Ctrl+C, or long-press to copy.'
      : 'Paste it in Multiplayer, Add Server'

  return (
    <div className={['kc-copyip', `kc-copyip--${size}`, className].filter(Boolean).join(' ')} data-state={state}>
      <button type="button" className="kc-copyip__btn" onClick={copy} aria-label={`Copy server address ${address}`}>
        <span ref={addrRef} className="kc-copyip__addr t-term">
          {address}
        </span>
        <span className="kc-copyip__action" aria-hidden="true">
          {state === 'copied' ? 'Copied!' : 'Copy'}
        </span>
      </button>
      {/* Success is announced by the toast (role=status); only the fallback needs its own message. */}
      <span className="kc-sr-only" aria-live="polite">
        {state === 'manual' ? hint : ''}
      </span>
      {showHint || state === 'manual' ? (
        <span className="kc-copyip__hint" data-manual={state === 'manual' || undefined}>
          {hint}
        </span>
      ) : null}
    </div>
  )
}
