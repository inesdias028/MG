import { useReveal } from './hooks/useReveal.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Wedding from './components/Wedding.jsx'
import DressCode from './components/DressCode.jsx'
import HowToArrive from './components/HowToArrive.jsx'
import WhereToStay from './components/WhereToStay.jsx'
import Japan from './components/Japan.jsx'
import GiftsRSVP from './components/GiftsRSVP.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import './components/components.css'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Wedding />
        <DressCode />
        <HowToArrive />
        <WhereToStay />
        <Japan />
        <GiftsRSVP />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
