import Image from 'next/image'
import Link from 'next/link'
import { CopyIp, LiveStatus, SkyBackdrop } from '@/components/interactive'
import StoreSprite from '@/components/store/StoreSprite'
import { Bunting, PixelButton } from '@/components/ui'
import { site } from '@/lib/site'
import { voteRewards, voteSites } from '@/lib/vote'
import MiningToy from './MiningToy'
import s from './HomeHero.module.css'

/**
 * Home hero: the festival plaza at the surface. Logo + a wooden sign on the
 * left. On the right the selected "server list" entry with live players, the
 * big copy-IP block with the way in, and the vote row. Then the grass ground
 * with minable blocks. Starter guides are a link on the sign, so the join
 * column never stacks four buttons on a phone.
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
          <LiveStatus variant="card" highlight className={s.card} />
          <div className={s.plate}>
            <CopyIp size="lg" showHint fill />
            <PixelButton href="/play" icon="grass" size="lg" block>
              How to join
            </PixelButton>
          </div>
          <div className={s.vote}>
            <span className={s.voteSlot} aria-hidden="true">
              <StoreSprite shape="key" tone="vote" size={32} />
            </span>
            <p className={s.voteText}>
              <strong>
                {voteRewards.keysPerVote} Vote crate {voteRewards.keysPerVote === 1 ? 'key' : 'keys'}
              </strong>{' '}
              per vote, on {voteSites.length} sites
            </p>
            <PixelButton href="/vote" variant="gold" icon="star" className={s.voteBtn}>
              Vote
            </PixelButton>
          </div>
        </div>

        <div className={s.sign}>
          <p className={s.tagline}>{site.tagline}</p>
          <p className={s.lead}>
            Survival with your own plot, player shops, daily quests and a dungeon boss that hits back. Java Edition, free to
            join. Tara, laro tayo! New here? Read the <Link href="/guides">starter guides</Link>.
          </p>
        </div>
      </div>

      <div className={s.ground}>
        <MiningToy />
      </div>
    </section>
  )
}
