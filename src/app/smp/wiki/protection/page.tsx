import Link from "next/link"

export default function ProtectionPage() {
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
              <div className="nav-logo" style={{background: 'rgba(0, 212, 255, 0.2)', border: '2px solid rgba(0, 212, 255, 0.4)'}}>
                🛡️
              </div>
              <div>
                <h1 className="nav-title">Protection & Prevention</h1>
                <p className="nav-subtitle-mono">Stay Healthy</p>
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
          <h1 className="hero-title" style={{color: '#00D4FF'}}>
            🛡️ Disease Protection & Prevention
          </h1>
          <p className="hero-description">
            The best cure is prevention! Learn how to protect yourself and avoid getting infected in the first place.
          </p>
        </div>
      </section>

      {/* Prevention First */}
      <section className="section-py section-bg">
        <div className="container">
          <div className="card text-center" style={{background: 'rgba(0, 212, 255, 0.1)', border: '2px solid rgba(0, 212, 255, 0.4)'}}>
            <h2 className="card-title" style={{color: '#00D4FF', marginBottom: '16px'}}>
              ✅ Prevention is Better Than Cure!
            </h2>
            <p className="card-description" style={{fontSize: '1.05rem', maxWidth: '800px', margin: '0 auto'}}>
              Following good practices can drastically reduce your infection risk. Stay vigilant and protect your community!
            </p>
          </div>
        </div>
      </section>

      {/* Protective Equipment */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            👕 Protective Equipment
          </h2>
          <p className="hero-description text-center mb-32">
            Wearing the right gear can reduce infection chances. Craft these items for protection:
          </p>

          <div className="grid grid-2">
            <div className="card" style={{background: 'rgba(126, 211, 33, 0.05)', border: '2px solid rgba(126, 211, 33, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '16px'}}>
                <span style={{fontSize: '3rem'}}>😷</span>
              </div>
              <h3 className="card-title text-center" style={{color: '#7ED321'}}>Face Masks</h3>
              <p className="card-description mb-16 text-center">
                Reduces airborne disease transmission
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Protects from infected players nearby</li>
                <li>Essential when helping sick players</li>
                <li>Wear in crowded areas</li>
                <li>Check /epidemic help for crafting recipe</li>
              </ul>
            </div>

            <div className="card" style={{background: 'rgba(0, 212, 255, 0.05)', border: '2px solid rgba(0, 212, 255, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '16px'}}>
                <span style={{fontSize: '3rem'}}>🧤</span>
              </div>
              <h3 className="card-title text-center" style={{color: '#00D4FF'}}>Protective Gloves</h3>
              <p className="card-description mb-16 text-center">
                Prevents infection through contact
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Reduces combat transmission risk</li>
                <li>Useful when fighting infected mobs</li>
                <li>Wear during PvP battles</li>
                <li>Can be combined with other armor</li>
              </ul>
            </div>

            <div className="card" style={{background: 'rgba(155, 48, 255, 0.05)', border: '2px solid rgba(155, 48, 255, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '16px'}}>
                <span style={{fontSize: '3rem'}}>🦺</span>
              </div>
              <h3 className="card-title text-center" style={{color: '#9B30FF'}}>Hazmat Suit</h3>
              <p className="card-description mb-16 text-center">
                Full body protection from diseases
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Maximum protection from all sources</li>
                <li>Expensive but highly effective</li>
                <li>Perfect for epidemic outbreaks</li>
                <li>Required in high-risk areas</li>
              </ul>
            </div>

            <div className="card" style={{background: 'rgba(255, 184, 0, 0.05)', border: '2px solid rgba(255, 184, 0, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '16px'}}>
                <span style={{fontSize: '3rem'}}>🥾</span>
              </div>
              <h3 className="card-title text-center" style={{color: '#FFB800'}}>Protective Boots</h3>
              <p className="card-description mb-16 text-center">
                Prevents environmental infections
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Protects in contaminated biomes</li>
                <li>Useful in swamp areas</li>
                <li>Reduces environmental risk</li>
                <li>Lightweight and practical</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            ✅ Best Practices for Staying Healthy
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏥 Regular Health Checks</h3>
              <p className="card-description mb-12">
                Monitor your status frequently to catch infections early
              </p>
              <div className="command-list mb-16">
                <div className="command-item">
                  <div className="command-name">/epidemic status</div>
                  <div className="command-description">Check daily!</div>
                </div>
              </div>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Use command at least once per day</li>
                <li>Check after fights or visiting players</li>
                <li>Early detection = easier treatment</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">🚫 Avoid Infected Areas</h3>
              <p className="card-description mb-16">
                Stay away from high-risk locations
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Swamps and dark forests are risky</li>
                <li>Avoid areas with infected players</li>
                <li>Don't loot from infected player bases</li>
                <li>Use vaccines before exploring risky zones</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">💊 Keep Medicine Stocked</h3>
              <p className="card-description mb-16">
                Always have emergency medicine ready
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Keep basic cures in your ender chest</li>
                <li>Store medicine at your base</li>
                <li>Bring medicine on adventures</li>
                <li>Trade for medicine if you can't craft</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">🤝 Community Safety</h3>
              <p className="card-description mb-16">
                Work together to prevent outbreaks
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Warn others about your infections</li>
                <li>Stay isolated when severely sick</li>
                <li>Share vaccines during outbreaks</li>
                <li>Help cure infected community members</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">🛡️ Use Vaccines</h3>
              <p className="card-description mb-16">
                Prevention through vaccination
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Get vaccinated before risky activities</li>
                <li>Vaccines provide temporary immunity</li>
                <li>Re-apply when immunity wears off</li>
                <li>Expensive but worth it for safety</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">⚔️ Combat Safety</h3>
              <p className="card-description mb-16">
                Protect yourself during fights
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Wear protective gear in PvP</li>
                <li>Use ranged weapons against infected mobs</li>
                <li>Wash/cure immediately after battles</li>
                <li>Don't fight when already infected</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Building Immunity */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            💪 Building Immunity
          </h2>
          <div className="card" style={{background: 'rgba(126, 211, 33, 0.1)', border: '2px solid rgba(126, 211, 33, 0.3)'}}>
            <h3 className="card-title" style={{color: '#7ED321', marginBottom: '16px'}}>
              How Immunity Works
            </h3>
            <p className="card-description mb-20" style={{fontSize: '1rem'}}>
              Recovering from a disease can grant you temporary or permanent immunity! This is a powerful survival mechanic.
            </p>
            <div className="grid grid-3">
              <div>
                <h4 className="text-green mb-8" style={{fontSize: '1rem'}}>💊 Cure & Recover</h4>
                <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                  Successfully treating a disease may grant immunity to it
                </p>
              </div>
              <div>
                <h4 className="text-green mb-8" style={{fontSize: '1rem'}}>🛡️ Use Vaccines</h4>
                <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                  Vaccines provide immunity without getting sick first
                </p>
              </div>
              <div>
                <h4 className="text-green mb-8" style={{fontSize: '1rem'}}>⏰ Duration Varies</h4>
                <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                  Check /epidemic immunity to see your current protections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="section-py section-bg">
        <div className="container text-center">
          <h2 className="section-title section-title-orange">
            🚨 What to Do If You Get Infected
          </h2>
          <p className="hero-description mb-32">
            Despite your best efforts, you might still get sick. Here's what to do:
          </p>
          <div className="grid grid-2" style={{textAlign: 'left'}}>
            <div className="card">
              <div style={{fontSize: '2rem', marginBottom: '12px'}}>1️⃣</div>
              <h4 className="text-orange mb-8" style={{fontSize: '1rem'}}>Check Your Status</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px'}}>
                Use /epidemic status to see what disease you have
              </p>
            </div>
            <div className="card">
              <div style={{fontSize: '2rem', marginBottom: '12px'}}>2️⃣</div>
              <h4 className="text-orange mb-8" style={{fontSize: '1rem'}}>Get Medicine</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px'}}>
                Craft or obtain the appropriate cure quickly
              </p>
            </div>
            <div className="card">
              <div style={{fontSize: '2rem', marginBottom: '12px'}}>3️⃣</div>
              <h4 className="text-orange mb-8" style={{fontSize: '1rem'}}>Isolate Yourself</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px'}}>
                Stay away from others to avoid spreading infection
              </p>
            </div>
            <div className="card">
              <div style={{fontSize: '2rem', marginBottom: '12px'}}>4️⃣</div>
              <h4 className="text-orange mb-8" style={{fontSize: '1rem'}}>Use the Cure</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px'}}>
                Apply medicine with /epidemic cure or right-click
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-py">
        <div className="container text-center">
          <h2 className="section-title section-title-blue">
            📚 Continue Learning
          </h2>
          <p className="hero-description mb-24">
            Master all aspects of epidemic survival!
          </p>
          <div className="hero-buttons">
            <Link href="/smp/wiki/epidemic-guide" className="btn btn-primary">
              📖 Epidemic Guide
            </Link>
            <Link href="/smp/wiki/diseases" className="btn btn-secondary">
              🦠 Disease Types
            </Link>
            <Link href="/smp/wiki/medicine" className="btn btn-staff">
              💊 Medicine Crafting
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/smp/wiki/medicine" className="footer-link footer-link-green">
                ← Medicine
              </Link>
              <Link href="/smp/wiki/epidemic-guide" className="footer-link footer-link-orange">
                Epidemic Guide →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Stay safe, stay healthy!
          </p>
        </div>
      </footer>
    </div>
  )
}
