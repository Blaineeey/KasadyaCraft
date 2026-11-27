import TableFrame from '@/components/content/TableFrame'
import Callout from '@/components/ui/Callout'
import { LOCKSMITH } from '@/content/wiki/locksmith'
import { formatPrice, priceLabel, storeItems, webPrice } from '@/lib/store'
import s from './WikiData.module.css'

/*
 * Crate key prices and other sources for /wiki/crates. Renders ONLY from src/lib/store.ts
 * (storeItems, category 'keys') so prices live in one place. Owner: WIKI WRITER.
 */
const COL_PRICE = 'Price in Tokens'
const COL_OTHER = 'Other ways to get it'

/*
 * The Lab of Horrors Locksmith trades loot for crate keys (DeluxeMenus DUNGEON/Locksmith.yml, live since
 * 2026-11-25 08:28). store.ts `alsoFrom` does not list it yet, so the wiki adds it here. As soon as store.ts
 * has its own entry mentioning the Locksmith for a key, this extra line is skipped (no duplicates).
 */
const LOCKSMITH_SOURCES: Record<string, string> = {
  'key-epic': `Lab of Horrors loot: ${LOCKSMITH.rawHextechPerEpicKey} Raw Hextech at /locksmith`,
  'key-spawner': `Lab of Horrors loot: ${LOCKSMITH.wardenIngotsPerSpawnerKey} Warden Ingots, or 1 Hextech Crystal for ${LOCKSMITH.spawnerKeysPerCrystal} keys, at /locksmith`,
}

function otherSources(id: string, alsoFrom: string[] = []): string[] {
  const extra = LOCKSMITH_SOURCES[id]
  if (!extra || alsoFrom.some((a) => /locksmith/i.test(a))) return alsoFrom
  return [...alsoFrom, extra]
}

export default function CrateKeyPrices() {
  const keys = storeItems.filter((i) => i.category === 'keys')

  if (keys.length === 0) {
    return (
      <Callout tone="info" title="Key prices are being updated">
        <p>
          Open <code className="kc-cmd-inline">/keys</code> in game to see the current prices.
        </p>
      </Callout>
    )
  }

  return (
    <div className={s.block}>
      <p className={s.lead}>
        Keys are sold for Tokens in <code className="kc-cmd-inline">/keys</code>, which is also inside{' '}
        <code className="kc-cmd-inline">/purchase</code>. You can also find them in these places:
      </p>
      {/* One card per key on phones (stack), so the "other ways" column is never hidden off-screen. */}
      <TableFrame label="Crate keys" caption="Crate keys" stack className={s.wrap}>
        <table className="kc-table" role="table">
          <caption className="kc-sr-only">Crate keys</caption>
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">
                Key
              </th>
              <th scope="col" role="columnheader">
                {COL_PRICE}
              </th>
              <th scope="col" role="columnheader">
                {COL_OTHER}
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {keys.map((k) => {
              const packs = k.packSizes && k.packSizes.length > 1 ? `Buy ${k.packSizes.join(' or ')} at a time.` : null
              const sources = otherSources(k.id, k.alsoFrom)
              return (
                <tr key={k.id} role="row">
                  <th scope="row" role="rowheader">
                    {k.name}
                  </th>
                  <td role="cell" data-label={COL_PRICE}>
                    {k.price ? (
                      <>
                        <span className={s.price}>
                          <span aria-hidden="true">{formatPrice(k.price)}</span>
                          <span className="kc-sr-only">{priceLabel(k.price)}</span>
                        </span>{' '}
                        each
                        {packs ? <span className={s.sub}>{packs}</span> : null}
                      </>
                    ) : webPrice(k.web) ? (
                      `Web store only: ${formatPrice(webPrice(k.web)!)}`
                    ) : k.web ? (
                      'Web store only (opening soon)'
                    ) : (
                      'Not sold yet'
                    )}
                  </td>
                  <td role="cell" data-label={COL_OTHER}>
                    {k.status === 'coming-soon' && !sources.length ? (
                      'Not handed out yet'
                    ) : sources.length ? (
                      <ul className={s.inlineList}>
                        {sources.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    ) : (
                      '-'
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </TableFrame>
    </div>
  )
}
