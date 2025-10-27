import Link from "next/link"
import Navigation from "@/components/Navigation"

export default function MedicinePage() {
  return (
    <div className="minecraft-bg">
      <Navigation variant="wiki" showBackButton={true} backLink="/smp/wiki" backText="← Back to Wiki" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title" style={{color: '#7ED321'}}>
            💊 Medicine & Vaccine Crafting
          </h1>
          <p className="hero-description">
            Learn how to craft cures, vaccines, and treatments to survive and help your community!
          </p>
        </div>
      </section>

      {/* How to Use Medicine */}
      <section className="section-py section-bg">
        <div className="container">
          <div className="card text-center" style={{background: 'rgba(126, 211, 33, 0.1)', border: '2px solid rgba(126, 211, 33, 0.4)'}}>
            <h2 className="card-title" style={{color: '#7ED321', marginBottom: '16px'}}>
              💊 How to Use Medicine
            </h2>
            <p className="card-description mb-20" style={{fontSize: '1rem'}}>
              Once you've crafted medicine, use this command to cure yourself:
            </p>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '16px 24px',
              borderRadius: '8px',
              display: 'inline-block',
              marginBottom: '12px'
            }}>
              <code style={{color: '#7ED321', fontSize: '1.1rem', fontWeight: '700'}}>/epidemic cure</code>
            </div>
            <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
              Hold the medicine in your hand and use this command, or right-click to consume it!
            </p>
          </div>
        </div>
      </section>

      {/* Medicine Types */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🧪 Types of Medicine
          </h2>
          <div className="grid grid-3">
            <div className="card" style={{background: 'rgba(126, 211, 33, 0.05)', border: '2px solid rgba(126, 211, 33, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '12px'}}>
                <span style={{fontSize: '3rem'}}>💊</span>
              </div>
              <h3 className="card-title text-center" style={{color: '#7ED321'}}>Basic Cures</h3>
              <p className="card-description text-center mb-12">
                Simple medicine for mild diseases
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', lineHeight: '1.6'}}>
                <li>Easiest to craft</li>
                <li>Uses common materials</li>
                <li>Works on minor infections</li>
                <li>Quick relief for symptoms</li>
              </ul>
            </div>
            <div className="card" style={{background: 'rgba(0, 212, 255, 0.05)', border: '2px solid rgba(0, 212, 255, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '12px'}}>
                <span style={{fontSize: '3rem'}}>💉</span>
              </div>
              <h3 className="card-title text-center" style={{color: '#00D4FF'}}>Advanced Medicine</h3>
              <p className="card-description text-center mb-12">
                Stronger cures for serious diseases
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', lineHeight: '1.6'}}>
                <li>Requires rare ingredients</li>
                <li>Cures moderate infections</li>
                <li>Faster healing effect</li>
                <li>Multiple disease treatment</li>
              </ul>
            </div>
            <div className="card" style={{background: 'rgba(155, 48, 255, 0.05)', border: '2px solid rgba(155, 48, 255, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '12px'}}>
                <span style={{fontSize: '3rem'}}>🛡️</span>
              </div>
              <h3 className="card-title text-center" style={{color: '#9B30FF'}}>Vaccines</h3>
              <p className="card-description text-center mb-12">
                Prevent diseases before infection
              </p>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', lineHeight: '1.6'}}>
                <li>Build immunity to diseases</li>
                <li>Prevents future infections</li>
                <li>Lasts for limited time</li>
                <li>Protect your community!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting Stations */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🔨 Medicine Crafting Stations
          </h2>
          <p className="hero-description text-center mb-32">
            You'll need special crafting stations to create medicine. Here's how to get started:
          </p>

          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🧪 Brewing Stand (Vanilla)</h3>
              <p className="card-description mb-16">
                The basic brewing stand is your first medicine station
              </p>
              <div className="mb-16">
                <h4 className="text-orange mb-8" style={{fontSize: '0.95rem'}}>Materials Needed:</h4>
                <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                  <li>1x Blaze Rod</li>
                  <li>3x Cobblestone</li>
                </ul>
              </div>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                Use this to brew basic cures and remedies
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">💊 Medical Lab (Advanced)</h3>
              <p className="card-description mb-16">
                An advanced station for complex medicine
              </p>
              <div className="mb-16">
                <h4 className="text-orange mb-8" style={{fontSize: '0.95rem'}}>May Include:</h4>
                <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                  <li>Check in-game guide for recipe</li>
                  <li>Use /epidemic help for info</li>
                  <li>Ask staff or experienced players</li>
                </ul>
              </div>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                Required for vaccines and advanced cures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting Materials */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            📦 Common Medicine Ingredients
          </h2>
          <p className="hero-description text-center mb-32">
            These items are commonly used in medicine crafting. Stock up on them!
          </p>

          <div className="grid grid-4">
            <div className="card text-center">
              <div style={{fontSize: '2.5rem', marginBottom: '8px'}}>🍄</div>
              <h4 className="text-white mb-8" style={{fontSize: '0.95rem', fontWeight: '600'}}>Mushrooms</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>Base ingredient for many cures</p>
            </div>
            <div className="card text-center">
              <div style={{fontSize: '2.5rem', marginBottom: '8px'}}>🌸</div>
              <h4 className="text-white mb-8" style={{fontSize: '0.95rem', fontWeight: '600'}}>Flowers</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>Used in brewing remedies</p>
            </div>
            <div className="card text-center">
              <div style={{fontSize: '2.5rem', marginBottom: '8px'}}>🧪</div>
              <h4 className="text-white mb-8" style={{fontSize: '0.95rem', fontWeight: '600'}}>Potions</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>Base for advanced medicine</p>
            </div>
            <div className="card text-center">
              <div style={{fontSize: '2.5rem', marginBottom: '8px'}}>✨</div>
              <h4 className="text-white mb-8" style={{fontSize: '0.95rem', fontWeight: '600'}}>Nether Items</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>Rare ingredients for vaccines</p>
            </div>
            <div className="card text-center">
              <div style={{fontSize: '2.5rem', marginBottom: '8px'}}>🍯</div>
              <h4 className="text-white mb-8" style={{fontSize: '0.95rem', fontWeight: '600'}}>Honey</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>Soothes symptoms</p>
            </div>
            <div className="card text-center">
              <div style={{fontSize: '2.5rem', marginBottom: '8px'}}>🌿</div>
              <h4 className="text-white mb-8" style={{fontSize: '0.95rem', fontWeight: '600'}}>Wheat/Seeds</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>Common filler material</p>
            </div>
            <div className="card text-center">
              <div style={{fontSize: '2.5rem', marginBottom: '8px'}}>💎</div>
              <h4 className="text-white mb-8" style={{fontSize: '0.95rem', fontWeight: '600'}}>Gems</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>Power advanced medicine</p>
            </div>
            <div className="card text-center">
              <div style={{fontSize: '2.5rem', marginBottom: '8px'}}>🔴</div>
              <h4 className="text-white mb-8" style={{fontSize: '0.95rem', fontWeight: '600'}}>Redstone</h4>
              <p className="text-14" style={{color: 'rgba(255, 255, 255, 0.7)'}}>Extends potion duration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            💡 Medicine Crafting Tips
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏥 Build a Medicine Stockpile</h3>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: '1.8'}}>
                <li>Always keep emergency medicine on hand</li>
                <li>Store cures in chests near your base</li>
                <li>Share medicine with your community</li>
                <li>Craft in bulk when you have materials</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">🌍 Explore for Ingredients</h3>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: '1.8'}}>
                <li>Different biomes have unique ingredients</li>
                <li>Flower forests are great for materials</li>
                <li>Nether has rare vaccine ingredients</li>
                <li>Trade with other players for supplies</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ Use Slimefun Automation</h3>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: '1.8'}}>
                <li>Auto-farm ingredients with Slimefun machines</li>
                <li>Set up automated brewing systems</li>
                <li>Use cargo to transport materials</li>
                <li>Efficiency is key to mass production!</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">🤝 Work Together</h3>
              <ul style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: '1.8'}}>
                <li>Share recipes with your community</li>
                <li>Create community medicine centers</li>
                <li>Help infected players get cures</li>
                <li>Distribute vaccines during outbreaks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-py">
        <div className="container text-center">
          <h2 className="section-title section-title-orange">
            🛡️ Learn About Protection
          </h2>
          <p className="hero-description mb-24">
            Prevention is better than cure! Learn how to protect yourself from infections.
          </p>
          <div className="hero-buttons">
            <Link href="/smp/wiki/protection" className="btn btn-primary">
              🛡️ Protection Guide
            </Link>
            <Link href="/smp/wiki/diseases" className="btn btn-secondary">
              🦠 Disease Types
            </Link>
            <Link href="/smp/wiki/epidemic-guide" className="btn btn-staff">
              📖 Epidemic Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/smp/wiki/diseases" className="footer-link footer-link-green">
                ← Diseases
              </Link>
              <Link href="/smp/wiki/protection" className="footer-link footer-link-orange">
                Protection →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Heal yourself, help others!
          </p>
        </div>
      </footer>
    </div>
  )
}
