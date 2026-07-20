// Decorative elements — a minimal line divider and small heart accents.
// (Replaced the rope/knot motifs with a lighter, more refined look.)

const LINE = '#cbb590' // soft corda line
const ACCENT = '#a88560' // corda heart

const HEART = 'M12 20s-7-4.4-7-9.6A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7 3.4C19 15.6 12 20 12 20z'

// Full-width divider: a thin line broken by a small heart in the centre.
export function RopeDivider({ width = 340, className }) {
  const h = 22
  const mid = h / 2
  const c = width / 2
  const gap = 14
  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${h}`}
      width={width}
      height={h}
      role="presentation"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <line x1="10" y1={mid} x2={c - gap} y2={mid} stroke={LINE} strokeWidth="1.2" strokeLinecap="round" />
      <line x1={c + gap} y1={mid} x2={width - 10} y2={mid} stroke={LINE} strokeWidth="1.2" strokeLinecap="round" />
      <g transform={`translate(${c - 7.2} ${mid - 8.1}) scale(0.6)`}>
        <path d={HEART} fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

// Small heart used as a soft accent between blocks.
export function HeartDot({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" role="presentation">
      <path d={HEART} fill="none" stroke={ACCENT} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Footer accent — a simple outlined heart (was the knot emblem).
export function KnotEmblem({ size = 40, className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width={size} height={size} role="presentation">
      <path d={HEART} fill="none" stroke={ACCENT} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
