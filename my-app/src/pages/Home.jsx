

// ── TEAM DATA — update names, roles and bios here ──────────────────────────
// ── Add actual image imports here when you have photos
// import margot from '../assets/team/margot.jpg'
// For now using placeholder URLs
const team = [
  {
    name: 'Binh An Nguyen Cuu',
    role: 'Editor in Chief',
    bio: 'Binh An Nguyen Cuu is a Vietnamese writer and poet from Tiohtià:ke (Montreal) whose work can be found here and there. She is currently contributing to a few exciting projects as an editor, such as the Encore Poetry Project and LBRNTH magazine. For more miscellaneous details about her, you may ask Khando, Yadan or Alex.',
    image: 'src/assets/Binh-Photo.jpeg',
  },
  {
    name: 'Sophie Dufresne',
    role: 'Senior Editor',
    bio: 'Sophie Dufresne (he/they) is a recent creative writing graduate from Concordia University in Tiohtià:ke/Montreal. He fell in love with poetry after reading "Hope" by Emily Dickinson in sixth grade and is now interested in the way form informs content (or is it the other way around?). He is currently involved with The Encore Poetry Project and has a few secret WIPs in the works. You can find him in remote corners of the internet and in various anthologies.',
    image: 'src/assets/Sophie-Photo.jpeg',
  },
  {
    name: 'Yael T. Uribe ',
    role: 'Poetry Editor',
    bio: 'Yael T. Uribe is a queer Mexican poet based in Tiohtià:ke. Their poetry is confessional in nature, exploring themes like memory, grief, domesticity, the passage of time, late-night kitchen conversations and everything in between. Their work has been published in SQUID Magazine, Room Magazine, EVENT Magazine and more.',
    image: 'src/assets/Yael-Photo.jpeg',
  },
]

  // ── EMERITUS DATA — update names and years here ────────────────────────────
  const emeritus = [
    { name: 'Inuya Schultz',  role: 'Director', year: '2023 - 2025'  },
    { name: 'Alana Dunlop',  role: 'Prose Editor', year: '2024 – 2025' },
    { name: 'Julia Bifulco',   role: 'Poetry Editor', year: '2024 – 2025' },
    { name: 'Kat Mulligan',     role: 'Communications Manager', year: '2024 – 2025' },
    { name: 'Jackson Dunnigan ',  role: 'Graphic/Web Designer',  year: '2024-2026' },
  ]
// ── Extracts initials from a full name for the avatar circle
// function initials(name) {
//   return name.split(' ').map(n => n[0]).join('')
// }

export default function Home() {
  // const navigate = useNavigate()

  return (
    <>
  
    <div className="page">
  
      {/* ── MISSION STATEMENT ───────────────────────────────────────────── */}
      <div className="home-hero" style={{ paddingTop: '320px' }}>
        <h1 className="hero-title">Our Mission</h1>
        <div className="divider" />
        <p className="hero-sub">
          The Encore Poetry Project aims to make local poetry more accessible
          and circulated amongst the people who look for it and the ones who
          may find delight in stumbling upon it.
        </p>
        <p className="hero-sub">
          We cherish the effervescence of Montreal's diverse literary scene and
          are eager to contribute to its growth by celebrating local upcoming
          and established poets in our anthologies, at our open mic events, in
          our window displays, and through many more creative projects to come.
        </p>

        {/* <button className="hero-btn" onClick={() => navigate('/content')}>
          Read the Poems
        </button> */}
      </div>

      {/* ── TEAM SECTION ─────────────────────────────────────────────────── */}
      <div className="home-hero">
        <h2 className="hero-title">Meet the Team</h2>
        {/* <p className="about-label">The People Behind the Page</p> */}

        <div className="divider" />

        <div className="team-grid">
          {team.map((member, i) => (
            <div className={`team-row ${i % 2 === 0 ? 'team-row--left' : 'team-row--right'}`} key={i}>
              <img src={member.image} alt={member.name} className="team-img" />
              <div className="team-text">
                <div className="team-name">{member.name}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        {/* </div> */}
       </div>
      </div>

      {/* ── EDITORS EMERITUS ────────────────────────────────────────────── */}

      <div className="emeritus-section">
              <div className="divider" />          {/* ← gradient divider like the hero */}

        <p className="about-label">Past Editors</p>
        <h2>Editors Emeritus</h2>
        <p className="emeritus-intro">
          These editors helped build Encore into what it is today. We are
          grateful of the time, effort, and passion they invested.
        </p>
        <div className="emeritus-list">
          {emeritus.map((ed, i) => (
            <div className="emeritus-item" key={i}>
              <div className="emeritus-name">{ed.name}</div>
              <div className="emeritus-info">{ed.role}</div>
              <div className="emeritus-info">{ed.year}</div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* <Footer /> */}

    </>
  )
}