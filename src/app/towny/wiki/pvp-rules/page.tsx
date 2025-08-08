import Link from "next/link"

export default function PvPRules() {
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
                <h1 className="nav-title">PvP Rules</h1>
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
            ⚔️ PvP Rules & Regulations
          </h1>
          <p className="hero-description">
            Master the rules of combat and engage in fair, strategic player vs player warfare across the server.
          </p>
        </div>
      </section>

      {/* PvP Zones */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🗺️ PvP Zones & Areas
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🟢 Safe Zones</h3>
              <p className="card-description mb-16">
                Areas where PvP is completely disabled.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Spawn area and tutorial zones</div>
                <div className="mb-8">• Town centers and residential areas</div>
                <div className="mb-8">• Market districts and shops</div>
                <div className="mb-8">• Newbie protection areas</div>
                <div className="mb-8">• Embassy and diplomatic zones</div>
                <div className="mb-8">• Hospital and respawn points</div>
                <div className="mb-8">• Event venues and arenas</div>
                <div className="mb-8">• Staff administrative areas</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🟡 Restricted PvP</h3>
              <p className="card-description mb-16">
                Areas with limited or conditional PvP rules.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Town outskirts and borders</div>
                <div className="mb-8">• Trade routes and highways</div>
                <div className="mb-8">• Resource gathering areas</div>
                <div className="mb-8">• Neutral territory zones</div>
                <div className="mb-8">• Diplomatic meeting areas</div>
                <div className="mb-8">• Temporary event zones</div>
                <div className="mb-8">• Contested border regions</div>
                <div className="mb-8">• Special activity areas</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔴 Full PvP Zones</h3>
              <p className="card-description mb-16">
                Areas where unrestricted combat is allowed.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Wilderness and unclaimed land</div>
                <div className="mb-8">• War zones during conflicts</div>
                <div className="mb-8">• Siege battlegrounds</div>
                <div className="mb-8">• PvP arenas and coliseums</div>
                <div className="mb-8">• Bandit territories</div>
                <div className="mb-8">• Resource competition zones</div>
                <div className="mb-8">• Faction warfare areas</div>
                <div className="mb-8">• Open ocean and seas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combat Rules */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            ⚡ Combat Rules & Mechanics
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📋 Basic Combat Rules</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Fair Play:</strong> No exploiting or cheating allowed</div>
                <div className="mb-8">• <strong>No Hacking:</strong> Combat mods and hacks prohibited</div>
                <div className="mb-8">• <strong>Respect Boundaries:</strong> Honor safe zone restrictions</div>
                <div className="mb-8">• <strong>No Spawn Killing:</strong> Allow players to escape spawn</div>
                <div className="mb-8">• <strong>Combat Logging:</strong> No logging out during fights</div>
                <div className="mb-8">• <strong>Alt Abuse:</strong> No using alternate accounts</div>
                <div className="mb-8">• <strong>Team Limits:</strong> Maximum group sizes apply</div>
                <div className="mb-8">• <strong>Equipment Rules:</strong> Certain items may be restricted</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚔️ Combat Mechanics</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Combat Timer:</strong> 15-second combat engagement</div>
                <div className="mb-8">• <strong>Death Penalties:</strong> Item drops and experience loss</div>
                <div className="mb-8">• <strong>Respawn Cooldown:</strong> 30-second respawn delay</div>
                <div className="mb-8">• <strong>Healing Restrictions:</strong> Limited potion usage</div>
                <div className="mb-8">• <strong>Armor Durability:</strong> Equipment degrades in combat</div>
                <div className="mb-8">• <strong>Weapon Cooldowns:</strong> Attack speed limitations</div>
                <div className="mb-8">• <strong>Magic Restrictions:</strong> Enchantment limitations</div>
                <div className="mb-8">• <strong>Environmental Damage:</strong> Fall and fire damage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Actions */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🚫 Prohibited Actions
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">❌ Strictly Forbidden</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Hacking/Cheating:</strong> Any form of unfair advantage</div>
                <div className="mb-8">• <strong>X-Ray/ESP:</strong> Seeing through blocks or walls</div>
                <div className="mb-8">• <strong>Auto-Clickers:</strong> Automated clicking programs</div>
                <div className="mb-8">• <strong>Kill Aura:</strong> Automatic attack targeting</div>
                <div className="mb-8">• <strong>Fly Hacks:</strong> Unauthorized flight abilities</div>
                <div className="mb-8">• <strong>Speed Hacks:</strong> Movement speed modifications</div>
                <div className="mb-8">• <strong>Duplication:</strong> Item or money duplication</div>
                <div className="mb-8">• <strong>Griefing:</strong> Destroying others' property</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚠️ Discouraged Behavior</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Camping:</strong> Excessive spawn or area camping</div>
                <div className="mb-8">• <strong>Harassment:</strong> Targeting specific players repeatedly</div>
                <div className="mb-8">• <strong>Toxic Chat:</strong> Inappropriate language in combat</div>
                <div className="mb-8">• <strong>Teaming:</strong> Unfair team advantages</div>
                <div className="mb-8">• <strong>Exploiting:</strong> Using game bugs for advantage</div>
                <div className="mb-8">• <strong>Alt Accounts:</strong> Using multiple accounts</div>
                <div className="mb-8">• <strong>Combat Logging:</strong> Leaving during fights</div>
                <div className="mb-8">• <strong>Safe Zone Abuse:</strong> Exploiting protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties & Enforcement */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            ⚖️ Penalties & Enforcement
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🟡 Minor Violations</h3>
              <p className="card-description mb-16">
                First-time or minor rule infractions.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Verbal warning from staff</div>
                <div className="mb-8">• Temporary combat restrictions</div>
                <div className="mb-8">• 1-hour temporary ban</div>
                <div className="mb-8">• Item confiscation</div>
                <div className="mb-8">• PvP cooldown period</div>
                <div className="mb-8">• Community service tasks</div>
                <div className="mb-8">• Educational resources</div>
                <div className="mb-8">• Monitoring period</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🟠 Major Violations</h3>
              <p className="card-description mb-16">
                Serious rule breaking or repeat offenses.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• 24-hour temporary ban</div>
                <div className="mb-8">• PvP privileges suspended</div>
                <div className="mb-8">• Equipment and money fines</div>
                <div className="mb-8">• Town/nation restrictions</div>
                <div className="mb-8">• Public warning issued</div>
                <div className="mb-8">• Probation period</div>
                <div className="mb-8">• Rank/title removal</div>
                <div className="mb-8">• Extended monitoring</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔴 Severe Violations</h3>
              <p className="card-description mb-16">
                Hacking, cheating, or extreme misconduct.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Permanent ban from server</div>
                <div className="mb-8">• IP address blacklisting</div>
                <div className="mb-8">• Account data wiping</div>
                <div className="mb-8">• Discord server ban</div>
                <div className="mb-8">• Public blacklist posting</div>
                <div className="mb-8">• Associated account bans</div>
                <div className="mb-8">• Legal action if applicable</div>
                <div className="mb-8">• No appeal consideration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting System */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            📢 Reporting & Appeals
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🚨 How to Report Violations</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>In-Game:</strong> Use /report [player] [reason]</div>
                <div className="mb-8">• <strong>Staff Help:</strong> Use /helpop for immediate assistance</div>
                <div className="mb-8">• <strong>Discord:</strong> Report in #support channel</div>
                <div className="mb-8">• <strong>Evidence:</strong> Provide screenshots or video</div>
                <div className="mb-8">• <strong>Details:</strong> Include time, location, witnesses</div>
                <div className="mb-8">• <strong>Follow-up:</strong> Check ticket status regularly</div>
                <div className="mb-8">• <strong>Patience:</strong> Allow time for investigation</div>
                <div className="mb-8">• <strong>Honesty:</strong> Provide accurate information</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📝 Appeal Process</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Appeal Form:</strong> Submit through website</div>
                <div className="mb-8">• <strong>Evidence:</strong> Provide supporting materials</div>
                <div className="mb-8">• <strong>Explanation:</strong> Clearly state your case</div>
                <div className="mb-8">• <strong>Patience:</strong> Appeals take 3-7 days</div>
                <div className="mb-8">• <strong>Honesty:</strong> Admit mistakes if applicable</div>
                <div className="mb-8">• <strong>Respect:</strong> Maintain professional tone</div>
                <div className="mb-8">• <strong>One Chance:</strong> Most appeals are final</div>
                <div className="mb-8">• <strong>Follow Rules:</strong> Demonstrate understanding</div>
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
                Combat Guide →
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
            Fight with honor and respect!
          </p>
        </div>
      </footer>
    </div>
  )
}
