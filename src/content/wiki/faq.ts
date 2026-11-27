import { FACTS_CHECKED, TOKEN_SOURCES_TEXT } from '@/content/facts'
import { VERSIONS } from '@/content/guides/facts'
import { DELVE_RULES, DELVES, livesFor } from '@/content/wiki/delve-facts'
import type { WikiPage } from '@/lib/content'
import { site } from '@/lib/site'
import { VOTE_PARTY_TEXT, VOTE_REWARD_TEXT, voteRewards, voteSites } from '@/lib/vote'

/*
 * Answers summarise facts verified for the other wiki pages (see their source notes) plus:
 * - Velocity proxy online-mode true, no Geyser (CHANGELOG infra + cutover entries)
 * - ViaVersion/ViaBackwards 5.12.3 live on hub + survival since the 2026-11-25 05:13-05:19 restarts: 1.21.11 and
 *   26.x clients connect (VERSIONS in src/content/guides/facts.ts); the pack is made for site.recommendedVersion
 * - survival server.properties require-resource-pack=true; hub sends no pack
 * - CombatLogX default-timer 10, punish.yml kill on disconnect
 * - Voting: KasadyaVote config.yml + NuVotifier (numbers from src/lib/vote.ts)
 * - Dungeon answers (2026-11-26): Lab of Horrors general.yml DeathLimit none / MinPlayer 1 / MaxPlayer 5 (see ./dungeon.ts);
 *   the delves from KasadyaDelves 1.0.0 (./delve-facts.ts: lives, gear, difficulty, config.yml bedrock factors,
 *   RunImpl.telegraphTicks 30 / 40 ticks, API rule 11: everything a player needs works with fake blocks, particles,
 *   boss bar, action bar, chat and menus). Monster counts scale with the party (balance.json waves_by_party).
 * - 2026-11-27: fly time (tempfly.sk + KasadyaPlotFly, see ./plots.ts), fishing (./fishing.ts), chat filter (./chat.ts),
 *   delve run cooldown 5 minutes (./delve-facts.ts)
 */
const G = DELVES.gloomhold
const C = DELVES.cinderworks

export const faq: WikiPage = {
  slug: 'faq',
  title: 'FAQ',
  summary: 'Quick answers to the questions new players ask most: versions, Bedrock, the resource pack, land, money, ranks, PvP and more.',
  icon: 'question',
  category: 'help',
  order: 1,
  updated: FACTS_CHECKED,
  keywords: ['faq', 'questions', 'help', 'bedrock', 'version', 'cracked', 'resource pack', 'pvp', 'keep inventory', 'combat log', 'vote', 'real money', 'dungeon', 'delve', 'solo', 'fly', 'fishing', 'muted', 'filter'],
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
      text: 'Only at spawn (including the PvP field, but not the duel pit), in the Shopping Mall and inside the dungeons (the Lab of Horrors and both delves). In the Wild, Nether, End and on plots your items drop, and there are no graves.',
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
    { type: 'h3', text: 'Can I fly?' },
    {
      type: 'p',
      text: `Yes, on your own plots and plots where you are trusted. Every vote gives ${voteRewards.flyMinutes} minutes of fly time (you can save up to 8 hours), and \`/fly\` turns it on. Time only runs while you are in the air, and flying stops the moment you leave the plot. See [Plots](/wiki/plots#fly-time).`,
    },
    { type: 'h3', text: 'Do I lose my gear if I die in a dungeon?' },
    {
      type: 'p',
      text: `No. In all three dungeons you keep your items and XP. In the Lab of Horrors you come back at the last door you reached. In a delve you come back at the last landing, and the party loses one of its shared lives. See [Lab of Horrors](/wiki/dungeon) and [Delves](/wiki/delves).`,
    },
    { type: 'h3', text: 'Which dungeon should I try first?' },
    {
      type: 'p',
      text: `The [Lab of Horrors](/wiki/dungeon) has no limit on deaths, so it is a gentle start. Of the two delves, [${G.name}](/wiki/${G.slug}) is ${G.difficulty}: diamond armour and a sword with level II enchantments are enough. [${C.name}](/wiki/${C.slug}) is ${C.difficulty}: diamond III gear alone, diamond II in a party. Type \`/dungeon\` to see all three.`,
    },
    { type: 'h3', text: 'Can I play the dungeons alone?' },
    {
      type: 'p',
      text: `Yes. All three take 1 to 5 players. In the Lab of Horrors click Play Solo. For a delve type \`/dungeon solo gloomhold\` or \`/dungeon solo cinderworks\`, or click Play solo in \`/dungeon\`. Alone in a delve you get ${livesFor(1)} lives, and the monsters are scaled for one player.`,
    },
    { type: 'h3', text: 'Do the delves work on Bedrock?' },
    {
      type: 'p',
      text: `Yes. The delves are built so you can play them on Bedrock: everything you need is shown with blocks, particles, the boss bar, the action bar, chat and menus. To make up for touch controls, Bedrock players deal ${DELVE_RULES.bedrockDealtPercent}% more damage and take ${DELVE_RULES.bedrockTakenPercent}% less in the delves, and boss floor warnings last ${DELVE_RULES.floorWarningSecondsBedrock} seconds instead of ${DELVE_RULES.floorWarningSeconds} when a Bedrock player is in the run.`,
    },
    { type: 'h2', text: 'Money and ranks' },
    { type: 'h3', text: 'Is fishing worth it?' },
    {
      type: 'p',
      text: 'Yes: about $1,100 an hour with a starter rod and up to about $2,800 with better rods. Sell at `/fishmarket`, not in `/shop`. See [Fishing](/wiki/fishing).',
    },
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
      text: `Yes. There are **${voteSites.length} vote sites** and every vote gives you **${VOTE_REWARD_TEXT}**. Type \`/vote\` and click a site to get its link in chat, or open the [vote page](/vote). Use your exact Minecraft name on the site and keep one inventory slot free. If you are offline, your vote waits up to ${voteRewards.pendingDays} days.`,
    },
    {
      type: 'p',
      text: `Every ${voteRewards.partyVotes} votes there is a vote party: ${VOTE_PARTY_TEXT}.`,
    },
    { type: 'h2', text: 'Help' },
    { type: 'h3', text: 'How do I report a player or a bug?' },
    {
      type: 'p',
      text: 'Use `/report <player> <reason>` or `/helpop <message>` in game, or message staff on [Discord](https://discord.gg/8DY3eXHnAg). Keep bugs to yourself until they are fixed. See [rules](/wiki/rules).',
    },
    { type: 'h3', text: 'Why did my message change, or why am I muted?' },
    {
      type: 'p',
      text: 'The chat filter fixes caps, blocks links and replaces swear words with stars. Each swear word adds a point for 7 days, and 5 points mean a 30 minute mute. See [Chat and messages](/wiki/chat).',
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
