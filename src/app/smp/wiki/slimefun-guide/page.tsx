import Link from "next/link"

export default function SlimefunGuidePage() {
  return (
    <div className="minecraft-bg">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-flex">
            <div className="nav-left">
              <Link href="/smp/wiki" className="nav-back">
                ← Back to Wiki
              </Link>
              <div className="nav-logo nav-logo-wiki">
                🧪
              </div>
              <div>
                <h1 className="nav-title">Slimefun Guide</h1>
                <p className="nav-subtitle-mono">Getting Started</p>
              </div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/smp" className="nav-link-towny">SMP</Link>
              <Link href="/smp/wiki" className="nav-link-wiki">Wiki</Link>
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
            🧪 Slimefun Complete Guide
          </h1>
          <p className="hero-description-wide">
            Master over 500 custom items, machines, and automation systems! Your complete guide to Slimefun technology.
          </p>

          <div className="hero-info-box">
            <h3 className="hero-box-title hero-box-title-info">⚡ Quick Start Command</h3>
            <p className="hero-box-text mb-12">
              Type <span className="command-text">/slimefun guide</span> in-game to get your Slimefun Guide Book!
            </p>
            <div className="command-box">
              <div className="command-text">/sf guide</div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🚀 Getting Started with Slimefun
          </h2>

          <div className="grid grid-2 mb-32">
            <div className="card">
              <div className="feature-icon">📖</div>
              <h3 className="card-title">Step 1: Get Your Guide Book</h3>
              <p className="card-description mb-16">
                The Slimefun Guide Book is your in-game encyclopedia. It contains all recipes, item information, and progression paths.
              </p>
              <div className="command-box mb-16">
                <div className="command-name">/slimefun guide</div>
                <div className="command-description">Opens your personal Slimefun guide</div>
              </div>
              <div className="tip-box">
                <strong className="text-green">💡 Pro Tip:</strong>
                <p className="text-14 mb-0" style={{color: 'rgba(255,255,255,0.9)'}}>
                  Bookmark important recipes by shift-clicking items in the guide!
                </p>
              </div>
            </div>

            <div className="card">
              <div className="feature-icon">⚒️</div>
              <h3 className="card-title">Step 2: Craft Enhanced Crafting Table</h3>
              <p className="card-description mb-16">
                This is your first Slimefun machine and the gateway to all other recipes!
              </p>
              <div className="card" style={{background: 'rgba(0,0,0,0.3)', padding: '16px'}}>
                <h4 className="text-gold mb-12">Recipe:</h4>
                <div className="text-14 mb-8" style={{color: 'rgba(255,255,255,0.9)'}}>
                  1. Place a <span className="text-green">Dispenser</span> on the ground
                </div>
                <div className="text-14 mb-8" style={{color: 'rgba(255,255,255,0.9)'}}>
                  2. Place a <span className="text-green">Crafting Table</span> on top
                </div>
                <div className="text-14" style={{color: 'rgba(255,255,255,0.9)'}}>
                  3. Right-click the Crafting Table to use!
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-32">
            <h3 className="card-title">🔬 How Slimefun Crafting Works</h3>
            <div className="grid grid-3">
              <div>
                <div className="feature-icon" style={{fontSize: '2rem'}}>1️⃣</div>
                <h4 className="text-green mb-8">Find Recipe</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>
                  Open your guide book (/sf guide) and click on any item to view its recipe and crafting method.
                </p>
              </div>
              <div>
                <div className="feature-icon" style={{fontSize: '2rem'}}>2️⃣</div>
                <h4 className="text-green mb-8">Unlock Research</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>
                  Most items require research first. Click "Unlock" and spend XP levels to unlock the recipe.
                </p>
              </div>
              <div>
                <div className="feature-icon" style={{fontSize: '2rem'}}>3️⃣</div>
                <h4 className="text-green mb-8">Craft Item</h4>
                <p className="text-14" style={{color: 'rgba(255,255,255,0.8)'}}>
                  Place ingredients in the correct Slimefun machine (Enhanced Table, GEO Miner, etc.) and craft!
                </p>
              </div>
            </div>
          </div>

          {/* Progression Path */}
          <div className="card">
            <h3 className="card-title mb-24">📈 Recommended Progression Path</h3>
            <div className="grid grid-2">
              <div>
                <h4 className="text-gold mb-16 border-bottom-orange">🌱 Early Game (First Hour)</h4>
                <div className="wiki-articles">
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Enhanced Crafting Table</div>
                    <div className="wiki-article-desc">Your first machine - unlocks basic recipes</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Basic Machines</div>
                    <div className="wiki-article-desc">Ore Crusher, Compressor, Smeltery</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Backpacks</div>
                    <div className="wiki-article-desc">Essential for inventory management</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Basic Tools</div>
                    <div className="wiki-article-desc">Reinforced tools, Pickaxe of the Seeker</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-gold mb-16 border-bottom-orange">⚡ Mid Game (First Week)</h4>
                <div className="wiki-articles">
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Energy Regulator</div>
                    <div className="wiki-article-desc">Core of your power network</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Generators</div>
                    <div className="wiki-article-desc">Coal, Solar, Lava generators</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Electric Machines</div>
                    <div className="wiki-article-desc">Automated ore processing</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Cargo System</div>
                    <div className="wiki-article-desc">Automated item transportation</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-gold mb-16 border-bottom-orange">💎 Late Game (Advanced)</h4>
                <div className="wiki-articles">
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ GPS Network</div>
                    <div className="wiki-article-desc">Teleportation and resource scanning</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Androids</div>
                    <div className="wiki-article-desc">Programmable automation bots</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Nuclear Reactor</div>
                    <div className="wiki-article-desc">Massive power generation</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Infinity Tech</div>
                    <div className="wiki-article-desc">End-game armor and tools</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-gold mb-16 border-bottom-orange">🏆 End Game (Master)</h4>
                <div className="wiki-articles">
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Complete Automation</div>
                    <div className="wiki-article-desc">Full factory setup with autocrafters</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Power Suits</div>
                    <div className="wiki-article-desc">Advanced powered armor sets</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Advanced Generators</div>
                    <div className="wiki-article-desc">Nether Star Reactor, Dragon Reactor</div>
                  </div>
                  <div className="wiki-article-link" style={{cursor: 'default'}}>
                    <div className="wiki-article-title">✓ Exotic Items</div>
                    <div className="wiki-article-desc">Unique weapons and utilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Guides Section */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            📚 Visual Guides & Tutorials
          </h2>

          <div className="features-grid">
            <Link href="/smp/wiki/crafting" className="feature-card" style={{textDecoration: 'none'}}>
              <span className="feature-icon">⚒️</span>
              <h3 className="feature-title">Crafting Basics</h3>
              <p className="feature-description">
                Learn about Enhanced Crafting Tables, Armor Forges, and other basic crafting stations with visual recipes.
              </p>
              <div className="btn btn-primary" style={{marginTop: '16px'}}>View Guide →</div>
            </Link>

            <Link href="/smp/wiki/machines" className="feature-card" style={{textDecoration: 'none'}}>
              <span className="feature-icon">🏭</span>
              <h3 className="feature-title">Machines & Production</h3>
              <p className="feature-description">
                Complete guide to all Slimefun machines, from basic ore crushers to advanced electric smelters.
              </p>
              <div className="btn btn-primary" style={{marginTop: '16px'}}>View Guide →</div>
            </Link>

            <Link href="/smp/wiki/energy" className="feature-card" style={{textDecoration: 'none'}}>
              <span className="feature-icon">⚡</span>
              <h3 className="feature-title">Energy Systems</h3>
              <p className="feature-description">
                Master the power network: generators, capacitors, energy regulators, and efficient power management.
              </p>
              <div className="btn btn-primary" style={{marginTop: '16px'}}>View Guide →</div>
            </Link>

            <Link href="/smp/wiki/automation" className="feature-card" style={{textDecoration: 'none'}}>
              <span className="feature-icon">🤖</span>
              <h3 className="feature-title">Automation Guide</h3>
              <p className="feature-description">
                Set up cargo networks, program androids, and create fully automated production lines.
              </p>
              <div className="btn btn-primary" style={{marginTop: '16px'}}>View Guide →</div>
            </Link>

            <Link href="/smp/wiki/resources" className="feature-card" style={{textDecoration: 'none'}}>
              <span className="feature-icon">💎</span>
              <h3 className="feature-title">Resources & Materials</h3>
              <p className="feature-description">
                Discover new ores, alloys, and materials. Learn where to find them and how to process them.
              </p>
              <div className="btn btn-primary" style={{marginTop: '16px'}}>View Guide →</div>
            </Link>

            <Link href="/smp/wiki/tools" className="feature-card" style={{textDecoration: 'none'}}>
              <span className="feature-icon">🔨</span>
              <h3 className="feature-title">Tools & Weapons</h3>
              <p className="feature-description">
                Upgrade your arsenal with reinforced tools, explosive weapons, and powerful armor sets.
              </p>
              <div className="btn btn-primary" style={{marginTop: '16px'}}>View Guide →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Commands */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            ⌨️ Essential Slimefun Commands
          </h2>

          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title-20 mb-16">Basic Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/sf guide</div>
                  <div className="command-description">Open your Slimefun guide book</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/sf search [item]</div>
                  <div className="command-description">Search for a specific item in the guide</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/sf research list</div>
                  <div className="command-description">View all available researches</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/sf research unlock [player]</div>
                  <div className="command-description">Admin command to unlock all researches</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/sf stats</div>
                  <div className="command-description">View your Slimefun statistics</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title-20 mb-16">Advanced Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/sf cheat</div>
                  <div className="command-description">Open admin cheat menu (requires permission)</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/sf give [player] [item]</div>
                  <div className="command-description">Give Slimefun items (admin only)</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/sf backpack [player] [id]</div>
                  <div className="command-description">Open a player's backpack</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/sf teleporter</div>
                  <div className="command-description">Open GPS teleporter menu</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/sf versions</div>
                  <div className="command-description">Check Slimefun and addon versions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Tricks */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            💡 Pro Tips & Tricks
          </h2>

          <div className="grid grid-3">
            <div className="card">
              <div className="icon-48 icon-center">🎒</div>
              <h3 className="card-title-20">Backpack Management</h3>
              <p className="card-description-14">
                Craft multiple backpacks early! They don't share inventory and can be used to organize different resources. Ender backpacks are accessible from anywhere!
              </p>
            </div>

            <div className="card">
              <div className="icon-48 icon-center">📊</div>
              <h3 className="card-title-20">Research Strategy</h3>
              <p className="card-description-14">
                Don't unlock everything at once! Focus on researches for your current progression tier. Build an XP farm to speed up unlocks.
              </p>
            </div>

            <div className="card">
              <div className="icon-48 icon-center">🔋</div>
              <h3 className="card-title-20">Energy Efficiency</h3>
              <p className="card-description-14">
                Start with coal generators, upgrade to solar panels for passive power. Use capacitors to store excess energy for peak usage times.
              </p>
            </div>

            <div className="card">
              <div className="icon-48 icon-center">🏗️</div>
              <h3 className="card-title-20">Layout Planning</h3>
              <p className="card-description-14">
                Plan your machine layout before building! Keep generators near your energy regulator and organize machines by function.
              </p>
            </div>

            <div className="card">
              <div className="icon-48 icon-center">🚚</div>
              <h3 className="card-title-20">Cargo Networks</h3>
              <p className="card-description-14">
                Cargo nodes have a limited range! Use multiple cargo managers for large setups. Input nodes pull items, output nodes push items.
              </p>
            </div>

            <div className="card">
              <div className="icon-48 icon-center">⏱️</div>
              <h3 className="card-title-20">Machine Tiers</h3>
              <p className="card-description-14">
                Higher tier machines are faster but consume more energy. Balance speed vs. power consumption based on your energy production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/smp/wiki" className="footer-link footer-link-orange">
                ← Back to Wiki
              </Link>
              <Link href="/smp/wiki/crafting" className="footer-link footer-link-green">
                Crafting Guide →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Master Slimefun technology and automation!
          </p>
        </div>
      </footer>
    </div>
  )
}
