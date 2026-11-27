import Link from 'next/link'
import { MALL, PLOT, STARTING_BALANCE, WILD_SIZE, money } from '@/content/guides/facts'
import { DELVE_RULES, DELVES } from '@/content/wiki/delve-facts'
import Panel from '@/components/ui/Panel'
import PixelButton from '@/components/ui/PixelButton'
import PixelIcon from '@/components/ui/PixelIcon'
import type { PixelIconName } from '@/components/ui/pixel-icons'
import SectionHeading from '@/components/ui/SectionHeading'
import { site } from '@/lib/site'
import { CHECKOUT_MODE } from '@/lib/store'
import s from './overview.module.css'

/** Ranks are sold only on the web store since 2026-11-28; it shows "opening soon" until the checkout is on. */
const RANKS_SOLD = `sold on our web store${CHECKOUT_MODE === 'off' ? ', which is opening soon' : ''}`

/*
 * Body of /games/minecraft: a short tour of KasadyaCraft Survival for the multi-game section.
 * Every line is a checked fact (see src/content/guides/facts.ts; the delves card: src/content/wiki/delve-facts.ts).
 * Owner: STARTER-GUIDE WRITER.
 */
const features: { icon: PixelIconName; title: string; body: string; href: string }[] = [
  {
    icon: 'plot',
    title: 'Plots',
    body: `One free ${PLOT.size} x ${PLOT.size} plot that only you and your friends can build on. Ranks get you up to 6.`,
    href: '/wiki/plots',
  },
  {
    icon: 'shop',
    title: 'Player shops',
    body: `Chest shops on your plot, or a stall in the Shopping Mall from ${money(MALL.small.price)} a week.`,
    href: '/wiki/player-shops',
  },
  {
    icon: 'skull',
    title: 'Lab of Horrors',
    body: 'Seven rooms, a disciple and the boss Draedon. Solo or with a party of up to 5.',
    href: '/wiki/dungeon',
  },
  {
    icon: 'lantern',
    title: 'The delves',
    body: `${DELVES.gloomhold.name} (${DELVES.gloomhold.difficulty}) and ${DELVES.cinderworks.name} (${DELVES.cinderworks.difficulty}): five floors and a boss each. Solo or up to ${DELVE_RULES.maxPlayers}, open them with /dungeon.`,
    href: '/wiki/delves',
  },
  {
    icon: 'quest',
    title: 'Quests and rewards',
    body: 'Daily quests, daily rewards, playtime levels, chat games and an AFK room that pays points.',
    href: '/wiki/rewards',
  },
  {
    icon: 'fish',
    title: 'Fishing',
    body: 'Fish with rarities, rods, bait and minigames. Sell your catch at /fishmarket and join the weekly tournaments.',
    href: '/wiki/fishing',
  },
  {
    icon: 'enchant',
    title: 'Custom enchants',
    body: 'Simple to Fabled enchants on top of the normal ones. Buy books with XP at /enchanter and see what fits in /ae.',
    href: '/wiki/custom-enchants',
  },
  {
    icon: 'chest',
    title: 'Crates',
    body: 'Open crates at spawn with keys from kits, daily rewards and the token shop.',
    href: '/wiki/crates',
  },
  {
    icon: 'spawner',
    title: 'Spawners',
    body: 'Mine natural spawners with a Silk Touch diamond or netherite pickaxe. Up to 2 per chunk.',
    href: '/wiki/spawners',
  },
  {
    icon: 'coin',
    title: 'A real economy',
    body: `Start with ${money(STARTING_BALANCE)}. The server shop buys raw materials, players buy everything else.`,
    href: '/wiki/economy',
  },
  {
    icon: 'crown',
    title: 'Ranks',
    body: `VIP to MVP++, ${RANKS_SOLD}. More plots, homes and handy commands.`,
    href: '/wiki/ranks',
  },
  {
    icon: 'pickaxe',
    title: 'The wild',
    body: `A ${WILD_SIZE} survival world plus the nether and the end. /rtp drops you somewhere new.`,
    href: '/wiki/features',
  },
]

