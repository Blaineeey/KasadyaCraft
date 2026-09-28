import type { Metadata } from 'next'
import Link from 'next/link'
import Shell from '@/components/Shell'
import { DiscordIcon } from '@/components/DiscordIcon'
import { servers, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Roblox',
  description: 'KasadyaCraft on Roblox: group sessions, private servers and community events.',
}

const plans = [
  {
    title: 'Group sessions',
    body: 'Scheduled nights where the crew hops into the same experiences together. Announced in Discord.',
  },
  {
    title: 'Private servers',
    body: 'Crew-only servers for popular experiences so we can play without randoms.',
  },
  {
    title: 'Community events',
    body: 'Obby races, build-offs and tournaments with bragging rights on the line.',
  },
]

export default function RobloxPage() {
  const server = servers.find((s) => s.slug === 'roblox')!

  return (
    <Shell>
      <section className="page-hero">
        <div className="container">
          <div className="stack">
            <div className="crumbs">
              <Link href="/games">Games</Link>
              <span>/</span>
              <span style={{ opacity: 1 }}>Roblox</span>
            </div>
            <span className="pill" style={{ alignSelf: 'flex-start' }}>
              <span className="dot" data-status={server.status} aria-hidden="true" />
              Coming soon
            </span>
            <h1 className="display">{server.name}</h1>
            <p className="lead">{server.summary}</p>
            <div className="hero-actions">
              <a href={site.discord} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <DiscordIcon />
                Get notified in Discord
              </a>
              {server.joinUrl && (
                <a href={server.joinUrl} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                  {server.joinLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <span className="eyebrow">What&apos;s planned</span>
              <h2 className="h2">How Roblox fits the crew</h2>
            </div>
          </div>
          <div className="list">
            {plans.map((p, i) => (
              <div key={p.title} className="list-row">
                <span className="index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h3">{p.title}</h3>
                <p className="text-2">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="eyebrow">Want in early?</span>
              <h2 className="h2">Group links drop in Discord first</h2>
              <p className="text-2" style={{ maxWidth: '48ch' }}>
                Join the server and watch the Roblox channel for the group invite and the first session.
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
