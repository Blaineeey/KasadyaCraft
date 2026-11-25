import type { Guide } from '@/lib/content'
import { site } from '@/lib/site'
import { CHECKED, VERSIONS } from './facts'

/*
 * Sources: proxy velocity.toml (try = hub, failover on), Hub plugins/KasadyaLobby/config.yml
 * (portal, Survival Guide NPC, compass in the middle hotbar slot, /survival /smp /hub /lobby,
 * double jump, first-join fireworks + "Member #N"), Hub DeluxeMenus selector.yml (/menu),
 * Survival server.properties (require-resource-pack=true, prompt text; the game shows Proceed /
 * Disconnect, and Disconnect drops the player off the whole network), ViaVersion + ViaBackwards
 * 5.12.3 on both backends (1.13 to 26.3 can join, see VERSIONS in facts.ts).
 */
export const joining: Guide = {
  slug: 'joining',
  title: 'Joining KasadyaCraft',
  summary: 'From the launcher to Survival in about two minutes: the right version, the address, the resource pack and the hub.',
  icon: 'portal',
  stage: 'join',
  order: 1,
  minutes: 3,
  updated: CHECKED,
  next: 'first-day',
  related: ['faq', 'features'],
  body: [
    {
      type: 'p',
      text: `Play with **Minecraft: ${site.edition}** or with **Bedrock** on a phone, tablet or Windows. You do not need a paid account.`,
    },
    { type: 'h2', text: 'What you need' },
    {
      type: 'list',
      items: [
        `Java Edition **${site.recommendedVersion}**. Anything from ${VERSIONS.oldest} to ${VERSIONS.newest} can join, but our resource pack is made for ${site.recommendedVersion}, so it looks best there.`,
        `The address: \`${site.address}\``,
        'A few seconds to download our resource pack the first time you enter Survival.',
      ],
    },
    { type: 'h2', text: 'Join in three steps' },
    {
      type: 'steps',
      items: [
        {
          title: `Pick version ${site.recommendedVersion}`,
          text: `Open the Minecraft Launcher. Under **Installations**, make a new one, set the version to **release ${site.recommendedVersion}** and press Play.`,
        },
        {
          title: 'Add the server',
          text: 'Click **Multiplayer**, then **Add Server**. Give it any name and paste the address below. Click **Done** and join.',
          command: site.address,
        },
        {
          title: 'Accept the resource pack',
          text: 'When you step into Survival the game asks to download our pack. Click **Proceed**. It holds the custom items, dungeon mobs and menus. Click Disconnect and you leave the server. No harm done: rejoin and click Proceed.',
        },
      ],
    },
    { type: 'h2', text: 'Logging in' },
    {
      type: 'list',
      items: [
        '**Paid Java account:** nothing to do. You are logged in automatically.',
        '**No paid account:** you start in a login room. Type `/register <password> <password>` the first time and `/login <password>` after that. You have 2 minutes.',
        '**Bedrock:** nothing to do. Your Xbox account is your login, and your name gets a dot in front.',
      ],
    },
    {
      type: 'callout',
      tone: 'warn',
      text: 'Use a password with at least 8 characters that you use nowhere else. Staff will never ask for it. Names of paid accounts are reserved for their owners.',
    },
    { type: 'h2', text: 'Joining on Bedrock' },
    {
      type: 'p',
      text: `In Minecraft open **Play**, then **Servers**, then **Add Server**. Address \`${site.address}\`, port \`${site.bedrockPort}\`. The first time, Minecraft may ask if you trust the server. Consoles need a helper app such as BedrockConnect. Custom dungeon monsters and some icons are made for Java and may not show.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Want pictures and fixes for common errors? The full walkthrough is on the [How to join](/play) page.',
    },
    { type: 'h2', text: 'The hub: your first stop' },
    {
      type: 'p',
      text: 'Everyone lands in the hub first. It is a festival plaza floating in the sky, with a big portal at the north gate. Nobody can get hurt here, and you can double jump.',
    },
    { type: 'p', text: 'There are three ways into Survival:' },
    {
      type: 'list',
      items: [
        'Walk through the **portal** at the gate.',
        'Click the **Survival Guide** standing next to the portal.',
        'Right-click the **compass** in the middle of your hotbar and pick Survival.',
      ],
    },
    { type: 'h3', text: 'Hub commands' },
    {
      type: 'commands',
      items: [
        { command: '/survival', description: 'In the hub: jump straight into Survival. `/smp` works too.' },
        { command: '/hub', description: 'Back to the hub from anywhere. `/lobby` works too.' },
        { command: '/menu', description: 'In the hub: opens the server selector.' },
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'If Survival restarts',
      text: 'You drop back into the hub and stay connected. Give it a minute, then hop back in.',
    },
    { type: 'h2', text: 'Your first join' },
    {
      type: 'p',
      text: 'First time on the network? The hub sets off fireworks for you and the whole server sees your member number. In Survival you start at spawn with a starter kit already on you.',
    },
    {
      type: 'callout',
      tone: 'lore',
      text: 'Kasadya means joy, the feeling of a town fiesta. That is why the hub has lanterns and bunting everywhere. Tara, laro tayo!',
    },
  ],
}