export default function MinecraftOverview() {
  return (
    <div className={`kc-container kc-section ${s.page}`}>
      <Panel as="section" material="deepslate" padding="lg" aria-labelledby="inside">
        <div className={s.section}>
          <SectionHeading
            id="inside"
            eyebrow={site.motdLine}
            title="What you can do"
            lead="A friendly survival server where you build your own place, trade with other players and team up for real boss fights."
          />
          <ul className={s.features}>
            {features.map((f) => (
              <li key={f.title} className={s.feature}>
                <span className={s.frame}>
                  <PixelIcon name={f.icon} size={48} />
                </span>
                <div className={s.featureText}>
                  <h3 className={s.featureTitle}>
                    <Link href={f.href} className={s.featureLink}>
                      {f.title}
                    </Link>
                  </h3>
                  <p className={s.featureBody}>{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Panel>

      <Panel as="section" material="darkwood" padding="lg" aria-labelledby="network">
        <div className={s.section}>
          <SectionHeading variant="sign" id="network" eyebrow="How it works" title="Hub first, then Survival" />
          <ol className={s.flow}>
            <li className={s.flowStep}>
              <h3>
                <PixelIcon name="grass" size={32} />
                Join
              </h3>
              <p>
                Add <strong>{site.address}</strong> in Minecraft Java {site.recommendedVersion}.
              </p>
            </li>
            <li className={s.flowStep}>
              <h3>
                <PixelIcon name="lantern" size={32} />
                The hub
              </h3>
              <p>You land on a festival plaza in the sky. Walk through the portal, click the Survival Guide or use your compass.</p>
            </li>
            <li className={s.flowStep}>
              <h3>
                <PixelIcon name="portal" size={32} />
                Survival
              </h3>
              <p>Accept the resource pack and you are in. Type /hub any time to go back.</p>
            </li>
          </ol>
        </div>
      </Panel>

      <Panel as="section" material="stone" padding="lg" aria-labelledby="facts">
        <div className={s.section}>
          <SectionHeading variant="frame" icon="scroll" id="facts" eyebrow="Quick facts" title="The short version" />
          <dl className={s.facts}>
            <div className={s.fact}>
              <dt>Address</dt>
              <dd>{site.address}</dd>
            </div>
            <div className={s.fact}>
              <dt>Version</dt>
              <dd>
                {site.edition} {site.versionLabel.replace(/^Java\s*/, '')} ({site.recommendedVersion} recommended). Bedrock: port {site.bedrockPort}.
              </dd>
            </div>
            <div className={s.fact}>
              <dt>Account</dt>
              <dd>Any. Paid accounts log in by themselves, others use /register and /login.</dd>
            </div>
            <div className={s.fact}>
              <dt>Resource pack</dt>
              <dd>Required in Survival (custom items, dungeon mobs, menus)</dd>
            </div>
            <div className={s.fact}>
              <dt>Worlds</dt>
              <dd>The wild ({WILD_SIZE}), the nether, the end, a plot world and the Shopping Mall</dd>
            </div>
            <div className={s.fact}>
              <dt>Cost</dt>
              <dd>Free to play. Ranks are {RANKS_SOLD}.</dd>
            </div>
            <div className={s.fact}>
              <dt>Community</dt>
              <dd>
                <a href={site.discord} target="_blank" rel="noopener noreferrer">
                  Discord
                </a>{' '}
                for help, events and news
              </dd>
            </div>
          </dl>
          <div className={s.cta}>
            <PixelButton href="/play" variant="grass" icon="grass">
              How to join
            </PixelButton>
            <PixelButton href="/guides" variant="gold" icon="book">
              Starter guides
            </PixelButton>
            <PixelButton href="/wiki" variant="stone" icon="map">
              Wiki
            </PixelButton>
            <PixelButton href={site.discord} variant="discord" icon="chat">
              Discord
            </PixelButton>
          </div>
        </div>
      </Panel>
    </div>
  )
}
