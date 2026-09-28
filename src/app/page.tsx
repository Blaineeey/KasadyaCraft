import Link from 'next/link'
import Shell from '@/components/Shell'
import CopyAddress from '@/components/CopyAddress'
import { DiscordIcon } from '@/components/DiscordIcon'
import { reasons, servers, site } from '@/lib/site'

const statusLabel: Record<string, string> = {
  online: 'Online',
  beta: 'Beta',
  soon: 'Coming soon',
}

const principles = [
  {
    title: 'Play together',
    body: 'Kasadya started as a group of friends. Game nights, hosted servers and whatever the group is into that week.',
  },
  {
    title: 'Grow together',
    body: 'Share what you are working on, ask for help, give it back. Nobody here levels up alone.',
  },
  {
    title: 'Show up for each other',
    body: 'Good days and bad. A message when you have been quiet. People who remember what you told them.',
  },
  {
    title: 'Host it ourselves',
    body: 'Our servers are owned and run by members. Real moderation, stable uptime and rules that actually get enforced.',
  },
]

export default function HomePage() {
  const hostedCount = servers.length

  return (
    <Shell>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow rise rise-1">Community · est. {site.founded}</span>
              <h1 className="display rise rise-2">
                Looking for someone to <em>play</em> with?
              </h1>
              <p className="lead rise rise-3">
                Kasadya is a community for people who want more than a random lobby. We play together, host our own
                servers, and grow together, in games and in life.
              </p>
              <div className="hero-actions rise rise-4">
                <a href={site.discord} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <DiscordIcon />
                  Join the Discord
                </a>
                <Link href="/games" className="btn btn-ghost">
                  Browse games
                </Link>
              </div>
            </div>

            <aside className="panel rise rise-3" aria-label="Server status">
              <div className="panel-head">
                <span>Server status</span>
                <span>{hostedCount} hosted</span>
              </div>
              {servers.map((s) => (
                <Link key={s.slug} href={s.href} className="panel-row">
                  <span className="dot" data-status={s.status} aria-hidden="true" />
                  <div>
                    <div className="game">{s.game}</div>
                    <div className="addr">{s.address ?? s.name}</div>
                  </div>
                  <span className="pill">{statusLabel[s.status]}</span>
                </Link>
              ))}
              <div className="panel-foot">Status is set manually by the team</div>
            </aside>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats">
            <div className="stat">
              <div className="value">Open</div>
              <div className="label">Everyone welcome</div>
            </div>
            <div className="stat">
              <div className="value">Free</div>
              <div className="label">No fees, no ranks</div>
            </div>
            <div className="stat">
              <div className="value">{hostedCount}</div>
              <div className="label">Hosted servers</div>
            </div>
            <div className="stat">
              <div className="value">Discord</div>
              <div className="label">Where it all happens</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="section" id="community">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">01 · Why people stay</span>
              <h2 className="h2">Not just in games. In life.</h2>
            </div>
            <p className="muted small" style={{ maxWidth: '34ch' }}>
              The games change. The people are the point.
            </p>
          </div>
          <div className="grid grid-3">
            {reasons.map((r, i) => (
              <div key={r.title} className="card" style={{ padding: 28, gap: 14 }}>
                <span className="card-index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="card-title" style={{ fontSize: '1.2rem' }}>
                  {r.title}
                </h3>
                <p className="card-description">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servers */}
      <section className="section" id="servers">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">02 · What we run</span>
              <h2 className="h2">Servers owned by the crew</h2>
            </div>
            <Link href="/games" className="btn btn-ghost btn-sm">
              All games
            </Link>
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
                  <h3 className="title">{s.name}</h3>
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

      {/* Principles */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">03 · How we do it</span>
              <h2 className="h2">Four things we actually do</h2>
            </div>
          </div>
          <div className="list">
            {principles.map((p, i) => (
              <div key={p.title} className="list-row">
                <span className="index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h3">{p.title}</h3>
                <p className="text-2">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <div className="stack" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="eyebrow">Find your people</span>
              <h2 className="h2">Come play. Stay for the people.</h2>
              <p className="text-2" style={{ maxWidth: '48ch' }}>
                Game nights, real conversations, and a group that shows up. Free to join, whatever you play.
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
