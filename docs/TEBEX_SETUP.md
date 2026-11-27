# Tebex setup (web store on our own site)

Players shop on kasadyacraft.com/store. When they press **Checkout on Tebex**, the site builds a Tebex basket and sends
them to Tebex's own payment page. Tebex runs the delivery commands on the Survival server. We never touch card details.
The site code for this already exists (`src/components/store/checkout.ts`). It turns on when the two env values below are set.

Checked 2026-11-28 against the Tebex docs (Minecraft Java Edition page, Headless API).

## Status (2026-11-28)

Done in the Tebex dashboard (project "KasadyaCraft", 1933155, Minecraft: Offline, USD, Plus plan trial):
- Categories: **Ranks** (Cumulative: an upgrade costs only the difference; lower-priced ranks are hidden after a
  purchase) and **Crate Keys**. The default empty "Packages" category can be deleted.
- Packages (game server "KasadyaCraft", command runs only while the player is online):

  | Package | Id | Price | Command |
  | --- | --- | --- | --- |
  | VIP | 7839629 | $2.99 | `lp user {username} parent add vip` |
  | VIP+ | 7839637 | $4.99 | `lp user {username} parent add vip+` |
  | MVP | 7839641 | $6.99 | `lp user {username} parent add mvp` |
  | MVP+ | 7839645 | $9.99 | `lp user {username} parent add mvp+` |
  | MVP++ | 7839647 | $12.99 | `lp user {username} parent add mvp++` |
  | Cardael Crate Key | 7839657 | $0.99 | `crate key give {username} cardael 1` (needs 1 free inventory slot) |

- Storefront "KasadyaCraft Store" created (In-Game template), **not published**: our own site is the shop.
- Public Token (safe to share): `15fmr-ebbd77a1b266e0b5ef612dc23e61bab29b150304`. Headless API checked: all six
  packages and prices come back, baskets work, CORS allows the site.
- Site: ids filled in `src/lib/store.ts`, placeholders off. Tested locally with the token: Buy now -> list ->
  Checkout on Tebex opened pay.tebex.io with VIP $2.99 (not paid).

Still for the owner:
1. Checkout Settings: customer support email.
2. Link Wallet (payouts).
3. Replace the game server secret (the old one is in latest.log) and run `tebex secret <new>` in the panel console.
4. Optional: Checkout Settings > Test Mode, buy one Cardael key with the test method to see the key arrive and how a
   quantity above 1 is delivered, then remove the test payment.
5. Submit for Review (Continue setup page). Until Tebex approves, checkout only takes test payments.
6. After approval: Vercel env `NEXT_PUBLIC_TEBEX_PUBLIC_TOKEN` = the Public Token, redeploy. That switches on the
   web prices and Buy buttons.

## 1. Owner: create the store (creator.tebex.io)

1. Create the Tebex account and webstore. **Game type: Minecraft: Offline.** Our Bedrock players join with a dot in
   front of their name (`.Steve`), and Tebex's docs say Geyser servers must use the Offline type.
2. Currency: **USD** (the owner's choice; the site shows US dollars by default, written US$ so nobody mixes it up with in-game $).
3. Payment methods and payouts: your choice in the dashboard. Check whether GCash is offered; we could not confirm it.
4. **Integrations > Game Servers:** add the Survival server. Keep the **secret key** to yourself. You type it into
   the console (step 3), never into chat or the site.
5. **Developers > API keys:** copy the **Public Token** (it starts with 4 characters and a dash, like `spk3-...`).
   That one is safe to share. Never share the private key.
6. Create the packages (section 4) and write the refund policy. The store FAQ waits for it.

## 2. Claude: plugin and site

- Install the official Tebex plugin from Hangar (published by Tebex), version 2.4.0 for Paper, on Survival.
  After its first start, set `server: proxy: true` in `plugins/Tebex/config.yml` (Tebex docs: needed for Geyser names).
- Put each package id into `src/lib/store.ts` (`web.tebexPackageId`), copy the real prices from Tebex, and remove
  `placeholder: true`. The site never shows a web price while an item is still a placeholder.
- Test every delivery command in the sandbox before the store opens.

## 3. Owner: switch it on

- Server console: `tebex secret <your secret key>`, then `tebex info` to check that it is linked.
- Vercel project settings > Environment Variables, then redeploy:
  - `NEXT_PUBLIC_TEBEX_STORE_URL` = your store address, for example `https://kasadyacraft.tebex.io`
  - `NEXT_PUBLIC_TEBEX_PUBLIC_TOKEN` = the Public Token

## 4. Packages, prices and commands

Decided 2026-11-28: the web store sells ranks VIP to MVP++ and the Cardael crate key, at very affordable prices.
The rank commands follow the in-game token shop (`DeluxeMenus/gui_menus/PURCHASE/Ranks.yml`), with Tebex's `{username}`
instead of `%player_name%`. Check that placeholder name in Tebex's command editor.

Each rank is a full price: a web rank is added on its own, and every rank keeps everything from the ranks below it.
So someone can buy MVP++ straight away without buying VIP first.

| Package (category) | Price | Tebex command | Notes |
| --- | --- | --- | --- |
| VIP (Ranks) | $2.99 | `lp user {username} parent add vip` | `parent add`, not the menu's `settrack`: settrack would demote an MVP++ who buys VIP |
| VIP+ (Ranks) | $4.99 | `lp user {username} parent add vip+` | |
| MVP (Ranks) | $6.99 | `lp user {username} parent add mvp` | |
| MVP+ (Ranks) | $9.99 | `lp user {username} parent add mvp+` | |
| MVP++ (Ranks) | $12.99 | `lp user {username} parent add mvp++` | |
| Cardael crate key (Keys) | $0.99 each | `crate key give {username} cardael 1` | Tick "player must be online" if Tebex offers it. Let players buy more than 1 |

Small orders: Tebex takes about 5% and the payment method adds its own fee (PayPal's includes a fixed part per payment),
so a single $0.99 key keeps the least for you. The site lets players put several keys in one checkout.

Still to check once the store exists: how Tebex handles a quantity above 1 (one command per item, or a quantity placeholder).

## 5. The Cardael crate (in game)

- Files: `plugins/ExcellentCrates/crates/cardael_crate.yml` and `keys/cardael.yml` (added 2026-11-28). 20 rewards, all
  Cardael items, given with `nexo give`. The preview (left-click the crate) shows every chance.
- Rarities: 5 tools common (about 9.7% each), 4 armour pieces + shield uncommon (5.5%), bow, crossbow, sword, staff,
  spear rare (3.4%), hammer, scythe, mace, trident, wings legendary (1.4%, announced in chat).
- The crate stands at spawn `-47 69 43`: a real barrier block (the crate block) inside a plain Minecraft item display
  (tag `kc_cardael_crate`) that shows the Cardael chest model. It is not Nexo furniture on purpose: Nexo furniture
  catches every click near it, so the crate plugin never saw them. To move it: `minecraft:kill @e[tag=kc_cardael_crate]`,
  remove the barrier, summon the display and barrier at the new spot, and change `Positions` in `cardael_crate.yml`.
- Test: `crate key give <you> cardael 1`, open it, check the item arrives with its Cardael look.

## 6. When the package ids arrive (Claude)

- Fill `web.tebexPackageId`, set `placeholder: false`, and change the Cardael key from "coming soon" to a web-store status.
