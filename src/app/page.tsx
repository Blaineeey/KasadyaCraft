import Link from "next/link"
import Navigation from "@/components/Navigation"

export default function HomePage() {
  return (
    <div className="minecraft-bg">
      <Navigation variant="home" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title">
                            <img
                  src="/logo.png"
                  alt="Server Logo"
                  width="100"
                  height="100"
                /> Welcome to KasadyaCraft
          </h1>
          <p className="hero-description">
            Pure Survival Multiplayer enhanced with two core plugins: Epidemic for deadly disease challenges and Slimefun for 500+ tech items. Build, survive, and automate your way to dominance!
          </p>
          <div style={{
            background: 'rgba(126, 211, 33, 0.1)',
            border: '2px solid var(--color-grass-green)',
            borderRadius: '12px',
            padding: '16px 24px',
            maxWidth: '600px',
            margin: '0 auto 24px',
            display: 'inline-block'
          }}>
            <span className="text-green" style={{fontSize: '0.95rem', fontWeight: '700'}}>⚡ Core Plugins:</span>
            <span style={{color: 'rgba(255,255,255,0.9)', marginLeft: '8px', fontSize: '0.95rem'}}>Epidemic + Slimefun</span>
          </div>
          <div className="hero-buttons">
            <a href="minecraft://play.kasadyacraft.online" className="btn btn-primary">
              🎮 Join Server
            </a>
            <a href="https://discord.gg/8DY3eXHnAg" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              💬 Discord
            </a>
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🎮 Game Modes
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(126, 211, 33, 0.2)',
                color: '#7ED321',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '700',
                border: '1px solid rgba(126, 211, 33, 0.4)'
              }}>
                CORE PLUGIN
              </div>
              <span className="feature-icon">🧪</span>
              <h3 className="feature-title">Slimefun Plugin</h3>
              <p className="feature-description">
                500+ custom items and machines transform vanilla Minecraft into a tech paradise. Automate production, harness electricity, craft advanced tools and weapons. From basic ore crushers to nuclear reactors!
              </p>
              <Link href="/smp" className="btn btn-towny">
                Explore Slimefun
              </Link>
            </div>

            <div className="feature-card">
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255, 61, 61, 0.2)',
                color: '#FF3D3D',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '700',
                border: '1px solid rgba(255, 61, 61, 0.4)'
              }}>
                CORE PLUGIN
              </div>
              <span className="feature-icon">🦠</span>
              <h3 className="feature-title">Epidemic Plugin</h3>
              <p className="feature-description">
                Deadly diseases add a new survival dimension. Craft medicine, develop vaccines, wear protective gear, and build immunity. Work together to survive outbreaks or risk succumbing to infection!
              </p>
              <Link href="/smp" className="btn btn-secondary">
                Learn Epidemic
              </Link>
            </div>

            <div className="feature-card">
              <span className="feature-icon">⚔️</span>
              <h3 className="feature-title">Survival Multiplayer</h3>
              <p className="feature-description">
                Pure SMP at its core: build bases, gather resources, trade with players, explore vast worlds. Enhanced only by our two core plugins - no bloat, just challenging survival with high-tech possibilities!
              </p>
              <Link href="/smp" className="btn btn-primary">
                Join Server
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Server Features */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            ✨ Server Features
          </h2>
          <div className="grid grid-3">
            <div className="card text-center">
              <div className="icon-48 icon-center">⚡</div>
              <h3 className="card-title">High Performance</h3>
              <p className="card-description">
                Dedicated server hardware ensures smooth gameplay with minimal lag and maximum uptime.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="icon-48 icon-center">🛡️</div>
              <h3 className="card-title">Anti-Grief Protection</h3>
              <p className="card-description">
                Advanced protection systems keep your builds safe while maintaining a fun, competitive environment.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="icon-48 icon-center">👥</div>
              <h3 className="card-title">Active Community</h3>
              <p className="card-description">
                Join hundreds of players in our Discord community and participate in server events and competitions.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="icon-48 icon-center">🎁</div>
              <h3 className="card-title">Regular Events</h3>
              <p className="card-description">
                Participate in building contests, PvP tournaments, and seasonal events with amazing prizes.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="icon-48 icon-center">💰</div>
              <h3 className="card-title">Economy System</h3>
              <p className="card-description">
                Trade with players, set up shops, and build your wealth in our balanced server economy.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="icon-48 icon-center">🔧</div>
              <h3 className="card-title">Custom Plugins</h3>
              <p className="card-description">
                Enjoy unique features and quality-of-life improvements designed specifically for our server.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-py section-bg">
        <div className="container text-center">
          <h2 className="section-title section-title-orange">
            🚀 Ready to Start Your Adventure?
          </h2>
          <p className="hero-description">
            Join thousands of players in the ultimate Minecraft experience. Your journey begins now!
          </p>
          <div className="hero-buttons">
            <a href="minecraft://play.kasadyacraft.online" className="btn btn-primary">
              🎮 Join Server Now
            </a>
            <Link href="/smp" className="btn btn-towny">
              📚 Learn About SMP
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Join our community and start building your legacy today!
          </p>
        </div>
      </footer>
    </div>
  )
}
