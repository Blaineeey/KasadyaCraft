import TableFrame from '@/components/content/TableFrame'
import Callout from '@/components/ui/Callout'
import { formatPrice, priceLabel, storeItems } from '@/lib/store'
import s from './WikiData.module.css'

/*
 * Crate key prices and other sources for /wiki/crates. Renders ONLY from src/lib/store.ts
 * (storeItems, category 'keys') so prices live in one place. Owner: WIKI WRITER.
 */
const COL_PRICE = 'Price in Tokens'
const COL_OTHER = 'Other ways to get it'

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
                    ) : (
                      'Not sold yet'
                    )}
                  </td>
                  <td role="cell" data-label={COL_OTHER}>
                    {k.status === 'coming-soon' && !k.alsoFrom?.length ? (
                      'Not handed out yet'
                    ) : k.alsoFrom?.length ? (
                      <ul className={s.inlineList}>
                        {k.alsoFrom.map((a) => (
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
