import Link from "next/link"
import Navigation from "@/components/Navigation"

export default function EnergyGuidePage() {
  return (
    <div className="minecraft-bg">
      <Navigation variant="wiki" showBackButton={true} backLink="/smp/wiki" backText="← Back to Wiki" />

      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title-wiki">⚡ Energy Systems Guide</h1>
          <p className="hero-description-wide">Master power generation and distribution for your Slimefun machines!</p>
        </div>
      </section>

      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">🔋 Core Components</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">Energy Regulator</h3>
              <p className="card-description">The heart of your power network. Connects generators, capacitors, and machines within a 7-block range.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Generators</h3>
              <p className="card-description">Produce energy from various sources: coal, solar, lava, nuclear. Each has different output and efficiency.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Capacitors</h3>
              <p className="card-description">Store excess energy for later use and extend your network range. Comes in Small, Medium, Large, and Big tiers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">⚡ Generator Types</h2>
          <div className="card">
            <div className="grid grid-2">
              <div className="card" style={{background: 'rgba(0,0,0,0.3)'}}>
                <h4 className="text-green">Coal Generator</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Output: 8 J/s | Fuel: Coal, Charcoal | Best for: Early game</p>
              </div>
              <div className="card" style={{background: 'rgba(0,0,0,0.3)'}}>
                <h4 className="text-green">Solar Generator</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Output: 4 J/s (day) | Fuel: Sunlight | Best for: Passive income</p>
              </div>
              <div className="card" style={{background: 'rgba(0,0,0,0.3)'}}>
                <h4 className="text-green">Lava Generator</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Output: 20 J/s | Fuel: Lava Bucket | Best for: Mid game</p>
              </div>
              <div className="card" style={{background: 'rgba(0,0,0,0.3)'}}>
                <h4 className="text-green">Nuclear Reactor</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Output: 500 J/s | Fuel: Uranium | Best for: End game</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-center">
          <div className="footer-links">
            <Link href="/smp/wiki/machines" className="footer-link footer-link-orange">← Machines</Link>
            <Link href="/smp/wiki/automation" className="footer-link footer-link-green">Automation →</Link>
          </div>
          <p className="footer-server">play.kasadyacraft.online</p>
        </div>
      </footer>
    </div>
  )
}
