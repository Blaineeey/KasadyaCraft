import Link from "next/link"

export default function PlotsPage() {
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
                🏗️
              </div>
              <div>
                <h1 className="nav-title">Plot System Guide</h1>
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
            🏗️ Plot System Guide
          </h1>
          <p className="hero-description">
            Master the plot system to organize your town, generate income, and give residents their own spaces to build and thrive.
          </p>
        </div>
      </section>

      {/* Plot Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            📐 Understanding Plots
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎯 What are Plots?</h3>
              <p className="card-description mb-16">
                Plots are subdivisions of your town's claimed chunks that can be owned by individual residents.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Plots are created within claimed town chunks</div>
                <div className="mb-8">• Each chunk can contain multiple plots</div>
                <div className="mb-8">• Residents can own and customize their plots</div>
                <div className="mb-8">• Plot owners have exclusive building rights</div>
                <div className="mb-8">• Plots can be bought, sold, and rented</div>
                <div className="mb-8">• Different plot types have special properties</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💰 Plot Economy</h3>
              <p className="card-description mb-16">
                Plots are a major source of income for towns and provide residents with personal space.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Mayors set plot prices</div>
                <div className="mb-8">• Residents buy plots with their own money</div>
                <div className="mb-8">• Plot sales go to the town bank</div>
                <div className="mb-8">• Residents can resell their plots</div>
                <div className="mb-8">• Different plot types have different values</div>
                <div className="mb-8">• Location affects plot desirability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creating Plots */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🏠 Creating and Managing Plots
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">⚡ Plot Creation Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/plot claim</div>
                  <div className="command-description">Claim a plot as a resident</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/plot unclaim</div>
                  <div className="command-description">Give up ownership of your plot</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/plot forsale [price]</div>
                  <div className="command-description">Put your plot up for sale</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/plot notforsale</div>
                  <div className="command-description">Remove plot from sale</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/plot evict</div>
                  <div className="command-description">Mayor can evict plot owner</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🎨 Plot Customization</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/plot set [type]</div>
                  <div className="command-description">Set plot type (shop, embassy, etc.)</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/plot toggle [setting]</div>
                  <div className="command-description">Change plot permissions</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/plot set name [name]</div>
                  <div className="command-description">Give your plot a custom name</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/plot set perm [setting]</div>
                  <div className="command-description">Set plot permissions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Types */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🏪 Plot Types & Special Properties
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏠 Residential</h3>
              <p className="card-description mb-16">
                Standard plots for residents to build homes and personal projects.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Default plot type</div>
                <div className="mb-8">• Only owner can build</div>
                <div className="mb-8">• Private access by default</div>
                <div className="mb-8">• Perfect for homes and personal builds</div>
                <div className="mb-8">• Can be customized with permissions</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🏪 Shop</h3>
              <p className="card-description mb-16">
                Commercial plots where anyone can interact with shops and services.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Anyone can use switches and items</div>
                <div className="mb-8">• Perfect for chest shops</div>
                <div className="mb-8">• Visitors can interact with shop features</div>
                <div className="mb-8">• Higher plot prices recommended</div>
                <div className="mb-8">• Great for town commercial districts</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🏛️ Embassy</h3>
              <p className="card-description mb-16">
                Special plots that can be owned by players from other towns.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Foreigners can own these plots</div>
                <div className="mb-8">• Promotes inter-town relationships</div>
                <div className="mb-8">• Owners don't become town residents</div>
                <div className="mb-8">• Good for diplomatic buildings</div>
                <div className="mb-8">• Can be used for foreign businesses</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚔️ Arena</h3>
              <p className="card-description mb-16">
                PvP-enabled plots for combat and competitions.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• PvP enabled regardless of town setting</div>
                <div className="mb-8">• Perfect for tournaments</div>
                <div className="mb-8">• Can host combat events</div>
                <div className="mb-8">• Players can fight safely</div>
                <div className="mb-8">• Great for town entertainment</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🌲 Wilds</h3>
              <p className="card-description mb-16">
                Plots that behave like wilderness areas.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Anyone can build and destroy</div>
                <div className="mb-8">• Behaves like unclaimed land</div>
                <div className="mb-8">• Good for public gathering areas</div>
                <div className="mb-8">• Can be used for community projects</div>
                <div className="mb-8">• No protection from griefing</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🏨 Inn</h3>
              <p className="card-description mb-16">
                Hospitality plots where visitors can set their spawn.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Outsiders can set spawn here</div>
                <div className="mb-8">• Perfect for hotels and inns</div>
                <div className="mb-8">• Promotes tourism to your town</div>
                <div className="mb-8">• Can charge for spawn services</div>
                <div className="mb-8">• Great for welcoming visitors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Pricing */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            💵 Plot Pricing Strategy
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📊 Setting Prices</h3>
              <div className="command-list mb-16">
                <div className="command-item">
                  <div className="command-name">/town set plotprice [price]</div>
                  <div className="command-description">Set default plot price</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set shopprice [price]</div>
                  <div className="command-description">Set shop plot price</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set embassyprice [price]</div>
                  <div className="command-description">Set embassy plot price</div>
                </div>
              </div>
              <div className="text-gray text-14">
                <div className="mb-8">• Consider your residents' wealth levels</div>
                <div className="mb-8">• Prime locations should cost more</div>
                <div className="mb-8">• Shop plots typically cost 2-3x residential</div>
                <div className="mb-8">• Embassy plots can be premium priced</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💡 Pricing Guidelines</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Residential:</strong> $50-200 per plot</div>
                <div className="mb-8">• <strong>Shop:</strong> $150-500 per plot</div>
                <div className="mb-8">• <strong>Embassy:</strong> $200-1000 per plot</div>
                <div className="mb-8">• <strong>Arena:</strong> $100-300 per plot</div>
                <div className="mb-8">• <strong>Inn:</strong> $100-400 per plot</div>
                <div className="mb-8">• Adjust based on location and demand</div>
                <div className="mb-8">• Consider offering payment plans</div>
                <div className="mb-8">• Review and adjust prices regularly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Management Tips */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            💡 Plot Management Tips
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Best Practices</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Plan your town layout before creating plots</div>
                <div className="mb-8">• Leave space for roads and public areas</div>
                <div className="mb-8">• Create different districts for different plot types</div>
                <div className="mb-8">• Set clear building guidelines for plot owners</div>
                <div className="mb-8">• Regularly check on plot development</div>
                <div className="mb-8">• Offer help to new plot owners</div>
                <div className="mb-8">• Create attractive public spaces between plots</div>
                <div className="mb-8">• Consider plot size variety for different needs</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚠️ Common Issues</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Plots too expensive for residents to afford</div>
                <div className="mb-8">• Poor town layout making plots undesirable</div>
                <div className="mb-8">• Residents abandoning plots after purchase</div>
                <div className="mb-8">• Conflicts over plot boundaries</div>
                <div className="mb-8">• Inappropriate builds on plots</div>
                <div className="mb-8">• Residents not understanding plot permissions</div>
                <div className="mb-8">• Lack of variety in plot types and sizes</div>
                <div className="mb-8">• No clear guidelines for plot development</div>
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
              <Link href="/towny/wiki/residents" className="footer-link footer-link-orange">
                ← Managing Residents
              </Link>
              <Link href="/towny/wiki/banking" className="footer-link footer-link-green">
                Town Banking →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Create the perfect town layout!
          </p>
        </div>
      </footer>
    </div>
  )
}
