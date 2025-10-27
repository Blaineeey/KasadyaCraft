import Link from "next/link"

export default function SMPWikiPage() {
  const pluginGuides = [
    {
      title: "🧪 Slimefun Technology",
      description: "Learn about the 500+ tech items in Slimefun",
      color: "green",
      guides: [
        { title: "Getting Started Guide", href: "/smp/wiki/slimefun-guide", emoji: "📖" },
        { title: "Crafting Stations", href: "/smp/wiki/crafting", emoji: "🔨" },
        { title: "Machines & Automation", href: "/smp/wiki/machines", emoji: "⚙️" },
        { title: "Energy Systems", href: "/smp/wiki/energy", emoji: "⚡" },
        { title: "Resources & Materials", href: "/smp/wiki/resources", emoji: "💎" },
        { title: "Tools & Equipment", href: "/smp/wiki/tools", emoji: "🔧" }
      ]
    },
    {
      title: "🦠 Epidemic Survival",
      description: "Survive deadly diseases and infections",
      color: "red",
      guides: [
        { title: "Getting Started Guide", href: "/smp/wiki/epidemic-guide", emoji: "📖" },
        { title: "Disease Types & Mechanics", href: "/smp/wiki/diseases", emoji: "🦠" },
        { title: "Medicine Crafting", href: "/smp/wiki/medicine", emoji: "💊" },
        { title: "Protection & Prevention", href: "/smp/wiki/protection", emoji: "🛡️" }
      ]
    }
  ]

  const quickCommands = [
    {
      category: "🧪 Slimefun Commands",
      commands: [
        { cmd: "/slimefun guide", desc: "Open the Slimefun guide book (Main guide!)" },
        { cmd: "/sf search [item]", desc: "Search for Slimefun items" },
        { cmd: "/sf research", desc: "View your research progress" },
        { cmd: "/sf stats", desc: "View your Slimefun statistics" }
      ]
    },
    {
      category: "🦠 Epidemic Commands",
      commands: [
        { cmd: "/epidemic status", desc: "Check your current health status" },
        { cmd: "/epidemic info", desc: "Learn about active diseases" },
        { cmd: "/epidemic help", desc: "Get help with epidemic mechanics" }
      ]
    },
    {
      category: "🏠 Essential SMP Commands",
      commands: [
        { cmd: "/sethome", desc: "Set your home location" },
        { cmd: "/home", desc: "Teleport to your home" },
        { cmd: "/spawn", desc: "Teleport to server spawn" },
        { cmd: "/help", desc: "Get help and view all commands" }
      ]
    }
  ]

  return (
    <div className="minecraft-bg">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-flex">
            <div className="nav-left">
              <Link href="/smp" className="nav-back">
                ← Back to SMP
              </Link>
              <div className="nav-logo nav-logo-wiki">
                📚
              </div>
              <div>
                <h1 className="nav-title">Plugin Guides</h1>
                <p className="nav-subtitle-mono">play.kasadyacraft.online</p>
              </div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/smp" className="nav-link-towny">SMP</Link>
              <Link href="/smp/wiki" className="nav-link-wiki">Wiki</Link>
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
            📚 Plugin Guide
          </h1>
          <p className="hero-description-wide">
            Quick guides for Slimefun and Epidemic - our two core plugins!
          </p>

          <div className="hero-info-box">
            <h3 className="hero-box-title hero-box-title-info">🎮 Server: play.kasadyacraft.online</h3>
            <p className="hero-box-text">
              All guides are specifically written for our server setup. Features and commands are tailored to KasadyaCraft!
            </p>
          </div>

          <div className="hero-buttons">
            <a
              href="minecraft://play.kasadyacraft.online"
              className="btn btn-primary"
            >
              🎮 Join Server
            </a>
            <a href="https://discord.gg/8DY3eXHnAg" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              💬 Discord Help
            </a>
          </div>
        </div>
      </section>

      {/* Plugin Guides */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            📖 Plugin Guides
          </h2>

          <div className="grid grid-2">
            {pluginGuides.map((plugin, index) => (
              <div key={index} className="card" style={{
                background: plugin.color === 'green'
                  ? 'rgba(126, 211, 33, 0.05)'
                  : 'rgba(255, 61, 61, 0.05)',
                border: plugin.color === 'green'
                  ? '2px solid rgba(126, 211, 33, 0.3)'
                  : '2px solid rgba(255, 61, 61, 0.3)'
              }}>
                <h3 className="card-title" style={{
                  color: plugin.color === 'green' ? '#7ED321' : '#FF3D3D',
                  marginBottom: '12px'
                }}>
                  {plugin.title}
                </h3>
                <p className="text-gray mb-24" style={{fontSize: '0.9rem'}}>
                  {plugin.description}
                </p>

                <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  {plugin.guides.map((guide, guideIndex) => (
                    guide.href ? (
                      <Link
                        key={guideIndex}
                        href={guide.href}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 16px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        className="hover-lift"
                      >
                        <span style={{fontSize: '1.5rem'}}>{guide.emoji}</span>
                        <span style={{color: '#fff', fontSize: '0.95rem', fontWeight: '600'}}>
                          {guide.title}
                        </span>
                      </Link>
                    ) : (
                      <div
                        key={guideIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '12px 16px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          borderRadius: '8px'
                        }}
                      >
                        <span style={{fontSize: '1.5rem', marginTop: '2px'}}>{guide.emoji}</span>
                        <div>
                          <div style={{color: '#fff', fontSize: '0.95rem', fontWeight: '600', marginBottom: '4px'}}>
                            {guide.title}
                          </div>
                          <div style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem'}}>
                            {guide.info}
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Command Reference */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            ⚡ Quick Command Reference
          </h2>

          <div className="grid grid-auto-300">
            {quickCommands.map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-white mb-16 text-18 border-bottom-orange">
                  {category.category}
                </h3>
                <div className="command-list">
                  {category.commands.map((command, cmdIndex) => (
                    <div key={cmdIndex} className="command-item command-item-wiki">
                      <div className="command-name">
                        {command.cmd}
                      </div>
                      <div className="command-description">
                        {command.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Help */}
      <section className="section-py section-bg">
        <div className="container text-center">
          <h2 className="section-title section-title-blue">
            🤝 Need Help?
          </h2>
          <p className="hero-description mb-24">
            The best way to learn is using the in-game guide! Type <span style={{color: '#7ED321', fontWeight: '700'}}>/slimefun guide</span> in chat.
          </p>
          <div className="hero-buttons">
            <a href="https://discord.gg/8DY3eXHnAg" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              💬 Ask on Discord
            </a>
            <Link href="/staff" className="btn btn-staff">
              👥 Contact Staff
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/smp" className="footer-link footer-link-green">
                ← Back to SMP
              </Link>
              <Link href="/" className="footer-link footer-link-orange">
                Home →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Quick guides for our core plugins
          </p>
        </div>
      </footer>
    </div>
  )
}
