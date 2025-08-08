import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function DiplomacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Towny Diplomacy Guide</h1>
            <p className="text-xl text-gray-600">Master the art of international relations and forge powerful alliances</p>
          </div>

          <Tabs defaultValue="basics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basics">Diplomacy Basics</TabsTrigger>
              <TabsTrigger value="relations">Nation Relations</TabsTrigger>
              <TabsTrigger value="treaties">Treaties & Pacts</TabsTrigger>
              <TabsTrigger value="strategy">Strategy Guide</TabsTrigger>
            </TabsList>

            <TabsContent value="basics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🤝 Understanding Diplomacy
                  </CardTitle>
                  <CardDescription>
                    Learn the fundamentals of nation-to-nation relations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">Diplomatic Status Types</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="default">Neutral</Badge>
                          <span className="text-sm">Default relationship status</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">Allied</Badge>
                          <span className="text-sm">Friendly nations with benefits</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">Enemy</Badge>
                          <span className="text-sm">Hostile relations, PvP enabled</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Peaceful</Badge>
                          <span className="text-sm">Non-aggression pact</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">Diplomatic Benefits</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Trade route bonuses</li>
                        <li>• Shared teleportation access</li>
                        <li>• Military cooperation</li>
                        <li>• Economic partnerships</li>
                        <li>• Information sharing</li>
                        <li>• Joint events and projects</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Essential Diplomacy Commands</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div><span className="text-blue-600">/nation ally add [nation]</span> - Send alliance request</div>
                    <div><span className="text-blue-600">/nation ally remove [nation]</span> - Remove alliance</div>
                    <div><span className="text-blue-600">/nation enemy add [nation]</span> - Declare enemy status</div>
                    <div><span className="text-blue-600">/nation enemy remove [nation]</span> - Remove enemy status</div>
                    <div><span className="text-blue-600">/nation peaceful add [nation]</span> - Request peace treaty</div>
                    <div><span className="text-blue-600">/nation list</span> - View all nations and relations</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="relations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Managing Nation Relations</CardTitle>
                  <CardDescription>Build and maintain diplomatic relationships</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Building Alliances</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Step 1:</strong> Identify potential allies with similar goals</p>
                        <p><strong>Step 2:</strong> Initiate diplomatic contact via Discord or in-game</p>
                        <p><strong>Step 3:</strong> Negotiate terms and benefits</p>
                        <p><strong>Step 4:</strong> Send formal alliance request</p>
                        <p><strong>Step 5:</strong> Maintain regular communication</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Managing Conflicts</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Mediation:</strong> Use neutral parties to resolve disputes</p>
                        <p><strong>Economic Pressure:</strong> Trade embargos and sanctions</p>
                        <p><strong>Diplomatic Isolation:</strong> Rally allies against aggressors</p>
                        <p><strong>Peace Treaties:</strong> Formal agreements to end conflicts</p>
                        <p><strong>Compensation:</strong> Reparations for damages</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alliance Benefits & Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-green-700 mb-3">Benefits</h3>
                      <ul className="space-y-1 text-sm">
                        <li>✅ Mutual defense agreements</li>
                        <li>✅ Shared teleportation networks</li>
                        <li>✅ Trade route bonuses</li>
                        <li>✅ Resource sharing agreements</li>
                        <li>✅ Joint military operations</li>
                        <li>✅ Diplomatic immunity in allied towns</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-orange-700 mb-3">Responsibilities</h3>
                      <ul className="space-y-1 text-sm">
                        <li>⚠️ Honor mutual defense pacts</li>
                        <li>⚠️ Respect allied territory</li>
                        <li>⚠️ Share intelligence on threats</li>
                        <li>⚠️ Maintain regular communication</li>
                        <li>⚠️ Support in diplomatic disputes</li>
                        <li>⚠️ Uphold agreed-upon treaties</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="treaties" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Treaty Types & Templates</CardTitle>
                  <CardDescription>Formal agreements between nations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Non-Aggression Pact</h3>
                      <p className="text-sm text-gray-600 mb-2">Agreement to avoid hostile actions</p>
                      <div className="bg-gray-50 p-3 rounded text-sm">
                        <p><strong>Terms:</strong></p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>No military action against each other</li>
                          <li>Respect territorial boundaries</li>
                          <li>Peaceful resolution of disputes</li>
                          <li>Duration: [Specify timeframe]</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Trade Agreement</h3>
                      <p className="text-sm text-gray-600 mb-2">Economic cooperation and commerce</p>
                      <div className="bg-gray-50 p-3 rounded text-sm">
                        <p><strong>Terms:</strong></p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Reduced trade taxes between nations</li>
                          <li>Preferred trading partner status</li>
                          <li>Shared market access</li>
                          <li>Resource exchange agreements</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Mutual Defense Treaty</h3>
                      <p className="text-sm text-gray-600 mb-2">Military alliance and protection</p>
                      <div className="bg-gray-50 p-3 rounded text-sm">
                        <p><strong>Terms:</strong></p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Mutual military assistance when attacked</li>
                          <li>Shared intelligence on threats</li>
                          <li>Joint military exercises</li>
                          <li>Coordinated defense strategies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="strategy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Diplomatic Strategy Guide</CardTitle>
                  <CardDescription>Advanced tactics for successful diplomacy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Power Projection</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Economic Influence:</strong> Control key trade routes</li>
                        <li><strong>Military Strength:</strong> Maintain strong defenses</li>
                        <li><strong>Cultural Impact:</strong> Host events and festivals</li>
                        <li><strong>Diplomatic Network:</strong> Build extensive alliances</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Negotiation Tactics</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Win-Win Solutions:</strong> Find mutual benefits</li>
                        <li><strong>Leverage:</strong> Use your strengths wisely</li>
                        <li><strong>Patience:</strong> Don't rush important decisions</li>
                        <li><strong>Flexibility:</strong> Adapt to changing situations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">💡 Pro Tips</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Always honor your agreements to build trust</li>
                      <li>• Keep detailed records of all diplomatic interactions</li>
                      <li>• Use Discord for complex negotiations</li>
                      <li>• Consider the long-term consequences of your actions</li>
                      <li>• Build relationships before you need them</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Need help with diplomacy? Join our community!</p>
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
