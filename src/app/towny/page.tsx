import Link from "next/link"

export default function TownyPage() {
  const events = [
    {
      title: "🏆 Town Building Competition",
      date: "Jan 20, 2024",
      time: "8:00 PM EST",
      description: "Show off your architectural skills and win amazing prizes!",
      prize: "$500 in-game currency + Exclusive Title"
    },
    {
      title: "⚔️ Nation Wars Weekend",
      date: "Jan 25-26, 2024", 
      time: "All Day",
      description: "Epic battles between nations for territory control and glory!",
      prize: "Winning Nation gets 48h of /fly"
    },
    {
      title: "🏛️ Mayor's Council Meeting",
      date: "Jan 28, 2024",
      time: "6:00 PM EST", 
      description: "Monthly meeting for all town mayors to discuss server politics",
      prize: "Networking & Strategy Planning"
    }
  ]

  const leaderboards = [
    {
      category: "💰 Richest Players",
      icon: "💰",
      players: [
        { name: "CraftMaster99", value: "$125,000", rank: 1 },
        { name: "BuilderPro", value: "$98,500", rank: 2 },
        { name: "TownyKing", value: "$87,200", rank: 3 }
      ]
    },
    {
      category: "🏘️ Largest Towns",
      icon: "🏘️",
      players: [
        { name: "New Kasadya", value: "45 residents", rank: 1 },
        { name: "Emerald City", value: "38 residents", rank: 2 },
        { name: "Iron Valley", value: "32 residents", rank: 3 }
      ]
    },
    {
      category: "👑 Most Powerful Nations",
      icon: "👑",
      players: [
        { name: "The Empire", value: "8 towns", rank: 1 },
        { name: "Northern Alliance", value: "6 towns", rank: 2 },
        { name: "Desert Coalition", value: "5 towns", rank: 3 }
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
              <Link href="/" style={{ 
                color: '#888', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                ← Back to Home
              </Link>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(45deg, #FFAA00, #FF6A00)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                👑
              </div>
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Towny Server</h1>
                <p style={{ fontSize: '14px', color: '#888' }}>Build • Govern • Conquer</p>
              </div>
            </div>
            <div className="flex" style={{ alignItems: 'center', gap: '24px' }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <Link href="/towny" style={{ color: '#FFAA00', textDecoration: 'none', fontWeight: '600' }}>Towny</Link>
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
            background: 'linear-gradient(45deg, #FFAA00, #FF6A00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Towny Server
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#ccc', 
            marginBottom: '32px', 
            maxWidth: '600px', 
            margin: '0 auto 32px' 
          }}>
            Create your own town, form powerful nations, and engage in epic political gameplay. Build your legacy in our thriving Towny world!
          </p>
          
          {/* Quick Stats */}
          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '16px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            <div className="card text-center">
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏘️</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#00FF00' }}>47</div>
              <div style={{ color: '#888', fontSize: '14px' }}>Active Towns</div>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>👑</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFAA00' }}>12</div>
              <div style={{ color: '#888', fontSize: '14px' }}>Nations</div>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>👥</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#5555FF' }}>324</div>
              <div style={{ color: '#888', fontSize: '14px' }}>Residents</div>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>💰</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FF6A00' }}>$2.4M</div>
              <div style={{ color: '#888', fontSize: '14px' }}>Economy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#00FF00'
          }}>
            📅 Upcoming Events
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {events.map((event, index) => (
              <div key={index} className="card" style={{ marginBottom: '24px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '16px'
                }}>
                  <div>
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
                      {event.title}
                    </h3>
                    <p style={{ color: '#ccc', marginBottom: '12px', lineHeight: '1.5' }}>
                      {event.description}
                    </p>
                  </div>
                  <div style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: '#00FF00',
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    whiteSpace: 'nowrap'
                  }}>
                    {event.date}
                  </div>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center'
                }}>
                  <div style={{ color: '#888' }}>
                    <span style={{ marginRight: '16px' }}>🕐 {event.time}</span>
                    <span>🏆 {event.prize}</span>
                  </div>
                  <a href="https://discord.gg/kasadyacraft" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Join Event
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboards */}
      <section className="py-16">
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FFAA00'
          }}>
            🏆 Server Leaderboards
          </h2>
          <div className="grid grid-3">
            {leaderboards.map((board, index) => (
              <div key={index} className="card">
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: 'white',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  {board.icon} {board.category}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {board.players.map((player, playerIndex) => (
                    <div key={playerIndex} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '8px',
                      borderRadius: '6px',
                      background: player.rank === 1 ? 'rgba(255, 170, 0, 0.1)' : 'rgba(255, 255, 255, 0.05)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          background: player.rank === 1 ? '#FFAA00' : 
                                     player.rank === 2 ? '#C0C0C0' : '#CD7F32',
                          color: 'black'
                        }}>
                          {player.rank}
                        </div>
                        <span style={{ color: 'white', fontWeight: '500' }}>{player.name}</span>
                      </div>
                      <span style={{ color: '#00FF00', fontWeight: 'bold' }}>{player.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FF6A00'
          }}>
            ⚡ Quick Actions
          </h2>
          <div className="grid grid-3">
            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏰</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
                Create a Town
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px' }}>
                Start your own settlement and become a mayor. Lead your citizens to prosperity!
              </p>
              <Link href="/towny/create-town" className="btn" style={{ 
                width: '100%',
                background: 'linear-gradient(45deg, #FFAA00, #FF8F00)', 
                color: 'black',
                fontWeight: 'bold',
                display: 'block',
                textDecoration: 'none'
              }}>
                Learn How
              </Link>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛡️</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
                Join a Nation
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px' }}>
                Ally with other towns for protection, power, and shared resources!
              </p>
              <Link href="/towny/wiki" className="btn" style={{ 
                width: '100%',
                background: 'linear-gradient(45deg, #5555FF, #3F51B5)', 
                color: 'white',
                display: 'block',
                textDecoration: 'none'
              }}>
                View Nations Guide
              </Link>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚔️</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
                Declare War
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px' }}>
                Engage in strategic warfare with rival nations for territory and glory!
              </p>
              <Link href="/towny/wiki" className="btn" style={{ 
                width: '100%',
                background: 'linear-gradient(45deg, #FF5555, #F44336)', 
                color: 'white',
                display: 'block',
                textDecoration: 'none'
              }}>
                War System Guide
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
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '8px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(45deg, #FFAA00, #FF6A00)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                👑
              </div>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>KasadyaCraft Towny</span>
            </div>
          </div>
          <p style={{ color: '#888', marginBottom: '8px' }}>
            Build your empire • Form alliances • Conquer lands
          </p>
          <p style={{ color: '#666', fontSize: '14px' }}>
            © 2024 KasadyaCraft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
