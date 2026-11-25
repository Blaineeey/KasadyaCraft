'use client'

import Link from 'next/link'
import { useRef, useState, type CSSProperties } from 'react'
import { useToast } from '@/components/interactive/ToastProvider'
import { ItemTooltip, PixelIcon, TooltipCard, XpBar } from '@/components/ui'
import { features } from './features'
import s from './CraftingTable.module.css'

/**
 * "What's inside" as a crafting table. Pick an item from the inventory: its
 * recipe drops into the 3x3 grid slot by slot, the result pops out, and the
 * tooltip card on the side explains the feature with real commands.
 * Discover all nine and you get a goal toast.
 * The grid is decoration (aria-hidden); the card carries the information, and
 * the first feature is already crafted in the server HTML.
 * Owner: INTERACTIVITY ENGINEER.
 */
export default function CraftingTable() {
  const [selected, setSelected] = useState(0)
  const [craft, setCraft] = useState(0)
  const [found, setFound] = useState<string[]>([features[0].id])
  const foundRef = useRef(found)
  const { toast } = useToast()
  const f = features[selected]

  function pick(i: number) {
    setSelected(i)
    setCraft((c) => c + 1)
    const id = features[i].id
    if (foundRef.current.includes(id)) return
    const next = [...foundRef.current, id]
    foundRef.current = next
    setFound(next)
    if (next.length === features.length) {
      toast({ frame: 'goal', icon: 'chest', title: 'Seen everything! Now go play it.' })
    }
  }

  let filled = 0

  return (
    <div className={s.table}>
      <div className={s.gui}>
      <div className={s.workbench} aria-hidden="true">
        <p className={s.label}>Crafting</p>
        <div className={s.bench}>
          <div className={s.grid} key={craft}>
            {f.recipe.map((icon, cell) => (
              <span key={cell} className={s.slot}>
                {icon ? (
                  <span className={s.ingredient} style={{ '--i': filled++ } as CSSProperties}>
                    <PixelIcon name={icon} size={32} />
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <svg className={s.arrow} viewBox="0 0 16 12" width="48" height="36" shapeRendering="crispEdges" focusable="false">
            <path d="M0 4h9V0h2v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1H9V8H0z" />
          </svg>
          <span className={`${s.slot} ${s.result}`} key={`r${craft}`} data-rarity={f.rarity}>
            <span className={s.resultItem} style={{ '--i': filled } as CSSProperties}>
              <PixelIcon name={f.icon} size={48} />
            </span>
          </span>
        </div>
      </div>

      <div className={s.inventory}>
        <p className={s.label} id="crafting-inv-label">
          Inventory <span className={s.labelHint}>(pick one)</span>
        </p>
        <ul className={s.inv} aria-labelledby="crafting-inv-label">
          {features.map((feat, i) => (
            <li key={feat.id}>
              <ItemTooltip title={feat.name} rarity={feat.rarity} lines={[feat.flavour]}>
                <button
                  type="button"
                  className={s.invSlot}
                  aria-pressed={i === selected}
                  data-new={!found.includes(feat.id) || undefined}
                  onClick={() => pick(i)}
                >
                  <PixelIcon name={feat.icon} size={32} />
                  <span className="kc-sr-only">{feat.name}</span>
                </button>
              </ItemTooltip>
            </li>
          ))}
        </ul>
        <div className={s.progress}>
          <XpBar value={found.length} max={features.length} label="Features discovered" />
          <p className={s.progressText}>
            {found.length} of {features.length} discovered
          </p>
        </div>
      </div>
      </div>

      <div className={s.detail} aria-live="polite">
        <TooltipCard title={f.name} rarity={f.rarity} lines={[{ text: f.flavour, color: 'gray' }]} as="article" className={s.card}>
          <p className={s.body}>{f.body}</p>
          <ul className={s.cmds} aria-label="Commands">
            {f.commands.map((c) => (
              <li key={c}>
                <code className="kc-cmd-inline">{c}</code>
              </li>
            ))}
          </ul>
          <Link href={f.href} className={s.more}>
            {f.linkLabel} <span aria-hidden="true">&rarr;</span>
          </Link>
        </TooltipCard>
      </div>
    </div>
  )
}
