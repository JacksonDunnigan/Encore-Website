export default function Footer() {
  return (
    <footer className="footer">

      {/* ── Gradient rule — matches the hero divider and navbar bar */}
      <div className="footer-divider" />

      <div className="footer-inner">

        {/* ── Left: site name */}
        <div className="footer-brand">
          <span className="footer-title">Encore</span>
          <span className="footer-sub">Poetry Project</span>
        </div>

        {/* ── Center: quick links */}
        {/* <nav className="footer-links">
          <a href="/">Home</a>
          <a href="/about">Meet the Team</a>
          <a href="/content">Content</a>
        </nav> */}

        {/* ── Right: tagline / credit */}
        <div className="footer-credit">
          <span>Celebrating Montreal's literary scene.</span>
          <span className="footer-copy">© {new Date().getFullYear()} Encore Poetry Project</span>
        </div>

      </div>

    </footer>
  )
}