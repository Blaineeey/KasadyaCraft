# KasadyaCraft
 
Website for KasadyaCraft, a Minecraft Java survival server (`play.kasadyacraft.com`) and the gaming community around it.

Built with Next.js 15 (App Router), React 19 and plain CSS. No Tailwind, no component library. The look is
hand-made pixel art: original textures in `public/textures`, original icons in `src/components/ui/pixel-icons.ts`,
pixel fonts (Pixelify Sans, Silkscreen, VT323) plus Atkinson Hyperlegible Next for body text, all via `next/font`.

## Develop

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the build
```

## Where things live

The full plan, routes, ownership and component contracts are in [`docs/SITE_PLAN.md`](docs/SITE_PLAN.md).

- `src/lib/site.ts`: shared facts (address, version, Discord), hotbar navigation, footer links, community content
- `src/lib/store.ts`: ranks and store catalogue (single source for the store and the wiki)
- `src/lib/vote.ts`: vote sites and vote rewards (single source, mirrors the KasadyaVote config)
- `src/content/guides/*`, `src/content/wiki/*`: starter guides and wiki pages as typed data (`src/lib/content.ts`)
- `src/components/ui/*`: the pixel UI kit (buttons, panels, inventory slots, tooltips, toasts)
- `src/components/interactive/*`: live server status, copy-IP, sky, day/night, toasts
- `src/app/globals.css`: design tokens

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/play` | How to join |
| `/guides`, `/guides/[slug]` | Starter guides |
| `/wiki`, `/wiki/[slug]` | Server wiki |
| `/store` | Ranks, crate keys, cosmetics |
| `/vote` | Vote sites and what a vote gives |
| `/community` | Team, events and support |
| `/games`, `/games/minecraft`, `/games/roblox` | Everything the community plays |
| `/api/status` | Live server status JSON |

Old URLs (`/servers/*`, `/smp`, `/staff`, `/products`, the old `/games/minecraft/wiki/*`) redirect permanently.
Shortcuts like `/join`, `/rules`, `/ranks` and `/discord` mirror the in-game commands. See `next.config.ts`.

Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
