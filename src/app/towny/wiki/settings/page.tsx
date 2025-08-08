import Link from "next/link"

export default function SettingsPage() {
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
                ⚙️
              </div>
              <div>
                <h1 className="nav-title">Town Settings & Toggles</h1>
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
            ⚙️ Town Settings & Toggles
          </h1>
          <p className="hero-description">
            Configure your town's behavior and rules. Master all the settings to create the perfect environment for your residents.
          </p>
        </div>
      </section>

      {/* Basic Settings */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🏘️ Basic Town Settings
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📝 Town Information</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town set name [name]</div>
                  <div className="command-description">Change your town's name</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set board [message]</div>
                  <div className="command-description">Set town message board</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set spawn</div>
                  <div className="command-description">Set town spawn location</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set tag [tag]</div>
                  <div className="command-description">Set town tag (3 letters)</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💰 Financial Settings</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town set taxes [amount]</div>
                  <div className="command-description">Set daily resident taxes</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set plotprice [price]</div>
                  <div className="command-description">Set default plot price</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set shopprice [price]</div>
                  <div className="command-description">Set shop plot price</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle taxpercent</div>
                  <div className="command-description">Switch between flat/percentage tax</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Permission Toggles */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🔐 Permission Toggles
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏗️ Building Permissions</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town toggle build</div>
                  <div className="command-description">Toggle building permissions</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle destroy</div>
                  <div className="command-description">Toggle destroy permissions</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle switch</div>
                  <div className="command-description">Toggle switch/door usage</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle itemuse</div>
                  <div className="command-description">Toggle item usage</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚔️ Combat Settings</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town toggle pvp</div>
                  <div className="command-description">Enable/disable PvP in town</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle explosion</div>
                  <div className="command-description">Enable/disable explosions</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle fire</div>
                  <div className="command-description">Enable/disable fire spread</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle mobs</div>
                  <div className="command-description">Enable/disable mob spawning</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🌍 Access Settings</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town toggle public</div>
                  <div className="command-description">Make town public/private</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle open</div>
                  <div className="command-description">Allow anyone to join</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set perm [group] [action] [on/off]</div>
                  <div className="command-description">Set specific permissions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Settings */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🔧 Advanced Configuration
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎯 Permission Groups</h3>
              <p className="card-description mb-16">
                Configure permissions for different groups of players.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Resident:</strong> Your town members</div>
                <div className="mb-8">• <strong>Ally:</strong> Allied town/nation members</div>
                <div className="mb-8">• <strong>Outsider:</strong> Everyone else</div>
                <div className="mb-8">• Each group can have different permissions</div>
                <div className="mb-8">• Use /town set perm to configure</div>
                <div className="mb-8">• Test settings with different player types</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚡ Quick Setup Presets</h3>
              <p className="card-description mb-16">
                Common configuration presets for different town types.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Peaceful Town:</strong> PvP off, explosions off, public</div>
                <div className="mb-8">• <strong>Trading Hub:</strong> Switch on for outsiders, public</div>
                <div className="mb-8">• <strong>Military Base:</strong> PvP on, private, restricted access</div>
                <div className="mb-8">• <strong>New Player Town:</strong> Open joining, helpful settings</div>
                <div className="mb-8">• <strong>Exclusive Community:</strong> Private, invite-only</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setting Recommendations */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            💡 Recommended Settings
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏘️ New Town Setup</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>PvP:</strong> OFF (peaceful environment)</div>
                <div className="mb-8">• <strong>Explosions:</strong> OFF (protect builds)</div>
                <div className="mb-8">• <strong>Fire:</strong> OFF (prevent accidents)</div>
                <div className="mb-8">• <strong>Mobs:</strong> OFF (safer for residents)</div>
                <div className="mb-8">• <strong>Public:</strong> ON (attract visitors)</div>
                <div className="mb-8">• <strong>Open:</strong> OFF (control who joins)</div>
                <div className="mb-8">• <strong>Outsider Switch:</strong> OFF (security)</div>
                <div className="mb-8">• <strong>Taxes:</strong> Low ($1-5 per day)</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🏪 Trading Town Setup</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>PvP:</strong> OFF (safe shopping)</div>
                <div className="mb-8">• <strong>Explosions:</strong> OFF (protect shops)</div>
                <div className="mb-8">• <strong>Fire:</strong> OFF (prevent damage)</div>
                <div className="mb-8">• <strong>Mobs:</strong> OFF (customer safety)</div>
                <div className="mb-8">• <strong>Public:</strong> ON (welcome traders)</div>
                <div className="mb-8">• <strong>Open:</strong> ON (easy access)</div>
                <div className="mb-8">• <strong>Outsider Switch:</strong> ON (shop access)</div>
                <div className="mb-8">• <strong>High Shop Prices:</strong> Premium locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🔧 Common Issues & Solutions
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">❌ Common Problems</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Residents can't build:</strong> Check build permissions</div>
                <div className="mb-8">• <strong>Visitors can't shop:</strong> Enable outsider switch</div>
                <div className="mb-8">• <strong>Unwanted PvP:</strong> Disable PvP toggle</div>
                <div className="mb-8">• <strong>Griefing by explosions:</strong> Turn off explosions</div>
                <div className="mb-8">• <strong>Fires spreading:</strong> Disable fire toggle</div>
                <div className="mb-8">• <strong>Too many mobs:</strong> Turn off mob spawning</div>
                <div className="mb-8">• <strong>Random players joining:</strong> Disable open toggle</div>
                <div className="mb-8">• <strong>Can't use doors:</strong> Check switch permissions</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">✅ Quick Fixes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Use /town to check current settings</div>
                <div className="mb-8">• Test permissions with trusted friends</div>
                <div className="mb-8">• Make changes gradually, not all at once</div>
                <div className="mb-8">• Communicate changes to residents</div>
                <div className="mb-8">• Keep notes on what settings work best</div>
                <div className="mb-8">• Ask staff for help with complex issues</div>
                <div className="mb-8">• Review settings regularly as town grows</div>
                <div className="mb-8">• Learn from other successful towns</div>
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
              <Link href="/towny/wiki/banking" className="footer-link footer-link-orange">
                ← Town Banking
              </Link>
              <Link href="/towny/wiki/expansion" className="footer-link footer-link-green">
                Town Expansion →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Configure the perfect town environment!
          </p>
        </div>
      </footer>
    </div>
  )
}
