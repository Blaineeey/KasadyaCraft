import Link from "next/link"

export default function ExpansionPage() {
  return (
    <div className="minecraft-bg">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-flex">
            <div className="nav-left">
              <Link href="/towny/wiki" className="nav-back">
                ← Back to Wiki
              </Link>
              <div className="nav-logo nav-logo-wiki">
                🗺️
              </div>
              <div>
                <h1 className="nav-title">Expanding Your Town</h1>
                <p className="nav-subtitle-mono">play.kasadyacraft.online</p>
              </div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/towny" className="nav-link-towny">Towny</Link>
              <Link href="/towny/wiki" className="nav-link-wiki">Wiki</Link>
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
          <h1 className="hero-title-wiki">
            🗺️ Expanding Your Town
          </h1>
          <p className="hero-description">
            Learn strategic expansion techniques to grow your town efficiently. Plan your growth, manage costs, and create a thriving metropolis.
          </p>
        </div>
      </section>

      {/* Expansion Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            📈 Expansion Fundamentals
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎯 Why Expand?</h3>
              <p className="card-description mb-16">
                Town expansion brings many benefits but requires careful planning and resources.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• More space for residents and builds</div>
                <div className="mb-8">• Additional plots to sell for income</div>
                <div className="mb-8">• Room for specialized districts</div>
                <div className="mb-8">• Protection for important resources</div>
                <div className="mb-8">• Increased town prestige and influence</div>
                <div className="mb-8">• Better defensive positioning</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💰 Expansion Costs</h3>
              <p className="card-description mb-16">
                Understanding the financial requirements is crucial for successful expansion.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Extra claims:</strong> $25 per chunk</div>
                <div className="mb-8">• <strong>Daily upkeep:</strong> +$1 per claimed chunk</div>
                <div className="mb-8">• <strong>Free claims:</strong> 8 per resident</div>
                <div className="mb-8">• <strong>Maximum size:</strong> 200 chunks total</div>
                <div className="mb-8">• <strong>Nation upkeep:</strong> Additional $50/day if in nation</div>
                <div className="mb-8">• Plan for long-term upkeep costs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Planning */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🗺️ Strategic Expansion Planning
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📋 Pre-Expansion Checklist</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Ensure stable town finances</div>
                <div className="mb-8">• Have at least 10 days upkeep in bank</div>
                <div className="mb-8">• Plan the expansion layout on paper</div>
                <div className="mb-8">• Consider future resident needs</div>
                <div className="mb-8">• Check for nearby enemy towns</div>
                <div className="mb-8">• Identify valuable resources to protect</div>
                <div className="mb-8">• Communicate plans with residents</div>
                <div className="mb-8">• Set aside expansion budget</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🎯 Expansion Priorities</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Phase 1:</strong> Secure town center and spawn</div>
                <div className="mb-8">• <strong>Phase 2:</strong> Create residential districts</div>
                <div className="mb-8">• <strong>Phase 3:</strong> Add commercial/shop areas</div>
                <div className="mb-8">• <strong>Phase 4:</strong> Protect resource areas</div>
                <div className="mb-8">• <strong>Phase 5:</strong> Create recreational spaces</div>
                <div className="mb-8">• <strong>Phase 6:</strong> Establish defensive perimeter</div>
                <div className="mb-8">• Always maintain connected claims</div>
                <div className="mb-8">• Leave room for future growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Commands */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            ⚡ Expansion Commands
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏗️ Claiming Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town claim</div>
                  <div className="command-description">Claim the chunk you're standing in</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town claim auto</div>
                  <div className="command-description">Auto-claim chunks as you walk</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town claim outpost</div>
                  <div className="command-description">Claim a distant outpost chunk</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town unclaim</div>
                  <div className="command-description">Remove claim from current chunk</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">📊 Information Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/towny map</div>
                  <div className="command-description">View nearby claims map</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/towny map big</div>
                  <div className="command-description">View larger area map</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town</div>
                  <div className="command-description">Check current claim count</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/towny prices</div>
                  <div className="command-description">View expansion costs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Strategies */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🎯 Expansion Strategies
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏘️ Residential Expansion</h3>
              <p className="card-description mb-16">
                Focus on creating attractive living spaces for current and future residents.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Plan residential districts</div>
                <div className="mb-8">• Create variety in plot sizes</div>
                <div className="mb-8">• Include parks and common areas</div>
                <div className="mb-8">• Ensure good connectivity</div>
                <div className="mb-8">• Plan for different income levels</div>
                <div className="mb-8">• Consider future population growth</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🏪 Commercial Expansion</h3>
              <p className="card-description mb-16">
                Develop business districts to generate income and attract traders.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Create dedicated shopping areas</div>
                <div className="mb-8">• Plan for easy visitor access</div>
                <div className="mb-8">• Include storage and logistics areas</div>
                <div className="mb-8">• Design attractive storefronts</div>
                <div className="mb-8">• Consider market squares</div>
                <div className="mb-8">• Plan for future business growth</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🛡️ Defensive Expansion</h3>
              <p className="card-description mb-16">
                Secure strategic locations and create defensive advantages.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Claim high ground and choke points</div>
                <div className="mb-8">• Protect valuable resource areas</div>
                <div className="mb-8">• Create buffer zones from enemies</div>
                <div className="mb-8">• Plan escape routes</div>
                <div className="mb-8">• Consider siege warfare tactics</div>
                <div className="mb-8">• Build defensive structures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Growth */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            📈 Managing Rapid Growth
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Growth Management Tips</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Expand gradually, not all at once</div>
                <div className="mb-8">• Ensure each expansion pays for itself</div>
                <div className="mb-8">• Recruit residents to support growth</div>
                <div className="mb-8">• Maintain town aesthetics during expansion</div>
                <div className="mb-8">• Keep infrastructure up to date</div>
                <div className="mb-8">• Plan for increased management needs</div>
                <div className="mb-8">• Delegate responsibilities to assistants</div>
                <div className="mb-8">• Regular financial reviews</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚠️ Common Expansion Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Expanding too fast without residents</div>
                <div className="mb-8">• Not planning for upkeep costs</div>
                <div className="mb-8">• Creating disconnected claim islands</div>
                <div className="mb-8">• Ignoring defensive considerations</div>
                <div className="mb-8">• Poor layout planning</div>
                <div className="mb-8">• Not communicating with residents</div>
                <div className="mb-8">• Expanding into enemy territory</div>
                <div className="mb-8">• Neglecting existing areas for new ones</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/towny/wiki/settings" className="footer-link footer-link-orange">
                ← Town Settings
              </Link>
              <Link href="/towny/wiki/nations" className="footer-link footer-link-green">
                Creating Nations →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Build your empire, one chunk at a time!
          </p>
        </div>
      </footer>
    </div>
  )
}
