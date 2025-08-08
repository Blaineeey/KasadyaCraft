import Link from "next/link"

export default function BanksGuide() {
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
                <h1 className="nav-title">Banking System</h1>
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
            🏦 Banking System Guide
          </h1>
          <p className="hero-description">
            Secure your wealth and manage finances through the comprehensive banking system with advanced features.
          </p>
        </div>
      </section>

      {/* Personal Banking */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            💳 Personal Banking
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏛️ Account Features</h3>
              <p className="card-description mb-16">
                Secure money storage with advanced protection features.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Secure Storage:</strong> Money separate from inventory</div>
                <div className="mb-8">• <strong>Death Protection:</strong> No loss on death</div>
                <div className="mb-8">• <strong>Theft Protection:</strong> Secure from griefing</div>
                <div className="mb-8">• <strong>Interest Earnings:</strong> Daily compound interest</div>
                <div className="mb-8">• <strong>Transaction History:</strong> Complete audit trail</div>
                <div className="mb-8">• <strong>Multiple Accounts:</strong> Different account types</div>
                <div className="mb-8">• <strong>Automatic Transfers:</strong> Scheduled payments</div>
                <div className="mb-8">• <strong>Mobile Banking:</strong> Access anywhere</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚡ Essential Commands</h3>
              <div className="command-list">
                <div className="command-item">
                  <div className="command-name">/bank</div>
                  <div className="command-description">Open banking interface</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/bank balance</div>
                  <div className="command-description">Check account balance</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/bank deposit [amount]</div>
                  <div className="command-description">Deposit money</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/bank withdraw [amount]</div>
                  <div className="command-description">Withdraw money</div>
                </div>
                <div className="command-item">
                  <div className="command-name">/bank transfer [player] [amount]</div>
                  <div className="command-description">Send money to player</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            📊 Account Types & Interest Rates
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🏦 Account Types</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Basic Account:</strong> Standard checking with 0.5% daily interest</div>
                <div className="mb-8">• <strong>Savings Account:</strong> Higher interest at 1.0% daily, limited withdrawals</div>
                <div className="mb-8">• <strong>Premium Account:</strong> Enhanced features with 1.5% daily interest</div>
                <div className="mb-8">• <strong>Business Account:</strong> For town and shop operations</div>
                <div className="mb-8">• <strong>Investment Account:</strong> High-risk, high-reward options</div>
                <div className="mb-8">• <strong>Joint Account:</strong> Shared access with trusted players</div>
                <div className="mb-8">• <strong>Youth Account:</strong> Special rates for new players</div>
                <div className="mb-8">• <strong>VIP Account:</strong> Exclusive benefits for donors</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💰 Interest & Benefits</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Daily Compounding:</strong> Interest calculated daily</div>
                <div className="mb-8">• <strong>Minimum Balance:</strong> Required for interest earnings</div>
                <div className="mb-8">• <strong>Bonus Rates:</strong> Higher balances earn more</div>
                <div className="mb-8">• <strong>Loyalty Rewards:</strong> Long-term account benefits</div>
                <div className="mb-8">• <strong>Referral Bonuses:</strong> Earn for bringing friends</div>
                <div className="mb-8">• <strong>Event Multipliers:</strong> Special rate periods</div>
                <div className="mb-8">• <strong>VIP Perks:</strong> Exclusive account features</div>
                <div className="mb-8">• <strong>Fee Waivers:</strong> Reduced transaction costs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Town Banking */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🏛️ Town Banking System
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏢 Town Bank Features</h3>
              <p className="card-description mb-16">
                Centralized municipal finance management.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Centralized town treasury</div>
                <div className="mb-8">• Tax collection and distribution</div>
                <div className="mb-8">• Public works funding</div>
                <div className="mb-8">• Resident financial services</div>
                <div className="mb-8">• Inter-town transactions</div>
                <div className="mb-8">• Budget planning tools</div>
                <div className="mb-8">• Financial reporting</div>
                <div className="mb-8">• Emergency fund management</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💵 Revenue Sources</h3>
              <p className="card-description mb-16">
                How towns generate income and funding.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Resident taxes and fees</div>
                <div className="mb-8">• Plot sales and rentals</div>
                <div className="mb-8">• Business licenses and permits</div>
                <div className="mb-8">• Trade and commerce taxes</div>
                <div className="mb-8">• Nation contributions</div>
                <div className="mb-8">• Tourism and events</div>
                <div className="mb-8">• Resource extraction rights</div>
                <div className="mb-8">• Investment returns</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💸 Town Expenses</h3>
              <p className="card-description mb-16">
                Regular costs and financial obligations.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Daily upkeep costs</div>
                <div className="mb-8">• Infrastructure maintenance</div>
                <div className="mb-8">• Public services and utilities</div>
                <div className="mb-8">• Defense and security</div>
                <div className="mb-8">• Nation taxes and fees</div>
                <div className="mb-8">• Staff salaries</div>
                <div className="mb-8">• Emergency response</div>
                <div className="mb-8">• Development projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Services */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🛠️ Banking Services
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">💳 Loan Services</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Personal Loans:</strong> For major purchases and investments</div>
                <div className="mb-8">• <strong>Business Loans:</strong> Shop expansion and equipment</div>
                <div className="mb-8">• <strong>Town Development:</strong> Municipal infrastructure projects</div>
                <div className="mb-8">• <strong>Competitive Rates:</strong> Based on credit history</div>
                <div className="mb-8">• <strong>Flexible Terms:</strong> Customizable repayment schedules</div>
                <div className="mb-8">• <strong>Quick Approval:</strong> Fast processing for qualified applicants</div>
                <div className="mb-8">• <strong>Collateral Options:</strong> Secured and unsecured loans</div>
                <div className="mb-8">• <strong>Early Repayment:</strong> No penalties for early payoff</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">💎 Investment Options</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>High-Yield Savings:</strong> Premium interest rates</div>
                <div className="mb-8">• <strong>Certificates of Deposit:</strong> Fixed-term investments</div>
                <div className="mb-8">• <strong>Municipal Bonds:</strong> Support town development</div>
                <div className="mb-8">• <strong>Business Partnerships:</strong> Invest in player ventures</div>
                <div className="mb-8">• <strong>Retirement Accounts:</strong> Long-term wealth building</div>
                <div className="mb-8">• <strong>Diversified Portfolios:</strong> Risk-balanced investments</div>
                <div className="mb-8">• <strong>Professional Management:</strong> Expert investment advice</div>
                <div className="mb-8">• <strong>Regular Reports:</strong> Performance tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            📈 Investment Strategies
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🟢 Low Risk Investments</h3>
              <p className="card-description mb-16">
                Safe options with steady returns.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Government bonds (2-3% annual)</div>
                <div className="mb-8">• High-yield savings (1.5% daily)</div>
                <div className="mb-8">• Certificate of deposits (4-5% annual)</div>
                <div className="mb-8">• Municipal infrastructure bonds</div>
                <div className="mb-8">• Stable currency funds</div>
                <div className="mb-8">• Treasury securities</div>
                <div className="mb-8">• Conservative mutual funds</div>
                <div className="mb-8">• Guaranteed investment certificates</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🟡 Medium Risk Investments</h3>
              <p className="card-description mb-16">
                Balanced risk-reward opportunities.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Business partnerships (5-10% annual)</div>
                <div className="mb-8">• Real estate development</div>
                <div className="mb-8">• Trade route investments</div>
                <div className="mb-8">• Resource extraction ventures</div>
                <div className="mb-8">• Balanced mutual funds</div>
                <div className="mb-8">• Corporate bonds</div>
                <div className="mb-8">• Infrastructure projects</div>
                <div className="mb-8">• Diversified portfolios</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🔴 High Risk Investments</h3>
              <p className="card-description mb-16">
                High potential returns with significant risk.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Startup ventures (10-20% potential)</div>
                <div className="mb-8">• Speculative trading</div>
                <div className="mb-8">• New territory development</div>
                <div className="mb-8">• Experimental technology</div>
                <div className="mb-8">• Commodity speculation</div>
                <div className="mb-8">• Venture capital funds</div>
                <div className="mb-8">• Cryptocurrency investments</div>
                <div className="mb-8">• ⚠️ Risk of total loss</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Security */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-red">
            🔒 Banking Security
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">⚠️ Security Threats</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Account Hacking:</strong> Unauthorized access attempts</div>
                <div className="mb-8">• <strong>Social Engineering:</strong> Manipulation and scams</div>
                <div className="mb-8">• <strong>Phishing Attacks:</strong> Fake websites and messages</div>
                <div className="mb-8">• <strong>Identity Theft:</strong> Impersonation and fraud</div>
                <div className="mb-8">• <strong>Insider Threats:</strong> Staff corruption and abuse</div>
                <div className="mb-8">• <strong>System Vulnerabilities:</strong> Technical exploits</div>
                <div className="mb-8">• <strong>Data Breaches:</strong> Information leaks</div>
                <div className="mb-8">• <strong>Transaction Fraud:</strong> Unauthorized transfers</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🛡️ Protection Measures</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Strong Passwords:</strong> Use unique, complex passwords</div>
                <div className="mb-8">• <strong>Two-Factor Auth:</strong> Enable additional security</div>
                <div className="mb-8">• <strong>Account Monitoring:</strong> Regular balance checks</div>
                <div className="mb-8">• <strong>Secure Connections:</strong> Only use official interfaces</div>
                <div className="mb-8">• <strong>Privacy Protection:</strong> Never share credentials</div>
                <div className="mb-8">• <strong>Regular Updates:</strong> Keep security current</div>
                <div className="mb-8">• <strong>Incident Reporting:</strong> Report suspicious activity</div>
                <div className="mb-8">• <strong>Backup Plans:</strong> Emergency procedures ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🚀 Advanced Banking Features
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🌐 Currency Exchange</h3>
              <p className="card-description mb-16">
                International currency conversion services.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Convert between different currencies</div>
                <div className="mb-8">• Real-time exchange rates</div>
                <div className="mb-8">• International trade support</div>
                <div className="mb-8">• Bulk exchange discounts</div>
                <div className="mb-8">• Historical rate tracking</div>
                <div className="mb-8">• Forward contracts available</div>
                <div className="mb-8">• Multi-currency accounts</div>
                <div className="mb-8">• Automated conversions</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🛡️ Insurance Services</h3>
              <p className="card-description mb-16">
                Comprehensive protection for your assets.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Property and asset protection</div>
                <div className="mb-8">• Business interruption coverage</div>
                <div className="mb-8">• Life and disability insurance</div>
                <div className="mb-8">• Theft and loss protection</div>
                <div className="mb-8">• Custom coverage options</div>
                <div className="mb-8">• Competitive premium rates</div>
                <div className="mb-8">• Quick claim processing</div>
                <div className="mb-8">• Risk assessment services</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📊 Financial Planning</h3>
              <p className="card-description mb-16">
                Professional wealth management services.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Personal financial advisors</div>
                <div className="mb-8">• Retirement planning services</div>
                <div className="mb-8">• Tax optimization strategies</div>
                <div className="mb-8">• Estate planning assistance</div>
                <div className="mb-8">• Investment portfolio reviews</div>
                <div className="mb-8">• Budget planning tools</div>
                <div className="mb-8">• Financial goal setting</div>
                <div className="mb-8">• Regular progress reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-green">
            💡 Banking Best Practices
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">✅ Smart Banking Habits</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Keep most wealth in bank accounts</div>
                <div className="mb-8">• Use different accounts for different purposes</div>
                <div className="mb-8">• Monitor transactions regularly</div>
                <div className="mb-8">• Set up automatic transfers for bills</div>
                <div className="mb-8">• Maintain emergency cash reserves</div>
                <div className="mb-8">• Diversify your investments</div>
                <div className="mb-8">• Review account statements monthly</div>
                <div className="mb-8">• Plan for long-term financial goals</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">❌ Common Mistakes</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• Keeping all money in inventory</div>
                <div className="mb-8">• Ignoring account fees and charges</div>
                <div className="mb-8">• Not taking advantage of interest</div>
                <div className="mb-8">• Sharing account information</div>
                <div className="mb-8">• Not reading terms and conditions</div>
                <div className="mb-8">• Putting all eggs in one basket</div>
                <div className="mb-8">• Neglecting security measures</div>
                <div className="mb-8">• Not planning for emergencies</div>
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
              <Link href="/towny/wiki/economy" className="footer-link footer-link-orange">
                ← Economy Guide
              </Link>
              <Link href="/towny/wiki/auction" className="footer-link footer-link-green">
                Auction House →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Secure your wealth today!
          </p>
        </div>
      </footer>
    </div>
  )
}
