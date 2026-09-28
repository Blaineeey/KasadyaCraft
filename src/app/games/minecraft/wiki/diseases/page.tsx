import Link from "next/link"
import Shell from "@/components/Shell"

export default function DiseasesPage() {
  return (
    <Shell>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display"style={{color: 'var(--danger)'}}>
             Disease Types & Mechanics
          </h1>
          <p className="lead">
            Understanding diseases is the first step to survival. Learn about symptoms, transmission, and severity levels.
          </p>
        </div>
      </section>

      {/* Check Health */}
      <section className="section-py section-bg">
        <div className="container">
          <div className="card text-center"style={{background: 'rgba(255, 92, 92, 0.1)', border: '2px solid rgba(255, 92, 92, 0.4)'}}>
            <h2 className="card-title"style={{color: 'var(--danger)', marginBottom: '16px'}}>
               How to Check If You're Infected
            </h2>
            <p className="card-description mb-20"style={{fontSize: '1rem'}}>
              Always monitor your health! Use this command frequently:
            </p>
            <div style={{
              background: 'var(--bg-raised)',
              padding: '16px 24px',
              borderRadius: '8px',
              display: 'inline-block',
              marginBottom: '12px'
            }}>
              <code style={{color: 'var(--accent)', fontSize: '1.1rem', fontWeight: '700'}}>/epidemic status</code>
            </div>
            <p className="text-14"style={{color: 'var(--text-2)'}}>
              This shows your current diseases, symptoms, and infection progress
            </p>
          </div>
        </div>
      </section>

      {/* Disease Severity */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
             Disease Severity Levels
          </h2>
          <div className="grid grid-3">
            <div className="card"style={{background: 'rgba(245, 179, 36, 0.05)', border: '2px solid rgba(245, 179, 36, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '12px'}}>
                <span style={{fontSize: '2.5rem'}}></span>
              </div>
              <h3 className="card-title text-center"style={{color: 'var(--accent)'}}>Mild</h3>
              <p className="card-description text-center">
                Minor symptoms, slow progression. Easy to cure with basic medicine.
              </p>
            </div>
            <div className="card"style={{background: 'rgba(245, 179, 36, 0.05)', border: '2px solid rgba(245, 179, 36, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '12px'}}>
                <span style={{fontSize: '2.5rem'}}></span>
              </div>
              <h3 className="card-title text-center"style={{color: 'var(--accent)'}}>Moderate</h3>
              <p className="card-description text-center">
                Noticeable symptoms, medium spread rate. Requires proper medicine.
              </p>
            </div>
            <div className="card"style={{background: 'rgba(255, 92, 92, 0.05)', border: '2px solid rgba(255, 92, 92, 0.3)'}}>
              <div style={{textAlign: 'center', marginBottom: '12px'}}>
                <span style={{fontSize: '2.5rem'}}></span>
              </div>
              <h3 className="card-title text-center"style={{color: 'var(--danger)'}}>Severe</h3>
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
             How Diseases Spread
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">Combat Transmission</h3>
              <p className="card-description mb-12">
                Fighting infected mobs or players is a common way to get sick.
              </p>
              <ul style={{color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Zombies and infected mobs carry diseases</li>
                <li>PvP with infected players can spread infection</li>
                <li>Higher risk in close combat situations</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">Player Proximity</h3>
              <p className="card-description mb-12">
                Being near infected players can cause airborne transmission.
              </p>
              <ul style={{color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Standing close to sick players increases risk</li>
                <li>Enclosed spaces make it worse</li>
                <li>Use protective gear when helping others</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">Environmental Factors</h3>
              <p className="card-description mb-12">
                Some biomes and conditions increase infection chances.
              </p>
              <ul style={{color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: '1.8'}}>
                <li>Swamp biomes may have higher disease rates</li>
                <li>Dark, damp areas are more dangerous</li>
                <li>Weather conditions can affect spread</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">Disease Progression</h3>
              <p className="card-description mb-12">
                Untreated diseases get worse over time.
              </p>
              <ul style={{color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: '1.8'}}>
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
             Common Symptoms
          </h2>
          <div className="card">
            <p className="card-description mb-20"style={{fontSize: '1rem'}}>
              Watch for these effects when infected. Use <code style={{color: 'var(--accent)'}}>/epidemic symptoms</code>to see your current status:
            </p>
            <div className="grid grid-4">
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}></div>
                <div style={{fontSize: '0.9rem', color: 'var(--text)', fontWeight: '600'}}>Health Drain</div>
                <div style={{fontSize: '0.8rem', color: 'var(--muted)'}}>Lose health over time</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}></div>
                <div style={{fontSize: '0.9rem', color: 'var(--text)', fontWeight: '600'}}>Slowness</div>
                <div style={{fontSize: '0.8rem', color: 'var(--muted)'}}>Reduced movement</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}></div>
                <div style={{fontSize: '0.9rem', color: 'var(--text)', fontWeight: '600'}}>Nausea</div>
                <div style={{fontSize: '0.8rem', color: 'var(--muted)'}}>Screen distortion</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}></div>
                <div style={{fontSize: '0.9rem', color: 'var(--text)', fontWeight: '600'}}>Weakness</div>
                <div style={{fontSize: '0.8rem', color: 'var(--muted)'}}>Less damage dealt</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}></div>
                <div style={{fontSize: '0.9rem', color: 'var(--text)', fontWeight: '600'}}>Hunger</div>
                <div style={{fontSize: '0.8rem', color: 'var(--muted)'}}>Increased food drain</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}></div>
                <div style={{fontSize: '0.9rem', color: 'var(--text)', fontWeight: '600'}}>Blindness</div>
                <div style={{fontSize: '0.8rem', color: 'var(--muted)'}}>Limited vision</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}></div>
                <div style={{fontSize: '0.9rem', color: 'var(--text)', fontWeight: '600'}}>Poison</div>
                <div style={{fontSize: '0.8rem', color: 'var(--muted)'}}>Gradual damage</div>
              </div>
              <div style={{textAlign: 'center', padding: '16px'}}>
                <div style={{fontSize: '2rem', marginBottom: '8px'}}></div>
                <div style={{fontSize: '0.9rem', color: 'var(--text)', fontWeight: '600'}}>Fever</div>
                <div style={{fontSize: '0.8rem', color: 'var(--muted)'}}>Multiple effects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-py section-bg">
        <div className="container text-center">
          <h2 className="section-title section-title-green">
             Ready to Fight Back?
          </h2>
          <p className="hero-description mb-24">
            Now that you know about diseases, learn how to cure and prevent them!
          </p>
          <div className="hero-buttons">
            <Link href="/games/minecraft/wiki/medicine"className="btn btn-primary">
               Medicine Crafting
            </Link>
            <Link href="/games/minecraft/wiki/protection"className="btn btn-secondary">
               Protection Guide
            </Link>
            <Link href="/games/minecraft/wiki/epidemic-guide"className="btn btn-staff">
               Back to Epidemic Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container">
        <nav className="wiki-nav"aria-label="Wiki pages">
              <Link href="/games/minecraft/wiki/epidemic-guide">
                ← Epidemic Guide
              </Link>
              <Link href="/games/minecraft/wiki/medicine">
                Medicine →
              </Link>
            </nav>
      </div>
    </Shell>
  )
}
