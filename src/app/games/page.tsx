import type { Metadata } from 'next'
import GameStack from '@/components/GameStack'
import { CopyIp, LiveStatus } from '@/components/interactive'
import PageHero from '@/components/shell/PageHero'
import { Badge, Panel, PixelButton, PixelIcon, SectionHeading, type PixelIconName } from '@/components/ui'
import { popularGames, servers, site, type ServerStatusLabel } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'
import styles from './games.module.css'

export const metadata: Metadata = pageMetadata({
  title: 'Games',
  description: 'The game servers the KasadyaCraft community runs, and the games the crew plays together on game night.',
  path: '/games',
})

const serverIcon: Record<string, PixelIconName> = {
  minecraft: 'grass',
  roblox: 'player',
}

const statusText: Record<ServerStatusLabel, string> = {
  online: 'Open now',
  beta: 'Beta',
  soon: 'Coming soon',
}

export default function GamesPage() {
  return (
    <>
      <PageHero
        eyebrow="Games"
        title="Games we play"
        icon="controller"
        lead="KasadyaCraft started on Minecraft, but the crew plays a lot more than that. Here is what we host ourselves, and what you will usually find us playing on game night."
      />

      {/* Hosted servers, laid out like a multiplayer server list */}
      <section className="kc-container kc-section" aria-labelledby="hosted-title">
        <SectionHeading eyebrow="Hosted by us" title="Our servers" id="hosted-title" icon="portal" />
        <Panel material="obsidian" padding="sm" className={styles.list}>
          <ul className={styles.rows} role="list">
            {servers.map((s) => {
              const live = s.status === 'online'
              return (
                <li key={s.slug} className={styles.row} data-status={s.status}>
                  <span className={styles.icon} aria-hidden="true">
                    <PixelIcon name={serverIcon[s.slug] ?? 'controller'} size={48} />
                  </span>
                  <div className={styles.info}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.name}>{s.name}</h3>
                      <span className={styles.status}>
                        <span className={styles.bars} aria-hidden="true">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </span>
                        {live ? <LiveStatus variant="inline" /> : <Badge tone="gray">{statusText[s.status]}</Badge>}
                      </span>
                    </div>
                    <p className={styles.game}>{s.game}</p>
                    <p className={styles.motd}>{s.summary}</p>
                    <ul className={styles.tags} role="list" aria-label={`${s.name} tags`}>
                      {s.tags.map((t) => (
                        <li key={t}>
                          <Badge tone={live ? 'teal' : 'gray'}>{t}</Badge>
                        </li>
                      ))}
                    </ul>
                    <div className={styles.actions}>
                      {s.address ? <CopyIp address={s.address} size="sm" /> : null}
                      <PixelButton href={s.href} variant="stone" size="sm" iconRight="arrow-right">
                        Details
                      </PixelButton>
                      {s.joinUrl ? (
                        <PixelButton href={s.joinUrl} variant={live ? 'grass' : 'wood'} size="sm">
                          {s.joinLabel}
                        </PixelButton>
                      ) : null}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Panel>
      </section>

      {/* What the crew plays */}
      <section className="kc-container kc-section" aria-labelledby="shelf-title">
        <SectionHeading
          eyebrow="On game night"
          title="What the crew plays"
          id="shelf-title"
          icon="star"
          lead="Some of the games the group is into right now. There is a lot more going on in the Discord."
        />
        <Panel material="darkwood" padding="lg" rivets>
          <GameStack games={popularGames} />
        </Panel>
      </section>

      <section className="kc-container" aria-labelledby="status-title">
        <Panel material="planks" padding="lg" rivets className={styles.cta}>
          <div>
            <h2 id="status-title" className={styles.ctaTitle}>
              Something down?
            </h2>
            <p>Restarts, maintenance and outages are posted in the announcements channel on Discord.</p>
          </div>
          <PixelButton href={site.discord} variant="discord" icon="chat">
            Open Discord
          </PixelButton>
        </Panel>
      </section>
    </>
  )
}
