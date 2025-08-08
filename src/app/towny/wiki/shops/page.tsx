import Link from "next/link"

export default function ShopsGuide() {
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
                🏪
              </div>
              <div>
                <h1 className="nav-title">Shop System</h1>
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
            🏪 Shop System
          </h1>
          <p className="hero-description">
            Master the art of commerce and build your trading empire through automated shops and player markets.
          </p>
        </div>
      </section>

      {/* Shop Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🛍️ Understanding Shop Systems
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎯 Shop Types</h3>
              <p className="card-description mb-16">
                Different shop systems available on the server.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>ChestShop:</strong> Physical chest-based shops</div>
                <div className="mb-8">• <strong>QuickShop:</strong> Click-based shop creation</div>
                <div className="mb-8">• <strong>Player Markets:</strong> Dedicated trading areas</div>
                <div className="mb-8">• <strong>Auction House:</strong> Server-wide bidding system</div>
                <div className="mb-8">• <strong>Admin Shops:</strong> Server-run essential goods</div>
                <div className="mb-8">• <strong>Specialty Shops:</strong> Unique item vendors</div>
                <div className="mb-8">• <strong>Rental Shops:</strong> Temporary shop spaces</div>
                <div className="mb-8">• <strong>Mobile Shops:</strong> Traveling merchants</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ Essential Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/qs create [price]</div>
                  <div className="command-description">Create a QuickShop</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/qs buy [price]</div>
                  <div className="command-description">Create a buying shop</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/qs price [price]</div>
                  <div className="command-description">Change shop price</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/qs remove</div>
                  <div className="command-description">Remove your shop</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/qs find [item]</div>
                  <div className="command-description">Find item shops</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creating Shops */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🏗️ Creating Your First Shop
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📋 ChestShop Creation</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Step 1:</strong> Place a chest in your plot</div>
                <div className="mb-8">• <strong>Step 2:</strong> Place a sign on or near the chest</div>
                <div className="mb-8">• <strong>Step 3:</strong> Write shop sign format:</div>
                <div className="mb-8">• Line 1: [Your Username]</div>
                <div className="mb-8">• Line 2: [Quantity]</div>
                <div className="mb-8">• Line 3: [Buy Price]:[Sell Price]</div>
                <div className="mb-8">• Line 4: [Item Name or ID]</div>
                <div className="mb-8">• <strong>Step 4:</strong> Stock the chest with items</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ QuickShop Creation</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Step 1:</strong> Hold the item you want to sell</div>
                <div className="mb-8">• <strong>Step 2:</strong> Left-click a chest</div>
                <div className="mb-8">• <strong>Step 3:</strong> Type the price in chat</div>
                <div className="mb-8">• <strong>Step 4:</strong> Shop is created automatically!</div>
                <div className="mb-8">• <strong>Benefits:</strong> Holographic displays</div>
                <div className="mb-8">• <strong>Features:</strong> Easy price changes</div>
                <div className="mb-8">• <strong>Management:</strong> Advanced shop controls</div>
                <div className="mb-8">• <strong>Security:</strong> Built-in protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Management */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🛠️ Shop Management
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">📦 Stock Management</h3>
              <p className="card-description mb-16">
                Keep your shops well-stocked and profitable.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Check stock levels regularly</div>
                <div className="mb-8">• Restock popular items quickly</div>
                <div className="mb-8">• Remove slow-moving inventory</div>
                <div className="mb-8">• Monitor competitor prices</div>
                <div className="mb-8">• Track sales patterns</div>
                <div className="mb-8">• Plan seasonal inventory</div>
                <div className="mb-8">• Maintain quality standards</div>
                <div className="mb-8">• Optimize storage space</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💰 Price Optimization</h3>
              <p className="card-description mb-16">
                Set competitive prices for maximum profit.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Research current market prices</div>
                <div className="mb-8">• Adjust for supply and demand</div>
                <div className="mb-8">• Consider location premium</div>
                <div className="mb-8">• Update seasonal pricing</div>
                <div className="mb-8">• Factor in acquisition costs</div>
                <div className="mb-8">• Account for time investment</div>
                <div className="mb-8">• Monitor profit margins</div>
                <div className="mb-8">• Respond to market changes</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔒 Shop Security</h3>
              <p className="card-description mb-16">
                Protect your shops from theft and griefing.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Place shops in protected town areas</div>
                <div className="mb-8">• Use plot permissions correctly</div>
                <div className="mb-8">• Keep valuable stock secure</div>
                <div className="mb-8">• Monitor shop activity logs</div>
                <div className="mb-8">• Report suspicious transactions</div>
                <div className="mb-8">• Use trusted staff members</div>
                <div className="mb-8">• Backup important data</div>
                <div className="mb-8">• Install security measures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Strategies */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🎯 Advanced Shop Strategies
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📊 Market Analysis</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Price Trends:</strong> Track prices over time</div>
                <div className="mb-8">• <strong>Peak Hours:</strong> Identify busy trading times</div>
                <div className="mb-8">• <strong>Competition:</strong> Monitor rival shop strategies</div>
                <div className="mb-8">• <strong>Customer Behavior:</strong> Analyze buying patterns</div>
                <div className="mb-8">• <strong>Seasonal Demand:</strong> Plan for events and holidays</div>
                <div className="mb-8">• <strong>Supply Chains:</strong> Understand resource flows</div>
                <div className="mb-8">• <strong>Economic Indicators:</strong> Watch server economy</div>
                <div className="mb-8">• <strong>Profit Margins:</strong> Calculate true profitability</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🌐 Shop Networks</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Multiple Locations:</strong> Expand to different areas</div>
                <div className="mb-8">• <strong>Specialization:</strong> Focus different shops</div>
                <div className="mb-8">• <strong>Partnerships:</strong> Collaborate with other merchants</div>
                <div className="mb-8">• <strong>Supply Chains:</strong> Build resource networks</div>
                <div className="mb-8">• <strong>Brand Building:</strong> Develop shop reputation</div>
                <div className="mb-8">• <strong>Customer Service:</strong> Provide excellent support</div>
                <div className="mb-8">• <strong>Innovation:</strong> Offer unique products</div>
                <div className="mb-8">• <strong>Expansion:</strong> Scale operations efficiently</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🔧 Troubleshooting Common Issues
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">❌ Common Problems</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Shop Won't Create:</strong> Check plot permissions</div>
                <div className="mb-8">• <strong>No Transactions:</strong> Verify stock and pricing</div>
                <div className="mb-8">• <strong>Shop Disappeared:</strong> Check for plot issues</div>
                <div className="mb-8">• <strong>Wrong Prices:</strong> Update sign format</div>
                <div className="mb-8">• <strong>Access Denied:</strong> Review permissions</div>
                <div className="mb-8">• <strong>Items Missing:</strong> Check for theft</div>
                <div className="mb-8">• <strong>Sign Errors:</strong> Verify syntax</div>
                <div className="mb-8">• <strong>Plugin Conflicts:</strong> Report to staff</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💡 Solutions</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Permission Issues:</strong> Contact town mayor</div>
                <div className="mb-8">• <strong>Technical Problems:</strong> Use /helpop command</div>
                <div className="mb-8">• <strong>Pricing Help:</strong> Ask experienced merchants</div>
                <div className="mb-8">• <strong>Security Concerns:</strong> Report to staff</div>
                <div className="mb-8">• <strong>Plugin Bugs:</strong> Submit bug reports</div>
                <div className="mb-8">• <strong>Market Questions:</strong> Join Discord discussions</div>
                <div className="mb-8">• <strong>Training Needed:</strong> Attend shop workshops</div>
                <div className="mb-8">• <strong>Complex Issues:</strong> Schedule staff consultation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            💡 Shop Success Tips
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Best Practices</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Start small and grow gradually</div>
                <div className="mb-8">• Focus on quality over quantity</div>
                <div className="mb-8">• Build customer relationships</div>
                <div className="mb-8">• Maintain consistent stock</div>
                <div className="mb-8">• Offer competitive prices</div>
                <div className="mb-8">• Provide excellent service</div>
                <div className="mb-8">• Stay active and responsive</div>
                <div className="mb-8">• Continuously improve operations</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">❌ Common Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Setting prices too high or too low</div>
                <div className="mb-8">• Neglecting stock management</div>
                <div className="mb-8">• Ignoring customer feedback</div>
                <div className="mb-8">• Poor shop location choices</div>
                <div className="mb-8">• Inadequate security measures</div>
                <div className="mb-8">• Inconsistent availability</div>
                <div className="mb-8">• Not adapting to market changes</div>
                <div className="mb-8">• Overexpanding too quickly</div>
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
              <Link href="/towny/wiki/nation-benefits" className="footer-link footer-link-orange">
                ← Nation Benefits
              </Link>
              <Link href="/towny/wiki/trading" className="footer-link footer-link-green">
                Trading Guide →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Build your trading empire!
          </p>
        </div>
      </footer>
    </div>
  )
}
