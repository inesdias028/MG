// ============================================================
// Rope & knot library — nautical decorative motifs drawn as SVG
// in the corda palette. Reusable across the site.
//
//   import { Knots, Ropes } from './Knots.jsx'
//   <Knots.Reef size={90} />
//   <Ropes.Wavy width={220} />
//
// Each knot inherits the same rope look: a light casing (for the
// over/under gaps), the solid corda rope, and lighter twist bands.
// ============================================================

const ROPE = '#a88560'
const ROPE_LT = '#c9ad88'
const CASE = '#f6f1e8'

// One rope strand rendered with casing + rope + twist bands.
function Strand({ d, w = 6 }) {
  return (
    <>
      <path d={d} stroke={CASE} strokeWidth={w + 3.5} fill="none" strokeLinecap="round" />
      <path d={d} stroke={ROPE} strokeWidth={w} fill="none" strokeLinecap="round" />
      <path d={d} stroke={ROPE_LT} strokeWidth={w - 1} strokeDasharray="2.6 5.6" fill="none" strokeLinecap="butt" opacity="0.85" />
    </>
  )
}

// Wrapper: a square-ish SVG canvas centred on the origin.
function Canvas({ size = 90, vb = 120, w = 6, children, label }) {
  const half = vb / 2
  return (
    <svg
      viewBox={`${-half} ${-half} ${vb} ${vb}`}
      width={size}
      height={size}
      role="img"
      aria-label={label}
      style={{ maxWidth: '100%', height: 'auto', overflow: 'visible' }}
    >
      {children}
    </svg>
  )
}

// ---- The knots -------------------------------------------------------------

// Nó Direito — reef / square knot (two interlocking bights).
function Reef({ size, w = 6 }) {
  return (
    <Canvas size={size} vb={120} label="Nó direito">
      <Strand w={w} d="M 46 0 C 32 -11, 8 -14, -5 -7 C -16 -1, -16 1, -5 7 C 8 14, 32 11, 46 0" />
      <Strand w={w} d="M -46 0 C -32 -11, -8 -14, 5 -7 C 16 -1, 16 1, 5 7 C -8 14, -32 11, -46 0" />
      <Strand w={w} d="M -6 7 C 6 13, 22 12, 34 4" />
    </Canvas>
  )
}

// Nó de oito — figure-eight (a rope crossing itself twice).
function FigureEight({ size, w = 6 }) {
  return (
    <Canvas size={size} vb={120} label="Nó de oito">
      {/* lower loop */}
      <Strand w={w} d="M -6 44 C -34 40, -40 8, -14 2 C 6 -3, 14 8, 2 16 C -10 24, -26 16, -20 2" />
      {/* upper loop crossing over */}
      <Strand w={w} d="M 6 44 C 34 40, 40 8, 14 2 C -6 -3, -14 8, -2 16 C 10 24, 26 16, 20 2" />
      {/* tails */}
      <Strand w={w} d="M -20 2 C -16 -18, -10 -34, -4 -46" />
      <Strand w={w} d="M 20 2 C 16 -18, 10 -34, 4 -46" />
    </Canvas>
  )
}

// Nó celta — interlaced square (four-fold woven knot).
function Celtic({ size, w = 5.4 }) {
  return (
    <Canvas size={size} vb={120} label="Nó celta">
      <Strand w={w} d="M 0 -34 C 22 -34, 34 -22, 34 0 C 34 22, 22 34, 0 34 C -22 34, -34 22, -34 0 C -34 -22, -22 -34, 0 -34" />
      <Strand w={w} d="M 0 -20 C -12 -8, 12 8, 0 20 C 12 8, -12 -8, 0 -20" />
      <Strand w={w} d="M -20 0 C -8 -12, 8 12, 20 0 C 8 12, -8 -12, -20 0" />
    </Canvas>
  )
}

// Nó de esteira — round mat / prolong knot (woven oval).
function Mat({ size, w = 5.4 }) {
  return (
    <Canvas size={size} vb={120} label="Nó de esteira">
      <Strand w={w} d="M -40 -8 C -46 -22, -20 -30, -8 -18 C 2 -8, -2 8, 8 18 C 20 30, 46 22, 40 8 C 46 -6, 24 -14, 12 -6 C 0 2, 0 -2, -12 6 C -24 14, -46 6, -40 -8" />
      <Strand w={w} d="M -40 8 C -46 22, -20 30, -8 18 C 2 8, -2 -8, 8 -18 C 20 -30, 46 -22, 40 -8" />
    </Canvas>
  )
}

// Nó de correr — single decorative loop with a tail (slip-knot feel).
function Loop({ size, w = 6 }) {
  return (
    <Canvas size={size} vb={120} label="Nó de correr">
      <Strand w={w} d="M -4 46 C -6 18, -30 20, -28 -2 C -26 -24, 6 -28, 18 -12 C 28 2, 12 18, 2 8 C -6 0, 4 -12, 12 -6" />
      <Strand w={w} d="M -4 46 C 8 30, 30 30, 40 44" />
    </Canvas>
  )
}

