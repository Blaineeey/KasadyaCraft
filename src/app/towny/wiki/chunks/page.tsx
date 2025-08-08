import Link from "next/link"

export default function ChunksPage() {
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
                📐
              </div>
              <div>
                <h1 className="nav-title">Chunks & Claims</h1>
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
            📐 Understanding Chunks & Claims
          </h1>
          <p className="hero-description">
            Learn how land claiming works in Towny. Master the chunk system to protect your builds and expand your territory effectively.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-py section-bg">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h2 className="card-title">🧱 What are Chunks?</h2>
              <p className="card-description mb-16">
                Chunks are 16x16 block areas that make up the Minecraft world. In Towny, you claim entire chunks to protect your land.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Each chunk is exactly 16x16 blocks</div>
                <div className="mb-8">• Chunks extend from bedrock to sky limit</div>
                <div className="mb-8">• You can see chunk borders with F3+G</div>
                <div className="mb-8">• Towns claim chunks, not individual blocks</div>
                <div className="mb-8">• One chunk = one claim in Towny</div>
              </div>
            </div>

            <div className="card">
              <h2 className="card-title">🛡️ How Claims Work</h2>
              <p className="card-description mb-16">
                Claiming chunks protects them from griefing and gives you control over who can build, break blocks, and interact with items.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Only town residents can build in claimed chunks</div>
                <div className="mb-8">• Claims prevent griefing and theft</div>
                <div className="mb-8">• You control permissions for each chunk</div>
                <div className="mb-8">• Claims cost money after your free allowance</div>
                <div className="mb-8">• Abandoned claims return to wilderness</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            ⚡ Claiming Commands
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏘️ Basic Claiming</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town claim</div>
                  <div className="command-description">Claim the chunk you're standing in</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town claim auto</div>
                  <div className="command-description">Auto-claim chunks as you walk</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town unclaim</div>
                  <div className="command-description">Remove claim from current chunk</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town unclaim all</div>
                  <div className="command-description">Remove all town claims</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">📊 Information Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town</div>
                  <div className="command-description">View town info including claim count</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/towny map</div>
                  <div className="command-description">See a map of nearby claims</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/towny map big</div>
                  <div className="command-description">View a larger claim map</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/res</div>
                  <div className="command-description">View your resident information</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claiming Strategy */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🎯 Claiming Strategy
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">💰 Free Claims</h3>
              <p className="card-description mb-16">
                Every town gets free claims based on the number of residents.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• 1 resident = 8 free claims</div>
                <div className="mb-8">• 2 residents = 16 free claims</div>
                <div className="mb-8">• Each additional resident = +8 claims</div>
                <div className="mb-8">• Extra claims cost $25 each</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">📍 Smart Claiming</h3>
              <p className="card-description mb-16">
                Plan your claims strategically to maximize protection and minimize costs.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Claim your town center first</div>
                <div className="mb-8">• Create a border around important builds</div>
                <div className="mb-8">• Connect claims to prevent gaps</div>
                <div className="mb-8">• Consider future expansion plans</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚠️ Claim Limits</h3>
              <p className="card-description mb-16">
                Understanding the limits helps you plan your town layout effectively.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Maximum town size: 200 chunks</div>
                <div className="mb-8">• Claims must be connected</div>
                <div className="mb-8">• Can't claim within 3 chunks of enemy towns</div>
                <div className="mb-8">• Wilderness claims revert if town falls</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            💡 Pro Tips
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Best Practices</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Use F3+G to see chunk borders before claiming</div>
                <div className="mb-8">• Claim in a logical pattern, not randomly</div>
                <div className="mb-8">• Always keep some money for emergency claims</div>
                <div className="mb-8">• Coordinate with residents on expansion plans</div>
                <div className="mb-8">• Use /towny map to visualize your territory</div>
                <div className="mb-8">• Claim resource areas outside your main town</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">❌ Common Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Don't claim random chunks far from town</div>
                <div className="mb-8">• Don't waste free claims on unimportant areas</div>
                <div className="mb-8">• Don't forget to fund your town bank for upkeep</div>
                <div className="mb-8">• Don't claim without checking chunk borders</div>
                <div className="mb-8">• Don't expand too fast without residents</div>
                <div className="mb-8">• Don't ignore your claim-to-resident ratio</div>
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
              <Link href="/towny/wiki" className="footer-link footer-link-orange">
                ← Back to Wiki
              </Link>
              <Link href="/towny/wiki/commands" className="footer-link footer-link-green">
                Commands Guide →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Master the art of strategic claiming!
          </p>
        </div>
      </footer>
    </div>
  )
}
