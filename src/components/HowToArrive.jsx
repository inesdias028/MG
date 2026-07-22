import { useState } from 'react'
import { directions } from '../data/content.js'
import { External } from './Icons.jsx'
import { RopeDivider } from './Decor.jsx'

// Build a Google Maps embed URL from a location's search link.
function embedSrc(mapUrl) {
  let q = ''
  try {
    q = new URL(mapUrl).searchParams.get('q') || ''
  } catch {
    q = ''
  }
  return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=15&hl=pt&output=embed`
}

export default function HowToArrive() {
  const [active, setActive] = useState(0)

  return (
    <section id="como-chegar" className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Localização</span>
          <h2 className="h2 script">Como chegar</h2>
          <RopeDivider width={220} className="section-head__rope" />
        </div>

        <div className="arrive">
          <div className="arrive__map reveal">
            <iframe
              title={`Mapa — ${directions[active].place}`}
              className="arrive__mapframe"
              src={embedSrc(directions[active].mapUrl)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <ol className="arrive__list reveal">
            {directions.map((d, i) => (
              <li
                key={d.n}
                className={`arrive__row ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setActive(i))}
                role="button"
                tabIndex={0}
                aria-pressed={i === active}
              >
                <span className="arrive__num">{d.n}</span>
                <div className="arrive__info">
                  <span className="arrive__place">{d.place}</span>
                  <span className="arrive__addr">{d.address}</span>
                  <a
                    href={d.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="arrive__link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Abrir no Google Maps <External width="13" height="13" />
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
