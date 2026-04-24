import logo2 from './assets/logo2.png'
import logo1 from './assets/logo1.png'

// ── IMAGE REGISTRY ─────────────────────────────────────────────────────────
// Add any image you want available here, then reference it by key
const images = { logo1, logo2 }

export default function BobbingImage({

  // ── IMAGE ──────────────────────────────────────────────────────────────
  // Which image to show — must match a key in the registry above
  image = 'logo1',

  // ── SIZE ───────────────────────────────────────────────────────────────
  // Height of the image in px
  size = 300,

  // ── POSITION ───────────────────────────────────────────────────────────
  // Horizontal position as % of the nearest positioned parent
  left = 20,
  // Vertical position in px from the top of the nearest positioned parent
  top  = 8,

  // ── BOBBING ────────────────────────────────────────────────────────────
  // Duration of one full bob cycle in seconds
  bobDuration = 6,

  // Delay before the bob starts — use negative values to start mid-cycle
  //    e.g. -1.5 on a second instance offsets it from the first
  bobDelay = 0,

  // ── LINK ───────────────────────────────────────────────────────────────
  href = '/',
}) {
  return (
    <div
      href={href}
      className="logo-link"
      style={{
        position:       'fixed',   // positions relative to nearest positioned parent
        zIndex:         200,          // raise if image appears behind other elements
        left:           `${left}%`,
        top:            `${top}px`,
        transform:      'translateX(-50%)',
        opacity:        0.8,
        animation:      `bob ${bobDuration}s ease-in-out infinite`,
        animationDelay: `${bobDelay}s`,
      }}
    >
      <img
        src={images[image]}
        alt={image}
        style={{
          height:  `${size}px`,
          width:   'auto',      // always preserves aspect ratio
          display: 'block',
        }}
      />
    </div>
  )
}