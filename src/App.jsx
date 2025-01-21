import CaseStudy from "./components/caseStudy/CaseStudy"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"
import WorkingProcess from "./components/workingprocess/WorkingProcess"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <CaseStudy />
      <WorkingProcess />
    </>
  )
}

export default App
