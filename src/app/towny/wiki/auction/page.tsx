import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

export default function AuctionGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Auction House Guide</h1>
            <p className="text-xl text-gray-600 mb-6">
              Buy and sell items through competitive bidding and instant sales
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary">Bidding</Badge>
              <Badge variant="secondary">Selling</Badge>
              <Badge variant="secondary">Market</Badge>
              <Badge variant="secondary">Competition</Badge>
            </div>
          </div>

          <Tabs defaultValue="basics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="basics">Auction Basics</TabsTrigger>
              <TabsTrigger value="buying">Buying Items</TabsTrigger>
              <TabsTrigger value="selling">Selling Items</TabsTrigger>
              <TabsTrigger value="strategies">Strategies</TabsTrigger>
              <TabsTrigger value="tips">Tips & Tricks</TabsTrigger>
            </TabsList>

            <TabsContent value="basics">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Understanding the Auction House</CardTitle>
                    <CardDescription>Learn how the auction system works</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Auction Types</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• <strong>Bidding Auctions:</strong> Players compete with increasing bids</li>
                        <li>• <strong>Buy It Now:</strong> Fixed price instant purchases</li>
                        <li>• <strong>Reserve Auctions:</strong> Minimum price must be met</li>
                        <li>• <strong>Dutch Auctions:</strong> Price decreases over time</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="font-semibold">Essential Auction Commands:</div>
                      <div>/ah - Open auction house GUI</div>
                      <div>/ah sell [price] - Sell held item</div>
                      <div>/ah selling - View your active auctions</div>
                      <div>/ah expired - Check expired auctions</div>
                      <div>/ah search [item] - Search for specific items</div>
                      <div>/ah bid [amount] - Place a bid</div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Auction Fees</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Listing fee: 2% of starting price</li>
                        <li>• Success fee: 5% of final sale price</li>
                        <li>• Fees are non-refundable</li>
                        <li>• Higher value items may have different rates</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Auction House Interface</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Navigation</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Browse by category</li>
                          <li>• Sort by price, time, popularity</li>
                          <li>• Filter by item type</li>
                          <li>• Search specific items</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Item Information</h4>
                        <ul className="text-sm text-purple-800 space-y-1">
                          <li>• Current bid/price</li>
                          <li>• Time remaining</li>
                          <li>• Seller information</li>
                          <li>• Item condition/enchantments</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="buying">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Buying at Auction</CardTitle>
                    <CardDescription>Master the art of competitive bidding</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-2">Bidding Process</h4>
                      <ol className="text-sm text-indigo-800 space-y-1">
                        <li>1. Browse available auctions</li>
                        <li>2. Click on items to view details</li>
                        <li>3. Place your bid (must exceed current bid)</li>
                        <li>4. Monitor auction progress</li>
                        <li>5. Receive items if you win</li>
                      </ol>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Bidding Strategies</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Set maximum budget beforehand</li>
                          <li>• Bid in final minutes for best chance</li>
                          <li>• Research item values first</li>
                          <li>• Watch for sniping opportunities</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">Buy It Now</h4>
                        <ul className="text-sm text-orange-800 space-y-1">
                          <li>• Instant purchase at fixed price</li>
                          <li>• No waiting or competition</li>
                          <li>• Often higher than auction price</li>
                          <li>• Good for urgent needs</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Bidding Warnings</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Don't get caught in bidding wars</li>
                        <li>• Verify item authenticity</li>
                        <li>• Check seller reputation</li>
                        <li>• Be aware of auction end times</li>
                        <li>• Have sufficient funds available</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Smart Buying Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Finding Good Deals:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Check auctions ending at odd hours</li>
                        <li>• Look for misspelled item names</li>
                        <li>• Monitor new player auctions</li>
                        <li>• Watch for bulk lot opportunities</li>
                        <li>• Set up search alerts for wanted items</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="selling">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Selling at Auction</CardTitle>
                    <CardDescription>Maximize your profits through strategic selling</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-teal-900 mb-2">Listing Process</h4>
                      <ol className="text-sm text-teal-800 space-y-1">
                        <li>1. Hold the item you want to sell</li>
                        <li>2. Use /ah sell [starting price]</li>
                        <li>3. Set auction duration (1-7 days)</li>
                        <li>4. Optionally set Buy It Now price</li>
                        <li>5. Confirm listing and pay fees</li>
                      </ol>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Pricing Strategies</h4>
                        <ul className="text-sm text-purple-800 space-y-1">
                          <li>• Research current market prices</li>
                          <li>• Start low to attract bidders</li>
                          <li>• Set reasonable Buy It Now prices</li>
                          <li>• Consider item rarity and demand</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Timing Your Sales</h4>
                        <ul className="text-sm text-yellow-800 space-y-1">
                          <li>• End auctions during peak hours</li>
                          <li>• Avoid major server events</li>
                          <li>• Consider weekend vs weekday timing</li>
                          <li>• Account for different time zones</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Item Preparation:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Clean and repair items before listing</li>
                        <li>• Enchant items to increase value</li>
                        <li>• Bundle related items together</li>
                        <li>• Write clear, honest descriptions</li>
                        <li>• Take screenshots for valuable items</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Managing Your Auctions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Active Management:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Monitor bidding activity regularly</li>
                        <li>• Respond to buyer questions promptly</li>
                        <li>• Collect payments from completed sales</li>
                        <li>• Relist unsold items if needed</li>
                        <li>• Track your selling statistics</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="strategies">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Auction Strategies</CardTitle>
                    <CardDescription>Professional techniques for serious traders</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-indigo-900 mb-2">Market Analysis</h4>
                        <ul className="text-sm text-indigo-800 space-y-1">
                          <li>• Track price trends over time</li>
                          <li>• Identify seasonal patterns</li>
                          <li>• Monitor competitor activities</li>
                          <li>• Analyze supply and demand</li>
                        </ul>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-cyan-900 mb-2">Arbitrage Opportunities</h4>
                        <ul className="text-sm text-cyan-800 space-y-1">
                          <li>• Buy low at auction, sell high in shops</li>
                          <li>• Cross-server price differences</li>
                          <li>• Bulk buying for resale</li>
                          <li>• Timing market fluctuations</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">Auction Sniping</h4>
                      <p className="text-sm text-orange-800 mb-2">
                        Bidding in the final seconds to win auctions:
                      </p>
                      <ul className="text-sm text-orange-800 space-y-1">
                        <li>• Monitor auctions ending soon</li>
                        <li>• Prepare maximum bid amount</li>
                        <li>• Bid with 10-30 seconds remaining</li>
                        <li>• Use multiple accounts strategically</li>
                        <li>• Account for server lag</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Risk Management</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Never bid more than you can afford</li>
                        <li>• Diversify your auction portfolio</li>
                        <li>• Set stop-loss limits for bidding</li>
                        <li>• Keep emergency funds available</li>
                        <li>• Don't chase losses with bigger bids</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Seasonal Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Event-Based Trading:</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Stock up before major server events</li>
                        <li>• Sell holiday-themed items during events</li>
                        <li>• Buy building materials before competitions</li>
                        <li>• Trade rare items during special occasions</li>
                        <li>• Monitor admin announcements for opportunities</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tips">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Pro Tips & Tricks</CardTitle>
                    <CardDescription>Expert advice for auction house success</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Buyer Tips</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Set up notifications for wanted items</li>
                          <li>• Use multiple search terms and spellings</li>
                          <li>• Check auction history for price trends</li>
                          <li>• Build relationships with reliable sellers</li>
                          <li>• Consider total cost including fees</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Seller Tips</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Use attractive item names and descriptions</li>
                          <li>• Bundle complementary items together</li>
                          <li>• Offer bulk discounts for multiple purchases</li>
                          <li>• Maintain a good seller reputation</li>
                          <li>• Respond quickly to buyer inquiries</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Common Mistakes</h4>
                        <ul className="text-sm text-purple-800 space-y-1">
                          <li>• Bidding emotionally instead of strategically</li>
                          <li>• Not researching item values beforehand</li>
                          <li>• Forgetting about auction fees in calculations</li>
                          <li>• Listing items at wrong times</li>
                          <li>• Not reading item descriptions carefully</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Automation Tools</h4>
                        <ul className="text-sm text-yellow-800 space-y-1">
                          <li>• Set up price alerts for target items</li>
                          <li>• Use auction tracking spreadsheets</li>
                          <li>• Schedule reminders for auction endings</li>
                          <li>• Track your profit/loss over time</li>
                          <li>• Monitor competitor pricing patterns</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Troubleshooting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">Common Issues</h4>
                        <ul className="text-sm text-red-800 space-y-1">
                          <li>• <strong>Can't place bid:</strong> Check if you have sufficient funds</li>
                          <li>• <strong>Item not received:</strong> Check your mailbox or /ah expired</li>
                          <li>• <strong>Auction disappeared:</strong> May have been cancelled by admin</li>
                          <li>• <strong>Payment not received:</strong> Check for server lag or contact staff</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Getting Help</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Use /helpop for immediate assistance</li>
                          <li>• Join our <a href="https://discord.gg/8DY3eXHnAg" className="underline">Discord server</a></li>
                          <li>• Check the economy guides for more info</li>
                          <li>• Ask experienced traders for advice</li>
                        </ul>
                      </div>
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
                Join the auction house and discover great deals today!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/towny/wiki/economy" 
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Economy Guide
                </Link>
                <Link 
                  href="/towny/wiki/trading" 
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Trading Tips
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
