import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KasadyaCraft - SMP Server with Epidemic + Slimefun Plugins',
  description: 'Pure Minecraft SMP enhanced with Epidemic (disease survival) and Slimefun (500+ tech items) core plugins. Build, automate, survive deadly diseases in our challenging multiplayer world!',
  keywords: 'minecraft, smp server, slimefun plugin, epidemic plugin, survival multiplayer, minecraft automation, tech mod, disease survival, kasadyacraft',
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
