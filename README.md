# KasadyaCraft

Website for KasadyaCraft, a gaming community that plays across multiple titles and hosts its own game servers (Minecraft, Roblox).

Built with Next.js 15 (App Router) and plain CSS. No Tailwind, no component library.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the build
```

## Editing content

Almost everything you will want to change lives in `src/lib/site.ts`:

- `site` — name, tagline, description, Discord invite
- `servers` — hosted servers, their status (`online`, `beta`, `soon`), addresses and join links
- `reasons` — the "why people stay" cards on the home page
- `activities` — the "what happens here" list on the community page
- `team` — staff roster shown on the Community page
- `nav` — top navigation links
- `products` — cards on the Products page

The Roblox entry currently points at a placeholder URL. Replace `joinUrl` with the group or experience link when it is live and flip `status` to `online`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/community` | What happens here, team and support |
| `/games` | Game and server directory |
| `/games/minecraft` | Minecraft SMP |
| `/games/minecraft/wiki` | Plugin wiki (Slimefun and Epidemic guides) |
| `/games/roblox` | Roblox |
| `/products` | Community products (shows "coming soon" until `products` is filled) |

Old URLs (`/servers/*`, `/smp`, `/smp/wiki/*`, `/staff`) redirect permanently to the new ones. See `next.config.ts`.

## Design

Tokens (colours, fonts, spacing) are defined at the top of `src/app/globals.css`. The palette is dark with a single amber accent taken from the logo. Fonts are Chakra Petch (headings), Manrope (body) and JetBrains Mono (labels), loaded via `next/font`.
