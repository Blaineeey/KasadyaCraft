import Link from "next/link"

export default function SiegesGuide() {
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
                <h1 className="nav-title">Siege Warfare</h1>
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
            🏰 Siege Warfare System
          </h1>
          <p className="hero-description">
            Master the art of siege warfare and conquer enemy territories through strategic planning and coordinated attacks.
          </p>
        </div>
      </section>

      {/* Siege Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            ⚔️ Siege System Overview
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎯 What is a Siege?</h3>
              <p className="card-description mb-16">
                Large-scale warfare system for conquering towns and nations.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Territory Conquest:</strong> Capture enemy towns and land</div>
                <div className="mb-8">• <strong>Strategic Warfare:</strong> Planned military campaigns</div>
                <div className="mb-8">• <strong>Team Coordination:</strong> Large group combat operations</div>
                <div className="mb-8">• <strong>Resource Control:</strong> Fight for valuable territories</div>
                <div className="mb-8">• <strong>Political Impact:</strong> Shift server power dynamics</div>
                <div className="mb-8">• <strong>Economic Warfare:</strong> Disrupt enemy supply lines</div>
                <div className="mb-8">• <strong>Diplomatic Consequences:</strong> Affect alliances</div>
                <div className="mb-8">• <strong>Long-term Campaigns:</strong> Extended warfare periods</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ Essential Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/siege start [town]</div>
                  <div className="command-description">Begin siege on target town</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/siege info</div>
                  <div className="command-description">View active siege information</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/siege join [side]</div>
                  <div className="command-description">Join attacking or defending side</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/siege status</div>
                  <div className="command-description">Check siege progress</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/siege abandon</div>
                  <div className="command-description">Abandon current siege</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Siege Types */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🏛️ Types of Sieges
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">⚔️ Conquest Siege</h3>
              <p className="card-description mb-16">
                Full territorial conquest and occupation.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Complete town takeover</div>
                <div className="mb-8">• Permanent territory control</div>
                <div className="mb-8">• Resource and building seizure</div>
                <div className="mb-8">• Population displacement</div>
                <div className="mb-8">• Government restructuring</div>
                <div className="mb-8">• Economic integration</div>
                <div className="mb-8">• Cultural assimilation</div>
                <div className="mb-8">• Long-term occupation</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💰 Plunder Siege</h3>
              <p className="card-description mb-16">
                Raid for resources without permanent occupation.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Resource extraction focus</div>
                <div className="mb-8">• Temporary occupation only</div>
                <div className="mb-8">• Wealth and item seizure</div>
                <div className="mb-8">• Quick hit-and-run tactics</div>
                <div className="mb-8">• Minimal infrastructure damage</div>
                <div className="mb-8">• Shorter siege duration</div>
                <div className="mb-8">• Lower commitment required</div>
                <div className="mb-8">• Higher mobility needed</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🛡️ Liberation Siege</h3>
              <p className="card-description mb-16">
                Free occupied territories from enemy control.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Restore original government</div>
                <div className="mb-8">• Remove occupying forces</div>
                <div className="mb-8">• Rebuild damaged infrastructure</div>
                <div className="mb-8">• Reunite displaced populations</div>
                <div className="mb-8">• Restore cultural identity</div>
                <div className="mb-8">• Defensive siege mechanics</div>
                <div className="mb-8">• Allied support common</div>
                <div className="mb-8">• Moral justification</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Siege Phases */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            📅 Siege Phases & Timeline
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">⏰ Phase Timeline</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Declaration Phase:</strong> 24-hour warning period</div>
                <div className="mb-8">• <strong>Preparation Phase:</strong> 48-hour setup time</div>
                <div className="mb-8">• <strong>Active Siege:</strong> 72-hour combat period</div>
                <div className="mb-8">• <strong>Resolution Phase:</strong> 12-hour conclusion</div>
                <div className="mb-8">• <strong>Cooldown Period:</strong> 7-day immunity</div>
                <div className="mb-8">• <strong>Reconstruction:</strong> 14-day rebuilding</div>
                <div className="mb-8">• <strong>Stabilization:</strong> 30-day integration</div>
                <div className="mb-8">• <strong>Full Control:</strong> Permanent ownership</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🎯 Victory Conditions</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Banner Control:</strong> Capture and hold siege banners</div>
                <div className="mb-8">• <strong>Time Limit:</strong> Maintain control for set duration</div>
                <div className="mb-8">• <strong>Kill Ratio:</strong> Achieve favorable combat statistics</div>
                <div className="mb-8">• <strong>Resource Depletion:</strong> Exhaust enemy supplies</div>
                <div className="mb-8">• <strong>Surrender Terms:</strong> Negotiate peaceful resolution</div>
                <div className="mb-8">• <strong>Allied Support:</strong> Maintain coalition strength</div>
                <div className="mb-8">• <strong>Economic Pressure:</strong> Financial warfare success</div>
                <div className="mb-8">• <strong>Morale Victory:</strong> Break enemy will to fight</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Siege Mechanics */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            ⚙️ Siege Mechanics & Features
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏗️ Siege Equipment</h3>
              <p className="card-description mb-16">
                Specialized tools and weapons for siege warfare.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Siege cannons and artillery</div>
                <div className="mb-8">• Battering rams for gates</div>
                <div className="mb-8">• Siege towers for walls</div>
                <div className="mb-8">• Catapults and trebuchets</div>
                <div className="mb-8">• Explosive devices and TNT</div>
                <div className="mb-8">• Scaling ladders and ropes</div>
                <div className="mb-8">• Protective shields and barriers</div>
                <div className="mb-8">• Supply wagons and logistics</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🎖️ Roles & Positions</h3>
              <p className="card-description mb-16">
                Specialized roles for effective siege operations.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Siege Commander (overall strategy)</div>
                <div className="mb-8">• Artillery Specialist (siege weapons)</div>
                <div className="mb-8">• Infantry Captain (ground troops)</div>
                <div className="mb-8">• Scout Leader (reconnaissance)</div>
                <div className="mb-8">• Supply Officer (logistics)</div>
                <div className="mb-8">• Engineer (fortifications)</div>
                <div className="mb-8">• Medic (healing and support)</div>
                <div className="mb-8">• Diplomat (negotiations)</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📊 Siege Points System</h3>
              <p className="card-description mb-16">
                Point-based system for tracking siege progress.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Banner control points (+10/hour)</div>
                <div className="mb-8">• Enemy kills (+5 per kill)</div>
                <div className="mb-8">• Building destruction (+15 per structure)</div>
                <div className="mb-8">• Resource capture (+20 per cache)</div>
                <div className="mb-8">• Objective completion (+50 per goal)</div>
                <div className="mb-8">• Time bonuses (+25 per hour held)</div>
                <div className="mb-8">• Victory threshold: 1000 points</div>
                <div className="mb-8">• Point decay over time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Siege Strategy */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🧠 Siege Strategy & Tactics
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">⚔️ Attacking Strategies</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Reconnaissance:</strong> Scout enemy defenses thoroughly</div>
                <div className="mb-8">• <strong>Supply Lines:</strong> Establish secure logistics routes</div>
                <div className="mb-8">• <strong>Multi-Front:</strong> Attack from multiple directions</div>
                <div className="mb-8">• <strong>Siege Equipment:</strong> Deploy appropriate weapons</div>
                <div className="mb-8">• <strong>Timing:</strong> Coordinate simultaneous assaults</div>
                <div className="mb-8">• <strong>Psychological:</strong> Demoralize enemy forces</div>
                <div className="mb-8">• <strong>Resource Denial:</strong> Cut off enemy supplies</div>
                <div className="mb-8">• <strong>Allied Coordination:</strong> Work with coalition partners</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🛡️ Defensive Strategies</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Fortification:</strong> Strengthen walls and defenses</div>
                <div className="mb-8">• <strong>Resource Stockpiling:</strong> Prepare for extended siege</div>
                <div className="mb-8">• <strong>Counter-Attacks:</strong> Strike at enemy weak points</div>
                <div className="mb-8">• <strong>Morale Maintenance:</strong> Keep defenders motivated</div>
                <div className="mb-8">• <strong>Communication:</strong> Coordinate with allies</div>
                <div className="mb-8">• <strong>Evacuation Plans:</strong> Prepare civilian escape routes</div>
                <div className="mb-8">• <strong>Sabotage:</strong> Disrupt enemy siege equipment</div>
                <div className="mb-8">• <strong>Relief Forces:</strong> Call for external assistance</div>
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
              <Link href="/towny/wiki/defenses" className="footer-link footer-link-green">
                Defense Systems →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Conquer with strategy and honor!
          </p>
        </div>
      </footer>
    </div>
  )
}
