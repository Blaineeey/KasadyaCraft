import Link from 'next/link'
import { PixelButton } from '@/components/ui'
import s from './not-found.module.css'

/*
 * 404. Owner: INTERACTIVITY ENGINEER.
 * "You fell out of the world": blocks tumble into the void while void particles
 * drift up. CSS only (no client JS). Under reduced motion everything holds still.
 */

const LINKS = [
  { href: '/play', label: 'How to join' },
  { href: '/guides', label: 'Starter guides' },
  { href: '/wiki', label: 'Wiki' },
  { href: '/store', label: 'Store' },
]

export default function NotFound() {
  return (
    <section className={s.void} aria-labelledby="nf-title">
      <div className={s.fx} aria-hidden="true">
        <span className={s.particles} />
        <span className={s.particles} data-layer="2" />
        <span className={s.block} data-tex="grass" />
        <span className={s.block} data-tex="stone" />
        <span className={s.block} data-tex="planks" />
      </div>

      <div className={`kc-container kc-container--narrow ${s.inner}`}>
        <p className={s.code}>Error 404</p>
        <h1 id="nf-title" className={s.title}>
          You fell out of the world
        </h1>
        <p className={s.score}>
          Score: <span>404</span>
        </p>
        <p className={s.text}>This page does not exist, or it moved. No items lost. Respawn at the plaza, or jump somewhere useful.</p>
        <div className={s.actions}>
          <PixelButton href="/" icon="house" size="lg">
            Respawn
          </PixelButton>
          <PixelButton href="/wiki" variant="stone" icon="map">
            Open the wiki
          </PixelButton>
        </div>
        <nav aria-label="Popular pages" className={s.links}>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
