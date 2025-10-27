import Link from "next/link"

export default function ToolsGuidePage() {
  return (
    <div className="minecraft-bg">
      <nav className="nav-container">
        <div className="container">
          <div className="nav-flex">
            <div className="nav-left">
              <Link href="/smp/wiki/slimefun-guide" className="nav-back">← Back</Link>
              <div className="nav-logo nav-logo-wiki">🔨</div>
              <div><h1 className="nav-title">Tools & Weapons</h1></div>
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
          <h1 className="hero-title-wiki">🔨 Tools & Weapons</h1>
          <p className="hero-description-wide">Advanced equipment and powerful armor!</p>
        </div>
      </section>

      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">⚔️ Weapon Tiers</h2>
          <div className="grid grid-2">
            <div className="card"><h3 className="card-title">Reinforced Tools</h3><p className="card-description">Entry level upgrades, more durable than diamond</p></div>
            <div className="card"><h3 className="card-title">Damascus Steel</h3><p className="card-description">Mid-tier weapons with enhanced damage</p></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-center">
          <div className="footer-links">
            <Link href="/smp/wiki/resources" className="footer-link footer-link-orange">← Resources</Link>
            <Link href="/smp/wiki/slimefun-guide" className="footer-link footer-link-green">Guide Home →</Link>
          </div>
          <p className="footer-server">play.kasadyacraft.online</p>
        </div>
      </footer>
    </div>
  )
}
