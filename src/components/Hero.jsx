import { couple } from '../data/content.js'
import { RopeDivider } from './Decor.jsx'

// Hero background image lives in public/ — drop the watercolour there as
// `hero-couple.png`. BASE_URL keeps the path correct on dev and on GitHub Pages.
const heroImg = `${import.meta.env.BASE_URL}hero-couple.jpg`

export default function Hero() {
  const scrollDown = (e) => {
    e.preventDefault()
    document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="hero">
      {/* Soft sea fallback shows if the image hasn't been added yet */}
      <div className="hero__fallback" aria-hidden="true" />
      <div
        className="hero__bg"
        style={{ backgroundImage: `url("${heroImg}")` }}
        role="img"
        aria-label={`${couple.bride} e ${couple.groom} num barco`}
      />
      <div className="hero__scrim" aria-hidden="true" />

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
    </section>
  )
}
