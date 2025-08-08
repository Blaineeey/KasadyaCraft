import Link from "next/link"

export default function TownyWikiPage() {
  const playerGuides = [
    {
      title: "🏗️ Getting Started",
      description: "Essential guides for new players",
      articles: [
        { title: "Creating Your First Town", href: "/towny/create-town", description: "Step-by-step town creation guide" },
        { title: "Understanding Chunks and Claims", href: "/towny/wiki/chunks", description: "Learn how land claiming works" },
        { title: "Basic Commands Guide", href: "/towny/wiki/commands", description: "Essential commands every player needs" },
        { title: "Economy Basics", href: "/towny/wiki/economy", description: "Making money and managing finances" },
        { title: "Town Permissions", href: "/towny/wiki/permissions", description: "Control who can do what in your town" }
      ]
    },
    {
      title: "🏛️ Town Management",
      description: "Advanced town leadership",
      articles: [
        { title: "Managing Residents", href: "/towny/wiki/residents", description: "Invite, rank, and manage your citizens" },
        { title: "Plot System Guide", href: "/towny/wiki/plots", description: "Create and sell plots to residents" },
        { title: "Town Bank & Taxes", href: "/towny/wiki/banking", description: "Manage your town's finances" },
        { title: "Town Settings & Toggles", href: "/towny/wiki/settings", description: "Configure your town's behavior" },
        { title: "Expanding Your Town", href: "/towny/wiki/expansion", description: "Claim more land and grow" }
      ]
    },
    {
      title: "👑 Nations & Politics",
      description: "Form alliances and wage wars",
      articles: [
        { title: "Creating a Nation", href: "/towny/wiki/nations", description: "Unite multiple towns under one banner" },
        { title: "Diplomacy System", href: "/towny/wiki/diplomacy", description: "Manage relationships with other nations" },
        { title: "Nation Wars", href: "/towny/wiki/wars", description: "Engage in strategic warfare" },
        { title: "Alliance Management", href: "/towny/wiki/alliances", description: "Form powerful coalitions" },
        { title: "Nation Benefits", href: "/towny/wiki/nation-benefits", description: "Advantages of joining a nation" }
      ]
    },
    {
      title: "💰 Economy & Trading",
      description: "Master the server economy",
      articles: [
        { title: "Shop Creation Guide", href: "/towny/wiki/shops", description: "Set up shops to sell items" },
        { title: "Trading with Players", href: "/towny/wiki/trading", description: "Safe trading practices" },
        { title: "Jobs & Professions", href: "/towny/wiki/jobs", description: "Earn money through various jobs" },
        { title: "Auction House", href: "/towny/wiki/auction", description: "Buy and sell items globally" },
        { title: "Banking System", href: "/towny/wiki/banks", description: "Store and manage your wealth" }
      ]
    },
    {
      title: "⚔️ PvP & Combat",
      description: "Battle mechanics and strategies",
      articles: [
        { title: "PvP Rules & Zones", href: "/towny/wiki/pvp-rules", description: "Where and how PvP works" },
        { title: "Siege Warfare", href: "/towny/wiki/sieges", description: "Attack and defend towns" },
        { title: "Combat Strategies", href: "/towny/wiki/combat", description: "Tips for winning battles" },
        { title: "War Preparation", href: "/towny/wiki/war-prep", description: "Get ready for nation conflicts" },
        { title: "Defensive Building", href: "/towny/wiki/defenses", description: "Protect your town from attacks" }
      ]
    },
    {
      title: "🎨 Customization",
      description: "Personalize your experience",
      articles: [
        { title: "Town Aesthetics", href: "/towny/wiki/aesthetics", description: "Make your town look amazing" },
        { title: "Custom Ranks", href: "/towny/wiki/ranks", description: "Create unique roles for residents" },
        { title: "Town Banners & Flags", href: "/towny/wiki/banners", description: "Design your town's identity" },
        { title: "Chat Channels", href: "/towny/wiki/chat", description: "Communicate with your town and nation" },
        { title: "Town Events", href: "/towny/wiki/events", description: "Host competitions and gatherings" }
      ]
    }
  ]

  const quickCommands = [
    {
      category: "🏘️ Basic Town Commands",
      commands: [
        { cmd: "/town", desc: "View your town information and status" },
        { cmd: "/town spawn", desc: "Teleport to your town's spawn point" },
        { cmd: "/town claim", desc: "Claim the chunk you're standing in" },
        { cmd: "/town unclaim", desc: "Remove claim from current chunk" },
        { cmd: "/town deposit [amount]", desc: "Add money to your town bank" }
      ]
    },
    {
      category: "👥 Resident Management",
      commands: [
        { cmd: "/town invite [player]", desc: "Invite a player to join your town" },
        { cmd: "/town kick [player]", desc: "Remove a player from your town" },
        { cmd: "/town rank add [player] [rank]", desc: "Give a rank to a resident" },
        { cmd: "/town rank remove [player] [rank]", desc: "Remove a rank from a resident" },
        { cmd: "/town set mayor [player]", desc: "Transfer mayorship to another player" }
      ]
    },
    {
      category: "🏗️ Plot Management",
      commands: [
        { cmd: "/plot forsale [price]", desc: "Put your plot up for sale" },
        { cmd: "/plot notforsale", desc: "Remove your plot from sale" },
        { cmd: "/plot set [type]", desc: "Set plot type (shop, embassy, etc.)" },
        { cmd: "/plot toggle [setting]", desc: "Change plot permissions" },
        { cmd: "/plot claim", desc: "Claim an available plot" }
      ]
    },
    {
      category: "👑 Nation Commands",
      commands: [
        { cmd: "/nation", desc: "View your nation information" },
        { cmd: "/nation new [name]", desc: "Create a new nation" },
        { cmd: "/nation invite [town]", desc: "Invite a town to your nation" },
        { cmd: "/nation ally [nation]", desc: "Send alliance request to another nation" },
        { cmd: "/nation enemy [nation]", desc: "Declare another nation as enemy" }
      ]
    }
  ]

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
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Towny Player Wiki</h1>
                <p style={{ fontSize: '14px', color: '#888' }}>play.kasadyacraft.online</p>
              </div>
            </div>
            <div className="flex" style={{ alignItems: 'center', gap: '24px' }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <Link href="/towny" style={{ color: '#FFAA00', textDecoration: 'none' }}>Towny</Link>
              <Link href="/towny/wiki" style={{ color: '#5555FF', textDecoration: 'none', fontWeight: '600' }}>Wiki</Link>
              <Link href="/staff" style={{ color: 'white', textDecoration: 'none' }}>Staff</Link>
              <a href="https://discord.gg/kasadyacraft" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                💬 Discord
              </a>
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
            📚 Towny Player Wiki
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#ccc', 
            marginBottom: '32px', 
            maxWidth: '700px', 
            margin: '0 auto 32px' 
          }}>
            Everything you need to know to master Towny on KasadyaCraft! From creating your first town to leading a powerful nation.
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
            <h3 style={{ color: '#00FF00', marginBottom: '12px', fontSize: '18px' }}>🎮 Server: play.kasadyacraft.online</h3>
            <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.5' }}>
              All guides are specifically written for our server setup. Commands and features may differ from other Towny servers!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/towny/create-town" 
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              🏗️ Create Your First Town
            </Link>
            <a 
              href="minecraft://play.kasadyacraft.online" 
              className="btn"
              style={{ 
                background: 'linear-gradient(45deg, #FFAA00, #FF6A00)',
                color: 'white',
                textDecoration: 'none'
              }}
            >
              🎮 Join Server
            </a>
          </div>
        </div>
      </section>

      {/* Player Guides */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#00FF00'
          }}>
            📖 Player Guides
          </h2>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
            {playerGuides.map((section, index) => (
              <div key={index} className="card">
                <div style={{ marginBottom: '16px' }}>
                  <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
                    {section.title}
                  </h3>
                  <p style={{ color: '#888', fontSize: '14px', fontStyle: 'italic' }}>
                    {section.description}
                  </p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {section.articles.map((article, articleIndex) => (
                    <Link 
                      key={articleIndex} 
                      href={article.href}
                      style={{
                        display: 'block',
                        padding: '12px',
                        borderRadius: '8px',
                        background: 'rgba(0, 255, 0, 0.05)',
                        border: '1px solid rgba(0, 255, 0, 0.2)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 255, 0, 0.1)'
                        e.currentTarget.style.borderColor = 'rgba(0, 255, 0, 0.4)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 255, 0, 0.05)'
                        e.currentTarget.style.borderColor = 'rgba(0, 255, 0, 0.2)'
                      }}
                    >
                      <div style={{ 
                        color: 'white', 
                        fontSize: '16px', 
                        fontWeight: '600',
                        marginBottom: '4px'
                      }}>
                        {article.title}
                      </div>
                      <div style={{ 
                        color: '#ccc', 
                        fontSize: '13px'
                      }}>
                        {article.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Command Reference */}
      <section className="py-16">
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FFAA00'
          }}>
            ⚡ Quick Command Reference
          </h2>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {quickCommands.map((category, index) => (
              <div key={index} className="card">
                <h3 style={{ 
                  color: 'white', 
                  marginBottom: '16px', 
                  fontSize: '18px',
                  borderBottom: '2px solid #FFAA00',
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
                      border: '1px solid rgba(255, 170, 0, 0.2)'
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

      {/* Getting Help */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FF6A00'
          }}>
            🤝 Need Help?
          </h2>
          
          <div className="grid grid-3">
            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎮</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                In-Game Help
              </h3>
              <p style={{ color: '#ccc', marginBottom: '16px', fontSize: '14px' }}>
                Use /help or ask questions in chat. Our community is friendly and helpful!
              </p>
              <div style={{ 
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '8px',
                borderRadius: '6px',
                fontFamily: 'monospace',
                color: '#00FF00',
                fontSize: '13px',
                marginBottom: '12px'
              }}>
                /help towny
              </div>
              <a 
                href="minecraft://play.kasadyacraft.online" 
                className="btn" 
                style={{ 
                  background: 'linear-gradient(45deg, #00FF00, #00CC00)', 
                  color: 'black',
                  textDecoration: 'none'
                }}
              >
                Join Server
              </a>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                Discord Support
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px', fontSize: '14px' }}>
                Get instant help from our community and staff members!
              </p>
              <a href="https://discord.gg/kasadyacraft" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>👥</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                Contact Staff
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px', fontSize: '14px' }}>
                Our staff team is always ready to help with any questions!
              </p>
              <Link href="/staff" className="btn" style={{ 
                background: 'linear-gradient(45deg, #AA00AA, #8E24AA)', 
                color: 'white',
                textDecoration: 'none'
              }}>
                View Staff
              </Link>
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
          <p style={{ color: '#888', marginBottom: '8px', fontFamily: 'monospace' }}>
            play.kasadyacraft.online
          </p>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Player-focused documentation for our Towny server
          </p>
        </div>
      </footer>
    </div>
  )
}
