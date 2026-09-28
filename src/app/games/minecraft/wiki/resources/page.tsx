import Link from "next/link"
import Shell from "@/components/Shell"

export default function ResourcesGuidePage() {
  return (
    <Shell>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/games/minecraft">Minecraft</Link>
            <span>/</span>
            <Link href="/games/minecraft/wiki">Wiki</Link>
          </div>
          <h1 className="display">Resources & Materials</h1>
          <p className="lead">New ores, alloys, and advanced materials!</p>
        </div>
      </section>

      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">New Ores</h2>
          <div className="grid grid-3">
            <div className="card"><h3 className="card-title">Silver Ore</h3><p className="card-description">Found underground, used in various recipes</p></div>
            <div className="card"><h3 className="card-title">Lead Ore</h3><p className="card-description">Heavy metal for radiation shielding</p></div>
            <div className="card"><h3 className="card-title">Aluminum Ore</h3><p className="card-description">Lightweight metal for alloys</p></div>
          </div>
        </div>
      </section>

      <div className="container">
        <nav className="wiki-nav"aria-label="Wiki pages">
            <Link href="/games/minecraft/wiki/energy">← Energy</Link>
            <Link href="/games/minecraft/wiki/tools">Tools →</Link>
          </nav>
      </div>
    </Shell>
  )
}
