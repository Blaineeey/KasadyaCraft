import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

export default function BanksGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Banking System Guide</h1>
            <p className="text-xl text-gray-600 mb-6">
              Secure your wealth and manage finances through the banking system
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary">Personal Banking</Badge>
              <Badge variant="secondary">Town Banks</Badge>
              <Badge variant="secondary">Loans</Badge>
              <Badge variant="secondary">Interest</Badge>
            </div>
          </div>

          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="personal">Personal Banking</TabsTrigger>
              <TabsTrigger value="town">Town Banks</TabsTrigger>
              <TabsTrigger value="services">Bank Services</TabsTrigger>
              <TabsTrigger value="investment">Investment</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Banking Basics</CardTitle>
                    <CardDescription>Manage your personal finances safely</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Account Features</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Secure money storage separate from inventory</li>
                        <li>• Protection from death and theft</li>
                        <li>• Interest earnings on deposits</li>
                        <li>• Transaction history tracking</li>
                        <li>• Multiple account types available</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="font-semibold">Essential Banking Commands:</div>
                      <div>/bank - Open banking interface</div>
                      <div>/bank balance - Check account balance</div>
                      <div>/bank deposit [amount] - Deposit money</div>
                      <div>/bank withdraw [amount] - Withdraw money</div>
                      <div>/bank transfer [player] [amount] - Send money</div>
                      <div>/bank history - View transaction history</div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Account Types</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• <strong>Basic:</strong> Standard checking account</li>
                          <li>• <strong>Savings:</strong> Higher interest, limited withdrawals</li>
                          <li>• <strong>Premium:</strong> Enhanced features and rates</li>
                          <li>• <strong>Business:</strong> For town and shop operations</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Interest Rates</h4>
                        <ul className="text-sm text-yellow-800 space-y-1">
                          <li>• Basic Account: 0.5% daily</li>
                          <li>• Savings Account: 1.0% daily</li>
                          <li>• Premium Account: 1.5% daily</li>
                          <li>• Interest calculated on daily balance</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Best Practices:</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>• Keep most wealth in bank accounts</li>
                        <li>• Use different accounts for different purposes</li>
                        <li>• Monitor transactions regularly</li>
                        <li>• Set up automatic transfers for bills</li>
                        <li>• Maintain emergency cash reserves</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="town">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Town Banking System</CardTitle>
                    <CardDescription>Manage municipal finances and community funds</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-2">Town Bank Features</h4>
                      <ul className="text-sm text-indigo-800 space-y-1">
                        <li>• Centralized town treasury management</li>
                        <li>• Tax collection and distribution</li>
                        <li>• Public works funding</li>
                        <li>• Resident financial services</li>
                        <li>• Inter-town financial transactions</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="font-semibold">Town Banking Commands:</div>
                      <div>/town bank - Access town bank (mayors/assistants)</div>
                      <div>/town bank deposit [amount] - Deposit to town</div>
                      <div>/town bank withdraw [amount] - Withdraw from town</div>
                      <div>/town bank balance - Check town balance</div>
                      <div>/town bank history - View town transactions</div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Revenue Sources</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Resident taxes and fees</li>
                          <li>• Plot sales and rentals</li>
                          <li>• Business licenses</li>
                          <li>• Trade and commerce taxes</li>
                          <li>• Nation contributions</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">Expenses</h4>
                        <ul className="text-sm text-orange-800 space-y-1">
                          <li>• Daily upkeep costs</li>
                          <li>• Infrastructure maintenance</li>
                          <li>• Public services</li>
                          <li>• Defense and security</li>
                          <li>• Nation taxes</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Financial Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Budget Management:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Plan for regular upkeep costs</li>
                        <li>• Maintain emergency reserves</li>
                        <li>• Balance tax rates with resident satisfaction</li>
                        <li>• Invest in growth-generating projects</li>
                        <li>• Monitor cash flow regularly</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="services">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Banking Services</CardTitle>
                    <CardDescription>Explore additional financial services available</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Loan Services</h4>
                        <ul className="text-sm text-teal-800 space-y-1">
                          <li>• Personal loans for major purchases</li>
                          <li>• Business loans for shop expansion</li>
                          <li>• Town development loans</li>
                          <li>• Competitive interest rates</li>
                          <li>• Flexible repayment terms</li>
                        </ul>
                      </div>

                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-cyan-900 mb-2">Investment Options</h4>
                        <ul className="text-sm text-cyan-800 space-y-1">
                          <li>• High-yield savings accounts</li>
                          <li>• Certificate of deposits (CDs)</li>
                          <li>• Municipal bonds</li>
                          <li>• Business investment opportunities</li>
                          <li>• Retirement planning accounts</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Currency Exchange</h4>
                        <ul className="text-sm text-purple-800 space-y-1">
                          <li>• Convert between different currencies</li>
                          <li>• Real-time exchange rates</li>
                          <li>• International trade support</li>
                          <li>• Bulk exchange discounts</li>
                          <li>• Historical rate tracking</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Insurance Services</h4>
                        <ul className="text-sm text-yellow-800 space-y-1">
                          <li>• Property and asset protection</li>
                          <li>• Business interruption coverage</li>
                          <li>• Life and disability insurance</li>
                          <li>• Theft and loss protection</li>
                          <li>• Custom coverage options</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Service Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">How to Apply:</h4>
                      <ol className="text-sm space-y-1">
                        <li>1. Visit the bank in your town or nation capital</li>
                        <li>2. Speak with a bank representative</li>
                        <li>3. Complete application forms</li>
                        <li>4. Provide required documentation</li>
                        <li>5. Wait for approval process</li>
                        <li>6. Receive service activation</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="investment">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Opportunities</CardTitle>
                    <CardDescription>Grow your wealth through smart investments</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Low Risk Investments</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Government bonds (2-3% annual)</li>
                          <li>• High-yield savings (1.5% daily)</li>
                          <li>• Certificate of deposits (4-5% annual)</li>
                          <li>• Municipal infrastructure bonds</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">Medium Risk Investments</h4>
                        <ul className="text-sm text-orange-800 space-y-1">
                          <li>• Business partnerships (5-10% annual)</li>
                          <li>• Real estate development</li>
                          <li>• Trade route investments</li>
                          <li>• Resource extraction ventures</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">High Risk Investments</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Startup business ventures (10-20% potential)</li>
                        <li>• Speculative trading</li>
                        <li>• New territory development</li>
                        <li>• Experimental technology projects</li>
                        <li>• <strong>Warning:</strong> High risk of total loss</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Investment Strategy Tips:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Diversify your investment portfolio</li>
                        <li>• Start with low-risk options</li>
                        <li>• Reinvest profits for compound growth</li>
                        <li>• Research before investing</li>
                        <li>• Never invest more than you can afford to lose</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Investment Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Portfolio Management:</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>• Use /bank investments to view portfolio</li>
                        <li>• Track performance over time</li>
                        <li>• Rebalance investments quarterly</li>
                        <li>• Set profit-taking and stop-loss targets</li>
                        <li>• Review and adjust strategy regularly</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="security">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Banking Security</CardTitle>
                    <CardDescription>Protect your financial assets and information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">Security Threats</h4>
                        <ul className="text-sm text-red-800 space-y-1">
                          <li>• Account hacking and unauthorized access</li>
                          <li>• Social engineering scams</li>
                          <li>• Fake banking websites and phishing</li>
                          <li>• Identity theft and impersonation</li>
                          <li>• Insider fraud and corruption</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Protection Measures</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Use strong, unique passwords</li>
                          <li>• Enable two-factor authentication</li>
                          <li>• Never share account credentials</li>
                          <li>• Verify all transactions immediately</li>
                          <li>• Report suspicious activity promptly</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Bank Security Features</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Encrypted transaction processing</li>
                          <li>• Multi-signature authorization for large amounts</li>
                          <li>• Real-time fraud detection</li>
                          <li>• Account activity monitoring</li>
                          <li>• Secure backup and recovery systems</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Emergency Procedures</h4>
                        <ul className="text-sm text-yellow-800 space-y-1">
                          <li>• Immediately freeze compromised accounts</li>
                          <li>• Contact bank security team</li>
                          <li>• File incident reports with server staff</li>
                          <li>• Change all related passwords</li>
                          <li>• Monitor accounts for unusual activity</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Fraud Prevention</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Red Flags to Watch:</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>• Unexpected account balance changes</li>
                        <li>• Unfamiliar transaction notifications</li>
                        <li>• Requests for sensitive information</li>
                        <li>• Pressure to make quick financial decisions</li>
                        <li>• Offers that seem too good to be true</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Ready to Start Banking?</h3>
              <p className="text-gray-600 mb-4">
                Secure your wealth and grow your finances with our banking system!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/towny/wiki/economy" 
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Economy Guide
                </Link>
                <Link 
                  href="/towny/wiki/shops" 
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Shop System
                </Link>
                <a 
                  href="https://discord.gg/8DY3eXHnAg" 
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
