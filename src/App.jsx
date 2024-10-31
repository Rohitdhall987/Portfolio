import AboutMe from "./AboutMe"
import HeroSection from "./HeroSection"
import Showcase from "./Showcase"
import Skills from "./Skills"


function App() {

  return (
    <>
      <div className=" bg-theme">
        <div className="bg-theme-white pb-8 bottom-rounded">
          <HeroSection/>
          <Skills/>
        </div>
        <Showcase/>
        <div className="bg-theme-white pb-8 top-rounded">
            <AboutMe/>
        </div>
      </div>
    </>
  )
}

export default App




