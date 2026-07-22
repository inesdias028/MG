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
          <div className="arrive__map reveal">
            <iframe
              title="Mapa — Tavira"
              className="arrive__mapframe"
              src="https://maps.google.com/maps?q=Igreja%20de%20Nossa%20Senhora%20do%20Carmo%2C%20Largo%20do%20Carmo%2C%20Tavira&z=14&hl=pt&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
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
