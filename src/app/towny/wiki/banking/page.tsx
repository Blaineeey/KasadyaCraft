import Link from "next/link"

export default function BankingPage() {
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
                🏦
              </div>
              <div>
                <h1 className="nav-title">Town Bank & Taxes</h1>
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
            🏦 Town Bank & Taxes
          </h1>
          <p className="hero-description">
            Master town finances! Learn how to manage your town bank, set fair taxes, and ensure your town's financial stability and growth.
          </p>
        </div>
      </section>

      {/* Town Bank Basics */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            💰 Town Bank System
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏛️ How the Bank Works</h3>
              <p className="card-description mb-16">
                The town bank is the central financial hub for all town operations and expenses.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Stores money for town expenses</div>
                <div className="mb-8">• Pays for daily upkeep automatically</div>
                <div className="mb-8">• Funds land claims and expansions</div>
                <div className="mb-8">• Receives income from plot sales</div>
                <div className="mb-8">• Collects taxes from residents</div>
                <div className="mb-8">• Only mayors can withdraw funds</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚡ Banking Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/town deposit [amount]</div>
                  <div className="command-description">Add money to town bank</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town withdraw [amount]</div>
                  <div className="command-description">Take money from bank (mayors only)</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town</div>
                  <div className="command-description">Check current bank balance</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/towny prices</div>
                  <div className="command-description">View server costs and prices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Upkeep */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            📅 Daily Upkeep System
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">💸 Upkeep Costs</h3>
              <p className="card-description mb-16">
                Every town must pay daily upkeep to maintain their claims and status.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Base upkeep:</strong> $10 per day</div>
                <div className="mb-8">• <strong>Additional cost:</strong> $1 per claimed chunk</div>
                <div className="mb-8">• <strong>Nation upkeep:</strong> $50 per day (if in nation)</div>
                <div className="mb-8">• Upkeep is charged at server restart</div>
                <div className="mb-8">• Failed payments result in town deletion</div>
                <div className="mb-8">• Grace period: 7 days before deletion</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⏰ Upkeep Management</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Check bank balance daily</div>
                <div className="mb-8">• Keep at least 7 days of upkeep in bank</div>
                <div className="mb-8">• Set up regular deposit schedule</div>
                <div className="mb-8">• Monitor town expenses vs income</div>
                <div className="mb-8">• Plan for expansion costs</div>
                <div className="mb-8">• Have emergency funds ready</div>
                <div className="mb-8">• Use /towny time to check next upkeep</div>
                <div className="mb-8">• Notify residents of financial issues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax System */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            💳 Tax System
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📊 Setting Taxes</h3>
              <div className="command-list mb-16">
                <div className="command-item">
                  <div className="command-name">/town set taxes [amount]</div>
                  <div className="command-description">Set daily tax amount</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town toggle taxpercent</div>
                  <div className="command-description">Switch between flat tax and percentage</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set plotprice [amount]</div>
                  <div className="command-description">Set plot sale prices</div>
                </div>
              </div>
              <div className="text-gray text-14">
                <div className="mb-8">• Taxes are collected daily automatically</div>
                <div className="mb-8">• Residents who can't pay are kicked</div>
                <div className="mb-8">• Set reasonable rates to keep residents</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💡 Tax Strategy</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Small towns:</strong> $1-5 per day</div>
                <div className="mb-8">• <strong>Medium towns:</strong> $5-15 per day</div>
                <div className="mb-8">• <strong>Large towns:</strong> $10-25 per day</div>
                <div className="mb-8">• Consider resident wealth levels</div>
                <div className="mb-8">• Adjust based on town services provided</div>
                <div className="mb-8">• Percentage tax scales with resident wealth</div>
                <div className="mb-8">• Communicate tax purposes to residents</div>
                <div className="mb-8">• Review and adjust regularly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Income Sources */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            💵 Town Income Sources
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏠 Plot Sales</h3>
              <p className="card-description mb-16">
                Primary income source from selling plots to residents and visitors.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Residential plots: $50-200</div>
                <div className="mb-8">• Shop plots: $150-500</div>
                <div className="mb-8">• Embassy plots: $200-1000</div>
                <div className="mb-8">• One-time payment to town bank</div>
                <div className="mb-8">• Adjust prices based on demand</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💳 Daily Taxes</h3>
              <p className="card-description mb-16">
                Steady income from resident taxes to fund ongoing operations.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Collected automatically each day</div>
                <div className="mb-8">• Flat rate or percentage based</div>
                <div className="mb-8">• Predictable daily income</div>
                <div className="mb-8">• Scales with resident count</div>
                <div className="mb-8">• Must balance with resident satisfaction</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🎁 Donations</h3>
              <p className="card-description mb-16">
                Voluntary contributions from residents and supporters.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Residents can deposit voluntarily</div>
                <div className="mb-8">• Encourage during financial difficulties</div>
                <div className="mb-8">• Recognize generous contributors</div>
                <div className="mb-8">• Use for special projects</div>
                <div className="mb-8">• Build community spirit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Planning */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            📈 Financial Planning
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📋 Budget Planning</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Calculate daily expenses (upkeep + nation fees)</div>
                <div className="mb-8">• Estimate daily income (taxes + plot sales)</div>
                <div className="mb-8">• Plan for expansion costs ($25 per chunk)</div>
                <div className="mb-8">• Keep emergency fund (30 days upkeep)</div>
                <div className="mb-8">• Budget for special projects and events</div>
                <div className="mb-8">• Track income and expenses regularly</div>
                <div className="mb-8">• Adjust taxes and prices as needed</div>
                <div className="mb-8">• Communicate financial status to residents</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">⚠️ Financial Crisis Management</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Act quickly when bank runs low</div>
                <div className="mb-8">• Temporarily increase taxes if needed</div>
                <div className="mb-8">• Ask residents for emergency donations</div>
                <div className="mb-8">• Sell unnecessary claimed chunks</div>
                <div className="mb-8">• Postpone expansion plans</div>
                <div className="mb-8">• Consider merging with another town</div>
                <div className="mb-8">• Communicate openly with residents</div>
                <div className="mb-8">• Learn from financial mistakes</div>
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
              <Link href="/towny/wiki/plots" className="footer-link footer-link-orange">
                ← Plot System
              </Link>
              <Link href="/towny/wiki/settings" className="footer-link footer-link-green">
                Town Settings →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Build a financially stable town!
          </p>
        </div>
      </footer>
    </div>
  )
}
