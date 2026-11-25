import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'

/**
 * Renders the tiny inline markup used in guide/wiki strings:
 *   `/cmd`  -> <code class="kc-cmd-inline">
 *   **b**   -> <strong>
 *   [t](u)  -> link (internal via next/link; http(s) opens a new tab)
 * Anything else is plain text (React escapes it). No HTML is ever injected.
 * Owner: SITE ARCHITECT / INTEGRATOR.
 */
const TOKEN = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g

export function renderInline(text: string): ReactNode {
  const parts = text.split(TOKEN)
  return parts.map((part, i) => {
    if (!part) return null
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="kc-cmd-inline">
          {part.slice(1, -1)}
        </code>
      )
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part)
    if (link) {
      const [, label, href] = link
      if (/^https?:\/\//.test(href)) {
        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        )
      }
      return (
        <Link key={i} href={href}>
          {label}
        </Link>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

export default function RichText({ text }: { text: string }) {
  return <>{renderInline(text)}</>
}
