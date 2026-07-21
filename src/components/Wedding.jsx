import { ceremony, celebration, program } from '../data/content.js'
import { iconMap, Pin, External } from './Icons.jsx'
import Placeholder from './Placeholder.jsx'
import { RopeDivider } from './Decor.jsx'

function VenueCard({ id, data, img, imgSrc }) {
  return (
    <article id={id} className="venue reveal">
      {imgSrc ? (
        <img className="venue__photo" src={`${import.meta.env.BASE_URL}${imgSrc}`} alt={data.place} loading="lazy" />
      ) : (
        <Placeholder icon={img} label={data.place} variant="sand" ratio="16 / 10" className="venue__img" />
      )}
      <div className="venue__body">
        <span className="venue__kicker eyebrow">{data.title}</span>
        <span className="venue__time">{data.time}</span>
        <h3 className="h3">{data.place}</h3>
        <p className="venue__addr">{data.address}</p>
        <a className="btn btn--ghost venue__map" href={data.mapUrl} target="_blank" rel="noreferrer">
          <Pin width="16" height="16" /> Ver localização
        </a>
      </div>
    </article>
  )
}

export default function Wedding() {
  return (
    <section id="cerimonia" className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">O grande dia</span>
          <h2 className="h2 script">O casamento</h2>
          <RopeDivider width={220} className="section-head__rope" />
        </div>

        <div className="venues">
          <VenueCard id="cerimonia-card" data={ceremony} imgSrc="cerimonia-igreja.jpg" />
          <span id="celebracao" className="anchor-target" aria-hidden="true" />
          <VenueCard id="celebracao-card" data={celebration} imgSrc="celebracao-quinta.jpg" />
        </div>

        {/* Programa do dia */}
        <div id="programa" className="program reveal">
          <div className="program__head">
            <span className="eyebrow">Programa do dia</span>
            <RopeDivider width={180} />
          </div>
          <ol className="program__track">
            {program.map((p) => {
              const Icon = iconMap[p.icon]
              return (
                <li className="program__step" key={p.time}>
                  <span className="program__ico">
                    <Icon width="26" height="26" />
                  </span>
                  <span className="program__dot" aria-hidden="true" />
                  <span className="program__time">{p.time}</span>
                  <span className="program__label">{p.label}</span>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
