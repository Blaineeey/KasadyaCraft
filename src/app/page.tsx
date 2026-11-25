import type { Metadata } from 'next'
import Link from 'next/link'
import CommunityStrip from '@/components/home/CommunityStrip'
import CraftingTable from '@/components/home/CraftingTable'
import DepthBand from '@/components/home/DepthBand'
import DungeonTeaser from '@/components/home/DungeonTeaser'
import HomeHero from '@/components/home/HomeHero'
import homeStyles from '@/components/home/Home.module.css'
import JoinStepper from '@/components/home/JoinStepper'
import StoreTeaser from '@/components/home/StoreTeaser'
import VoteRack from '@/components/home/VoteRack'
import { Panel, SectionHeading } from '@/components/ui'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

/* No title: the home page keeps the root layout's default title. */
export const metadata: Metadata = pageMetadata({
  socialTitle: `${site.name}: Minecraft survival with plots, shops and a dungeon`,
  description: site.description,
  path: '/',
})

/*
 * HOME. Owner: INTERACTIVITY ENGINEER.
 * Reads top to bottom like digging down: the festival plaza at the surface,
 * then dirt (how to join), stone (what's inside), a cobblestone storeroom (the
 * vote keys on their rack), deepslate (the dungeon) and bedrock (store + community). Sections live in src/components/home/*.
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />

      <DepthBand material="dirt" y={62} id="join" labelledBy="home-join">
        <SectionHeading
          id="home-join"
          eyebrow="How to join"
          title="Four steps and you are in"
          lead="Works on any computer that runs Minecraft: Java Edition. Click through the steps, then go play."
        />
        <Panel material="deepslate" padding="lg" className={homeStyles.stepPanel}>
          <JoinStepper />
        </Panel>
        <p className={homeStyles.aside}>
          Something not working? The <Link href="/play">full join guide</Link> covers versions, the resource pack and common errors.
        </p>
      </DepthBand>

      <DepthBand material="stone" y={24} id="inside" labelledBy="home-inside">
        <SectionHeading
          id="home-inside"
          eyebrow="What's inside"
          title="Open the crafting table"
          lead="Pick an item from the inventory and see what it crafts into. Nine features, all live on the server today."
        />
        <CraftingTable />
        <p className={homeStyles.aside}>
          Want the full list? <Link href="/wiki/features">Every feature</Link> and <Link href="/wiki/commands">every command</Link> is in the wiki.
        </p>
      </DepthBand>

      <DepthBand material="cobble" y={-8} id="vote" labelledBy="home-vote">
        <VoteRack />
      </DepthBand>

      <DepthBand material="deepslate" y={-30} id="dungeon" labelledBy="home-dungeon">
        <DungeonTeaser />
      </DepthBand>

      <DepthBand material="bedrock" y={-59} id="more">
        <div className={homeStyles.pair}>
          <section aria-labelledby="home-store">
            <StoreTeaser />
          </section>
          <section aria-labelledby="home-community">
            <CommunityStrip />
          </section>
        </div>
      </DepthBand>
    </>
  )
}
