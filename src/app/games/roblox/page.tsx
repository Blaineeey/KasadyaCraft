import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/shell/PageHero'
import { Badge, Book, Panel, PixelButton, PixelIcon, type PixelIconName } from '@/components/ui'
import { servers, site } from '@/lib/site'
import styles from './roblox.module.css'

export const metadata: Metadata = {
  title: 'Roblox',
  description: 'KasadyaCraft on Roblox: group sessions, private servers and community events. Coming soon.',
}

const plans: { title: string; icon: PixelIconName; body: string }[] = [
  {
    title: 'Group sessions',
    icon: 'player',
    body: 'Set nights where the crew hops into the same experiences together. We announce them in Discord.',
  },
  {
    title: 'Private servers',
    icon: 'key',
    body: 'Crew-only servers for popular experiences, so we can play without randoms.',
  },
  {
    title: 'Community events',
    icon: 'trophy',
    body: 'Obby races, build-offs and small tournaments with bragging rights on the line.',
  },
]

export default function RobloxPage() {
  const server = servers.find((s) => s.slug === 'roblox')
  if (!server) notFound()

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Games', href: '/games' }, { label: 'Roblox' }]}
        eyebrow="Coming soon"
        title={server.name}
        icon="player"
        lead={server.summary}
      >
        <PixelButton href={site.discord} variant="discord" size="lg" icon="chat">
          Get notified in Discord
        </PixelButton>
        {server.joinUrl ? (
          <PixelButton href={server.joinUrl} variant="wood" size="lg">
            {server.joinLabel}
          </PixelButton>
        ) : null}
      </PageHero>

      <section className="kc-container kc-section" aria-labelledby="plan-title">
        <Book
          title={<span id="plan-title">How Roblox fits the crew</span>}
          footer="Nothing here is live yet. When the group opens, the link goes up in Discord first."
        >
          <ol className={styles.quests}>
            {plans.map((p) => (
              <li key={p.title} className={styles.quest}>
                <span className={styles.questIcon} aria-hidden="true">
                  <PixelIcon name={p.icon} size={32} />
                </span>
                <div className={styles.questText}>
                  <h3 className={styles.questTitle}>
                    {p.title} <Badge tone="gray">Planned</Badge>
                  </h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Book>
      </section>

      <section className="kc-container" aria-labelledby="early-title">
        <Panel material="planks" padding="lg" rivets className={styles.cta}>
          <div>
            <h2 id="early-title" className={styles.ctaTitle}>
              Want in early?
            </h2>
            <p>Join the Discord and watch the Roblox channel for the group invite and the first session.</p>
          </div>
          <PixelButton href={site.discord} variant="discord" icon="chat">
            Open Discord
          </PixelButton>
        </Panel>
      </section>
    </>
  )
}
