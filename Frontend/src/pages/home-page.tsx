import HeroSection from "../components/hero-section";
import NavBarComponent from "../components/navbar";
import HeroSection2 from "../components/hero-2";
import GridSection from "../components/grid-section";
import ProductShop from "../components/product-shop";
import ProductInfo from "../components/product-info";
import Reviews from "../components/reviews";
import FooterSection from "../components/footer-section";

function HomePage() {
  return (
    <div className="w-full h-auto bg-zinc-950 flex flex-col">
      <NavBarComponent />
      <HeroSection />
      <HeroSection2 />
      <GridSection />
      <ProductShop />
      <ProductInfo />
      <Reviews />
      <FooterSection />
    </div>
  );
}

export default HomePage;
