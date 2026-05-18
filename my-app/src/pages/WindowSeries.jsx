export default function Featured() {
  return (
    <div className="page">
      <div className="home-hero" style={{ paddingTop: '320px' }}>

        {/* ── Hero image ── */}
        <div className="hero-image-wrapper">
          <img
            src="src/assets/storefront.png"
            alt="Window display with poetry — a frosted storefront at dusk"
            className="hero-image"
          />
        </div>

        <h1 className="hero-title">The Window Series</h1>
        <div className="divider" />

        <p className="hero-sub">
          The Encore Poetry Project is now reopen to submissions in English and in French
          for our window display series! We will accept poems on a rolling basis, so please
          get your poems in early! We don't currently have a deadline in mind, but like last
          time, if we plan on closing submissions, we will announce the deadline in advance.
          The guidelines are mostly unchanged, but please go through them carefully before submitting:
        </p>

      {/* <p className="hero-image-caption">The Window Series — Tiohià:ke / Montréal</p> */}
        <p className="hero-sub">
          <strong>Guidelines</strong><br /><br />
          Poems must be 20 lines or less<br />
          Send us max 2 poems at a time<br />
          Poets must be Tiohià:ke/Montreal-based<br />
          Email submissions as a Word or PDF attachment to encorepoetryproject@gmail.com<br />
          Do not include your name in your attachment<br />
          Writers of all backgrounds encouraged to submit!
        </p>

        <p className="hero-sub">
          If we've already published you, please wait a year from your display date before
          submitting again. If you've submitted in the past and weren't accepted, we encourage
          you to try again!
        </p>

      </div>
    </div>
  );
}