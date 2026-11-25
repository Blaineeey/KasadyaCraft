import { FACTS_CHECKED, TOKEN_SOURCES_TEXT } from '@/content/facts'
import { VERSIONS } from '@/content/guides/facts'
import type { WikiPage } from '@/lib/content'
import { site } from '@/lib/site'
import { voteRewards, voteSites } from '@/lib/vote'

/*
 * Answers summarise facts verified for the other wiki pages (see their source notes) plus:
 * - Velocity proxy online-mode true, no Geyser (CHANGELOG infra + cutover entries)
 * - ViaVersion/ViaBackwards 5.12.3 live on hub + survival since the 2026-11-25 05:13-05:19 restarts: 1.21.11 and
 *   26.x clients connect (VERSIONS in src/content/guides/facts.ts); the pack is made for site.recommendedVersion
 * - survival server.properties require-resource-pack=true; hub sends no pack
 * - CombatLogX default-timer 10, punish.yml kill on disconnect
 * - Voting: KasadyaVote config.yml + NuVotifier (numbers from src/lib/vote.ts)
 */
export const faq: WikiPage = {
  slug: 'faq',
  title: 'FAQ',
  summary: 'Quick answers to the questions new players ask most: versions, Bedrock, the resource pack, land, money, ranks, PvP and more.',
  icon: 'question',
  category: 'help',
  order: 1,
  updated: FACTS_CHECKED,
  keywords: ['faq', 'questions', 'help', 'bedrock', 'version', 'cracked', 'resource pack', 'pvp', 'keep inventory', 'combat log', 'vote', 'real money'],
  related: ['features', 'commands', 'rules', 'world-and-warps'],
  body: [
    { type: 'h2', text: 'Joining' },
    { type: 'h3', text: 'What is the IP and version?' },
    {
      type: 'p',
      text: `The address is \`${site.address}\` on **Java Edition 1.21.x**, with **${site.recommendedVersion}** recommended because our resource pack is made for it. Newer versions like 1.21.11 and 26.1 connect too. In fact anything from ${VERSIONS.oldest} to ${VERSIONS.newest} gets in. Step by step help is on [How to join](/play).`,
    },
    { type: 'h3', text: 'Can I play on Bedrock (phone, console, Windows Bedrock)?' },
    {
      type: 'p',
      text: `Yes, on phones, tablets and Windows: address \`${site.address}\`, port \`${site.bedrockPort}\`. No password needed, and your name gets a dot in front. Consoles need a helper app such as BedrockConnect. Custom dungeon monsters and some icons may not show on Bedrock.`,
    },
    { type: 'h3', text: 'Do I need a paid Minecraft account?' },
    {
      type: 'p',
      text: 'No. Paid accounts log in automatically. Without one you type `/register <password> <password>` the first time and `/login <password>` after that. Names of paid accounts are reserved for their owners.',
    },
    { type: 'h3', text: 'I forgot my password. What now?' },
    { type: 'p', text: 'Ask staff on Discord to reset your account. You can change a password you still know with `/changepassword <old> <new>`.' },
    { type: 'h3', text: 'Do I need the resource pack?' },
    {
      type: 'p',
      text: 'Yes, Survival needs it for the custom items, dungeon mobs and menus. The game asks with two buttons: click **Proceed**. Disconnect takes you off the server. Clicked it by accident? Rejoin and pick Proceed. To skip the question, go to Multiplayer, select the server, click Edit and set Server Resource Packs to Enabled.',
    },
    { type: 'h3', text: 'I joined but I am in a plaza. Where is Survival?' },
    {
      type: 'p',
      text: 'That is the hub. Walk through the portal, click the Survival Guide NPC, use the compass in the middle hotbar slot (key 5), or type `/survival`.',
    },
    { type: 'h2', text: 'Playing' },
    { type: 'h3', text: 'How do I protect my stuff?' },
    {
      type: 'p',
      text: 'Claim a plot with `/plot auto`. Everything on it is protected. The Wild has no land claims at all. See [Plots](/wiki/plots).',
    },
    { type: 'h3', text: 'Do I keep my items when I die?' },
    {
      type: 'p',
      text: 'Only at spawn (including the PvP field, but not the duel pit), in the Shopping Mall and inside the Lab of Horrors. In the Wild, Nether, End and on plots your items drop, and there are no graves.',
    },
    { type: 'h3', text: 'Is there PvP?' },
    {
      type: 'p',
      text: 'Yes, in the Wild, the Nether and the End, and at `/warp pvp` (you keep your items) and `/warp duel` (you drop them). The rest of spawn and the Mall are safe zones. A fight with a player puts you in combat for 10 seconds: no commands, no elytra, no safe zone. If you log out in combat, you die.',
    },
    { type: 'h3', text: 'Why can my animals not breed on my plot?' },
    {
      type: 'p',
      text: 'The plot world blocks breeding, spawn eggs, natural mob spawning and spawner mobs. Build animal and mob farms in the Wild.',
    },
    { type: 'h3', text: 'Why did my TNT or creeper not break anything?' },
    {
      type: 'p',
      text: 'Explosions only break blocks in the overworld Wild. In the Nether, End, plots, spawn and the Mall they do no block damage.',
    },
    { type: 'h3', text: 'My spawner broke when I mined it. Why?' },
    {
      type: 'p',
      text: 'You need Silk Touch on a diamond or netherite pickaxe. Anything else destroys it. See [Spawners](/wiki/spawners).',
    },
    { type: 'h3', text: 'Do I lose my gear if I die in the dungeon?' },
    {
      type: 'p',
      text: 'No. You keep your items and XP and respawn at the last door you reached. See [Lab of Horrors](/wiki/dungeon).',
    },
    { type: 'h2', text: 'Money and ranks' },
    { type: 'h3', text: 'Why will the shop not buy my diamond sword?' },
    {
      type: 'p',
      text: 'The server shop only buys raw materials, at 25% of the buy price. Sell gear to players instead. See [Money and the shop](/wiki/economy).',
    },
    { type: 'h3', text: 'How do I get a rank?' },
    {
      type: 'p',
      text: `With Tokens, in \`/ranks\`. You earn them from ${TOKEN_SOURCES_TEXT}. You buy ranks in order, VIP first. See [Ranks](/wiki/ranks).`,
    },
    { type: 'h3', text: 'Can I buy ranks with real money?' },
    { type: 'p', text: 'Not yet. There is no web store today. The [store page](/store) explains what you can get in game.' },
    { type: 'h3', text: 'Can I vote for rewards?' },
    {
      type: 'p',
      text: `Yes. There are **${voteSites.length} vote sites** and every vote gives you **${voteRewards.keysPerVote} Vote crate key**. Type \`/vote\` and click a site to get its link in chat, or open the [vote page](/vote). Use your exact Minecraft name on the site and keep one inventory slot free. If you are offline, your vote waits up to ${voteRewards.pendingDays} days.`,
    },
    {
      type: 'p',
      text: `Every ${voteRewards.partyVotes} votes there is a vote party: everyone online on Survival gets ${voteRewards.partyKeys} Vote key.`,
    },
    { type: 'h2', text: 'Help' },
    { type: 'h3', text: 'How do I report a player or a bug?' },
    {
      type: 'p',
      text: 'Use `/helpop <message>` in game, or message staff on [Discord](https://discord.gg/8DY3eXHnAg). Keep bugs to yourself until they are fixed. See [rules](/wiki/rules).',
    },
    { type: 'h3', text: 'Where do I find all the commands?' },
    { type: 'p', text: 'On [Commands](/wiki/commands), or type `/menu` in game.' },
    { type: 'h3', text: 'Something on this wiki is wrong. What now?' },
    {
      type: 'p',
      text: 'Thanks for spotting it! Tell us on [Discord](https://discord.gg/8DY3eXHnAg). Every page shows the date its facts were last checked against the server.',
    },
  ],
}
