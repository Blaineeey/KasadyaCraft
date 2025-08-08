import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Server, Calendar, Trophy, BookOpen, Coins, Crown, Shield, MessageSquare, ArrowLeft, MapPin, Sword } from 'lucide-react'
import Link from "next/link"

export default function TownyPage() {
  const events = [
    {
      title: "Town Building Competition",
      date: "2024-01-20",
      time: "8:00 PM EST",
      description: "Show off your architectural skills and win amazing prizes!",
      prize: "$500 in-game currency"
    },
    {
      title: "Nation Wars",
      date: "2024-01-25", 
      time: "7:00 PM EST",
      description: "Epic battles between nations for territory control",
      prize: "Exclusive Nation Banner"
    },
    {
      title: "Mayor's Meeting",
      date: "2024-01-28",
      time: "6:00 PM EST", 
      description: "Monthly meeting for all town mayors to discuss server politics",
      prize: "Networking & Strategy"
    }
  ]

  const leaderboards = [
    {
      category: "Richest Players",
      players: [
        { name: "CraftMaster99", value: "$125,000", rank: 1 },
        { name: "BuilderPro", value: "$98,500", rank: 2 },
        { name: "TownyKing", value: "$87,200", rank: 3 }
      ]
    },
    {
      category: "Largest Towns",
      players: [
        { name: "New Kasadya", value: "45 residents", rank: 1 },
        { name: "Emerald City", value: "38 residents", rank: 2 },
        { name: "Iron Valley", value: "32 residents", rank: 3 }
      ]
    },
    {
      category: "Most Powerful Nations",
      players: [
        { name: "The Empire", value: "8 towns", rank: 1 },
        { name: "Northern Alliance", value: "6 towns", rank: 2 },
        { name: "Desert Coalition", value: "5 towns", rank: 3 }
      ]
    }
  ]

  const wikiSections = [
    {
      title: "Getting Started",
      description: "Learn the basics of Towny gameplay",
      topics: ["Creating a Town", "Joining a Town", "Basic Commands", "Economy Basics"]
    },
    {
      title: "Town Management", 
      description: "Advanced town administration",
      topics: ["Town Ranks", "Plot Management", "Town Settings", "Taxation"]
    },
    {
      title: "Nations & Politics",
      description: "Form alliances and wage wars",
      topics: ["Creating Nations", "Diplomacy", "War System", "Nation Benefits"]
    },
    {
      title: "Economy Guide",
      description: "Master the server economy",
      topics: ["Shop Creation", "Trading", "Jobs", "Banking System"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button asChild variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Towny Server</h1>
                <p className="text-sm text-slate-400">Build • Govern • Conquer</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              <Link href="/towny" className="text-green-400 font-semibold">Towny</Link>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="https://discord.gg/kasadyacraft" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Discord
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-green-400">Towny</span> Server
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Create your own town, form powerful nations, and engage in epic political gameplay. Build your legacy in our thriving Towny world!
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <MapPin className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-lg font-bold text-white">47</p>
                <p className="text-slate-400 text-sm">Active Towns</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <Crown className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-lg font-bold text-white">12</p>
                <p className="text-slate-400 text-sm">Nations</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-lg font-bold text-white">324</p>
                <p className="text-slate-400 text-sm">Residents</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <Coins className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <p className="text-lg font-bold text-white">$2.4M</p>
                <p className="text-slate-400 text-sm">Economy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="events" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700">
              <TabsTrigger value="events" className="data-[state=active]:bg-green-600">
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </TabsTrigger>
              <TabsTrigger value="leaderboards" className="data-[state=active]:bg-green-600">
                <Trophy className="w-4 h-4 mr-2" />
                Leaderboards
              </TabsTrigger>
              <TabsTrigger value="wiki" className="data-[state=active]:bg-green-600">
                <BookOpen className="w-4 h-4 mr-2" />
                Wiki
              </TabsTrigger>
              <TabsTrigger value="announcements" className="data-[state=active]:bg-green-600">
                <MessageSquare className="w-4 h-4 mr-2" />
                News
              </TabsTrigger>
            </TabsList>

            {/* Events Tab */}
            <TabsContent value="events" className="mt-8">
              <div className="grid gap-6">
                <h2 className="text-3xl font-bold text-white mb-6">Upcoming Events</h2>
                {events.map((event, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-white text-xl">{event.title}</CardTitle>
                          <CardDescription className="text-slate-300 mt-2">
                            {event.description}
                          </CardDescription>
                        </div>
                        <Badge className="bg-green-600 text-white">
                          {event.date}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-slate-400">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {event.time}
                          </span>
                          <span className="flex items-center">
                            <Trophy className="w-4 h-4 mr-1" />
                            {event.prize}
                          </span>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">
                          Join Event
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Leaderboards Tab */}
            <TabsContent value="leaderboards" className="mt-8">
              <div className="grid gap-8">
                <h2 className="text-3xl font-bold text-white mb-6">Server Leaderboards</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {leaderboards.map((board, index) => (
                    <Card key={index} className="bg-slate-800/50 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center">
                          <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                          {board.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {board.players.map((player, playerIndex) => (
                            <div key={playerIndex} className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                  player.rank === 1 ? 'bg-yellow-500 text-black' :
                                  player.rank === 2 ? 'bg-gray-400 text-black' :
                                  'bg-orange-600 text-white'
                                }`}>
                                  {player.rank}
                                </div>
                                <span className="text-white font-medium">{player.name}</span>
                              </div>
                              <span className="text-green-400 font-semibold">{player.value}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Wiki Tab */}
            <TabsContent value="wiki" className="mt-8">
              <div className="grid gap-8">
                <h2 className="text-3xl font-bold text-white mb-6">Towny Wiki & Guides</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {wikiSections.map((section, index) => (
                    <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center">
                          <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                          {section.title}
                        </CardTitle>
                        <CardDescription className="text-slate-300">
                          {section.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {section.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                              <span className="text-green-400 mr-2">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                          Read Guide
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Announcements Tab */}
            <TabsContent value="announcements" className="mt-8">
              <div className="grid gap-6">
                <h2 className="text-3xl font-bold text-white mb-6">Towny Announcements</h2>
                
                <Card className="bg-slate-800/50 border-slate-700 border-l-4 border-l-red-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Economy Rebalance Update</CardTitle>
                      <Badge variant="destructive">Important</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      We've implemented major changes to the Towny economy system. Town upkeep costs have been adjusted, and new revenue streams have been added for active towns.
                    </p>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      January 15, 2024
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">New PvP Arena Opens</CardTitle>
                      <Badge className="bg-blue-600">Event</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      The Grand Colosseum is now open for nation vs nation battles! Participate in scheduled wars and earn exclusive rewards for your nation.
                    </p>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      January 12, 2024
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Town Expansion Update</CardTitle>
                      <Badge className="bg-green-600">Update</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Towns can now expand beyond the previous 50-chunk limit! New expansion permits are available at spawn for established towns.
                    </p>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      January 8, 2024
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Crown className="w-5 h-5 mr-2 text-yellow-400" />
                  Create a Town
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Start your own settlement and become a mayor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Learn How
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-400" />
                  Join a Nation
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Ally with other towns for protection and power
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Nations
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Sword className="w-5 h-5 mr-2 text-red-400" />
                  Declare War
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Engage in strategic warfare with rival nations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  War System
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">KasadyaCraft Towny</span>
          </div>
          <p className="text-slate-400 mb-2">Build your empire • Form alliances • Conquer lands</p>
          <p className="text-slate-500 text-sm">
            © 2024 KasadyaCraft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
