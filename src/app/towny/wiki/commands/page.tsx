import Link from "next/link"

export default function CommandsPage() {
  const commandCategories = [
    {
      title: "🏘️ Basic Town Commands",
      description: "Essential commands every mayor needs to know",
      commands: [
        { cmd: "/town", desc: "View your town information and status" },
        { cmd: "/town new [name]", desc: "Create a new town (costs $1000)" },
        { cmd: "/town spawn", desc: "Teleport to your town's spawn point" },
        { cmd: "/town claim", desc: "Claim the chunk you're standing in" },
        { cmd: "/town unclaim", desc: "Remove claim from current chunk" },
        { cmd: "/town set spawn", desc: "Set your town's spawn point" },
        { cmd: "/town set board [message]", desc: "Set your town's message board" },
        { cmd: "/town deposit [amount]", desc: "Add money to your town bank" },
        { cmd: "/town withdraw [amount]", desc: "Take money from town bank (mayors only)" }
      ]
    },
    {
      title: "👥 Resident Management",
      description: "Commands for managing your town's population",
      commands: [
        { cmd: "/town invite [player]", desc: "Invite a player to join your town" },
        { cmd: "/town kick [player]", desc: "Remove a player from your town" },
        { cmd: "/town add [player]", desc: "Force add a player (if they accept)" },
        { cmd: "/town rank add [player] [rank]", desc: "Give a rank to a resident" },
        { cmd: "/town rank remove [player] [rank]", desc: "Remove a rank from a resident" },
        { cmd: "/town set mayor [player]", desc: "Transfer mayorship to another player" },
        { cmd: "/town set taxes [amount]", desc: "Set daily taxes for residents" },
        { cmd: "/town toggle taxpercent", desc: "Switch between flat tax and percentage" }
      ]
    },
    {
      title: "🏗️ Plot Management",
      description: "Commands for creating and managing plots",
      commands: [
        { cmd: "/plot forsale [price]", desc: "Put your plot up for sale" },
        { cmd: "/plot notforsale", desc: "Remove your plot from sale" },
        { cmd: "/plot claim", desc: "Claim an available plot" },
        { cmd: "/plot unclaim", desc: "Give up ownership of your plot" },
        { cmd: "/plot set [type]", desc: "Set plot type (shop, embassy, arena, etc.)" },
        { cmd: "/plot toggle [setting]", desc: "Change plot permissions" },
        { cmd: "/town set plotprice [price]", desc: "Set default plot price for your town" },
        { cmd: "/town set shopprice [price]", desc: "Set price for shop plots" }
      ]
    },
    {
      title: "👑 Nation Commands",
      description: "Commands for nation creation and management",
      commands: [
        { cmd: "/nation", desc: "View your nation information" },
        { cmd: "/nation new [name]", desc: "Create a new nation (costs $5000)" },
        { cmd: "/nation invite [town]", desc: "Invite a town to your nation" },
        { cmd: "/nation kick [town]", desc: "Remove a town from your nation" },
        { cmd: "/nation ally [nation]", desc: "Send alliance request to another nation" },
        { cmd: "/nation enemy [nation]", desc: "Declare another nation as enemy" },
        { cmd: "/nation neutral [nation]", desc: "Set neutral relationship with nation" },
        { cmd: "/nation set king [player]", desc: "Transfer nation leadership" },
        { cmd: "/nation deposit [amount]", desc: "Add money to nation bank" }
      ]
    },
    {
      title: "⚔️ War & PvP Commands",
      description: "Commands related to warfare and combat",
      commands: [
        { cmd: "/nation declare [nation]", desc: "Declare war on another nation" },
        { cmd: "/nation peace [nation]", desc: "Offer peace to an enemy nation" },
        { cmd: "/siege start [town]", desc: "Start a siege on an enemy town" },
        { cmd: "/siege surrender", desc: "Surrender during a siege" },
        { cmd: "/town toggle pvp", desc: "Enable/disable PvP in your town" },
        { cmd: "/town toggle explosion", desc: "Enable/disable explosions in town" },
        { cmd: "/town toggle fire", desc: "Enable/disable fire spread in town" },
        { cmd: "/town toggle mobs", desc: "Enable/disable mob spawning in town" }
      ]
    },
    {
      title: "📊 Information Commands",
      description: "Commands to get information about towns, nations, and players",
      commands: [
        { cmd: "/town [townname]", desc: "View information about any town" },
        { cmd: "/nation [nationname]", desc: "View information about any nation" },
        { cmd: "/resident [playername]", desc: "View information about any player" },
        { cmd: "/towny map", desc: "View a map of nearby claims" },
        { cmd: "/towny map big", desc: "View a larger claim map" },
        { cmd: "/towny top", desc: "View server leaderboards" },
        { cmd: "/towny time", desc: "Check time until next new day" },
        { cmd: "/towny prices", desc: "View server economy prices" }
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
              <Link href="/towny/wiki" className="nav-back">
                ← Back to Wiki
              </Link>
              <div className="nav-logo nav-logo-wiki">
                ⚡
              </div>
              <div>
                <h1 className="nav-title">Commands Guide</h1>
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
            ⚡ Complete Commands Guide
          </h1>
          <p className="hero-description">
            Master all Towny commands! From basic town management to advanced nation warfare, this guide covers every command you need to know.
          </p>
        </div>
      </section>

      {/* Commands Sections */}
      <section className="section-py section-bg">
        <div className="container">
          <div className="grid grid-auto-400">
            {commandCategories.map((category, index) => (
              <div key={index} className="card">
                <h2 className="card-title-20 mb-8">
                  {category.title}
                </h2>
                <p className="text-gray text-14 mb-16">
                  {category.description}
                </p>
                
                <div className="command-list">
                  {category.commands.map((command, cmdIndex) => (
                    <div key={cmdIndex} className="command-item">
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

      {/* Quick Reference */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            📋 Quick Reference
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🆘 Emergency Commands</h3>
              <p className="card-description mb-16">
                Commands you might need in urgent situations
              </p>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town spawn</div>
                  <div className="command-description">Get back to safety</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town deposit [amount]</div>
                  <div className="command-description">Fund town bank before upkeep</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/siege surrender</div>
                  <div className="command-description">End a siege you're losing</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town kick [griefer]</div>
                  <div className="command-description">Remove problematic residents</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💡 Pro Tips</h3>
              <p className="card-description mb-16">
                Advanced command usage tips
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Use tab completion to auto-fill player/town names</div>
                <div className="mb-8">• Commands are case-insensitive</div>
                <div className="mb-8">• Use /town ? for help with town commands</div>
                <div className="mb-8">• Most commands have shortened versions (/t, /n, /res)</div>
                <div className="mb-8">• Check /towny prices before major purchases</div>
                <div className="mb-8">• Use /towny time to plan your activities</div>
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
              <Link href="/towny/wiki/chunks" className="footer-link footer-link-orange">
                ← Chunks Guide
              </Link>
              <Link href="/towny/wiki/economy" className="footer-link footer-link-green">
                Economy Guide →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Master every command and dominate the server!
          </p>
        </div>
      </footer>
    </div>
  )
}
