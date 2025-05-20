
import logoNavbar from '../assets/images/logoNavbar.png'
import BuyButton from './ui/buy-button';

const NavBarComponent = () => {
  return (
    <div className="w-[full] h-[75px] bg-black bg-opacity-59 pl-[60px] pr-[50.62px] pt-[12.9px] pb-[16.6px] flex justify-between">
        <img src={logoNavbar} alt="logo" className='w-[48.79px] h-[45.464px]' />
        <div className='text-white flex gap-x-[70px] font-Poppins text-xl font-normal  items-center'>
        <span>About Us</span>
        <span>Waitlist</span>
        <span>Cart</span>
        <BuyButton/>
        </div>
    </div>
  )
};

export default NavBarComponent;
