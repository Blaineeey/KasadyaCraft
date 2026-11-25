# KasadyaCraft site relaunch: plan and contract

Branch: `site/minecraft-relaunch` (local only). Written by the SITE ARCHITECT on 2026-11-25.
This file is the contract between the five specialists, the integrator and QA. If something here
conflicts with your instinct, follow this file and raise it in your report.

---

## 0. Ground rules

- Work only on `site/minecraft-relaunch`. Never push, never deploy, never touch `main`, never run `vercel`.
- Only the **INTEGRATOR** runs `npm run build` or `git commit`. Everyone else may run:
  - `npx tsc --noEmit`
  - `npx next lint --file <your files>` (ESLint flat config is in `eslint.config.mjs`; it includes jsx-a11y)
- Stay inside your folders (section 2). Need a change in someone else's file? Write it in your report
  (`notes_for_next`) with the exact change. The integrator applies it.
- No new npm dependency unless it is small, popular, MIT/OSS and justified in your report. The scaffold
  needs none: content is typed TS data, icons are hand-drawn SVG, fonts come from `next/font`.
- Never use Mojang/Minecraft assets, logos, textures, sounds or the Minecraft font. Draw originals.
  Colours and the general "blocky" look are fine; copied art is not.
- Server access is READ ONLY (see section 9). Another team is changing the servers right now.
- Copy is honest. If a feature is not live (voting, web checkout), the site says so plainly.

## 1. Routes

| Route | File(s) | Owner | Purpose |
| --- | --- | --- | --- |
| `/` | `src/app/page.tsx` + `src/components/home/*` | INTERACTIVITY | Hero with live status + big copy-IP + 3-step join, then teasers |
| `/play` | `src/app/play/page.tsx` | GUIDE WRITER | The full "how to join" page (version, add server, resource pack, hub to Survival, troubleshooting) |
| `/guides` | `src/app/guides/page.tsx` | GUIDE WRITER | Starter guide index, grouped by stage |
| `/guides/[slug]` | `src/app/guides/[slug]/page.tsx` | GUIDE WRITER | One guide (data in `src/content/guides/*`) |
| `/wiki` | `src/app/wiki/page.tsx` | WIKI WRITER | Wiki index, grouped by category, with a search/filter box |
| `/wiki/[slug]` | `src/app/wiki/[slug]/page.tsx` | WIKI WRITER | One wiki page (data in `src/content/wiki/*`) |
| `/store` | `src/app/store/**` + `src/components/store/*` | STORE ENGINEER | Ranks, crate keys, cosmetics, support. Sub-routes allowed, e.g. `/store/[category]` |
| `/vote` | `src/app/vote/page.tsx` | INTERACTIVITY | Honest placeholder: voting is not live yet |
| `/community` | `src/app/community/page.tsx` | PIXEL UI DESIGNER | Keep content, restyle with the kit |
| `/games` | `src/app/games/page.tsx` | PIXEL UI DESIGNER | Multi-game page, restyle |
| `/games/roblox` | `src/app/games/roblox/page.tsx` | PIXEL UI DESIGNER | Restyle |
| `/games/minecraft` | `src/app/games/minecraft/page.tsx` | GUIDE WRITER | Short KasadyaCraft server overview (the old Slimefun page is gone), links to /play, /guides, /wiki |
| `/api/status` | `src/app/api/status/route.ts` | INTERACTIVITY | Live server ping JSON (`ServerStatus`) |
| 404 | `src/app/not-found.tsx` | INTERACTIVITY | "You fell out of the world", respawn button |

All routes now ship real pages (integrated 2026-11-25). The `UnderConstruction` placeholder was removed.

### Redirects (in `next.config.ts`, integrator-owned)

