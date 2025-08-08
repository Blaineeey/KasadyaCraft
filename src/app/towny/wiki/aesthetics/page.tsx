import Link from "next/link"

export default function TownAesthetics() {
  return (
    <div className="minecraft-bg">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-flex">
            <div className="nav-left">
              <Link href="/towny/wiki" className="nav-back">
                ← Back to Wiki
              </Link>
              <div className="nav-logo nav-logo-wiki">
                🎨
              </div>
              <div>
                <h1 className="nav-title">Town Aesthetics</h1>
                <p className="nav-subtitle-mono">play.kasadyacraft.online</p>
              </div>
            </div>
            <div className="nav-right">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/towny" className="nav-link-towny">Towny</Link>
              <Link href="/towny/wiki" className="nav-link-wiki">Wiki</Link>
              <Link href="/staff" className="nav-link">Staff</Link>
              <a href="https://discord.gg/8DY3eXHnAg" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                💬 Discord
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title-wiki">
            🎨 Town Aesthetics Guide
          </h1>
          <p className="hero-description">
            Make your town look amazing with cohesive themes, beautiful architecture, and stunning visual design.
          </p>
        </div>
      </section>

      {/* Building Themes */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🏗️ Architectural Themes
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏰 Medieval Theme</h3>
              <p className="card-description mb-16">
                Classic castle and village aesthetics with stone and wood.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Materials:</strong> Cobblestone, stone bricks, oak wood</div>
                <div className="mb-8">• <strong>Roofing:</strong> Dark oak stairs, stone slabs</div>
                <div className="mb-8">• <strong>Windows:</strong> Glass panes with stone frames</div>
                <div className="mb-8">• <strong>Decorations:</strong> Banners, armor stands, item frames</div>
                <div className="mb-8">• <strong>Lighting:</strong> Torches, lanterns, glowstone</div>
                <div className="mb-8">• <strong>Paths:</strong> Cobblestone and gravel roads</div>
                <div className="mb-8">• <strong>Features:</strong> Towers, battlements, courtyards</div>
                <div className="mb-8">• <strong>Gardens:</strong> Simple flower beds and fountains</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🌆 Modern Theme</h3>
              <p className="card-description mb-16">
                Contemporary urban design with glass and concrete.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Materials:</strong> Quartz, concrete, glass</div>
                <div className="mb-8">• <strong>Roofing:</strong> Flat roofs, quartz slabs</div>
                <div className="mb-8">• <strong>Windows:</strong> Large glass panels</div>
                <div className="mb-8">• <strong>Decorations:</strong> Minimalist, clean lines</div>
                <div className="mb-8">• <strong>Lighting:</strong> Sea lanterns, redstone lamps</div>
                <div className="mb-8">• <strong>Paths:</strong> Smooth stone, concrete</div>
                <div className="mb-8">• <strong>Features:</strong> Skyscrapers, plazas, parking</div>
                <div className="mb-8">• <strong>Gardens:</strong> Geometric planters, water features</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🧙 Fantasy Theme</h3>
              <p className="card-description mb-16">
                Magical and mystical designs with enchanted elements.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Materials:</strong> Purpur, prismarine, end stone</div>
                <div className="mb-8">• <strong>Roofing:</strong> Curved designs, unusual shapes</div>
                <div className="mb-8">• <strong>Windows:</strong> Stained glass, magical patterns</div>
                <div className="mb-8">• <strong>Decorations:</strong> Crystals, floating blocks</div>
                <div className="mb-8">• <strong>Lighting:</strong> Glowstone, sea lanterns, beacons</div>
                <div className="mb-8">• <strong>Paths:</strong> Glowing paths, mystical materials</div>
                <div className="mb-8">• <strong>Features:</strong> Towers, portals, floating islands</div>
                <div className="mb-8">• <strong>Gardens:</strong> Exotic plants, magical fountains</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Coordination */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🌈 Color Coordination
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎨 Color Palette Planning</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Primary Colors:</strong> 2-3 main building materials</div>
                <div className="mb-8">• <strong>Accent Colors:</strong> 1-2 highlight materials</div>
                <div className="mb-8">• <strong>Neutral Base:</strong> Stone, wood, or concrete foundation</div>
                <div className="mb-8">• <strong>Contrast Elements:</strong> Dark/light material balance</div>
                <div className="mb-8">• <strong>Seasonal Variations:</strong> Holiday and event decorations</div>
                <div className="mb-8">• <strong>District Themes:</strong> Different areas, same palette</div>
                <div className="mb-8">• <strong>Transition Zones:</strong> Gradual color shifts</div>
                <div className="mb-8">• <strong>Signature Colors:</strong> Unique town identification</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏠 Building Color Guidelines</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Roof Consistency:</strong> Same roofing materials throughout</div>
                <div className="mb-8">• <strong>Wall Harmony:</strong> Complementary wall colors</div>
                <div className="mb-8">• <strong>Trim Accents:</strong> Consistent window and door frames</div>
                <div className="mb-8">• <strong>Foundation Unity:</strong> Matching base materials</div>
                <div className="mb-8">• <strong>Decoration Coordination:</strong> Matching banners and signs</div>
                <div className="mb-8">• <strong>Lighting Scheme:</strong> Consistent light sources</div>
                <div className="mb-8">• <strong>Path Integration:</strong> Roads that complement buildings</div>
                <div className="mb-8">• <strong>Landscape Harmony:</strong> Gardens that match architecture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* District Planning */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            🗺️ District Planning & Layout
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏛️ Government District</h3>
              <p className="card-description mb-16">
                Official buildings and administrative centers.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Town Hall as centerpiece</div>
                <div className="mb-8">• Courthouse and legal buildings</div>
                <div className="mb-8">• Guard stations and armory</div>
                <div className="mb-8">• Public meeting spaces</div>
                <div className="mb-8">• Monument and memorial areas</div>
                <div className="mb-8">• Flag displays and banners</div>
                <div className="mb-8">• Formal gardens and plazas</div>
                <div className="mb-8">• Wide ceremonial streets</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏪 Commercial District</h3>
              <p className="card-description mb-16">
                Shopping, trading, and business areas.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Market square and stalls</div>
                <div className="mb-8">• Shop buildings and storefronts</div>
                <div className="mb-8">• Bank and financial services</div>
                <div className="mb-8">• Auction house and trading post</div>
                <div className="mb-8">• Restaurant and tavern areas</div>
                <div className="mb-8">• Warehouse and storage</div>
                <div className="mb-8">• Busy pedestrian walkways</div>
                <div className="mb-8">• Colorful signs and advertisements</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏘️ Residential District</h3>
              <p className="card-description mb-16">
                Housing and neighborhood communities.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Various house sizes and styles</div>
                <div className="mb-8">• Apartment and condo buildings</div>
                <div className="mb-8">• Private gardens and yards</div>
                <div className="mb-8">• Neighborhood parks</div>
                <div className="mb-8">• Community centers</div>
                <div className="mb-8">• Schools and libraries</div>
                <div className="mb-8">• Quiet residential streets</div>
                <div className="mb-8">• Family-friendly amenities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landscaping & Gardens */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🌿 Landscaping & Gardens
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🌸 Garden Design</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Flower Selection:</strong> Coordinate colors with buildings</div>
                <div className="mb-8">• <strong>Tree Placement:</strong> Strategic shade and beauty</div>
                <div className="mb-8">• <strong>Water Features:</strong> Fountains, ponds, and streams</div>
                <div className="mb-8">• <strong>Pathways:</strong> Garden walks and stepping stones</div>
                <div className="mb-8">• <strong>Seating Areas:</strong> Benches and rest spots</div>
                <div className="mb-8">• <strong>Seasonal Plants:</strong> Year-round garden interest</div>
                <div className="mb-8">• <strong>Maintenance Access:</strong> Easy care and upkeep</div>
                <div className="mb-8">• <strong>Wildlife Areas:</strong> Spaces for animals</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏞️ Natural Integration</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Terrain Adaptation:</strong> Work with natural landscape</div>
                <div className="mb-8">• <strong>Biome Harmony:</strong> Use appropriate plants</div>
                <div className="mb-8">• <strong>Elevation Changes:</strong> Terracing and slopes</div>
                <div className="mb-8">• <strong>Natural Materials:</strong> Stone, wood, and earth</div>
                <div className="mb-8">• <strong>Wildlife Preservation:</strong> Protect existing ecosystems</div>
                <div className="mb-8">• <strong>Drainage Planning:</strong> Water flow management</div>
                <div className="mb-8">• <strong>View Corridors:</strong> Scenic vistas and sightlines</div>
                <div className="mb-8">• <strong>Environmental Balance:</strong> Sustainable practices</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lighting Design */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            💡 Lighting Design
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🕯️ Atmospheric Lighting</h3>
              <p className="card-description mb-16">
                Create mood and ambiance throughout your town.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Warm torches for medieval areas</div>
                <div className="mb-8">• Cool sea lanterns for modern zones</div>
                <div className="mb-8">• Glowstone for magical districts</div>
                <div className="mb-8">• Lanterns for cozy neighborhoods</div>
                <div className="mb-8">• Redstone lamps for industrial areas</div>
                <div className="mb-8">• Campfires for gathering spaces</div>
                <div className="mb-8">• End rods for futuristic themes</div>
                <div className="mb-8">• Candles for intimate settings</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🌟 Functional Lighting</h3>
              <p className="card-description mb-16">
                Ensure safety and visibility throughout town.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Street lamps along all roads</div>
                <div className="mb-8">• Building entrance lighting</div>
                <div className="mb-8">• Stairway and ramp illumination</div>
                <div className="mb-8">• Bridge and tunnel lighting</div>
                <div className="mb-8">• Park and garden path lights</div>
                <div className="mb-8">• Emergency lighting systems</div>
                <div className="mb-8">• Underwater lighting for water features</div>
                <div className="mb-8">• Hidden lighting to prevent mob spawns</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">✨ Decorative Lighting</h3>
              <p className="card-description mb-16">
                Add visual interest and beauty with creative lighting.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Beacon towers for landmarks</div>
                <div className="mb-8">• Colored glass light filters</div>
                <div className="mb-8">• Chandelier and hanging lights</div>
                <div className="mb-8">• Outline lighting for buildings</div>
                <div className="mb-8">• Festival and holiday lighting</div>
                <div className="mb-8">• Underwater glow effects</div>
                <div className="mb-8">• Floating light displays</div>
                <div className="mb-8">• Interactive redstone lighting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Updates */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-purple">
            🔧 Aesthetic Maintenance
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">📅 Regular Upkeep</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Building Inspections:</strong> Check for damage and wear</div>
                <div className="mb-8">• <strong>Garden Maintenance:</strong> Replant and trim vegetation</div>
                <div className="mb-8">• <strong>Lighting Repairs:</strong> Replace broken light sources</div>
                <div className="mb-8">• <strong>Path Cleaning:</strong> Remove debris and obstructions</div>
                <div className="mb-8">• <strong>Sign Updates:</strong> Keep information current</div>
                <div className="mb-8">• <strong>Decoration Refresh:</strong> Update seasonal elements</div>
                <div className="mb-8">• <strong>Color Touch-ups:</strong> Repair faded or damaged areas</div>
                <div className="mb-8">• <strong>Community Feedback:</strong> Address resident concerns</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⬆️ Aesthetic Upgrades</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>New Block Integration:</strong> Use latest Minecraft blocks</div>
                <div className="mb-8">• <strong>Theme Evolution:</strong> Gradually improve designs</div>
                <div className="mb-8">• <strong>Technology Updates:</strong> Add new redstone features</div>
                <div className="mb-8">• <strong>Expansion Planning:</strong> Maintain consistency in growth</div>
                <div className="mb-8">• <strong>Trend Adaptation:</strong> Incorporate popular styles</div>
                <div className="mb-8">• <strong>Resident Suggestions:</strong> Implement community ideas</div>
                <div className="mb-8">• <strong>Seasonal Themes:</strong> Regular decorative updates</div>
                <div className="mb-8">• <strong>Photography Updates:</strong> Document improvements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/towny/wiki/custom-ranks" className="footer-link footer-link-orange">
                Custom Ranks →
              </Link>
              <Link href="/towny/wiki/town-banners" className="footer-link footer-link-green">
                Town Banners →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Make your town look amazing!
          </p>
        </div>
      </footer>
    </div>
  )
}
