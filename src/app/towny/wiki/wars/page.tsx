import Link from "next/link"

export default function WarsPage() {
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
                ⚔️
              </div>
              <div>
                <h1 className="nav-title">Towny Wars</h1>
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
            ⚔️ Towny Wars
          </h1>
          <p className="hero-description">
            Master the art of warfare and lead your nation to victory through strategic combat and siege warfare.
          </p>
        </div>
      </section>

      {/* War Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🎯 Understanding Wars
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">⚔️ War Types</h3>
              <p className="card-description mb-16">
                Different types of conflicts and their characteristics.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Total War:</strong> Complete military conflict</div>
                <div className="mb-8">• <strong>Limited War:</strong> Specific objectives only</div>
                <div className="mb-8">• <strong>Siege War:</strong> Town capture focused</div>
                <div className="mb-8">• <strong>Proxy War:</strong> Fighting through allies</div>
                <div className="mb-8">• Territorial disputes common</div>
                <div className="mb-8">• Resource conflicts frequent</div>
                <div className="mb-8">• Trade route control battles</div>
                <div className="mb-8">• Alliance obligations trigger wars</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ War Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/nation enemy add [nation]</div>
                  <div className="command-description">Declare war</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation ally list</div>
                  <div className="command-description">Check your allies</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation peaceful add [nation]</div>
                  <div className="command-description">Offer peace</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/towny war stats</div>
                  <div className="command-description">View war statistics</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/nation set board [message]</div>
                  <div className="command-description">War announcements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* War Mechanics */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            ⚙️ War Mechanics
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🗡️ PvP Activation</h3>
              <p className="card-description mb-16">
                How combat works during wartime.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• PvP enabled in wilderness areas</div>
                <div className="mb-8">• Town plots remain protected unless sieged</div>
                <div className="mb-8">• Allied nations can assist in combat</div>
                <div className="mb-8">• Neutral players cannot be attacked</div>
                <div className="mb-8">• Combat logging penalties apply</div>
                <div className="mb-8">• Death results in item drops</div>
                <div className="mb-8">• Respawn delays during combat</div>
                <div className="mb-8">• Safe zones clearly marked</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏰 Siege Mechanics</h3>
              <p className="card-description mb-16">
                Capturing enemy towns through siege warfare.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Siege must be declared 24 hours in advance</div>
                <div className="mb-8">• Defenders get preparation time</div>
                <div className="mb-8">• Battle occurs at scheduled time</div>
                <div className="mb-8">• Winner determined by objectives</div>
                <div className="mb-8">• Multiple siege types available</div>
                <div className="mb-8">• Siege equipment can be used</div>
                <div className="mb-8">• Reinforcements allowed</div>
                <div className="mb-8">• Victory conditions vary</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📊 War Points System</h3>
              <p className="card-description mb-16">
                Track war progress and determine victory.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Kill enemy players: +1 point</div>
                <div className="mb-8">• Capture towns: +10 points</div>
                <div className="mb-8">• Destroy enemy builds: +2 points</div>
                <div className="mb-8">• Control objectives: +5 points</div>
                <div className="mb-8">• Death in combat: -1 point</div>
                <div className="mb-8">• Lose towns: -10 points</div>
                <div className="mb-8">• Retreat from battle: -3 points</div>
                <div className="mb-8">• Points determine war outcome</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* War Strategy */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🎯 War Strategy & Tactics
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📋 Pre-War Preparation</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Intelligence:</strong> Scout enemy territories</div>
                <div className="mb-8">• <strong>Alliances:</strong> Secure military support</div>
                <div className="mb-8">• <strong>Resources:</strong> Stockpile weapons and supplies</div>
                <div className="mb-8">• <strong>Fortifications:</strong> Strengthen defenses</div>
                <div className="mb-8">• <strong>Training:</strong> Practice PvP combat</div>
                <div className="mb-8">• <strong>Communication:</strong> Set up command structure</div>
                <div className="mb-8">• <strong>Logistics:</strong> Plan supply lines</div>
                <div className="mb-8">• <strong>Timing:</strong> Choose optimal war declaration</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚔️ Combat Tactics</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Coordination:</strong> Use voice chat for teamwork</div>
                <div className="mb-8">• <strong>Flanking:</strong> Attack from multiple angles</div>
                <div className="mb-8">• <strong>Guerrilla:</strong> Hit-and-run tactics</div>
                <div className="mb-8">• <strong>Siege:</strong> Systematic town capture</div>
                <div className="mb-8">• <strong>Defense:</strong> Fortified positions</div>
                <div className="mb-8">• <strong>Mobility:</strong> Quick repositioning</div>
                <div className="mb-8">• <strong>Deception:</strong> Misdirection and feints</div>
                <div className="mb-8">• <strong>Persistence:</strong> Sustained pressure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-War */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🕊️ Post-War Procedures
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏆 Victory Procedures</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Peace Terms:</strong> Negotiate surrender conditions</div>
                <div className="mb-8">• <strong>Reparations:</strong> Demand compensation</div>
                <div className="mb-8">• <strong>Territory:</strong> Claim conquered lands</div>
                <div className="mb-8">• <strong>Prisoners:</strong> Handle captured players</div>
                <div className="mb-8">• <strong>Reconstruction:</strong> Rebuild damaged areas</div>
                <div className="mb-8">• <strong>Integration:</strong> Incorporate new territories</div>
                <div className="mb-8">• <strong>Diplomacy:</strong> Establish new relationships</div>
                <div className="mb-8">• <strong>Celebration:</strong> Honor victorious forces</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💔 Defeat Recovery</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Assess Damage:</strong> Evaluate losses</div>
                <div className="mb-8">• <strong>Rebuild:</strong> Restore infrastructure</div>
                <div className="mb-8">• <strong>Diplomacy:</strong> Negotiate better terms</div>
                <div className="mb-8">• <strong>Allies:</strong> Seek support for recovery</div>
                <div className="mb-8">• <strong>Reform:</strong> Learn from mistakes</div>
                <div className="mb-8">• <strong>Morale:</strong> Restore citizen confidence</div>
                <div className="mb-8">• <strong>Planning:</strong> Prepare for future conflicts</div>
                <div className="mb-8">• <strong>Resilience:</strong> Build stronger defenses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            💡 War Success Tips
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Best Practices</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Always fight with allies when possible</div>
                <div className="mb-8">• Use terrain to your advantage</div>
                <div className="mb-8">• Keep backup gear in ender chests</div>
                <div className="mb-8">• Coordinate attacks via Discord</div>
                <div className="mb-8">• Target enemy supply lines</div>
                <div className="mb-8">• Maintain good communication</div>
                <div className="mb-8">• Plan multiple strategies</div>
                <div className="mb-8">• Focus on mutual benefits in peace talks</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">❌ Common Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Starting wars without proper preparation</div>
                <div className="mb-8">• Fighting alone against multiple enemies</div>
                <div className="mb-8">• Ignoring defensive preparations</div>
                <div className="mb-8">• Poor communication during battles</div>
                <div className="mb-8">• Not having backup plans</div>
                <div className="mb-8">• Underestimating enemy capabilities</div>
                <div className="mb-8">• Failing to secure supply lines</div>
                <div className="mb-8">• Making unrealistic peace demands</div>
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
              <Link href="/towny/wiki/diplomacy" className="footer-link footer-link-orange">
                ← Diplomacy Guide
              </Link>
              <Link href="/towny/wiki/alliances" className="footer-link footer-link-green">
                Alliances System →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Victory through strategy and strength!
          </p>
        </div>
      </footer>
    </div>
  )
}
