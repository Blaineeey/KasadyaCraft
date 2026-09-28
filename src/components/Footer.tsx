import Link from 'next/link'
import { nav, servers, site } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="brand">
              {site.shortName}
              <span>Craft</span>
            </Link>
            <p className="text-2 small" style={{ maxWidth: '36ch', marginTop: 8 }}>
              {site.tagline}
            </p>
          </div>

          <div className="footer-col">
            <div className="head">Navigate</div>
            <Link href="/" className="footer-link">
              Home
            </Link>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <div className="head">Games</div>
            {servers.map((s) => (
              <Link key={s.slug} href={s.href} className="footer-link">
                {s.game}
                {s.address ? ` · ${s.address}` : ''}
              </Link>
            ))}
            <a href={site.discord} className="footer-link" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.name}
          </span>
          <span>Play together. Host it ourselves.</span>
        </div>
      </div>
    </footer>
  )
}
