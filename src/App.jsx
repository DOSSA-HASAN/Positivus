import CaseStudy from "./components/caseStudy/CaseStudy"
import ContactUs from "./components/contactUs/ContactUs"
import Footer from "./components/footer/Footer"
import Slider from "./components/footer/slider/Slider"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"
import Team from "./components/team/Team"
import WorkingProcess from "./components/workingprocess/WorkingProcess"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <CaseStudy />
      <WorkingProcess />
      <Team />
      <Slider />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
