import Link from "next/link"

export default function WarPrepGuide() {
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
                🛡️
              </div>
              <div>
                <h1 className="nav-title">War Preparation</h1>
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
            🛡️ War Preparation Guide
          </h1>
          <p className="hero-description">
            Prepare your town and nation for warfare through strategic planning, resource management, and military organization.
          </p>
        </div>
      </section>

      {/* Strategic Planning */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            📋 Strategic Planning
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎯 War Objectives</h3>
              <p className="card-description mb-16">
                Define clear goals and victory conditions.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Territorial Goals:</strong> Which lands to conquer or defend</div>
                <div className="mb-8">• <strong>Resource Targets:</strong> Strategic materials and wealth</div>
                <div className="mb-8">• <strong>Political Aims:</strong> Diplomatic and alliance objectives</div>
                <div className="mb-8">• <strong>Economic Impact:</strong> Trade route control and disruption</div>
                <div className="mb-8">• <strong>Timeline:</strong> Short-term vs long-term campaigns</div>
                <div className="mb-8">• <strong>Victory Conditions:</strong> When to declare success</div>
                <div className="mb-8">• <strong>Exit Strategy:</strong> How to end the conflict</div>
                <div className="mb-8">• <strong>Contingency Plans:</strong> Backup strategies if things go wrong</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🗺️ Intelligence Gathering</h3>
              <p className="card-description mb-16">
                Collect crucial information about enemies and terrain.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Enemy Strength:</strong> Military capabilities and numbers</div>
                <div className="mb-8">• <strong>Defensive Positions:</strong> Fortifications and weak points</div>
                <div className="mb-8">• <strong>Resource Stockpiles:</strong> Enemy supplies and logistics</div>
                <div className="mb-8">• <strong>Alliance Networks:</strong> Who might join the fight</div>
                <div className="mb-8">• <strong>Terrain Analysis:</strong> Battlefield advantages and obstacles</div>
                <div className="mb-8">• <strong>Activity Patterns:</strong> When enemies are most active</div>
                <div className="mb-8">• <strong>Leadership Structure:</strong> Key decision makers</div>
                <div className="mb-8">• <strong>Morale Assessment:</strong> Enemy willingness to fight</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Management */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            💰 Resource Management
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">⚔️ Military Supplies</h3>
              <p className="card-description mb-16">
                Essential equipment and weapons for warfare.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Weapons (swords, bows, crossbows)</div>
                <div className="mb-8">• Armor sets (full protection gear)</div>
                <div className="mb-8">• Shields and defensive equipment</div>
                <div className="mb-8">• Arrows and projectile ammunition</div>
                <div className="mb-8">• Siege equipment and explosives</div>
                <div className="mb-8">• Enchanted gear and special items</div>
                <div className="mb-8">• Backup equipment for replacements</div>
                <div className="mb-8">• Repair materials and tools</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🧪 Consumables</h3>
              <p className="card-description mb-16">
                Potions, food, and temporary boost items.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Healing potions (instant and regen)</div>
                <div className="mb-8">• Strength and speed potions</div>
                <div className="mb-8">• Defensive potions (resistance, absorption)</div>
                <div className="mb-8">• Debuff potions for enemies</div>
                <div className="mb-8">• High-quality food for saturation</div>
                <div className="mb-8">• Golden apples and special foods</div>
                <div className="mb-8">• Splash and lingering potions</div>
                <div className="mb-8">• Emergency medical supplies</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏗️ Construction Materials</h3>
              <p className="card-description mb-16">
                Building supplies for fortifications and siege works.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Stone and cobblestone for walls</div>
                <div className="mb-8">• Obsidian for blast-resistant structures</div>
                <div className="mb-8">• Wood for scaffolding and bridges</div>
                <div className="mb-8">• Iron for reinforcements</div>
                <div className="mb-8">• TNT and explosive materials</div>
                <div className="mb-8">• Redstone for mechanisms</div>
                <div className="mb-8">• Water and lava buckets</div>
                <div className="mb-8">• Torches and lighting materials</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Organization */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            👥 Military Organization
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎖️ Command Structure</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Supreme Commander:</strong> Overall strategic leadership</div>
                <div className="mb-8">• <strong>Field Generals:</strong> Tactical battlefield command</div>
                <div className="mb-8">• <strong>Captains:</strong> Squad and unit leadership</div>
                <div className="mb-8">• <strong>Sergeants:</strong> Small team coordination</div>
                <div className="mb-8">• <strong>Specialists:</strong> Engineers, medics, scouts</div>
                <div className="mb-8">• <strong>Regular Troops:</strong> Infantry and support</div>
                <div className="mb-8">• <strong>Reserves:</strong> Backup forces and reinforcements</div>
                <div className="mb-8">• <strong>Support Staff:</strong> Logistics and communications</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚔️ Unit Composition</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Heavy Infantry:</strong> Frontline fighters with armor</div>
                <div className="mb-8">• <strong>Light Infantry:</strong> Mobile assault troops</div>
                <div className="mb-8">• <strong>Archers:</strong> Ranged support and harassment</div>
                <div className="mb-8">• <strong>Cavalry:</strong> Fast-moving mounted units</div>
                <div className="mb-8">• <strong>Engineers:</strong> Siege equipment and fortifications</div>
                <div className="mb-8">• <strong>Scouts:</strong> Reconnaissance and intelligence</div>
                <div className="mb-8">• <strong>Medics:</strong> Healing and battlefield support</div>
                <div className="mb-8">• <strong>Logistics:</strong> Supply lines and equipment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Preparation */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🏋️ Training & Preparation
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">⚔️ Combat Training</h3>
              <p className="card-description mb-16">
                Prepare your forces for battle effectiveness.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Individual combat skill development</div>
                <div className="mb-8">• Weapon proficiency training</div>
                <div className="mb-8">• Team coordination exercises</div>
                <div className="mb-8">• Formation fighting practice</div>
                <div className="mb-8">• Siege warfare simulations</div>
                <div className="mb-8">• Tactical scenario planning</div>
                <div className="mb-8">• Equipment maintenance training</div>
                <div className="mb-8">• Emergency response drills</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🧠 Strategic Education</h3>
              <p className="card-description mb-16">
                Develop leadership and tactical thinking skills.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Military history and tactics study</div>
                <div className="mb-8">• Map reading and terrain analysis</div>
                <div className="mb-8">• Communication protocols</div>
                <div className="mb-8">• Resource management principles</div>
                <div className="mb-8">• Diplomatic and negotiation skills</div>
                <div className="mb-8">• Intelligence gathering techniques</div>
                <div className="mb-8">• Crisis management procedures</div>
                <div className="mb-8">• Post-war reconstruction planning</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏃 Physical Conditioning</h3>
              <p className="card-description mb-16">
                Build endurance and combat readiness.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Parkour and mobility training</div>
                <div className="mb-8">• Endurance building exercises</div>
                <div className="mb-8">• Reaction time improvement</div>
                <div className="mb-8">• Stress resistance training</div>
                <div className="mb-8">• Team building activities</div>
                <div className="mb-8">• Survival skills development</div>
                <div className="mb-8">• Equipment familiarity drills</div>
                <div className="mb-8">• Mental resilience preparation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Supply Lines */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🚛 Logistics & Supply Lines
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📦 Supply Chain Management</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Production Centers:</strong> Establish manufacturing facilities</div>
                <div className="mb-8">• <strong>Storage Facilities:</strong> Secure warehouses and armories</div>
                <div className="mb-8">• <strong>Transportation Routes:</strong> Safe supply line corridors</div>
                <div className="mb-8">• <strong>Distribution Points:</strong> Forward supply bases</div>
                <div className="mb-8">• <strong>Inventory Management:</strong> Track supplies and consumption</div>
                <div className="mb-8">• <strong>Quality Control:</strong> Ensure equipment standards</div>
                <div className="mb-8">• <strong>Emergency Reserves:</strong> Backup supply caches</div>
                <div className="mb-8">• <strong>Supplier Networks:</strong> Reliable resource providers</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🛡️ Supply Line Security</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Convoy Protection:</strong> Armed escorts for supply runs</div>
                <div className="mb-8">• <strong>Route Diversification:</strong> Multiple supply paths</div>
                <div className="mb-8">• <strong>Checkpoint Systems:</strong> Secure waypoints and rest stops</div>
                <div className="mb-8">• <strong>Communication Networks:</strong> Real-time status updates</div>
                <div className="mb-8">• <strong>Rapid Response:</strong> Quick reaction to threats</div>
                <div className="mb-8">• <strong>Camouflage Tactics:</strong> Hide supply movements</div>
                <div className="mb-8">• <strong>Decoy Operations:</strong> Mislead enemy intelligence</div>
                <div className="mb-8">• <strong>Recovery Protocols:</strong> Salvage lost supplies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diplomatic Preparation */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            🤝 Diplomatic Preparation
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🌐 Alliance Building</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Coalition Formation:</strong> Unite against common enemies</div>
                <div className="mb-8">• <strong>Mutual Defense Pacts:</strong> Guarantee military support</div>
                <div className="mb-8">• <strong>Resource Sharing:</strong> Pool supplies and equipment</div>
                <div className="mb-8">• <strong>Joint Training:</strong> Coordinate military exercises</div>
                <div className="mb-8">• <strong>Intelligence Sharing:</strong> Exchange strategic information</div>
                <div className="mb-8">• <strong>Command Integration:</strong> Unified military structure</div>
                <div className="mb-8">• <strong>Communication Protocols:</strong> Secure diplomatic channels</div>
                <div className="mb-8">• <strong>Conflict Resolution:</strong> Manage alliance disputes</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚖️ War Justification</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Casus Belli:</strong> Legal justification for war</div>
                <div className="mb-8">• <strong>Public Opinion:</strong> Build popular support</div>
                <div className="mb-8">• <strong>International Law:</strong> Follow server rules and customs</div>
                <div className="mb-8">• <strong>Propaganda Campaign:</strong> Shape narrative and perception</div>
                <div className="mb-8">• <strong>Diplomatic Ultimatums:</strong> Final peaceful options</div>
                <div className="mb-8">• <strong>Neutral Relations:</strong> Maintain non-combatant ties</div>
                <div className="mb-8">• <strong>Post-War Planning:</strong> Peace treaty preparations</div>
                <div className="mb-8">• <strong>Humanitarian Concerns:</strong> Civilian protection measures</div>
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
              <Link href="/towny/wiki/combat" className="footer-link footer-link-orange">
                ← Combat Guide
              </Link>
              <Link href="/towny/wiki/defenses" className="footer-link footer-link-green">
                Defense Systems →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Prepare for victory through planning!
          </p>
        </div>
      </footer>
    </div>
  )
}
