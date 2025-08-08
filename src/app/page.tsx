import Link from "next/link"

export default function HomePage() {
  const serverStats = [
    { label: "Players Online", value: "1,247", color: "text-green-400" },
    { label: "Total Registered", value: "45,892", color: "text-blue-400" },
    { label: "Active Towns", value: "156", color: "text-yellow-400" },
    { label: "Server Uptime", value: "99.9%", color: "text-purple-400" }
  ]

  const gameModes = [
    {
      name: "Towny",
      description: "Build towns, create nations, and engage in epic political warfare!",
      players: "847 playing",
      status: "online",
      image: "/minecraft-town.png",
      href: "/towny"
    },
    {
      name: "Skyblock",
      description: "Start with nothing and build your island empire in the sky!",
      players: "Coming Soon",
      status: "maintenance",
      image: "/minecraft-skyblock.png",
      href: "#"
    },
    {
      name: "Creative",
      description: "Unlimited resources for your wildest architectural dreams!",
      players: "Coming Soon", 
      status: "maintenance",
      image: "/minecraft-creative-builds.png",
      href: "#"
    }
  ]

  const announcements = [
    {
      title: "🎉 Towny Season 3 Launch!",
      content: "New economy system, custom enchants, and epic nation wars await!",
      date: "Jan 15, 2024",
      type: "major"
    },
    {
      title: "⚔️ Weekly PvP Tournament",
      content: "Join this Saturday's tournament for exclusive rewards and glory!",
      date: "Jan 12, 2024", 
      type: "event"
    },
    {
      title: "🔧 Server Maintenance Complete",
      content: "Performance improvements and bug fixes have been deployed.",
      date: "Jan 10, 2024",
      type: "update"
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
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(45deg, #00FF00, #00AA00)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                🏰
              </div>
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>KasadyaCraft</h1>
                <p style={{ fontSize: '14px', color: '#888', fontFamily: 'monospace' }}>play.kasadyacraft.online</p>
              </div>
            </div>
            <div className="flex" style={{ alignItems: 'center', gap: '24px' }}>
              <Link href="/" style={{ color: '#00FF00', textDecoration: 'none', fontWeight: '600' }}>Home</Link>
              <Link href="/towny" style={{ color: 'white', textDecoration: 'none' }}>Towny</Link>
              <Link href="#" style={{ color: 'white', textDecoration: 'none' }}>Forums</Link>
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
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            fontWeight: 'bold', 
            marginBottom: '24px',
            background: 'linear-gradient(45deg, #00FF00, #FFAA00, #FF6A00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Welcome to KasadyaCraft
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#ccc', 
            marginBottom: '32px', 
            maxWidth: '600px', 
            margin: '0 auto 32px' 
          }}>
            Join thousands of players in the ultimate Minecraft experience. Build towns, forge alliances, and create your legacy!
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '24px',
            marginBottom: '48px'
          }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.5)',
              padding: '16px 32px',
              borderRadius: '12px',
              border: '2px solid #00FF00',
              fontFamily: 'monospace',
              fontSize: '18px',
              color: '#00FF00',
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)'
            }}>
              play.kasadyacraft.online
            </div>
            <a href="#" className="btn btn-primary" style={{ fontSize: '18px', padding: '16px 32px' }}>
              🎮 Join Server Now
            </a>
          </div>

          {/* Server Stats */}
          <div className="grid grid-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {serverStats.map((stat, index) => (
              <div key={index} className="card text-center">
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' }} className={stat.color}>
                  {stat.value}
                </div>
                <div style={{ color: '#ccc' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FFAA00'
          }}>
            Game Modes
          </h2>
          <div className="grid grid-3">
            {gameModes.map((mode, index) => (
              <div key={index} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  background: mode.status === 'online' ? '#00FF00' : '#FF6A00',
                  color: mode.status === 'online' ? 'black' : 'white'
                }}>
                  {mode.status === 'online' ? '🟢 ONLINE' : '🔧 COMING SOON'}
                </div>
                
                <img 
                  src={mode.image || "/placeholder.svg"} 
                  alt={mode.name}
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '8px',
                    marginBottom: '16px'
                  }}
                />
                
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
                  {mode.name}
                </h3>
                <p style={{ color: '#ccc', marginBottom: '16px', lineHeight: '1.5' }}>
                  {mode.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <span style={{ color: '#888' }}>👥 {mode.players}</span>
                </div>
                
                {mode.status === 'online' ? (
                  <Link href={mode.href} className="btn btn-primary" style={{ width: '100%' }}>
                    Play Now
                  </Link>
                ) : (
                  <button className="btn" style={{ 
                    width: '100%', 
                    background: '#444', 
                    color: '#888',
                    cursor: 'not-allowed'
                  }} disabled>
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16">
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FF6A00'
          }}>
            Latest News
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {announcements.map((announcement, index) => (
              <div key={index} className="card" style={{ marginBottom: '24px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '12px'
                }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
                    {announcement.title}
                  </h3>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    background: announcement.type === 'major' ? '#FF6A00' : 
                               announcement.type === 'event' ? '#5555FF' : '#00AA00',
                    color: 'white'
                  }}>
                    {announcement.type.toUpperCase()}
                  </span>
                </div>
                <p style={{ color: '#ccc', marginBottom: '12px', lineHeight: '1.5' }}>
                  {announcement.content}
                </p>
                <div style={{ color: '#888', fontSize: '14px' }}>
                  📅 {announcement.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#5555FF'
          }}>
            Join Our Community
          </h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
                Discord Server
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px' }}>
                Chat with players, get support, and stay updated with the latest news!
              </p>
              <a href="https://discord.gg/kasadyacraft" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </div>
            
            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>❤️</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
                Support Us
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px' }}>
                Help keep the server running and get exclusive perks and rewards!
              </p>
              <a href="#" className="btn" style={{ 
                background: 'linear-gradient(45deg, #FF1744, #C51162)', 
                color: 'white' 
              }}>
                Donate
              </a>
            </div>
            
            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📚</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
                Wiki & Guides
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px' }}>
                Learn the ropes with our comprehensive guides and tutorials!
              </p>
              <a href="#" className="btn" style={{ 
                background: 'linear-gradient(45deg, #4CAF50, #2E7D32)', 
                color: 'white' 
              }}>
                Read Wiki
              </a>
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
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '8px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(45deg, #00FF00, #00AA00)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                🏰
              </div>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>KasadyaCraft</span>
            </div>
          </div>
          <p style={{ color: '#888', marginBottom: '8px', fontFamily: 'monospace' }}>
            play.kasadyacraft.online
          </p>
          <p style={{ color: '#666', fontSize: '14px' }}>
            © 2024 KasadyaCraft. All rights reserved. Not affiliated with Mojang Studios.
          </p>
        </div>
      </footer>
    </div>
  )
}
