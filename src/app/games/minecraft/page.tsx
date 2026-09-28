import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Shell from '@/components/Shell'
import CopyAddress from '@/components/CopyAddress'
import { DiscordIcon } from '@/components/DiscordIcon'
import { servers, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Minecraft SMP',
  description:
    'Kasadya SMP: survival multiplayer with Slimefun for tech and automation, and Epidemic for disease survival. Java Edition.',
}

const plugins = [
  {
    name: 'Slimefun',
    tag: 'Tech & automation',
    body: 'Over 500 custom items and machines. Build energy networks, automate production and research your way from ore crushers to nuclear reactors.',
    points: ['Energy networks', 'Advanced machines', 'XP-based research tree'],
    href: '/games/minecraft/wiki/slimefun-guide',
  },
  {
    name: 'Epidemic',
    tag: 'Disease survival',
    body: 'Diseases spread between players. Craft medicine, develop vaccines, wear protective gear and work together to stop outbreaks.',
    points: ['Infection mechanics', 'Medical crafting', 'Cooperative survival'],
    href: '/games/minecraft/wiki/epidemic-guide',
  },
]

const steps = [
  { title: 'Open Minecraft Java Edition', body: 'The server runs on Java Edition. Bedrock is not supported right now.' },
  { title: 'Add the server', body: 'Multiplayer, Add Server, paste the address. Use the copy button above.' },
  { title: 'Read the guide in game', body: 'Type /slimefun guide for the item book. Check /epidemic status often.' },
  { title: 'Say hi in Discord', body: 'Announcements, help and trade happen there. Staff are online most days.' },
]

const commands = [
  { cmd: '/slimefun guide', desc: 'Open the Slimefun guide book' },
  { cmd: '/sf research', desc: 'View your research progress' },
  { cmd: '/epidemic status', desc: 'Check your health status' },
  { cmd: '/sethome', desc: 'Set your home location' },
  { cmd: '/home', desc: 'Teleport home' },
  { cmd: '/spawn', desc: 'Return to spawn' },
]

export default function MinecraftPage() {
  const server = servers.find((s) => s.slug === 'minecraft')!

  return (
    <Shell>
      <section className="page-hero">
        <div className="container">
          <div className="stack">
            <div className="crumbs">
              <Link href="/games">Games</Link>
              <span>/</span>
              <span style={{ opacity: 1 }}>Minecraft</span>
            </div>
            <span className="pill" style={{ alignSelf: 'flex-start' }}>
              <span className="dot" data-status={server.status} aria-hidden="true" />
              Online · Java Edition
            </span>
            <h1 className="display">{server.name}</h1>
            <p className="lead">{server.summary}</p>
            {server.address && <CopyAddress address={server.address} />}
            <div className="hero-actions">
              {server.joinUrl && (
                <a href={server.joinUrl} className="btn btn-primary">
                  {server.joinLabel}
                </a>
              )}
              <Link href="/games/minecraft/wiki" className="btn btn-ghost">
                Read the wiki
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plugins */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">01 · Core plugins</span>
              <h2 className="h2">Two plugins. No bloat.</h2>
            </div>
            <p className="muted small" style={{ maxWidth: '34ch' }}>
              Vanilla survival stays intact. These two change how you progress and how you survive.
            </p>
          </div>
          <div className="grid grid-2">
            {plugins.map((p, i) => (
              <Link key={p.name} href={p.href} className="card card-link" style={{ padding: 28, gap: 16 }}>
                <ArrowUpRight className="arrow" />
                <span className="card-index">
                  {String(i + 1).padStart(2, '0')} · {p.tag}
                </span>
                <h3 className="h2" style={{ fontSize: '1.6rem' }}>
                  {p.name}
                </h3>
                <p className="card-description">{p.body}</p>
                <ul className="text-2 small" style={{ paddingLeft: 18, display: 'grid', gap: 4 }}>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">02 · Getting started</span>
              <h2 className="h2">First ten minutes</h2>
            </div>
          </div>
          <div className="list">
            {steps.map((s, i) => (
              <div key={s.title} className="list-row">
                <span className="index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="text-2">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div className="stack" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="eyebrow">03 · Commands</span>
              <h2 className="h2">Essentials</h2>
              <p className="text-2" style={{ maxWidth: '40ch' }}>
                The handful you will use every session. The wiki has the full reference for each plugin.
              </p>
              <Link href="/games/minecraft/wiki" className="btn btn-ghost btn-sm" style={{ alignSelf: 'flex-start' }}>
                Open wiki
              </Link>
            </div>
            <div className="command-list">
              {commands.map((c) => (
                <div key={c.cmd} className="command-item">
                  <div className="command-name">{c.cmd}</div>
                  <div className="command-description">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="eyebrow">Need help?</span>
              <h2 className="h2">Staff and players are in Discord</h2>
              <p className="text-2" style={{ maxWidth: '48ch' }}>
                Stuck on a Slimefun research or caught an outbreak? Ask in the Minecraft channel.
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
