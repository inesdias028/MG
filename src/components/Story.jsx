import { story } from '../data/content.js'
import { iconMap } from './Icons.jsx'

// Gentle sea-wave line that connects the timeline nodes.
function StoryWave() {
  const seg = 64
  const n = 18
  let d = `M0 16 q ${seg / 2} -11 ${seg} 0`
  for (let i = 1; i < n; i++) d += ` t ${seg} 0`
  return (
    <svg className="story__wave" viewBox={`0 0 ${seg * n} 32`} preserveAspectRatio="none" aria-hidden="true">
      <path d={d} fill="none" stroke="#9bb6c6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Story() {
  return (
    <section id="historia" className="section section--flush-top">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">O início de tudo</span>
          <h2 className="h2 script">A nossa história</h2>
        </div>

        <ol className="story">
          <StoryWave />
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
        </ol>
      </div>
    </section>
  )
}
