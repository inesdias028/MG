import { honeymoon } from '../data/content.js'
import { HeartDot } from './Decor.jsx'

export default function Japan() {
  return (
    <section id="japao" className="section section--alt japan">
      <div className="container japan__grid">
        <div className="japan__body reveal">
          <span className="eyebrow">{honeymoon.eyebrow}</span>
          <h2 className="h1 japan__title">{honeymoon.title}</h2>
          <HeartDot className="japan__heart" />
          <p className="japan__text">{honeymoon.text}</p>
        </div>
        <div className="japan__art reveal" aria-label="Ilustração do Japão">
          <JapanArt />
        </div>
      </div>
    </section>
  )
}

// Torii gate, Mount Fuji and sakura, drawn in the palette.
function JapanArt() {
  return (
    <svg viewBox="0 0 360 300" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="fuji" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9d7e0" />
          <stop offset="1" stopColor="#9db4c2" />
        </linearGradient>
      </defs>
      {/* sky wash */}
      <rect width="360" height="300" fill="#eef3f2" />
      <circle cx="270" cy="80" r="34" fill="#f0dcd0" opacity="0.7" />
      {/* mountain */}
      <path d="M40 220 L150 90 C 158 80, 170 80, 178 90 L288 220 Z" fill="url(#fuji)" />
      <path d="M128 118 L150 90 C 158 80, 170 80, 178 90 L200 118 C 188 128, 176 116, 164 124 C 152 132, 140 116, 128 118 Z" fill="#f4f7f8" />
      {/* water line */}
      <path d="M0 224 H360" stroke="#bcd2dc" strokeWidth="6" opacity="0.6" />
      {/* torii */}
      <g stroke="#a24b3a" fill="#b4553f">
        <rect x="86" y="150" width="12" height="86" />
        <rect x="150" y="150" width="12" height="86" />
        <path d="M70 150 h108 l-8 12 h-92 z" />
        <rect x="80" y="166" width="88" height="9" />
      </g>
      {/* sakura branch */}
      <g stroke="#8f6f4c" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <path d="M330 40 C 300 70, 296 110, 306 150" />
        <path d="M312 80 l-16 10M318 110 l16 8M308 130 l-14 12" />
      </g>
      <g fill="#f2cdd8">
        {[[292, 86], [336, 92], [300, 128], [292, 152], [330, 138]].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            {[0, 72, 144, 216, 288].map((a) => (
              <ellipse key={a} rx="4.6" ry="2.4" transform={`rotate(${a})`} cx="4" />
            ))}
          </g>
        ))}
      </g>
    </svg>
  )
}
