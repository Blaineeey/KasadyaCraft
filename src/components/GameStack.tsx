import Badge from '@/components/ui/Badge'
import PixelIcon from '@/components/ui/PixelIcon'
import type { PixelIconName } from '@/components/ui/pixel-icons'
import type { ShowcaseGame } from '@/lib/site'
import styles from './GameStack.module.css'

/*
 * Each game gets one of our own pixel icons by genre. We deliberately do NOT
 * show the games' official logos here: no Mojang art anywhere on the site, and
 * a shelf of mixed corporate logos fought the hand-made look.
 */
const genreIcon: Record<string, PixelIconName> = {
  Minecraft: 'grass',
  Roblox: 'player',
  Valorant: 'crosshair',
  'League of Legends': 'shield',
  'Dota 2': 'sword',
  'Counter-Strike 2': 'crosshair',
  'Mobile Legends': 'crown',
  'Call of Duty': 'flag',
  Fortnite: 'pickaxe',
  'Apex Legends': 'trophy',
  'Diablo IV': 'skull',
  GTA: 'map',
  'NBA 2K': 'trophy',
}

/* rotating cartridge colours, from the festival palette */
const shells = ['red', 'gold', 'teal', 'magenta', 'orange', 'leaf'] as const

/**
 * "Games we play" shelf: a wall of chunky game cartridges with a pixel icon,
 * the game name and what the crew plays in it. Hovering a cartridge pulls it
 * off the shelf a few pixels. Servers we host get a gold badge.
 * (File name kept for history; this replaces the old 3D card stack.)
 * Owner: PIXEL UI DESIGNER.
 */
export default function GameStack({ games }: { games: ShowcaseGame[]; perRow?: number }) {
  return (
    // role="list" keeps list semantics in Safari, which drops them for list-style: none
    <ul className={styles.shelf} role="list" aria-label="Games we play">
      {games.map((g, i) => (
        <li key={g.name} className={styles.cart} data-shell={shells[i % shells.length]}>
          <span className={styles.label}>
            <span className={styles.art} aria-hidden="true">
              <PixelIcon name={genreIcon[g.name] ?? 'controller'} size={48} />
            </span>
            <span className={styles.name}>{g.name}</span>
            <span className={styles.sub}>{g.sub}</span>
          </span>
          {g.hosted ? (
            <Badge tone="gold" className={styles.badge}>
              Hosted by us
            </Badge>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
