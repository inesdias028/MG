import { couple } from '../data/content.js'
import { RopeDivider } from './Decor.jsx'

export default function Hero() {
  const scrollDown = (e) => {
    e.preventDefault()
    document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="hero">
      {/* Layered watercolour sea + sky, drawn with CSS gradients */}
      <div className="hero__sky" aria-hidden="true" />
      <div className="hero__sea" aria-hidden="true" />
      <SailboatArt className="hero__boat" />

      <div className="hero__content container">
        <RopeDivider width={300} className="hero__rope" />
        <p className="hero__pre eyebrow">Vamos casar</p>
        <h1 className="h1 hero__names">
          {couple.bride} <span className="hero__amp">&amp;</span> {couple.groom}
        </h1>
        <p className="hero__date">{couple.date}</p>
        <p className="hero__place">{couple.place}</p>
        <a href="#historia" className="btn hero__cta" onClick={scrollDown}>
          Descobrir o nosso dia
        </a>
      </div>

      <a href="#historia" className="hero__scroll" onClick={scrollDown} aria-label="Descer">
        <span />
      </a>
    </section>
  )
}

// A little watercolour-style sailboat as inline SVG.
function SailboatArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 260 240" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="sailA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e8dccb" />
        </linearGradient>
        <linearGradient id="sailB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4ede1" />
          <stop offset="1" stopColor="#d9cec0" />
        </linearGradient>
      </defs>
      {/* mast */}
      <path d="M132 18 V150" stroke="#8f6f4c" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {/* main sail */}
      <path d="M132 24 C 172 60, 186 108, 180 146 L132 146 Z" fill="url(#sailA)" stroke="#c4a884" strokeWidth="1.3" />
      {/* fore sail */}
      <path d="M128 40 C 104 72, 96 112, 100 146 L128 146 Z" fill="url(#sailB)" stroke="#c4a884" strokeWidth="1.3" />
      {/* hull */}
      <path d="M78 150 H198 L182 178 C 178 186, 170 190, 160 190 H116 C 106 190, 98 186, 94 178 Z" fill="#5d768a" stroke="#4a6072" strokeWidth="1.2" />
      <path d="M84 158 H192" stroke="#dfe8ee" strokeWidth="1.4" opacity="0.6" />
    </svg>
  )
}
