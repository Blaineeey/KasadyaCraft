import type { Metadata, Viewport } from 'next'
import { Chakra_Petch, Manrope, JetBrains_Mono } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-chakra',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} — People to play with, people to grow with`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'kasadyacraft',
    'gaming community',
    'find people to play with',
    'game servers',
    'minecraft server',
    'roblox group',
    'discord gaming',
  ],
  icons: { icon: '/logo.png' },
  openGraph: {
    title: site.name,
    description: site.description,
    type: 'website',
    images: ['/logo.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${chakra.variable} ${manrope.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
