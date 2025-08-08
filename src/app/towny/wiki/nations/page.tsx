import Link from "next/link"

export default function NationsPage() {
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
                👑
              </div>
              <div>
                <h1 className="nav-title">Creating a Nation</h1>
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
            👑 Creating a Nation
          </h1>
          <p className="hero-description">
            Unite multiple towns under one banner! Learn how to create and lead a powerful nation that can dominate the server through diplomacy and warfare.
          </p>
        </div>
      </section>

      {/* Nation Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🏛️ What is a Nation?
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎯 Nation Benefits</h3>
              <p className="card-description mb-16">
                Nations provide powerful advantages for member towns and their residents.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• United defense against enemies</div>
                <div className="mb-8">• Shared resources and wealth</div>
                <div className="mb-8">• Diplomatic immunity and alliances</div>
                <div className="mb-8">• Coordinated warfare capabilities</div>
                <div className="mb-8">• Increased political influence</div>
                <div className="mb-8">• Access to nation chat channels</div>
                <div className="mb-8">• Collective decision making</div>
                <div className="mb-8">• Enhanced server reputation</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💰 Nation Requirements</h3>
              <p className="card-description mb-16">
                Creating and maintaining a nation requires significant resources and commitment.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Creation cost:</strong> $5,000</div>
                <div className="mb-8">• <strong>Daily upkeep:</strong> $50 per day</div>
                <div className="mb-8">• <strong>Minimum towns:</strong> 1 (your own)</div>
                <div className="mb-8">• <strong>Maximum towns:</strong> Unlimited</div>
                <div className="mb-8">• Must be a town mayor to create</div>
                <div className="mb-8">• Need stable income for upkeep</div>
                <div className="mb-8">• Requires active leadership</div>
                <div className="mb-8">• Long-term commitment necessary</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creating a Nation */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🏗️ Nation Creation Process
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📋 Step-by-Step Guide</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Step 1:</strong> Ensure you have $5,000</div>
                <div className="mb-8">• <strong>Step 2:</strong> Be the mayor of a town</div>
                <div className="mb-8">• <strong>Step 3:</strong> Choose a unique nation name</div>
                <div className="mb-8">• <strong>Step 4:</strong> Use /nation new [name]</div>
                <div className="mb-8">• <strong>Step 5:</strong> Set up nation bank</div>
                <div className="mb-8">• <strong>Step 6:</strong> Configure nation settings</div>
                <div className="mb-8">• <strong>Step 7:</strong> Start recruiting towns</div>
                <div className="mb-8">• <strong>Step 8:</strong> Establish diplomatic relations</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚡ Essential Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/nation new [name]</div>
                  <div className="command-description">Create a new nation</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation invite [town]</div>
                  <div className="command-description">Invite a town to join</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation deposit [amount]</div>
                  <div className="command-description">Add money to nation bank</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation set king [player]</div>
                  <div className="command-description">Transfer nation leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nation Leadership */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            👑 Nation Leadership Structure
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">👑 King/Queen</h3>
              <p className="card-description mb-16">
                The supreme leader with full control over the nation.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Full administrative control</div>
                <div className="mb-8">• Can invite/kick towns</div>
                <div className="mb-8">• Manages nation bank</div>
                <div className="mb-8">• Declares wars and peace</div>
                <div className="mb-8">• Sets nation taxes</div>
                <div className="mb-8">• Appoints assistants</div>
                <div className="mb-8">• Makes diplomatic decisions</div>
                <div className="mb-8">• Can transfer leadership</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚖️ Assistant</h3>
              <p className="card-description mb-16">
                Trusted leaders who help manage nation affairs.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Can invite towns to nation</div>
                <div className="mb-8">• Can kick problematic towns</div>
                <div className="mb-8">• Limited diplomatic powers</div>
                <div className="mb-8">• Can manage some settings</div>
                <div className="mb-8">• Cannot access nation bank</div>
                <div className="mb-8">• Cannot declare wars</div>
                <div className="mb-8">• Help with daily management</div>
                <div className="mb-8">• Represent nation interests</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🏘️ Town Mayor</h3>
              <p className="card-description mb-16">
                Leaders of member towns with local authority.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Full control over their town</div>
                <div className="mb-8">• Can leave nation if desired</div>
                <div className="mb-8">• Participates in nation decisions</div>
                <div className="mb-8">• Contributes to nation taxes</div>
                <div className="mb-8">• Benefits from nation protection</div>
                <div className="mb-8">• Access to nation chat</div>
                <div className="mb-8">• Can suggest nation policies</div>
                <div className="mb-8">• Represents town interests</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiting Towns */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🎯 Recruiting Member Towns
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🔍 Finding Good Towns</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Look for active, well-managed towns</div>
                <div className="mb-8">• Consider geographic location</div>
                <div className="mb-8">• Check town financial stability</div>
                <div className="mb-8">• Evaluate leadership quality</div>
                <div className="mb-8">• Assess military potential</div>
                <div className="mb-8">• Consider cultural compatibility</div>
                <div className="mb-8">• Look for complementary strengths</div>
                <div className="mb-8">• Avoid towns with many enemies</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💬 Recruitment Strategy</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Approach mayors personally</div>
                <div className="mb-8">• Explain nation benefits clearly</div>
                <div className="mb-8">• Offer protection and support</div>
                <div className="mb-8">• Be transparent about expectations</div>
                <div className="mb-8">• Start with friendly towns</div>
                <div className="mb-8">• Build relationships over time</div>
                <div className="mb-8">• Respect their decision if they decline</div>
                <div className="mb-8">• Maintain good relations regardless</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nation Management */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🛠️ Managing Your Nation
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📊 Daily Responsibilities</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Monitor nation bank balance</div>
                <div className="mb-8">• Check on member town status</div>
                <div className="mb-8">• Respond to diplomatic messages</div>
                <div className="mb-8">• Coordinate defense efforts</div>
                <div className="mb-8">• Mediate disputes between towns</div>
                <div className="mb-8">• Plan nation-wide events</div>
                <div className="mb-8">• Maintain alliance relationships</div>
                <div className="mb-8">• Keep nation chat active and positive</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💰 Financial Management</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Collect nation taxes from towns</div>
                <div className="mb-8">• Maintain upkeep fund ($50/day)</div>
                <div className="mb-8">• Budget for war expenses</div>
                <div className="mb-8">• Support struggling member towns</div>
                <div className="mb-8">• Invest in nation infrastructure</div>
                <div className="mb-8">• Plan for expansion costs</div>
                <div className="mb-8">• Keep emergency reserves</div>
                <div className="mb-8">• Track income and expenses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            💡 Nation Success Tips
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Best Practices</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Start small and grow gradually</div>
                <div className="mb-8">• Focus on quality over quantity</div>
                <div className="mb-8">• Maintain active communication</div>
                <div className="mb-8">• Be fair and consistent in leadership</div>
                <div className="mb-8">• Support member towns actively</div>
                <div className="mb-8">• Plan for long-term sustainability</div>
                <div className="mb-8">• Build strong diplomatic relationships</div>
                <div className="mb-8">• Adapt to changing server dynamics</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">❌ Common Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Creating a nation too early</div>
                <div className="mb-8">• Not having enough funds for upkeep</div>
                <div className="mb-8">• Accepting any town that applies</div>
                <div className="mb-8">• Ignoring member town needs</div>
                <div className="mb-8">• Making unilateral decisions</div>
                <div className="mb-8">• Starting unnecessary wars</div>
                <div className="mb-8">• Poor communication with members</div>
                <div className="mb-8">• Not planning for succession</div>
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
              <Link href="/towny/wiki/expansion" className="footer-link footer-link-orange">
                ← Town Expansion
              </Link>
              <Link href="/towny/wiki/diplomacy" className="footer-link footer-link-green">
                Diplomacy System →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Unite the server under your banner!
          </p>
        </div>
      </footer>
    </div>
  )
}
