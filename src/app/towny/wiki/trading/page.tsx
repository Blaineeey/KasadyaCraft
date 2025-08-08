import Link from "next/link"

export default function TradingGuide() {
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
                💰
              </div>
              <div>
                <h1 className="nav-title">Trading & Commerce</h1>
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
            💰 Trading & Commerce Guide
          </h1>
          <p className="hero-description">
            Master the art of trade and build profitable business relationships through player-to-player commerce.
          </p>
        </div>
      </section>

      {/* Trading Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            📚 Trading Fundamentals
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🤝 Trade Types</h3>
              <p className="card-description mb-16">
                Different methods of conducting player-to-player commerce.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Direct Trading:</strong> Face-to-face item exchanges</div>
                <div className="mb-8">• <strong>Market Trading:</strong> Shop-based commerce</div>
                <div className="mb-8">• <strong>Auction Trading:</strong> Public bidding system</div>
                <div className="mb-8">• <strong>Contract Trading:</strong> Long-term agreements</div>
                <div className="mb-8">• <strong>Barter Trading:</strong> Item-for-item exchanges</div>
                <div className="mb-8">• <strong>Service Trading:</strong> Labor and skill exchanges</div>
                <div className="mb-8">• <strong>Bulk Trading:</strong> Large quantity transactions</div>
                <div className="mb-8">• <strong>Specialty Trading:</strong> Rare and unique items</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ Essential Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/trade [player]</div>
                  <div className="command-description">Request trade with player</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/trade accept</div>
                  <div className="command-description">Accept trade request</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/trade deny</div>
                  <div className="command-description">Deny trade request</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/pay [player] [amount]</div>
                  <div className="command-description">Send money to player</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/balance</div>
                  <div className="command-description">Check your money</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Methods */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            🔄 Trading Methods
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🔒 Secure Trading</h3>
              <p className="card-description mb-16">
                Use the built-in trade system for maximum security.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Send trade request to player</div>
                <div className="mb-8">• Both players add items to window</div>
                <div className="mb-8">• Review items carefully</div>
                <div className="mb-8">• Both players confirm trade</div>
                <div className="mb-8">• Items exchanged automatically</div>
                <div className="mb-8">• Transaction logged by server</div>
                <div className="mb-8">• No risk of scamming</div>
                <div className="mb-8">• Instant completion</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📦 Chest Trading</h3>
              <p className="card-description mb-16">
                For larger or delayed transactions using storage.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Use locked chests in neutral areas</div>
                <div className="mb-8">• Set access permissions for both parties</div>
                <div className="mb-8">• Include written agreements in books</div>
                <div className="mb-8">• Use staff as witnesses for large trades</div>
                <div className="mb-8">• Schedule pickup times</div>
                <div className="mb-8">• Verify contents before payment</div>
                <div className="mb-8">• Document all transactions</div>
                <div className="mb-8">• Clear permissions after completion</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🎯 Auction Trading</h3>
              <p className="card-description mb-16">
                Public bidding for competitive pricing.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Announce auctions in trade chat</div>
                <div className="mb-8">• Set minimum bid amounts</div>
                <div className="mb-8">• Establish clear time limits</div>
                <div className="mb-8">• Use neutral locations for viewing</div>
                <div className="mb-8">• Accept highest valid bid</div>
                <div className="mb-8">• Provide item inspection time</div>
                <div className="mb-8">• Handle payment securely</div>
                <div className="mb-8">• Maintain auction records</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Routes */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🗺️ Establishing Trade Routes
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📍 Route Planning</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Resource Mapping:</strong> Identify resource-rich towns</div>
                <div className="mb-8">• <strong>Transportation:</strong> Plan efficient travel routes</div>
                <div className="mb-8">• <strong>Cost Analysis:</strong> Calculate travel costs and time</div>
                <div className="mb-8">• <strong>Scheduling:</strong> Establish regular trading schedules</div>
                <div className="mb-8">• <strong>Relationships:</strong> Build connections with local merchants</div>
                <div className="mb-8">• <strong>Market Research:</strong> Study supply and demand patterns</div>
                <div className="mb-8">• <strong>Competition:</strong> Analyze other traders' routes</div>
                <div className="mb-8">• <strong>Optimization:</strong> Continuously improve efficiency</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏭 Specialty Markets</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Mining Towns:</strong> Raw materials and ores</div>
                <div className="mb-8">• <strong>Farming Towns:</strong> Food supplies and crops</div>
                <div className="mb-8">• <strong>Coastal Towns:</strong> Ocean resources and fish</div>
                <div className="mb-8">• <strong>Industrial Towns:</strong> Crafted goods and tools</div>
                <div className="mb-8">• <strong>Enchanted Items:</strong> Magical equipment and books</div>
                <div className="mb-8">• <strong>Building Materials:</strong> Rare blocks and decoratives</div>
                <div className="mb-8">• <strong>Custom Creations:</strong> Player-made unique items</div>
                <div className="mb-8">• <strong>Luxury Goods:</strong> High-value collectibles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Strategies */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🎯 Advanced Trading Strategies
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📊 Market Analysis</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Price Tracking:</strong> Monitor price trends over time</div>
                <div className="mb-8">• <strong>Supply Analysis:</strong> Study resource availability</div>
                <div className="mb-8">• <strong>Demand Patterns:</strong> Identify peak trading times</div>
                <div className="mb-8">• <strong>Competition Study:</strong> Analyze rival strategies</div>
                <div className="mb-8">• <strong>Seasonal Trends:</strong> Plan for events and updates</div>
                <div className="mb-8">• <strong>Economic Indicators:</strong> Watch server economy health</div>
                <div className="mb-8">• <strong>Arbitrage Opportunities:</strong> Exploit price differences</div>
                <div className="mb-8">• <strong>Investment Timing:</strong> Buy low, sell high strategies</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🌐 Trading Networks</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Supplier Relationships:</strong> Build reliable supply chains</div>
                <div className="mb-8">• <strong>Exclusive Agreements:</strong> Secure preferential deals</div>
                <div className="mb-8">• <strong>Trading Consortiums:</strong> Form merchant alliances</div>
                <div className="mb-8">• <strong>Information Networks:</strong> Share market intelligence</div>
                <div className="mb-8">• <strong>Mentorship Programs:</strong> Train loyal traders</div>
                <div className="mb-8">• <strong>Cross-Town Partnerships:</strong> Expand market reach</div>
                <div className="mb-8">• <strong>Reputation Building:</strong> Establish trusted brand</div>
                <div className="mb-8">• <strong>Innovation Leadership:</strong> Pioneer new trade methods</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🛡️ Trading Safety & Security
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">⚠️ Common Scams</h3>
              <p className="card-description mb-16">
                Recognize and avoid fraudulent trading practices.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Fake item switching during trades</div>
                <div className="mb-8">• Payment after delivery promises</div>
                <div className="mb-8">• Overpriced "rare" items</div>
                <div className="mb-8">• Fake staff impersonation</div>
                <div className="mb-8">• Ponzi scheme investments</div>
                <div className="mb-8">• Duplicate item claims</div>
                <div className="mb-8">• Pressure tactics for quick sales</div>
                <div className="mb-8">• False scarcity claims</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔒 Safety Measures</h3>
              <p className="card-description mb-16">
                Protect yourself from fraud and theft.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Always use secure trade plugins</div>
                <div className="mb-8">• Verify player reputation first</div>
                <div className="mb-8">• Keep screenshots of agreements</div>
                <div className="mb-8">• Trade in public, well-lit areas</div>
                <div className="mb-8">• Report suspicious behavior</div>
                <div className="mb-8">• Use staff mediation for large trades</div>
                <div className="mb-8">• Verify item authenticity</div>
                <div className="mb-8">• Trust your instincts</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚖️ Dispute Resolution</h3>
              <p className="card-description mb-16">
                Handle trading conflicts professionally.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Contact staff immediately</div>
                <div className="mb-8">• Provide evidence of agreements</div>
                <div className="mb-8">• Remain calm and professional</div>
                <div className="mb-8">• Follow server dispute procedures</div>
                <div className="mb-8">• Accept mediated solutions</div>
                <div className="mb-8">• Learn from the experience</div>
                <div className="mb-8">• Update safety practices</div>
                <div className="mb-8">• Share warnings with community</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Etiquette */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            🤝 Trading Etiquette & Best Practices
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Professional Conduct</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Be honest about item conditions</div>
                <div className="mb-8">• Honor all agreements made</div>
                <div className="mb-8">• Communicate clearly and promptly</div>
                <div className="mb-8">• Respect other traders' time</div>
                <div className="mb-8">• Build a positive reputation</div>
                <div className="mb-8">• Help new traders learn</div>
                <div className="mb-8">• Maintain fair pricing</div>
                <div className="mb-8">• Provide excellent customer service</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">❌ Avoid These Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Breaking agreed-upon deals</div>
                <div className="mb-8">• Misrepresenting item quality</div>
                <div className="mb-8">• Ignoring customer complaints</div>
                <div className="mb-8">• Engaging in price manipulation</div>
                <div className="mb-8">• Spreading false market information</div>
                <div className="mb-8">• Rushing important transactions</div>
                <div className="mb-8">• Neglecting relationship building</div>
                <div className="mb-8">• Failing to adapt to market changes</div>
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
              <Link href="/towny/wiki/shops" className="footer-link footer-link-orange">
                ← Shop System
              </Link>
              <Link href="/towny/wiki/economy" className="footer-link footer-link-green">
                Economy Guide →
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
