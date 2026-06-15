import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import About from './components/sections/About'
import Gallery from './components/sections/Gallery'
import Location from './components/sections/Location'
import Contact from './components/sections/Contact'
import WhatsAppButton from './components/ui/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
