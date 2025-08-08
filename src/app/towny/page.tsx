import Link from "next/link"

export default function TownyPage() {
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
                🏘️
              </div>
              <div>
                <h1 className="nav-title">Towny Survival</h1>
                <p className="nav-subtitle-mono">play.kasadyacraft.online</p>
              </div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/towny" className="nav-link-towny">Towny</Link>
              <Link href="/towny/wiki" className="nav-link">Wiki</Link>
              <Link href="/staff" className="nav-link">Staff</Link>
              <a href="https://discord.gg/kasadyacraft" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
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
            🏘️ Towny Survival
          </h1>
          <p className="hero-description">
            Build your town, form nations, engage in politics and warfare. Create a lasting legacy in our persistent world with friends and rivals alike.
          </p>
          
          <div className="hero-info-box">
            <h3 className="hero-box-title hero-box-title-towny">🎮 Server: play.kasadyacraft.online</h3>
            <p className="hero-box-text">
              Join our Towny server and start building your empire today! Create towns, form nations, and engage in epic battles.
            </p>
          </div>

          <div className="hero-buttons">
            <Link href="/towny/create-town" className="btn btn-primary">
              🏗️ Create a Town
            </Link>
            <a href="minecraft://play.kasadyacraft.online" className="btn btn-towny">
              🎮 Join Server
            </a>
          </div>
        </div>
      </section>

      {/* Towny Features */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🏰 Towny Features
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🏗️</span>
              <h3 className="feature-title">Town Building</h3>
              <p className="feature-description">
                Create and customize your own town with protected land, invite residents, and build amazing structures together.
              </p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">👑</span>
              <h3 className="feature-title">Nation System</h3>
              <p className="feature-description">
                Unite multiple towns under one banner, form alliances, and engage in large-scale politics and warfare.
              </p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">⚔️</span>
              <h3 className="feature-title">Wars & Sieges</h3>
              <p className="feature-description">
                Engage in strategic warfare, siege enemy towns, and fight for territory and resources in epic battles.
              </p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">💰</span>
              <h3 className="feature-title">Economy</h3>
              <p className="feature-description">
                Trade with other players, set up shops, manage town taxes, and build a thriving economic empire.
              </p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">🛡️</span>
              <h3 className="feature-title">Land Protection</h3>
              <p className="feature-description">
                Your town land is protected from griefing, but you can still engage in consensual PvP and warfare.
              </p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">🎭</span>
              <h3 className="feature-title">Roles & Ranks</h3>
              <p className="feature-description">
                Create custom ranks for your residents, assign permissions, and build a structured town hierarchy.
              </p>
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
              <h3 className="card-title">📚 New to Towny?</h3>
              <p className="card-description mb-24">
                Check out our comprehensive guides to learn everything about Towny, from creating your first town to leading a powerful nation.
              </p>
              <div className="hero-buttons">
                <Link href="/towny/create-town" className="btn btn-primary">
                  🏗️ Town Creation Guide
                </Link>
                <Link href="/towny/wiki" className="btn btn-secondary">
                  📖 Full Wiki
                </Link>
              </div>
            </div>
            
            <div className="card">
              <h3 className="card-title">⚡ Quick Start</h3>
              <p className="card-description mb-16">
                Essential commands to get you started:
              </p>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town new [name]</div>
                  <div className="command-description">Create a new town</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town claim</div>
                  <div className="command-description">Claim land for your town</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town invite [player]</div>
                  <div className="command-description">Invite players to your town</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town</div>
                  <div className="command-description">View your town information</div>
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
            🏰 Ready to Build Your Empire?
          </h2>
          <p className="hero-description">
            Join our Towny server and start your journey from a small settlement to a mighty nation!
          </p>
          <div className="hero-buttons">
            <a href="minecraft://play.kasadyacraft.online" className="btn btn-primary">
              🎮 Join Server Now
            </a>
            <a href="https://discord.gg/kasadyacraft" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
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
              <Link href="/towny/wiki" className="footer-link footer-link-orange">
                Towny Wiki →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Build your town, forge your destiny!
          </p>
        </div>
      </footer>
    </div>
  )
}
