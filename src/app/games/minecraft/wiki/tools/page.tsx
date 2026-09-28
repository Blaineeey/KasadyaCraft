import Link from "next/link"
import Shell from "@/components/Shell"

export default function ToolsGuidePage() {
  return (
    <Shell>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/games/minecraft">Minecraft</Link>
            <span>/</span>
            <Link href="/games/minecraft/wiki">Wiki</Link>
          </div>
          <h1 className="display">Tools & Weapons</h1>
          <p className="lead">Advanced equipment and powerful armor!</p>
        </div>
      </section>

      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">Weapon Tiers</h2>
          <div className="grid grid-2">
            <div className="card"><h3 className="card-title">Reinforced Tools</h3><p className="card-description">Entry level upgrades, more durable than diamond</p></div>
            <div className="card"><h3 className="card-title">Damascus Steel</h3><p className="card-description">Mid-tier weapons with enhanced damage</p></div>
          </div>
        </div>
      </section>

      <div className="container">
        <nav className="wiki-nav"aria-label="Wiki pages">
            <Link href="/games/minecraft/wiki/resources">← Resources</Link>
            <Link href="/games/minecraft/wiki/slimefun-guide">Guide Home →</Link>
          </nav>
      </div>
    </Shell>
  )
}
