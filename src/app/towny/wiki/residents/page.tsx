import Link from "next/link"

export default function ResidentsPage() {
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
                👥
              </div>
              <div>
                <h1 className="nav-title">Managing Residents</h1>
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
            👥 Managing Residents
          </h1>
          <p className="hero-description">
            Learn how to invite, manage, and organize your town's residents. Build a thriving community with proper leadership and organization.
          </p>
        </div>
      </section>

      {/* Inviting Residents */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            📨 Inviting New Residents
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎯 Finding Good Residents</h3>
              <p className="card-description mb-16">
                Quality residents are the foundation of a successful town.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Look for active, friendly players</div>
                <div className="mb-8">• Check their build quality and style</div>
                <div className="mb-8">• Observe their behavior in chat</div>
                <div className="mb-8">• Ask current residents for recommendations</div>
                <div className="mb-8">• Consider their timezone and activity</div>
                <div className="mb-8">• Look for players who contribute to community</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">📋 Invitation Process</h3>
              <div className="command-list mb-16">
                <div className="command-item">
                  <div className="command-name">/town invite [player]</div>
                  <div className="command-description">Send invitation to a player</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town add [player]</div>
                  <div className="command-description">Force add (if they accept)</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/accept [town]</div>
                  <div className="command-description">Player accepts invitation</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/deny [town]</div>
                  <div className="command-description">Player declines invitation</div>
                </div>
              </div>
              <div className="text-gray text-14">
                <div className="mb-8">• Invitations expire after 24 hours</div>
                <div className="mb-8">• Players can only be in one town at a time</div>
                <div className="mb-8">• Explain your town's rules before inviting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resident Ranks */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🏆 Resident Ranks & Roles
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">👑 Mayor</h3>
              <p className="card-description mb-16">
                The town leader with full administrative powers.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Full control over town settings</div>
                <div className="mb-8">• Can invite/kick residents</div>
                <div className="mb-8">• Manages town bank and taxes</div>
                <div className="mb-8">• Can claim/unclaim land</div>
                <div className="mb-8">• Sets town spawn and board</div>
                <div className="mb-8">• Can transfer mayorship</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚖️ Assistant</h3>
              <p className="card-description mb-16">
                Trusted residents with administrative privileges.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Can invite new residents</div>
                <div className="mb-8">• Can kick problematic residents</div>
                <div className="mb-8">• Can claim land for the town</div>
                <div className="mb-8">• Can manage some town settings</div>
                <div className="mb-8">• Cannot access town bank</div>
                <div className="mb-8">• Cannot change major settings</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🏠 Resident</h3>
              <p className="card-description mb-16">
                Regular town members with basic privileges.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Can build in town land</div>
                <div className="mb-8">• Can use town spawn</div>
                <div className="mb-8">• Can chat in town channel</div>
                <div className="mb-8">• Can own plots</div>
                <div className="mb-8">• Can contribute to town bank</div>
                <div className="mb-8">• Subject to town taxes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Ranks */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🎖️ Rank Management
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📊 Rank Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town rank add [player] assistant</div>
                  <div className="command-description">Promote resident to assistant</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town rank remove [player] assistant</div>
                  <div className="command-description">Demote assistant to resident</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set mayor [player]</div>
                  <div className="command-description">Transfer mayorship</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town</div>
                  <div className="command-description">View all residents and ranks</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💡 Promotion Guidelines</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Promote based on trust and activity</div>
                <div className="mb-8">• Look for helpful, community-minded players</div>
                <div className="mb-8">• Consider their building contributions</div>
                <div className="mb-8">• Ensure they understand town rules</div>
                <div className="mb-8">• Start with temporary trial periods</div>
                <div className="mb-8">• Don't promote too many assistants</div>
                <div className="mb-8">• Regularly review assistant performance</div>
                <div className="mb-8">• Communicate expectations clearly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resident Management */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-red">
            🛠️ Daily Management Tasks
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Regular Duties</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Check town bank balance daily</div>
                <div className="mb-8">• Monitor resident activity levels</div>
                <div className="mb-8">• Respond to resident questions and concerns</div>
                <div className="mb-8">• Mediate disputes between residents</div>
                <div className="mb-8">• Plan and organize town events</div>
                <div className="mb-8">• Keep town spawn area clean and welcoming</div>
                <div className="mb-8">• Update town board with announcements</div>
                <div className="mb-8">• Review and approve new building projects</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚠️ Problem Resolution</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Address griefing incidents quickly</div>
                <div className="mb-8">• Handle noise complaints and disputes</div>
                <div className="mb-8">• Deal with inactive residents appropriately</div>
                <div className="mb-8">• Enforce town building standards</div>
                <div className="mb-8">• Manage tax collection issues</div>
                <div className="mb-8">• Remove inappropriate builds or signs</div>
                <div className="mb-8">• Handle requests for plot changes</div>
                <div className="mb-8">• Coordinate with server staff when needed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Removing Residents */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🚪 Removing Residents
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📋 Valid Reasons for Removal</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Griefing or destroying town property</div>
                <div className="mb-8">• Consistent failure to pay taxes</div>
                <div className="mb-8">• Harassment of other residents</div>
                <div className="mb-8">• Violating server or town rules</div>
                <div className="mb-8">• Extended inactivity (30+ days)</div>
                <div className="mb-8">• Building inappropriate structures</div>
                <div className="mb-8">• Refusing to follow town guidelines</div>
                <div className="mb-8">• Causing drama or conflicts</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚡ Removal Process</h3>
              <div className="command-list mb-16">
                <div className="command-item">
                  <div className="command-name">/town kick [player]</div>
                  <div className="command-description">Remove resident from town</div>
                </div>
              </div>
              <div className="text-gray text-14">
                <div className="mb-8">• Give warnings before kicking</div>
                <div className="mb-8">• Document the reasons for removal</div>
                <div className="mb-8">• Allow time for the resident to respond</div>
                <div className="mb-8">• Consider temporary suspensions first</div>
                <div className="mb-8">• Kicked residents lose their plots</div>
                <div className="mb-8">• Their builds may be removed</div>
                <div className="mb-8">• They can be re-invited later if appropriate</div>
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
              <Link href="/towny/wiki/permissions" className="footer-link footer-link-orange">
                ← Permissions Guide
              </Link>
              <Link href="/towny/wiki/plots" className="footer-link footer-link-green">
                Plot System →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Build a thriving community!
          </p>
        </div>
      </footer>
    </div>
  )
}
