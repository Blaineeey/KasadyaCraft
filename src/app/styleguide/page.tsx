import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import ContentBlocks from '@/components/content/ContentBlocks'
import PageHero from '@/components/shell/PageHero'
import {
  AchievementToast,
  Badge,
  Book,
  Breadcrumbs,
  Bunting,
  Callout,
  Command,
  ItemTooltip,
  Kbd,
  Lanterns,
  NameTag,
  Panel,
  PixelButton,
  PixelDivider,
  PixelIcon,
  pixelIconNames,
  SectionHeading,
  Slot,
  SlotGrid,
  TooltipCard,
  XpBar,
  type PanelMaterial,
  type PixelButtonVariant,
  type PixelDividerVariant,
  type Rarity,
} from '@/components/ui'
import type { ContentBlock } from '@/lib/content'
import { ToastDemo, ToggleDemo, XpDemo } from './StyleguideDemos'
import styles from './styleguide.module.css'

/*
 * Internal component gallery for the web team and QA. Not linked from the
 * nav, footer or sitemap, and marked noindex/nofollow.
 * Owner: PIXEL UI DESIGNER.
 */
export const metadata: Metadata = {
  title: 'Styleguide',
  description: 'Internal gallery of the KasadyaCraft UI kit.',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
}

const swatches = [
  ['--kc-gold', 'Gold'],
  ['--kc-orange', 'Orange'],
  ['--kc-red', 'Red'],
  ['--kc-magenta', 'Magenta'],
  ['--kc-teal', 'Teal (UI accent)'],
  ['--kc-leaf', 'Leaf'],
  ['--mat-grass', 'Grass'],
  ['--mat-dirt', 'Dirt'],
  ['--mat-stone', 'Stone'],
  ['--mat-deepslate', 'Deepslate'],
  ['--mat-plank', 'Plank'],
  ['--mat-darkwood', 'Dark oak'],
  ['--mat-obsidian', 'Obsidian'],
  ['--mat-paper', 'Paper'],
  ['--gui-bg', 'GUI grey'],
  ['--gui-slot', 'Slot'],
  ['--tooltip-edge-top', 'Tooltip frame'],
  ['--leather', 'Book leather'],
] as const

const textures = ['dirt', 'grass', 'grass-top', 'stone', 'cobble', 'deepslate', 'planks', 'planks-dark', 'obsidian', 'paper', 'terracotta', 'cloth', 'wool', 'leaves', 'bookshelf']

const buttonVariants: PixelButtonVariant[] = ['grass', 'gold', 'stone', 'redstone', 'wood', 'discord']
const materials: PanelMaterial[] = ['deepslate', 'stone', 'obsidian', 'darkwood', 'planks', 'dirt', 'paper', 'gui']
const rarities: Rarity[] = ['common', 'uncommon', 'rare', 'epic', 'legendary']
const dividers: PixelDividerVariant[] = ['blocks', 'stitch', 'grass', 'rail', 'cloth']

const sampleProse: ContentBlock[] = [
  { type: 'h2', text: 'Selling to the server' },
  { type: 'p', text: 'You start with **$250**. The server shop only sells raw materials: open it with `/shop`. See [player shops](/wiki/player-shops).' },
  { type: 'list', items: ['Square pixel bullets', 'Inline `/commands` turn into chat chips', '**Bold** for numbers that matter'] },
  { type: 'h3', text: 'Three steps' },
  {
    type: 'steps',
    items: [
      { title: 'Claim a plot', text: 'Everyone gets one free plot.', command: '/plot auto' },
      { title: 'Build a shop', text: 'Place a chest and set a price.' },
    ],
  },
  { type: 'table', caption: 'Example table', head: ['Item', 'Buy', 'Sell'], rows: [['Oak log', '$4', '$1'], ['Iron ingot', '$20', '$5']] },
  { type: 'callout', tone: 'tip', title: 'Tip', text: 'Selling pays 25% of the buy price, so trade with players for better deals.' },
]

