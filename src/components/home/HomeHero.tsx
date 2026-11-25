import Image from 'next/image'
import { CopyIp, LiveStatus, SkyBackdrop } from '@/components/interactive'
import { Bunting, PixelButton } from '@/components/ui'
import { site } from '@/lib/site'
import MiningToy from './MiningToy'
import s from './HomeHero.module.css'

/**
 * Home hero: the festival plaza at the surface. Logo + a wooden sign on the
 * left, the "server list" entry with live players, the big copy-IP block and
 * the two ways in on the right, then the grass ground with minable blocks.
 * Owner: INTERACTIVITY ENGINEER.
 */
export default function HomeHero() {
  return (
    <section className={s.hero} aria-labelledby="home-title">
      <SkyBackdrop variant="hero" />
      <Bunting className={s.bunting} flags={18} sag={22} />

      <div className={`kc-container ${s.inner}`}>
        {/* DOM order = phone order (logo, join, sign); desktop places them with grid areas. */}
        {/*
          The logo is the LCP element on phones and desktop. `priority` preloads it from <head>,
          fetchPriority="high" makes that preload start at high priority instead of waiting for
          layout, and `sizes` matches the CSS widths (.logo: 220px, 340px from 960px) so phones
          get the 384w WebP (22 KB), not the full 500px file.
        */}
        <h1 id="home-title" className={s.title}>
          <Image
            src="/logo.png"
            alt=""
            width={360}
            height={360}
            priority
            fetchPriority="high"
            className={s.logo}
            sizes="(min-width: 960px) 340px, 220px"
          />
          <span className="kc-sr-only">{site.name}: a friendly Minecraft survival server</span>
        </h1>

        <div className={s.join}>
          <p className={s.joinLabel}>
            <span className={s.coords} aria-hidden="true">
              X 0 Y 105 Z 22
            </span>
            Join from the multiplayer screen
          </p>
          <LiveStatus variant="card" />
          <div className={s.plate}>
            <CopyIp size="lg" showHint fill />
            <div className={s.actions}>
              <PixelButton href="/play" icon="grass" size="lg">
                How to join
              </PixelButton>
              <PixelButton href="/guides" variant="wood" icon="book">
                Starter guides
              </PixelButton>
            </div>
          </div>
        </div>

        <div className={s.sign}>
          <p className={s.tagline}>{site.tagline}</p>
          <p className={s.lead}>
            Survival with your own plot, player shops, daily quests and a dungeon boss that hits back. Java Edition, free to
            join. Tara, laro tayo!
          </p>
        </div>
      </div>

      <div className={s.ground}>
        <MiningToy />
      </div>
    </section>
  )
}
