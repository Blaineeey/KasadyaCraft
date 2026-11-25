import Link from 'next/link'

export interface Crumb {
  label: string
  href?: string
}

/**
 * "Wiki > Economy" trail on a dark plate (readable over the sky).
 * The last crumb is the current page. Owner: PIXEL UI DESIGNER.
 */
export default function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={['kc-crumbs', className].filter(Boolean).join(' ')}>
      <ol>
        {items.map((c, i) => {
          const last = i === items.length - 1
          return (
            <li key={`${c.label}-${i}`}>
              {c.href && !last ? <Link href={c.href}>{c.label}</Link> : <span aria-current={last ? 'page' : undefined}>{c.label}</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
