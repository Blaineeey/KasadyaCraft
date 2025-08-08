import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function AlliancesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Towny Alliances Guide</h1>
            <p className="text-xl text-gray-600">Build powerful coalitions and strengthen your nation through strategic partnerships</p>
          </div>

          <Tabs defaultValue="basics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basics">Alliance Basics</TabsTrigger>
              <TabsTrigger value="formation">Formation</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="basics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🤝 Understanding Alliances
                  </CardTitle>
                  <CardDescription>
                    Learn the fundamentals of nation alliances
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">Alliance Types</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="default" className="bg-blue-100 text-blue-800">Bilateral</Badge>
                          <span className="text-sm">Two-nation partnership</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">Multilateral</Badge>
                          <span className="text-sm">Multiple nation coalition</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Regional</Badge>
                          <span className="text-sm">Geographic-based alliance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive" className="bg-purple-100 text-purple-800">Ideological</Badge>
                          <span className="text-sm">Shared values/goals</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">Alliance Benefits</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Mutual defense protection</li>
                        <li>• Shared resources and trade</li>
                        <li>• Coordinated military actions</li>
                        <li>• Diplomatic support</li>
                        <li>• Information sharing</li>
                        <li>• Joint infrastructure projects</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alliance Commands</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div><span className="text-blue-600">/nation ally add [nation]</span> - Send alliance request</div>
                    <div><span className="text-green-600">/nation ally remove [nation]</span> - End alliance</div>
                    <div><span className="text-purple-600">/nation ally list</span> - View current allies</div>
                    <div><span className="text-orange-600">/nation list allies</span> - See all nation alliances</div>
                    <div><span className="text-red-600">/nation set board [message]</span> - Alliance announcements</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alliance Hierarchy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Senior Partner</h3>
                      <p className="text-sm text-gray-600">Largest or most influential nation in the alliance</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Leads alliance decisions</li>
                        <li>• Coordinates military actions</li>
                        <li>• Represents alliance diplomatically</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Equal Partners</h3>
                      <p className="text-sm text-gray-600">Nations with similar power and influence</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Shared decision making</li>
                        <li>• Rotating leadership roles</li>
                        <li>• Balanced contributions</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Junior Partners</h3>
                      <p className="text-sm text-gray-600">Smaller nations seeking protection and growth</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Receive protection and support</li>
                        <li>• Contribute specialized resources</li>
                        <li>• Follow senior partner leadership</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="formation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Forming an Alliance</CardTitle>
                  <CardDescription>Step-by-step guide to creating alliances</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-semibold">Step 1: Identify Potential Partners</h3>
                      <p className="text-sm text-gray-600 mt-1">Look for nations with:</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Compatible goals and values</li>
                        <li>• Complementary strengths</li>
                        <li>• Geographic proximity or strategic location</li>
                        <li>• Stable leadership and population</li>
                        <li>• Good reputation in the community</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="font-semibold">Step 2: Initial Contact</h3>
                      <p className="text-sm text-gray-600 mt-1">Reach out through:</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• In-game private messages</li>
                        <li>• Discord direct messages</li>
                        <li>• Forum posts or announcements</li>
                        <li>• Diplomatic envoys</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="font-semibold">Step 3: Negotiate Terms</h3>
                      <p className="text-sm text-gray-600 mt-1">Discuss key points:</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Mutual defense obligations</li>
                        <li>• Trade agreements and benefits</li>
                        <li>• Resource sharing arrangements</li>
                        <li>• Leadership structure</li>
                        <li>• Exit conditions</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h3 className="font-semibold">Step 4: Formalize Alliance</h3>
                      <p className="text-sm text-gray-600 mt-1">Make it official:</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Send in-game alliance requests</li>
                        <li>• Create written alliance charter</li>
                        <li>• Announce publicly on Discord</li>
                        <li>• Set up communication channels</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alliance Charter Template</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg text-sm">
                    <h3 className="font-semibold mb-3">Alliance Charter: [Alliance Name]</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Article I: Members</h4>
                        <p>This alliance consists of the following nations: [List nations]</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Article II: Purpose</h4>
                        <p>The alliance exists to: [State goals and objectives]</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Article III: Mutual Defense</h4>
                        <p>Members agree to defend each other against unprovoked attacks</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Article IV: Trade & Commerce</h4>
                        <p>Preferential trading terms and resource sharing agreements</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Article V: Leadership</h4>
                        <p>Decision-making structure and leadership roles</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Article VI: Termination</h4>
                        <p>Conditions under which the alliance may be dissolved</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="management" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Alliance Management</CardTitle>
                  <CardDescription>Maintaining strong alliance relationships</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Communication</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Regular Meetings:</strong> Weekly alliance councils</li>
                        <li><strong>Discord Channels:</strong> Dedicated alliance chat</li>
                        <li><strong>Information Sharing:</strong> Intelligence reports</li>
                        <li><strong>Transparency:</strong> Open decision making</li>
                        <li><strong>Conflict Resolution:</strong> Mediation procedures</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Coordination</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Joint Operations:</strong> Coordinated military actions</li>
                        <li><strong>Resource Pooling:</strong> Shared infrastructure projects</li>
                        <li><strong>Trade Networks:</strong> Integrated economies</li>
                        <li><strong>Defense Planning:</strong> Strategic positioning</li>
                        <li><strong>Diplomatic Unity:</strong> Consistent foreign policy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Alliance Roles & Responsibilities</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium text-blue-700">Alliance Leader</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Overall strategic direction</li>
                          <li>• External diplomacy</li>
                          <li>• Conflict resolution</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-700">Military Commander</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Defense coordination</li>
                          <li>• Battle planning</li>
                          <li>• Training programs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-700">Economic Coordinator</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Trade agreements</li>
                          <li>• Resource allocation</li>
                          <li>• Financial planning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Common Alliance Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-red-700 mb-2">Free Riding</h3>
                      <p className="text-sm text-gray-600 mb-2">Some members benefit without contributing</p>
                      <p className="text-sm"><strong>Solution:</strong> Clear contribution requirements and regular reviews</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-red-700 mb-2">Conflicting Interests</h3>
                      <p className="text-sm text-gray-600 mb-2">Members have different goals or priorities</p>
                      <p className="text-sm"><strong>Solution:</strong> Regular alignment meetings and compromise</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-red-700 mb-2">Power Imbalances</h3>
                      <p className="text-sm text-gray-600 mb-2">One nation dominates alliance decisions</p>
                      <p className="text-sm"><strong>Solution:</strong> Rotating leadership and equal representation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Alliance Strategies</CardTitle>
                  <CardDescription>Complex diplomatic and strategic concepts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Alliance Networks</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Hub & Spoke:</strong> Central nation with multiple allies</li>
                        <li><strong>Web Network:</strong> Interconnected alliance system</li>
                        <li><strong>Bloc System:</strong> Competing alliance groups</li>
                        <li><strong>Flexible Partnerships:</strong> Issue-specific alliances</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Strategic Considerations</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Balance of Power:</strong> Prevent any one alliance from dominating</li>
                        <li><strong>Entanglement Risk:</strong> Avoid being dragged into unwanted conflicts</li>
                        <li><strong>Credibility:</strong> Honor commitments to maintain trust</li>
                        <li><strong>Flexibility:</strong> Adapt to changing circumstances</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Alliance Evolution Stages</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Badge variant="outline">1</Badge>
                        <div>
                          <h4 className="font-medium">Formation</h4>
                          <p className="text-sm text-gray-600">Initial partnership establishment</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="outline">2</Badge>
                        <div>
                          <h4 className="font-medium">Consolidation</h4>
                          <p className="text-sm text-gray-600">Building trust and cooperation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="outline">3</Badge>
                        <div>
                          <h4 className="font-medium">Integration</h4>
                          <p className="text-sm text-gray-600">Deep cooperation and coordination</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="outline">4</Badge>
                        <div>
                          <h4 className="font-medium">Institutionalization</h4>
                          <p className="text-sm text-gray-600">Formal structures and procedures</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">🎯 Advanced Tips</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Maintain multiple alliance options for flexibility</li>
                      <li>• Use economic integration to strengthen bonds</li>
                      <li>• Create joint institutions for long-term stability</li>
                      <li>• Balance alliance commitments with national interests</li>
                      <li>• Monitor alliance effectiveness regularly</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Need help with alliances? Join our community!</p>
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
