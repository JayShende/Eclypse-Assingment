import HeroSection2 from "./components/hero-2"
import HeroSection from "./components/hero-section"
import NavBarComponent from "./components/navbar"


function App() {


  return (
    <div className="w-auto h-auto bg-zinc-950 flex flex-col">
      <NavBarComponent/>
      <HeroSection/>
      <HeroSection2/>
    </div>
  )
}

export default App
