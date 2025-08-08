import Link from "next/link"

export default function TownyWikiPage() {
  const wikiSections = [
    {
      title: "🏗️ Getting Started",
      status: "Complete",
      articles: [
        { title: "Creating Your First Town", status: "complete", href: "/towny/create-town" },
        { title: "Premium GUI Navigation", status: "complete", href: "#" },
        { title: "Understanding Chunks and Claims", status: "complete", href: "#" },
        { title: "Town Permissions & Protection", status: "complete", href: "#" },
        { title: "Custom Menus Overview", status: "complete", href: "#" }
      ]
    },
    {
      title: "🏛️ Town Management",
      status: "Complete",
      articles: [
        { title: "Advanced Town GUI", status: "complete", href: "#" },
        { title: "Managing Residents and Ranks", status: "complete", href: "#" },
        { title: "Plot Management System", status: "complete", href: "#" },
        { title: "Town Bank & Economy", status: "complete", href: "#" },
        { title: "Custom Town Settings", status: "complete", href: "#" },
        { title: "Town Upgrades & Levels", status: "complete", href: "#" }
      ]
    },
    {
      title: "👑 Nations and Politics",
      status: "Complete",
      articles: [
        { title: "Nation Creation & Management", status: "complete", href: "#" },
        { title: "Advanced Nation GUI", status: "complete", href: "#" },
        { title: "Diplomacy System", status: "complete", href: "#" },
        { title: "Nation Wars & Sieges", status: "complete", href: "#" },
        { title: "Alliance Management", status: "complete", href: "#" },
        { title: "Nation Ranks & Hierarchy", status: "complete", href: "#" }
      ]
    },
    {
      title: "💰 Economy & Trading",
      status: "Complete",
      articles: [
        { title: "Advanced Shop System", status: "complete", href: "#" },
        { title: "Town & Nation Banks", status: "complete", href: "#" },
        { title: "Tax Collection System", status: "complete", href: "#" },
        { title: "Trade Routes & Commerce", status: "complete", href: "#" },
        { title: "Auction House Integration", status: "complete", href: "#" }
      ]
    },
    {
      title: "⚔️ PvP & Warfare",
      status: "Complete",
      articles: [
        { title: "Siege Warfare System", status: "complete", href: "#" },
        { title: "PvP Mechanics & Rules", status: "complete", href: "#" },
        { title: "War Declaration GUI", status: "complete", href: "#" },
        { title: "Battle Statistics", status: "complete", href: "#" },
        { title: "Defensive Strategies", status: "complete", href: "#" }
      ]
    },
    {
      title: "🎨 Premium Features",
      status: "Complete",
      articles: [
        { title: "Custom GUI System (150+ Menus)", status: "complete", href: "#" },
        { title: "Advanced Graphics & Overlays", status: "complete", href: "#" },
        { title: "Town & Nation Cosmetics", status: "complete", href: "#" },
        { title: "Custom Ranks & Titles", status: "complete", href: "#" },
        { title: "Enhanced Chat System", status: "complete", href: "#" },
        { title: "Statistics & Leaderboards", status: "complete", href: "#" }
      ]
    },
    {
      title: "🔧 Advanced Configuration",
      status: "Complete",
      articles: [
        { title: "Server-Specific Features", status: "complete", href: "#" },
        { title: "Custom Plot Types", status: "complete", href: "#" },
        { title: "Integration Plugins", status: "complete", href: "#" },
        { title: "Performance Optimization", status: "complete", href: "#" }
      ]
    }
  ]

  const premiumFeatures = [
    {
      title: "🎨 Custom GUI System",
      description: "150+ professionally designed menus",
      features: [
        "Interactive town management interface",
        "Visual plot selection system",
        "Drag-and-drop resident management",
        "Real-time statistics dashboard",
        "Custom graphics and overlays"
      ]
    },
    {
      title: "🏰 Enhanced Town Features",
      description: "Advanced town management tools",
      features: [
        "Town leveling and upgrade system",
        "Custom town cosmetics and banners",
        "Advanced permission matrix",
        "Automated tax collection",
        "Town achievement system"
      ]
    },
    {
      title: "⚔️ Advanced Warfare",
      description: "Professional siege and war mechanics",
      features: [
        "Siege planning interface",
        "Battle statistics tracking",
        "War declaration ceremonies",
        "Victory condition customization",
        "Post-war reconstruction tools"
      ]
    }
  ]

  const quickReference = [
    {
      category: "Premium GUI Commands",
      commands: [
        { cmd: "/town gui", desc: "Open advanced town management GUI" },
        { cmd: "/nation gui", desc: "Open nation management interface" },
        { cmd: "/plot gui", desc: "Open plot management system" },
        { cmd: "/war gui", desc: "Access war declaration interface" },
        { cmd: "/shop gui", desc: "Open advanced shop system" }
      ]
    },
    {
      category: "Enhanced Town Commands",
      commands: [
        { cmd: "/town upgrade", desc: "Access town upgrade system" },
        { cmd: "/town stats", desc: "View detailed town statistics" },
        { cmd: "/town cosmetics", desc: "Customize town appearance" },
        { cmd: "/town achievements", desc: "View town achievements" },
        { cmd: "/town leaderboard", desc: "Check town rankings" }
      ]
    },
    {
      category: "Advanced Nation Commands",
      commands: [
        { cmd: "/nation diplomacy", desc: "Manage diplomatic relations" },
        { cmd: "/nation war [nation]", desc: "Declare war with advanced options" },
        { cmd: "/nation alliance", desc: "Manage alliance system" },
        { cmd: "/nation treasury", desc: "Access nation treasury GUI" },
        { cmd: "/nation ranks", desc: "Manage custom nation ranks" }
      ]
    },
    {
      category: "Premium Economy Commands",
      commands: [
        { cmd: "/auction gui", desc: "Open auction house interface" },
        { cmd: "/bank gui", desc: "Access advanced banking system" },
        { cmd: "/trade routes", desc: "Manage trade route system" },
        { cmd: "/tax collector", desc: "View tax collection interface" },
        { cmd: "/economy stats", desc: "View server economy statistics" }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete': return '#00FF00'
      case 'in-progress': return '#FFAA00'
      case 'planned': return '#888888'
      default: return '#888888'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete': return '✅'
      case 'in-progress': return '🚧'
      case 'planned': return '📋'
      default: return '📋'
    }
  }

  return (
    <div className="minecraft-bg">
      {/* Navigation */}
      <nav style={{
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="container">
          <div className="flex" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="flex" style={{ alignItems: 'center', gap: '12px' }}>
              <Link href="/towny" style={{ 
                color: '#888', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                ← Back to Towny
              </Link>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(45deg, #5555FF, #3F51B5)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                📚
              </div>
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Premium Towny Wiki</h1>
                <p style={{ fontSize: '14px', color: '#888' }}>NitroSetups v3.6.1 • Season 3</p>
              </div>
            </div>
            <div className="flex" style={{ alignItems: 'center', gap: '24px' }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <Link href="/towny" style={{ color: '#FFAA00', textDecoration: 'none' }}>Towny</Link>
              <Link href="/towny/wiki" style={{ color: '#5555FF', textDecoration: 'none', fontWeight: '600' }}>Wiki</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container text-center">
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 5rem)', 
            fontWeight: 'bold', 
            marginBottom: '24px',
            background: 'linear-gradient(45deg, #5555FF, #FFAA00, #00FF00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            📚 Premium Towny Wiki
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#ccc', 
            marginBottom: '32px', 
            maxWidth: '700px', 
            margin: '0 auto 32px' 
          }}>
            Master our enhanced Towny experience! Featuring 150+ custom menus, advanced GUI systems, 
            and professional-grade town management tools powered by NitroSetups.
          </p>
          
          <div style={{
            background: 'rgba(0, 255, 0, 0.1)',
            border: '2px solid #00FF00',
            borderRadius: '12px',
            padding: '20px',
            maxWidth: '600px',
            margin: '0 auto',
            marginBottom: '32px'
          }}>
            <h3 style={{ color: '#00FF00', marginBottom: '12px', fontSize: '18px' }}>✨ Premium Features Active</h3>
            <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.5' }}>
              Our server runs the premium NitroSetups Towny configuration with enhanced graphics, 
              custom overlays, and advanced management systems not found on standard servers!
            </p>
          </div>
        </div>
      </section>

      {/* Premium Features Showcase */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FFAA00'
          }}>
            ✨ Premium Features
          </h2>
          
          <div className="grid grid-3">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="card">
                <h3 style={{ 
                  color: 'white', 
                  fontSize: '20px', 
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: '#FFAA00', 
                  fontSize: '14px', 
                  marginBottom: '16px',
                  fontStyle: 'italic'
                }}>
                  {feature.description}
                </p>
                <ul style={{ color: '#ccc', paddingLeft: '20px', lineHeight: '1.6' }}>
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} style={{ marginBottom: '4px' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wiki Sections */}
      <section className="py-16">
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#00FF00'
          }}>
            📖 Complete Documentation
          </h2>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
            {wikiSections.map((section, index) => (
              <div key={index} className="card">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                    {section.title}
                  </h3>
                  <div style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    background: '#00FF00',
                    color: 'black'
                  }}>
                    {section.status}
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {section.articles.map((article, articleIndex) => (
                    <div key={articleIndex} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      background: 'rgba(0, 255, 0, 0.05)',
                      border: '1px solid rgba(0, 255, 0, 0.2)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '14px' }}>
                          ✅
                        </span>
                        {article.href !== '#' ? (
                          <Link href={article.href} style={{ 
                            color: 'white', 
                            textDecoration: 'none',
                            fontSize: '14px'
                          }}>
                            {article.title}
                          </Link>
                        ) : (
                          <span style={{ 
                            color: 'white',
                            fontSize: '14px'
                          }}>
                            {article.title}
                          </span>
                        )}
                      </div>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#00FF00'
                      }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Command Reference */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FF6A00'
          }}>
            ⚡ Premium Command Reference
          </h2>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {quickReference.map((category, index) => (
              <div key={index} className="card">
                <h3 style={{ 
                  color: 'white', 
                  marginBottom: '16px', 
                  fontSize: '18px',
                  borderBottom: '2px solid #FF6A00',
                  paddingBottom: '8px'
                }}>
                  {category.category}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {category.commands.map((command, cmdIndex) => (
                    <div key={cmdIndex} style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '6px',
                      padding: '8px',
                      border: '1px solid rgba(255, 106, 0, 0.2)'
                    }}>
                      <div style={{ 
                        color: '#00FF00', 
                        fontFamily: 'monospace', 
                        fontSize: '13px',
                        fontWeight: 'bold',
                        marginBottom: '2px'
                      }}>
                        {command.cmd}
                      </div>
                      <div style={{ color: '#ccc', fontSize: '12px' }}>
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

      {/* Server Specifications */}
      <section className="py-16">
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#5555FF'
          }}>
            🔧 Server Specifications
          </h2>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎨</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                Custom Graphics
              </h3>
              <p style={{ color: '#ccc', fontSize: '14px' }}>
                Professional overlays and custom graphics system with enhanced visual experience
              </p>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📱</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                150+ Menus
              </h3>
              <p style={{ color: '#ccc', fontSize: '14px' }}>
                Comprehensive GUI system covering every aspect of town and nation management
              </p>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚡</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                Optimized Performance
              </h3>
              <p style={{ color: '#ccc', fontSize: '14px' }}>
                Professional configuration ensuring smooth gameplay for hundreds of players
              </p>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏆</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                Season 3 Ready
              </h3>
              <p style={{ color: '#ccc', fontSize: '14px' }}>
                Latest version compatible with Minecraft 1.21.x with all modern features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FFAA00'
          }}>
            🤝 Get Help & Support
          </h2>
          
          <div className="grid grid-3">
            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                Discord Support
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px' }}>
                Get instant help from our community and staff members in our Discord server!
              </p>
              <a href="https://discord.gg/kasadyacraft" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎮</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                In-Game Help
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px' }}>
                Use our comprehensive in-game help system and GUI tutorials!
              </p>
              <button className="btn" style={{ 
                background: 'linear-gradient(45deg, #00FF00, #00CC00)', 
                color: 'black' 
              }}>
                /help towny
              </button>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📖</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                Video Tutorials
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px' }}>
                Watch step-by-step video guides for complex features and systems!
              </p>
              <button className="btn" style={{ 
                background: 'linear-gradient(45deg, #FF0000, #CC0000)', 
                color: 'white' 
              }}>
                YouTube Channel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: 'rgba(0, 0, 0, 0.8)', 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '32px 0'
      }}>
        <div className="container text-center">
          <div style={{ marginBottom: '16px' }}>
            <Link href="/towny" style={{ color: '#FFAA00', textDecoration: 'none', marginRight: '24px' }}>
              ← Back to Towny Hub
            </Link>
            <Link href="/towny/create-town" style={{ color: '#00FF00', textDecoration: 'none' }}>
              Create a Town Guide →
            </Link>
          </div>
          <p style={{ color: '#888', marginBottom: '8px' }}>
            🎨 Powered by NitroSetups v3.6.1 • Season 3 • Minecraft 1.21.x
          </p>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Premium Towny setup with 150+ custom menus and professional configuration
          </p>
        </div>
      </footer>
    </div>
  )
}
