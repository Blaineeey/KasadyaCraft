import { Fragment } from 'react'
import StoreSprite from '@/components/store/StoreSprite'
import { PixelButton, PixelIcon } from '@/components/ui'
import { cooldownLabel, voteRewards, voteSites } from '@/lib/vote'
import s from './VoteRack.module.css'

/**
 * Vote teaser for the home page: a wooden key rack on the storeroom wall, one
 * hook per vote site, each with a Vote crate key and a paper tag (site name and
 * how often you can vote there). The links themselves live on /vote.
 * Every number comes from src/lib/vote.ts.
 * Owner: INTERACTIVITY ENGINEER.
 */

/** "TopMinecraftServers" may break between its words on a narrow tag, never inside one. */
function SiteName({ name }: { name: string }) {
  return name.split(/(?<=[a-z])(?=[A-Z])/).map((word, i) => (
    <Fragment key={i}>
      {i > 0 ? <wbr /> : null}
      {word}
    </Fragment>
  ))
}

export default function VoteRack() {
  const { keysPerVote, partyKeys, partyVotes } = voteRewards

  return (
    <div className={s.board}>
      <div className={s.head}>
        <div className={s.words}>
          <p className={s.eyebrow}>Vote</p>
          <h2 id="home-vote" className={s.title}>
            A crate key for every vote
          </h2>
          <p className={s.lead}>
            KasadyaCraft is on {voteSites.length} server lists. Each vote gives you {keysPerVote}&nbsp;Vote crate{' '}
            {keysPerVote === 1 ? 'key' : 'keys'}, and every list has its own timer.
          </p>
        </div>
        <PixelButton href="/vote" variant="gold" size="lg" icon="star">
          Go vote
        </PixelButton>
      </div>

      <ul className={s.rack} aria-label="Vote sites and how often you can vote on each">
        {voteSites.map((site) => (
          <li key={site.id} className={s.hook}>
            <span className={s.key} aria-hidden="true">
              <StoreSprite shape="key" tone="vote" size={48} />
            </span>
            <span className={s.tag}>
              <span className={s.name}>
                <SiteName name={site.name} />
              </span>{' '}
              <span className={s.timer}>{cooldownLabel(site.cooldownHours)}</span>
            </span>
          </li>
        ))}
      </ul>

      <p className={s.party}>
        <PixelIcon name="firework" size={32} />
        <span>
          <strong>Vote party:</strong> every {partyVotes} votes, everyone online on Survival gets{' '}
          {partyKeys === 1 ? 'a Vote key' : `${partyKeys} Vote keys`}.
        </span>
      </p>
    </div>
  )
}
