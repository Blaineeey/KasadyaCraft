import Link from "next/link"

export default function CombatGuide() {
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
                <h1 className="nav-title">Combat Guide</h1>
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
            ⚔️ Combat Mastery Guide
          </h1>
          <p className="hero-description">
            Master the art of combat with advanced techniques, weapon mastery, and tactical strategies for victory.
          </p>
        </div>
      </section>

      {/* Combat Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🎯 Combat Fundamentals
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">⚔️ Basic Combat Mechanics</h3>
              <p className="card-description mb-16">
                Core combat system mechanics and timing.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Attack Timing:</strong> 1.6-second attack cooldown</div>
                <div className="mb-8">• <strong>Critical Hits:</strong> Jump attacks deal extra damage</div>
                <div className="mb-8">• <strong>Sweep Attacks:</strong> Hit multiple enemies with swords</div>
                <div className="mb-8">• <strong>Shield Blocking:</strong> Reduce incoming damage by 50%</div>
                <div className="mb-8">• <strong>Armor Points:</strong> Each point reduces damage by 4%</div>
                <div className="mb-8">• <strong>Weapon Reach:</strong> Different weapons have varying range</div>
                <div className="mb-8">• <strong>Movement Speed:</strong> Affects combat positioning</div>
                <div className="mb-8">• <strong>Hunger Impact:</strong> Low hunger reduces damage output</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🛡️ Defense Mechanics</h3>
              <p className="card-description mb-16">
                Understanding armor, shields, and damage reduction.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Armor Types:</strong> Leather, iron, diamond, netherite</div>
                <div className="mb-8">• <strong>Armor Durability:</strong> Equipment degrades with use</div>
                <div className="mb-8">• <strong>Enchantment Protection:</strong> Additional damage reduction</div>
                <div className="mb-8">• <strong>Shield Mechanics:</strong> Block timing and cooldowns</div>
                <div className="mb-8">• <strong>Evasion Tactics:</strong> Movement to avoid damage</div>
                <div className="mb-8">• <strong>Terrain Advantage:</strong> Use environment for cover</div>
                <div className="mb-8">• <strong>Healing Items:</strong> Potions and food for recovery</div>
                <div className="mb-8">• <strong>Status Effects:</strong> Buffs and debuffs impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weapon Mastery */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🗡️ Weapon Mastery
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">⚔️ Melee Weapons</h3>
              <p className="card-description mb-16">
                Close-range combat weapons and techniques.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Swords:</strong> Balanced damage and speed</div>
                <div className="mb-8">• <strong>Axes:</strong> High damage, slower attacks</div>
                <div className="mb-8">• <strong>Tridents:</strong> Versatile melee/ranged weapon</div>
                <div className="mb-8">• <strong>Maces:</strong> Armor-piercing capabilities</div>
                <div className="mb-8">• <strong>Combo Attacks:</strong> Chain attacks for bonus damage</div>
                <div className="mb-8">• <strong>Weapon Switching:</strong> Adapt to combat situations</div>
                <div className="mb-8">• <strong>Enchantments:</strong> Sharpness, smite, bane</div>
                <div className="mb-8">• <strong>Durability Management:</strong> Maintain equipment</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏹 Ranged Weapons</h3>
              <p className="card-description mb-16">
                Long-distance combat and projectile weapons.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Bows:</strong> Traditional archery weapon</div>
                <div className="mb-8">• <strong>Crossbows:</strong> High damage, slow reload</div>
                <div className="mb-8">• <strong>Throwing Tridents:</strong> Retrievable projectiles</div>
                <div className="mb-8">• <strong>Arrow Types:</strong> Tipped arrows with effects</div>
                <div className="mb-8">• <strong>Draw Time:</strong> Full draw for maximum damage</div>
                <div className="mb-8">• <strong>Trajectory:</strong> Account for arrow drop</div>
                <div className="mb-8">• <strong>Enchantments:</strong> Power, punch, flame</div>
                <div className="mb-8">• <strong>Ammunition:</strong> Arrow conservation strategies</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💥 Special Weapons</h3>
              <p className="card-description mb-16">
                Unique and magical combat tools.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>TNT:</strong> Explosive area damage</div>
                <div className="mb-8">• <strong>Fire Charges:</strong> Incendiary projectiles</div>
                <div className="mb-8">• <strong>Splash Potions:</strong> Area effect damage</div>
                <div className="mb-8">• <strong>Lingering Potions:</strong> Persistent area effects</div>
                <div className="mb-8">• <strong>Fireworks:</strong> Explosive crossbow ammo</div>
                <div className="mb-8">• <strong>Lava Buckets:</strong> Environmental weapons</div>
                <div className="mb-8">• <strong>End Crystals:</strong> High-damage explosives</div>
                <div className="mb-8">• <strong>Custom Items:</strong> Server-specific weapons</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combat Techniques */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🥋 Advanced Combat Techniques
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">⚡ Movement Techniques</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Strafing:</strong> Circle around enemies while attacking</div>
                <div className="mb-8">• <strong>Jump Resets:</strong> Reset attack cooldown with jumps</div>
                <div className="mb-8">• <strong>Sprint Hitting:</strong> Knockback enemies while moving</div>
                <div className="mb-8">• <strong>Block Hitting:</strong> Attack while blocking</div>
                <div className="mb-8">• <strong>W-Tapping:</strong> Release and press W for combos</div>
                <div className="mb-8">• <strong>S-Tapping:</strong> Backward movement for spacing</div>
                <div className="mb-8">• <strong>Rod Combos:</strong> Fishing rod for knockback</div>
                <div className="mb-8">• <strong>Bow Boosting:</strong> Use bow knockback for mobility</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🎯 Tactical Strategies</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>High Ground:</strong> Fight from elevated positions</div>
                <div className="mb-8">• <strong>Ambush Tactics:</strong> Surprise attacks from hiding</div>
                <div className="mb-8">• <strong>Kiting:</strong> Hit and run with ranged weapons</div>
                <div className="mb-8">• <strong>Baiting:</strong> Lure enemies into traps</div>
                <div className="mb-8">• <strong>Flanking:</strong> Attack from sides or behind</div>
                <div className="mb-8">• <strong>Zoning:</strong> Control space with area attacks</div>
                <div className="mb-8">• <strong>Resource Management:</strong> Conserve potions and food</div>
                <div className="mb-8">• <strong>Psychological Warfare:</strong> Intimidation tactics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Potions & Buffs */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🧪 Potions & Combat Buffs
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">💪 Offensive Potions</h3>
              <p className="card-description mb-16">
                Potions that enhance your attack capabilities.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Strength:</strong> +3 damage per level</div>
                <div className="mb-8">• <strong>Speed:</strong> +20% movement per level</div>
                <div className="mb-8">• <strong>Jump Boost:</strong> Higher jumps and fall damage</div>
                <div className="mb-8">• <strong>Haste:</strong> Faster mining and attacks</div>
                <div className="mb-8">• <strong>Night Vision:</strong> See in darkness</div>
                <div className="mb-8">• <strong>Water Breathing:</strong> Underwater combat</div>
                <div className="mb-8">• <strong>Fire Resistance:</strong> Immunity to fire damage</div>
                <div className="mb-8">• <strong>Invisibility:</strong> Stealth advantages</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🛡️ Defensive Potions</h3>
              <p className="card-description mb-16">
                Potions that improve your survivability.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Healing:</strong> Instant health restoration</div>
                <div className="mb-8">• <strong>Regeneration:</strong> Health over time</div>
                <div className="mb-8">• <strong>Absorption:</strong> Extra temporary hearts</div>
                <div className="mb-8">• <strong>Resistance:</strong> Reduced damage taken</div>
                <div className="mb-8">• <strong>Turtle Master:</strong> Slowness + resistance</div>
                <div className="mb-8">• <strong>Slow Falling:</strong> Reduced fall damage</div>
                <div className="mb-8">• <strong>Luck:</strong> Better loot chances</div>
                <div className="mb-8">• <strong>Saturation:</strong> Hunger restoration</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💀 Debuff Potions</h3>
              <p className="card-description mb-16">
                Potions to weaken and hinder enemies.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Poison:</strong> Damage over time</div>
                <div className="mb-8">• <strong>Weakness:</strong> Reduced melee damage</div>
                <div className="mb-8">• <strong>Slowness:</strong> Reduced movement speed</div>
                <div className="mb-8">• <strong>Mining Fatigue:</strong> Slower actions</div>
                <div className="mb-8">• <strong>Blindness:</strong> Limited vision</div>
                <div className="mb-8">• <strong>Nausea:</strong> Screen distortion</div>
                <div className="mb-8">• <strong>Wither:</strong> Health decay effect</div>
                <div className="mb-8">• <strong>Levitation:</strong> Uncontrolled floating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Combat */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            👥 Team Combat Strategies
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🤝 Coordination Tactics</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Communication:</strong> Voice chat for real-time coordination</div>
                <div className="mb-8">• <strong>Role Assignment:</strong> Tank, DPS, support roles</div>
                <div className="mb-8">• <strong>Formation Fighting:</strong> Maintain group cohesion</div>
                <div className="mb-8">• <strong>Focus Fire:</strong> Target priority enemies together</div>
                <div className="mb-8">• <strong>Crossfire:</strong> Attack from multiple angles</div>
                <div className="mb-8">• <strong>Covering Fire:</strong> Protect retreating allies</div>
                <div className="mb-8">• <strong>Revive Protocols:</strong> Safe resurrection procedures</div>
                <div className="mb-8">• <strong>Resource Sharing:</strong> Distribute supplies efficiently</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚔️ Group Combat Roles</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Tank:</strong> Heavy armor, shield, frontline fighter</div>
                <div className="mb-8">• <strong>DPS:</strong> High damage output, glass cannon</div>
                <div className="mb-8">• <strong>Support:</strong> Healing, buffs, utility items</div>
                <div className="mb-8">• <strong>Archer:</strong> Ranged damage, crowd control</div>
                <div className="mb-8">• <strong>Scout:</strong> Reconnaissance, mobility, flanking</div>
                <div className="mb-8">• <strong>Engineer:</strong> Traps, explosives, siege equipment</div>
                <div className="mb-8">• <strong>Medic:</strong> Healing potions, resurrection</div>
                <div className="mb-8">• <strong>Commander:</strong> Strategy, coordination, leadership</div>
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
              <Link href="/towny/wiki/pvp-rules" className="footer-link footer-link-orange">
                ← PvP Rules
              </Link>
              <Link href="/towny/wiki/war-prep" className="footer-link footer-link-green">
                War Preparation →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Master the art of combat!
          </p>
        </div>
      </footer>
    </div>
  )
}
