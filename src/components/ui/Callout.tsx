import type { ReactNode } from 'react'
import PixelIcon from './PixelIcon'
import type { PixelIconName } from './pixel-icons'

export type CalloutTone = 'tip' | 'warn' | 'info' | 'lore'

export interface CalloutProps {
  tone?: CalloutTone
  title?: string
  children: ReactNode
  className?: string
}

const toneIcon: Record<CalloutTone, PixelIconName> = {
  tip: 'emerald',
  warn: 'warning',
  info: 'book',
  lore: 'scroll',
}

/** Read aloud before the title so the tone is not carried by colour alone. */
const toneLabel: Record<CalloutTone, string> = {
  tip: 'Tip',
  warn: 'Heads up',
  info: 'Good to know',
  lore: 'Story',
}

/**
 * Boxed note with its icon in an item slot.
 * tip = emerald green, warn = redstone red, info = teal, lore = parchment.
 * Owner: PIXEL UI DESIGNER.
 */
export default function Callout({ tone = 'tip', title, children, className }: CalloutProps) {
  return (
    <aside className={['kc-callout', `kc-callout--${tone}`, className].filter(Boolean).join(' ')} aria-label={title ? undefined : toneLabel[tone]}>
      <span className="kc-callout__slot" aria-hidden="true">
        <PixelIcon name={toneIcon[tone]} size={32} className="kc-callout__icon" />
      </span>
      <div className="kc-callout__body">
        {title ? (
          <p className="kc-callout__title">
            <span className="kc-sr-only">{toneLabel[tone]}: </span>
            {title}
          </p>
        ) : null}
        <div className="kc-callout__text">{children}</div>
      </div>
    </aside>
  )
}
