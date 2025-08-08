import Link from "next/link"

export default function AuctionGuide() {
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
                🏛️
              </div>
              <div>
                <h1 className="nav-title">Auction House</h1>
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
            🏛️ Auction House Guide
          </h1>
          <p className="hero-description">
            Buy and sell items through competitive bidding and instant sales in the server's central marketplace.
          </p>
        </div>
      </section>

      {/* Auction Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            📚 Auction House Basics
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎯 Auction Types</h3>
              <p className="card-description mb-16">
                Different ways to buy and sell in the auction house.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Bidding Auctions:</strong> Players compete with increasing bids</div>
                <div className="mb-8">• <strong>Buy It Now:</strong> Fixed price instant purchases</div>
                <div className="mb-8">• <strong>Reserve Auctions:</strong> Minimum price must be met</div>
                <div className="mb-8">• <strong>Dutch Auctions:</strong> Price decreases over time</div>
                <div className="mb-8">• <strong>Bulk Auctions:</strong> Multiple items in one lot</div>
                <div className="mb-8">• <strong>Timed Auctions:</strong> Set duration bidding periods</div>
                <div className="mb-8">• <strong>Silent Auctions:</strong> Hidden bid amounts</div>
                <div className="mb-8">• <strong>Proxy Bidding:</strong> Automatic bid increases</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ Essential Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/ah</div>
                  <div className="command-description">Open auction house GUI</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/ah sell [price]</div>
                  <div className="command-description">Sell held item</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/ah selling</div>
                  <div className="command-description">View your active auctions</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/ah expired</div>
                  <div className="command-description">Check expired auctions</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/ah search [item]</div>
                  <div className="command-description">Search for specific items</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auction Fees & Interface */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-red">
            💰 Fees & Interface
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">💸 Auction Fees</h3>
              <p className="card-description mb-16">
                Understanding the costs of using the auction house.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Listing fee: 2% of starting price</div>
                <div className="mb-8">• Success fee: 5% of final sale price</div>
                <div className="mb-8">• Fees are non-refundable</div>
                <div className="mb-8">• Higher value items may have different rates</div>
                <div className="mb-8">• Premium listings cost extra</div>
                <div className="mb-8">• Bulk listing discounts available</div>
                <div className="mb-8">• VIP members get reduced fees</div>
                <div className="mb-8">• Calculate fees before listing</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🖥️ Interface Navigation</h3>
              <p className="card-description mb-16">
                Master the auction house user interface.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Browse by category tabs</div>
                <div className="mb-8">• Sort by price, time, popularity</div>
                <div className="mb-8">• Filter by item type and rarity</div>
                <div className="mb-8">• Search with specific keywords</div>
                <div className="mb-8">• View detailed item information</div>
                <div className="mb-8">• Check seller reputation</div>
                <div className="mb-8">• Monitor bidding history</div>
                <div className="mb-8">• Set up watchlists</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📊 Item Information</h3>
              <p className="card-description mb-16">
                What to look for when viewing auction items.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Current bid or fixed price</div>
                <div className="mb-8">• Time remaining on auction</div>
                <div className="mb-8">• Seller name and reputation</div>
                <div className="mb-8">• Item condition and enchantments</div>
                <div className="mb-8">• Number of bidders</div>
                <div className="mb-8">• Bidding history</div>
                <div className="mb-8">• Item rarity and stats</div>
                <div className="mb-8">• Shipping and handling info</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buying at Auction */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🛒 Buying at Auction
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📋 Bidding Process</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Step 1:</strong> Browse available auctions</div>
                <div className="mb-8">• <strong>Step 2:</strong> Click on items to view details</div>
                <div className="mb-8">• <strong>Step 3:</strong> Research item value and history</div>
                <div className="mb-8">• <strong>Step 4:</strong> Set your maximum bid limit</div>
                <div className="mb-8">• <strong>Step 5:</strong> Place your bid (must exceed current)</div>
                <div className="mb-8">• <strong>Step 6:</strong> Monitor auction progress</div>
                <div className="mb-8">• <strong>Step 7:</strong> Receive items if you win</div>
                <div className="mb-8">• <strong>Step 8:</strong> Leave feedback for seller</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🎯 Bidding Strategies</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Sniping:</strong> Bid in final minutes for best chance</div>
                <div className="mb-8">• <strong>Budget Setting:</strong> Set maximum budget beforehand</div>
                <div className="mb-8">• <strong>Research:</strong> Study item values and market trends</div>
                <div className="mb-8">• <strong>Timing:</strong> Watch for auctions ending at odd hours</div>
                <div className="mb-8">• <strong>Patience:</strong> Wait for good deals rather than overpaying</div>
                <div className="mb-8">• <strong>Diversification:</strong> Bid on multiple similar items</div>
                <div className="mb-8">• <strong>Proxy Bidding:</strong> Use automatic bidding features</div>
                <div className="mb-8">• <strong>Competition Analysis:</strong> Study other bidders' patterns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selling at Auction */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            💼 Selling at Auction
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">📝 Listing Process</h3>
              <p className="card-description mb-16">
                Step-by-step guide to listing your items.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Hold the item you want to sell</div>
                <div className="mb-8">• Use /ah sell [starting price]</div>
                <div className="mb-8">• Set auction duration (1-7 days)</div>
                <div className="mb-8">• Optionally set Buy It Now price</div>
                <div className="mb-8">• Write clear item description</div>
                <div className="mb-8">• Confirm listing and pay fees</div>
                <div className="mb-8">• Monitor bidding activity</div>
                <div className="mb-8">• Collect payment when sold</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💡 Pricing Strategies</h3>
              <p className="card-description mb-16">
                Set competitive prices for maximum profit.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Research current market prices</div>
                <div className="mb-8">• Start low to attract bidders</div>
                <div className="mb-8">• Set reasonable Buy It Now prices</div>
                <div className="mb-8">• Consider item rarity and demand</div>
                <div className="mb-8">• Factor in auction fees</div>
                <div className="mb-8">• Use psychological pricing tactics</div>
                <div className="mb-8">• Adjust for seasonal demand</div>
                <div className="mb-8">• Monitor competitor pricing</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⏰ Timing Your Sales</h3>
              <p className="card-description mb-16">
                When to list for maximum visibility and bids.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• End auctions during peak hours</div>
                <div className="mb-8">• Avoid major server events</div>
                <div className="mb-8">• Consider weekend vs weekday timing</div>
                <div className="mb-8">• Account for different time zones</div>
                <div className="mb-8">• List before high-demand periods</div>
                <div className="mb-8">• Avoid holiday periods</div>
                <div className="mb-8">• Monitor server activity patterns</div>
                <div className="mb-8">• Use 7-day listings for rare items</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Strategies */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🎯 Advanced Auction Strategies
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📈 Market Analysis</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Price Tracking:</strong> Monitor trends over time</div>
                <div className="mb-8">• <strong>Seasonal Patterns:</strong> Identify recurring cycles</div>
                <div className="mb-8">• <strong>Competition Monitoring:</strong> Watch rival activities</div>
                <div className="mb-8">• <strong>Supply Analysis:</strong> Track item availability</div>
                <div className="mb-8">• <strong>Demand Forecasting:</strong> Predict future needs</div>
                <div className="mb-8">• <strong>Event Impact:</strong> Plan around server events</div>
                <div className="mb-8">• <strong>Economic Indicators:</strong> Watch server economy</div>
                <div className="mb-8">• <strong>Player Behavior:</strong> Study buying patterns</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💎 Arbitrage Opportunities</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Cross-Platform:</strong> Buy low at auction, sell high in shops</div>
                <div className="mb-8">• <strong>Timing Arbitrage:</strong> Buy during low demand periods</div>
                <div className="mb-8">• <strong>Bulk Opportunities:</strong> Purchase lots for resale</div>
                <div className="mb-8">• <strong>Market Inefficiencies:</strong> Exploit pricing gaps</div>
                <div className="mb-8">• <strong>Geographic Arbitrage:</strong> Different server regions</div>
                <div className="mb-8">• <strong>Information Advantage:</strong> Act on early knowledge</div>
                <div className="mb-8">• <strong>Risk Assessment:</strong> Calculate potential profits</div>
                <div className="mb-8">• <strong>Quick Turnaround:</strong> Fast buy-sell cycles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips & Tricks */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            💡 Pro Tips & Tricks
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏆 Buyer Tips</h3>
              <p className="card-description mb-16">
                Expert advice for successful bidding.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Set up notifications for wanted items</div>
                <div className="mb-8">• Use multiple search terms</div>
                <div className="mb-8">• Check auction history for trends</div>
                <div className="mb-8">• Build relationships with sellers</div>
                <div className="mb-8">• Consider total cost including fees</div>
                <div className="mb-8">• Use bid increments strategically</div>
                <div className="mb-8">• Monitor ending times carefully</div>
                <div className="mb-8">• Have backup options ready</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💰 Seller Tips</h3>
              <p className="card-description mb-16">
                Maximize your auction profits.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Use attractive item descriptions</div>
                <div className="mb-8">• Bundle complementary items</div>
                <div className="mb-8">• Offer bulk discounts</div>
                <div className="mb-8">• Maintain good seller reputation</div>
                <div className="mb-8">• Respond quickly to inquiries</div>
                <div className="mb-8">• Use high-quality screenshots</div>
                <div className="mb-8">• Time listings strategically</div>
                <div className="mb-8">• Follow up with buyers</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚠️ Common Mistakes</h3>
              <p className="card-description mb-16">
                Avoid these costly auction errors.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Bidding emotionally instead of strategically</div>
                <div className="mb-8">• Not researching item values</div>
                <div className="mb-8">• Forgetting about auction fees</div>
                <div className="mb-8">• Listing items at wrong times</div>
                <div className="mb-8">• Not reading descriptions carefully</div>
                <div className="mb-8">• Chasing losses with bigger bids</div>
                <div className="mb-8">• Ignoring seller reputation</div>
                <div className="mb-8">• Poor inventory management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🔧 Troubleshooting & Support
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">❌ Common Issues</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Can't Place Bid:</strong> Check if you have sufficient funds</div>
                <div className="mb-8">• <strong>Item Not Received:</strong> Check mailbox or /ah expired</div>
                <div className="mb-8">• <strong>Auction Disappeared:</strong> May have been cancelled by admin</div>
                <div className="mb-8">• <strong>Payment Not Received:</strong> Check for server lag</div>
                <div className="mb-8">• <strong>Listing Failed:</strong> Verify item and price format</div>
                <div className="mb-8">• <strong>Bid Rejected:</strong> Ensure bid meets minimum increment</div>
                <div className="mb-8">• <strong>Interface Lag:</strong> Try refreshing or relogging</div>
                <div className="mb-8">• <strong>Search Not Working:</strong> Check spelling and filters</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🆘 Getting Help</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Use /helpop for immediate assistance</div>
                <div className="mb-8">• Join Discord for community support</div>
                <div className="mb-8">• Check economy guides for more info</div>
                <div className="mb-8">• Ask experienced traders for advice</div>
                <div className="mb-8">• Report bugs to staff members</div>
                <div className="mb-8">• Read server announcements</div>
                <div className="mb-8">• Check FAQ section first</div>
                <div className="mb-8">• Contact staff for disputes</div>
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
              <Link href="/towny/wiki/trading" className="footer-link footer-link-orange">
                ← Trading Guide
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
            Start bidding and trading today!
          </p>
        </div>
      </footer>
    </div>
  )
}
