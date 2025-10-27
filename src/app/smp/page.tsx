import Link from "next/link"

export default function SMPPage() {
  return (
    <div className="minecraft-bg">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-flex">
            <div className="nav-left">
              <Link href="/" className="nav-back">
                ← Back to Home
              </Link>
              <div className="nav-logo nav-logo-towny">
                ⚔️
              </div>
              <div>
                <h1 className="nav-title">Enhanced SMP</h1>
                <p className="nav-subtitle-mono">play.kasadyacraft.online</p>
              </div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/smp" className="nav-link-towny">SMP</Link>
              <Link href="/smp/wiki" className="nav-link">Wiki</Link>
              <Link href="/staff" className="nav-link">Staff</Link>
              <a href="https://discord.gg/8DY3eXHnAg" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                💬 Discord
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title-towny">
            ⚔️ SMP Server + Core Plugins
          </h1>
          <p className="hero-description">
            Pure survival multiplayer elevated by two powerful plugins: Epidemic brings deadly disease mechanics, while Slimefun adds 500+ items of advanced technology. This is SMP like you've never experienced!
          </p>

          <div className="hero-info-box">
            <h3 className="hero-box-title hero-box-title-towny">🎮 Server: play.kasadyacraft.online</h3>
            <p className="hero-box-text mb-12">
              Vanilla SMP gameplay enhanced by our two core plugins - no bloat, no confusion, just pure survival with epic tech and medical challenges!
            </p>
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <span style={{
                background: 'rgba(126, 211, 33, 0.2)',
                color: '#7ED321',
                padding: '6px 16px',
                borderRadius: '12px',
                fontSize: '0.85rem',
                fontWeight: '700',
                border: '1px solid rgba(126, 211, 33, 0.4)'
              }}>
                🧪 Slimefun Core
              </span>
              <span style={{
                background: 'rgba(255, 61, 61, 0.2)',
                color: '#FF3D3D',
                padding: '6px 16px',
                borderRadius: '12px',
                fontSize: '0.85rem',
                fontWeight: '700',
                border: '1px solid rgba(255, 61, 61, 0.4)'
              }}>
                🦠 Epidemic Core
              </span>
            </div>
          </div>

          <div className="hero-buttons">
            <Link href="/smp/wiki" className="btn btn-primary">
              📚 View Wiki
            </Link>
            <a href="minecraft://play.kasadyacraft.online" className="btn btn-towny">
              🎮 Join Server
            </a>
          </div>
        </div>
      </section>

      {/* SMP Features */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🎮 Core Plugin Features
          </h2>

          <div className="card mb-32" style={{background: 'rgba(126, 211, 33, 0.05)', border: '2px solid rgba(126, 211, 33, 0.3)'}}>
            <div className="flex" style={{alignItems: 'center', gap: '16px', marginBottom: '20px'}}>
              <span style={{fontSize: '3rem'}}>🧪</span>
              <div>
                <h3 className="card-title" style={{marginBottom: '4px', color: '#7ED321'}}>Slimefun Plugin - Technology & Automation</h3>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}>500+ Items | Energy Networks | Full Automation</span>
              </div>
            </div>
            <div className="grid grid-3">
              <div>
                <h4 className="text-green mb-8" style={{fontSize: '1rem'}}>⚡ Power Systems</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Build energy networks with generators, capacitors, and regulators. From coal power to nuclear reactors!</p>
              </div>
              <div>
                <h4 className="text-green mb-8" style={{fontSize: '1rem'}}>🏭 Advanced Machines</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Electric ore processors, auto-crafters, androids, and more. Automate your entire production chain!</p>
              </div>
              <div>
                <h4 className="text-green mb-8" style={{fontSize: '1rem'}}>🔬 Research Tree</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Unlock 500+ items through XP-based research. Progress from basic tools to infinity tech!</p>
              </div>
            </div>
          </div>

          <div className="card" style={{background: 'rgba(255, 61, 61, 0.05)', border: '2px solid rgba(255, 61, 61, 0.3)'}}>
            <div className="flex" style={{alignItems: 'center', gap: '16px', marginBottom: '20px'}}>
              <span style={{fontSize: '3rem'}}>🦠</span>
              <div>
                <h3 className="card-title" style={{marginBottom: '4px', color: '#FF3D3D'}}>Epidemic Plugin - Disease Survival</h3>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}>Infectious Diseases | Medical System | Survival Challenge</span>
              </div>
            </div>
            <div className="grid grid-3">
              <div>
                <h4 className="text-red mb-8" style={{fontSize: '1rem'}}>🩺 Disease Mechanics</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Contract and spread diseases! Monitor symptoms, track infection rates, and avoid deadly outbreaks.</p>
              </div>
              <div>
                <h4 className="text-red mb-8" style={{fontSize: '1rem'}}>💊 Medical Crafting</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Create medicine, vaccines, and protective gear. Build immunity and help others survive!</p>
              </div>
              <div>
                <h4 className="text-red mb-8" style={{fontSize: '1rem'}}>⚠️ Challenge Mode</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Adds real danger to SMP! Work together or watch your community fall to disease.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🚀 Getting Started
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📚 New to SMP?</h3>
              <p className="card-description mb-24">
                Check out our quick plugin guides to learn about Slimefun technology and Epidemic survival. The in-game guide is your best resource!
              </p>
              <div className="hero-buttons">
                <Link href="/smp/wiki" className="btn btn-primary">
                  📖 Plugin Guides
                </Link>
                <a href="https://discord.gg/8DY3eXHnAg" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  💬 Get Help
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚡ Essential Commands</h3>
              <p className="card-description mb-16">
                Important commands to get you started:
              </p>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/slimefun guide</div>
                  <div className="command-description">Open the Slimefun guide book</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/sf research</div>
                  <div className="command-description">View your research progress</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/epidemic status</div>
                  <div className="command-description">Check your health status</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/sethome</div>
                  <div className="command-description">Set your home location</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-py section-bg">
        <div className="container text-center">
          <h2 className="section-title section-title-orange">
            🚀 Ready to Start Your SMP Journey?
          </h2>
          <p className="hero-description">
            Join our enhanced SMP server and experience survival with advanced technology and unique challenges!
          </p>
          <div className="hero-buttons">
            <a href="minecraft://play.kasadyacraft.online" className="btn btn-primary">
              🎮 Join Server Now
            </a>
            <a href="https://discord.gg/8DY3eXHnAg" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              💬 Join Discord
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/" className="footer-link footer-link-green">
                ← Back to Home
              </Link>
              <Link href="/smp/wiki" className="footer-link footer-link-orange">
                SMP Wiki →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Master technology, survive the epidemic!
          </p>
        </div>
      </footer>
    </div>
  )
}
