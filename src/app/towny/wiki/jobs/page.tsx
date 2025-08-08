import Link from "next/link"

export default function JobsGuide() {
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
                ⚒️
              </div>
              <div>
                <h1 className="nav-title">Jobs & Professions</h1>
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
            ⚒️ Jobs & Professions Guide
          </h1>
          <p className="hero-description">
            Earn money through various professions and skill-based activities while building your career on the server.
          </p>
        </div>
      </section>

      {/* Jobs Overview */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-purple">
            📋 Jobs System Overview
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">💼 How Jobs Work</h3>
              <p className="card-description mb-16">
                Understanding the job system mechanics and benefits.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Activity-Based:</strong> Earn money by performing tasks</div>
                <div className="mb-8">• <strong>Experience System:</strong> Gain XP and level up</div>
                <div className="mb-8">• <strong>Pay Progression:</strong> Higher levels = better pay</div>
                <div className="mb-8">• <strong>Multiple Jobs:</strong> Hold up to 3 jobs simultaneously</div>
                <div className="mb-8">• <strong>Specialization:</strong> Unlock advanced job features</div>
                <div className="mb-8">• <strong>Bonuses:</strong> Special perks and multipliers</div>
                <div className="mb-8">• <strong>Competition:</strong> Leaderboards and rankings</div>
                <div className="mb-8">• <strong>Events:</strong> Special job-related activities</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ Essential Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/jobs browse</div>
                  <div className="command-description">View available jobs</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/jobs join [job]</div>
                  <div className="command-description">Join a specific job</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/jobs leave [job]</div>
                  <div className="command-description">Leave a job</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/jobs info [job]</div>
                  <div className="command-description">Get job information</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/jobs stats</div>
                  <div className="command-description">View your statistics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            🏭 Job Categories
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🌿 Resource Jobs</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Miner:</strong> Mine ores, stones, and minerals</div>
                <div className="mb-8">• <strong>Woodcutter:</strong> Chop trees and harvest wood</div>
                <div className="mb-8">• <strong>Digger:</strong> Excavate dirt, sand, and gravel</div>
                <div className="mb-8">• <strong>Farmer:</strong> Grow crops and breed animals</div>
                <div className="mb-8">• <strong>Fisherman:</strong> Catch fish and ocean resources</div>
                <div className="mb-8">• <strong>Hunter:</strong> Hunt mobs and collect drops</div>
                <div className="mb-8">• <strong>Explorer:</strong> Discover new areas and biomes</div>
                <div className="mb-8">• <strong>Collector:</strong> Gather rare and unique items</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔨 Crafting Jobs</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Builder:</strong> Place blocks and construct buildings</div>
                <div className="mb-8">• <strong>Crafter:</strong> Create tools, weapons, and items</div>
                <div className="mb-8">• <strong>Enchanter:</strong> Enchant items and create magic</div>
                <div className="mb-8">• <strong>Brewer:</strong> Create potions and magical drinks</div>
                <div className="mb-8">• <strong>Smelter:</strong> Process ores and materials</div>
                <div className="mb-8">• <strong>Weaponsmith:</strong> Forge weapons and armor</div>
                <div className="mb-8">• <strong>Alchemist:</strong> Advanced potion crafting</div>
                <div className="mb-8">• <strong>Engineer:</strong> Build complex mechanisms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🚀 Getting Started with Jobs
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">📝 Joining Your First Job</h3>
              <p className="card-description mb-16">
                Step-by-step guide to starting your career.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Use /jobs browse to see options</div>
                <div className="mb-8">• Read job descriptions carefully</div>
                <div className="mb-8">• Check pay rates and requirements</div>
                <div className="mb-8">• Choose based on your playstyle</div>
                <div className="mb-8">• Use /jobs join [jobname]</div>
                <div className="mb-8">• Start performing job activities</div>
                <div className="mb-8">• Monitor your progress regularly</div>
                <div className="mb-8">• Ask for help if needed</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🎯 Job Selection Tips</h3>
              <p className="card-description mb-16">
                Choose the right jobs for maximum success.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Consider your preferred activities</div>
                <div className="mb-8">• Check current market demand</div>
                <div className="mb-8">• Look at advancement opportunities</div>
                <div className="mb-8">• Consider resource availability</div>
                <div className="mb-8">• Think about time investment</div>
                <div className="mb-8">• Plan for long-term goals</div>
                <div className="mb-8">• Research job combinations</div>
                <div className="mb-8">• Start with beginner-friendly jobs</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔄 Multiple Jobs Strategy</h3>
              <p className="card-description mb-16">
                Maximize earnings with multiple professions.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Maximum of 3 jobs allowed</div>
                <div className="mb-8">• Each job levels independently</div>
                <div className="mb-8">• Diversify for stable income</div>
                <div className="mb-8">• Choose complementary jobs</div>
                <div className="mb-8">• Balance time between jobs</div>
                <div className="mb-8">• Focus on synergistic combinations</div>
                <div className="mb-8">• Don't spread too thin initially</div>
                <div className="mb-8">• Master one before adding more</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Professions */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            ⚒️ Detailed Job Descriptions
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">⛏️ Miner Profession</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Activities:</strong> Mine stone, ores, and minerals</div>
                <div className="mb-8">• <strong>High Pay Items:</strong> Diamond, emerald, ancient debris</div>
                <div className="mb-8">• <strong>Bonuses:</strong> Deep mining multipliers</div>
                <div className="mb-8">• <strong>Special Perks:</strong> Ore detection abilities</div>
                <div className="mb-8">• <strong>Equipment:</strong> Efficiency pickaxes recommended</div>
                <div className="mb-8">• <strong>Best Locations:</strong> Deep caves and mining areas</div>
                <div className="mb-8">• <strong>Tips:</strong> Use fortune enchantments</div>
                <div className="mb-8">• <strong>Advancement:</strong> Unlock rare ore bonuses</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🌾 Farmer Profession</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Activities:</strong> Plant, harvest crops, breed animals</div>
                <div className="mb-8">• <strong>High Pay Items:</strong> Rare crops, animal products</div>
                <div className="mb-8">• <strong>Bonuses:</strong> Harvest multipliers</div>
                <div className="mb-8">• <strong>Special Perks:</strong> Faster crop growth</div>
                <div className="mb-8">• <strong>Equipment:</strong> Hoes with efficiency</div>
                <div className="mb-8">• <strong>Best Locations:</strong> Fertile farmland areas</div>
                <div className="mb-8">• <strong>Tips:</strong> Automate with hoppers</div>
                <div className="mb-8">• <strong>Advancement:</strong> Unlock exotic crops</div>
              </div>
            </div>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏗️ Builder Profession</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Activities:</strong> Place blocks, construct buildings</div>
                <div className="mb-8">• <strong>High Pay Items:</strong> Expensive blocks, decoratives</div>
                <div className="mb-8">• <strong>Bonuses:</strong> Large project multipliers</div>
                <div className="mb-8">• <strong>Special Perks:</strong> Building material discounts</div>
                <div className="mb-8">• <strong>Equipment:</strong> Various building blocks</div>
                <div className="mb-8">• <strong>Best Locations:</strong> Town construction sites</div>
                <div className="mb-8">• <strong>Tips:</strong> Plan large builds for efficiency</div>
                <div className="mb-8">• <strong>Advancement:</strong> Unlock architectural bonuses</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔨 Crafter Profession</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Activities:</strong> Craft tools, weapons, items</div>
                <div className="mb-8">• <strong>High Pay Items:</strong> Complex recipes, enchanted items</div>
                <div className="mb-8">• <strong>Bonuses:</strong> Crafting efficiency multipliers</div>
                <div className="mb-8">• <strong>Special Perks:</strong> Recipe unlock rewards</div>
                <div className="mb-8">• <strong>Equipment:</strong> Crafting tables, furnaces</div>
                <div className="mb-8">• <strong>Best Locations:</strong> Well-equipped workshops</div>
                <div className="mb-8">• <strong>Tips:</strong> Bulk craft for better rates</div>
                <div className="mb-8">• <strong>Advancement:</strong> Master craftsman abilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Advancement */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-purple">
            📈 Job Advancement System
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">⭐ Experience & Levels</h3>
              <p className="card-description mb-16">
                Progress through levels to unlock better rewards.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Gain XP by performing job activities</div>
                <div className="mb-8">• Each level increases pay rates</div>
                <div className="mb-8">• Higher levels unlock bonuses</div>
                <div className="mb-8">• Maximum level varies by job</div>
                <div className="mb-8">• XP requirements increase per level</div>
                <div className="mb-8">• Track progress with /jobs stats</div>
                <div className="mb-8">• Participate in XP boost events</div>
                <div className="mb-8">• Complete job-specific quests</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏆 Level Benefits</h3>
              <p className="card-description mb-16">
                Rewards for reaching higher job levels.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Level 1-10: Basic pay rates</div>
                <div className="mb-8">• Level 11-25: Increased earnings</div>
                <div className="mb-8">• Level 26-50: Special bonuses</div>
                <div className="mb-8">• Level 51-75: Elite rewards</div>
                <div className="mb-8">• Level 76-100: Master benefits</div>
                <div className="mb-8">• Unlock exclusive abilities</div>
                <div className="mb-8">• Access to rare materials</div>
                <div className="mb-8">• Special titles and recognition</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💎 Prestige System</h3>
              <p className="card-description mb-16">
                Reset and gain permanent bonuses.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Available at maximum level</div>
                <div className="mb-8">• Reset to level 1 with prestige rank</div>
                <div className="mb-8">• Gain permanent bonuses</div>
                <div className="mb-8">• Access prestige-only features</div>
                <div className="mb-8">• Special titles and recognition</div>
                <div className="mb-8">• Increased XP gain rates</div>
                <div className="mb-8">• Exclusive prestige rewards</div>
                <div className="mb-8">• Multiple prestige levels available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Strategies */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            💡 Job Optimization Strategies
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">💰 Income Maximization</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>High-Value Activities:</strong> Focus on best-paying tasks</div>
                <div className="mb-8">• <strong>Bonus Periods:</strong> Time activities during multipliers</div>
                <div className="mb-8">• <strong>Efficient Tools:</strong> Use best equipment available</div>
                <div className="mb-8">• <strong>Job Combinations:</strong> Synergize multiple professions</div>
                <div className="mb-8">• <strong>Event Participation:</strong> Join special job events</div>
                <div className="mb-8">• <strong>Bulk Operations:</strong> Perform activities in large quantities</div>
                <div className="mb-8">• <strong>Location Optimization:</strong> Work in resource-rich areas</div>
                <div className="mb-8">• <strong>Time Management:</strong> Schedule work efficiently</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ Efficiency Tips</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Dedicated Workspaces:</strong> Set up specialized areas</div>
                <div className="mb-8">• <strong>Automation:</strong> Use redstone and hoppers</div>
                <div className="mb-8">• <strong>Inventory Management:</strong> Organize for quick access</div>
                <div className="mb-8">• <strong>Route Planning:</strong> Optimize resource gathering paths</div>
                <div className="mb-8">• <strong>Team Coordination:</strong> Work with other professionals</div>
                <div className="mb-8">• <strong>Tool Maintenance:</strong> Keep equipment in top condition</div>
                <div className="mb-8">• <strong>Resource Stockpiling:</strong> Maintain material reserves</div>
                <div className="mb-8">• <strong>Skill Development:</strong> Continuously improve techniques</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            ❌ Common Mistakes to Avoid
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🚫 Beginner Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Spreading too thin across many jobs</div>
                <div className="mb-8">• Ignoring job-specific bonuses</div>
                <div className="mb-8">• Not upgrading tools and equipment</div>
                <div className="mb-8">• Missing special events and promotions</div>
                <div className="mb-8">• Neglecting job advancement opportunities</div>
                <div className="mb-8">• Working in inefficient locations</div>
                <div className="mb-8">• Poor time management</div>
                <div className="mb-8">• Not researching job mechanics</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💡 Success Strategies</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Set realistic income goals</div>
                <div className="mb-8">• Track progress and adjust strategies</div>
                <div className="mb-8">• Invest earnings in better equipment</div>
                <div className="mb-8">• Build relationships with other workers</div>
                <div className="mb-8">• Stay informed about server updates</div>
                <div className="mb-8">• Participate in community events</div>
                <div className="mb-8">• Consider transitioning to business</div>
                <div className="mb-8">• Maintain work-life balance</div>
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
              <Link href="/towny/wiki/economy" className="footer-link footer-link-orange">
                ← Economy Guide
              </Link>
              <Link href="/towny/wiki/shops" className="footer-link footer-link-green">
                Shop System →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Start your career today!
          </p>
        </div>
      </footer>
    </div>
  )
}
