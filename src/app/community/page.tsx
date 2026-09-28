import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import { DiscordIcon } from '@/components/DiscordIcon'
import { activities, site, team } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Community',
  description:
    'KasadyaCraft is a community that plays together and grows together, in games and in life. See what happens here, meet the team and learn how to join.',
}

const contactWays = [
  {
    title: 'Discord',
    body: 'Fastest response. Ping a moderator or open a ticket in the support channel.',
  },
  {
    title: 'In game',
    body: 'On the Minecraft server, message any online staff member directly.',
    commands: [
      { cmd: '/msg <staff>', desc: 'Private message' },
      { cmd: '/helpop <message>', desc: 'Alert online staff' },
    ],
  },
  {
    title: 'Tickets',
    body: 'For appeals, lost items after a server issue, or anything that needs a paper trail.',
  },
]

const doContact = [
  'Rule violations and griefing',
  'Player disputes',
  'Bugs and technical issues',
  'Ban appeals',
  'Lost items from server issues',
]

const dontContact = [
  'Basic gameplay questions (ask the community first)',
  'Requests for items or currency',
  'Fair PvP deaths',
  'Requests for staff positions',
]

export default function CommunityPage() {
  return (
    <Shell>
      <section className="page-hero">
        <div className="container">
          <div className="stack">
            <span className="eyebrow">Community</span>
            <h1 className="display">People to play with. People to grow with.</h1>
            <p className="lead">
              Kasadya is for anyone tired of playing alone. We show up for game nights, share what we are working on,
              and look out for each other when life gets in the way.
            </p>
            <div className="hero-actions">
              <a href={site.discord} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <DiscordIcon />
                Join the Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What happens here */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">01 · What happens here</span>
              <h2 className="h2">More than a server list</h2>
            </div>
            <p className="muted small" style={{ maxWidth: '34ch' }}>
              No application, no skill check. Just show up.
            </p>
          </div>
          <div className="list">
            {activities.map((a, i) => (
              <div key={a.title} className="list-row">
                <span className="index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h3">{a.title}</h3>
                <p className="text-2">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">02 · Team</span>
              <h2 className="h2">Staff</h2>
            </div>
            <p className="muted small" style={{ maxWidth: '32ch' }}>
              Open roles are filled from active members. Ask in Discord if you want to help.
            </p>
          </div>
          <div className="grid grid-2">
            {team.map((m, i) => {
              const open = m.name === 'Open'
              return (
                <div key={`${m.role}-${i}`} className="member" data-open={open}>
                  <div className="avatar" aria-hidden="true">
                    {open ? '?' : m.name.slice(0, 1).toUpperCase()}
                  </div>
                  <div>
                    <div className="role">{m.role}</div>
                    <div className="name">{open ? 'Open position' : m.name}</div>
                  </div>
                  <p className="text-2 small">{m.focus}</p>
                  {m.discord && (
                    <div className="mono muted" style={{ textTransform: 'none', letterSpacing: 0 }}>
                      Discord: {m.discord}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">03 · Support</span>
              <h2 className="h2">How to reach us</h2>
            </div>
          </div>
          <div className="grid grid-3">
            {contactWays.map((c) => (
              <div key={c.title} className="card">
                <h3 className="card-title">{c.title}</h3>
                <p className="card-description">{c.body}</p>
                {c.commands && (
                  <div className="command-list" style={{ marginTop: 6 }}>
                    {c.commands.map((cmd) => (
                      <div key={cmd.cmd} className="command-item">
                        <div className="command-name">{cmd.cmd}</div>
                        <div className="command-description">{cmd.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">04 · Guidelines</span>
              <h2 className="h2">When to contact staff</h2>
            </div>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <span className="card-index" style={{ color: 'var(--online)' }}>
                Reach out for
              </span>
              <ul style={{ paddingLeft: 18, display: 'grid', gap: 6 }} className="text-2 small">
                {doContact.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <span className="card-index" style={{ color: 'var(--danger)' }}>
                Please skip
              </span>
              <ul style={{ paddingLeft: 18, display: 'grid', gap: 6 }} className="text-2 small">
                {dontContact.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  )
}