// Nó de pescador — two interlocking overhand knots.
function Fisherman({ size, w = 5.6 }) {
  return (
    <Canvas size={size} vb={120} label="Nó de pescador">
      {/* left overhand */}
      <Strand w={w} d="M -46 -30 C -20 -26, -10 -6, -22 6 C -32 16, -46 8, -40 -6 C -36 -16, -18 -14, -8 -2" />
      {/* right overhand */}
      <Strand w={w} d="M 46 30 C 20 26, 10 6, 22 -6 C 32 -16, 46 -8, 40 6 C 36 16, 18 14, 8 2" />
      {/* the joined middle */}
      <Strand w={w} d="M -8 -2 C 0 4, 0 -4, 8 2" />
    </Canvas>
  )
}

export const Knots = { Reef, FigureEight, Celtic, Mat, Loop, Fisherman }

// ---- Rope elements ---------------------------------------------------------

// Horizontal rope with a small reef knot at the centre (matches the divider).
function Horizontal({ width = 220, w = 5 }) {
  const h = 40
  const mid = h / 2
  const c = width / 2
  return (
    <svg viewBox={`0 0 ${width} ${h}`} width={width} height={h} role="img" aria-label="Corda horizontal com nó" style={{ maxWidth: '100%', height: 'auto' }}>
      <g transform={`translate(0 ${mid})`}>
        <Strand w={w} d={`M8 0 H ${c - 30}`} />
        <Strand w={w} d={`M ${c + 30} 0 H ${width - 8}`} />
      </g>
      <g transform={`translate(${c} ${mid}) scale(0.62)`}>
        <Strand w={w} d="M 46 0 C 32 -11, 8 -14, -5 -7 C -16 -1, -16 1, -5 7 C 8 14, 32 11, 46 0" />
        <Strand w={w} d="M -46 0 C -32 -11, -8 -14, 5 -7 C 16 -1, 16 1, 5 7 C -8 14, -32 11, -46 0" />
        <Strand w={w} d="M -6 7 C 6 13, 22 12, 34 4" />
      </g>
    </svg>
  )
}

// Simple straight rope.
function Straight({ width = 220, w = 5 }) {
  const h = 24
  const mid = h / 2
  return (
    <svg viewBox={`0 0 ${width} ${h}`} width={width} height={h} role="img" aria-label="Corda simples" style={{ maxWidth: '100%', height: 'auto' }}>
      <g transform={`translate(0 ${mid})`}>
        <Strand w={w} d={`M8 0 H ${width - 8}`} />
        <circle cx="8" cy="0" r="2.4" fill={ROPE} />
        <circle cx={width - 8} cy="0" r="2.4" fill={ROPE} />
      </g>
    </svg>
  )
}

// Wavy rope.
function Wavy({ width = 220, w = 5 }) {
  const h = 40
  const mid = h / 2
  const a = 9
  const seg = (width - 16) / 4
  const d = `M8 ${mid} q ${seg / 2} ${-a} ${seg} 0 q ${seg / 2} ${a} ${seg} 0 q ${seg / 2} ${-a} ${seg} 0 q ${seg / 2} ${a} ${seg} 0`
  return (
    <svg viewBox={`0 0 ${width} ${h}`} width={width} height={h} role="img" aria-label="Corda ondulada" style={{ maxWidth: '100%', height: 'auto' }}>
      <Strand w={w} d={d} />
      <circle cx="8" cy={mid} r="2.4" fill={ROPE} />
      <circle cx={width - 8} cy={mid} r="2.4" fill={ROPE} />
    </svg>
  )
}

// Vertical rope (for side accents).
function Vertical({ height = 160, w = 5 }) {
  const wpx = 24
  const mid = wpx / 2
  return (
    <svg viewBox={`0 0 ${wpx} ${height}`} width={wpx} height={height} role="img" aria-label="Corda vertical" style={{ height, width: 'auto' }}>
      <g transform={`translate(${mid} 0)`}>
        <Strand w={w} d={`M0 8 V ${height - 8}`} />
        <circle cx="0" cy="8" r="2.4" fill={ROPE} />
        <circle cx="0" cy={height - 8} r="2.4" fill={ROPE} />
      </g>
    </svg>
  )
}

// Corner rope (rounded L, for framing cards).
function Corner({ size = 90, w = 5 }) {
  return (
    <svg viewBox="0 0 90 90" width={size} height={size} role="img" aria-label="Corda de canto" style={{ maxWidth: '100%', height: 'auto' }}>
      <Strand w={w} d="M10 82 V 30 Q 10 10 30 10 H 82" />
      <circle cx="10" cy="82" r="2.4" fill={ROPE} />
      <circle cx="82" cy="10" r="2.4" fill={ROPE} />
    </svg>
  )
}

export const Ropes = { Horizontal, Straight, Wavy, Vertical, Corner }
