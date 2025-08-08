import Link from "next/link"

export default function StaffPage() {
  const staffMembers = [
    {
      name: "KasadyaOwner",
      role: "Server Owner",
      description: "Founder and main developer of KasadyaCraft. Handles server management and major updates.",
      avatar: "👑",
      color: "#FF0000",
      discord: "KasadyaOwner#0001",
      joinDate: "January 2020"
    },
    {
      name: "AdminCraft",
      role: "Head Administrator",
      description: "Oversees daily operations and manages the admin team. Expert in Towny mechanics.",
      avatar: "⚡",
      color: "#FF6A00",
      discord: "AdminCraft#0002",
      joinDate: "March 2020"
    },
    {
      name: "ModeratorPro",
      role: "Senior Moderator",
      description: "Handles player disputes and maintains server peace. Specializes in nation politics.",
      avatar: "🛡️",
      color: "#FFAA00",
      discord: "ModeratorPro#0003",
      joinDate: "June 2020"
    },
    {
      name: "BuildMaster",
      role: "Build Team Lead",
      description: "Creates amazing spawn builds and helps with server infrastructure projects.",
      avatar: "🏗️",
      color: "#00FF00",
      discord: "BuildMaster#0004",
      joinDate: "August 2020"
    },
    {
      name: "EventHost",
      role: "Event Coordinator",
      description: "Organizes weekly events, competitions, and community activities.",
      avatar: "🎉",
      color: "#5555FF",
      discord: "EventHost#0005",
      joinDate: "October 2020"
    },
    {
      name: "SupportHelper",
      role: "Support Specialist",
      description: "Helps new players learn Towny mechanics and resolves technical issues.",
      avatar: "💬",
      color: "#AA00AA",
      discord: "SupportHelper#0006",
      joinDate: "December 2020"
    }
  ]

  const departments = [
    {
      name: "🏛️ Administration",
      description: "Server management and policy enforcement",
      members: ["KasadyaOwner", "AdminCraft"],
      responsibilities: [
        "Server maintenance and updates",
        "Policy creation and enforcement",
        "Major dispute resolution",
        "Plugin configuration"
      ]
    },
    {
      name: "🛡️ Moderation",
      description: "Player safety and community management",
      members: ["ModeratorPro", "SupportHelper"],
      responsibilities: [
        "Chat moderation",
        "Player report handling",
        "Rule enforcement",
        "New player assistance"
      ]
    },
    {
      name: "🎨 Build Team",
      description: "Server infrastructure and aesthetic improvements",
      members: ["BuildMaster"],
      responsibilities: [
        "Spawn area construction",
        "Server decoration",
        "Infrastructure projects",
        "Build competitions judging"
      ]
    },
    {
      name: "🎪 Events Team",
      description: "Community engagement and entertainment",
      members: ["EventHost"],
      responsibilities: [
        "Weekly event planning",
        "Competition organization",
        "Community activities",
        "Prize distribution"
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
                background: 'linear-gradient(45deg, #AA00AA, #8E24AA)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                👥
              </div>
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Server Staff</h1>
                <p style={{ fontSize: '14px', color: '#888' }}>Meet our team</p>
              </div>
            </div>
            <div className="flex" style={{ alignItems: 'center', gap: '24px' }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <Link href="/towny" style={{ color: 'white', textDecoration: 'none' }}>Towny</Link>
              <Link href="/staff" style={{ color: '#AA00AA', textDecoration: 'none', fontWeight: '600' }}>Staff</Link>
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
            background: 'linear-gradient(45deg, #AA00AA, #FF6A00, #00FF00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            👥 Meet Our Staff Team
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#ccc', 
            marginBottom: '32px', 
            maxWidth: '600px', 
            margin: '0 auto 32px' 
          }}>
            Our dedicated team works around the clock to ensure you have the best Towny experience possible!
          </p>
          
          <div style={{
            background: 'rgba(170, 0, 170, 0.1)',
            border: '2px solid #AA00AA',
            borderRadius: '12px',
            padding: '20px',
            maxWidth: '600px',
            margin: '0 auto',
            marginBottom: '32px'
          }}>
            <h3 style={{ color: '#AA00AA', marginBottom: '12px', fontSize: '18px' }}>📞 Need Help?</h3>
            <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.5' }}>
              Contact any staff member in-game or join our Discord for immediate assistance. 
              We're here to help make your KasadyaCraft experience amazing!
            </p>
          </div>
        </div>
      </section>

      {/* Staff Members */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#00FF00'
          }}>
            🌟 Our Team Members
          </h2>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {staffMembers.map((member, index) => (
              <div key={index} className="card" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  background: member.color,
                  color: 'white'
                }}>
                  ONLINE
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(45deg, ${member.color}, ${member.color}80)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                  }}>
                    {member.avatar}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>
                      {member.name}
                    </h3>
                    <p style={{ color: member.color, fontSize: '14px', fontWeight: '600' }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                
                <p style={{ color: '#ccc', marginBottom: '16px', lineHeight: '1.5' }}>
                  {member.description}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '12px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}>
                  <div>
                    <div style={{ color: '#888', marginBottom: '4px' }}>Discord:</div>
                    <div style={{ color: 'white', fontFamily: 'monospace' }}>{member.discord}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#888', marginBottom: '4px' }}>Joined:</div>
                    <div style={{ color: '#00FF00' }}>{member.joinDate}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16">
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FFAA00'
          }}>
            🏢 Staff Departments
          </h2>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {departments.map((dept, index) => (
              <div key={index} className="card">
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: 'white',
                  marginBottom: '8px'
                }}>
                  {dept.name}
                </h3>
                <p style={{ 
                  color: '#FFAA00', 
                  fontSize: '14px', 
                  marginBottom: '16px',
                  fontStyle: 'italic'
                }}>
                  {dept.description}
                </p>
                
                <div style={{ marginBottom: '16px' }}>
                  <h4 style={{ color: '#00FF00', fontSize: '14px', marginBottom: '8px' }}>Team Members:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {dept.members.map((memberName, memberIndex) => (
                      <span key={memberIndex} style={{
                        background: 'rgba(0, 255, 0, 0.1)',
                        border: '1px solid rgba(0, 255, 0, 0.3)',
                        borderRadius: '12px',
                        padding: '4px 8px',
                        fontSize: '12px',
                        color: '#00FF00'
                      }}>
                        {memberName}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 style={{ color: '#5555FF', fontSize: '14px', marginBottom: '8px' }}>Responsibilities:</h4>
                  <ul style={{ color: '#ccc', paddingLeft: '16px', fontSize: '13px', lineHeight: '1.4' }}>
                    {dept.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} style={{ marginBottom: '2px' }}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#FF6A00'
          }}>
            📞 How to Contact Staff
          </h2>
          
          <div className="grid grid-3">
            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎮</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
                In-Game
              </h3>
              <p style={{ color: '#ccc', marginBottom: '16px', fontSize: '14px' }}>
                Use /msg [StaffName] or /helpop for immediate assistance
              </p>
              <div style={{ 
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '8px',
                borderRadius: '6px',
                fontFamily: 'monospace',
                color: '#00FF00',
                fontSize: '13px'
              }}>
                /helpop I need help!
              </div>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
                Discord
              </h3>
              <p style={{ color: '#ccc', marginBottom: '16px', fontSize: '14px' }}>
                Join our Discord server for 24/7 support and community chat
              </p>
              <a href="https://discord.gg/kasadyacraft" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📧</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
                Support Tickets
              </h3>
              <p style={{ color: '#ccc', marginBottom: '16px', fontSize: '14px' }}>
                Create a support ticket for complex issues or appeals
              </p>
              <a href="https://discord.gg/kasadyacraft" className="btn" style={{ 
                background: 'linear-gradient(45deg, #5555FF, #3F51B5)', 
                color: 'white',
                textDecoration: 'none'
              }} target="_blank" rel="noopener noreferrer">
                Create Ticket
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
            <Link href="/" style={{ color: '#00FF00', textDecoration: 'none', marginRight: '24px' }}>
              ← Back to Home
            </Link>
            <Link href="/towny" style={{ color: '#FFAA00', textDecoration: 'none' }}>
              Explore Towny →
            </Link>
          </div>
          <p style={{ color: '#888', marginBottom: '8px', fontFamily: 'monospace' }}>
            play.kasadyacraft.online
          </p>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Our staff team is here to help you 24/7!
          </p>
        </div>
      </footer>
    </div>
  )
}
