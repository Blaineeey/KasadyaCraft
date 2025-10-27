import Link from "next/link"

export default function EpidemicGuidePage() {
  return (
    <div className="minecraft-bg">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-flex">
            <div className="nav-left">
              <Link href="/smp/wiki" className="nav-back">
                ← Back to Wiki
              </Link>
              <div className="nav-logo" style={{background: 'rgba(255, 61, 61, 0.2)', border: '2px solid rgba(255, 61, 61, 0.4)'}}>
                🦠
              </div>
              <div>
                <h1 className="nav-title">Epidemic Guide</h1>
                <p className="nav-subtitle-mono">Disease Survival System</p>
              </div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/smp" className="nav-link-towny">SMP</Link>
              <Link href="/smp/wiki" className="nav-link-wiki">Wiki</Link>
              <a href="https://discord.gg/8DY3eXHnAg" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                💬 Discord
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title" style={{color: '#FF3D3D'}}>
            🦠 Epidemic Survival Guide
          </h1>
          <p className="hero-description">
            Learn how to survive deadly diseases, craft medicine, and protect yourself from infections in our SMP world!
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            📋 What is Epidemic?
          </h2>
          <div className="card" style={{background: 'rgba(255, 61, 61, 0.05)', border: '2px solid rgba(255, 61, 61, 0.3)'}}>
            <p className="card-description mb-16" style={{fontSize: '1rem'}}>
              Epidemic is a survival plugin that adds realistic disease mechanics to Minecraft. Players can contract diseases, spread them to others, and must craft medicine to survive. It adds a whole new layer of challenge to SMP!
            </p>
            <div className="grid grid-3">
              <div>
                <h4 className="text-red mb-8">🦠 Get Infected</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Contract diseases from mobs, other players, or environmental factors</p>
              </div>
              <div>
                <h4 className="text-red mb-8">💊 Craft Cures</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Create medicine and vaccines to heal yourself and others</p>
              </div>
              <div>
                <h4 className="text-red mb-8">🛡️ Build Immunity</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Recover from diseases to gain resistance and help your community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🚀 Getting Started
          </h2>

          <div className="card mb-24">
            <h3 className="card-title">Step 1: Check Your Health Status</h3>
            <p className="card-description mb-16">
              Use the command below to check if you're infected or healthy:
            </p>
            <div className="command-list">
              <div className="command-item">
                <div className="command-name">/epidemic status</div>
                <div className="command-description">View your current health and any active diseases</div>
              </div>
              <div className="command-item">
                <div className="command-name">/epidemic info</div>
                <div className="command-description">Learn about diseases currently affecting the server</div>
              </div>
            </div>
          </div>

          <div className="card mb-24">
            <h3 className="card-title">Step 2: Understand Disease Mechanics</h3>
            <p className="card-description mb-16">
              Diseases can spread in several ways:
            </p>
            <div className="grid grid-2">
              <div style={{padding: '12px', background: 'rgba(255, 61, 61, 0.1)', borderRadius: '8px', border: '1px solid rgba(255, 61, 61, 0.3)'}}>
                <h4 className="text-red mb-8" style={{fontSize: '1rem'}}>⚔️ Combat Transmission</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Fighting infected mobs or players can spread diseases</p>
              </div>
              <div style={{padding: '12px', background: 'rgba(255, 61, 61, 0.1)', borderRadius: '8px', border: '1px solid rgba(255, 61, 61, 0.3)'}}>
                <h4 className="text-red mb-8" style={{fontSize: '1rem'}}>👥 Player Contact</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Being near infected players can cause transmission</p>
              </div>
              <div style={{padding: '12px', background: 'rgba(255, 61, 61, 0.1)', borderRadius: '8px', border: '1px solid rgba(255, 61, 61, 0.3)'}}>
                <h4 className="text-red mb-8" style={{fontSize: '1rem'}}>🌍 Environmental</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Certain biomes or conditions may increase infection risk</p>
              </div>
              <div style={{padding: '12px', background: 'rgba(255, 61, 61, 0.1)', borderRadius: '8px', border: '1px solid rgba(255, 61, 61, 0.3)'}}>
                <h4 className="text-red mb-8" style={{fontSize: '1rem'}}>⏰ Over Time</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>Symptoms worsen if left untreated - seek medicine quickly!</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Step 3: Craft Medicine</h3>
            <p className="card-description mb-16">
              Create cures using special crafting recipes. Medicine can cure diseases and vaccines provide immunity!
            </p>
            <div className="hero-buttons">
              <Link href="/smp/wiki/medicine" className="btn btn-primary">
                💊 Medicine Crafting Guide
              </Link>
              <Link href="/smp/wiki/protection" className="btn btn-secondary">
                🛡️ Protection Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Commands */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            ⚡ Essential Epidemic Commands
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title" style={{fontSize: '1.1rem'}}>🩺 Health & Status</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/epidemic status</div>
                  <div className="command-description">Check your health status</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/epidemic info</div>
                  <div className="command-description">View active server diseases</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/epidemic symptoms</div>
                  <div className="command-description">View your current symptoms</div>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title" style={{fontSize: '1.1rem'}}>💊 Treatment & Help</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/epidemic immunity</div>
                  <div className="command-description">Check your immunities</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/epidemic help</div>
                  <div className="command-description">Get help with mechanics</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/epidemic cure</div>
                  <div className="command-description">Use medicine to cure yourself</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Guides */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            📚 Detailed Guides
          </h2>
          <div className="grid grid-3">
            <Link href="/smp/wiki/diseases" className="card hover-lift" style={{textDecoration: 'none'}}>
              <div className="icon-48 icon-center" style={{color: '#FF3D3D'}}>🦠</div>
              <h3 className="card-title" style={{fontSize: '1.1rem'}}>Disease Types</h3>
              <p className="card-description">
                Learn about different diseases, symptoms, and how they spread
              </p>
            </Link>
            <Link href="/smp/wiki/medicine" className="card hover-lift" style={{textDecoration: 'none'}}>
              <div className="icon-48 icon-center" style={{color: '#7ED321'}}>💊</div>
              <h3 className="card-title" style={{fontSize: '1.1rem'}}>Medicine Crafting</h3>
              <p className="card-description">
                Craft cures, vaccines, and treatments for diseases
              </p>
            </Link>
            <Link href="/smp/wiki/protection" className="card hover-lift" style={{textDecoration: 'none'}}>
              <div className="icon-48 icon-center" style={{color: '#00D4FF'}}>🛡️</div>
              <h3 className="card-title" style={{fontSize: '1.1rem'}}>Protection & Prevention</h3>
              <p className="card-description">
                Prevent infection with protective gear and good practices
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/smp/wiki" className="footer-link footer-link-green">
                ← Back to Wiki
              </Link>
              <Link href="/smp/wiki/medicine" className="footer-link footer-link-orange">
                Medicine Guide →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Survive the epidemic together!
          </p>
        </div>
      </footer>
    </div>
  )
}
