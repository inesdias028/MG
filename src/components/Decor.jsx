// Decorative nautical elements — rope dividers and the knot emblem.
// Drawn as SVG so they stay crisp at any size and inherit the rope colour.

const ROPE = '#a88560'
const ROPE_LT = '#c4a884'

// A twisted-rope stroke, rendered as a dashed double-line to suggest the weave.
function Rope({ d }) {
  return (
    <g fill="none" strokeLinecap="round">
      <path d={d} stroke={ROPE} strokeWidth="3.4" opacity="0.9" />
      <path d={d} stroke={ROPE_LT} strokeWidth="1.2" strokeDasharray="1.5 5" opacity="0.9" />
    </g>
  )
}

// Central reef/figure-eight knot used across the site.
function Knot({ cx = 0, cy = 0, s = 1 }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`} fill="none" stroke={ROPE} strokeWidth="3.1" strokeLinecap="round">
      <path d="M-14 -4 C -22 4, -6 12, 0 4 C 6 -4, 22 4, 14 -4 C 8 -8, -8 -8, -14 -4 Z" />
      <path d="M-14 4 C -22 -4, -6 -12, 0 -4 C 6 4, 22 -4, 14 4" opacity="0.55" />
    </g>
  )
}

// Full-width divider: two ropes meeting at a centre knot.
export function RopeDivider({ width = 340, className }) {
  const h = 40
  const mid = h / 2
  const knotHalf = 26
  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${h}`}
      width={width}
      height={h}
      role="presentation"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <Rope d={`M8 ${mid} H ${width / 2 - knotHalf}`} />
      <Rope d={`M ${width / 2 + knotHalf} ${mid} H ${width - 8}`} />
      {/* end whip-caps */}
      <circle cx="8" cy={mid} r="2.6" fill={ROPE} />
      <circle cx={width - 8} cy={mid} r="2.6" fill={ROPE} />
      <Knot cx={width / 2} cy={mid} s={0.95} />
    </svg>
  )
}

// Small heart used as a soft accent between blocks.
export function HeartDot({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" role="presentation">
      <path
        d="M12 20s-7-4.4-7-9.6A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7 3.4C19 15.6 12 20 12 20z"
        fill="none"
        stroke={ROPE}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Standalone knot emblem for the footer / seals.
export function KnotEmblem({ size = 70, className }) {
  return (
    <svg className={className} viewBox="-40 -24 80 48" width={size} height={size * 0.6} role="presentation">
      <Knot s={1.3} />
    </svg>
  )
}
