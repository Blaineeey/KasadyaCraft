import type { ComponentType, ReactNode } from 'react'
import PixelIcon from '@/components/ui/PixelIcon'
import Slot from '@/components/ui/Slot'
import SlotGrid from '@/components/ui/SlotGrid'
import TooltipCard, { type Rarity, type TooltipLine } from '@/components/ui/TooltipCard'
import { CHAMBER_KEYS, CHECKED, DUNGEON, KITS, PLOT, RAW_ORES_SELL, SHOP_PRICES, money } from '@/content/guides/facts'
import GuideArt from './GuideArt'
import type { GuideArtName } from './guide-art'
import s from './figures.module.css'

/*
 * Illustrated pixel callouts for the starter guides, built from the UI kit and original art.
 * Every figure repeats its key facts in visible text (caption or list): tooltips are a bonus,
 * never the only place a fact lives. Owner: STARTER-GUIDE WRITER.
 */

function Caption({ children }: { children: ReactNode }) {
  return <figcaption className={s.caption}>{children}</figcaption>
}

/* ---------------------------------------------------------------- hub hotbar */

export function HubHotbar({ onDark = false }: { onDark?: boolean }) {
  return (
    <figure className={[s.figure, onDark ? s.onDark : ''].filter(Boolean).join(' ')}>
      <SlotGrid label="Your hotbar in the hub" title="Hub hotbar" columns={9} className={s.hotbar}>
        {Array.from({ length: 9 }, (_, i) =>
          i === 4 ? (
            <Slot
              key={i}
              label="Server Selector"
              icon="compass"
              rarity="rare"
              selected
              lines={['Right-click to open', { text: 'Pick Survival to play', color: 'aqua' }]}
            />
          ) : (
            <Slot key={i} label="Empty slot" empty />
          ),
        )}
      </SlotGrid>
      <Caption>The compass sits in the middle of your hotbar. Right-click it and pick Survival.</Caption>
    </figure>
  )
}

/* --------------------------------------------------------------- starter kit */

const starterKit: { label: string; art: GuideArtName; count?: number; lines: TooltipLine[]; rarity?: Rarity }[] = [
  { label: 'Starter Sword', art: 'wooden-sword', lines: ['Sharpness I', 'Unbreaking I'] },
  { label: 'Starter Pickaxe', art: 'wooden-pickaxe', lines: ['Efficiency II', 'Unbreaking I'] },
  { label: 'Starter Axe', art: 'wooden-axe', lines: ['Efficiency II', 'Unbreaking I'] },
  { label: 'Starter Shovel', art: 'wooden-shovel', lines: ['Efficiency II', 'Unbreaking I'] },
  { label: 'Starter Hoe', art: 'wooden-hoe', lines: ['Efficiency II', 'Unbreaking I'] },
  { label: 'Bread', art: 'bread', count: 16, lines: [{ text: 'Food for the first night', color: 'gray' }], rarity: 'common' },
  { label: 'Starter Helmet', art: 'leather-helmet', lines: ['Protection I', 'Unbreaking I'] },
  { label: 'Starter Chestplate', art: 'leather-chestplate', lines: ['Protection I', 'Unbreaking I'] },
  { label: 'Starter Leggings', art: 'leather-leggings', lines: ['Protection I', 'Unbreaking I'] },
  { label: 'Starter Boots', art: 'leather-boots', lines: ['Protection I', 'Unbreaking I'] },
]

export function StarterKit() {
  return (
    <figure className={s.figure}>
      <SlotGrid label="Starter kit items" title="Starter kit" columns={5}>
        {starterKit.map((it) => (
          <Slot
            key={it.label}
            label={it.label}
            count={it.count}
            rarity={it.rarity ?? 'uncommon'}
            lines={it.lines}
            art={<GuideArt name={it.art} size={32} />}
          />
        ))}
      </SlotGrid>
      <Caption>
        Wooden sword, pickaxe, axe, shovel and hoe, 16 bread and a full set of leather armour. Claim it again every 24 hours
        with /kit starter.
      </Caption>
    </figure>
  )
}

/* -------------------------------------------------------------- shop prices */

