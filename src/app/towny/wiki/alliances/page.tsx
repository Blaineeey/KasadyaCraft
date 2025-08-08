import Link from "next/link"

export default function AlliancesPage() {
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
                <h1 className="nav-title">Towny Alliances</h1>
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
            🤝 Towny Alliances
          </h1>
          <p className="hero-description">
            Build powerful coalitions and strengthen your nation through strategic partnerships and mutual cooperation.
          </p>
        </div>
      </section>

      {/* Alliance Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🌟 Understanding Alliances
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎯 Alliance Types</h3>
              <p className="card-description mb-16">
                Different types of alliances and their characteristics.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Bilateral:</strong> Two-nation partnership</div>
                <div className="mb-8">• <strong>Multilateral:</strong> Multiple nation coalition</div>
                <div className="mb-8">• <strong>Regional:</strong> Geographic-based alliance</div>
                <div className="mb-8">• <strong>Ideological:</strong> Shared values/goals</div>
                <div className="mb-8">• <strong>Economic:</strong> Trade-focused partnerships</div>
                <div className="mb-8">• <strong>Military:</strong> Defense-oriented alliances</div>
                <div className="mb-8">• <strong>Cultural:</strong> Social and cultural exchange</div>
                <div className="mb-8">• <strong>Temporary:</strong> Short-term strategic alliances</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ Alliance Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/nation ally add [nation]</div>
                  <div className="command-description">Send alliance request</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation ally remove [nation]</div>
                  <div className="command-description">End alliance</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation ally list</div>
                  <div className="command-description">View current allies</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation list allies</div>
                  <div className="command-description">See all nation alliances</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation set board [message]</div>
                  <div className="command-description">Alliance announcements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance Formation */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            🏗️ Forming an Alliance
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📋 Formation Process</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Step 1:</strong> Identify potential partners with compatible goals</div>
                <div className="mb-8">• <strong>Step 2:</strong> Reach out through Discord or in-game messages</div>
                <div className="mb-8">• <strong>Step 3:</strong> Discuss mutual benefits and expectations</div>
                <div className="mb-8">• <strong>Step 4:</strong> Negotiate terms and conditions</div>
                <div className="mb-8">• <strong>Step 5:</strong> Create written alliance charter</div>
                <div className="mb-8">• <strong>Step 6:</strong> Send formal alliance requests</div>
                <div className="mb-8">• <strong>Step 7:</strong> Announce publicly on Discord</div>
                <div className="mb-8">• <strong>Step 8:</strong> Set up communication channels</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔍 Partner Selection</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Compatibility:</strong> Similar goals and values</div>
                <div className="mb-8">• <strong>Strength:</strong> Complementary capabilities</div>
                <div className="mb-8">• <strong>Location:</strong> Strategic geographic position</div>
                <div className="mb-8">• <strong>Stability:</strong> Reliable leadership and population</div>
                <div className="mb-8">• <strong>Reputation:</strong> Good standing in community</div>
                <div className="mb-8">• <strong>Activity:</strong> Regular player engagement</div>
                <div className="mb-8">• <strong>Resources:</strong> Economic contribution potential</div>
                <div className="mb-8">• <strong>Trust:</strong> Proven reliability and honesty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance Management */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🛠️ Alliance Management
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">👑 Alliance Leader</h3>
              <p className="card-description mb-16">
                Overall strategic direction and external diplomacy.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Sets alliance strategic direction</div>
                <div className="mb-8">• Handles external diplomacy</div>
                <div className="mb-8">• Resolves internal conflicts</div>
                <div className="mb-8">• Coordinates major decisions</div>
                <div className="mb-8">• Represents alliance publicly</div>
                <div className="mb-8">• Manages alliance reputation</div>
                <div className="mb-8">• Plans long-term objectives</div>
                <div className="mb-8">• Maintains member relationships</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚔️ Military Commander</h3>
              <p className="card-description mb-16">
                Defense coordination and battle planning.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Coordinates defense strategies</div>
                <div className="mb-8">• Plans military operations</div>
                <div className="mb-8">• Organizes training programs</div>
                <div className="mb-8">• Manages war preparations</div>
                <div className="mb-8">• Leads combat operations</div>
                <div className="mb-8">• Maintains military readiness</div>
                <div className="mb-8">• Develops tactical doctrines</div>
                <div className="mb-8">• Coordinates with allied forces</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💰 Economic Coordinator</h3>
              <p className="card-description mb-16">
                Trade agreements and resource allocation.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Negotiates trade agreements</div>
                <div className="mb-8">• Manages resource allocation</div>
                <div className="mb-8">• Plans financial strategies</div>
                <div className="mb-8">• Coordinates economic policies</div>
                <div className="mb-8">• Monitors alliance finances</div>
                <div className="mb-8">• Develops trade networks</div>
                <div className="mb-8">• Manages shared projects</div>
                <div className="mb-8">• Tracks economic performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance Benefits */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🎁 Alliance Benefits
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">💪 Mutual Benefits</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Defense:</strong> Mutual protection agreements</div>
                <div className="mb-8">• <strong>Trade:</strong> Preferential trading terms</div>
                <div className="mb-8">• <strong>Resources:</strong> Shared material access</div>
                <div className="mb-8">• <strong>Information:</strong> Intelligence sharing</div>
                <div className="mb-8">• <strong>Technology:</strong> Knowledge exchange</div>
                <div className="mb-8">• <strong>Culture:</strong> Social interaction programs</div>
                <div className="mb-8">• <strong>Infrastructure:</strong> Joint building projects</div>
                <div className="mb-8">• <strong>Diplomacy:</strong> Enhanced negotiating power</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚠️ Responsibilities</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Defense:</strong> Honor mutual defense pacts</div>
                <div className="mb-8">• <strong>Respect:</strong> Honor allied territory</div>
                <div className="mb-8">• <strong>Intelligence:</strong> Share threat information</div>
                <div className="mb-8">• <strong>Communication:</strong> Maintain regular contact</div>
                <div className="mb-8">• <strong>Support:</strong> Assist in diplomatic disputes</div>
                <div className="mb-8">• <strong>Treaties:</strong> Uphold agreed-upon terms</div>
                <div className="mb-8">• <strong>Loyalty:</strong> Avoid conflicting alliances</div>
                <div className="mb-8">• <strong>Contribution:</strong> Participate actively</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Strategies */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🎯 Advanced Alliance Strategies
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🌐 Alliance Networks</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Hub & Spoke:</strong> Central nation with multiple allies</div>
                <div className="mb-8">• <strong>Web Network:</strong> Interconnected alliance system</div>
                <div className="mb-8">• <strong>Bloc System:</strong> Competing alliance groups</div>
                <div className="mb-8">• <strong>Flexible Partnerships:</strong> Issue-specific alliances</div>
                <div className="mb-8">• <strong>Nested Alliances:</strong> Alliances within alliances</div>
                <div className="mb-8">• <strong>Regional Blocs:</strong> Geographic-based coalitions</div>
                <div className="mb-8">• <strong>Ideological Groups:</strong> Value-based partnerships</div>
                <div className="mb-8">• <strong>Economic Unions:</strong> Trade-focused alliances</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚖️ Strategic Considerations</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Balance:</strong> Prevent any one alliance from dominating</div>
                <div className="mb-8">• <strong>Entanglement:</strong> Avoid unwanted conflict involvement</div>
                <div className="mb-8">• <strong>Credibility:</strong> Honor commitments to maintain trust</div>
                <div className="mb-8">• <strong>Flexibility:</strong> Adapt to changing circumstances</div>
                <div className="mb-8">• <strong>Redundancy:</strong> Multiple alliance options</div>
                <div className="mb-8">• <strong>Integration:</strong> Economic and military cooperation</div>
                <div className="mb-8">• <strong>Institutionalization:</strong> Formal structures</div>
                <div className="mb-8">• <strong>Evolution:</strong> Adapt alliance over time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            💡 Alliance Success Tips
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Best Practices</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Maintain multiple alliance options for flexibility</div>
                <div className="mb-8">• Use economic integration to strengthen bonds</div>
                <div className="mb-8">• Create joint institutions for long-term stability</div>
                <div className="mb-8">• Balance alliance commitments with national interests</div>
                <div className="mb-8">• Monitor alliance effectiveness regularly</div>
                <div className="mb-8">• Communicate openly and frequently</div>
                <div className="mb-8">• Plan for leadership succession</div>
                <div className="mb-8">• Document all agreements clearly</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">❌ Common Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Forming alliances without clear objectives</div>
                <div className="mb-8">• Accepting incompatible alliance partners</div>
                <div className="mb-8">• Failing to honor alliance commitments</div>
                <div className="mb-8">• Poor communication with alliance members</div>
                <div className="mb-8">• Not planning for conflict scenarios</div>
                <div className="mb-8">• Ignoring power imbalances within alliance</div>
                <div className="mb-8">• Lack of clear leadership structure</div>
                <div className="mb-8">• Not adapting to changing circumstances</div>
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
              <Link href="/towny/wiki/wars" className="footer-link footer-link-orange">
                ← Wars Guide
              </Link>
              <Link href="/towny/wiki/nation-benefits" className="footer-link footer-link-green">
                Nation Benefits →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Strength through unity!
          </p>
        </div>
      </footer>
    </div>
  )
}