export default function StyleguidePage() {
  return (
    <>
      <PageHero
        eyebrow="Internal"
        title="Styleguide"
        icon="book"
        ground="stone"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Styleguide' }]}
        lead="Every piece of the KasadyaCraft UI kit on one page, for the web team and QA. Hidden from search engines and not linked anywhere."
      />

      <div className={`kc-container ${styles.page}`}>
        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-colours">
          <SectionHeading eyebrow="Tokens" title="Colours" id="sg-colours" icon="gem" />
          <Panel material="deepslate" padding="md">
            <ul className={styles.swatches} role="list">
              {swatches.map(([token, name]) => (
                <li key={token} className={styles.swatch} style={{ '--sw': `var(${token})` } as CSSProperties}>
                  <span className={styles.chip} aria-hidden="true" />
                  <span className={styles.swName}>{name}</span>
                  <code className={styles.swToken}>{token}</code>
                </li>
              ))}
            </ul>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-type">
          <SectionHeading eyebrow="Tokens" title="Type" id="sg-type" icon="scroll" />
          <Panel material="deepslate" padding="md">
            <div className={styles.stack}>
              <p className={styles.typePixel}>Pixelify Sans: headings, buttons, nav</p>
              <p className="t-label">Silkscreen: tiny caps labels and badges</p>
              <p className="t-term">VT323: play.kasadyacraft.com /plot auto 1,250</p>
              <p>Atkinson Hyperlegible Next for paragraphs. Short sentences, real numbers, no marketing voice. Tara, laro tayo!</p>
              <p className="t-hero t-sunburst">Kasadya</p>
            </div>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-tex">
          <SectionHeading eyebrow="Original art" title="Textures" id="sg-tex" icon="grass" lead="16x16 tiles from scripts/make-textures.mjs, shown at 4x. Use them through the --tex-* tokens." />
          <ul className={styles.textures} role="list">
            {textures.map((t) => (
              <li key={t} className={styles.texture}>
                <span className={styles.tile} style={{ '--tile': `url('/textures/${t}.svg')` } as CSSProperties} aria-hidden="true" />
                <code>--tex-{t}</code>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-icons">
          <SectionHeading eyebrow="Original art" title="Pixel icons" id="sg-icons" icon="star" lead="Hand-drawn 16x16. Render at 16, 32, 48 or 64 px." />
          <Panel material="deepslate" padding="md">
            <div className={styles.sizes}>
              {[16, 32, 48, 64].map((s) => (
                <span key={s} className={styles.sizeCell}>
                  <PixelIcon name="parol" size={s} />
                  <code>{s}px</code>
                </span>
              ))}
            </div>
            <ul className={styles.icons} role="list">
              {pixelIconNames.map((n) => (
                <li key={n} className={styles.iconCell}>
                  <PixelIcon name={n} size={32} />
                  <code>{n}</code>
                </li>
              ))}
            </ul>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-buttons">
          <SectionHeading eyebrow="Kit" title="Block buttons" id="sg-buttons" icon="pickaxe" lead="Press and hold one: the face sinks into its base." />
          <Panel material="deepslate" padding="md">
            <div className={styles.stack}>
              {(['lg', 'md', 'sm'] as const).map((size) => (
                <div key={size} className={styles.row}>
                  {buttonVariants.map((v) => (
                    <PixelButton key={v} variant={v} size={size} icon={v === 'discord' ? 'chat' : undefined}>
                      {v}
                    </PixelButton>
                  ))}
                </div>
              ))}
              <div className={styles.row}>
                <PixelButton icon="grass" iconRight="arrow-right" href="/play">
                  Link with icons
                </PixelButton>
                <PixelButton variant="stone" disabled>
                  Disabled
                </PixelButton>
                <PixelButton variant="discord" href="https://discord.gg/8DY3eXHnAg" icon="chat">
                  External link
                </PixelButton>
              </div>
              <ToggleDemo />
            </div>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-panels">
          <SectionHeading eyebrow="Kit" title="Panels" id="sg-panels" icon="chest" />
          <div className={styles.grid}>
            {materials.map((m, i) => (
              <Panel key={m} material={m} title={m} titleAs="h3" titleIcon={i % 2 ? 'lantern' : undefined} rivets={m === 'darkwood' || m === 'planks'} padding="md">
                <p>
                  Text on <strong>{m}</strong>. {m === 'paper' || m === 'gui' ? 'Dark ink, light panel.' : 'Light text on a dark wash.'} <a href="#sg-panels">A link</a>.
                </p>
              </Panel>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-book">
          <SectionHeading eyebrow="Kit" title="Book" id="sg-book" icon="book" />
          <div className={styles.stack}>
            <Book title="Your first day" footer="Last checked 25 Nov 2026">
              <ContentBlocks blocks={sampleProse.slice(0, 3)} tone="light" />
            </Book>
            <Book
              title="Two-page spread"
              left={<p>The left page. On phones the pages stack, with a stitched seam between them.</p>}
              footer="Page 2 of 2"
            >
              <p>The right page. A cloth ribbon marks the place.</p>
            </Book>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-tooltips">
          <SectionHeading eyebrow="Kit" title="Tooltips" id="sg-tooltips" icon="sword" />
          <Panel material="deepslate" padding="md">
            <div className={styles.stack}>
              <div className={styles.tooltips}>
                {rarities.map((r) => (
                  <TooltipCard key={r} title={`${r[0].toUpperCase()}${r.slice(1)} item`} rarity={r} lines={['Grey lore line', { text: 'Coloured line', color: 'aqua' }]} />
                ))}
                <TooltipCard title="VIP rank" rarity="legendary" icon="crown" titleAs="h3" lines={[{ text: '2 plots, 2 homes', color: 'green' }, '/nv, /sit, /craft']}>
                  <PixelButton size="sm" variant="gold">
                    How to get it
                  </PixelButton>
                </TooltipCard>
              </div>
              <p>
                Floating tooltip on text:{' '}
                <ItemTooltip title="Chamber key" rarity="epic" lines={['Forged at the Locksmith', { text: 'Opens a raid chest', color: 'gold' }]} focusable>
                  <span className={styles.tipTrigger}>hover, focus or tap me</span>
                </ItemTooltip>
                . Escape closes it.
              </p>
            </div>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-slots">
          <SectionHeading eyebrow="Kit" title="Inventory slots" id="sg-slots" icon="chest" lead="Hover for the white wash and the tooltip. Epic and legendary items pulse." />
          <div className={styles.stack}>
            <SlotGrid label="Example inventory" title="Inventory" columns={9}>
              <Slot label="Iron sword" icon="sword" lines={['+6 attack damage']} />
              <Slot label="Shield" icon="shield" rarity="uncommon" />
              <Slot label="Vote key" icon="key" count={3} rarity="rare" lines={['Opens the vote crate']} />
              <Slot label="Chamber key" icon="key" rarity="epic" />
              <Slot label="Crown" icon="crown" rarity="legendary" lines={[{ text: 'MVP++', color: 'gold' }]} />
              <Slot label="Emeralds" icon="emerald" count={64} />
              <Slot label="Selected slot" icon="pickaxe" selected />
              <Slot label="Empty" empty />
              <Slot label="Link slot" icon="map" href="/wiki" />
              <Slot label="Potion" icon="potion" count={2} />
              <Slot label="Spawner" icon="spawner" rarity="rare" />
              <Slot label="Coins" icon="coin" count={12} />
            </SlotGrid>
            <SlotGrid label="Big slots with captions" columns={4} size="lg">
              <Slot label="Plots" icon="plot" size="lg" caption />
              <Slot label="Shops" icon="shop" size="lg" caption />
              <Slot label="Dungeon" icon="boss" size="lg" caption rarity="epic" />
              <Slot label="Quests" icon="quest" size="lg" caption />
            </SlotGrid>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-small">
          <SectionHeading eyebrow="Kit" title="Badges, name tags, keys" id="sg-small" icon="tag" />
          <Panel material="deepslate" padding="md">
            <div className={styles.stack}>
              <div className={styles.row}>
                <Badge tone="gold">New</Badge>
                <Badge tone="teal">Java 1.21.x</Badge>
                <Badge tone="red">Not live yet</Badge>
                <Badge tone="green">Online</Badge>
                <Badge tone="gray">Coming soon</Badge>
                <Badge tone="magenta">MVP+</Badge>
              </div>
              <div className={styles.row}>
                <NameTag prefix="Mod" tone="aqua">
                  Tala_Builds
                </NameTag>
                <NameTag prefix="VIP" tone="green">
                  Lakan23
                </NameTag>
                <NameTag>NoPrefix</NameTag>
              </div>
              <p>
                Press <Kbd>T</Kbd> to open chat, then type <Command command="/plot auto" inline />.
              </p>
            </div>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-text">
          <SectionHeading eyebrow="Kit" title="Callouts, commands, crumbs" id="sg-text" icon="chat" />
          <div className={styles.stack}>
            <Callout tone="tip" title="Tip">
              <p>One free plot for everyone. Type it in chat.</p>
            </Callout>
            <Callout tone="warn" title="Heads up">
              <p>Legendary weapons only break blocks in the wild.</p>
            </Callout>
            <Callout tone="info" title="Good to know">
              <p>The resource pack is required on Survival.</p>
            </Callout>
            <Callout tone="lore" title="From the town crier">
              <p>Kasadya means joy, the feeling of a town fiesta.</p>
            </Callout>
            <Command command="/plot auto" description="Claims the next free plot for you." />
            <Command command="/warp mall" description="Rent a stall in the Shopping Mall." />
            <Breadcrumbs items={[{ label: 'Wiki', href: '/wiki' }, { label: 'Economy', href: '/wiki/economy' }, { label: 'Player shops' }]} />
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-toasts">
          <SectionHeading eyebrow="Kit" title="Advancement toasts" id="sg-toasts" icon="trophy" />
          <Panel material="deepslate" padding="md">
            <div className={styles.stack}>
              <div className={styles.row}>
                <AchievementToast title="Copied the server address" icon="grass" frame="task" className={styles.staticToast} />
                <AchievementToast title="Read every starter guide" icon="book" frame="goal" className={styles.staticToast} />
                <AchievementToast title="Beat Draedon" icon="boss" frame="challenge" className={styles.staticToast} />
              </div>
              <ToastDemo />
            </div>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-decor">
          <SectionHeading eyebrow="Kit" title="Festival decor and dividers" id="sg-decor" icon="parol" lead="Bunting bulbs and lanterns glow at night; switch the sky in the header to compare." />
          <Panel material="obsidian" padding="md">
            <div className={styles.stack}>
              <Bunting flags={12} sag={22} lights />
              <Lanterns count={5} size={48} />
              {dividers.map((d) => (
                <div key={d}>
                  <code>{d}</code>
                  <PixelDivider variant={d} />
                </div>
              ))}
            </div>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-xp">
          <SectionHeading eyebrow="Kit" title="XP bar" id="sg-xp" icon="sparkle" />
          <Panel material="deepslate" padding="md">
            <div className={styles.stack}>
              <XpBar value={7} max={10} label="Example progress" />
              <XpDemo />
            </div>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-openers">
          <SectionHeading
            variant="frame"
            icon="flag"
            eyebrow="Kit"
            title="Section openers"
            id="sg-openers"
            lead="Four ways to open a section. Mix them on a page so sections do not all start the same way. Big section heroes use PageHero scene: bookshelf (wiki), market (store), plaza (community), ballot (vote), signpost (guides)."
          />
          <Panel material="deepslate" padding="md">
            <div className={styles.stack}>
              <SectionHeading as="h3" variant="chip" eyebrow="chip" title="Gold chip and sunburst rule" lead="The original opener." />
              <SectionHeading as="h3" variant="sign" icon="lantern" eyebrow="sign" title="An oak wall sign" lead="Title and lead painted on the board." />
              <SectionHeading as="h3" variant="frame" icon="compass" eyebrow="frame" title="Icon in an item frame" />
              <SectionHeading as="h3" variant="chat" eyebrow="chat" title="An in-game chat line" lead="The lead reads as the next chat line." />
            </div>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section aria-labelledby="sg-prose">
          <SectionHeading eyebrow="Content" title="Guide and wiki bodies" id="sg-prose" icon="map" lead="ContentBlocks on a dark wiki panel and on a paper guide panel." />
          <div className={styles.grid2}>
            <Panel material="deepslate" padding="lg">
              <ContentBlocks blocks={sampleProse} tone="dark" />
            </Panel>
            <Panel material="paper" padding="lg">
              <ContentBlocks blocks={sampleProse} tone="light" />
            </Panel>
          </div>
        </section>
      </div>
    </>
  )
}
