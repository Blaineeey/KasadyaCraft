import type { Metadata } from 'next'
import MinecraftOverview from '@/components/guides/MinecraftOverview'
import CopyIp from '@/components/interactive/CopyIp'
import LiveStatus from '@/components/interactive/LiveStatus'
import PageHero from '@/components/shell/PageHero'
import PixelButton from '@/components/ui/PixelButton'
import { site } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

/*
 * /games/minecraft: short KasadyaCraft Survival overview for the multi-game section,
 * linking to /play, /guides and /wiki. Owner: STARTER-GUIDE WRITER.
 */
export const metadata: Metadata = pageMetadata({
  title: 'KasadyaCraft Survival',
  description:
    'KasadyaCraft Survival: free plots, player shops, daily quests and the Lab of Horrors dungeon. Minecraft Java Edition, play.kasadyacraft.com.',
  path: '/games/minecraft',
})

export default function MinecraftPage() {
  return (
    <>
      <PageHero
        title="KasadyaCraft Survival"
        eyebrow={`Minecraft · ${site.versionLabel}`}
        lead={`${site.tagline} Plots, player shops, daily quests and a dungeon with a real boss fight. You start in the hub, then hop into Survival.`}
        icon="grass"
        crumbs={[{ label: 'Games', href: '/games' }, { label: 'Minecraft' }]}
      >
        <CopyIp size="lg" showHint />
        <LiveStatus variant="chip" />
        <PixelButton href="/play" variant="gold" iconRight="arrow-right">
          How to join
        </PixelButton>
      </PageHero>
      <MinecraftOverview />
    </>
  )
}
