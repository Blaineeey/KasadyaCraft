import Link from "next/link"
import Shell from "@/components/Shell"

export default function MachinesGuidePage() {
  const machineCategories = [
    {
      category: "Basic Machines",
      color: "var(--accent)",
      icon: "",
      machines: [
        {
          name: "Electric Ore Grinder",
          tier: "I, II, III",
          energy: "6 J/s",
          speed: "1x, 2x, 10x",
          description: "Grinds ores into dusts automatically. Higher tiers are faster.",
          inputs: "Any ore",
          outputs: "2x corresponding dust"
        },
        {
          name: "Electric Gold Pan",
          tier: "I, II, III",
          energy: "2 J/s",
          speed: "1x, 3x, 10x",
          description: "Automatically pans gravel and soul sand for resources.",
          inputs: "Gravel, Soul Sand",
          outputs: "Flint, clay, ores, nuggets"
        },
        {
          name: "Electric Dust Washer",
          tier: "I, II, III",
          energy: "6 J/s",
          speed: "1x, 2x, 10x",
          description: "Washes sifted ore for pure dusts.",
          inputs: "Sifted ore",
          outputs: "Pure dust"
        },
        {
          name: "Electric Ingot Factory",
          tier: "I, II, III",
          energy: "10 J/s",
          speed: "1x, 2x, 10x",
          description: "Smelts dusts into ingots automatically.",
          inputs: "Any dust",
          outputs: "Corresponding ingot"
        }
      ]
    },
    {
      category: "Production Machines",
      color: "var(--accent)",
      icon: "",
      machines: [
        {
          name: "Auto Crafter",
          tier: "Single",
          energy: "10 J/s",
          speed: "Standard",
          description: "Automatically crafts vanilla recipes when items are piped in.",
          inputs: "Crafting ingredients",
          outputs: "Crafted items"
        },
        {
          name: "Food Fabricator",
          tier: "I, II, III",
          energy: "14 J/s",
          speed: "1x, 6x, 10x",
          description: "Produces food items from organic materials.",
          inputs: "Wheat, seeds, organic matter",
          outputs: "Food items"
        },
        {
          name: "Freezer",
          tier: "I, II, III",
          energy: "9 J/s",
          speed: "1x, 2x, 3x",
          description: "Freezes water and creates ice/snow.",
          inputs: "Water bucket, snow",
          outputs: "Ice, packed ice, coolant"
        },
        {
          name: "Carbon Press",
          tier: "I, II, III",
          energy: "7 J/s",
          speed: "1x, 2x, 3x",
          description: "Compresses carbon into various forms.",
          inputs: "Coal, carbon",
          outputs: "Compressed carbon, diamonds"
        }
      ]
    },
    {
      category: "Advanced Machines",
      color: "var(--beta)",
      icon: "",
      machines: [
        {
          name: "Electric Smeltery",
          tier: "I, II",
          energy: "10 J/s",
          speed: "1x, 2x",
          description: "Automatically creates alloys and smelts items.",
          inputs: "Multiple metals/dusts",
          outputs: "Alloy ingots"
        },
        {
          name: "Electric Press",
          tier: "I, II",
          energy: "7 J/s",
          speed: "1x, 2x",
          description: "Presses items into plates and compressed forms.",
          inputs: "Ingots, materials",
          outputs: "Plates, compressed items"
        },
        {
          name: "Heated Pressure Chamber",
          tier: "I, II",
          energy: "10 J/s",
          speed: "1x, 2x",
          description: "High-pressure, high-temperature processing.",
          inputs: "Advanced materials",
          outputs: "Refined components"
        },
        {
          name: "Refinery",
          tier: "Single",
          energy: "18 J/s",
          speed: "Standard",
          description: "Refines oil into fuel for generators.",
          inputs: "Oil bucket",
          outputs: "Fuel bucket"
        }
      ]
    },
    {
      category: "Special Machines",
      color: "var(--text-2)",
      icon: "",
      machines: [
        {
          name: "Automated Panning Machine",
          tier: "Single",
          energy: "5 J/s",
          speed: "Standard",
          description: "Automatically pans for resources.",
          inputs: "Gravel, soul sand",
          outputs: "Various ores and materials"
        },
        {
          name: "Produce Collector",
          tier: "Single",
          energy: "12 J/s",
          speed: "Standard",
          description: "Automatically harvests nearby crops.",
          inputs: "Adjacent crops",
          outputs: "Harvested crops"
        },
        {
          name: "Animal Growth Accelerator",
          tier: "Single",
          energy: "28 J/s",
          speed: "Standard",
          description: "Speeds up animal growth nearby.",
          inputs: "Energy",
          outputs: "Faster animal maturation"
        },
        {
          name: "Crop Growth Accelerator",
          tier: "I, II",
          energy: "25 J/s",
          speed: "1x, 3x",
          description: "Accelerates crop growth in a 7x7 area.",
          inputs: "Energy",
          outputs: "Faster crop growth"
        }
      ]
    }
  ]

  return (
    <Shell>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/games/minecraft">Minecraft</Link>
            <span>/</span>
            <Link href="/games/minecraft/wiki">Wiki</Link>
          </div>
          <h1 className="display">
             Slimefun Machines
          </h1>
          <p className="lead">
            Complete guide to all electric machines, from basic ore processing to advanced automation!
          </p>

          <div className="hero-info-box">
            <h3 className="hero-box-title hero-box-title-info">All machines require energy!</h3>
            <p className="hero-box-text mb-0">
              Connect machines to an Energy Regulator to power them. Check the Energy Guide for setup instructions.
            </p>
          </div>
        </div>
      </section>

      {/* Machine Categories */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
             All Electric Machines
          </h2>

          {machineCategories.map((category, catIndex) =>(
            <div key={catIndex} className="mb-32">
              <div className="flex"style={{alignItems: 'center', gap: '16px', marginBottom: '24px'}}>
                <span style={{fontSize: '3rem'}}>{category.icon}</span>
                <h3 className="card-title"style={{marginBottom: 0, color: category.color}}>{category.category}</h3>
              </div>

              <div className="grid grid-2">
                {category.machines.map((machine, machineIndex) =>(
                  <div key={machineIndex} className="card">
                    <div className="flex"style={{justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                      <h4 className="text-green"style={{fontSize: '1.15rem', fontWeight: '700', marginBottom: 0}}>{machine.name}</h4>
                      <span style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        background: 'rgba(94, 176, 255, 0.2)',
                        color: 'var(--beta)',
                        border: '1px solid rgba(94, 176, 255, 0.4)',
                        whiteSpace: 'nowrap'
                      }}>
                        Tier {machine.tier}
                      </span>
                    </div>

                    <p className="card-description-14 mb-16">{machine.description}</p>

                    <div className="grid grid-2 mb-16"style={{gap: '8px'}}>
                      <div style={{
                        padding: '8px',
                        borderRadius: '8px',
                        background: 'rgba(245, 179, 36, 0.1)',
                        border: '1px solid rgba(245, 179, 36, 0.3)'
                      }}>
                        <div className="text-gold"style={{fontSize: '0.75rem', fontWeight: '600', marginBottom: '4px'}}>Energy</div>
                        <div className="text-white"style={{fontSize: '0.85rem', fontWeight: '600'}}>{machine.energy}</div>
                      </div>
                      <div style={{
                        padding: '8px',
                        borderRadius: '8px',
                        background: 'rgba(245, 179, 36, 0.1)',
                        border: '1px solid rgba(245, 179, 36, 0.3)'
                      }}>
                        <div className="text-green"style={{fontSize: '0.75rem', fontWeight: '600', marginBottom: '4px'}}>Speed</div>
                        <div className="text-white"style={{fontSize: '0.85rem', fontWeight: '600'}}>{machine.speed}</div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="text-gray mb-4"style={{fontSize: '0.8rem', fontWeight: '600'}}>Inputs:</div>
                      <div className="text-light-gray"style={{fontSize: '0.85rem'}}>{machine.inputs}</div>
                    </div>

                    <div>
                      <div className="text-gray mb-4"style={{fontSize: '0.8rem', fontWeight: '600'}}>Outputs:</div>
                      <div className="text-light-gray"style={{fontSize: '0.85rem'}}>{machine.outputs}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Machine Tiers */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
             Understanding Machine Tiers
          </h2>

          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">Tier I</h3>
              <div style={{fontSize: '2.5rem', marginBottom: '16px'}}></div>
              <p className="card-description-14 mb-12">
                <strong className="text-green">Entry Level</strong>
              </p>
              <div className="text-14"style={{color: 'var(--text-2)'}}>
                <div className="mb-4">• Slowest processing speed</div>
                <div className="mb-4">• Lowest energy consumption</div>
                <div className="mb-4">• Perfect for beginners</div>
                <div>• Affordable to build</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">Tier II</h3>
              <div style={{fontSize: '2.5rem', marginBottom: '16px'}}></div>
              <p className="card-description-14 mb-12">
                <strong className="text-gold">Mid Level</strong>
              </p>
              <div className="text-14"style={{color: 'var(--text-2)'}}>
                <div className="mb-4">• 2-3x faster than Tier I</div>
                <div className="mb-4">• Moderate energy use</div>
                <div className="mb-4">• Good for scaling up</div>
                <div>• Requires better materials</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">Tier III</h3>
              <div style={{fontSize: '2.5rem', marginBottom: '16px'}}></div>
              <p className="card-description-14 mb-12">
                <strong className="text-blue">End Game</strong>
              </p>
              <div className="text-14"style={{color: 'var(--text-2)'}}>
                <div className="mb-4">• 10x faster processing!</div>
                <div className="mb-4">• High energy consumption</div>
                <div className="mb-4">• Maximum efficiency</div>
                <div>• Expensive components</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
             Machine Setup Guide
          </h2>

          <div className="card mb-24">
            <h3 className="card-title mb-24">Step-by-Step Setup Process</h3>
            <div className="grid grid-2">
              <div className="card"style={{background: 'var(--bg-raised)'}}>
                <div style={{fontSize: '2rem', marginBottom: '12px'}}>1</div>
                <h4 className="text-green mb-8">Place Energy Regulator</h4>
                <p className="text-14"style={{color: 'var(--text-2)'}}>
                  This is the core of your power network. All machines must be within range of a regulator.
                </p>
              </div>

              <div className="card"style={{background: 'var(--bg-raised)'}}>
                <div style={{fontSize: '2rem', marginBottom: '12px'}}>2</div>
                <h4 className="text-green mb-8">Connect Generators</h4>
                <p className="text-14"style={{color: 'var(--text-2)'}}>
                  Place generators within 7 blocks of the regulator. They will automatically connect and provide power.
                </p>
              </div>

              <div className="card"style={{background: 'var(--bg-raised)'}}>
                <div style={{fontSize: '2rem', marginBottom: '12px'}}>3</div>
                <h4 className="text-green mb-8">Add Capacitors (Optional)</h4>
                <p className="text-14"style={{color: 'var(--text-2)'}}>
                  Capacitors store excess energy and extend your network range. Place them within range of the regulator.
                </p>
              </div>

              <div className="card"style={{background: 'var(--bg-raised)'}}>
                <div style={{fontSize: '2rem', marginBottom: '12px'}}>4</div>
                <h4 className="text-green mb-8">Place Machines</h4>
                <p className="text-14"style={{color: 'var(--text-2)'}}>
                  Place electric machines within range. They will automatically connect to the network and start working!
                </p>
              </div>
            </div>
          </div>

          <div className="tip-box">
            <strong className="text-gold">Pro Tip:</strong>
            <p className="text-14 mb-0"style={{color: 'var(--text)'}}>
              Right-click the Energy Regulator to see network info: connected machines, energy generation, and consumption!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container">
        <nav className="wiki-nav"aria-label="Wiki pages">
              <Link href="/games/minecraft/wiki/crafting">
                ← Crafting Guide
              </Link>
              <Link href="/games/minecraft/wiki/energy">
                Energy Guide →
              </Link>
            </nav>
      </div>
    </Shell>
  )
}
