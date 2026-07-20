import { dressCode } from '../data/content.js'
import Placeholder from './Placeholder.jsx'
import { HeartDot } from './Decor.jsx'

export default function DressCode() {
  return (
    <section id="dress-code" className="section">
      <div className="container dress">
        <div className="dress__art reveal">
          <Placeholder icon="leaf" label="Vestido" variant="sand" ratio="3 / 4" className="dress__ph dress__ph--a" />
          <Placeholder icon="anchor" label="Fato" variant="sea" ratio="3 / 4" className="dress__ph dress__ph--b" />
        </div>
        <div className="dress__body reveal">
          <span className="eyebrow">Dress Code</span>
          <h2 className="h2 script">{dressCode.title}</h2>
          <p className="dress__sub">{dressCode.subtitle}</p>
          <ul className="dress__list">
            {dressCode.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <HeartDot className="dress__heart" />
        </div>
      </div>
    </section>
  )
}
