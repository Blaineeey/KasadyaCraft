import type { Metadata, Viewport } from 'next'
import { Atkinson_Hyperlegible_Next, Pixelify_Sans, Silkscreen, VT323 } from 'next/font/google'
import { SkyBackdrop, TimeOfDayScript, ToastProvider } from '@/components/interactive'
import Hotbar from '@/components/shell/Hotbar'
import SiteFooter from '@/components/shell/SiteFooter'
import SiteHeader from '@/components/shell/SiteHeader'
import { site } from '@/lib/site'

/* Order matters: tokens first, then the kit, then shell/content/interactive. */
import './globals.css'
import '@/styles/ui.css'
import '@/styles/shell.css'
import '@/styles/content.css'
import '@/styles/interactive.css'

/*
 * Owner: SITE ARCHITECT / INTEGRATOR.
 * All four fonts are SIL Open Font License, self-hosted at build time by next/font.
 */
const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--nf-pixelify',
  display: 'swap',
})

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--nf-silkscreen',
  display: 'swap',
})

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  variable: '--nf-vt323',
  display: 'swap',
})

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--nf-atkinson',
  display: 'swap',
  // next/font has no fallback metrics for this family yet; skip the adjusted fallback
  // instead of logging an error on every build. The stack in --font-body covers it.
  adjustFontFallback: false,
  fallback: ['system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Minecraft survival with plots, shops and a dungeon`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'kasadyacraft',
    'minecraft server',
    'minecraft survival server',
    'filipino minecraft server',
    'minecraft plots',
    'minecraft dungeon',
    'play.kasadyacraft.com',
  ],
  icons: { icon: '/logo.png' },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
    images: ['/logo.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#120e1a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${pixelify.variable} ${silkscreen.variable} ${vt323.variable} ${atkinson.variable}`}
      suppressHydrationWarning
    >
      <body>
        <TimeOfDayScript />
        <a className="kc-skip-link" href="#main">
          Skip to content
        </a>
        <SkyBackdrop variant="page" />
        <ToastProvider>
          <SiteHeader />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
          <Hotbar />
        </ToastProvider>
      </body>
    </html>
  )
}
