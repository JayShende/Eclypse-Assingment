import Hero_Video from "../assets/video/Hero_Video.mp4";
import p_1 from "../assets/images/product/p_1.png";
import p_2 from "../assets/images/product/p_2.png";
import p_3 from "../assets/images/product/p_3.png";
import { useState } from "react";
import SizeButton from "./ui/size-button";
import { Link } from "react-router-dom";
const ProductShop = () => {
  const [xsSize, setxsSize] = useState(false);
  const [sSize, setsSize] = useState(false);
  const [mSize, setmSize] = useState(false);
  const [lSize, setlSize] = useState(false);
  const [xlSize, setxlSize] = useState(false);
  return (
    <div className="w-full  mt-[184px]">
      <span className="text-white font-normal text-5xl font-Poppins ml-[37px] ">
        Silhouette No. 1 &#8209;Vermilion
      </span>
      <div className="bg-white w-full h-[931px] mt-[183px] grid grid-cols-2">
        <video
          src={Hero_Video}
          autoPlay
          loop
          muted
          playsInline
          className="w-fit h-full object-cover rounded-md"
        />
        <div className="ml-[32px] mt-[55px] flex flex-col ">
          <span className="text-black font-medium font-Poppins w-[540px]">
            A tailored composition in motion. Cut from structured wool with a
            sculpted shoulder and softened hem, this piece captures presence
            without force. Worn here in the stillness of a city in motion.
          </span>
          <div className="grid grid-cols-3 gap-x-[15px] h-[200px] mt-[45px] mb-[50px]">
            <img src={p_1} alt="product image-1" />
            <img src={p_2} alt="product image-2" />
            <img src={p_3} alt="product image-3" />
          </div>
          <div className="w-full h-0  outline-1 outline-offset-[-0.50px] outline-zinc-300"></div>
          <div className="mt-[54px]">
            <div className="flex gap-x-[12px] items-center">
              <span className="text-4xl font-semibold text-neutral-900 font-Poppins">
                ₹ 7,999
              </span>
              <span className="text-neutral-500 font-normal font-Poppins">
                MRP incl. of all taxes
              </span>
            </div>
            <div className="flex gap-x-[23px] items-center mt-[38px]">
              <span className="text-neutral-500 text-xl font-medium font-Poppins">
                Please select a size
              </span>
              <span className="text-neutral-500 font-medium font-Poppins underline">
                Size chart
              </span>
            </div>
            <div className="mt-[42px] flex gap-x-[32px]">
              <SizeButton
                size="XS"
                selected={xsSize}
                toggleSelect={setxsSize}
              />
              <SizeButton size="S" selected={sSize} toggleSelect={setsSize} />
              <SizeButton size="M" selected={mSize} toggleSelect={setmSize} />
              <SizeButton size="L" selected={lSize} toggleSelect={setlSize} />
              <SizeButton
                size="XL"
                selected={xlSize}
                toggleSelect={setxlSize}
              />
            </div>
          </div>
          <div className="w-full h-0  outline-1 outline-offset-[-0.50px] outline-zinc-300 mt-[54px]"></div>
          <div className="mt-[85px] flex gap-x-[32px]">
            <div className="w-[48] h-16 px-20 py-3.5 rounded-lg outline-2 outline-offset-[-2px] outline-stone-300 flex justify-center items-center">
              <span className="text-stone-950 text-xl font-medium font-Poppins">
                Add to Cart
              </span>
            </div>

            <Link to="/payments">
              <div className="w-96 h-16 px-36 py-3.5 rounded-lg outline-2 outline-offset-[-2px] outline-stone-300 flex justify-center items-center bg-black hover:bg-red-500 cursor-pointer">
                <span className="text-white text-xl font-medium font-Poppins">
                  Buy
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShop;
