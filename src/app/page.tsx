import Link from "next/link"

export default function HomePage() {
  return (
    <div className="minecraft-bg">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-flex">
            <div className="nav-left">
              <div className="nav-logo nav-logo-home">
                🏰
              </div>
              <div>
                <h1 className="nav-title">KasadyaCraft</h1>
                <p className="nav-subtitle-mono">play.kasadyacraft.online</p>
              </div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/towny" className="nav-link">Towny</Link>
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
          <h1 className="hero-title">
            🏰 Welcome to KasadyaCraft
          </h1>
          <p className="hero-description">
            Experience the ultimate Minecraft server with Towny, Skyblock, and Creative modes. Build your empire, create amazing structures, and join our thriving community!
          </p>
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
              <span className="feature-icon">🏘️</span>
              <h3 className="feature-title">Towny Survival</h3>
              <p className="feature-description">
                Build and manage your own town, form nations, engage in politics and warfare. Create a thriving community with friends and establish your legacy in our persistent world.
              </p>
              <Link href="/towny" className="btn btn-towny">
                Explore Towny
              </Link>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">🏝️</span>
              <h3 className="feature-title">Skyblock</h3>
              <p className="feature-description">
                Start with nothing but a small island in the sky. Expand your island, complete challenges, and build the ultimate skyblock paradise. Trade with other players and climb the leaderboards.
              </p>
              <div className="btn btn-secondary">
                Coming Soon
              </div>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">🎨</span>
              <h3 className="feature-title">Creative</h3>
              <p className="feature-description">
                Unleash your creativity with unlimited resources. Build massive structures, create pixel art, or design complex redstone contraptions. Show off your builds to the community.
              </p>
              <div className="btn btn-secondary">
                Coming Soon
              </div>
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
            <Link href="/towny" className="btn btn-towny">
              📚 Learn About Towny
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