export function PriceTooltips() {
  return (
    <figure className={s.figure}>
      <div className={s.cards}>
        {SHOP_PRICES.map((p) => {
          const lines: TooltipLine[] = [{ text: `Shop sells it: ${money(p.buy)}`, color: 'gray' }]
          if (p.sell === null) lines.push({ text: 'Shop pays: nothing', color: 'red' })
          else lines.push({ text: `Shop pays: ${money(p.sell)}`, color: 'green' })
          if (p.note) lines.push({ text: p.note === 'Crafted' ? 'Crafted, so sell it to players' : p.note, color: 'gold' })
          const rare = p.item === 'Diamond' || p.item === 'Emerald'
          return <TooltipCard key={p.item} title={p.item} rarity={rare ? 'rare' : 'common'} lines={lines} />
        })}
      </div>
      <Caption>
        Real /shop prices, checked {formatDate(CHECKED)}. Gathered materials pay a quarter of the shop price. Crafted items pay
        nothing.{RAW_ORES_SELL ? null : ' Raw iron and raw gold have to be smelted into ingots first.'}
      </Caption>
    </figure>
  )
}

/* ----------------------------------------------------------------- plot map */

export function PlotMap() {
  return (
    <figure className={s.figure}>
      <div
        className={s.plotMap}
        role="img"
        aria-label={`Top-down map of nine plots. Each plot is ${PLOT.size} by ${PLOT.size} blocks, with ${PLOT.road}-block quartz roads between them. Your plot is the one in the middle.`}
      >
        {Array.from({ length: 9 }, (_, i) =>
          i === 4 ? (
            <div key={i} className={s.plotYours}>
              <span className={`${s.plotTag} t-label`}>
                <PixelIcon name="flag" size={16} />
                You
              </span>
            </div>
          ) : (
            <div key={i} className={s.plot} />
          ),
        )}
      </div>
      <Caption>
        Seen from above: every plot is {PLOT.size} x {PLOT.size} blocks of grass, with {PLOT.road}-block quartz roads in between.
      </Caption>
    </figure>
  )
}

/* ---------------------------------------------------------------- shop chat */

export function ShopChat() {
  return (
    <figure className={s.figure}>
      <div className={s.chat}>
        <p className={s.chatNote}>You hold a Diamond and left-click your chest</p>
        <p className={s.chatGreen}>
          Enter in chat, how much you wish to trade <span className={s.chatYellow}>1x Diamond</span> for.
        </p>
        <p>
          <span className={s.chatName}>&lt;You&gt;</span> 150
        </p>
        <p className={s.chatGreen}>Shop successfully created.</p>
        <p className={s.chatNote}>Later, a customer left-clicks your shop</p>
        <p className={s.chatGreen}>
          Enter in chat, how many you wish to <span className={s.chatAqua}>BUY</span>. You can buy{' '}
          <span className={s.chatYellow}>12</span>. Enter <span className={s.chatAqua}>all</span> to buy them all.
        </p>
        <p>
          <span className={s.chatName}>&lt;Customer&gt;</span> 3
        </p>
      </div>
      <Caption>What chat looks like when you open a shop and someone buys from it. The price you type is for one item.</Caption>
    </figure>
  )
}

/* ------------------------------------------------------------ dungeon route */

export function DungeonRoute() {
  const rooms = DUNGEON.roomMonsters
  return (
    <figure className={s.figure}>
      <ol className={s.route} aria-label="The route through the Lab of Horrors">
        <li className={s.stop}>
          <span className={`${s.tile} ${s.tileTeal}`} aria-hidden="true">
            <PixelIcon name="flag" size={32} />
          </span>
          <span className={s.stopName}>Lab gate</span>
          <span className={s.stopSub}>Whole party stands here</span>
        </li>
        {rooms.slice(0, 6).map((n, i) => (
          <li key={i} className={s.stop}>
            <span className={s.tile} aria-hidden="true">
              {i + 1}
            </span>
            <span className={s.stopName}>Room {i + 1}</span>
            <span className={s.stopSub}>{n} monsters</span>
          </li>
        ))}
        <li className={s.stop}>
          <span className={s.tile} aria-hidden="true">
            7
          </span>
          <span className={s.stopName}>Room 7</span>
          <span className={s.stopSub}>The Disciple and {rooms[6] - 1} more</span>
        </li>
        <li className={s.stop}>
          <span className={`${s.tile} ${s.tileTeal}`} aria-hidden="true">
            <PixelIcon name="portal" size={32} />
          </span>
          <span className={s.stopName}>Portal</span>
          <span className={s.stopSub}>Gather, then press the button</span>
        </li>
        <li className={s.stop}>
          <span className={`${s.tile} ${s.tileBoss}`} aria-hidden="true">
            <PixelIcon name="boss" size={32} />
          </span>
          <span className={s.stopName}>Draedon</span>
          <span className={s.stopSub}>{DUNGEON.bossHealth.toLocaleString('en-US')} health</span>
        </li>
        <li className={s.stop}>
          <span className={`${s.tile} ${s.tileGold}`} aria-hidden="true">
            <PixelIcon name="chest" size={32} />
          </span>
          <span className={s.stopName}>Raid chests</span>
          <span className={s.stopSub}>{DUNGEON.rewardRoomMinutes} minutes to loot</span>
        </li>
      </ol>
      <Caption>Gate, seven rooms, the portal, Draedon, then the raid chests. Monster counts are what each room asks you to kill.</Caption>
    </figure>
  )
}

