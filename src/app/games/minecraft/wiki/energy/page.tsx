import Link from "next/link"
import Shell from "@/components/Shell"

export default function EnergyGuidePage() {
  return (
    <Shell>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/games/minecraft">Minecraft</Link>
            <span>/</span>
            <Link href="/games/minecraft/wiki">Wiki</Link>
          </div>
          <h1 className="display">Energy Systems Guide</h1>
          <p className="lead">Master power generation and distribution for your Slimefun machines!</p>
        </div>
      </section>

      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">Core Components</h2>
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
          <h2 className="section-title section-title-orange">Generator Types</h2>
          <div className="card">
            <div className="grid grid-2">
              <div className="card"style={{background: 'var(--bg-raised)'}}>
                <h4 className="text-green">Coal Generator</h4>
                <p className="text-14"style={{color: 'var(--text-2)'}}>Output: 8 J/s | Fuel: Coal, Charcoal | Best for: Early game</p>
              </div>
              <div className="card"style={{background: 'var(--bg-raised)'}}>
                <h4 className="text-green">Solar Generator</h4>
                <p className="text-14"style={{color: 'var(--text-2)'}}>Output: 4 J/s (day) | Fuel: Sunlight | Best for: Passive income</p>
              </div>
              <div className="card"style={{background: 'var(--bg-raised)'}}>
                <h4 className="text-green">Lava Generator</h4>
                <p className="text-14"style={{color: 'var(--text-2)'}}>Output: 20 J/s | Fuel: Lava Bucket | Best for: Mid game</p>
              </div>
              <div className="card"style={{background: 'var(--bg-raised)'}}>
                <h4 className="text-green">Nuclear Reactor</h4>
                <p className="text-14"style={{color: 'var(--text-2)'}}>Output: 500 J/s | Fuel: Uranium | Best for: End game</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <nav className="wiki-nav"aria-label="Wiki pages">
            <Link href="/games/minecraft/wiki/machines">← Machines</Link>
            <Link href="/games/minecraft/wiki/resources">Resources →</Link>
          </nav>
      </div>
    </Shell>
  )
}
