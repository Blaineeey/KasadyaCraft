import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

export default function JobsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Jobs & Professions Guide</h1>
            <p className="text-xl text-gray-600 mb-6">
              Earn money through various professions and skill-based activities
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary">Mining</Badge>
              <Badge variant="secondary">Farming</Badge>
              <Badge variant="secondary">Building</Badge>
              <Badge variant="secondary">Crafting</Badge>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Job Overview</TabsTrigger>
              <TabsTrigger value="joining">Joining Jobs</TabsTrigger>
              <TabsTrigger value="professions">Professions</TabsTrigger>
              <TabsTrigger value="advancement">Advancement</TabsTrigger>
              <TabsTrigger value="strategies">Strategies</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Jobs System Overview</CardTitle>
                    <CardDescription>Understanding how jobs work on KasadyaCraft</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">How Jobs Work:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Perform job-related activities to earn money</li>
                        <li>• Gain experience and level up in your profession</li>
                        <li>• Unlock better pay rates and bonuses</li>
                        <li>• Can have multiple jobs simultaneously</li>
                        <li>• Each job has unique benefits and requirements</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="font-semibold">Essential Job Commands:</div>
                      <div>/jobs browse - View available jobs</div>
                      <div>/jobs join [job] - Join a specific job</div>
                      <div>/jobs leave [job] - Leave a job</div>
                      <div>/jobs info [job] - Get job information</div>
                      <div>/jobs stats - View your job statistics</div>
                      <div>/jobs top [job] - See job leaderboards</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Job Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Resource Jobs</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Miner - Mine ores and stones</li>
                          <li>• Woodcutter - Chop trees and wood</li>
                          <li>• Digger - Excavate dirt and sand</li>
                          <li>• Farmer - Grow and harvest crops</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Crafting Jobs</h4>
                        <ul className="text-sm text-purple-800 space-y-1">
                          <li>• Builder - Place blocks and build</li>
                          <li>• Crafter - Create items and tools</li>
                          <li>• Enchanter - Enchant items</li>
                          <li>• Brewer - Create potions</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="joining">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Joining Your First Job</CardTitle>
                    <CardDescription>Step-by-step guide to getting started</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Getting Started:</h4>
                      <ol className="text-sm text-yellow-800 space-y-1">
                        <li>1. Use /jobs browse to see all available jobs</li>
                        <li>2. Read job descriptions and pay rates</li>
                        <li>3. Choose a job that matches your playstyle</li>
                        <li>4. Use /jobs join [jobname] to join</li>
                        <li>5. Start performing job activities to earn money!</li>
                      </ol>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Job Selection Tips:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Consider your preferred activities</li>
                        <li>• Check current market demand</li>
                        <li>• Look at advancement opportunities</li>
                        <li>• Consider resource availability</li>
                        <li>• Think about long-term goals</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Multiple Jobs:</h4>
                      <p className="text-sm text-green-800 mb-2">
                        You can have multiple jobs, but there are limits:
                      </p>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Maximum of 3 jobs at once</li>
                        <li>• Each job levels independently</li>
                        <li>• Diversify for stable income</li>
                        <li>• Focus on complementary jobs</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Job Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Prerequisites:</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Some jobs may require minimum levels</li>
                        <li>• Certain jobs need specific permissions</li>
                        <li>• Advanced jobs may require job experience</li>
                        <li>• Check job info before attempting to join</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="professions">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Job Descriptions</CardTitle>
                    <CardDescription>Learn about each profession and its benefits</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">⛏️ Miner</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-700 mb-2"><strong>Activities:</strong></p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Mine stone, ores, and minerals</li>
                              <li>• Break blocks underground</li>
                              <li>• Collect rare materials</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm text-gray-700 mb-2"><strong>Benefits:</strong></p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• High pay for rare ores</li>
                              <li>• Bonus for deep mining</li>
                              <li>• Special mining perks</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🌾 Farmer</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-green-700 mb-2"><strong>Activities:</strong></p>
                            <ul className="text-sm text-green-600 space-y-1">
                              <li>• Plant and harvest crops</li>
                              <li>• Breed animals</li>
                              <li>• Collect farm products</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm text-green-700 mb-2"><strong>Benefits:</strong></p>
                            <ul className="text-sm text-green-600 space-y-1">
                              <li>• Steady, reliable income</li>
                              <li>• Food production bonuses</li>
                              <li>• Animal breeding perks</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🏗️ Builder</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-blue-700 mb-2"><strong>Activities:</strong></p>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• Place blocks and structures</li>
                              <li>• Build and construct</li>
                              <li>• Create architectural works</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm text-blue-700 mb-2"><strong>Benefits:</strong></p>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• Pay for creative building</li>
                              <li>• Bonus for large projects</li>
                              <li>• Building material discounts</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🔨 Crafter</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-purple-700 mb-2"><strong>Activities:</strong></p>
                            <ul className="text-sm text-purple-600 space-y-1">
                              <li>• Craft tools and items</li>
                              <li>• Create complex recipes</li>
                              <li>• Produce trade goods</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm text-purple-700 mb-2"><strong>Benefits:</strong></p>
                            <ul className="text-sm text-purple-600 space-y-1">
                              <li>• Crafting efficiency bonuses</li>
                              <li>• Recipe unlock rewards</li>
                              <li>• Material cost reductions</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="advancement">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Advancement System</CardTitle>
                    <CardDescription>Level up and unlock better rewards</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-2">Experience & Levels</h4>
                      <ul className="text-sm text-indigo-800 space-y-1">
                        <li>• Gain experience by performing job activities</li>
                        <li>• Each level increases your pay rate</li>
                        <li>• Higher levels unlock special bonuses</li>
                        <li>• Maximum level varies by job</li>
                        <li>• Experience requirements increase per level</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Level Benefits</h4>
                        <ul className="text-sm text-yellow-800 space-y-1">
                          <li>• Level 1-10: Basic pay rates</li>
                          <li>• Level 11-25: Increased earnings</li>
                          <li>• Level 26-50: Special bonuses</li>
                          <li>• Level 51-75: Elite rewards</li>
                          <li>• Level 76-100: Master benefits</li>
                        </ul>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Advancement Tips</h4>
                        <ul className="text-sm text-teal-800 space-y-1">
                          <li>• Focus on high-XP activities</li>
                          <li>• Use XP boost events</li>
                          <li>• Complete job-specific quests</li>
                          <li>• Join job-focused towns</li>
                          <li>• Participate in competitions</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Prestige System</h4>
                      <p className="text-sm text-green-800 mb-2">
                        At maximum level, you can prestige to gain additional benefits:
                      </p>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Reset to level 1 with prestige rank</li>
                        <li>• Gain permanent bonuses</li>
                        <li>• Access to prestige-only features</li>
                        <li>• Special titles and recognition</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Job Specializations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Advanced Specializations:</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>• Unlock at high levels in base jobs</li>
                        <li>• Provide focused bonuses and abilities</li>
                        <li>• Require specific achievements</li>
                        <li>• Offer unique gameplay mechanics</li>
                        <li>• Limited slots available</li>
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
                    <CardTitle>Job Optimization Strategies</CardTitle>
                    <CardDescription>Maximize your earnings and efficiency</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">Income Maximization</h4>
                        <ul className="text-sm text-orange-800 space-y-1">
                          <li>• Focus on high-paying activities</li>
                          <li>• Time activities during bonus periods</li>
                          <li>• Use efficiency-boosting tools</li>
                          <li>• Combine complementary jobs</li>
                          <li>• Participate in job events</li>
                        </ul>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-cyan-900 mb-2">Efficiency Tips</h4>
                        <ul className="text-sm text-cyan-800 space-y-1">
                          <li>• Set up dedicated work areas</li>
                          <li>• Use automated systems where possible</li>
                          <li>• Organize inventory for quick access</li>
                          <li>• Plan routes for resource gathering</li>
                          <li>• Coordinate with other job holders</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibent text-red-900 mb-2">Common Mistakes to Avoid</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Spreading too thin across many jobs</li>
                        <li>• Ignoring job-specific bonuses</li>
                        <li>• Not upgrading tools and equipment</li>
                        <li>• Missing special events and promotions</li>
                        <li>• Neglecting job advancement opportunities</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Long-term Planning</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Set income goals and track progress</li>
                        <li>• Plan job combinations strategically</li>
                        <li>• Invest earnings in better equipment</li>
                        <li>• Build relationships with other professionals</li>
                        <li>• Consider transitioning to business ownership</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Job Communities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Getting Involved:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Join job-specific Discord channels</li>
                        <li>• Participate in job competitions</li>
                        <li>• Share tips and strategies</li>
                        <li>• Mentor new job holders</li>
                        <li>• Organize group activities</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Ready to Start Working?</h3>
              <p className="text-gray-600 mb-4">
                Choose your profession and start earning money today!
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
