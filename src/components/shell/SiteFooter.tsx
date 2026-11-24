import Link from 'next/link'
import { CopyIp } from '@/components/interactive'
import Kbd from '@/components/ui/Kbd'
import PixelButton from '@/components/ui/PixelButton'
import PixelIcon from '@/components/ui/PixelIcon'
import { footerLinks, site } from '@/lib/site'

/**
 * Footer: grass tufts and a grass block edge over a slice of dirt (link
 * columns live in the dirt), then a deepslate layer with the legal line.
 * The disclaimer wording follows Mojang's usage guidelines; keep it.
 * Owner: PIXEL UI DESIGNER.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="kc-footer">
      <div className="kc-footer__grass" aria-hidden="true" />
      <div className="kc-footer__dirt">
        <div className="kc-container kc-footer__grid">
          <div className="kc-footer__brand">
            <p className="kc-footer__name">
              Kasadya<span>Craft</span>
            </p>
            <p className="kc-footer__tagline">{site.tagline}</p>
            <div className="kc-footer__join">
              <p className="kc-footer__head t-label">Server address</p>
              <CopyIp size="sm" />
            </div>
            <PixelButton href={site.discord} variant="discord" size="sm" icon="chat">
              Join our Discord
            </PixelButton>
          </div>
          {footerLinks.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="kc-footer__col">
              <p className="kc-footer__head t-label">{col.heading}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        <PixelIcon name="arrow-right" size={16} className="kc-footer__arrow" />
                        {l.label}
                        <span className="kc-sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <Link href={l.href}>
                        <PixelIcon name="arrow-right" size={16} className="kc-footer__arrow" />
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="kc-footer__bedrock">
        <div className="kc-container kc-footer__legal">
          <p className="kc-footer__meaning">{site.meaning}</p>
          <p>
            © {year} {site.name}. NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.
          </p>
          <p className="kc-footer__tip">
            Tip: press <Kbd>1</Kbd> to <Kbd>9</Kbd> on your keyboard to jump between pages.
          </p>
        </div>
      </div>
    </footer>
  )
}
