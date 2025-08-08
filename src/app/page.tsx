import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Server, Clock, MessageSquare, Heart, Wrench } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const serverModes = [
    {
      name: "Towny",
      description: "Build towns, create nations, and engage in politics!",
      status: "active",
      players: "24/100",
      href: "/towny"
    },
    {
      name: "Skyblock",
      description: "Start with nothing and build your island empire",
      status: "development",
      players: "Coming Soon",
      href: "#"
    },
    {
      name: "Creative",
      description: "Unlimited resources for your wildest builds",
      status: "development", 
      players: "Coming Soon",
      href: "#"
    }
  ]

  const announcements = [
    {
      title: "Server Update 1.20.4",
      content: "We've updated to the latest Minecraft version with new features and bug fixes!",
      date: "2024-01-15",
      type: "update"
    },
    {
      title: "Towny Economy Reset",
      content: "The Towny economy has been reset with new opportunities for all players.",
      date: "2024-01-10", 
      type: "important"
    },
    {
      title: "Discord Events",
      content: "Join our weekly building competitions every Saturday at 8PM EST!",
      date: "2024-01-08",
      type: "event"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">KasadyaCraft</h1>
                <p className="text-sm text-slate-400">play.kasadyacraft.online</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              <Link href="/towny" className="text-slate-300 hover:text-white transition-colors">Towny</Link>
              <Link href="#support" className="text-slate-300 hover:text-white transition-colors">Support</Link>
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
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="text-green-400">KasadyaCraft</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join our thriving Minecraft community! Build towns, create nations, and embark on epic adventures with players from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="bg-slate-800 px-6 py-3 rounded-lg border border-slate-700">
                <p className="text-green-400 font-mono text-lg">play.kasadyacraft.online</p>
              </div>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Users className="w-5 h-5 mr-2" />
                Join Server
              </Button>
            </div>
            
            {/* Server Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">156</p>
                <p className="text-slate-400">Active Players</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-slate-400">Uptime</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <Server className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">1.20.4</p>
                <p className="text-slate-400">Version</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Game Modes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serverModes.map((mode, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-xl">{mode.name}</CardTitle>
                    <Badge 
                      variant={mode.status === 'active' ? 'default' : 'secondary'}
                      className={mode.status === 'active' ? 'bg-green-600' : 'bg-orange-600'}
                    >
                      {mode.status === 'active' ? 'Active' : 'Under Development'}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-300">
                    {mode.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-400">Players Online:</span>
                    <span className="text-white font-semibold">{mode.players}</span>
                  </div>
                  {mode.status === 'active' ? (
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link href={mode.href}>Play Now</Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full">
                      <Wrench className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Latest Announcements</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {announcements.map((announcement, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{announcement.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant="outline" 
                        className={
                          announcement.type === 'important' ? 'border-red-500 text-red-400' :
                          announcement.type === 'event' ? 'border-blue-500 text-blue-400' :
                          'border-green-500 text-green-400'
                        }
                      >
                        {announcement.type}
                      </Badge>
                      <span className="text-slate-400 text-sm">{announcement.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{announcement.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Support & Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageSquare className="w-6 h-6 mr-2 text-blue-400" />
                  Join Our Discord
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Connect with our community, get support, and stay updated with the latest news.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="https://discord.gg/kasadyacraft" target="_blank" rel="noopener noreferrer">
                    Join Discord Server
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-red-400" />
                  Support the Server
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Help keep our server running and get exclusive perks and rewards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <a href="#donate" target="_blank" rel="noopener noreferrer">
                    Donate Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <div className="mt-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-6">Getting Started</h3>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Join our Discord server to connect with the community
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Read the server rules and guidelines in #rules channel
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Start with Towny mode to learn the basics
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Use /help in-game for commands and assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Server className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">KasadyaCraft</span>
          </div>
          <p className="text-slate-400 mb-2">play.kasadyacraft.online</p>
          <p className="text-slate-500 text-sm">
            © 2024 KasadyaCraft. All rights reserved. Not affiliated with Mojang Studios.
          </p>
        </div>
      </footer>
    </div>
  )
}
