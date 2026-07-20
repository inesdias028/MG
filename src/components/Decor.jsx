// Decorative nautical elements — rope dividers and the knot emblem.
// Drawn as SVG so they stay crisp at any size and inherit the rope colour.

const ROPE = '#a88560' // corda
const ROPE_LT = '#c9ad88' // highlight / twist bands
const CASE = '#f6f1e8' // light casing that creates the over/under gaps

// A twisted-rope stroke, rendered as a line plus lighter "twist" bands.
function Rope({ d }) {
  return (
    <g fill="none" strokeLinecap="round">
      <path d={d} stroke={ROPE} strokeWidth="3.4" opacity="0.95" />
      <path d={d} stroke={ROPE_LT} strokeWidth="2.6" strokeDasharray="1.8 4.6" strokeLinecap="butt" opacity="0.9" />
    </g>
  )
}

// ---- Reef (square) knot ----------------------------------------------------
// Two interlocking bights, each anchored to the continuing side rope at ±HS.
const HS = 46 // knot half-span in local units (before scaling)

// Left bight: leaves the left rope, bulges right, returns — a loop pointing right.
const BIGHT_A = 'M -46 0 C -32 -11, -8 -14, 5 -7 C 16 -1, 16 1, 5 7 C -8 14, -32 11, -46 0'
// Right bight: mirror of A.
const BIGHT_B = 'M 46 0 C 32 -11, 8 -14, -5 -7 C -16 -1, -16 1, -5 7 C 8 14, 32 11, 46 0'
// Short lower-centre segment of B, redrawn on top so the weave alternates
// (A over B up top, B over A at the bottom → proper interlock).
const WEAVE_B = 'M -6 7 C 6 13, 22 12, 34 4'

// One rope strand: light casing, solid rope, then lighter twist bands.
function Strand({ d }) {
  return (
    <>
      <path d={d} stroke={CASE} strokeWidth="9.5" fill="none" strokeLinecap="round" />
      <path d={d} stroke={ROPE} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d={d} stroke={ROPE_LT} strokeWidth="5" strokeDasharray="2.6 5.6" fill="none" strokeLinecap="butt" opacity="0.85" />
    </>
  )
}

function Knot({ cx = 0, cy = 0, s = 1 }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Strand d={BIGHT_B} />
      <Strand d={BIGHT_A} />
      <Strand d={WEAVE_B} />
    </g>
  )
}

// Full-width divider: rope on each side meeting a reef knot in the centre.
export function RopeDivider({ width = 340, className }) {
  const h = 44
  const mid = h / 2
  const s = 0.7
  const knotHalf = HS * s // where the side ropes meet the knot's tails
  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${h}`}
      width={width}
      height={h}
      role="presentation"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <Rope d={`M8 ${mid} H ${width / 2 - knotHalf + 2}`} />
      <Rope d={`M ${width / 2 + knotHalf - 2} ${mid} H ${width - 8}`} />
      {/* end whip-caps */}
      <circle cx="8" cy={mid} r="2.6" fill={ROPE} />
      <circle cx={width - 8} cy={mid} r="2.6" fill={ROPE} />
      <Knot cx={width / 2} cy={mid} s={s} />
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
export function KnotEmblem({ size = 90, className }) {
  return (
    <svg className={className} viewBox="-56 -30 112 60" width={size} height={size * 0.54} role="presentation">
      <Knot s={1.05} />
    </svg>
  )
}
