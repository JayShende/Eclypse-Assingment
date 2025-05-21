import GridSection from "./components/grid-section"
import HeroSection2 from "./components/hero-2"
import HeroSection from "./components/hero-section"
import NavBarComponent from "./components/navbar"
import Random from "./components/randomspace"


function App() {


  return (
    <div className="w-full h-auto bg-zinc-950 flex flex-col">
      <NavBarComponent/>
      <HeroSection/> 
       <HeroSection2/> 
       <GridSection/>
      <Random/>
    </div>
  )
}

export default App
