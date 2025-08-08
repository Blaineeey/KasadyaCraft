import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function WarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Towny Wars Guide</h1>
            <p className="text-xl text-gray-600">Master the art of warfare and lead your nation to victory</p>
          </div>

          <Tabs defaultValue="basics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basics">War Basics</TabsTrigger>
              <TabsTrigger value="mechanics">War Mechanics</TabsTrigger>
              <TabsTrigger value="strategy">War Strategy</TabsTrigger>
              <TabsTrigger value="aftermath">Post-War</TabsTrigger>
            </TabsList>

            <TabsContent value="basics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    ⚔️ Understanding Wars
                  </CardTitle>
                  <CardDescription>
                    Learn the fundamentals of nation warfare
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">War Types</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">Total War</Badge>
                          <span className="text-sm">Complete military conflict</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">Limited War</Badge>
                          <span className="text-sm">Specific objectives only</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Siege War</Badge>
                          <span className="text-sm">Town capture focused</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="default">Proxy War</Badge>
                          <span className="text-sm">Fighting through allies</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">War Causes</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Territorial disputes</li>
                        <li>• Resource conflicts</li>
                        <li>• Trade route control</li>
                        <li>• Ideological differences</li>
                        <li>• Alliance obligations</li>
                        <li>• Historical grievances</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>War Declaration Commands</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div><span className="text-red-600">/nation enemy add [nation]</span> - Declare war</div>
                    <div><span className="text-blue-600">/nation ally list</span> - Check your allies</div>
                    <div><span className="text-green-600">/nation peaceful add [nation]</span> - Offer peace</div>
                    <div><span className="text-purple-600">/towny war stats</span> - View war statistics</div>
                    <div><span className="text-orange-600">/nation set board [message]</span> - War announcements</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>⚠️ War Consequences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-red-700 mb-2">Risks</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Town destruction and grief</li>
                        <li>• Economic losses from conflict</li>
                        <li>• Population decline</li>
                        <li>• Diplomatic isolation</li>
                        <li>• Resource depletion</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 mb-2">Rewards</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Territorial expansion</li>
                        <li>• Resource acquisition</li>
                        <li>• Increased prestige</li>
                        <li>• Strategic advantages</li>
                        <li>• Economic opportunities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mechanics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>War Mechanics</CardTitle>
                  <CardDescription>How wars function in Towny</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">PvP Activation</h3>
                      <p className="text-sm text-gray-600 mb-2">When nations are at war, PvP is enabled between members</p>
                      <ul className="text-sm space-y-1">
                        <li>• PvP enabled in wilderness areas</li>
                        <li>• Town plots remain protected unless sieged</li>
                        <li>• Allied nations can assist in combat</li>
                        <li>• Neutral players cannot be attacked</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Siege Mechanics</h3>
                      <p className="text-sm text-gray-600 mb-2">Capturing enemy towns through siege warfare</p>
                      <ul className="text-sm space-y-1">
                        <li>• Siege must be declared 24 hours in advance</li>
                        <li>• Defenders get preparation time</li>
                        <li>• Battle occurs at scheduled time</li>
                        <li>• Winner determined by objectives</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">War Points System</h3>
                      <p className="text-sm text-gray-600 mb-2">Track war progress and determine victory</p>
                      <div className="grid md:grid-cols-2 gap-4 mt-2">
                        <div>
                          <h4 className="font-medium">Gaining Points</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Kill enemy players: +1 point</li>
                            <li>• Capture towns: +10 points</li>
                            <li>• Destroy enemy builds: +2 points</li>
                            <li>• Control objectives: +5 points</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Losing Points</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Death in combat: -1 point</li>
                            <li>• Lose towns: -10 points</li>
                            <li>• Retreat from battle: -3 points</li>
                            <li>• Lose objectives: -5 points</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="strategy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>War Strategy & Tactics</CardTitle>
                  <CardDescription>Advanced warfare techniques</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Pre-War Preparation</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Intelligence:</strong> Scout enemy territories</li>
                        <li><strong>Alliances:</strong> Secure military support</li>
                        <li><strong>Resources:</strong> Stockpile weapons and supplies</li>
                        <li><strong>Fortifications:</strong> Strengthen defenses</li>
                        <li><strong>Training:</strong> Practice PvP combat</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Combat Tactics</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Coordination:</strong> Use voice chat for teamwork</li>
                        <li><strong>Flanking:</strong> Attack from multiple angles</li>
                        <li><strong>Guerrilla:</strong> Hit-and-run tactics</li>
                        <li><strong>Siege:</strong> Systematic town capture</li>
                        <li><strong>Defense:</strong> Fortified positions</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Battle Formations</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <h4 className="font-medium">Phalanx</h4>
                        <p className="text-sm text-gray-600">Tight formation with shields</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-medium">Pincer</h4>
                        <p className="text-sm text-gray-600">Surround enemy forces</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-medium">Skirmish</h4>
                        <p className="text-sm text-gray-600">Mobile hit-and-run</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">⚔️ Combat Tips</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Always fight with allies when possible</li>
                      <li>• Use terrain to your advantage</li>
                      <li>• Keep backup gear in ender chests</li>
                      <li>• Coordinate attacks via Discord</li>
                      <li>• Target enemy supply lines</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="aftermath" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Post-War Procedures</CardTitle>
                  <CardDescription>Managing the aftermath of conflict</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Victory Procedures</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Peace Terms:</strong> Negotiate surrender conditions</li>
                        <li><strong>Reparations:</strong> Demand compensation</li>
                        <li><strong>Territory:</strong> Claim conquered lands</li>
                        <li><strong>Prisoners:</strong> Handle captured players</li>
                        <li><strong>Reconstruction:</strong> Rebuild damaged areas</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Defeat Recovery</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Assess Damage:</strong> Evaluate losses</li>
                        <li><strong>Rebuild:</strong> Restore infrastructure</li>
                        <li><strong>Diplomacy:</strong> Negotiate better terms</li>
                        <li><strong>Allies:</strong> Seek support for recovery</li>
                        <li><strong>Reform:</strong> Learn from mistakes</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Peace Treaty Template</h3>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <p><strong>Peace Agreement Between [Nation A] and [Nation B]</strong></p>
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Immediate cessation of hostilities</li>
                        <li>Return of prisoners of war</li>
                        <li>Reparation payments: [Amount]</li>
                        <li>Territorial adjustments: [Details]</li>
                        <li>Non-aggression period: [Duration]</li>
                        <li>Trade resumption terms</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">🕊️ Reconciliation Tips</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Focus on mutual benefits in peace talks</li>
                      <li>• Allow face-saving measures for defeated enemies</li>
                      <li>• Consider long-term stability over short-term gains</li>
                      <li>• Use neutral mediators for complex negotiations</li>
                      <li>• Document all agreements clearly</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Need help with warfare? Join our community!</p>
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
