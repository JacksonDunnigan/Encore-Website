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
          The Encore Poetry Project selects a new poem every 2-3 weeks to be featured in the window
          at Encore Books and Records, located on 5670 Sherbrooke St W, Montreal, Quebec.
          Submissions are closed for the 2025-2026 window series but keep an eye on our Instagram for upcoming events.
          @encorepoetryproject
        </p>

        {/* ── Guidelines + portrait side by side ── */}
        <div className="guidelines-row">
          <div style={{ flexDirection: 'column', display: 'flex' }}>
            <p className="guidelines-text">
              <strong>Guidelines</strong>
            </p>
            <ul className="guidelines-list">
              <li>Poems must be 20 lines or less</li>
              <li>Send us max 2 poems at a time</li>
              <li>Poets must be Tiohià:ke/Montreal-based</li>
              <li>Email submissions as a Word or PDF attachment to encorepoetryproject@gmail.com</li>
              <li>Do not include your name in your attachment</li>
              <li>Writers of all backgrounds encouraged to submit!</li>
            </ul>
          </div>
          <div className="guidelines-portrait-wrapper">
            <img
              src="src/assets/storefront2.png"
              alt="storefront with poetry"
              className="guidelines-portrait"
            />
          </div>
        </div>
        <p className="hero-sub">
          If we've already published you, please wait a year from your display date before
          submitting again. If you've submitted in the past and weren't accepted, we encourage
          you to try again!
        </p>

      </div>
    </div>
  );
}