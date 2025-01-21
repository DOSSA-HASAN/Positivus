import CaseStudy from "./components/caseStudy/CaseStudy"
import ContactUs from "./components/contactUs/ContactUs"
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

      <ContactUs />
    </>
  )
}

export default App
