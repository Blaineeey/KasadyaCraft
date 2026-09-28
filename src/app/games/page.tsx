import type { Metadata } from 'next'
import Link from 'next/link'
import Shell from '@/components/Shell'
import CopyAddress from '@/components/CopyAddress'
import GameStack from '@/components/GameStack'
import { DiscordIcon } from '@/components/DiscordIcon'
import { popularGames, servers, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Games',
  description: 'Game servers owned and operated by the KasadyaCraft community.',
}

const statusLabel: Record<string, string> = {
  online: 'Online',
  beta: 'Beta',
  soon: 'Coming soon',
}

export default function ServersPage() {
  return (
    <Shell>
      <section className="page-hero">
        <div className="container">
          <div className="stack">
            <span className="eyebrow">Games</span>
            <h1 className="display">Games we play</h1>
            <p className="lead">
              Hover a card to pull it forward. Our own servers are marked hosted, with the address below.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="showcase" style={{ paddingTop: 0 }}>
        <GameStack games={popularGames} />
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="muted small">Here are some of the games the group is into. There is a lot more going on in the server.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">Hosted by us</span>
              <h2 className="h2">Our servers</h2>
            </div>
          </div>
          <div className="grid grid-2">
            {servers.map((s, i) => (
              <article key={s.slug} className="server-card">
                <div className="top">
                  <span className="index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="pill">
                    <span className="dot" data-status={s.status} aria-hidden="true" />
                    {statusLabel[s.status]}
                  </span>
                </div>
                <div>
                  <div className="index" style={{ marginBottom: 6 }}>
                    {s.game}
                  </div>
                  <h2 className="title">{s.name}</h2>
                </div>
                <p className="text-2">{s.summary}</p>
                <div className="tags">
                  {s.tags.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
                {s.address && <CopyAddress address={s.address} />}
                <div className="actions">
                  <Link href={s.href} className="btn btn-primary btn-sm">
                    Details
                  </Link>
                  {s.joinUrl && (
                    <a href={s.joinUrl} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">
                      {s.joinLabel}
                    </a>
                  )}
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="eyebrow">Something down?</span>
              <h2 className="h2">Status and outages are posted in Discord</h2>
              <p className="text-2" style={{ maxWidth: '48ch' }}>
                The team posts maintenance windows and restarts in the announcements channel.
              </p>
            </div>
            <a href={site.discord} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <DiscordIcon />
              Open Discord
            </a>
          </div>
        </div>
      </section>
    </Shell>
  )
}
