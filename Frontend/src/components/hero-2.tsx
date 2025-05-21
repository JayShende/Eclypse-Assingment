

import { MdArrowOutward } from "react-icons/md";

const HeroSection2 = () => {
  return (
    <div className="ml-[37px] group">
      <div className="w-[800px] justify-start text-white text-5xl font-normal font-Poppins ">Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.</div>
      <div className="mt-[79px] flex items-center gap-x-1 text-neutral-200 text-2xl hover:bg-neutral-200 hover:text-black w-fit p-2 border-b cursor-pointer">
        <span className="font-normal font-Poppins">
          Learn more about Eclypse
        </span>
        <MdArrowOutward className="group-hover:text-neutral-200"/>
      </div>
    </div>
  )
};

export default HeroSection2;
