import Link from "next/link"

export default function ChatChannels() {
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
                💬
              </div>
              <div>
                <h1 className="nav-title">AdvancedTowny Chat</h1>
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
            💬 AdvancedTowny Chat System
          </h1>
          <p className="hero-description">
            Master the comprehensive chat channel system in AdvancedTowny with town, nation, and custom communication features.
          </p>
        </div>
      </section>

      {/* Core Chat Channels */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🏘️ AdvancedTowny Core Channels
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏛️ Town Chat (/tc)</h3>
              <p className="card-description mb-16">
                Primary communication channel for all town residents and leadership.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Access:</strong> All town residents automatically</div>
                <div className="mb-8">• <strong>Range:</strong> Town-wide communication</div>
                <div className="mb-8">• <strong>Usage:</strong> General discussions, announcements</div>
                <div className="mb-8">• <strong>Moderation:</strong> Mayor and Assistant control</div>
                <div className="mb-8">• <strong>Format:</strong> [Town] PlayerName: message</div>
                <div className="mb-8">• <strong>Colors:</strong> Customizable per town theme</div>
                <div className="mb-8">• <strong>Logging:</strong> All messages recorded for review</div>
                <div className="mb-8">• <strong>Permissions:</strong> towny.chat.town required</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🌍 Nation Chat (/nc)</h3>
              <p className="card-description mb-16">
                Nation-wide communication for all member towns and their residents.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Access:</strong> All nation member residents</div>
                <div className="mb-8">• <strong>Range:</strong> Entire nation network</div>
                <div className="mb-8">• <strong>Usage:</strong> Inter-town coordination, diplomacy</div>
                <div className="mb-8">• <strong>Moderation:</strong> Nation King and Capital control</div>
                <div className="mb-8">• <strong>Format:</strong> [Nation] TownName PlayerName: message</div>
                <div className="mb-8">• <strong>Colors:</strong> Nation-specific color schemes</div>
                <div className="mb-8">• <strong>Priority:</strong> Government announcements highlighted</div>
                <div className="mb-8">• <strong>Permissions:</strong> towny.chat.nation required</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">👥 Local Chat (/lc)</h3>
              <p className="card-description mb-16">
                Proximity-based chat for nearby players within visual range.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Access:</strong> All players within range</div>
                <div className="mb-8">• <strong>Range:</strong> 100-block radius (configurable)</div>
                <div className="mb-8">• <strong>Usage:</strong> Roleplay, local interactions</div>
                <div className="mb-8">• <strong>Moderation:</strong> Area-based staff oversight</div>
                <div className="mb-8">• <strong>Format:</strong> PlayerName says: message</div>
                <div className="mb-8">• <strong>Colors:</strong> Standard white text</div>
                <div className="mb-8">• <strong>Privacy:</strong> Not logged in most configurations</div>
                <div className="mb-8">• <strong>Permissions:</strong> towny.chat.local required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administrative Channels */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            👑 Administrative Communication
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏛️ Government Channel (/gov)</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Access:</strong> Mayor, Assistants, and designated officials</div>
                <div className="mb-8">• <strong>Purpose:</strong> Private leadership coordination and planning</div>
                <div className="mb-8">• <strong>Security:</strong> Encrypted and logged for accountability</div>
                <div className="mb-8">• <strong>Usage:</strong> Policy decisions, emergency coordination</div>
                <div className="mb-8">• <strong>Format:</strong> [GOV] Rank PlayerName: message</div>
                <div className="mb-8">• <strong>Permissions:</strong> towny.chat.government required</div>
                <div className="mb-8">• <strong>Moderation:</strong> Mayor has ultimate control</div>
                <div className="mb-8">• <strong>Archive:</strong> Messages stored for historical reference</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚔️ Military Command (/mil)</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Access:</strong> Military ranks and defense personnel</div>
                <div className="mb-8">• <strong>Purpose:</strong> Defense coordination and tactical planning</div>
                <div className="mb-8">• <strong>Security:</strong> High-priority encrypted communication</div>
                <div className="mb-8">• <strong>Usage:</strong> War planning, siege coordination, alerts</div>
                <div className="mb-8">• <strong>Format:</strong> [MIL] Rank PlayerName: message</div>
                <div className="mb-8">• <strong>Permissions:</strong> towny.chat.military required</div>
                <div className="mb-8">• <strong>Alerts:</strong> Emergency broadcast capabilities</div>
                <div className="mb-8">• <strong>Integration:</strong> Links with defense systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Channel System */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🎯 Custom Channel Creation
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">⚙️ Channel Setup Process</h3>
              <p className="card-description mb-16">
                Create specialized communication channels for specific purposes.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Command:</strong> /towny channel create [name]</div>
                <div className="mb-8">• <strong>Permissions:</strong> Set access levels and restrictions</div>
                <div className="mb-8">• <strong>Moderation:</strong> Assign channel moderators</div>
                <div className="mb-8">• <strong>Format:</strong> Customize message appearance</div>
                <div className="mb-8">• <strong>Colors:</strong> Set unique channel color scheme</div>
                <div className="mb-8">• <strong>Logging:</strong> Configure message retention</div>
                <div className="mb-8">• <strong>Integration:</strong> Link with Discord or other platforms</div>
                <div className="mb-8">• <strong>Testing:</strong> Verify functionality before deployment</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏗️ Department Channels</h3>
              <p className="card-description mb-16">
                Specialized channels for different town departments and functions.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Construction:</strong> Building projects and planning</div>
                <div className="mb-8">• <strong>Economics:</strong> Trade, banking, and financial matters</div>
                <div className="mb-8">• <strong>Diplomacy:</strong> Foreign relations and negotiations</div>
                <div className="mb-8">• <strong>Events:</strong> Festival planning and coordination</div>
                <div className="mb-8">• <strong>Security:</strong> Law enforcement and safety</div>
                <div className="mb-8">• <strong>Education:</strong> Training and knowledge sharing</div>
                <div className="mb-8">• <strong>Culture:</strong> Arts, history, and traditions</div>
                <div className="mb-8">• <strong>Technology:</strong> Innovation and development</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🎉 Event & Social Channels</h3>
              <p className="card-description mb-16">
                Community-focused channels for social interaction and events.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Announcements:</strong> Official town news and updates</div>
                <div className="mb-8">• <strong>Marketplace:</strong> Trading and commerce discussions</div>
                <div className="mb-8">• <strong>Help Desk:</strong> New resident support and questions</div>
                <div className="mb-8">• <strong>Social Hub:</strong> Casual conversation and community</div>
                <div className="mb-8">• <strong>Competitions:</strong> Contest coordination and results</div>
                <div className="mb-8">• <strong>Roleplay:</strong> Character development and storytelling</div>
                <div className="mb-8">• <strong>Off-Topic:</strong> Non-town related discussions</div>
                <div className="mb-8">• <strong>Feedback:</strong> Suggestions and improvement ideas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Commands */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            ⚡ AdvancedTowny Chat Commands
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">💬 Basic Communication</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/tc [message]</div>
                  <div className="command-description">Send message to town chat</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nc [message]</div>
                  <div className="command-description">Send message to nation chat</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/lc [message]</div>
                  <div className="command-description">Send message to local chat</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/msg [player] [message]</div>
                  <div className="command-description">Send private message to player</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/r [message]</div>
                  <div className="command-description">Reply to last private message</div>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔧 Channel Management</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/towny channel create [name]</div>
                  <div className="command-description">Create new custom channel</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/towny channel delete [name]</div>
                  <div className="command-description">Remove existing channel</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/towny channel invite [player]</div>
                  <div className="command-description">Add player to channel</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/towny channel kick [player]</div>
                  <div className="command-description">Remove player from channel</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/towny channel list</div>
                  <div className="command-description">View available channels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Moderation */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🛡️ Chat Moderation & Security
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🔐 Access Control System</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Rank-Based Access:</strong> Permissions tied to town ranks</div>
                <div className="mb-8">• <strong>Whitelist Control:</strong> Approved user lists for sensitive channels</div>
                <div className="mb-8">• <strong>Blacklist Management:</strong> Restrict problematic users</div>
                <div className="mb-8">• <strong>Temporary Permissions:</strong> Limited-time access grants</div>
                <div className="mb-8">• <strong>Guest Privileges:</strong> Visitor communication rights</div>
                <div className="mb-8">• <strong>Emergency Override:</strong> Crisis communication protocols</div>
                <div className="mb-8">• <strong>Role Integration:</strong> Sync with AdvancedTowny rank system</div>
                <div className="mb-8">• <strong>Permission Inheritance:</strong> Hierarchical access structure</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚖️ Moderation Tools</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Message Filtering:</strong> Automatic content screening</div>
                <div className="mb-8">• <strong>Spam Prevention:</strong> Rate limiting and flood protection</div>
                <div className="mb-8">• <strong>Profanity Filter:</strong> Configurable language restrictions</div>
                <div className="mb-8">• <strong>Mute System:</strong> Temporary communication restrictions</div>
                <div className="mb-8">• <strong>Ban Capabilities:</strong> Permanent channel exclusion</div>
                <div className="mb-8">• <strong>Warning System:</strong> Progressive discipline tracking</div>
                <div className="mb-8">• <strong>Report Function:</strong> User reporting mechanisms</div>
                <div className="mb-8">• <strong>Chat Logging:</strong> Complete message history and audit trails</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            🔗 Advanced Integration Features
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🤖 Discord Integration</h3>
              <p className="card-description mb-16">
                Bridge AdvancedTowny chat with Discord servers for extended communication.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Bidirectional message sync</div>
                <div className="mb-8">• Role synchronization with Discord</div>
                <div className="mb-8">• Webhook support for announcements</div>
                <div className="mb-8">• Voice channel integration</div>
                <div className="mb-8">• Bot commands for server management</div>
                <div className="mb-8">• Status updates and notifications</div>
                <div className="mb-8">• Cross-platform user identification</div>
                <div className="mb-8">• Automated moderation sync</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📱 Mobile & Web Access</h3>
              <p className="card-description mb-16">
                Access town chat from mobile devices and web browsers.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Web-based chat interface</div>
                <div className="mb-8">• Mobile app compatibility</div>
                <div className="mb-8">• Push notifications for mentions</div>
                <div className="mb-8">• Offline message queuing</div>
                <div className="mb-8">• Cross-device synchronization</div>
                <div className="mb-8">• Touch-friendly interface design</div>
                <div className="mb-8">• Voice message support</div>
                <div className="mb-8">• File sharing capabilities</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔔 Notification System</h3>
              <p className="card-description mb-16">
                Advanced notification and alert system for important communications.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Mention alerts and highlights</div>
                <div className="mb-8">• Keyword notification triggers</div>
                <div className="mb-8">• Priority message classification</div>
                <div className="mb-8">• Emergency broadcast system</div>
                <div className="mb-8">• Customizable notification sounds</div>
                <div className="mb-8">• Do-not-disturb mode settings</div>
                <div className="mb-8">• Message read receipts</div>
                <div className="mb-8">• Scheduled message delivery</div>
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
              <Link href="/towny/wiki/town-banners" className="footer-link footer-link-orange">
                ← Town Banners
              </Link>
              <Link href="/towny/wiki/town-events" className="footer-link footer-link-green">
                Town Events →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Master AdvancedTowny communication!
          </p>
        </div>
      </footer>
    </div>
  )
}
