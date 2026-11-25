'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import PixelIcon from './PixelIcon'

export interface CommandProps {
  /** The command exactly as typed in chat, including the slash: "/plot auto". */
  command: string
  description?: ReactNode
  /** Show a copy button. Default true. */
  copy?: boolean
  /** Render inline inside a sentence (no description, no box, no button). */
  inline?: boolean
  className?: string
}

/**
 * A line of game chat: the command in the terminal font on the translucent
 * chat-black strip, an optional description, and a GUI-style copy button.
 * If the clipboard is blocked, the command text gets selected instead so
 * Ctrl+C / long-press still works.
 * Owner: PIXEL UI DESIGNER.
 */
export default function Command({ command, description, copy = true, inline = false, className }: CommandProps) {
  const [copied, setCopied] = useState(false)
  const textRef = useRef<HTMLElement>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 1600)
    } catch {
      const el = textRef.current
      const sel = typeof window !== 'undefined' ? window.getSelection() : null
      if (el && sel) sel.selectAllChildren(el)
    }
  }

  if (inline) {
    return <code className={['kc-cmd-inline', className].filter(Boolean).join(' ')}>{command}</code>
  }

  return (
    <div className={['kc-cmd', className].filter(Boolean).join(' ')}>
      <code ref={textRef} className="kc-cmd__text">
        {command}
      </code>
      {description ? <span className="kc-cmd__desc">{description}</span> : null}
      {copy ? (
        <button type="button" className="kc-cmd__copy" onClick={onCopy} data-copied={copied || undefined}>
          <PixelIcon name={copied ? 'check' : 'copy'} size={16} />
          <span aria-hidden="true">{copied ? 'Copied!' : 'Copy'}</span>
          <span className="kc-sr-only" aria-live="polite">
            {copied ? `Copied ${command}` : `Copy ${command}`}
          </span>
        </button>
      ) : null}
    </div>
  )
}
