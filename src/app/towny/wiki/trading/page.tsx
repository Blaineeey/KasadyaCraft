import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

export default function TradingGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Trading & Commerce Guide</h1>
            <p className="text-xl text-gray-600 mb-6">
              Master the art of trade and build profitable business relationships
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary">Player Trading</Badge>
              <Badge variant="secondary">Trade Routes</Badge>
              <Badge variant="secondary">Negotiations</Badge>
              <Badge variant="secondary">Contracts</Badge>
            </div>
          </div>

          <Tabs defaultValue="basics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="basics">Trading Basics</TabsTrigger>
              <TabsTrigger value="methods">Trade Methods</TabsTrigger>
              <TabsTrigger value="routes">Trade Routes</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Trading</TabsTrigger>
              <TabsTrigger value="safety">Safety & Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="basics">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Understanding Trade</CardTitle>
                    <CardDescription>Learn the fundamentals of player-to-player commerce</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-2">Direct Trading</h3>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Face-to-face item exchanges</li>
                          <li>• Immediate transactions</li>
                          <li>• Personal negotiations</li>
                          <li>• Trust-based system</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-900 mb-2">Market Trading</h3>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Shop-based commerce</li>
                          <li>• Standardized pricing</li>
                          <li>• Automated transactions</li>
                          <li>• Broader reach</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="font-semibold">Essential Trading Commands:</div>
                      <div>/trade [player] - Request trade with player</div>
                      <div>/trade accept - Accept trade request</div>
                      <div>/trade deny - Deny trade request</div>
                      <div>/pay [player] [amount] - Send money</div>
                      <div>/balance - Check your money</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Trade Preparation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Before You Trade:</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Research current market prices</li>
                        <li>• Verify item authenticity and condition</li>
                        <li>• Establish clear terms and conditions</li>
                        <li>• Choose secure trading locations</li>
                        <li>• Have backup payment methods ready</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="methods">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Trading Methods</CardTitle>
                    <CardDescription>Different ways to conduct trades safely</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Secure Trade Plugin</h4>
                        <p className="text-sm text-green-800 mb-2">
                          Use the built-in trade system for maximum security:
                        </p>
                        <ol className="text-sm text-green-800 space-y-1">
                          <li>1. Send trade request: /trade [player]</li>
                          <li>2. Both players add items to trade window</li>
                          <li>3. Both players confirm the trade</li>
                          <li>4. Items are exchanged automatically</li>
                        </ol>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Chest Trading</h4>
                        <p className="text-sm text-blue-800 mb-2">
                          For larger or delayed transactions:
                        </p>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Use locked chests in neutral territory</li>
                          <li>• Set up access permissions for both parties</li>
                          <li>• Include written agreements in books</li>
                          <li>• Use staff as witnesses for large trades</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Auction Trading</h4>
                        <p className="text-sm text-purple-800 mb-2">
                          Public bidding for competitive pricing:
                        </p>
                        <ul className="text-sm text-purple-800 space-y-1">
                          <li>• Announce auctions in trade chat</li>
                          <li>• Set minimum bid and time limits</li>
                          <li>• Use neutral locations for viewing</li>
                          <li>• Accept highest valid bid</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Currency Options</h4>
                        <ul className="text-sm text-yellow-800 space-y-1">
                          <li>• Server currency (primary)</li>
                          <li>• Valuable items (diamonds, etc.)</li>
                          <li>• Service exchanges</li>
                          <li>• Land/property trades</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">Payment Security</h4>
                        <ul className="text-sm text-red-800 space-y-1">
                          <li>• Verify payment before delivery</li>
                          <li>• Use escrow for large amounts</li>
                          <li>• Keep transaction records</li>
                          <li>• Report payment issues</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="routes">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Establishing Trade Routes</CardTitle>
                    <CardDescription>Build profitable long-term trading relationships</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-2">Route Planning</h4>
                      <ul className="text-sm text-indigo-800 space-y-1">
                        <li>• Identify resource-rich towns</li>
                        <li>• Map transportation networks</li>
                        <li>• Calculate travel costs and time</li>
                        <li>• Establish regular schedules</li>
                        <li>• Build relationships with local merchants</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Resource Trading</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Mining towns → Raw materials</li>
                          <li>• Farming towns → Food supplies</li>
                          <li>• Coastal towns → Ocean resources</li>
                          <li>• Industrial towns → Crafted goods</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">Specialty Markets</h4>
                        <ul className="text-sm text-orange-800 space-y-1">
                          <li>• Enchanted items</li>
                          <li>• Rare building materials</li>
                          <li>• Decorative blocks</li>
                          <li>• Custom player creations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Trade Agreements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Contract Elements:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Item specifications and quantities</li>
                        <li>• Delivery schedules and locations</li>
                        <li>• Payment terms and methods</li>
                        <li>• Quality standards and inspection rights</li>
                        <li>• Dispute resolution procedures</li>
                        <li>• Contract duration and renewal terms</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="advanced">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Trading Strategies</CardTitle>
                    <CardDescription>Maximize profits with sophisticated techniques</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Market Manipulation</h4>
                        <ul className="text-sm text-purple-800 space-y-1">
                          <li>• Corner markets on rare items</li>
                          <li>• Create artificial scarcity</li>
                          <li>• Time releases for maximum impact</li>
                          <li>• Coordinate with other traders</li>
                        </ul>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Arbitrage Trading</h4>
                        <ul className="text-sm text-teal-800 space-y-1">
                          <li>• Buy low in one market</li>
                          <li>• Sell high in another</li>
                          <li>• Exploit price differences</li>
                          <li>• Factor in transport costs</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Investment Strategies</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Stockpile items before updates</li>
                        <li>• Invest in emerging markets</li>
                        <li>• Diversify your portfolio</li>
                        <li>• Monitor server events for opportunities</li>
                        <li>• Build strategic reserves</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Trading Networks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Building Your Network:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Establish relationships with key suppliers</li>
                        <li>• Create exclusive dealer agreements</li>
                        <li>• Form trading consortiums</li>
                        <li>• Develop information sharing networks</li>
                        <li>• Mentor new traders for loyalty</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="safety">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Trading Safety</CardTitle>
                    <CardDescription>Protect yourself from scams and fraud</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">Common Scams</h4>
                        <ul className="text-sm text-red-800 space-y-1">
                          <li>• Fake item switching during trades</li>
                          <li>• Payment after delivery promises</li>
                          <li>• Overpriced "rare" items</li>
                          <li>• Fake staff impersonation</li>
                          <li>• Ponzi scheme investments</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Safety Measures</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Always use secure trade plugins</li>
                          <li>• Verify player reputation before large trades</li>
                          <li>• Keep screenshots of agreements</li>
                          <li>• Trade in public, well-lit areas</li>
                          <li>• Report suspicious behavior immediately</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Dispute Resolution</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Contact staff immediately for help</li>
                          <li>• Provide evidence of the agreement</li>
                          <li>• Remain calm and professional</li>
                          <li>• Follow server dispute procedures</li>
                          <li>• Learn from the experience</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Trading Etiquette</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Best Practices:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Be honest about item conditions</li>
                        <li>• Honor your agreements</li>
                        <li>• Communicate clearly and promptly</li>
                        <li>• Respect other traders' time</li>
                        <li>• Build a positive reputation</li>
                        <li>• Help new traders learn the ropes</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Ready to Start Trading?</h3>
              <p className="text-gray-600 mb-4">
                Join our trading community and build your commercial network!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/towny/wiki/shops" 
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Shop Guide
                </Link>
                <Link 
                  href="/towny/wiki/economy" 
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Economy Basics
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
