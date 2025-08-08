import Link from "next/link"

export default function DefensesGuide() {
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
                🏰
              </div>
              <div>
                <h1 className="nav-title">Defense Systems</h1>
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
            🏰 Defense Systems Guide
          </h1>
          <p className="hero-description">
            Build impenetrable fortifications and defensive systems to protect your town from enemy attacks and sieges.
          </p>
        </div>
      </section>

      {/* Fortification Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🧱 Fortification Fundamentals
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏗️ Wall Construction</h3>
              <p className="card-description mb-16">
                Build strong perimeter defenses around your territory.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Material Choice:</strong> Obsidian for blast resistance</div>
                <div className="mb-8">• <strong>Wall Height:</strong> Minimum 10 blocks high</div>
                <div className="mb-8">• <strong>Wall Thickness:</strong> 3-5 blocks thick for durability</div>
                <div className="mb-8">• <strong>Foundation Depth:</strong> 5+ blocks underground</div>
                <div className="mb-8">• <strong>Anti-Climb Features:</strong> Overhangs and barriers</div>
                <div className="mb-8">• <strong>Gate Systems:</strong> Secure entry points</div>
                <div className="mb-8">• <strong>Watchtowers:</strong> Elevated observation posts</div>
                <div className="mb-8">• <strong>Maintenance Access:</strong> Internal walkways</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🚪 Gate & Entry Security</h3>
              <p className="card-description mb-16">
                Control access points with advanced security measures.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Iron Doors:</strong> Redstone-controlled access</div>
                <div className="mb-8">• <strong>Piston Gates:</strong> Hidden entrance mechanisms</div>
                <div className="mb-8">• <strong>Drawbridges:</strong> Retractable crossing systems</div>
                <div className="mb-8">• <strong>Portcullises:</strong> Vertical barrier gates</div>
                <div className="mb-8">• <strong>Airlock Systems:</strong> Double-door security</div>
                <div className="mb-8">• <strong>Guard Posts:</strong> Manned checkpoint stations</div>
                <div className="mb-8">• <strong>Kill Boxes:</strong> Trapped entry chambers</div>
                <div className="mb-8">• <strong>Emergency Seals:</strong> Rapid lockdown capability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defensive Structures */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-red">
            🏛️ Defensive Structures
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🗼 Towers & Keeps</h3>
              <p className="card-description mb-16">
                Elevated defensive positions for maximum coverage.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Central keep as last resort</div>
                <div className="mb-8">• Corner towers for wall coverage</div>
                <div className="mb-8">• Archer platforms and battlements</div>
                <div className="mb-8">• Spiral staircases for quick access</div>
                <div className="mb-8">• Supply storage in towers</div>
                <div className="mb-8">• Communication systems</div>
                <div className="mb-8">• Escape routes and sally ports</div>
                <div className="mb-8">• Reinforced foundations</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🕳️ Underground Defenses</h3>
              <p className="card-description mb-16">
                Hidden subterranean defensive networks.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Tunnel networks for movement</div>
                <div className="mb-8">• Underground bunkers and shelters</div>
                <div className="mb-8">• Hidden supply caches</div>
                <div className="mb-8">• Escape tunnel systems</div>
                <div className="mb-8">• Underground command centers</div>
                <div className="mb-8">• Mine shaft defensive positions</div>
                <div className="mb-8">• Flooding mechanisms</div>
                <div className="mb-8">• Collapse traps and barriers</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🌊 Water Defenses</h3>
              <p className="card-description mb-16">
                Use water as a natural defensive barrier.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Moats around perimeter walls</div>
                <div className="mb-8">• Water-filled trenches</div>
                <div className="mb-8">• Controlled flooding systems</div>
                <div className="mb-8">• Underwater obstacles</div>
                <div className="mb-8">• Bridge control mechanisms</div>
                <div className="mb-8">• Water curtain walls</div>
                <div className="mb-8">• Aquatic creature defenses</div>
                <div className="mb-8">• Ice barriers in cold biomes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trap Systems */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            ⚡ Trap & Detection Systems
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🕷️ Passive Traps</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Pitfall Traps:</strong> Hidden holes with spikes</div>
                <div className="mb-8">• <strong>Pressure Plates:</strong> Trigger-based mechanisms</div>
                <div className="mb-8">• <strong>Tripwire Hooks:</strong> String-activated traps</div>
                <div className="mb-8">• <strong>Lava Traps:</strong> Molten death chambers</div>
                <div className="mb-8">• <strong>Suffocation Traps:</strong> Sand/gravel drops</div>
                <div className="mb-8">• <strong>Maze Systems:</strong> Confusing pathways</div>
                <div className="mb-8">• <strong>False Floors:</strong> Collapsing surfaces</div>
                <div className="mb-8">• <strong>Poison Chambers:</strong> Harmful potion effects</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🎯 Active Defense Systems</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Dispenser Arrays:</strong> Automated arrow/potion firing</div>
                <div className="mb-8">• <strong>TNT Cannons:</strong> Explosive projectile systems</div>
                <div className="mb-8">• <strong>Piston Crushers:</strong> Mechanical damage dealers</div>
                <div className="mb-8">• <strong>Flame Throwers:</strong> Fire charge dispensers</div>
                <div className="mb-8">• <strong>Mob Spawners:</strong> Hostile creature defenses</div>
                <div className="mb-8">• <strong>Redstone Circuits:</strong> Complex automated systems</div>
                <div className="mb-8">• <strong>Observer Networks:</strong> Motion detection grids</div>
                <div className="mb-8">• <strong>Command Block Systems:</strong> Advanced server mechanics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Siege Defense */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🛡️ Siege Defense Strategies
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏹 Ranged Defense</h3>
              <p className="card-description mb-16">
                Long-range defensive capabilities and positioning.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Archer towers with clear sightlines</div>
                <div className="mb-8">• Crossbow emplacements</div>
                <div className="mb-8">• Ballista and siege weapon positions</div>
                <div className="mb-8">• Elevated firing platforms</div>
                <div className="mb-8">• Ammunition storage and supply</div>
                <div className="mb-8">• Overlapping fields of fire</div>
                <div className="mb-8">• Mobile archer units</div>
                <div className="mb-8">• Counter-siege equipment</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚔️ Melee Defense</h3>
              <p className="card-description mb-16">
                Close-quarters defensive positions and tactics.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Chokepoint control systems</div>
                <div className="mb-8">• Defensive formations</div>
                <div className="mb-8">• Shield wall positions</div>
                <div className="mb-8">• Spear and pike emplacements</div>
                <div className="mb-8">• Cavalry counter-measures</div>
                <div className="mb-8">• Urban warfare preparations</div>
                <div className="mb-8">• Building-to-building defenses</div>
                <div className="mb-8">• Last stand positions</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💥 Explosive Defense</h3>
              <p className="card-description mb-16">
                Area denial and explosive defensive measures.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• TNT mine fields</div>
                <div className="mb-8">• Explosive wall sections</div>
                <div className="mb-8">• Controlled demolition systems</div>
                <div className="mb-8">• Creeper-based defenses</div>
                <div className="mb-8">• End crystal explosives</div>
                <div className="mb-8">• Firework rocket launchers</div>
                <div className="mb-8">• Bed bomb mechanisms</div>
                <div className="mb-8">• Respawn anchor traps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Protection */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            💎 Resource Protection
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏦 Vault Security</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Multiple Layers:</strong> Nested security systems</div>
                <div className="mb-8">• <strong>Hidden Locations:</strong> Concealed vault entrances</div>
                <div className="mb-8">• <strong>Access Control:</strong> Limited key holders</div>
                <div className="mb-8">• <strong>Decoy Vaults:</strong> False treasure rooms</div>
                <div className="mb-8">• <strong>Time Locks:</strong> Delayed access systems</div>
                <div className="mb-8">• <strong>Biometric Security:</strong> Player-specific access</div>
                <div className="mb-8">• <strong>Alarm Systems:</strong> Intrusion detection</div>
                <div className="mb-8">• <strong>Emergency Protocols:</strong> Rapid lockdown procedures</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📦 Supply Protection</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Distributed Storage:</strong> Multiple cache locations</div>
                <div className="mb-8">• <strong>Redundant Supplies:</strong> Backup resource stockpiles</div>
                <div className="mb-8">• <strong>Mobile Reserves:</strong> Portable supply systems</div>
                <div className="mb-8">• <strong>Camouflaged Stores:</strong> Hidden supply depots</div>
                <div className="mb-8">• <strong>Quick Access:</strong> Rapid deployment systems</div>
                <div className="mb-8">• <strong>Inventory Tracking:</strong> Real-time supply monitoring</div>
                <div className="mb-8">• <strong>Contamination Prevention:</strong> Secure storage methods</div>
                <div className="mb-8">• <strong>Evacuation Plans:</strong> Resource recovery procedures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Upgrades */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🔧 Maintenance & Upgrades
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🛠️ Regular Maintenance</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Structural Inspections:</strong> Check for damage and wear</div>
                <div className="mb-8">• <strong>Trap Testing:</strong> Verify mechanism functionality</div>
                <div className="mb-8">• <strong>Supply Restocking:</strong> Replenish ammunition and materials</div>
                <div className="mb-8">• <strong>System Updates:</strong> Improve defensive capabilities</div>
                <div className="mb-8">• <strong>Personnel Training:</strong> Keep defenders skilled</div>
                <div className="mb-8">• <strong>Communication Checks:</strong> Test alert systems</div>
                <div className="mb-8">• <strong>Vulnerability Assessment:</strong> Identify weak points</div>
                <div className="mb-8">• <strong>Documentation:</strong> Record all changes and repairs</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⬆️ Defense Upgrades</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Technology Integration:</strong> New defensive innovations</div>
                <div className="mb-8">• <strong>Expansion Projects:</strong> Extend defensive perimeter</div>
                <div className="mb-8">• <strong>Automation Improvements:</strong> Reduce manual requirements</div>
                <div className="mb-8">• <strong>Material Upgrades:</strong> Stronger construction materials</div>
                <div className="mb-8">• <strong>Capacity Increases:</strong> Handle larger threats</div>
                <div className="mb-8">• <strong>Efficiency Optimization:</strong> Reduce resource consumption</div>
                <div className="mb-8">• <strong>Modular Design:</strong> Adaptable defensive systems</div>
                <div className="mb-8">• <strong>Future-Proofing:</strong> Prepare for new threats</div>
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
              <Link href="/towny/wiki/war-prep" className="footer-link footer-link-orange">
                ← War Preparation
              </Link>
              <Link href="/towny/wiki/sieges" className="footer-link footer-link-green">
                Siege Warfare →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Build impenetrable defenses!
          </p>
        </div>
      </footer>
    </div>
  )
}