Permanent (old URLs): `/servers/*` to `/games/*`, `/smp` to `/games/minecraft`, `/staff` to `/community`,
`/products` to `/store`, and every old wiki URL (`/smp/wiki/*`, `/games/minecraft/wiki/*`) to `/wiki`.
The old wiki (Slimefun, Epidemic, diseases, machines) was from another modpack and is deleted; git history keeps it.

Vanity (temporary, mirror in-game commands): `/join` `/ip` to `/play`, `/start` `/guide` to `/guides`,
`/rules` `/faq` `/ranks` `/commands` `/dungeon` to the matching `/wiki/<slug>`, `/shop` `/buy` to `/store`,
`/discord` to the invite. Those wiki slugs MUST exist (section 7).

## 2. Ownership map

| Role | Owns (create/edit freely) |
| --- | --- |
| PIXEL UI DESIGNER | `src/components/ui/*`, `src/components/shell/*`, `src/styles/ui.css`, `src/styles/shell.css`, `src/styles/content.css`, `src/styles/legacy.css` (delete it when done), `public/textures/*`, `scripts/make-textures.mjs`, `src/app/community/**`, `src/app/games/page.tsx`, `src/app/games/roblox/**`, `src/components/GameStack.tsx`, `src/components/CopyAddress.tsx`, `src/components/DiscordIcon.tsx`. May tune token VALUES and ADD tokens in `src/app/globals.css` |
| STORE ENGINEER | `src/app/store/**`, `src/components/store/*`, `src/lib/store.ts` |
| STARTER-GUIDE WRITER | `src/app/guides/**`, `src/content/guides/*`, `src/app/play/**`, `src/app/games/minecraft/page.tsx`, `src/components/guides/*` (create if needed) |
| WIKI WRITER | `src/app/wiki/**`, `src/content/wiki/*`, `src/components/wiki/*` (create if needed) |
| INTERACTIVITY ENGINEER | `src/components/interactive/*`, `src/components/home/*`, `src/app/page.tsx`, `src/app/api/**`, `src/lib/server-status.ts`, `src/styles/interactive.css`, `src/app/vote/**`, `src/app/not-found.tsx` |
| ARCHITECT / INTEGRATOR (frozen for others) | `src/app/layout.tsx`, `src/app/globals.css` (structure + token names), `src/lib/site.ts`, `src/lib/content.ts`, `src/components/content/*`, `next.config.ts`, `eslint.config.mjs`, `package.json`, `docs/*` |

Styling rule: the designer writes global CSS in `src/styles/*` (class prefix `kc-`). Everyone else styles
their own components with **CSS Modules** next to the component (`Foo.module.css`), using tokens only.
No raw hex colours in modules: add a token request instead. No inline `style` beyond CSS custom properties.

## 3. Design direction (non-negotiable)

It must feel unmistakably Minecraft and hand-made. The scaffold already sets the frame: night festival sky,
dark-oak header, grass/dirt footer, bevelled block buttons, and a 9-slot hotbar as the main nav.

Do:
- Pixel fonts for UI, a readable body font for paragraphs (section 4).
- Chunky 3px black outlines, bevels (`--bevel-up` / `--bevel-down`), hard offset shadows. Square corners.
- Inventory slots (`SlotGrid`/`Slot`) for anything that is a set of items or perks.
- Item tooltips (`ItemTooltip` / `TooltipCard`): dark panel, purple frame, coloured title by rarity.
- Advancement toasts for small wins (copying the IP, finishing a guide).
- Original textures from `public/textures` via `--tex-*` tokens, always `image-rendering: pixelated`.
- Festival details: bunting (`Bunting`), lanterns, warm horizon glow. "Kasadya" means joy, a town fiesta.
- Motion that is short and steppy (`--ease-step`, `steps()`), never floaty. Everything respects
  `prefers-reduced-motion` (a global rule already kills animation; do not fight it).

Do not:
- Glassmorphism, `backdrop-filter`, blurred shadows, rounded cards, soft gradients on UI surfaces.
- The template hero (purple gradient, centered H1, two pill buttons).
- Generic stock icon grids (lucide-style icons as decoration). Use `PixelIcon`. `lucide-react` was removed
  from the dependencies at integration; draw a pixel icon instead.
