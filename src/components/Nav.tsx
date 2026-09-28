'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, site } from '@/lib/site'
import { DiscordIcon } from '@/components/DiscordIcon'

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + '/')
}

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container">
        <div className="nav-row">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            {site.shortName}
            <span>Craft</span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.discord}
              className="btn btn-primary btn-sm nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon />
              Discord
            </a>
          </nav>

          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <nav id="mobile-nav" className="nav-mobile" data-open={open} aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.discord}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <DiscordIcon />
            Join Discord
          </a>
        </nav>
      </div>
    </header>
  )
}
