import Link from "next/link"

export default function EconomyPage() {
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
                <h1 className="nav-title">Economy Basics</h1>
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
            💰 Economy Basics
          </h1>
          <p className="hero-description">
            Learn how to make money, manage your finances, and build economic prosperity in KasadyaCraft's Towny server.
          </p>
        </div>
      </section>

      {/* Making Money */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            💵 Ways to Make Money
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">⛏️ Mining & Resources</h3>
              <p className="card-description mb-16">
                The most reliable way to earn money is through gathering resources.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Mine valuable ores (diamonds, gold, iron)</div>
                <div className="mb-8">• Sell resources at spawn shops</div>
                <div className="mb-8">• Farm crops and sell to other players</div>
                <div className="mb-8">• Fish and sell rare catches</div>
                <div className="mb-8">• Hunt mobs for drops and experience</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🏪 Trading & Shops</h3>
              <p className="card-description mb-16">
                Set up shops and trade with other players for steady income.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Create chest shops in your town</div>
                <div className="mb-8">• Buy low, sell high for profit</div>
                <div className="mb-8">• Specialize in rare or hard-to-get items</div>
                <div className="mb-8">• Trade with other towns and nations</div>
                <div className="mb-8">• Use the auction house for valuable items</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">💼 Jobs & Services</h3>
              <p className="card-description mb-16">
                Offer services to other players and complete server jobs.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Join server jobs (/jobs browse)</div>
                <div className="mb-8">• Offer building services</div>
                <div className="mb-8">• Provide transportation services</div>
                <div className="mb-8">• Create and sell custom builds</div>
                <div className="mb-8">• Rent out plots in your town</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Management */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🏦 Money Management
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">💳 Personal Finance</h3>
              <div className="command-list mb-16">
                <div className="command-item">
                  <div className="command-name">/balance</div>
                  <div className="command-description">Check your current money</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/pay [player] [amount]</div>
                  <div className="command-description">Send money to another player</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/baltop</div>
                  <div className="command-description">View richest players</div>
                </div>
              </div>
              <div className="text-gray text-14">
                <div className="mb-8">• Always keep emergency funds</div>
                <div className="mb-8">• Don't spend all your money at once</div>
                <div className="mb-8">• Invest in tools and equipment first</div>
                <div className="mb-8">• Save money for town creation ($1000)</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">🏛️ Town Banking</h3>
              <div className="command-list mb-16">
                <div className="command-item">
                  <div className="command-name">/town deposit [amount]</div>
                  <div className="command-description">Add money to town bank</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town withdraw [amount]</div>
                  <div className="command-description">Take money from town bank</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/town set taxes [amount]</div>
                  <div className="command-description">Set resident taxes</div>
                </div>
              </div>
              <div className="text-gray text-14">
                <div className="mb-8">• Keep town bank funded for upkeep</div>
                <div className="mb-8">• Set reasonable taxes for residents</div>
                <div className="mb-8">• Plan for expansion costs</div>
                <div className="mb-8">• Save for nation creation ($5000)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs & Expenses */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            💸 Server Costs & Expenses
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏘️ Town Costs</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Town Creation:</strong> $1,000</div>
                <div className="mb-8">• <strong>Daily Upkeep:</strong> $10 per day</div>
                <div className="mb-8">• <strong>Extra Claims:</strong> $25 per chunk</div>
                <div className="mb-8">• <strong>Plot Creation:</strong> Free</div>
                <div className="mb-8">• <strong>Town Spawn:</strong> Free to set</div>
                <div className="mb-8">• <strong>Resident Taxes:</strong> Set by mayor</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">👑 Nation Costs</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Nation Creation:</strong> $5,000</div>
                <div className="mb-8">• <strong>Daily Upkeep:</strong> $50 per day</div>
                <div className="mb-8">• <strong>Town Invitations:</strong> Free</div>
                <div className="mb-8">• <strong>War Declarations:</strong> $1,000</div>
                <div className="mb-8">• <strong>Alliance Costs:</strong> Free</div>
                <div className="mb-8">• <strong>Nation Taxes:</strong> Set by king</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Tips */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            💡 Economic Success Tips
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Smart Money Moves</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Diversify your income sources</div>
                <div className="mb-8">• Invest in efficient tools (Fortune pickaxe)</div>
                <div className="mb-8">• Build relationships with other traders</div>
                <div className="mb-8">• Monitor market prices regularly</div>
                <div className="mb-8">• Keep detailed records of expenses</div>
                <div className="mb-8">• Plan major purchases in advance</div>
                <div className="mb-8">• Always maintain emergency funds</div>
                <div className="mb-8">• Reinvest profits to grow your wealth</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">❌ Money Mistakes to Avoid</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Don't spend your last dollar on a town</div>
                <div className="mb-8">• Don't ignore daily upkeep costs</div>
                <div className="mb-8">• Don't set taxes too high for residents</div>
                <div className="mb-8">• Don't buy expensive items you don't need</div>
                <div className="mb-8">• Don't lend money without collateral</div>
                <div className="mb-8">• Don't expand your town too quickly</div>
                <div className="mb-8">• Don't forget to check your balance regularly</div>
                <div className="mb-8">• Don't trust get-rich-quick schemes</div>
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
              <Link href="/towny/wiki/commands" className="footer-link footer-link-orange">
                ← Commands Guide
              </Link>
              <Link href="/towny/wiki/permissions" className="footer-link footer-link-green">
                Permissions Guide →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Build your economic empire!
          </p>
        </div>
      </footer>
    </div>
  )
}
