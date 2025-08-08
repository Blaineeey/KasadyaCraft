import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function NationBenefitsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nation Benefits Guide</h1>
            <p className="text-xl text-gray-600">Discover the advantages and perks of nation membership</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="economic">Economic</TabsTrigger>
              <TabsTrigger value="military">Military</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    👑 Nation Membership Benefits
                  </CardTitle>
                  <CardDescription>
                    Why joining a nation is advantageous for towns and players
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Immediate Benefits</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="default" className="bg-green-100 text-green-800">Protection</Badge>
                          <span className="text-sm">Military defense and support</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">Trade</Badge>
                          <span className="text-sm">Access to nation-wide markets</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Resources</Badge>
                          <span className="text-sm">Shared materials and supplies</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive" className="bg-purple-100 text-purple-800">Prestige</Badge>
                          <span className="text-sm">Enhanced reputation and status</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Long-term Advantages</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Faster town growth and development</li>
                        <li>• Access to nation infrastructure</li>
                        <li>• Diplomatic immunity and protection</li>
                        <li>• Shared knowledge and expertise</li>
                        <li>• Collective bargaining power</li>
                        <li>• Cultural exchange opportunities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nation Tier System</CardTitle>
                  <CardDescription>Benefits scale with nation size and influence</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Tier 1</Badge>
                        <h3 className="font-semibold">Emerging Nation</h3>
                        <span className="text-sm text-gray-600">(2-5 towns)</span>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• Basic protection and support</li>
                        <li>• Access to nation chat</li>
                        <li>• Shared teleportation network</li>
                        <li>• Basic trade agreements</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Tier 2</Badge>
                        <h3 className="font-semibold">Established Nation</h3>
                        <span className="text-sm text-gray-600">(6-15 towns)</span>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• Enhanced military support</li>
                        <li>• Nation-wide infrastructure projects</li>
                        <li>• Advanced trade networks</li>
                        <li>• Diplomatic representation</li>
                        <li>• Resource sharing programs</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="default" className="bg-purple-100 text-purple-800">Tier 3</Badge>
                        <h3 className="font-semibold">Major Power</h3>
                        <span className="text-sm text-gray-600">(16+ towns)</span>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• Full military protection</li>
                        <li>• Extensive infrastructure networks</li>
                        <li>• Preferential trade status</li>
                        <li>• International influence</li>
                        <li>• Advanced nation perks</li>
                        <li>• Leadership opportunities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="economic" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Economic Benefits</CardTitle>
                  <CardDescription>Financial advantages of nation membership</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Trade Advantages</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Reduced Taxes:</strong> Lower trade fees within nation</li>
                        <li><strong>Market Access:</strong> Nation-wide shop networks</li>
                        <li><strong>Bulk Purchasing:</strong> Group buying power</li>
                        <li><strong>Trade Routes:</strong> Protected commercial pathways</li>
                        <li><strong>Currency Benefits:</strong> Stable nation economy</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Financial Support</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Development Loans:</strong> Nation-backed funding</li>
                        <li><strong>Emergency Aid:</strong> Support during crises</li>
                        <li><strong>Infrastructure Grants:</strong> Shared project funding</li>
                        <li><strong>Tax Incentives:</strong> Reduced upkeep costs</li>
                        <li><strong>Investment Opportunities:</strong> Nation-wide projects</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Economic Perks by Nation Size</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Small Nations (2-5 towns)</span>
                        <Badge variant="outline">5% trade discount</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Medium Nations (6-15 towns)</span>
                        <Badge variant="secondary">10% trade discount + loans</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Large Nations (16+ towns)</span>
                        <Badge variant="default">15% discount + full benefits</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resource Sharing Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Material Banks</h3>
                      <p className="text-sm text-gray-600 mb-2">Shared storage for common resources</p>
                      <ul className="text-sm space-y-1">
                        <li>• Building materials</li>
                        <li>• Food supplies</li>
                        <li>• Tools and equipment</li>
                        <li>• Rare resources</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Skill Sharing</h3>
                      <p className="text-sm text-gray-600 mb-2">Access to specialized expertise</p>
                      <ul className="text-sm space-y-1">
                        <li>• Master builders</li>
                        <li>• Redstone engineers</li>
                        <li>• Farming specialists</li>
                        <li>• Combat trainers</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Technology Transfer</h3>
                      <p className="text-sm text-gray-600 mb-2">Share advanced techniques</p>
                      <ul className="text-sm space-y-1">
                        <li>• Automated farms</li>
                        <li>• Defense systems</li>
                        <li>• Transportation networks</li>
                        <li>• Industrial processes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="military" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Military Benefits</CardTitle>
                  <CardDescription>Defense and security advantages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Defense Support</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Mutual Defense:</strong> Nation-wide protection pact</li>
                        <li><strong>Rapid Response:</strong> Quick military assistance</li>
                        <li><strong>Fortification Aid:</strong> Help building defenses</li>
                        <li><strong>Intelligence Sharing:</strong> Threat information</li>
                        <li><strong>Strategic Planning:</strong> Coordinated defense</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Military Resources</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Weapon Supplies:</strong> Access to nation armory</li>
                        <li><strong>Training Programs:</strong> Combat skill development</li>
                        <li><strong>Elite Units:</strong> Specialized military forces</li>
                        <li><strong>War Machines:</strong> Advanced siege equipment</li>
                        <li><strong>Veteran Support:</strong> Experienced commanders</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Nation Military Structure</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="destructive">High Command</Badge>
                        <span className="text-sm">Nation leaders and military strategists</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">Regional Forces</Badge>
                        <span className="text-sm">Area-specific defense units</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">Town Guards</Badge>
                        <span className="text-sm">Local defense and patrol units</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="default">Militia</Badge>
                        <span className="text-sm">Citizen soldiers and reserves</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">⚔️ Military Perks</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Priority protection during conflicts</li>
                      <li>• Access to nation war chest</li>
                      <li>• Participation in military campaigns</li>
                      <li>• Recognition and military ranks</li>
                      <li>• Veteran benefits and honors</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Passive Protection</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Diplomatic Immunity:</strong> Protection from random attacks</li>
                        <li><strong>Safe Passage:</strong> Secure travel through nation territory</li>
                        <li><strong>Border Security:</strong> Monitored nation boundaries</li>
                        <li><strong>Early Warning:</strong> Threat detection systems</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Active Defense</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Emergency Response:</strong> Rapid deployment forces</li>
                        <li><strong>Counter-Attacks:</strong> Retaliation capabilities</li>
                        <li><strong>Siege Breaking:</strong> Relief operations</li>
                        <li><strong>Evacuation Support:</strong> Emergency relocation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="social" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Social Benefits</CardTitle>
                  <CardDescription>Community and cultural advantages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Community Features</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Nation Chat:</strong> Dedicated communication channel</li>
                        <li><strong>Events & Festivals:</strong> Nation-wide celebrations</li>
                        <li><strong>Cultural Exchange:</strong> Inter-town programs</li>
                        <li><strong>Mentorship:</strong> Experienced player guidance</li>
                        <li><strong>Social Networks:</strong> Expanded friend groups</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Recognition Systems</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Nation Ranks:</strong> Hierarchical progression</li>
                        <li><strong>Achievement Awards:</strong> Special recognitions</li>
                        <li><strong>Hall of Fame:</strong> Historical records</li>
                        <li><strong>Titles & Honors:</strong> Prestigious designations</li>
                        <li><strong>Legacy Building:</strong> Long-term impact</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Nation Rank Progression</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Citizen</span>
                        <Badge variant="outline">Basic member</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Resident</span>
                        <Badge variant="secondary">Established member</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Noble</span>
                        <Badge variant="default">Respected contributor</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Lord/Lady</span>
                        <Badge variant="destructive">High-ranking official</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cultural Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Education</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Building workshops</li>
                        <li>• History lessons</li>
                        <li>• Skill training</li>
                        <li>• Leadership development</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Entertainment</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Tournaments & competitions</li>
                        <li>• Cultural festivals</li>
                        <li>• Art exhibitions</li>
                        <li>• Music performances</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Collaboration</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Joint building projects</li>
                        <li>• Research initiatives</li>
                        <li>• Exploration expeditions</li>
                        <li>• Community service</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg mt-4">
                    <h3 className="font-semibold mb-2">🎉 Social Perks</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Access to exclusive nation events</li>
                      <li>• Priority in community projects</li>
                      <li>• Special cosmetic rewards</li>
                      <li>• Historical documentation</li>
                      <li>• Legacy preservation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Membership Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Basic Requirements</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Active town with established population</li>
                        <li>• Good standing in the community</li>
                        <li>• Commitment to nation values</li>
                        <li>• Willingness to contribute</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Ongoing Obligations</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Participate in nation activities</li>
                        <li>• Support fellow members</li>
                        <li>• Honor alliance commitments</li>
                        <li>• Maintain diplomatic relations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Ready to join a nation? Connect with our community!</p>
            <div className="flex justify-center gap-4">
              <Link 
                href="https://discord.gg/8DY3eXHnAg" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Join Discord
              </Link>
              <Link 
                href="/towny/wiki" 
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Wiki
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
