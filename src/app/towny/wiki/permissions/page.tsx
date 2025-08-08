import Link from "next/link"

export default function PermissionsPage() {
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
                🔐
              </div>
              <div>
                <h1 className="nav-title">Town Permissions</h1>
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
            🔐 Town Permissions System
          </h1>
          <p className="hero-description">
            Master the permission system to control who can do what in your town. Protect your builds while maintaining a welcoming community.
          </p>
        </div>
      </section>

      {/* Permission Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🎯 Permission Categories
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏗️ Build Permissions</h3>
              <p className="card-description mb-16">
                Control who can place and break blocks in your town.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Build:</strong> Place blocks</div>
                <div className="mb-8">• <strong>Destroy:</strong> Break blocks</div>
                <div className="mb-8">• <strong>Switch:</strong> Use doors, buttons, levers</div>
                <div className="mb-8">• <strong>ItemUse:</strong> Use items like flint & steel</div>
              </div>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town toggle build</div>
                  <div className="command-description">Toggle build permissions</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle destroy</div>
                  <div className="command-description">Toggle destroy permissions</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🎮 Interaction Permissions</h3>
              <p className="card-description mb-16">
                Manage how players can interact with your town's features.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Switch:</strong> Doors, buttons, pressure plates</div>
                <div className="mb-8">• <strong>ItemUse:</strong> Buckets, tools, consumables</div>
                <div className="mb-8">• <strong>PvP:</strong> Player vs player combat</div>
                <div className="mb-8">• <strong>Explosion:</strong> TNT and creeper damage</div>
              </div>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town toggle switch</div>
                  <div className="command-description">Toggle switch permissions</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle pvp</div>
                  <div className="command-description">Toggle PvP in town</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Permission Groups */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            👥 Permission Groups
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏘️ Resident Permissions</h3>
              <p className="card-description mb-16">
                What your town residents can do by default.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Build in town land</div>
                <div className="mb-8">• Destroy in town land</div>
                <div className="mb-8">• Use switches and doors</div>
                <div className="mb-8">• Access town spawn</div>
                <div className="mb-8">• Use town chat</div>
                <div className="mb-8">• View town information</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🌍 Outsider Permissions</h3>
              <p className="card-description mb-16">
                What non-residents can do in your town.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Walk through town (always allowed)</div>
                <div className="mb-8">• Use public switches (if enabled)</div>
                <div className="mb-8">• Shop at town stores</div>
                <div className="mb-8">• View town information</div>
                <div className="mb-8">• Cannot build or destroy (by default)</div>
                <div className="mb-8">• Cannot access private areas</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🤝 Allied Permissions</h3>
              <p className="card-description mb-16">
                Special permissions for allied towns and nations.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Enhanced access to town features</div>
                <div className="mb-8">• Can use switches if enabled</div>
                <div className="mb-8">• May build in designated areas</div>
                <div className="mb-8">• Access to embassy plots</div>
                <div className="mb-8">• Protected from PvP (if disabled)</div>
                <div className="mb-8">• Can use town facilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Permissions */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            📍 Plot-Specific Permissions
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏠 Plot Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/plot toggle build</div>
                  <div className="command-description">Toggle build on your plot</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/plot toggle destroy</div>
                  <div className="command-description">Toggle destroy on your plot</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/plot toggle switch</div>
                  <div className="command-description">Toggle switch access on plot</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/plot toggle itemuse</div>
                  <div className="command-description">Toggle item use on plot</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/plot set [type]</div>
                  <div className="command-description">Set plot type (shop, embassy, etc.)</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🏪 Special Plot Types</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Shop:</strong> Anyone can use switches and items</div>
                <div className="mb-8">• <strong>Embassy:</strong> Foreigners can own this plot</div>
                <div className="mb-8">• <strong>Arena:</strong> PvP enabled regardless of town setting</div>
                <div className="mb-8">• <strong>Wilds:</strong> Behaves like wilderness</div>
                <div className="mb-8">• <strong>Inn:</strong> Outsiders can set spawn here</div>
                <div className="mb-8">• <strong>Jail:</strong> Players sent here cannot leave</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Permission Tips */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            💡 Permission Management Tips
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Best Practices</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Start with restrictive permissions, then relax as needed</div>
                <div className="mb-8">• Create public areas with shop plots for visitors</div>
                <div className="mb-8">• Use embassy plots to welcome foreign residents</div>
                <div className="mb-8">• Set up clear rules and communicate them to residents</div>
                <div className="mb-8">• Regularly review and adjust permissions</div>
                <div className="mb-8">• Test permissions with trusted friends first</div>
                <div className="mb-8">• Keep important areas private and secure</div>
                <div className="mb-8">• Use plot types strategically for different purposes</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚠️ Common Issues</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Residents can't build: Check town build permissions</div>
                <div className="mb-8">• Visitors can't shop: Enable switch permissions for outsiders</div>
                <div className="mb-8">• PvP happening unexpectedly: Check arena plots</div>
                <div className="mb-8">• Items disappearing: Check explosion permissions</div>
                <div className="mb-8">• Can't use doors: Check switch permissions</div>
                <div className="mb-8">• Allies can't access: Check allied permissions</div>
                <div className="mb-8">• Plot permissions override town permissions</div>
                <div className="mb-8">• Some permissions require plot ownership</div>
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
              <Link href="/towny/wiki/economy" className="footer-link footer-link-orange">
                ← Economy Guide
              </Link>
              <Link href="/towny/wiki/residents" className="footer-link footer-link-green">
                Managing Residents →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Control your town, protect your builds!
          </p>
        </div>
      </footer>
    </div>
  )
}
