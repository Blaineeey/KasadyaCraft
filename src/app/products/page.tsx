import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import Shell from '@/components/Shell'
import { DiscordIcon } from '@/components/DiscordIcon'
import { products, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Things made by the KasadyaCraft community.',
}

export default function ProductsPage() {
  return (
    <Shell>
      <section className="page-hero">
        <div className="container">
          <div className="stack">
            <span className="eyebrow">Products</span>
            <h1 className="display">Made by the community</h1>
            <p className="lead">
              Tools, merch and projects built by Kasadya members. Everything here started as an idea in the Discord.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {products.length > 0 ? (
            <div className="grid grid-3">
              {products.map((p, i) => (
                <a
                  key={p.name}
                  href={p.href}
                  className="card card-link"
                  target={p.href.startsWith('http') ? '_blank' : undefined}
                  rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <ArrowUpRight className="arrow" />
                  <span className="card-index">
                    {String(i + 1).padStart(2, '0')} · {p.tag}
                  </span>
                  <h2 className="card-title">{p.name}</h2>
                  <p className="card-description">{p.body}</p>
                </a>
              ))}
            </div>
          ) : (
            <div className="cta">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span className="eyebrow">Coming soon</span>
                <h2 className="h2">First drop is in the works</h2>
                <p className="text-2" style={{ maxWidth: '48ch' }}>
                  Members are building the first things that will live here. Want in, or have an idea? Say so in Discord.
                </p>
              </div>
              <a href={site.discord} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <DiscordIcon />
                Open Discord
              </a>
            </div>
          )}
        </div>
      </section>
    </Shell>
  )
}
