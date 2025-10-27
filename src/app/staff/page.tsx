import Link from "next/link"

export default function StaffPage() {
  const staffMembers = [
    {
      name: "TBD",
      role: "Head Administrator",
      description: "Senior administrator responsible for staff management, plugin configuration, and handling complex player issues.",
      contact: [
        { type: "Discord", value: "TBD" },
        { type: "In-Game", value: "/msg TBD" }
      ]
    },
    {
      name: "Rasasakeet",
      role: "Senior Moderator",
      description: "Experienced moderator specializing in player disputes, Slimefun support, and maintaining server peace.",
      contact: [
        { type: "Discord", value: "I F R I T Z#0310" },
        { type: "In-Game", value: "/msg Rasasakeet" }
      ]
    },
    {
      name: "TBD",
      role: "Moderator",
      description: "Handles player reports, enforces server rules, and assists with general player support and questions.",
      contact: [
        { type: "Discord", value: "TBD" },
        { type: "In-Game", value: "/msg TBD" }
      ]
    },
    {
      name: "TBD",
      role: "Helper",
      description: "Community helper focused on assisting new players, answering questions, and providing Slimefun guidance.",
      contact: [
        { type: "Discord", value: "TBD" },
        { type: "In-Game", value: "/msg TBD" }
      ]
    },
    {
      name: "TBD",
      role: "Helper",
      description: "Friendly helper who specializes in building advice, server features, and community event organization.",
      contact: [
        { type: "Discord", value: "TBD" },
        { type: "In-Game", value: "/msg TBD" }
      ]
    }
  ]

  const departments = [
    {
      name: "🛡️ Administration",
      description: "Server management, major decisions, and policy enforcement",
      members: ["Admins"]
    },
    {
      name: "⚖️ Moderation",
      description: "Rule enforcement, dispute resolution, and player discipline",
      members: ["Moderators"]
    },
    {
      name: "🤝 Community Support",
      description: "Player assistance, questions, and new player guidance",
      members: ["Helpers"]
    }
  ]

  return (
    <div className="minecraft-bg">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-flex">
            <div className="nav-left">
              <Link href="/" className="nav-back">
                ← Back to Home
              </Link>
              <div className="nav-logo nav-logo-staff">
                👥
              </div>
              <div>
                <h1 className="nav-title">Staff Team</h1>
                <p className="nav-subtitle-mono">play.kasadyacraft.online</p>
              </div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/smp" className="nav-link">SMP</Link>
              <Link href="/staff" className="nav-link-staff">Staff</Link>
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
          <h1 className="hero-title-staff">
            👥 Meet Our Staff Team
          </h1>
          <p className="hero-description">
            Our dedicated team of administrators, moderators, and helpers work around the clock to ensure KasadyaCraft remains a fun, fair, and welcoming community for all players.
          </p>
          
          <div className="hero-info-box">
            <h3 className="hero-box-title hero-box-title-info">🎮 Server: play.kasadyacraft.online</h3>
            <p className="hero-box-text">
              Need help? Our staff team is here to assist you! Contact us in-game, through Discord, or use the methods listed below.
            </p>
          </div>
        </div>
      </section>

      {/* Staff Departments */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🏢 Staff Departments
          </h2>
          <div className="grid grid-3">
            {departments.map((dept, index) => (
              <div key={index} className="card text-center">
                <h3 className="card-title">{dept.name}</h3>
                <p className="card-description mb-16">{dept.description}</p>
                <div className="text-center">
                  <strong className="text-white">Team Members:</strong>
                  <div className="mt-8">
                    {dept.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="text-gray text-14 mb-4">
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Members */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            👤 Staff Members
          </h2>
          <div className="grid grid-3">
            {staffMembers.map((member, index) => (
              <div key={index} className="card staff-card">
                <div className="staff-avatar">
                  👤
                </div>
                <h3 className="staff-name">{member.name}</h3>
                <div className="staff-role">{member.role}</div>
                <p className="staff-description">{member.description}</p>
                <div className="staff-contact">
                  {member.contact.map((contact, contactIndex) => (
                    <div key={contactIndex} className="staff-contact-btn">
                      {contact.type}: {contact.value}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            📞 How to Contact Staff
          </h2>
          <div className="grid grid-3">
            <div className="card text-center">
              <div className="icon-48 icon-center">🎮</div>
              <h3 className="card-title">In-Game</h3>
              <p className="card-description mb-16">
                Use in-game commands to contact staff members directly while playing.
              </p>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/msg [StaffName]</div>
                  <div className="command-description">Send a private message</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/helpop [message]</div>
                  <div className="command-description">Request help from online staff</div>
                </div>
              </div>
            </div>

            <div className="card text-center">
              <div className="icon-48 icon-center">💬</div>
              <h3 className="card-title">Discord</h3>
              <p className="card-description mb-20">
                Join our Discord server for the fastest response and community support.
              </p>
              <a href="https://discord.gg/8DY3eXHnAg" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </div>

            <div className="card text-center">
              <div className="icon-48 icon-center">📧</div>
              <h3 className="card-title">Support Tickets</h3>
              <p className="card-description mb-20">
                For complex issues, create a support ticket in our Discord server.
              </p>
              <div className="btn btn-secondary">
                #support-tickets
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Guidelines */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            📋 When to Contact Staff
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Contact Staff For:</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Rule violations and griefing reports</div>
                <div className="mb-8">• Player disputes and conflicts</div>
                <div className="mb-8">• Technical issues and bugs</div>
                <div className="mb-8">• Questions about Slimefun or Epidemic</div>
                <div className="mb-8">• Ban appeals and punishment disputes</div>
                <div className="mb-8">• Inappropriate behavior reports</div>
                <div className="mb-8">• Lost items due to server issues</div>
                <div className="mb-8">• General help and guidance</div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="card-title">❌ Please Don't Contact Staff For:</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Basic gameplay questions (ask the community first)</div>
                <div className="mb-8">• Requesting items or money</div>
                <div className="mb-8">• Complaints about fair PvP deaths</div>
                <div className="mb-8">• Minor disagreements between players</div>
                <div className="mb-8">• Requesting staff positions</div>
                <div className="mb-8">• Spamming multiple staff members</div>
                <div className="mb-8">• Issues already resolved</div>
                <div className="mb-8">• Personal drama unrelated to the server</div>
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
              <Link href="/" className="footer-link footer-link-green">
                ← Back to Home
              </Link>
              <Link href="/smp" className="footer-link footer-link-orange">
                SMP Hub →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Our staff team is here to help you 24/7!
          </p>
        </div>
      </footer>
    </div>
  )
}
