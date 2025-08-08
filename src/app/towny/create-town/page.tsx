import Link from "next/link"

export default function CreateTownPage() {
  const steps = [
    {
      step: 1,
      title: "Gather Resources",
      description: "You'll need money to create and maintain your town",
      requirements: [
        "$1,000 - Town creation fee",
        "$50/day - Daily upkeep cost",
        "Choose a good location away from other towns"
      ],
      command: "/bal",
      commandDesc: "Check your current balance"
    },
    {
      step: 2,
      title: "Create Your Town",
      description: "Use the town creation command while standing where you want your town center",
      requirements: [
        "Stand in the chunk where you want your town hall",
        "Make sure you're not too close to existing towns",
        "Choose a unique town name (no spaces)"
      ],
      command: "/town new [TownName]",
      commandDesc: "Creates a new town with you as mayor"
    },
    {
      step: 3,
      title: "Claim Additional Chunks",
      description: "Expand your town by claiming more chunks around your town center",
      requirements: [
        "$25 per chunk claimed",
        "Chunks must be adjacent to existing claims",
        "Maximum claims based on residents"
      ],
      command: "/town claim",
      commandDesc: "Claims the chunk you're standing in"
    },
    {
      step: 4,
      title: "Set Town Permissions",
      description: "Configure who can build, destroy, and interact in your town",
      requirements: [
        "Decide on public vs private areas",
        "Set permissions for residents vs outsiders",
        "Configure PvP settings"
      ],
      command: "/town toggle [setting]",
      commandDesc: "Toggle various town settings"
    },
    {
      step: 5,
      title: "Invite Residents",
      description: "Grow your town by inviting other players to join",
      requirements: [
        "Players must accept your invitation",
        "More residents = more chunks you can claim",
        "Residents help pay upkeep costs"
      ],
      command: "/town invite [PlayerName]",
      commandDesc: "Invites a player to join your town"
    }
  ]

  const importantCommands = [
    { command: "/town", desc: "View your town information" },
    { command: "/town spawn", desc: "Teleport to your town spawn" },
    { command: "/town set spawn", desc: "Set your town's spawn point" },
    { command: "/town set name [NewName]", desc: "Change your town's name" },
    { command: "/town deposit [amount]", desc: "Deposit money into town bank" },
    { command: "/town withdraw [amount]", desc: "Withdraw money from town bank" },
    { command: "/town kick [PlayerName]", desc: "Remove a resident from your town" },
    { command: "/town unclaim", desc: "Unclaim the chunk you're standing in" },
    { command: "/town set board [message]", desc: "Set your town's message board" },
    { command: "/town set mayor [PlayerName]", desc: "Transfer mayorship to another resident" }
  ]

  const townSettings = [
    { setting: "public", desc: "Allow anyone to join without invitation" },
    { setting: "pvp", desc: "Enable/disable PvP in your town" },
    { setting: "explosion", desc: "Allow/prevent explosions in town" },
    { setting: "fire", desc: "Allow/prevent fire spread in town" },
    { setting: "mobs", desc: "Allow/prevent mob spawning in town" },
    { setting: "taxpercent", desc: "Set tax as percentage vs flat rate" }
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
                background: 'linear-gradient(45deg, #00FF00, #00CC00)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                🏗️
              </div>
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Create a Town</h1>
                <p style={{ fontSize: '14px', color: '#888' }}>Step-by-step guide</p>
              </div>
            </div>
            <div className="flex" style={{ alignItems: 'center', gap: '24px' }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <Link href="/towny" style={{ color: '#FFAA00', textDecoration: 'none' }}>Towny</Link>
              <Link href="/towny/wiki" style={{ color: 'white', textDecoration: 'none' }}>Wiki</Link>
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
            background: 'linear-gradient(45deg, #00FF00, #FFAA00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🏗️ Create Your Town
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#ccc', 
            marginBottom: '32px', 
            maxWidth: '600px', 
            margin: '0 auto 32px' 
          }}>
            Follow this comprehensive guide to establish your own town and become a mayor in our Towny world!
          </p>
          
          <div style={{
            background: 'rgba(255, 170, 0, 0.1)',
            border: '2px solid #FFAA00',
            borderRadius: '12px',
            padding: '20px',
            maxWidth: '600px',
            margin: '0 auto',
            marginBottom: '32px'
          }}>
            <h3 style={{ color: '#FFAA00', marginBottom: '12px', fontSize: '18px' }}>⚠️ Before You Start</h3>
            <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.5' }}>
              Make sure you have at least <strong style={{ color: '#00FF00' }}>$1,000</strong> and have chosen a good location 
              away from existing towns. Town creation is permanent, so choose wisely!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="minecraft://play.kasadyacraft.online" 
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              🎮 Join Server to Start
            </a>
            <a 
              href="https://discord.gg/kasadyacraft" 
              className="btn btn-secondary"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              💬 Get Help on Discord
            </a>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#00FF00'
          }}>
            📋 Step-by-Step Guide
          </h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {steps.map((step, index) => (
              <div key={index} className="card" style={{ marginBottom: '32px', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '20px',
                  background: '#00FF00',
                  color: 'black',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>
                  {step.step}
                </div>
                
                <div style={{ paddingTop: '20px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#ccc', marginBottom: '16px', lineHeight: '1.5' }}>
                    {step.description}
                  </p>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ color: '#FFAA00', marginBottom: '8px', fontSize: '16px' }}>Requirements:</h4>
                    <ul style={{ color: '#ccc', paddingLeft: '20px' }}>
                      {step.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} style={{ marginBottom: '4px' }}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid #00FF00',
                    borderRadius: '8px',
                    padding: '16px',
                    fontFamily: 'monospace'
                  }}>
                    <div style={{ color: '#00FF00', fontWeight: 'bold', marginBottom: '4px' }}>
                      Command: <span style={{ color: '#FFAA00' }}>{step.command}</span>
                    </div>
                    <div style={{ color: '#ccc', fontSize: '14px' }}>
                      {step.commandDesc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Commands */}
      <section className="py-16">
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FFAA00'
          }}>
            ⌨️ Essential Town Commands
          </h2>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
            {importantCommands.map((cmd, index) => (
              <div key={index} style={{
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ 
                    color: '#00FF00', 
                    fontFamily: 'monospace', 
                    fontWeight: 'bold',
                    marginBottom: '4px'
                  }}>
                    {cmd.command}
                  </div>
                  <div style={{ color: '#ccc', fontSize: '14px' }}>
                    {cmd.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Town Settings */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FF6A00'
          }}>
            ⚙️ Town Settings
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
              <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '20px' }}>
                Available Toggle Settings
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px' }}>
                Use <code style={{ background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: '4px', color: '#00FF00' }}>/town toggle [setting]</code> to change these options:
              </p>
              
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                {townSettings.map((setting, index) => (
                  <div key={index} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '12px'
                  }}>
                    <div style={{ 
                      color: '#FFAA00', 
                      fontWeight: 'bold',
                      marginBottom: '4px'
                    }}>
                      {setting.setting}
                    </div>
                    <div style={{ color: '#ccc', fontSize: '14px' }}>
                      {setting.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#5555FF'
          }}>
            💡 Pro Tips
          </h2>
          
          <div className="grid grid-3">
            <div className="card">
              <div style={{ fontSize: '48px', marginBottom: '16px', textAlign: 'center' }}>💰</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                Manage Your Economy
              </h3>
              <ul style={{ color: '#ccc', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>Set up shops to generate income</li>
                <li>Collect taxes from residents</li>
                <li>Keep enough in town bank for upkeep</li>
                <li>Consider joining a nation for protection</li>
              </ul>
            </div>

            <div className="card">
              <div style={{ fontSize: '48px', marginBottom: '16px', textAlign: 'center' }}>🏘️</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                Grow Your Population
              </h3>
              <ul style={{ color: '#ccc', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>Advertise your town in chat</li>
                <li>Offer free plots to new residents</li>
                <li>Create community buildings</li>
                <li>Host events and competitions</li>
              </ul>
            </div>

            <div className="card">
              <div style={{ fontSize: '48px', marginBottom: '16px', textAlign: 'center' }}>🛡️</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>
                Protect Your Town
              </h3>
              <ul style={{ color: '#ccc', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>Set appropriate permissions</li>
                <li>Consider disabling PvP for safety</li>
                <li>Join a peaceful nation</li>
                <li>Build walls and defenses</li>
              </ul>
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
            <Link href="/towny" style={{ color: '#00FF00', textDecoration: 'none', marginRight: '24px' }}>
              ← Back to Towny Hub
            </Link>
            <Link href="/towny/wiki" style={{ color: '#FFAA00', textDecoration: 'none' }}>
              Visit Wiki →
            </Link>
          </div>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Need help? Ask in our Discord or use /help in-game!
          </p>
        </div>
      </footer>
    </div>
  )
}
