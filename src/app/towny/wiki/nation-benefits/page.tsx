import Link from "next/link"

export default function NationBenefitsPage() {
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
                <h1 className="nav-title">Nation Benefits</h1>
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
            👑 Nation Benefits
          </h1>
          <p className="hero-description">
            Discover the advantages and perks of nation membership for towns and their residents.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🌟 Nation Membership Benefits
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">⚡ Immediate Benefits</h3>
              <p className="card-description mb-16">
                Advantages you gain as soon as you join a nation.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Protection:</strong> Military defense and support</div>
                <div className="mb-8">• <strong>Trade:</strong> Access to nation-wide markets</div>
                <div className="mb-8">• <strong>Resources:</strong> Shared materials and supplies</div>
                <div className="mb-8">• <strong>Prestige:</strong> Enhanced reputation and status</div>
                <div className="mb-8">• <strong>Communication:</strong> Nation chat channels</div>
                <div className="mb-8">• <strong>Teleportation:</strong> Fast travel networks</div>
                <div className="mb-8">• <strong>Diplomacy:</strong> International relations</div>
                <div className="mb-8">• <strong>Events:</strong> Nation-wide celebrations</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🚀 Long-term Advantages</h3>
              <p className="card-description mb-16">
                Benefits that grow over time with nation membership.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Faster town growth and development</div>
                <div className="mb-8">• Access to nation infrastructure</div>
                <div className="mb-8">• Diplomatic immunity and protection</div>
                <div className="mb-8">• Shared knowledge and expertise</div>
                <div className="mb-8">• Collective bargaining power</div>
                <div className="mb-8">• Cultural exchange opportunities</div>
                <div className="mb-8">• Advanced military support</div>
                <div className="mb-8">• Leadership development programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nation Tiers */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            📊 Nation Tier System
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🌱 Tier 1: Emerging Nation</h3>
              <p className="card-description mb-16">
                Small nations with 2-5 member towns.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Basic protection and support</div>
                <div className="mb-8">• Access to nation chat</div>
                <div className="mb-8">• Shared teleportation network</div>
                <div className="mb-8">• Basic trade agreements</div>
                <div className="mb-8">• Simple diplomatic relations</div>
                <div className="mb-8">• Community events</div>
                <div className="mb-8">• Resource sharing programs</div>
                <div className="mb-8">• Growth support initiatives</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏛️ Tier 2: Established Nation</h3>
              <p className="card-description mb-16">
                Medium nations with 6-15 member towns.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Enhanced military support</div>
                <div className="mb-8">• Nation-wide infrastructure projects</div>
                <div className="mb-8">• Advanced trade networks</div>
                <div className="mb-8">• Diplomatic representation</div>
                <div className="mb-8">• Resource sharing programs</div>
                <div className="mb-8">• Cultural exchange initiatives</div>
                <div className="mb-8">• Educational programs</div>
                <div className="mb-8">• Economic development support</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">👑 Tier 3: Major Power</h3>
              <p className="card-description mb-16">
                Large nations with 16+ member towns.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Full military protection</div>
                <div className="mb-8">• Extensive infrastructure networks</div>
                <div className="mb-8">• Preferential trade status</div>
                <div className="mb-8">• International influence</div>
                <div className="mb-8">• Advanced nation perks</div>
                <div className="mb-8">• Leadership opportunities</div>
                <div className="mb-8">• Elite military units</div>
                <div className="mb-8">• Global diplomatic reach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Benefits */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            💰 Economic Benefits
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📈 Trade Advantages</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Reduced Taxes:</strong> Lower trade fees within nation</div>
                <div className="mb-8">• <strong>Market Access:</strong> Nation-wide shop networks</div>
                <div className="mb-8">• <strong>Bulk Purchasing:</strong> Group buying power</div>
                <div className="mb-8">• <strong>Trade Routes:</strong> Protected commercial pathways</div>
                <div className="mb-8">• <strong>Currency Benefits:</strong> Stable nation economy</div>
                <div className="mb-8">• <strong>Export Support:</strong> International trade assistance</div>
                <div className="mb-8">• <strong>Quality Standards:</strong> Certified products</div>
                <div className="mb-8">• <strong>Market Intelligence:</strong> Trade information sharing</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏦 Financial Support</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Development Loans:</strong> Nation-backed funding</div>
                <div className="mb-8">• <strong>Emergency Aid:</strong> Support during crises</div>
                <div className="mb-8">• <strong>Infrastructure Grants:</strong> Shared project funding</div>
                <div className="mb-8">• <strong>Tax Incentives:</strong> Reduced upkeep costs</div>
                <div className="mb-8">• <strong>Investment Opportunities:</strong> Nation-wide projects</div>
                <div className="mb-8">• <strong>Insurance Programs:</strong> Risk protection</div>
                <div className="mb-8">• <strong>Banking Services:</strong> Nation financial institutions</div>
                <div className="mb-8">• <strong>Economic Planning:</strong> Strategic development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Benefits */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-red">
            ⚔️ Military Benefits
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🛡️ Defense Support</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Mutual Defense:</strong> Nation-wide protection pact</div>
                <div className="mb-8">• <strong>Rapid Response:</strong> Quick military assistance</div>
                <div className="mb-8">• <strong>Fortification Aid:</strong> Help building defenses</div>
                <div className="mb-8">• <strong>Intelligence Sharing:</strong> Threat information</div>
                <div className="mb-8">• <strong>Strategic Planning:</strong> Coordinated defense</div>
                <div className="mb-8">• <strong>Early Warning:</strong> Threat detection systems</div>
                <div className="mb-8">• <strong>Evacuation Support:</strong> Emergency relocation</div>
                <div className="mb-8">• <strong>Counter-Intelligence:</strong> Security operations</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ Military Resources</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Weapon Supplies:</strong> Access to nation armory</div>
                <div className="mb-8">• <strong>Training Programs:</strong> Combat skill development</div>
                <div className="mb-8">• <strong>Elite Units:</strong> Specialized military forces</div>
                <div className="mb-8">• <strong>War Machines:</strong> Advanced siege equipment</div>
                <div className="mb-8">• <strong>Veteran Support:</strong> Experienced commanders</div>
                <div className="mb-8">• <strong>Military Ranks:</strong> Recognition system</div>
                <div className="mb-8">• <strong>Combat Bonuses:</strong> Enhanced abilities</div>
                <div className="mb-8">• <strong>War Chest:</strong> Military funding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Benefits */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🎉 Social Benefits
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">👥 Community Features</h3>
              <p className="card-description mb-16">
                Social interaction and community building.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Nation chat channels</div>
                <div className="mb-8">• Events and festivals</div>
                <div className="mb-8">• Cultural exchange programs</div>
                <div className="mb-8">• Mentorship opportunities</div>
                <div className="mb-8">• Social networks</div>
                <div className="mb-8">• Community projects</div>
                <div className="mb-8">• Celebration ceremonies</div>
                <div className="mb-8">• Friendship building</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏆 Recognition Systems</h3>
              <p className="card-description mb-16">
                Achievement and progression systems.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Nation rank progression</div>
                <div className="mb-8">• Achievement awards</div>
                <div className="mb-8">• Hall of fame records</div>
                <div className="mb-8">• Titles and honors</div>
                <div className="mb-8">• Legacy building</div>
                <div className="mb-8">• Contribution tracking</div>
                <div className="mb-8">• Merit-based advancement</div>
                <div className="mb-8">• Historical documentation</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📚 Cultural Programs</h3>
              <p className="card-description mb-16">
                Education and cultural development.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Building workshops</div>
                <div className="mb-8">• History lessons</div>
                <div className="mb-8">• Skill training</div>
                <div className="mb-8">• Leadership development</div>
                <div className="mb-8">• Art exhibitions</div>
                <div className="mb-8">• Music performances</div>
                <div className="mb-8">• Literary competitions</div>
                <div className="mb-8">• Knowledge sharing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Requirements */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            📋 Membership Requirements
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Basic Requirements</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Active Town:</strong> Must own an established town</div>
                <div className="mb-8">• <strong>Good Standing:</strong> Positive community reputation</div>
                <div className="mb-8">• <strong>Commitment:</strong> Dedication to nation values</div>
                <div className="mb-8">• <strong>Contribution:</strong> Willingness to participate</div>
                <div className="mb-8">• <strong>Stability:</strong> Consistent activity levels</div>
                <div className="mb-8">• <strong>Leadership:</strong> Capable town management</div>
                <div className="mb-8">• <strong>Resources:</strong> Ability to pay nation taxes</div>
                <div className="mb-8">• <strong>Compatibility:</strong> Alignment with nation goals</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚠️ Ongoing Obligations</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Participation:</strong> Engage in nation activities</div>
                <div className="mb-8">• <strong>Support:</strong> Help fellow nation members</div>
                <div className="mb-8">• <strong>Loyalty:</strong> Honor alliance commitments</div>
                <div className="mb-8">• <strong>Diplomacy:</strong> Maintain good relations</div>
                <div className="mb-8">• <strong>Taxes:</strong> Pay nation dues regularly</div>
                <div className="mb-8">• <strong>Defense:</strong> Contribute to military efforts</div>
                <div className="mb-8">• <strong>Communication:</strong> Stay active in nation chat</div>
                <div className="mb-8">• <strong>Growth:</strong> Help expand nation influence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            💡 Maximizing Nation Benefits
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Best Practices</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Actively participate in nation events and activities</div>
                <div className="mb-8">• Build strong relationships with other members</div>
                <div className="mb-8">• Contribute your unique skills and resources</div>
                <div className="mb-8">• Communicate regularly with nation leadership</div>
                <div className="mb-8">• Support nation goals and initiatives</div>
                <div className="mb-8">• Take advantage of available programs</div>
                <div className="mb-8">• Mentor new nation members</div>
                <div className="mb-8">• Represent the nation positively</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">❌ Common Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Joining a nation without understanding expectations</div>
                <div className="mb-8">• Not participating in nation activities</div>
                <div className="mb-8">• Failing to pay nation taxes regularly</div>
                <div className="mb-8">• Ignoring nation chat and communications</div>
                <div className="mb-8">• Not supporting fellow nation members</div>
                <div className="mb-8">• Breaking nation rules and agreements</div>
                <div className="mb-8">• Leaving without proper notice</div>
                <div className="mb-8">• Not taking advantage of available benefits</div>
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
              <Link href="/towny/wiki/alliances" className="footer-link footer-link-orange">
                ← Alliances Guide
              </Link>
              <Link href="/towny/wiki/shops" className="footer-link footer-link-green">
                Shop System →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Unlock your nation's full potential!
          </p>
        </div>
      </footer>
    </div>
  )
}
