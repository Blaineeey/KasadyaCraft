import Link from "next/link"
import Navigation from "@/components/Navigation"

export default function ResourcesGuidePage() {
  return (
    <div className="minecraft-bg">
      <Navigation variant="wiki" showBackButton={true} backLink="/smp/wiki" backText="← Back to Wiki" />

      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title-wiki">💎 Resources & Materials</h1>
          <p className="hero-description-wide">New ores, alloys, and advanced materials!</p>
        </div>
      </section>

      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">⛏️ New Ores</h2>
          <div className="grid grid-3">
            <div className="card"><h3 className="card-title">Silver Ore</h3><p className="card-description">Found underground, used in various recipes</p></div>
            <div className="card"><h3 className="card-title">Lead Ore</h3><p className="card-description">Heavy metal for radiation shielding</p></div>
            <div className="card"><h3 className="card-title">Aluminum Ore</h3><p className="card-description">Lightweight metal for alloys</p></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-center">
          <div className="footer-links">
            <Link href="/smp/wiki/automation" className="footer-link footer-link-orange">← Automation</Link>
            <Link href="/smp/wiki/tools" className="footer-link footer-link-green">Tools →</Link>
          </div>
          <p className="footer-server">play.kasadyacraft.online</p>
        </div>
      </footer>
    </div>
  )
}
