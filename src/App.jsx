import About from "./component/About"
import CarouselGames from "./component/CarouselGames"
import EventSection from "./component/EventSection"
import FilmProductionSection from "./component/FilmProductionSection"
import HeroSection from "./component/HeroSection"
import Intro from "./component/Intro"
import NavBar from "./component/NavBar"
import WeddingSection from "./component/WeddingSection"


function App() {


  return (
    <>
      <NavBar />
      <HeroSection />
      <Intro />
      <FilmProductionSection />
      <WeddingSection />
      <EventSection />
      <About />
      <CarouselGames/>
    </>
  )
}

export default App
