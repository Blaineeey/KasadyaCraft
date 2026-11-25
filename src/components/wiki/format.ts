const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** '2026-11-25' -> '25 Nov 2026'. Locale-free, so server and client always agree. */
export function formatWikiDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!m) return iso
  const month = MONTHS[Number(m[2]) - 1]
  return month ? `${Number(m[3])} ${month} ${m[1]}` : iso
}

/** The most recent `updated` date among pages. */
export function latestDate(dates: string[]): string {
  return dates.reduce((a, b) => (b > a ? b : a), '')
}
