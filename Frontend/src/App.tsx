import FooterSection from "./components/footer-section"
import GridSection from "./components/grid-section"
import HeroSection2 from "./components/hero-2"
import HeroSection from "./components/hero-section"
import NavBarComponent from "./components/navbar"
import ProductInfo from "./components/product-info"
import ProductShop from "./components/product-shop"
import Reviews from "./components/reviews"


function App() {


  return (
    <div className="w-full h-auto bg-zinc-950 flex flex-col">
      <NavBarComponent/>
      <HeroSection/> 
       <HeroSection2/> 
       <GridSection/>
       <ProductShop/>
       <ProductInfo/>
       <Reviews/>
       <FooterSection/>
     
    </div>
  )
}

export default App
