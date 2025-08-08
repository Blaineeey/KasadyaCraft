import Link from "next/link"

export default function CreateTownPage() {
  const steps = [
    {
      step: 1,
      title: "Join the Server",
      description: "Connect to play.kasadyacraft.online and find a good location for your town",
      commands: ["Connect to: play.kasadyacraft.online"],
      tips: "Look for a flat area with resources nearby. Avoid building too close to other towns unless you plan to be allies."
    },
    {
      step: 2,
      title: "Gather Resources",
      description: "Collect the required money and materials to create your town",
      commands: ["/balance - Check your current money"],
      tips: "You need $1000 to create a town. Mine, trade, or complete jobs to earn money. The spawn area usually has job boards."
    },
    {
      step: 3,
      title: "Create Your Town",
      description: "Use the town creation command with your chosen name",
      commands: ["/town new [TownName]"],
      tips: "Choose a unique name that represents your town's identity. You can't change it later without admin help!"
    },
    {
      step: 4,
      title: "Claim Your Land",
      description: "Protect your town by claiming chunks of land",
      commands: [
        "/town claim - Claim the chunk you're standing in",
        "/town claim auto - Auto-claim as you walk",
        "/town unclaim - Remove a claim"
      ],
      tips: "Each chunk is 16x16 blocks. Plan your layout before claiming. You get free claims based on residents, but extra claims cost money."
    },
    {
      step: 5,
      title: "Set Your Town Spawn",
      description: "Create a spawn point where residents and visitors will teleport",
      commands: ["/town set spawn"],
      tips: "Set this in a central, safe location like your town hall. This is where new residents will first appear."
    },
    {
      step: 6,
      title: "Invite Residents",
      description: "Grow your town by inviting other players to join",
      commands: [
        "/town invite [PlayerName]",
        "/town add [PlayerName] - Force add (if they accept)",
        "/town kick [PlayerName] - Remove a resident"
      ],
      tips: "More residents = more daily money and more free land claims. Be selective and invite trustworthy players."
    },
    {
      step: 7,
      title: "Manage Your Town",
      description: "Configure settings, permissions, and town features",
      commands: [
        "/town - View town information",
        "/town set board [message] - Set town message",
        "/town toggle [setting] - Change town settings",
        "/town set taxes [amount] - Set daily taxes"
      ],
      tips: "Explore all the town settings. You can control PvP, explosions, mob spawning, and more for your town."
    },
    {
      step: 8,
      title: "Create Plots (Optional)",
      description: "Divide your town into plots that residents can own",
      commands: [
        "/plot forsale [price] - Sell the plot you're standing in",
        "/plot set [type] - Set plot type (shop, embassy, etc.)",
        "/town set plotprice [price] - Set default plot price"
      ],
      tips: "Plots let residents own specific areas. Great for organized towns and generating income through plot sales."
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
              <div className="nav-logo nav-logo-towny">
                🏗️
              </div>
              <div>
                <h1 className="nav-title">Create a Town Guide</h1>
                <p className="nav-subtitle-mono">play.kasadyacraft.online</p>
              </div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/towny" className="nav-link-towny">Towny</Link>
              <Link href="/towny/wiki" className="nav-link">Wiki</Link>
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
          <h1 className="hero-title-towny">
            🏗️ Create Your First Town
          </h1>
          <p className="hero-description">
            Follow this step-by-step guide to create and manage your own town in KasadyaCraft's Towny server. Build your community and establish your legacy!
          </p>
          
          <div className="hero-info-box">
            <h3 className="hero-box-title hero-box-title-towny">💰 Requirements: $1000 in-game money</h3>
            <p className="hero-box-text">
              Make sure you have enough money before starting. You can earn money through mining, jobs, trading, or asking other players for help.
            </p>
          </div>

          <div className="hero-buttons">
            <a href="minecraft://play.kasadyacraft.online" className="btn btn-primary">
              🎮 Join Server
            </a>
            <Link href="/towny/wiki" className="btn btn-secondary">
              📚 Full Wiki
            </Link>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            📋 Step-by-Step Guide
          </h2>
          
          <div className="grid grid-auto-400">
            {steps.map((stepData, index) => (
              <div key={index} className="card">
                <div className="mb-16">
                  <div className="text-towny text-20 mb-8">
                    Step {stepData.step}
                  </div>
                  <h3 className="card-title-20 mb-8">
                    {stepData.title}
                  </h3>
                  <p className="text-gray text-14 mb-16">
                    {stepData.description}
                  </p>
                </div>
                
                <div className="mb-16">
                  <h4 className="text-white mb-8 text-16">Commands:</h4>
                  <div className="command-list">
                    {stepData.commands.map((command, cmdIndex) => (
                      <div key={cmdIndex} className="command-item">
                        <div className="command-name">
                          {command}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="tip-box">
                  <h4 className="text-white mb-8 text-16">💡 Pro Tip:</h4>
                  <p className="text-gray text-14">
                    {stepData.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            ⚡ Quick Command Reference
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏘️ Essential Town Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town new [name]</div>
                  <div className="command-description">Create a new town</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town claim</div>
                  <div className="command-description">Claim land for your town</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town invite [player]</div>
                  <div className="command-description">Invite a player to your town</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set spawn</div>
                  <div className="command-description">Set your town's spawn point</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town</div>
                  <div className="command-description">View your town information</div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="card-title">🔧 Town Management</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town set board [message]</div>
                  <div className="command-description">Set town message board</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle [setting]</div>
                  <div className="command-description">Toggle town settings</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set taxes [amount]</div>
                  <div className="command-description">Set daily resident taxes</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town deposit [amount]</div>
                  <div className="command-description">Add money to town bank</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town rank add [player] [rank]</div>
                  <div className="command-description">Give ranks to residents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips and Warnings */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            ⚠️ Important Tips & Warnings
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Best Practices</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Choose your town location carefully - you can't move it later</div>
                <div className="mb-8">• Keep your town bank funded for daily upkeep costs</div>
                <div className="mb-8">• Set reasonable taxes - too high and residents will leave</div>
                <div className="mb-8">• Create clear rules and communicate them to residents</div>
                <div className="mb-8">• Plan your town layout before claiming lots of land</div>
                <div className="mb-8">• Be active - inactive mayors can lose their towns</div>
                <div className="mb-8">• Join or create a nation for protection and benefits</div>
                <div className="mb-8">• Build relationships with neighboring towns</div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="card-title">❌ Common Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Don't create a town without enough money for upkeep</div>
                <div className="mb-8">• Don't claim random chunks - plan your expansion</div>
                <div className="mb-8">• Don't invite players you don't trust</div>
                <div className="mb-8">• Don't set taxes too high initially</div>
                <div className="mb-8">• Don't forget to set your town spawn point</div>
                <div className="mb-8">• Don't ignore your town bank balance</div>
                <div className="mb-8">• Don't build too close to hostile neighbors</div>
                <div className="mb-8">• Don't abandon your town without transferring ownership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-py">
        <div className="container text-center">
          <h2 className="section-title section-title-purple">
            🚀 What's Next?
          </h2>
          <p className="hero-description">
            Congratulations on creating your town! Now it's time to grow your community and explore advanced features.
          </p>
          <div className="hero-buttons">
            <Link href="/towny/wiki" className="btn btn-primary">
              📚 Advanced Guides
            </Link>
            <a href="minecraft://play.kasadyacraft.online" className="btn btn-towny">
              🎮 Start Building
            </a>
            <a href="https://discord.gg/8DY3eXHnAg" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              💬 Get Help
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/towny" className="footer-link footer-link-orange">
                ← Back to Towny
              </Link>
              <Link href="/towny/wiki" className="footer-link footer-link-green">
                Towny Wiki →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Good luck with your new town, Mayor!
          </p>
        </div>
      </footer>
    </div>
  )
}
