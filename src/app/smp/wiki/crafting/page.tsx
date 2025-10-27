import Link from "next/link"
import Navigation from "@/components/Navigation"

export default function CraftingGuidePage() {
  const craftingStations = [
    {
      name: "Enhanced Crafting Table",
      icon: "⚒️",
      difficulty: "Beginner",
      recipe: [
        { item: "Crafting Table", position: "Top" },
        { item: "Dispenser", position: "Bottom" }
      ],
      description: "Your first Slimefun machine. Place a Dispenser on the ground, then a Crafting Table on top. Right-click the table to use it.",
      uses: "Crafts basic Slimefun items, tools, and components",
      energy: "None required"
    },
    {
      name: "Grind Stone",
      icon: "🪨",
      difficulty: "Beginner",
      recipe: [
        { item: "Oak Fence", position: "Top" },
        { item: "Dispenser", position: "Bottom" }
      ],
      description: "Converts items into dusts and crushed materials",
      uses: "Crushing ores into dusts, making flour from wheat",
      energy: "None required"
    },
    {
      name: "Armor Forge",
      icon: "🛡️",
      difficulty: "Beginner",
      recipe: [
        { item: "Anvil", position: "Top" },
        { item: "Dispenser", position: "Bottom" }
      ],
      description: "Crafts all Slimefun armor pieces",
      uses: "Creating reinforced, damascus, and advanced armor sets",
      energy: "None required"
    },
    {
      name: "Ore Crusher",
      icon: "⛏️",
      difficulty: "Beginner",
      recipe: [
        { item: "Nether Brick Fence", position: "Top" },
        { item: "Dispenser", position: "Bottom" }
      ],
      description: "Doubles ore output by crushing into dusts",
      uses: "Processing raw ores - get 2x dust from 1x ore",
      energy: "None required"
    },
    {
      name: "Compressor",
      icon: "🗜️",
      difficulty: "Beginner",
      recipe: [
        { item: "Nether Brick Stairs", position: "Top" },
        { item: "Dropper", position: "Bottom" }
      ],
      description: "Compresses materials into blocks and ingots",
      uses: "Making carbon, steel ingots, and compressed materials",
      energy: "None required"
    },
    {
      name: "Smeltery",
      icon: "🔥",
      difficulty: "Intermediate",
      recipe: [
        { item: "Nether Brick Fence", position: "Top" },
        { item: "Dropper", position: "Bottom" }
      ],
      description: "Advanced smelting for alloys and special materials",
      uses: "Creating alloys like Damascus Steel, Duralumin, Bronze",
      energy: "None required"
    },
    {
      name: "Pressure Chamber",
      icon: "💨",
      difficulty: "Intermediate",
      recipe: [
        { item: "Glass", position: "Top" },
        { item: "Dispenser", position: "Bottom" }
      ],
      description: "High-pressure crafting for advanced items",
      uses: "Creating carbon, advanced components",
      energy: "None required"
    },
    {
      name: "Magic Workbench",
      icon: "✨",
      difficulty: "Intermediate",
      recipe: [
        { item: "Bookshelf", position: "Top" },
        { item: "Dispenser", position: "Bottom" }
      ],
      description: "Crafts magical and enchanted items",
      uses: "Making talismans, magical components, enchanted books",
      energy: "None required"
    },
    {
      name: "Ore Washer",
      icon: "💧",
      difficulty: "Intermediate",
      recipe: [
        { item: "Oak Fence", position: "Top" },
        { item: "Dropper", position: "Bottom" }
      ],
      description: "Washes sifted ore for pure dusts",
      uses: "Final processing step for maximum ore output",
      energy: "None required"
    }
  ]

  const basicRecipes = [
    {
      category: "Basic Resources",
      items: [
        {
          name: "Copper Dust",
          station: "Grind Stone",
          ingredients: ["1x Copper Ingot"],
          output: "1x Copper Dust"
        },
        {
          name: "Gold Dust (4x)",
          station: "Ore Crusher",
          ingredients: ["1x Gold Ore"],
          output: "2x Gold Dust"
        },
        {
          name: "Carbon",
          station: "Compressor",
          ingredients: ["4x Coal"],
          output: "1x Carbon"
        },
        {
          name: "Steel Ingot",
          station: "Smeltery",
          ingredients: ["1x Iron Dust", "1x Carbon"],
          output: "1x Steel Ingot"
        }
      ]
    },
    {
      category: "Tools & Equipment",
      items: [
        {
          name: "Reinforced Pickaxe",
          station: "Enhanced Crafting Table",
          ingredients: ["3x Reinforced Alloy Ingot", "2x Stick"],
          output: "1x Reinforced Pickaxe"
        },
        {
          name: "Damascus Steel Sword",
          station: "Enhanced Crafting Table",
          ingredients: ["2x Damascus Steel Ingot", "1x Stick"],
          output: "1x Damascus Steel Sword"
        },
        {
          name: "Small Backpack",
          station: "Enhanced Crafting Table",
          ingredients: ["4x Leather", "4x String", "1x Chest"],
          output: "1x Small Backpack (9 slots)"
        }
      ]
    },
    {
      category: "Alloys",
      items: [
        {
          name: "Bronze Ingot",
          station: "Smeltery",
          ingredients: ["3x Copper Dust", "1x Tin Dust"],
          output: "4x Bronze Ingot"
        },
        {
          name: "Damascus Steel",
          station: "Smeltery",
          ingredients: ["1x Steel Ingot", "1x Iron Dust"],
          output: "1x Damascus Steel Ingot"
        },
        {
          name: "Duralumin Ingot",
          station: "Smeltery",
          ingredients: ["1x Aluminum Dust", "1x Copper Dust"],
          output: "1x Duralumin Ingot"
        },
        {
          name: "Reinforced Alloy",
          station: "Smeltery",
          ingredients: ["1x Damascus Steel", "1x Duralumin", "1x Bronze", "1x Hardened Metal"],
          output: "1x Reinforced Alloy Ingot"
        }
      ]
    }
  ]

  return (
    <div className="minecraft-bg">
      <Navigation variant="wiki" showBackButton={true} backLink="/smp/wiki" backText="← Back to Wiki" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title-wiki">
            ⚒️ Slimefun Crafting Guide
          </h1>
          <p className="hero-description-wide">
            Master all crafting stations and learn essential recipes to kickstart your Slimefun journey!
          </p>
        </div>
      </section>

      {/* Crafting Stations */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🏭 Crafting Stations
          </h2>

          <div className="grid grid-3">
            {craftingStations.map((station, index) => (
              <div key={index} className="card">
                <div className="flex" style={{alignItems: 'center', marginBottom: '16px', gap: '12px'}}>
                  <div style={{fontSize: '3rem'}}>{station.icon}</div>
                  <div style={{flex: 1}}>
                    <h3 className="card-title" style={{marginBottom: '4px', fontSize: '1.25rem'}}>{station.name}</h3>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      background: station.difficulty === 'Beginner' ? 'rgba(126, 211, 33, 0.2)' : 'rgba(255, 184, 0, 0.2)',
                      color: station.difficulty === 'Beginner' ? '#7ED321' : '#FFB800',
                      border: station.difficulty === 'Beginner' ? '1px solid rgba(126, 211, 33, 0.4)' : '1px solid rgba(255, 184, 0, 0.4)'
                    }}>
                      {station.difficulty}
                    </span>
                  </div>
                </div>

                <div className="card" style={{background: 'rgba(0,0,0,0.3)', padding: '16px', marginBottom: '16px'}}>
                  <h4 className="text-gold mb-12" style={{fontSize: '0.95rem'}}>📋 Recipe:</h4>
                  {station.recipe.map((item, i) => (
                    <div key={i} className="flex" style={{alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                      <span style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'var(--gradient-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        color: '#0F1419'
                      }}>
                        {i + 1}
                      </span>
                      <span className="text-green" style={{fontWeight: '600', fontSize: '0.9rem'}}>{item.item}</span>
                      <span className="text-gray" style={{fontSize: '0.85rem'}}>({item.position})</span>
                    </div>
                  ))}
                </div>

                <p className="card-description-14 mb-16">{station.description}</p>

                <div style={{borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px'}}>
                  <div className="mb-8">
                    <span className="text-gold" style={{fontSize: '0.85rem', fontWeight: '600'}}>Uses: </span>
                    <span className="text-light-gray" style={{fontSize: '0.85rem'}}>{station.uses}</span>
                  </div>
                  <div>
                    <span className="text-gold" style={{fontSize: '0.85rem', fontWeight: '600'}}>Energy: </span>
                    <span className="text-light-gray" style={{fontSize: '0.85rem'}}>{station.energy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Examples */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            📖 Essential Recipes
          </h2>

          {basicRecipes.map((category, catIndex) => (
            <div key={catIndex} className="card mb-32">
              <h3 className="card-title border-bottom-orange mb-24">{category.category}</h3>
              <div className="grid grid-2">
                {category.items.map((recipe, recIndex) => (
                  <div key={recIndex} className="card" style={{background: 'rgba(0,0,0,0.3)'}}>
                    <h4 className="text-green mb-12" style={{fontSize: '1.1rem', fontWeight: '700'}}>{recipe.name}</h4>

                    <div className="mb-12" style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(126, 211, 33, 0.1)',
                      border: '1px solid rgba(126, 211, 33, 0.3)'
                    }}>
                      <span className="text-14" style={{color: 'rgba(255,255,255,0.9)'}}>
                        🏭 Crafted in: <span className="text-gold">{recipe.station}</span>
                      </span>
                    </div>

                    <div className="mb-12">
                      <div className="text-gray mb-8" style={{fontSize: '0.85rem', fontWeight: '600'}}>Ingredients:</div>
                      {recipe.ingredients.map((ingredient, i) => (
                        <div key={i} className="flex" style={{alignItems: 'center', gap: '8px', marginBottom: '4px'}}>
                          <span style={{color: '#7ED321', fontSize: '1rem'}}>▸</span>
                          <span className="text-light-gray" style={{fontSize: '0.9rem'}}>{ingredient}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      padding: '12px',
                      borderRadius: '8px',
                      background: 'rgba(255, 184, 0, 0.1)',
                      border: '1px solid rgba(255, 184, 0, 0.3)'
                    }}>
                      <span className="text-gold" style={{fontSize: '0.85rem', fontWeight: '600'}}>Output: </span>
                      <span className="text-white" style={{fontSize: '0.9rem', fontWeight: '600'}}>{recipe.output}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Crafting Tips */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            💡 Crafting Tips & Tricks
          </h2>

          <div className="grid grid-3">
            <div className="card">
              <div className="icon-48 icon-center">🎯</div>
              <h3 className="card-title-20">Right-Click to Craft</h3>
              <p className="card-description-14">
                All Slimefun crafting stations require a right-click on the TOP block (not the dispenser/dropper below). Make sure you're clicking the correct block!
              </p>
            </div>

            <div className="card">
              <div className="icon-48 icon-center">📦</div>
              <h3 className="card-title-20">Use Dispensers/Droppers</h3>
              <p className="card-description-14">
                Items are placed in the dispenser/dropper below the station. Arrange them in the correct pattern, then right-click the top block to craft.
              </p>
            </div>

            <div className="card">
              <div className="icon-48 icon-center">🔍</div>
              <h3 className="card-title-20">Check the Guide Book</h3>
              <p className="card-description-14">
                Use /sf guide to see exact recipes in-game. Hover over items to see their recipes and which station is required to craft them.
              </p>
            </div>

            <div className="card">
              <div className="icon-48 icon-center">⚡</div>
              <h3 className="card-title-20">Ore Processing Chain</h3>
              <p className="card-description-14">
                For maximum efficiency: Ore → Ore Crusher (2x dust) → Ore Washer (purified) → Smeltery (ingot). This gives you double ores!
              </p>
            </div>

            <div className="card">
              <div className="icon-48 icon-center">🔨</div>
              <h3 className="card-title-20">Build Multiple Stations</h3>
              <p className="card-description-14">
                You can have multiple of the same station! Build several Enhanced Crafting Tables to craft multiple items simultaneously.
              </p>
            </div>

            <div className="card">
              <div className="icon-48 icon-center">🎓</div>
              <h3 className="card-title-20">Research First!</h3>
              <p className="card-description-14">
                Most recipes require research before you can craft them. Unlock researches with /sf research or by clicking items in your guide book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            📋 Quick Reference Chart
          </h2>

          <div className="card">
            <h3 className="card-title mb-24">Station Setup Combinations</h3>
            <div className="grid grid-2">
              <div>
                <h4 className="text-gold mb-16 border-bottom-orange">Basic Stations (No Power)</h4>
                <div className="command-list">
                  <div className="command-item">
                    <div className="command-name">Crafting Table + Dispenser</div>
                    <div className="command-description">= Enhanced Crafting Table</div>
                  </div>
                  <div className="command-item">
                    <div className="command-name">Oak Fence + Dispenser</div>
                    <div className="command-description">= Grind Stone</div>
                  </div>
                  <div className="command-item">
                    <div className="command-name">Anvil + Dispenser</div>
                    <div className="command-description">= Armor Forge</div>
                  </div>
                  <div className="command-item">
                    <div className="command-name">Nether Brick Fence + Dispenser</div>
                    <div className="command-description">= Ore Crusher</div>
                  </div>
                  <div className="command-item">
                    <div className="command-name">Nether Brick Fence + Dropper</div>
                    <div className="command-description">= Smeltery</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-gold mb-16 border-bottom-orange">Advanced Stations</h4>
                <div className="command-list">
                  <div className="command-item">
                    <div className="command-name">Nether Brick Stairs + Dropper</div>
                    <div className="command-description">= Compressor</div>
                  </div>
                  <div className="command-item">
                    <div className="command-name">Glass + Dispenser</div>
                    <div className="command-description">= Pressure Chamber</div>
                  </div>
                  <div className="command-item">
                    <div className="command-name">Bookshelf + Dispenser</div>
                    <div className="command-description">= Magic Workbench</div>
                  </div>
                  <div className="command-item">
                    <div className="command-name">Oak Fence + Dropper</div>
                    <div className="command-description">= Ore Washer</div>
                  </div>
                  <div className="command-item">
                    <div className="command-name">Stone Brick + Dropper</div>
                    <div className="command-description">= Composter (Food)</div>
                  </div>
                </div>
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
              <Link href="/smp/wiki/slimefun-guide" className="footer-link footer-link-orange">
                ← Slimefun Guide
              </Link>
              <Link href="/smp/wiki/machines" className="footer-link footer-link-green">
                Machines Guide →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Master crafting and start your Slimefun adventure!
          </p>
        </div>
      </footer>
    </div>
  )
}
