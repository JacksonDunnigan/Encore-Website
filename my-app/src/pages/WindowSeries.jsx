// const items = [
//   { tag: 'Feature', title: 'The Art of the Comeback', desc: 'What it takes to step back into the spotlight after years away — and why it matters more than ever.', date: 'Mar 2026' },
//   { tag: 'Interview', title: 'Behind the Curtain', desc: 'A rare conversation with the people who make the magic happen before the house lights go down.', date: 'Mar 2026' },
//   { tag: 'Essay', title: 'Why We Need Live Music', desc: 'In a world of infinite streams, the irreplaceable power of being in the room where it happens.', date: 'Feb 2026' },
//   { tag: 'Review', title: 'Opening Night', desc: 'A first look at the season\'s most anticipated production — does it live up to the hype?', date: 'Feb 2026' },
//   { tag: 'Culture', title: 'The New Underground', desc: 'How a generation of artists is building scenes outside the mainstream — and thriving.', date: 'Jan 2026' },
//   { tag: 'Profile', title: 'A Life in Three Acts', desc: 'The story of a career that refused to follow the script anyone else had written for it.', date: 'Jan 2026' },
// ]

export default function Featured() {
  return (
     <div className="page">
      {/* <div className="content-layout"> */}
        <div className="home-hero" style={{ paddingTop: '320px' }}>
        <h1 className="hero-title">The Window Series</h1>
        <div className="divider" />
        <p className="hero-sub">
          The Encore Poetry Project is now reopen to submissions in English and in French for our window display series! We will accept poems on a rolling basis, so please get your poems in early! We don’t currently have a deadline in mind, but like last time, if we plan on closing submissions, we will announce the deadline in advance. The guidelines are mostly unchanged, but please go through them carefully before submitting:
        </p>
        <p className="hero-sub">
          Poems must be 20 lines OR LESS<b/>
          Send us max 2 poems at a time<b/>
          Poets MUST be Tiohià:ke/Montreal-based<b/>
          Email submissions in a word or PDF attachment to encorepoetryproject@gmail.com<b/>
          DO NOT include your name in your attachment<b/>
          Writers of all backgrounds encouraged to submit!
        </p>
        <p className="hero-sub">
          If we’ve already published you, please wait a year from your display date before submitting to us again. If you’ve submitted to us in the past and weren’t accepted, we encourage you to submit again!
        </p>
        {/* <button className="hero-btn" onClick={() => navigate('/content')}>
          Read the Poems
        </button> */}
      </div>
   
      </div>      
    // </div>
    // <div className="page">
    //   <div className="content-layout">
    //     <div className="content-header">
    //       <p className="about-label">Latest</p>
    //       <h1>Featured works</h1>
    //     </div>
    //     <div className="content-grid">
    //       {items.map((item, i) => (
    //         <div className="content-card" key={i}>
    //           <p className="card-tag">{item.tag}</p>
    //           <h2 className="card-title">{item.title}</h2>
    //           <p className="card-desc">{item.desc}</p>
    //           <div className="card-footer">{item.date}</div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>      
    // </div>
  )
}
