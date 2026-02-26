import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/Hero'
import Nav from './components/Navbar/Nav'
import Stats from './components/Stats/Stats'
import ServiceCard from './components/Services/ServiceCard'
import ServicesSection from './components/Services/ServicesSection'
import CapabilitiesSlider from './components/slider/CapabilitiesSlider'
import WhyUsSection from './components/whyus/WhyUsSection'
import ThreeTierSection from './components/tier-section/ThreeTierSection'
import Grid from './components/grid/Grid'
import Scroll from './components/Scroll/Scroll'
import Map from './components/map/Map'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
      <Hero/>
      <Stats/>
      <ServicesSection/>
      <CapabilitiesSlider/>
      <WhyUsSection/>
      <ThreeTierSection/>
      <Grid/>
      <Scroll/>
      <Map/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
