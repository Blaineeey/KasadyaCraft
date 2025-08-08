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
      <nav className="nav-container">
        <div className="container">
          <div className="nav-flex">
            <div className="nav-left">
              <Link href="/towny" className="nav-back">
                ← Back to Towny
              </Link>
              <div className="nav-logo nav-logo-wiki">
                📚
              </div>
              <div>
                <h1 className="nav-title">Towny Player Wiki</h1>
                <p className="nav-subtitle-mono">play.kasadyacraft.online</p>
              </div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/towny" className="nav-link-towny">Towny</Link>
              <Link href="/towny/wiki" className="nav-link-wiki">Wiki</Link>
              <Link href="/staff" className="nav-link">Staff</Link>
              <a href="https://discord.gg/kasadyacraft" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
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
            📚 Towny Player Wiki
          </h1>
          <p className="hero-description-wide">
            Everything you need to know to master Towny on KasadyaCraft! From creating your first town to leading a powerful nation.
          </p>
          
          <div className="hero-info-box">
            <h3 className="hero-box-title hero-box-title-info">🎮 Server: play.kasadyacraft.online</h3>
            <p className="hero-box-text">
              All guides are specifically written for our server setup. Commands and features may differ from other Towny servers!
            </p>
          </div>

          <div className="hero-buttons">
            <Link 
              href="/towny/create-town" 
              className="btn btn-primary"
            >
              🏗️ Create Your First Town
            </Link>
            <a 
              href="minecraft://play.kasadyacraft.online" 
              className="btn btn-towny"
            >
              🎮 Join Server
            </a>
          </div>
        </div>
      </section>

      {/* Player Guides */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            📖 Player Guides
          </h2>
          
          <div className="grid grid-auto-400">
            {playerGuides.map((section, index) => (
              <div key={index} className="card">
                <div className="wiki-section">
                  <h3 className="card-title-20 mb-8">
                    {section.title}
                  </h3>
                  <p className="text-gray text-14 mb-16">
                    {section.description}
                  </p>
                </div>
                
                <div className="wiki-articles">
                  {section.articles.map((article, articleIndex) => (
                    <Link 
                      key={articleIndex} 
                      href={article.href}
                      className="wiki-article-link"
                    >
                      <div className="wiki-article-title">
                        {article.title}
                      </div>
                      <div className="wiki-article-desc">
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
        <div className="container">
          <h2 className="section-title section-title-red">
            🤝 Need Help?
          </h2>
          
          <div className="grid grid-3">
            <div className="card text-center">
              <div className="icon-48 icon-center">🎮</div>
              <h3 className="card-title-20 mb-12">
                In-Game Help
              </h3>
              <p className="card-description-14 mb-16">
                Use /help or ask questions in chat. Our community is friendly and helpful!
              </p>
              <div className="command-box mb-12">
                <div className="command-text">
                  /help towny
                </div>
              </div>
              <a 
                href="minecraft://play.kasadyacraft.online" 
                className="btn btn-primary"
              >
                Join Server
              </a>
            </div>

            <div className="card text-center">
              <div className="icon-48 icon-center">💬</div>
              <h3 className="card-title-20 mb-12">
                Discord Support
              </h3>
              <p className="card-description mb-20">
                Get instant help from our community and staff members!
              </p>
              <a href="https://discord.gg/kasadyacraft" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </div>

            <div className="card text-center">
              <div className="icon-48 icon-center">👥</div>
              <h3 className="card-title-20 mb-12">
                Contact Staff
              </h3>
              <p className="card-description mb-20">
                Our staff team is always ready to help with any questions!
              </p>
              <Link href="/staff" className="btn btn-staff">
                View Staff
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/towny" className="footer-link footer-link-orange">
                ← Back to Towny Hub
              </Link>
              <Link href="/towny/create-town" className="footer-link footer-link-green">
                Create a Town Guide →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Player-focused documentation for our Towny server
          </p>
        </div>
      </footer>
    </div>
  )
}
