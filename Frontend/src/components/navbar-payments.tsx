import logoNavbar from '../assets/images/logoNavbar.png';

const NavbarPayments = () => {
  return (
    <div className="w-full z-50 h-[75px] px-16 py-3 flex justify-between items-center backdrop-blur-md backdrop-saturate-150 border-b border-white/10">
      <img src={logoNavbar} alt="logo" className="w-[48.79px] h-[45.464px]" />
      <div className=" flex gap-x-[70px] font-Poppins text-xl font-normal items-center">
        <span>About Us</span>
        <span>Waitlist</span>
        <span>Cart</span>
      
      </div>
    </div>
  );
};

export default NavbarPayments;
