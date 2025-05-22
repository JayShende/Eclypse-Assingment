import logoNavbar from '../assets/images/logoNavbar.png';
import BuyButton from './ui/buy-button';

const NavBarComponent = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 h-[75px] bg-black/40 px-16 py-3 flex justify-between items-center backdrop-blur-md backdrop-saturate-150 border-b border-white/10">

      <img src={logoNavbar} alt="logo" className="w-[48.79px] h-[45.464px]" />
      <div className="text-white flex gap-x-[70px] font-Poppins text-xl font-normal items-center">
        <span>About Us</span>
        <span>Waitlist</span>
        <span>Cart</span>
        <BuyButton />
      </div>
    </div>
  );
};

export default NavBarComponent;
