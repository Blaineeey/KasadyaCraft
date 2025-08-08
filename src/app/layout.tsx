import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KasadyaCraft - Premium Minecraft Server',
  description: 'Join thousands of players in the ultimate Minecraft experience. Build towns, forge alliances, and create your legacy!',
  keywords: 'minecraft, server, towny, multiplayer, gaming, kasadyacraft',
  authors: [{ name: 'Blaine  Panares' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/server-icon.png" />
      </head>
      <body className={`${inter.className} body-reset`}>
        {children}
      </body>
    </html>
  )
}
