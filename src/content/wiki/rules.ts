import type { WikiPage } from '@/lib/content'

/*
 * Source: plugins/DeluxeMenus/gui_menus/BASIC/Rules.yml (open commands rules, aturan), read 2026-11-25.
 * Numbering and meaning kept exactly; wording lightly tidied (rule 2.1 "written PAPERs" = written books/paper).
 * Reporting: Essentials /helpop (default group has essentials.helpop), LPC Pro /report, Discord from site.ts.
 * Automatic chat filter (2026-11-27): LPC Pro moderation.yml, see ./chat.ts for the numbers.
 */
export const rules: WikiPage = {
  slug: 'rules',
  title: 'Server rules',
  summary: 'The KasadyaCraft rules from /rules in game: chat rules, global rules and severe rules, plus how to report a problem.',
  icon: 'shield',
  category: 'rules',
  order: 1,
  updated: '2026-11-27',
  keywords: ['/rules', 'rules', 'ban', 'mute', 'chat', 'spam', 'hacks', 'cheats', 'x-ray', 'glitch', 'bug', 'skin', 'report', '/report', '/helpop', 'filter', 'swear'],
  related: ['chat', 'faq', 'commands'],
  body: [
    {
      type: 'p',
      text: 'Short version: be kind, keep it clean, play fair. The full rules are below and in game with `/rules`. Staff decide on anything not listed, because a missing example does not make something allowed (rule 2.6).',
    },
    { type: 'h2', text: 'Chat rules' },
    {
      type: 'table',
      head: ['Rule', 'What it means'],
      rows: [
        ['1.0 No harassment', 'Do not harass other players or staff. This covers every chat: general, `/msg` and any other channel.'],
        ['1.1 No spam', 'No repeated messages, no sending lots of messages quickly, no character spam and no mostly-caps messages.'],
        ['1.2 Keep chat SFW', 'No pornography, 18+ topics or any adult content.'],
        [
          '1.3 No offensive content',
          'No conversations about sensitive topics: politics, religion, violence, sexual topics such as rape, suicide or self-harm, terrorism, war, school shootings or other serious topics. Hate speech, including racial slurs and sexist or homophobic remarks, is not tolerated.',
        ],
      ],
    },
    { type: 'h2', text: 'Global rules' },
    {
      type: 'table',
      head: ['Rule', 'What it means'],
      rows: [
        ['2.1 No NSFW or offensive builds', 'This also covers signs and written books.'],
        ['2.2 Clean skins', 'Your Minecraft skin must follow the rules. No sexual or NSFW skins, including nudity.'],
        ['2.3 No staff impersonation', 'Do not pretend to be staff through skins, names or chat. Mini-modding counts too.'],
        [
          '2.4 No glitch or bug abuse',
          'This is a serious offence. Moderators decide what counts as a glitch. If you find one, report it on Discord right away, do not share it and do not use it for your own gain.',
        ],
        ['2.5 No lag machines', 'Machines, farms or builds that lag the server or other players are punished based on how bad it is.'],
        ['2.6 No rule exploiting', 'Do not twist the rules to benefit yourself. If an example is not listed, that does not mean it is allowed.'],
      ],
    },
    { type: 'h2', text: 'Severe rules' },
    {
      type: 'table',
      head: ['Rule', 'What it means'],
      rows: [
        ['3.1 No punishment evasion', 'Trying to get around a punishment makes it worse.'],
        ['3.2 No hacked clients', 'Using a modified client for a major advantage is a bannable offence. Example: logging in with a hacked client.'],
        ['3.3 No chargebacks', 'A chargeback on a store purchase means an immediate, permanent ban.'],
        [
          '3.4 No sharing personal information',
          'Do not share names, addresses or social media accounts without permission. Sharing them to hurt someone counts as doxxing and means an instant ban.',
        ],
      ],
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'The chat filter',
      text: 'Chat is also checked automatically. Swear words become stars and each one adds a point for 7 days: **5 points** = 30 minute mute, **10** = kick, **15** = 7 day ban. Links (except kasadyacraft.com) are blocked and caps become lower case. Details on [Chat and messages](/wiki/chat).',
    },
    { type: 'h2', text: 'Reporting a problem' },
    {
      type: 'list',
      items: [
        'In game, `/report <player> <reason>` reports a player, and `/helpop <message>` reaches the staff who are online.',
        'For anything else, message the staff on [Discord](https://discord.gg/8DY3eXHnAg).',
        'Found a bug or a glitch? Report it on Discord and keep it to yourself (rule 2.4).',
        'Someone bothering you? `/ignore <player>` hides their messages and private messages while staff take a look.',
      ],
    },
    {
      type: 'callout',
      tone: 'lore',
      text: 'Kasadya means joy. Help us keep it that way.',
    },
  ],
}