/* -------------------------------------------------------- locksmith recipes */

export function LocksmithRecipes() {
  return (
    <figure className={s.figure}>
      <div className={s.recipes}>
        {CHAMBER_KEYS.map((k) => (
          <div key={k.name} className={s.recipe}>
            <p className={s.recipeTitle}>{k.name}</p>
            <div className={s.recipeRow}>
              <SlotGrid label={`Ingredients for the ${k.name}`} columns={k.recipe.length}>
                {k.recipe.map((i) => (
                  <Slot
                    key={i.item}
                    label={i.item}
                    count={i.count}
                    lines={[{ text: `${i.count} needed`, color: 'gray' }]}
                    art={<GuideArt name={i.art} size={32} />}
                  />
                ))}
              </SlotGrid>
              <span className={s.recipeArrow} aria-hidden="true" />
              <SlotGrid label={`Result: ${k.name}`} columns={1}>
                <Slot
                  label={k.name}
                  rarity="rare"
                  lines={[`Opens ${/^[aeiou]/i.test(k.opens) ? 'an' : 'a'} ${k.opens}`, { text: `${k.items} items inside`, color: 'gray' }]}
                  art={<GuideArt name={k.art} size={32} />}
                />
              </SlotGrid>
            </div>
            <p className={s.recipeText}>
              {k.recipe.map((i) => `${i.count} ${i.item}`).join(', ')}. Opens {/^[aeiou]/i.test(k.opens) ? 'an' : 'a'} {k.opens} ({k.items} items).
            </p>
          </div>
        ))}
      </div>
      <Caption>The three Locksmith recipes, exactly as in /locksmith. Everything is taken only if you carry all of it.</Caption>
    </figure>
  )
}

/* ------------------------------------------------------------------ kits */

const kitRarity: Record<string, Rarity> = {
  starter: 'common',
  vip: 'uncommon',
  'vip+': 'uncommon',
  mvp: 'rare',
  'mvp+': 'rare',
  'mvp++': 'legendary',
}

export function RankKits() {
  return (
    <figure className={s.figure}>
      <div className={`${s.cards} ${s.cardsWide}`}>
        {KITS.map((k) => (
          <TooltipCard
            key={k.kit}
            title={k.title}
            rarity={kitRarity[k.kit] ?? 'common'}
            lines={[
              { text: k.every, color: 'aqua' },
              ...k.items.map((t): TooltipLine => ({ text: t, color: /crate key/i.test(t) ? 'pink' : 'gray' })),
              { text: `/kit ${k.kit}`, color: 'yellow' },
            ]}
          />
        ))}
      </div>
      <Caption>Every kit and its timer, straight from the server&apos;s kit list.</Caption>
    </figure>
  )
}

/* --------------------------------------------------------------- registry */

export interface FigurePlacement {
  /** Heading id (slugified h2/h3 text) the figure belongs to. */
  section: string
  /** 'end' (default) = just before the next heading; 'start' = right under the heading. */
  at?: 'start' | 'end'
  Figure: ComponentType
}

export const guideFigures: Record<string, FigurePlacement[]> = {
  joining: [{ section: 'the-hub-your-first-stop', Figure: HubHotbar }],
  'first-day': [{ section: 'check-your-starter-kit', Figure: StarterKit }],
  'making-money': [{ section: 'selling-to-the-server-shop', Figure: PriceTooltips }],
  'claim-a-plot': [{ section: 'the-basics', Figure: PlotMap }],
  'open-a-shop': [{ section: 'make-a-selling-shop', Figure: ShopChat }],
  'first-dungeon': [
    { section: 'room-by-room', Figure: DungeonRoute },
    { section: 'forging-chamber-keys', Figure: LocksmithRecipes },
  ],
  'ranks-and-kits': [{ section: 'kits', Figure: RankKits }],
}

/** '2026-11-25' -> '25 November 2026' (UTC, so server and client agree). */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}
