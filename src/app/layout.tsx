import type { Metadata, Viewport } from 'next'
import { Atkinson_Hyperlegible_Next, Pixelify_Sans, Silkscreen, VT323 } from 'next/font/google'
import localFont from 'next/font/local'
import { SkyBackdrop, TimeOfDayScript, ToastProvider } from '@/components/interactive'
import Hotbar from '@/components/shell/Hotbar'
import SiteFooter from '@/components/shell/SiteFooter'
import SiteHeader from '@/components/shell/SiteHeader'
import { ogImage } from '@/lib/seo'
import { site } from '@/lib/site'

/* Order matters: tokens first, then the kit, then shell/content/interactive. */
import './globals.css'
import '@/styles/fonts.css'
import '@/styles/ui.css'
import '@/styles/shell.css'
import '@/styles/content.css'
import '@/styles/interactive.css'

/*
 * Owner: SITE ARCHITECT / INTEGRATOR.
 * All four fonts are SIL Open Font License, self-hosted at build time by next/font.
 * Pixelify and Atkinson use our own metric-matched fallbacks (src/styles/fonts.css):
 * measured on the site's real text, with a separate bold face, so the swap does not
 * re-wrap headings or paragraphs (layout shift).
 */

/*
 * KC Glyphs: our own 2, 3, 5, B, C and c, redrawn on Pixelify's pixel grid with the same
 * advance widths (under 1 KB per weight). Pixelify closes those shapes up, so the site read
 * "KasadyaOraft" and "8 plots". The unicode-range means the browser takes only those six
 * characters from it; --font-pixel lists it first (globals.css). adjustFontFallback is off
 * on purpose: next/font's Arial fallback face has no unicode-range and would take over
 * every character. Rebuild with scripts/make-kc-glyphs.py.
 */
const kcGlyphs = localFont({
  src: [
    { path: './fonts/kc-glyphs-400.woff2', weight: '400' },
    { path: './fonts/kc-glyphs-500.woff2', weight: '500' },
    { path: './fonts/kc-glyphs-600.woff2', weight: '600' },
    { path: './fonts/kc-glyphs-700.woff2', weight: '700' },
  ],
  variable: '--nf-glyphs',
  display: 'swap',
  adjustFontFallback: false,
  declarations: [{ prop: 'unicode-range', value: 'U+0032-0033, U+0035, U+0042-0043, U+0063' }],
})

const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--nf-pixelify',
  display: 'swap',
  adjustFontFallback: false,
  fallback: ['Pixelify Fallback', 'Pixelify Fallback Roboto'],
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
  // next/font has no fallback metrics for this family, so it would log an error and ship
  // an unadjusted fallback. Ours (src/styles/fonts.css) come first instead.
  adjustFontFallback: false,
  fallback: ['Atkinson Fallback', 'Atkinson Fallback Roboto', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
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
  applicationName: site.name,
  /*
   * No `icons` here on purpose: src/app/favicon.ico (16/32/48, under 1 KB) and
   * src/app/apple-icon.png are picked up by file convention. Pointing `icons` at the
   * 500x500 logo made every first visit download it as the favicon.
   * Pages set their own canonical, openGraph and twitter through pageMetadata()
   * (src/lib/seo.ts). These defaults only cover routes that do not.
   */
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: [{ url: ogImage.url, alt: ogImage.alt }],
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
      className={`${kcGlyphs.variable} ${pixelify.variable} ${silkscreen.variable} ${vt323.variable} ${atkinson.variable}`}
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
