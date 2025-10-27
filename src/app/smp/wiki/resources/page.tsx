import Link from "next/link"

export default function ResourcesGuidePage() {
  return (
    <div className="minecraft-bg">
      <nav className="nav-container">
        <div className="container">
          <div className="nav-flex">
            <div className="nav-left">
              <Link href="/smp/wiki/slimefun-guide" className="nav-back">← Back</Link>
              <div className="nav-logo nav-logo-wiki">💎</div>
              <div><h1 className="nav-title">Resources</h1></div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/smp" className="nav-link-towny">SMP</Link>
            </div>
          </div>
        </div>
      </nav>

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
