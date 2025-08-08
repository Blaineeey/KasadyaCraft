import Link from "next/link"

export default function TownBanners() {
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
                🏴
              </div>
              <div>
                <h1 className="nav-title">Town Banners & Flags</h1>
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
            🏴 Town Banners & Flags Guide
          </h1>
          <p className="hero-description">
            Design your town's identity with custom banners, flags, and heraldic symbols that represent your community.
          </p>
        </div>
      </section>

      {/* Banner Design Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🎨 Banner Design Fundamentals
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🌈 Base Colors & Materials</h3>
              <p className="card-description mb-16">
                Choose the foundation color for your town's identity.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>White:</strong> Purity, peace, and new beginnings</div>
                <div className="mb-8">• <strong>Red:</strong> Strength, courage, and determination</div>
                <div className="mb-8">• <strong>Blue:</strong> Loyalty, wisdom, and stability</div>
                <div className="mb-8">• <strong>Green:</strong> Growth, nature, and prosperity</div>
                <div className="mb-8">• <strong>Yellow:</strong> Wealth, energy, and optimism</div>
                <div className="mb-8">• <strong>Purple:</strong> Nobility, luxury, and mystery</div>
                <div className="mb-8">• <strong>Black:</strong> Power, elegance, and authority</div>
                <div className="mb-8">• <strong>Brown:</strong> Stability, reliability, and earth</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔶 Pattern Elements</h3>
              <p className="card-description mb-16">
                Add visual interest with geometric and symbolic patterns.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Stripes:</strong> Horizontal, vertical, and diagonal lines</div>
                <div className="mb-8">• <strong>Borders:</strong> Frame edges with contrasting colors</div>
                <div className="mb-8">• <strong>Gradients:</strong> Smooth color transitions</div>
                <div className="mb-8">• <strong>Crosses:</strong> Religious or medical symbolism</div>
                <div className="mb-8">• <strong>Triangles:</strong> Directional and dynamic shapes</div>
                <div className="mb-8">• <strong>Circles:</strong> Unity, completeness, and cycles</div>
                <div className="mb-8">• <strong>Diamonds:</strong> Precious and valuable symbols</div>
                <div className="mb-8">• <strong>Chevrons:</strong> Military rank and achievement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symbolic Elements */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            ⚜️ Symbolic Design Elements
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🌟 Achievement Symbols</h3>
              <p className="card-description mb-16">
                Represent your town's accomplishments and values.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Crown:</strong> Leadership and authority</div>
                <div className="mb-8">• <strong>Star:</strong> Excellence and guidance</div>
                <div className="mb-8">• <strong>Laurel Wreath:</strong> Victory and honor</div>
                <div className="mb-8">• <strong>Shield:</strong> Protection and defense</div>
                <div className="mb-8">• <strong>Sword:</strong> Military strength and justice</div>
                <div className="mb-8">• <strong>Scales:</strong> Justice and fairness</div>
                <div className="mb-8">• <strong>Torch:</strong> Knowledge and enlightenment</div>
                <div className="mb-8">• <strong>Anchor:</strong> Stability and hope</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🌿 Natural Symbols</h3>
              <p className="card-description mb-16">
                Connect with nature and environmental themes.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Tree:</strong> Growth, life, and endurance</div>
                <div className="mb-8">• <strong>Flower:</strong> Beauty, renewal, and seasons</div>
                <div className="mb-8">• <strong>Mountain:</strong> Strength, permanence, and challenge</div>
                <div className="mb-8">• <strong>River:</strong> Flow, change, and life source</div>
                <div className="mb-8">• <strong>Sun:</strong> Energy, warmth, and new days</div>
                <div className="mb-8">• <strong>Moon:</strong> Cycles, mystery, and night</div>
                <div className="mb-8">• <strong>Lightning:</strong> Power, speed, and energy</div>
                <div className="mb-8">• <strong>Wheat:</strong> Abundance, harvest, and sustenance</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏗️ Cultural Symbols</h3>
              <p className="card-description mb-16">
                Reflect your town's heritage and traditions.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Castle:</strong> Fortification and medieval heritage</div>
                <div className="mb-8">• <strong>Ship:</strong> Exploration, trade, and adventure</div>
                <div className="mb-8">• <strong>Hammer:</strong> Craftsmanship and industry</div>
                <div className="mb-8">• <strong>Book:</strong> Knowledge, learning, and wisdom</div>
                <div className="mb-8">• <strong>Key:</strong> Access, secrets, and solutions</div>
                <div className="mb-8">• <strong>Bridge:</strong> Connection and cooperation</div>
                <div className="mb-8">• <strong>Gear:</strong> Progress, mechanics, and innovation</div>
                <div className="mb-8">• <strong>Compass:</strong> Direction, exploration, and guidance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Creation Process */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🛠️ Banner Creation Process
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📋 Design Planning</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Concept Development:</strong> Define your town's core identity</div>
                <div className="mb-8">• <strong>Color Selection:</strong> Choose 2-3 primary colors</div>
                <div className="mb-8">• <strong>Symbol Choice:</strong> Pick meaningful representative icons</div>
                <div className="mb-8">• <strong>Layout Planning:</strong> Arrange elements harmoniously</div>
                <div className="mb-8">• <strong>Community Input:</strong> Gather resident feedback</div>
                <div className="mb-8">• <strong>Historical Research:</strong> Consider real-world heraldry</div>
                <div className="mb-8">• <strong>Simplicity Focus:</strong> Keep design clear and recognizable</div>
                <div className="mb-8">• <strong>Scalability Test:</strong> Ensure visibility at all sizes</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚒️ Crafting Requirements</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Base Banner:</strong> 6 wool + 1 stick</div>
                <div className="mb-8">• <strong>Dye Materials:</strong> Various colored dyes for patterns</div>
                <div className="mb-8">• <strong>Pattern Items:</strong> Bricks, vines, creeper heads, etc.</div>
                <div className="mb-8">• <strong>Loom Access:</strong> Advanced pattern creation tool</div>
                <div className="mb-8">• <strong>Enchanted Items:</strong> Special pattern unlocks</div>
                <div className="mb-8">• <strong>Resource Planning:</strong> Gather materials in advance</div>
                <div className="mb-8">• <strong>Backup Copies:</strong> Create multiple identical banners</div>
                <div className="mb-8">• <strong>Storage System:</strong> Organize banner collection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Placement */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            📍 Strategic Banner Placement
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏛️ Government Buildings</h3>
              <p className="card-description mb-16">
                Official locations for primary banner display.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Town Hall main entrance</div>
                <div className="mb-8">• Mayor's office and chambers</div>
                <div className="mb-8">• Council meeting rooms</div>
                <div className="mb-8">• Courthouse and legal buildings</div>
                <div className="mb-8">• Administrative offices</div>
                <div className="mb-8">• Public ceremony spaces</div>
                <div className="mb-8">• Embassy and diplomatic areas</div>
                <div className="mb-8">• Government plaza and squares</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🚪 Entry Points</h3>
              <p className="card-description mb-16">
                Welcome visitors with prominent identity displays.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Main town gates and archways</div>
                <div className="mb-8">• Border crossing checkpoints</div>
                <div className="mb-8">• Harbor and port facilities</div>
                <div className="mb-8">• Railway stations and transport hubs</div>
                <div className="mb-8">• Airport and airship terminals</div>
                <div className="mb-8">• Highway rest stops and services</div>
                <div className="mb-8">• Tourist information centers</div>
                <div className="mb-8">• Welcome signs and monuments</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏪 Public Spaces</h3>
              <p className="card-description mb-16">
                Community areas for civic pride and identity.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Central market squares</div>
                <div className="mb-8">• Public parks and recreation areas</div>
                <div className="mb-8">• Sports stadiums and arenas</div>
                <div className="mb-8">• Cultural centers and museums</div>
                <div className="mb-8">• Libraries and educational buildings</div>
                <div className="mb-8">• Hospitals and medical facilities</div>
                <div className="mb-8">• Religious and spiritual centers</div>
                <div className="mb-8">• Community event venues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Variations */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🎭 Banner Variations & Specializations
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏢 Department Banners</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Military Banner:</strong> Add sword or shield symbols</div>
                <div className="mb-8">• <strong>Economic Banner:</strong> Include coin or trade symbols</div>
                <div className="mb-8">• <strong>Cultural Banner:</strong> Feature artistic or educational elements</div>
                <div className="mb-8">• <strong>Environmental Banner:</strong> Emphasize nature and sustainability</div>
                <div className="mb-8">• <strong>Technology Banner:</strong> Modern and innovative designs</div>
                <div className="mb-8">• <strong>Historical Banner:</strong> Traditional and heritage themes</div>
                <div className="mb-8">• <strong>Religious Banner:</strong> Spiritual and ceremonial symbols</div>
                <div className="mb-8">• <strong>Sports Banner:</strong> Athletic and competitive motifs</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🎉 Event & Seasonal Banners</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Festival Banners:</strong> Celebration and party themes</div>
                <div className="mb-8">• <strong>Holiday Banners:</strong> Seasonal and traditional celebrations</div>
                <div className="mb-8">• <strong>Victory Banners:</strong> Commemorate achievements and wins</div>
                <div className="mb-8">• <strong>Memorial Banners:</strong> Honor fallen heroes and history</div>
                <div className="mb-8">• <strong>Anniversary Banners:</strong> Mark important town milestones</div>
                <div className="mb-8">• <strong>Competition Banners:</strong> Tournament and contest themes</div>
                <div className="mb-8">• <strong>Diplomatic Banners:</strong> Alliance and friendship symbols</div>
                <div className="mb-8">• <strong>Construction Banners:</strong> Development and progress themes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Maintenance */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🔧 Banner Maintenance & Management
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">📦 Storage & Organization</h3>
              <p className="card-description mb-16">
                Keep your banner collection organized and accessible.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Dedicated banner storage room</div>
                <div className="mb-8">• Labeled chests for different types</div>
                <div className="mb-8">• Item frames for display samples</div>
                <div className="mb-8">• Backup copies of important banners</div>
                <div className="mb-8">• Inventory tracking system</div>
                <div className="mb-8">• Access control for valuable banners</div>
                <div className="mb-8">• Regular inventory audits</div>
                <div className="mb-8">• Replacement banner preparation</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🛠️ Repair & Replacement</h3>
              <p className="card-description mb-16">
                Maintain banner quality and appearance over time.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Regular inspection schedules</div>
                <div className="mb-8">• Weather damage assessment</div>
                <div className="mb-8">• Griefing damage repairs</div>
                <div className="mb-8">• Color fading prevention</div>
                <div className="mb-8">• Structural support maintenance</div>
                <div className="mb-8">• Cleaning and restoration</div>
                <div className="mb-8">• Upgrade to newer designs</div>
                <div className="mb-8">• Emergency replacement protocols</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📋 Documentation</h3>
              <p className="card-description mb-16">
                Record banner designs and placement information.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Design pattern recipes</div>
                <div className="mb-8">• Color code specifications</div>
                <div className="mb-8">• Placement location maps</div>
                <div className="mb-8">• Historical design evolution</div>
                <div className="mb-8">• Meaning and symbolism guides</div>
                <div className="mb-8">• Creation date records</div>
                <div className="mb-8">• Designer and approval credits</div>
                <div className="mb-8">• Usage guidelines and protocols</div>
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
              <Link href="/towny/wiki/custom-ranks" className="footer-link footer-link-orange">
                ← Custom Ranks
              </Link>
              <Link href="/towny/wiki/chat-channels" className="footer-link footer-link-green">
                Chat Channels →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Design your town's identity!
          </p>
        </div>
      </footer>
    </div>
  )
}
