import Link from "next/link"

export default function CustomRanks() {
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
                <h1 className="nav-title">AdvancedTowny Ranks</h1>
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
            👑 AdvancedTowny Rank System
          </h1>
          <p className="hero-description">
            Master the official AdvancedTowny plugin rank hierarchy with detailed permissions and responsibilities for each role.
          </p>
        </div>
      </section>

      {/* Core Ranks */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🏛️ Core Town Ranks
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">👨‍💼 Mayor</h3>
              <p className="card-description mb-16">
                The ultimate authority and leader of the town with full administrative control.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8"><strong>Permissions:</strong></div>
                <div className="mb-8">• Full town management and settings control</div>
                <div className="mb-8">• Invite and kick residents from the town</div>
                <div className="mb-8">• Set and modify town taxes and plot prices</div>
                <div className="mb-8">• Claim and unclaim land for the town</div>
                <div className="mb-8">• Assign and remove all ranks from residents</div>
                <div className="mb-8">• Access and manage the town bank</div>
                <div className="mb-8">• Declare war and form alliances</div>
                <div className="mb-8">• Delete the town (ultimate authority)</div>
                <div className="mb-8">• Set town spawn and jail locations</div>
                <div className="mb-8">• Toggle town settings (PvP, explosions, etc.)</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🤝 Assistant</h3>
              <p className="card-description mb-16">
                Second-in-command with most administrative privileges, serving as deputy mayor.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8"><strong>Permissions:</strong></div>
                <div className="mb-8">• Invite and kick residents (except Mayor)</div>
                <div className="mb-8">• Claim and unclaim land for the town</div>
                <div className="mb-8">• Set plot types and permissions</div>
                <div className="mb-8">• Access town bank for transactions</div>
                <div className="mb-8">• Assign Trusted and Resident ranks</div>
                <div className="mb-8">• Modify town settings and policies</div>
                <div className="mb-8">• Set plot prices and manage sales</div>
                <div className="mb-8">• Toggle plot permissions and settings</div>
                <div className="mb-8">• Manage town outposts</div>
                <div className="mb-8">• Cannot delete town or remove Mayor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resident Ranks */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            🏠 Resident Ranks
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">⭐ Trusted</h3>
              <p className="card-description mb-16">
                Experienced residents with additional privileges and responsibilities within the town.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8"><strong>Permissions:</strong></div>
                <div className="mb-8">• Build and destroy in town plots (if enabled)</div>
                <div className="mb-8">• Use switches, doors, and containers in town</div>
                <div className="mb-8">• Access to town spawn and jail commands</div>
                <div className="mb-8">• Invite new residents to the town</div>
                <div className="mb-8">• Use town chat channels</div>
                <div className="mb-8">• Participate in town votes and decisions</div>
                <div className="mb-8">• Access to trusted-only areas and buildings</div>
                <div className="mb-8">• Help moderate town activities</div>
                <div className="mb-8">• Represent town in diplomatic matters</div>
                <div className="mb-8">• Cannot kick residents or modify ranks</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">👤 Resident</h3>
              <p className="card-description mb-16">
                Standard town members with basic privileges and access to community features.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8"><strong>Permissions:</strong></div>
                <div className="mb-8">• Own and manage personal plots</div>
                <div className="mb-8">• Build and destroy on owned plots</div>
                <div className="mb-8">• Use town spawn command</div>
                <div className="mb-8">• Access public town facilities</div>
                <div className="mb-8">• Participate in town chat</div>
                <div className="mb-8">• Vote in town elections and decisions</div>
                <div className="mb-8">• Use public shops and markets</div>
                <div className="mb-8">• Access town protection benefits</div>
                <div className="mb-8">• Contribute to town projects</div>
                <div className="mb-8">• Limited interaction with town settings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Ranks */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🎨 Custom Rank System
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">⚙️ Rank Creation</h3>
              <p className="card-description mb-16">
                AdvancedTowny allows mayors to create custom ranks with specific permissions.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Create unlimited custom rank names</div>
                <div className="mb-8">• Assign specific permission nodes</div>
                <div className="mb-8">• Set rank hierarchy and priorities</div>
                <div className="mb-8">• Configure rank-based plot permissions</div>
                <div className="mb-8">• Design rank progression systems</div>
                <div className="mb-8">• Set rank-specific chat prefixes</div>
                <div className="mb-8">• Control access to town features</div>
                <div className="mb-8">• Manage rank inheritance rules</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🛡️ Popular Custom Ranks</h3>
              <p className="card-description mb-16">
                Common custom ranks used by successful towns in the server.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Guard:</strong> Town security and protection</div>
                <div className="mb-8">• <strong>Builder:</strong> Construction and development</div>
                <div className="mb-8">• <strong>Merchant:</strong> Trade and commerce specialist</div>
                <div className="mb-8">• <strong>Diplomat:</strong> Inter-town relations</div>
                <div className="mb-8">• <strong>Treasurer:</strong> Financial management</div>
                <div className="mb-8">• <strong>Recruiter:</strong> New member acquisition</div>
                <div className="mb-8">• <strong>Architect:</strong> Town planning and design</div>
                <div className="mb-8">• <strong>Veteran:</strong> Long-term loyal residents</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔧 Permission Nodes</h3>
              <p className="card-description mb-16">
                Key permission nodes available for custom rank configuration.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>towny.command.town.invite:</strong> Invite residents</div>
                <div className="mb-8">• <strong>towny.command.town.kick:</strong> Remove residents</div>
                <div className="mb-8">• <strong>towny.command.town.claim:</strong> Claim land</div>
                <div className="mb-8">• <strong>towny.command.plot.set:</strong> Modify plots</div>
                <div className="mb-8">• <strong>towny.command.town.deposit:</strong> Bank access</div>
                <div className="mb-8">• <strong>towny.command.town.rank:</strong> Manage ranks</div>
                <div className="mb-8">• <strong>towny.command.town.toggle:</strong> Town settings</div>
                <div className="mb-8">• <strong>towny.command.town.spawn:</strong> Teleport access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rank Management */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            ⚡ Rank Management Commands
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">👑 Administrative Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town rank add [player] [rank]</div>
                  <div className="command-description">Assign rank to a resident</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town rank remove [player] [rank]</div>
                  <div className="command-description">Remove rank from resident</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set assistant [player]</div>
                  <div className="command-description">Promote player to Assistant</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set mayor [player]</div>
                  <div className="command-description">Transfer mayorship (Mayor only)</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town ranklist</div>
                  <div className="command-description">View all available ranks</div>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📋 Information Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town</div>
                  <div className="command-description">View town info and resident ranks</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town list</div>
                  <div className="command-description">List all residents with ranks</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/resident [player]</div>
                  <div className="command-description">Check player's rank and status</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town online</div>
                  <div className="command-description">View online residents and ranks</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town permissions</div>
                  <div className="command-description">View rank permissions matrix</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rank Progression */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            📈 Rank Progression Guide
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🎯 Earning Promotions</h3>
              <p className="card-description mb-16">
                How to advance through the AdvancedTowny rank system.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>New Resident:</strong> Join town, follow rules</div>
                <div className="mb-8">• <strong>Active Participation:</strong> Engage in town activities</div>
                <div className="mb-8">• <strong>Demonstrate Loyalty:</strong> Show commitment to town</div>
                <div className="mb-8">• <strong>Help Others:</strong> Assist new residents</div>
                <div className="mb-8">• <strong>Contribute Resources:</strong> Donate to town projects</div>
                <div className="mb-8">• <strong>Follow Leadership:</strong> Respect mayor and assistants</div>
                <div className="mb-8">• <strong>Maintain Good Standing:</strong> Avoid conflicts</div>
                <div className="mb-8">• <strong>Show Initiative:</strong> Propose improvements</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⏰ Typical Timeline</h3>
              <p className="card-description mb-16">
                Average progression timeline for dedicated residents.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Day 1:</strong> Join as Resident</div>
                <div className="mb-8">• <strong>Week 1-2:</strong> Learn town rules and systems</div>
                <div className="mb-8">• <strong>Week 3-4:</strong> Eligible for Trusted rank</div>
                <div className="mb-8">• <strong>Month 2-3:</strong> Possible custom rank assignment</div>
                <div className="mb-8">• <strong>Month 6+:</strong> Assistant consideration</div>
                <div className="mb-8">• <strong>Year 1+:</strong> Potential mayorship transfer</div>
                <div className="mb-8">• <strong>Variable:</strong> Based on activity and contribution</div>
                <div className="mb-8">• <strong>Merit-Based:</strong> Quality over time served</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🚫 Common Mistakes</h3>
              <p className="card-description mb-16">
                Avoid these behaviors that can prevent rank advancement.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Asking for promotions repeatedly</div>
                <div className="mb-8">• Griefing or damaging town property</div>
                <div className="mb-8">• Ignoring town rules and policies</div>
                <div className="mb-8">• Being inactive for extended periods</div>
                <div className="mb-8">• Causing drama or conflicts</div>
                <div className="mb-8">• Refusing to help with town projects</div>
                <div className="mb-8">• Disrespecting higher-ranked members</div>
                <div className="mb-8">• Attempting to bypass rank requirements</div>
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
              <Link href="/towny/wiki/town-aesthetics" className="footer-link footer-link-orange">
                ← Town Aesthetics
              </Link>
              <Link href="/towny/wiki/town-banners" className="footer-link footer-link-green">
                Town Banners →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Master the AdvancedTowny rank system!
          </p>
        </div>
      </footer>
    </div>
  )
}
