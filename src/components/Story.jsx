import { story } from '../data/content.js'
import { iconMap } from './Icons.jsx'
import { RopeDivider } from './Decor.jsx'

export default function Story() {
  return (
    <section id="historia" className="section section--flush-top">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">O início de tudo</span>
          <h2 className="h2 script">A nossa história</h2>
          <RopeDivider width={220} className="section-head__rope" />
        </div>

        <ol className="story">
          {story.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <li className="story__item reveal" key={s.year} style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="story__node">
                  <Icon width="26" height="26" />
                </span>
                <span className="story__year">{s.year}</span>
                <p className="story__text">{s.text}</p>
              </li>
            )
          })}
          <span className="story__line" aria-hidden="true" />
        </ol>
      </div>
    </section>
  )
}
