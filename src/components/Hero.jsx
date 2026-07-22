import { useT } from '../i18n.jsx'

// Hero background image lives in public/. BASE_URL keeps the path correct
// on dev and on GitHub Pages.
const heroImg = `${import.meta.env.BASE_URL}hero-couple.jpg`

export default function Hero() {
  const { couple, ui } = useT()
  return (
    <section id="inicio" className="hero">
      <img className="hero__img" src={heroImg} alt={`${couple.bride} & ${couple.groom}`} />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content container">
        <p className="hero__pre eyebrow">{ui.heroPre}</p>
        <h1 className="h1 hero__names">
          {couple.bride} <span className="hero__amp">&amp;</span> {couple.groom}
        </h1>
        <p className="hero__date">{couple.date}</p>
        <p className="hero__place">{couple.place}</p>
      </div>
    </section>
  )
}
