import Link from "next/link"

export default function DiseasesPage() {
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
                <h1 className="nav-title">Disease Types</h1>
                <p className="nav-subtitle-mono">Know Your Enemy</p>
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
            🦠 Disease Types & Mechanics
          </h1>
          <p className="hero-description">
            Understanding diseases is the first step to survival. Learn about symptoms, transmission, and severity levels.
          </p>
        </div>
      </section>

      {/* Check Health */}
      <section className="section-py section-bg">
        <div className="container">
          <div className="card text-center" style={{background: 'rgba(255, 61, 61, 0.1)', border: '2px solid rgba(255, 61, 61, 0.4)'}}>
            <h2 className="card-title" style={{color: '#FF3D3D', marginBottom: '16px'}}>
              🩺 How to Check If You're Infected
            </h2>
            <p className="card-description mb-20" style={{fontSize: '1rem'}}>
              Always monitor your health! Use this command frequently:
            </p>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '16px 24px',
              borderRadius: '8px',
              display: 'inline-block',
              marginBottom: '12px'
            }}>
              <code style={{color: '#7ED321', fontSize: '1.1rem', fontWeight: '700'}}>/epidemic status</code>
            </div>
            <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
              This shows your current diseases, symptoms, and infection progress
            </p>
          </div>
        </div>
      </section>

      {/* Disease Severity */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            ⚠️ Disease Severity Levels
          </h2>
          <div className="grid grid-3">
            <div className="card" style={{background: 'rgba(126, 211, 33, 0.05)', border: '2px solid rgba(126, 211, 33, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '12px'}}>
                <span style={{fontSize: '2.5rem'}}>🟢</span>
              </div>
              <h3 className="card-title text-center" style={{color: '#7ED321'}}>Mild</h3>
              <p className="card-description text-center">
                Minor symptoms, slow progression. Easy to cure with basic medicine.
              </p>
            </div>
            <div className="card" style={{background: 'rgba(255, 184, 0, 0.05)', border: '2px solid rgba(255, 184, 0, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '12px'}}>
                <span style={{fontSize: '2.5rem'}}>🟡</span>
              </div>
              <h3 className="card-title text-center" style={{color: '#FFB800'}}>Moderate</h3>
              <p className="card-description text-center">
                Noticeable symptoms, medium spread rate. Requires proper medicine.
              </p>
            </div>
            <div className="card" style={{background: 'rgba(255, 61, 61, 0.05)', border: '2px solid rgba(255, 61, 61, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '12px'}}>
                <span style={{fontSize: '2.5rem'}}>🔴</span>
              </div>
              <h3 className="card-title text-center" style={{color: '#FF3D3D'}}>Severe</h3>
              <p className="card-description text-center">
                Dangerous symptoms, fast progression. Needs advanced medicine immediately!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transmission Methods */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🔄 How Diseases Spread
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">⚔️ Combat Transmission</h3>
              <p className="card-description mb-12">
                Fighting infected mobs or players is a common way to get sick.
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Zombies and infected mobs carry diseases</li>
                <li>PvP with infected players can spread infection</li>
                <li>Higher risk in close combat situations</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">👥 Player Proximity</h3>
              <p className="card-description mb-12">
                Being near infected players can cause airborne transmission.
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Standing close to sick players increases risk</li>
                <li>Enclosed spaces make it worse</li>
                <li>Use protective gear when helping others</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">🌍 Environmental Factors</h3>
              <p className="card-description mb-12">
                Some biomes and conditions increase infection chances.
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Swamp biomes may have higher disease rates</li>
                <li>Dark, damp areas are more dangerous</li>
                <li>Weather conditions can affect spread</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">⏰ Disease Progression</h3>
              <p className="card-description mb-12">
                Untreated diseases get worse over time.
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Symptoms worsen if not treated</li>
                <li>Can become contagious to others</li>
                <li>Early treatment is always better!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🩹 Common Symptoms
          </h2>
          <div className="card">
            <p className="card-description mb-20" style={{fontSize: '1rem'}}>
              Watch for these effects when infected. Use <code style={{color: '#7ED321'}}>/epidemic symptoms</code> to see your current status:
            </p>
            <div className="grid grid-4">
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}>❤️</div>
                <div style={{fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600'}}>Health Drain</div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)'}}>Lose health over time</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}>🏃</div>
                <div style={{fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600'}}>Slowness</div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)'}}>Reduced movement</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}>😵</div>
                <div style={{fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600'}}>Nausea</div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)'}}>Screen distortion</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}>💪</div>
                <div style={{fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600'}}>Weakness</div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)'}}>Less damage dealt</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}>🍖</div>
                <div style={{fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600'}}>Hunger</div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)'}}>Increased food drain</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}>🌫️</div>
                <div style={{fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600'}}>Blindness</div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)'}}>Limited vision</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}>🤢</div>
                <div style={{fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600'}}>Poison</div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)'}}>Gradual damage</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}>🔥</div>
                <div style={{fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600'}}>Fever</div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)'}}>Multiple effects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-py section-bg">
        <div className="container text-center">
          <h2 className="section-title section-title-green">
            💊 Ready to Fight Back?
          </h2>
          <p className="hero-description mb-24">
            Now that you know about diseases, learn how to cure and prevent them!
          </p>
          <div className="hero-buttons">
            <Link href="/smp/wiki/medicine" className="btn btn-primary">
              💊 Medicine Crafting
            </Link>
            <Link href="/smp/wiki/protection" className="btn btn-secondary">
              🛡️ Protection Guide
            </Link>
            <Link href="/smp/wiki/epidemic-guide" className="btn btn-staff">
              📖 Back to Epidemic Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/smp/wiki/epidemic-guide" className="footer-link footer-link-green">
                ← Epidemic Guide
              </Link>
              <Link href="/smp/wiki/medicine" className="footer-link footer-link-orange">
                Medicine →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Knowledge is your best defense!
          </p>
        </div>
      </footer>
    </div>
  )
}
