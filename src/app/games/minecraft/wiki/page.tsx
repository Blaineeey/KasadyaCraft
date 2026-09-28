import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Shell from '@/components/Shell'
import { DiscordIcon } from '@/components/DiscordIcon'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Minecraft Wiki',
  description: 'Guides for Slimefun and Epidemic, the two core plugins on the Kasadya Minecraft SMP.',
}

const base = '/games/minecraft/wiki'

const sections = [
  {
    title: 'Slimefun',
    tag: 'Tech & automation',
    description: 'Over 500 tech items, machines and energy networks.',
    guides: [
      { title: 'Getting started', href: `${base}/slimefun-guide` },
      { title: 'Crafting stations', href: `${base}/crafting` },
      { title: 'Machines & automation', href: `${base}/machines` },
      { title: 'Energy systems', href: `${base}/energy` },
      { title: 'Resources & materials', href: `${base}/resources` },
      { title: 'Tools & equipment', href: `${base}/tools` },
    ],
  },
  {
    title: 'Epidemic',
    tag: 'Disease survival',
    description: 'Infections, medicine and how to keep your base alive.',
    guides: [
      { title: 'Getting started', href: `${base}/epidemic-guide` },
      { title: 'Disease types & mechanics', href: `${base}/diseases` },
      { title: 'Medicine crafting', href: `${base}/medicine` },
      { title: 'Protection & prevention', href: `${base}/protection` },
    ],
  },
]

const commands = [
  {
    category: 'Slimefun',
    items: [
      { cmd: '/slimefun guide', desc: 'Open the Slimefun guide book' },
      { cmd: '/sf search <item>', desc: 'Search for Slimefun items' },
      { cmd: '/sf research', desc: 'View your research progress' },
      { cmd: '/sf stats', desc: 'View your Slimefun statistics' },
    ],
  },
  {
    category: 'Epidemic',
    items: [
      { cmd: '/epidemic status', desc: 'Check your current health status' },
      { cmd: '/epidemic info', desc: 'Learn about active diseases' },
      { cmd: '/epidemic help', desc: 'Help with epidemic mechanics' },
    ],
  },
  {
    category: 'Survival',
    items: [
      { cmd: '/sethome', desc: 'Set your home location' },
      { cmd: '/home', desc: 'Teleport to your home' },
      { cmd: '/spawn', desc: 'Teleport to spawn' },
      { cmd: '/help', desc: 'View all commands' },
    ],
  },
]

export default function WikiIndexPage() {
  return (
    <Shell>
      <section className="page-hero">
        <div className="container">
          <div className="stack">
            <div className="crumbs">
              <Link href="/games">Games</Link>
              <span>/</span>
              <Link href="/games/minecraft">Minecraft</Link>
              <span>/</span>
              <span style={{ opacity: 1 }}>Wiki</span>
            </div>
            <h1 className="display">Plugin wiki</h1>
            <p className="lead">
              Short guides written for our setup. The in-game guide book is still the best reference: type{' '}
              <code className="mono" style={{ color: 'var(--accent)', textTransform: 'none' }}>
                /slimefun guide
              </code>{' '}
              in chat.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {sections.map((s, i) => (
              <div key={s.title} className="card" style={{ padding: 28, gap: 16 }}>
                <span className="card-index">
                  {String(i + 1).padStart(2, '0')} · {s.tag}
                </span>
                <h2 className="h2" style={{ fontSize: '1.6rem' }}>
                  {s.title}
                </h2>
                <p className="card-description">{s.description}</p>
                <div className="wiki-list" style={{ marginTop: 6 }}>
                  {s.guides.map((g) => (
                    <Link key={g.href} href={g.href}>
                      {g.title}
                      <ArrowRight />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">Reference</span>
              <h2 className="h2">Quick commands</h2>
            </div>
          </div>
          <div className="grid grid-3">
            {commands.map((group) => (
              <div key={group.category} className="card">
                <h3 className="card-title">{group.category}</h3>
                <div className="command-list">
                  {group.items.map((c) => (
                    <div key={c.cmd} className="command-item">
                      <div className="command-name">{c.cmd}</div>
                      <div className="command-description">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="eyebrow">Still stuck?</span>
              <h2 className="h2">Ask the crew</h2>
              <p className="text-2" style={{ maxWidth: '48ch' }}>
                Players and staff answer questions in the Minecraft channel every day.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={site.discord} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <DiscordIcon />
                Discord
              </a>
              <Link href="/community" className="btn btn-ghost">
                Contact staff
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  )
}
