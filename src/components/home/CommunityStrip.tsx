import { PixelButton } from '@/components/ui'
import { site } from '@/lib/site'
import s from './CommunityStrip.module.css'

/**
 * Community block for the home page: Discord, what Kasadya means, and a chat
 * box with real lines the server actually shows players (hub boss bar from
 * TAB animations.yml, the /vote reply from Skript vote.sk). No made-up quotes.
 * Owner: INTERACTIVITY ENGINEER.
 */

const CHAT: { tag: string; tone: 'gold' | 'teal' | 'pink'; text: string }[] = [
  { tag: 'HUB', tone: 'gold', text: 'Welcome to KASADYACRAFT! Step through the portal to play Survival' },
  { tag: 'HUB', tone: 'gold', text: 'Type /hub on any server to come back here' },
  { tag: 'VOTE', tone: 'pink', text: 'Voting for KasadyaCraft opens soon!' },
  { tag: 'HUB', tone: 'teal', text: 'Join the community: discord.gg/8DY3eXHnAg' },
]

export default function CommunityStrip() {
  return (
    <div className={s.wrap}>
      <p className={s.eyebrow}>Community</p>
      <h2 id="home-community" className={s.title}>
        Come say hi
      </h2>
      <p className={s.text}>
        {site.meaning} That is the whole idea here: people to play with, people to grow with. Discord is where we post
        updates, plan events and answer questions, usually fast.
      </p>

      <figure className={s.chat}>
        <figcaption className={s.chatCaption}>Lines you will see in game</figcaption>
        <ul className={s.lines}>
          {CHAT.map((l, i) => (
            <li key={i} className={s.line}>
              <span className={s.tag} data-tone={l.tone}>
                {l.tag}
              </span>{' '}
              <span className={s.sep} aria-hidden="true">
                |
              </span>{' '}
              {l.text}
            </li>
          ))}
        </ul>
      </figure>

      <div className={s.ctas}>
        <PixelButton href={site.discord} variant="discord" icon="chat">
          Join our Discord
        </PixelButton>
        <PixelButton href="/community" variant="wood" icon="heart">
          Meet the crew
        </PixelButton>
      </div>
    </div>
  )
}
