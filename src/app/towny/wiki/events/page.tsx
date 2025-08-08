import Link from "next/link"

export default function TownEvents() {
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
                🎉
              </div>
              <div>
                <h1 className="nav-title">Town Events</h1>
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
            🎉 Town Events System
          </h1>
          <p className="hero-description">
            Host competitions and gatherings that bring your community together and create memorable experiences for all residents.
          </p>
        </div>
      </section>

      {/* Competition Events */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-red">
            🏆 Competition Events
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">🏗️ Building Competitions</h3>
              <p className="card-description mb-16">
                Creative contests showcasing architectural skills.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Theme Builds:</strong> Specific topic challenges</div>
                <div className="mb-8">• <strong>Speed Building:</strong> Timed construction contests</div>
                <div className="mb-8">• <strong>Team Builds:</strong> Collaborative projects</div>
                <div className="mb-8">• <strong>Replica Contests:</strong> Recreate famous structures</div>
                <div className="mb-8">• <strong>Micro Builds:</strong> Small-scale detailed creations</div>
                <div className="mb-8">• <strong>Mega Projects:</strong> Large-scale constructions</div>
                <div className="mb-8">• <strong>Redstone Challenges:</strong> Technical engineering</div>
                <div className="mb-8">• <strong>Artistic Builds:</strong> Creative and aesthetic focus</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">⚔️ PvP Tournaments</h3>
              <p className="card-description mb-16">
                Combat competitions testing fighting skills.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>1v1 Duels:</strong> Individual combat matches</div>
                <div className="mb-8">• <strong>Team Battles:</strong> Group vs group combat</div>
                <div className="mb-8">• <strong>Battle Royale:</strong> Last player standing</div>
                <div className="mb-8">• <strong>Capture the Flag:</strong> Objective-based combat</div>
                <div className="mb-8">• <strong>King of the Hill:</strong> Territory control</div>
                <div className="mb-8">• <strong>Siege Warfare:</strong> Attack and defense</div>
                <div className="mb-8">• <strong>Archery Contests:</strong> Ranged combat skills</div>
                <div className="mb-8">• <strong>Gladiator Matches:</strong> Arena-style fighting</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏃 Racing Events</h3>
              <p className="card-description mb-16">
                Speed and agility challenges for all skill levels.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Parkour Races:</strong> Obstacle course challenges</div>
                <div className="mb-8">• <strong>Horse Racing:</strong> Mounted speed competitions</div>
                <div className="mb-8">• <strong>Boat Racing:</strong> Water-based speed contests</div>
                <div className="mb-8">• <strong>Elytra Flying:</strong> Aerial navigation races</div>
                <div className="mb-8">• <strong>Ice Racing:</strong> Slippery surface challenges</div>
                <div className="mb-8">• <strong>Maze Runs:</strong> Navigation and speed</div>
                <div className="mb-8">• <strong>Relay Races:</strong> Team-based running</div>
                <div className="mb-8">• <strong>Obstacle Courses:</strong> Multi-skill challenges</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Events */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-blue">
            🎊 Social & Cultural Events
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎭 Cultural Celebrations</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Town Festivals:</strong> Annual community celebrations</div>
                <div className="mb-8">• <strong>Harvest Festivals:</strong> Agricultural appreciation events</div>
                <div className="mb-8">• <strong>Art Exhibitions:</strong> Creative work showcases</div>
                <div className="mb-8">• <strong>Music Concerts:</strong> Note block performances</div>
                <div className="mb-8">• <strong>Theater Productions:</strong> Dramatic performances</div>
                <div className="mb-8">• <strong>Poetry Readings:</strong> Literary events</div>
                <div className="mb-8">• <strong>Dance Parties:</strong> Social dancing gatherings</div>
                <div className="mb-8">• <strong>Cultural Exchanges:</strong> Inter-town celebrations</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🎪 Community Gatherings</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Town Meetings:</strong> Democratic discussions</div>
                <div className="mb-8">• <strong>Welcome Parties:</strong> New resident celebrations</div>
                <div className="mb-8">• <strong>Farewell Events:</strong> Departure ceremonies</div>
                <div className="mb-8">• <strong>Achievement Ceremonies:</strong> Recognition events</div>
                <div className="mb-8">• <strong>Memorial Services:</strong> Remembrance gatherings</div>
                <div className="mb-8">• <strong>Graduation Events:</strong> Skill advancement celebrations</div>
                <div className="mb-8">• <strong>Anniversary Parties:</strong> Milestone commemorations</div>
                <div className="mb-8">• <strong>Seasonal Gatherings:</strong> Holiday celebrations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Planning */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-green">
            📅 Event Planning Process
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">💡 Concept Development</h3>
              <p className="card-description mb-16">
                Create engaging event ideas that serve your community.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Identify community interests and needs</div>
                <div className="mb-8">• Brainstorm creative event concepts</div>
                <div className="mb-8">• Research similar successful events</div>
                <div className="mb-8">• Define clear event objectives</div>
                <div className="mb-8">• Consider seasonal and cultural themes</div>
                <div className="mb-8">• Evaluate resource requirements</div>
                <div className="mb-8">• Assess potential participation levels</div>
                <div className="mb-8">• Plan for different skill levels</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📋 Organization Phase</h3>
              <p className="card-description mb-16">
                Structure and coordinate all event logistics.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Set date, time, and duration</div>
                <div className="mb-8">• Choose and prepare venue location</div>
                <div className="mb-8">• Recruit staff and volunteers</div>
                <div className="mb-8">• Create detailed event schedule</div>
                <div className="mb-8">• Prepare prizes and rewards</div>
                <div className="mb-8">• Design promotional materials</div>
                <div className="mb-8">• Establish registration system</div>
                <div className="mb-8">• Plan backup contingencies</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">📢 Promotion Strategy</h3>
              <p className="card-description mb-16">
                Spread awareness and encourage participation.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Create eye-catching announcements</div>
                <div className="mb-8">• Use multiple communication channels</div>
                <div className="mb-8">• Post on community bulletin boards</div>
                <div className="mb-8">• Share in Discord and forums</div>
                <div className="mb-8">• Send personal invitations</div>
                <div className="mb-8">• Create countdown reminders</div>
                <div className="mb-8">• Offer early registration incentives</div>
                <div className="mb-8">• Generate excitement and buzz</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Execution */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-orange">
            🎯 Event Execution & Management
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🎪 Day-of Coordination</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Setup Preparation:</strong> Arrive early to prepare venue</div>
                <div className="mb-8">• <strong>Staff Briefing:</strong> Review roles and responsibilities</div>
                <div className="mb-8">• <strong>Registration Management:</strong> Check-in participants</div>
                <div className="mb-8">• <strong>Opening Ceremony:</strong> Welcome and explain rules</div>
                <div className="mb-8">• <strong>Activity Supervision:</strong> Monitor event progress</div>
                <div className="mb-8">• <strong>Problem Resolution:</strong> Handle issues quickly</div>
                <div className="mb-8">• <strong>Time Management:</strong> Keep events on schedule</div>
                <div className="mb-8">• <strong>Documentation:</strong> Record highlights and results</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏆 Awards & Recognition</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Fair Judging:</strong> Impartial evaluation criteria</div>
                <div className="mb-8">• <strong>Multiple Categories:</strong> Various ways to win</div>
                <div className="mb-8">• <strong>Participation Rewards:</strong> Everyone gets something</div>
                <div className="mb-8">• <strong>Special Recognition:</strong> Outstanding effort awards</div>
                <div className="mb-8">• <strong>Public Announcement:</strong> Celebrate winners publicly</div>
                <div className="mb-8">• <strong>Prize Distribution:</strong> Timely reward delivery</div>
                <div className="mb-8">• <strong>Photo Opportunities:</strong> Capture memorable moments</div>
                <div className="mb-8">• <strong>Thank You Messages:</strong> Appreciate all participants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Calendar */}
      <section className="section-py section-bg">
        <div className="container">
          <h2 className="section-title section-title-purple">
            📆 Seasonal Event Calendar
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">🌸 Spring & Summer Events</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Spring Festival:</strong> Renewal and growth celebration</div>
                <div className="mb-8">• <strong>Flower Show:</strong> Garden and landscaping contest</div>
                <div className="mb-8">• <strong>Founder's Day:</strong> Town establishment anniversary</div>
                <div className="mb-8">• <strong>Summer Olympics:</strong> Multi-sport competition</div>
                <div className="mb-8">• <strong>Beach Party:</strong> Water-themed social event</div>
                <div className="mb-8">• <strong>Midsummer Festival:</strong> Longest day celebration</div>
                <div className="mb-8">• <strong>Fireworks Display:</strong> Spectacular light show</div>
                <div className="mb-8">• <strong>Outdoor Concert:</strong> Music under the stars</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🍂 Fall & Winter Events</h3>
              <div className="text-gray text-14">
                <div className="mb-8">• <strong>Harvest Festival:</strong> Agricultural celebration</div>
                <div className="mb-8">• <strong>Halloween Party:</strong> Spooky costume contest</div>
                <div className="mb-8">• <strong>Thanksgiving Feast:</strong> Community gratitude dinner</div>
                <div className="mb-8">• <strong>Winter Wonderland:</strong> Snow and ice activities</div>
                <div className="mb-8">• <strong>Holiday Market:</strong> Seasonal shopping event</div>
                <div className="mb-8">• <strong>New Year Celebration:</strong> Fresh start festivities</div>
                <div className="mb-8">• <strong>Ice Sculpture Contest:</strong> Frozen art competition</div>
                <div className="mb-8">• <strong>Cozy Gathering:</strong> Indoor warmth and fellowship</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Resources */}
      <section className="section-py">
        <div className="container">
          <h2 className="section-title section-title-red">
            🛠️ Event Resources & Support
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">💰 Funding & Budgets</h3>
              <p className="card-description mb-16">
                Financial planning for successful events.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Town treasury allocations</div>
                <div className="mb-8">• Resident donations and contributions</div>
                <div className="mb-8">• Sponsorship from local businesses</div>
                <div className="mb-8">• Entry fees for competitions</div>
                <div className="mb-8">• Fundraising activities</div>
                <div className="mb-8">• Grant applications</div>
                <div className="mb-8">• Cost-sharing with other towns</div>
                <div className="mb-8">• Budget tracking and reporting</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">🏗️ Venue & Equipment</h3>
              <p className="card-description mb-16">
                Physical resources needed for events.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Event halls and meeting spaces</div>
                <div className="mb-8">• Outdoor amphitheaters</div>
                <div className="mb-8">• Sports facilities and arenas</div>
                <div className="mb-8">• Competition equipment</div>
                <div className="mb-8">• Sound and lighting systems</div>
                <div className="mb-8">• Seating and staging</div>
                <div className="mb-8">• Decoration and theming materials</div>
                <div className="mb-8">• Safety and security equipment</div>
              </div>
            </div>
            <div className="card">
              <h3 className="card-title">👥 Volunteer Management</h3>
              <p className="card-description mb-16">
                Organize community support for events.
              </p>
              <div className="text-gray text-14">
                <div className="mb-8">• Volunteer recruitment campaigns</div>
                <div className="mb-8">• Role assignment and training</div>
                <div className="mb-8">• Schedule coordination</div>
                <div className="mb-8">• Recognition and appreciation</div>
                <div className="mb-8">• Skill-based task matching</div>
                <div className="mb-8">• Communication systems</div>
                <div className="mb-8">• Feedback and improvement</div>
                <div className="mb-8">• Long-term volunteer retention</div>
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
              <Link href="/towny/wiki/chat-channels" className="footer-link footer-link-orange">
                ← Chat Channels
              </Link>
              <Link href="/towny/wiki/town-aesthetics" className="footer-link footer-link-green">
                Town Aesthetics →
              </Link>
            </div>
          </div>
          <p className="footer-server">
            play.kasadyacraft.online
          </p>
          <p className="footer-copyright">
            Host competitions and gatherings!
          </p>
        </div>
      </footer>
    </div>
  )
}
