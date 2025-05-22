import { FaQuoteLeft } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa6";
import r1 from "../assets/images/reviews/r1.png";
import r2 from "../assets/images/reviews/r2.png";
import r3 from "../assets/images/reviews/r3.png";
const Reviews = () => {
  return (
    <>
      <div className="mt-[193px]  ml-[50px]">
        <span className="text-white/80 font-medium font-Roboto ">
          OUR CUSTOMERS
        </span>
        <div className="grid grid-cols-[60%_1fr] mt-[90px] ">
          <div className=" h-10 ml-[66px] flex flex-col ">
            <div className="flex ">
              <FaQuoteLeft className="text-4xl text-white" />
              <span className="text-neutral-300 text-4xl font-Poppins w-[750px] ml-[22px]">
                Understated, but unforgettable. It <br /> feels like it was made
                for me
              </span>
            </div>
            <span className="mt-[88px] text-2xl text-stone-300 font-Poppins">
              Random Woman
            </span>
            <span className="text-neutral-600 font-medium font-Poppins mt-[12px]">
              NY, USA
            </span>
          </div>
          <div className="flex flex-col gap-y-[25px] items-center">
            <div className="flex items-center gap-x-3">
              <FaCaretLeft className="text-white text-5xl" />
              <img src={r1} alt="person-1" className="w-32 h-32" />
            </div>
            <img src={r2} alt="person-1" className="w-16 h-16 ml-12" />
            <img src={r3} alt="person-1" className="w-8 h-8 ml-12" />
          </div>
        </div>
      </div>
      <div className=" h-0 mx-[66px] outline-1 outline-offset-[-0.50px] outline-neutral-700 mt-[137px]"></div>
    </>
  );
};

export default Reviews;
