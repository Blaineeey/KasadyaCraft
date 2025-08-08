import Link from "next/link"

export default function DiplomacyPage() {
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
                🤝
              </div>
              <div>
                <h1 className="nav-title">Towny Diplomacy</h1>
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
            🤝 Towny Diplomacy
          </h1>
          <p className="hero-description">
            Master the art of international relations and forge powerful alliances between nations and towns.
          </p>
        </div>
      </section>

      {/* Diplomacy Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🌍 Understanding Diplomacy
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎯 Diplomatic Status Types</h3>
              <p className="card-description mb-16">
                Different relationship statuses between nations and their effects.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Neutral:</strong> Default relationship status</div>
                <div className="mb-8">• <strong>Allied:</strong> Friendly nations with benefits</div>
                <div className="mb-8">• <strong>Enemy:</strong> Hostile relations, PvP enabled</div>
                <div className="mb-8">• <strong>Peaceful:</strong> Non-aggression pact</div>
                <div className="mb-8">• Trade route bonuses available</div>
                <div className="mb-8">• Shared teleportation access</div>
                <div className="mb-8">• Military cooperation possible</div>
                <div className="mb-8">• Economic partnerships encouraged</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ Essential Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/nation ally add [nation]</div>
                  <div className="command-description">Send alliance request</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation ally remove [nation]</div>
                  <div className="command-description">Remove alliance</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation enemy add [nation]</div>
                  <div className="command-description">Declare enemy status</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation peaceful add [nation]</div>
                  <div className="command-description">Request peace treaty</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation list</div>
                  <div className="command-description">View all nations and relations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Alliances */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🤝 Building Alliances
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📋 Alliance Process</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Step 1:</strong> Identify potential allies with similar goals</div>
                <div className="mb-8">• <strong>Step 2:</strong> Initiate diplomatic contact via Discord</div>
                <div className="mb-8">• <strong>Step 3:</strong> Negotiate terms and benefits</div>
                <div className="mb-8">• <strong>Step 4:</strong> Send formal alliance request</div>
                <div className="mb-8">• <strong>Step 5:</strong> Maintain regular communication</div>
                <div className="mb-8">• <strong>Step 6:</strong> Honor mutual defense agreements</div>
                <div className="mb-8">• <strong>Step 7:</strong> Share intelligence on threats</div>
                <div className="mb-8">• <strong>Step 8:</strong> Support in diplomatic disputes</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💰 Alliance Benefits</h3>
              <p className="card-description mb-16">
                Advantages of maintaining strong diplomatic relationships.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Mutual defense agreements</div>
                <div className="mb-8">• Shared teleportation networks</div>
                <div className="mb-8">• Trade route bonuses</div>
                <div className="mb-8">• Resource sharing agreements</div>
                <div className="mb-8">• Joint military operations</div>
                <div className="mb-8">• Diplomatic immunity in allied towns</div>
                <div className="mb-8">• Information sharing networks</div>
                <div className="mb-8">• Cultural exchange programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treaty Types */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            📜 Treaty Types & Templates
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🕊️ Non-Aggression Pact</h3>
              <p className="card-description mb-16">
                Agreement to avoid hostile actions between nations.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• No military action against each other</div>
                <div className="mb-8">• Respect territorial boundaries</div>
                <div className="mb-8">• Peaceful resolution of disputes</div>
                <div className="mb-8">• Specified duration terms</div>
                <div className="mb-8">• Renewal options available</div>
                <div className="mb-8">• Violation consequences</div>
                <div className="mb-8">• Neutral mediation clauses</div>
                <div className="mb-8">• Emergency contact procedures</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💼 Trade Agreement</h3>
              <p className="card-description mb-16">
                Economic cooperation and commerce treaties.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Reduced trade taxes between nations</div>
                <div className="mb-8">• Preferred trading partner status</div>
                <div className="mb-8">• Shared market access</div>
                <div className="mb-8">• Resource exchange agreements</div>
                <div className="mb-8">• Currency exchange rates</div>
                <div className="mb-8">• Quality standards enforcement</div>
                <div className="mb-8">• Dispute resolution mechanisms</div>
                <div className="mb-8">• Regular review schedules</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚔️ Mutual Defense Treaty</h3>
              <p className="card-description mb-16">
                Military alliance and protection agreements.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Mutual military assistance when attacked</div>
                <div className="mb-8">• Shared intelligence on threats</div>
                <div className="mb-8">• Joint military exercises</div>
                <div className="mb-8">• Coordinated defense strategies</div>
                <div className="mb-8">• Emergency response protocols</div>
                <div className="mb-8">• Resource sharing for defense</div>
                <div className="mb-8">• Command structure agreements</div>
                <div className="mb-8">• Victory condition definitions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diplomatic Strategy */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🎯 Diplomatic Strategy
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">💡 Power Projection</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Economic Influence:</strong> Control key trade routes</div>
                <div className="mb-8">• <strong>Military Strength:</strong> Maintain strong defenses</div>
                <div className="mb-8">• <strong>Cultural Impact:</strong> Host events and festivals</div>
                <div className="mb-8">• <strong>Diplomatic Network:</strong> Build extensive alliances</div>
                <div className="mb-8">• <strong>Information Control:</strong> Manage public perception</div>
                <div className="mb-8">• <strong>Resource Monopoly:</strong> Control rare materials</div>
                <div className="mb-8">• <strong>Strategic Location:</strong> Occupy key territories</div>
                <div className="mb-8">• <strong>Technological Edge:</strong> Advanced infrastructure</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🗣️ Negotiation Tactics</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Win-Win Solutions:</strong> Find mutual benefits</div>
                <div className="mb-8">• <strong>Leverage:</strong> Use your strengths wisely</div>
                <div className="mb-8">• <strong>Patience:</strong> Don't rush important decisions</div>
                <div className="mb-8">• <strong>Flexibility:</strong> Adapt to changing situations</div>
                <div className="mb-8">• <strong>Preparation:</strong> Research before negotiations</div>
                <div className="mb-8">• <strong>Alternatives:</strong> Always have backup plans</div>
                <div className="mb-8">• <strong>Timing:</strong> Choose the right moment</div>
                <div className="mb-8">• <strong>Reputation:</strong> Maintain credibility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            💡 Diplomacy Success Tips
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Best Practices</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Always honor your agreements to build trust</div>
                <div className="mb-8">• Keep detailed records of all diplomatic interactions</div>
                <div className="mb-8">• Use Discord for complex negotiations</div>
                <div className="mb-8">• Consider long-term consequences of actions</div>
                <div className="mb-8">• Build relationships before you need them</div>
                <div className="mb-8">• Maintain regular communication with allies</div>
                <div className="mb-8">• Be transparent about your intentions</div>
                <div className="mb-8">• Respect cultural differences between nations</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">❌ Common Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Breaking agreements for short-term gains</div>
                <div className="mb-8">• Ignoring smaller nations and towns</div>
                <div className="mb-8">• Making threats you can't follow through</div>
                <div className="mb-8">• Failing to communicate with allies</div>
                <div className="mb-8">• Being inflexible in negotiations</div>
                <div className="mb-8">• Letting personal conflicts affect diplomacy</div>
                <div className="mb-8">• Not having backup diplomatic options</div>
                <div className="mb-8">• Underestimating opponent capabilities</div>
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
              <Link href="/towny/wiki/nations" className="footer-link footer-link-orange">
                ← Nations Guide
              </Link>
              <Link href="/towny/wiki/wars" className="footer-link footer-link-green">
                Wars System →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Master the art of diplomacy!
          </p>
        </div>
      </footer>
    </div>
  )
}
