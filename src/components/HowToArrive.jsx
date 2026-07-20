import { directions } from '../data/content.js'
import { External } from './Icons.jsx'
import { RopeDivider } from './Decor.jsx'

export default function HowToArrive() {
  return (
    <section id="como-chegar" className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Localização</span>
          <h2 className="h2 script">Como chegar</h2>
          <RopeDivider width={220} className="section-head__rope" />
        </div>

        <div className="arrive">
          <div className="arrive__map reveal" aria-label="Mapa ilustrativo de Tavira">
            <MapArt />
            {directions.map((d) => (
              <span key={d.n} className={`arrive__pin arrive__pin--${d.n}`}>{d.n}</span>
            ))}
          </div>

          <ol className="arrive__list reveal">
            {directions.map((d) => (
              <li key={d.n} className="arrive__row">
                <span className="arrive__num">{d.n}</span>
                <div className="arrive__info">
                  <span className="arrive__place">{d.place}</span>
                  <span className="arrive__addr">{d.address}</span>
                  <a href={d.mapUrl} target="_blank" rel="noreferrer" className="arrive__link">
                    Ver mapa <External width="13" height="13" />
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

// A soft stylised map — river, roads and land masses.
function MapArt() {
  return (
    <svg viewBox="0 0 460 300" className="arrive__mapart" role="presentation" aria-hidden="true">
      <rect width="460" height="300" fill="#eef2f0" />
      <path d="M0 210 C 120 190, 160 250, 300 220 C 380 205, 420 240, 460 225 L460 300 L0 300 Z" fill="#cde0e8" opacity="0.7" />
      <path d="M-10 150 C 90 140, 130 175, 220 150 C 320 122, 380 165, 470 140" fill="none" stroke="#a9cad8" strokeWidth="14" opacity="0.7" strokeLinecap="round" />
      <g stroke="#d8cfc0" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.9">
        <path d="M60 40 L 160 120 L 260 110 L 360 170" />
        <path d="M120 260 L 200 180 L 300 200 L 420 120" />
        <path d="M40 120 L 130 130 L 150 220" />
      </g>
    </svg>
  )
}