- Marketing voice: no "Unlock your potential", "Elevate", "Seamless", "Embark", no em-dash chains,
  no "Whether you're X or Y". No lorem ipsum, no fake numbers, no fake testimonials.

Copy voice: a real server owner talking to players. Short sentences. Concrete ("You get 1 free plot.
Type `/plot auto`."). Friendly, a bit of Filipino warmth is welcome ("Tara, laro tayo!") but keep the
page English. Second person. Numbers and commands exactly as in the configs.

Accessibility (QA will check all of these):
- One `<h1>` per page (`PageHero` renders it). Logical heading order.
- Text contrast at least 4.5:1. Light text goes on dark panels (stone, deepslate, obsidian, darkwood,
  dirt); dark text on `paper` / `gui` panels. Never put body text straight on the sky or on raw textures.
- Everything works by keyboard; visible focus (`--focus`, teal outline) must never be removed.
- Tooltips open on focus too, and nothing essential lives only in a tooltip (touch screens).
- Every image has alt text (decorative = `alt=""`). Every icon-only control has an accessible name.
- Mobile first. Test at 360px wide: no horizontal scroll, tap targets at least 44px (the hotbar slots are
  the one exception allowed down to about 36px on 320px phones), nothing hidden under the fixed hotbar.

## 4. Design tokens (src/app/globals.css)

Use names, never raw values. The designer may change values and add tokens, never rename.

- Brand: `--kc-gold #FFD23F`, `--kc-orange #FF8A1A`, `--kc-red #E8203A`, `--kc-magenta`, `--kc-leaf`,
  `--kc-teal #22E0DD` (in-game UI accent), `--kc-sunburst` (logo gradient, big headings only via `.t-sunburst`).
- Materials: `--mat-grass|dirt|stone|deepslate|plank|darkwood|obsidian|paper|terracotta` (+ `-light/-dark`).
- GUI greys: `--gui-bg|light|dark|slot|slot-dark|ink`.
- Surfaces/text: `--bg`, `--surface-1..3`, `--edge` (black outline), `--text`, `--text-dim`, `--text-muted`,
  `--ink`, `--ink-dim` (on light panels), `--link`, `--link-on-light`, `--focus`.
- Tooltip: `--tooltip-bg|edge-top|edge-bottom|title|text`. Rarity: `--rarity-common|uncommon|rare|epic|legendary`.
  Chat colours: `--chat-gray|dark-gray|green|aqua|red|gold|yellow|pink`. Status: `--ok|warn|bad|idle`.
- Sky: `--sky-top|mid|horizon|glow`, `--cloud`, `--celestial`, `--star`. `<html data-time="day">` swaps them.
- Textures: `--tex-dirt|grass|grass-top|stone|deepslate|planks|planks-dark|obsidian|paper|terracotta`, `--tex-size: 64px`.
- Fonts (all OFL via `next/font` in layout): `--font-pixel` Pixelify Sans (headings, buttons, nav),
  `--font-label` Silkscreen (tiny caps labels, 13px+ only), `--font-term` VT323 (commands, IP, numbers, chat;
  use at 1.25rem+), `--font-body` Atkinson Hyperlegible Next (paragraphs).
- Type scale: `--fs-xs|sm|md|lg|xl|2xl|3xl|hero|term`. Shadows: `--text-shadow-pixel(-lg)`.
- Spacing (4px grid): `--s-1` 4 ... `--s-9` 96. Borders: `--bw` 3px, `--bw-thin` 2px, `--radius` 0.
- Bevels: `--bevel-up`, `--bevel-down`, `--bevel-gui`, `--bevel-slot`, `--block-base`, `--block-drop`, `--press-depth`.
- Motion: `--dur-fast|dur|dur-slow`, `--ease-out`, `--ease-step`. Layout: `--container`, `--container-narrow`,
  `--gutter`, `--header-h`, `--hotbar-slot`, `--hotbar-h`. Layers: `--z-sky|raised|header|hotbar|tooltip|toast|modal`.
- Utilities: `.kc-container(--narrow)`, `.kc-section`, `.kc-stack`, `.kc-cluster`, `.kc-grid` (set `--grid-min`),
  `.t-pixel`, `.t-label`, `.t-term`, `.t-hero`, `.t-dim`, `.t-muted`, `.t-sunburst`, `.kc-sr-only`, `.kc-pixelated`.

## 5. Shell (already wired in src/app/layout.tsx)

```
<body>
  TimeOfDayScript      sets data-time before paint (interactive)
  skip link            -> #main
  SkyBackdrop page     fixed sky behind everything (interactive)
  ToastProvider        advancement toasts (interactive)
    SiteHeader         logo + wordmark, LiveStatus chip, CopyIp sm, day/night toggle (shell)
    <main id="main">   your page
    SiteFooter         grass edge, dirt block, link columns, Mojang disclaimer (shell)
    Hotbar             fixed bottom 9-slot nav; keys 1-9 jump; selected name floats above (shell)
```

Pages do NOT wrap themselves in a shell. Inner pages start with `<PageHero>` (from `@/components/shell/PageHero`)
and put content in `<Panel>`s inside `.kc-container`. Body has bottom padding for the hotbar already.
Hotbar items, footer links and shared facts come from `src/lib/site.ts` (`hotbar`, `footerLinks`, `site`, `network`).

## 6. Component contracts

Props below are the contract. Owners may ADD optional props and improve internals; never rename/remove.

### UI kit: `import { ... } from '@/components/ui'` (PIXEL UI DESIGNER)

| Component | Props | Notes |
| --- | --- | --- |
| `PixelIcon` | `name: PixelIconName, size?=32, title?, className?` | Original 16x16 art in `pixel-icons.ts`. Undrawn names render the magenta "missing" tile, so any name in the union is safe to use today |
| `PixelButton` | `variant?: grass\|gold\|stone\|redstone\|wood\|discord, size?: sm\|md\|lg, icon?, iconRight?, block?, href?, external?` + native button/anchor props | Internal href = `next/link`, http = new tab, no href = `<button>`. Real pressed state |
| `Panel` | `material?: stone\|deepslate\|planks\|darkwood\|dirt\|obsidian\|paper\|gui, as?, title?, titleAs?, padding?: sm\|md\|lg, id?, aria-*` | paper/gui are light (dark text) |
| `TooltipCard` | `title, rarity?, lines?: (string \| {text, color?: ChatColor})[], children?, as?` | Static tooltip look, good for store cards and loot lists |
| `ItemTooltip` | `title, rarity?, lines?, children (trigger), focusable?, placement?: top\|bottom` | Hover + focus, aria-describedby |
| `SlotGrid` | `label (a11y), title?, columns?=9, children` | Provides `role=list` |
| `Slot` | `label, icon?, art?, count?, rarity?, lines?, href?, onClick?, selected?, empty?, size?: md\|lg` | Tooltip built in. Only inside SlotGrid |
| `Badge` | `tone?: gold\|teal\|red\|green\|gray\|magenta, children` | |
| `SectionHeading` | `eyebrow?, title, as?: h1\|h2\|h3, lead?, align?: start\|center, id?` | |
| `Callout` | `tone?: tip\|warn\|info\|lore, title?, children` | |
| `Command` | `command, description?, copy?=true, inline?` | VT323 chat chip with copy button |
| `Breadcrumbs` | `items: {label, href?}[]` | Last item = current page |
| `AchievementToast` | `title, heading?, icon?, frame?: task\|goal\|challenge` | Visual only; fire toasts with `useToast()` |
| `Bunting` | `flags?, sag?` | Decorative, aria-hidden |
| `XpBar` | `value, max, label, showValue?` | role=progressbar |

Shell (`@/components/shell/*`): `PageHero { title, eyebrow?, lead?, crumbs?, icon?, children? (actions), ground?: grass|stone|planks|none }`,
plus `SiteHeader`, `SiteFooter`, `Hotbar` (layout only).

### Interactive: `import { ... } from '@/components/interactive'` (INTERACTIVITY ENGINEER)

| Export | Signature | Notes |
| --- | --- | --- |
| `CopyIp` | `{ address?=site.address, size?: sm\|md\|lg, showHint?, fill?, className? }` | Copies, fires a toast, falls back to selectable text. `fill` spans the parent and scales the address to fit one line |
| `LiveStatus` | `{ variant?: chip\|card\|inline, className? }` | States: checking / online (N players) / offline / unknown. Never a fake number |
| `useServerStatus(pollMs?)` | `=> { status: ServerStatus \| null, loading, error }` | Polls `/api/status` |
| `useToast()` | `=> { toast(t: ToastInput) }` | `ToastInput = { title, heading?, icon?, frame?, duration? }` |
| `ToastProvider` | `{ children }` | Mounted once in layout |
| `SkyBackdrop` | `{ variant?: page\|hero, className? }` | page = fixed (layout), hero = inside the home hero |
| `TimeOfDayScript` / `TimeOfDayToggle` | script: none, toggle: `{ className? }` | `localStorage['kc-time']`, `<html data-time>` |

`ServerStatus` (src/lib/server-status.ts): `{ online, players: { online, max, sample? }, version, motd, latencyMs, checkedAt, source: live|cache|offline|stub }`.
`GET /api/status` returns it, `runtime = 'nodejs'`, cached ~30 s, never throws.

### Content renderer (frozen): `src/components/content/*`

`<ContentBlocks blocks={ContentBlock[]} tone="dark|light" />`. `tone="light"` on paper/gui panels (guides),
`"dark"` on stone/deepslate (wiki). Heading ids come from `slugify()` so `tocFromBlocks()` can link to them.
`renderInline(text)` handles the inline markup below.

### Store data (src/lib/store.ts, STORE ENGINEER; read by WIKI WRITER)

`ranks: Rank[]` (`id, name, prefix, color, order, price, perks[], kit?`), `storeItems: StoreItem[]`
(`id, category: ranks|keys|cosmetics|support, name, summary, icon, rarity, price, perks?, howToGet, status, rankId?`),
`storeCategories`, `formatPrice(price)`, `STORE_CHECKOUT_URL` (null today). The wiki's `ranks` and `crates`
pages must render from these arrays, not copy them, so perks and prices live in exactly one place.

## 7. Content format (guides + wiki)

Pages are typed TS objects (no MDX). One file per page, registered in the folder's `index.ts`.

```ts
// src/content/wiki/economy.ts
import type { WikiPage } from '@/lib/content'
export const economy: WikiPage = {
  slug: 'economy', title: 'Money and the shop', summary: 'How you earn and spend money on KasadyaCraft.',
  icon: 'coin', category: 'economy', order: 1, updated: '2026-11-25',
  keywords: ['/shop', '/sell', 'balance'],
  body: [
    { type: 'p', text: 'You start with **$250**. The server shop only sells raw materials: open it with `/shop`.' },
    { type: 'callout', tone: 'tip', text: 'Selling pays 25% of the buy price, so trade with players for better deals. See [player shops](/wiki/player-shops).' },
  ],
}
```

Block types (`ContentBlock` in src/lib/content.ts): `h2`, `h3`, `p`, `list {items, ordered?}`,
`steps {items: {title, text, command?}[]}`, `commands {title?, items: {command, description, rank?}[]}`,
`callout {tone, title?, text}`, `table {head, rows, caption?}` (first cell of each row is the row header),
`slots {label, title?, columns?, items: {label, icon?, count?, rarity?, lines?}[]}`,
`image {src, alt, width, height, caption?}` (original screenshots only, put files in `public/guides/` or
`public/wiki/` inside your own folder), `divider`.

Inline markup in any string: `` `/command` `` = command chip, `**bold**`, `[label](/path)` or `[label](https://...)`.
Nothing else is parsed and there is no raw HTML. Need another block type? Ask in your report; meanwhile
render custom JSX in your own route file.

### Contracted slugs (other teams and redirects link to these, so they must exist)

Wiki (`/wiki/<slug>`): `features` (overview of everything), `commands`, `ranks`, `economy`, `player-shops`
(QuickShop in plots + Shopping Mall stalls), `plots`, `dungeon` (Lab of Horrors), `spawners`, `crates`,
`rewards` (daily quests, /rewards, playtime, AFK pool, chat games, tags), `rules`, `faq`.
More pages are welcome (e.g. `hub`, `homes-and-warps`, `tags`, `trading`, `legendary-weapons`).

Guides (`/guides/<slug>`): `joining` (stage join), `first-day`, `making-money` (stage first-day),
`claim-a-plot`, `open-a-shop`, `first-dungeon` (stage next-steps). More are welcome.

Categories: `basics`, `economy`, `features`, `dungeon`, `ranks`, `rules`, `help`. Guide stages: `join`, `first-day`, `next-steps`.

## 8. Specialist briefs

Each brief lists deliverables and what QA will check. Every report must include: files touched, facts you
verified and where (config path), anything you could not verify, and requests for other owners.

### PIXEL UI DESIGNER
1. Polish every kit component (section 6) and `src/styles/*.css`. Required details: real pressed button
   state, slot hover highlight, tooltip that stays inside the viewport and closes on Escape, tap-to-open
   tooltips on touch, toast slide-in, bunting that reads as festival flags, crisp icons at 16/32/48/64.
2. Draw the planned icons in `pixel-icons.ts` (`sword, shield, crown, tag, portal, spawner, skull, potion,
   clock, scroll, flag, warning, copy, arrow-right, arrow-left, menu, sun, moon, trophy, gift, plot, shop,
   question, compass, gem, boss, quest, pool, dice, trade, bed, firework`). Store uses crown/key/tag/heart,
   wiki will use most of them. Keep the 16x16 string format.
3. Refine textures (`scripts/make-textures.mjs` regenerates them; add more if useful, e.g. lantern glow, cobble,
   wool for bunting), and the shell: hotbar on phones (fits 320px, label readable over any background),
   header on phones, footer.
4. Restyle `/community`, `/games`, `/games/roblox` with the kit; replace `CopyAddress` with `CopyIp`,
   drop the `.legacy` wrapper, then delete `src/styles/legacy.css` and ask the integrator to remove its
   import from layout. Rework or retire `GameStack` in the new style.
5. Optional: a `/styleguide`-like page is NOT wanted in production; demo components in your report instead.

### STORE ENGINEER
1. Fill `ranks` and `storeItems` in `src/lib/store.ts` from the live configs: `plugins/DeluxeMenus/gui_menus/PURCHASE/{Menu,Ranks,Keys,Points}.yml`,
   kits in `plugins/Essentials/kits.yml`, tags in AlonsoTags config / `/tags` menu ($2.5k / $7.5k / $20k in-game money).
   Find out how players get FlareTokens (`plugins/FlareTokens/`) and say it plainly.
2. Build `/store`: category tabs or sections (ranks, crate keys, cosmetics, support), rank comparison
   (inventory slots or a table that works on phones), item cards with `TooltipCard`, clear "How to get it"
   for each item (`/store` in game, which opens the token menu). Optional `/store/[category]` pages.
3. No checkout exists: do not build a cart that pretends to charge, do not ask for payment details.
   The main CTA is "Open `/store` in game" plus "Questions? Ask in Discord". When `STORE_CHECKOUT_URL`
   is set later, the CTA should switch to it automatically (write that branch now).
4. Note: cosmetics must not be pay-to-win; say so.

### STARTER-GUIDE WRITER
1. `/play`: the definitive join page. 3 big steps (open Java Edition 1.21.x, add `play.kasadyacraft.com`,
   accept the resource pack), then what happens next (hub plaza, portal / Survival Guide NPC / compass,
   `/hub` to go back), troubleshooting (version too new or old, pack declined, "Unable to verify player
   details" means you need a premium Java account, Bedrock is not supported). Use `CopyIp` and `LiveStatus`.
2. The six contracted guides (section 7) in `src/content/guides/*`, plus `/guides` index (grouped by stage,
   with an XP-bar style "progress" or reading order) and the guide page layout (paper "book page" look,
   next-guide button, related wiki links).
3. `/games/minecraft`: short overview of the server for the multi-game section, linking to /play, /guides, /wiki.
4. Verify every number and command against the configs (section 9) and list what you checked.

### WIKI WRITER
1. The twelve contracted pages (section 7), registered in `src/content/wiki/index.ts`.
2. `/wiki` index: categories, a client-side search/filter over titles, summaries and `keywords`
   (put the search box in `src/components/wiki/*`, no dependency), and `/wiki/[slug]` layout with a table of
   contents (`tocFromBlocks`), "last checked" date and related pages.
3. `ranks` and `crates` render from `src/lib/store.ts`; do not duplicate perks or prices.
4. Rules come from `plugins/DeluxeMenus/gui_menus/BASIC/Rules.yml`, rank perks from `PURCHASE/Ranks.yml`,
   commands from the actual plugin configs/menus. Mark rank-only commands with `rank`.

### INTERACTIVITY ENGINEER
1. `/api/status`: real Java Server List Ping with `node:net` (no dependency), 3 s timeout, cached, never throws.
   The proxy answers pings (Velocity), so the player count is network-wide. Show `site.versionLabel`, not the raw version.
2. Home (`src/app/page.tsx` + `src/components/home/*`): hero with the logo, live status, big `CopyIp`, and the
   3-step join (link to /play); then features as an inventory (`SlotGrid`), a Lab of Horrors teaser, a store
   teaser, a community strip with Discord. Reuse kit components; section CSS in modules.
3. `SkyBackdrop`: parallax blocky clouds, stars and moon at night, sun by day, distant festival skyline with
   lanterns. CSS transforms only, reduced-motion safe, cheap on phones. `TimeOfDayToggle` with sun/moon icons.
4. Delight, small and optional: toast when the IP is copied (done), a hidden Konami-code firework,
   clicking a hero block "mines" it. Nothing that blocks reading or costs much JS.
5. `/vote`: honest placeholder. Voting needs a Votifier plugin and server-list listings that do not exist
   yet (in game, `/vote` already says "voting opens soon"). Explain what voting will give (vote crate keys
   exist in game) only if you verify it, and link Discord for the announcement.
6. `not-found.tsx`: fun 404 with respawn.

## 9. Server facts (verify before publishing)

Facts come from the live Survival and Hub server configs and the launch decisions log, read over a
read-only connection. The connection details stay with the server owner and are deliberately kept out
of this repo. Never modify server files, never restart anything, never copy secrets into the site.

Checked by the architect on 2026-11-25:
- Network: Velocity proxy on `play.kasadyacraft.com:25565` sends everyone to the HUB first (festival plaza:
  portal, "Survival Guide" NPC, selector compass in hotbar slot 4). `/hub` or `/lobby` returns to the hub.
  If Survival restarts or kicks you, you land in the hub. Max 100 players. MOTD "Survival | Dungeons | Plots | Shops".
- Backends are Paper 1.21.10 with ViaVersion/ViaBackwards 5.5.2: clients up to 1.21.10 work; newer clients
  (1.21.11, 26.x) currently cannot join. Write "Java Edition 1.21.x (1.21.10 recommended)" and re-check the Via version.
  Online mode (premium Java accounts). No Geyser, so no Bedrock.
- Resource pack is required on Survival (the hub sends none).
- In-game store: `/store` (`/purchase`, `/buy`, `/beli`, `/tokenshop`) opens a FlareTokens menu with Ranks,
  Keys and Points. Example from Ranks.yml: VIP costs 1000 tokens and lists max 2 shops, 2 homes, 2 plots,
  10 chest shops, /nv, /sit, /trash, /kittycannon, /craft and a VIP kit (verify every line yourself).
  Keys.yml: vote key 20 tokens. Points.yml: 10 points for 1 token. There is no web payment provider.
- Voting is NOT live (no Votifier plugin; `/vote` in game says it opens soon).
- Spawners (zSpawner): Silk Touch on a diamond or netherite pickaxe picks up NATURAL spawners; any other tool
  destroys a placed spawner; max 2 per chunk; no stacking; also from the Spawner Crate (spawner keys not in circulation yet).
- Plugins present (for feature names): PlotSquared, QuickShop-Hikari, EconomyShopGUI, ExcellentCrates,
  ODailyQuests, DailyReward, ChatGames, ToastedAFK, AlonsoTags, AxTrade, FreeCoinFlip, BetterRTP, MythicDungeons
  + MythicMobs (Lab of Horrors), AltarSMP, CustomFishing, GSit, Essentials, FlareTokens, PlayerPoints, CombatLogX.
- From the brief (verify): 1 free plot for everyone, ranks raise it to 2 to 6 plots, warps spawn/shop/mall/crates/afk/dungeon, RTP inside a
  10k border, shop sells raw materials only and buys back at 25%, player shops only in plots and the Mall
  (rentable stalls, `/warp mall`), $250 start, `/dquests`, `/rewards`, `/playtime`, AFK pool 10 points per
  20 min, crates (vote, epic, resource, trim, spawner keys), `/tags`, `/trade`, coinflip, dungeon party via
  `/mr`, boss Draedon, Chamber keys from `/locksmith`, loot codex `/dungeoninfo`, legendary AltarSMP
  weapons break blocks only in the wild. Rules: `plugins/DeluxeMenus/gui_menus/BASIC/Rules.yml`.

## 10. Integration order and QA gates

1. Specialists work in parallel; each runs `npx tsc --noEmit` and lints their files before reporting.
2. INTEGRATOR: run `npm ci` first (installed `next` is 15.4.6 but the lockfile pins the CVE-patched 15.4.10),
   then merge requests to frozen files, `npm run build`, commit on the branch.
3. QA checks: every route in section 1 returns 200 (404 page for unknown slugs), every contracted slug exists,
   every redirect lands on a real page, no console errors, keyboard-only walkthrough, 360px phone walkthrough,
   reduced-motion on, contrast spot checks, Lighthouse a11y 95+, no Mojang assets, no fake prices/numbers,
   copy passes the "not AI template" list in section 3, facts match the configs.

## 11. Known scaffold gaps (owners please close)

- `ItemTooltip`: no Escape-to-close, no viewport clamping, no touch toggle yet (designer).
- `ToastProvider`: no exit animation, no reduced-motion variant beyond the global rule (interactivity).
- `SkyBackdrop` is a flat gradient; `TimeOfDayToggle` shows text, not sun/moon icons (interactivity).
- Header hides status and IP below 640px; the home hero and /play must show them on phones.
- Hotbar selected-label can be hard to read over busy backgrounds (designer: add a dark plate).
- `eslint.config.mjs` relies on `@eslint/eslintrc`, which is installed transitively (locked 3.3.1);
  integrator may add it to devDependencies explicitly.
