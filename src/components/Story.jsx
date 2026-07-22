import { story } from '../data/content.js'
import { iconMap } from './Icons.jsx'

// Sea-wave lines connecting the timeline nodes: horizontal on desktop,
// vertical (running down through the points) on mobile.
function StoryWave() {
  const hSeg = 64
  const hN = 18
  let hd = `M0 16 q ${hSeg / 2} -11 ${hSeg} 0`
  for (let i = 1; i < hN; i++) hd += ` t ${hSeg} 0`

  const vSeg = 72
  const vN = 7
  let vd = `M16 0 q -10 ${vSeg / 2} 0 ${vSeg}`
  for (let i = 1; i < vN; i++) vd += ` t 0 ${vSeg}`

  return (
    <>
      <svg className="story__wave story__wave--h" viewBox={`0 0 ${hSeg * hN} 32`} preserveAspectRatio="none" aria-hidden="true">
        <path d={hd} fill="none" stroke="#9bb6c6" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <svg className="story__wave story__wave--v" viewBox={`0 0 32 ${vSeg * vN}`} preserveAspectRatio="none" aria-hidden="true">
        <path d={vd} fill="none" stroke="#9bb6c6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </>
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
                <div className="story__content">
                  <span className="story__year">{s.year}</span>
                  <p className="story__text">{s.text}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
