import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-27):
 * - LPC Pro 2.1.5 (chat): formats/chat.yml (rank tag + name + " | " + message; name hover = rank, name, tokens, money, points;
 *   click = /msg), chat/mentions.yml (@name, sound + title, @everyone / @here need lpcpro.mention.everyone / .here),
 *   chat/sounds.yml (private-message sound block.note_block.bell), chat/grammar.yml (auto-capitalize, auto-period),
 *   advanced/groups.yml (message-cooldown: default 2 s, vip 2, vip+ 1, mvp 1, mvp+ 0, mvp++ 0; max-mentions 3/5/6/8/10/10),
 *   moderation/moderation.yml (anti-spam 2 s and repeats, anti-caps 70% from 5 letters -> lower case, links and IPs blocked
 *   except kasadyacraft.com, swear filter censors with *, also in private messages; infractions: 1 point per filtered message,
 *   5 points = 30 min mute, 10 = kick, 15 = 7 day ban, points expire after 7 days), moderation/content-filter.yml (signs, books,
 *   anvil names), /report (5 per hour), /ignore, /color. Not listed on purpose until tested in game: /unignore (Essentials
 *   owns that label as an alias of its own /ignore), /emoji and /toggle (not in advanced/command-settings.yml).
 * - /commands.yml aliases: /msg /tell /whisper /w /m /t /pm -> lpcpro:msg, /r /reply -> lpcpro:r, /ignore, /mute.
 * - InteractiveChat (item showcase only): [item]/[i], [inv]/[inventory], [ender]/[e].
 * - /chatcolor = DeluxeMenus colour shop (see ./tags.ts), /mail = EssentialsX.
 */
export const chat: WikiPage = {
  slug: 'chat',
  title: 'Chat and messages',
  summary: 'Private messages with a bell, @mentions, showing off items in chat, chat colours and the automatic chat filter: what it blocks and what happens if you keep swearing.',
  icon: 'chat',
  category: 'basics',
  order: 5,
  updated: '2026-11-27',
  keywords: [
    '/msg',
    '/tell',
    '/w',
    '/whisper',
    '/m',
    '/r',
    '/reply',
    '/ignore',
    '/mail',
    '/report',
    '/color',
    'mention',
    '@',
    '[item]',
    '[inv]',
    '[ender]',
    'private message',
    'pm',
    'dm',
    'filter',
    'swear',
    'mute',
    'chat colour',
  ],
  related: ['chat-games', 'tags', 'rules', 'commands'],
  body: [
    {
      type: 'p',
      text: 'Chat shows your rank tag, your name, a bar and your message. **Hover over a name** to see that player’s rank, tokens, money and points. **Click a name** to start a private message to them.',
    },
    { type: 'h2', text: 'Private messages' },
    {
      type: 'commands',
      items: [
        { command: '/msg <player> <message>', description: 'Send a private message. `/tell`, `/w`, `/whisper`, `/m` and `/t` work too. They hear a bell.' },
        { command: '/r <message>', description: 'Reply to the last person who messaged you (`/reply` works too).' },
        { command: '/ignore <player>', description: 'Stop seeing a player’s chat and private messages.' },
        { command: '/mail send <player> <message>', description: 'Leave a message for someone who is offline. `/mail read` shows yours.' },
      ],
    },
    { type: 'h2', text: 'Mentions' },
    {
      type: 'p',
      text: 'Type **@name** in chat to ping a player: they hear a sound, the name lights up and a title shows on their screen. You can mention up to 3 players in one message (more with a rank). `@everyone` is for staff only.',
    },
    { type: 'h2', text: 'Show off your items' },
    {
      type: 'table',
      head: ['Type in chat', 'Shows'],
      rows: [
        ['`[item]` or `[i]`', 'The item in your hand. Others hover over it to see it.'],
        ['`[inv]` or `[inventory]`', 'Your inventory. Others click it to look inside.'],
        ['`[ender]` or `[e]`', 'Your ender chest.'],
      ],
    },
    { type: 'h2', text: 'Chat colours' },
    {
      type: 'p',
      text: '`/chatcolor` sells chat colours for points; `/color` picks which one you write in. Prices on [Chat tags and cosmetics](/wiki/tags).',
    },
    { type: 'h2', text: 'The chat filter' },
    {
      type: 'p',
      text: 'Chat is checked automatically, in public chat and in private messages:',
    },
    {
      type: 'table',
      head: ['What', 'What happens'],
      rows: [
        ['Sending fast', 'One message every **2 seconds** (VIP+ and MVP: 1 second, MVP+ and MVP++: no wait).'],
        ['The same message again', 'Repeats and near-repeats are blocked.'],
        ['CAPS LOCK', 'A message that is mostly capitals is turned into lower case.'],
        ['Links and IP addresses', 'Blocked. Only kasadyacraft.com links are allowed.'],
        ['Swear words', 'Replaced with stars. Signs, books and item names in an anvil are checked too.'],
        ['Grammar', 'Your first letter becomes a capital and a full stop is added.'],
      ],
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'Swearing adds up',
      text: 'Every filtered swear word gives you 1 point. Points fade after 7 days. **5 points** = muted for 30 minutes, **10** = kicked, **15** = banned for 7 days. Keep it friendly and you never see any of this.',
    },
    {
      type: 'p',
      text: 'Someone breaking the rules? `/report <player> <reason>` tells the staff. See the [rules](/wiki/rules) for what is allowed.',
    },
  ],
}
