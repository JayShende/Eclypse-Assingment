import { FaChevronLeft } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const ShippingPage = () => {
  return (
    <div className="mt-[122px] mx-[55px]">
      <div className="flex gap-x-[35px] items-center">
        
        <Link to="/"><FaChevronLeft className="text-2xl" /></Link>
        <span className="text-2xl font-Poppins">Shipping Address </span>
      </div>
      <div className="grid grid-cols-2 gap-[26px] mt-[34px] m-[55px]">
        <div className=" p-[45px] border-2 rounded-lg border-stone-300">
          <div className="flex gap-x-[20px] items-center">
            <FaRegDotCircle className="text-2xl text-red-500" />
            <span className="text-2xl font-Poppins">Add New Address</span>
          </div>
          <div className="grid grid-cols-2 gap-x-[35px]">
            <div className="mt-[31px]">
              <span className="text-lg font-Poppins">First Name</span>
              <input
                type="text"
                className="w-full h-[67px] border-2 border-stone-300 rounded-lg px-2 mt-[9px]"
              />
            </div>
            <div className="mt-[31px]">
              <span className="text-lg font-Poppins">Last Name</span>
              <input
                type="text"
                className="w-full h-[67px] border-2 border-stone-300 rounded-lg px-2 mt-[9px]"
              />
            </div>
          </div>

          <div className="flex flex-col mt-[26px]">
            <span className="text-lg font-Poppins">Street Address</span>
            <input
              type="text"
              className="w-auto h-[67px] border-2 rounded-lg border-stone-300 px-2 mt-[9px]"
            />
          </div>

          <div className="grid grid-cols-3 gap-x-[15px] mt-[26px]">
            <div className="">
              <span className="text-lg font-Poppins">Apt Number</span>
              <input
                type="text"
                className="w-full h-[67px] border-2 border-stone-300 rounded-lg px-2 mt-[9px]"
              />
            </div>
            <div className="">
              <span className="text-lg font-Poppins">State</span>
              <input
                type="text"
                className="w-full h-[67px] border-2 border-stone-300 rounded-lg px-2 mt-[9px]"
              />
            </div>
            <div className="">
              <span className="text-lg font-Poppins">Zip</span>
              <input
                type="text"
                className="w-full h-[67px] border-2 border-stone-300 rounded-lg px-2 mt-[9px]"
              />
            </div>
          </div>

          <div className="mt-[26px] grid grid-cols-[30%_1fr] gap-x-[28px]">
            <div className=" h-[67px] border-2 border-stone-300 rounded-lg flex justify-center items-center font-Poppins text-xl">
              cancle
            </div>
            <div className=" h-[67px] border-2 border-stone-300 bg-black text-white rounded-lg flex justify-center items-center text-xl cursor-pointer hover:bg-red-500 transition duration-200">
              Save This Address
            </div>
          </div>
        </div>

        <div className="border-2 rounded-lg border-stone-300 bg-zinc-100 px-[40px] pt-[26px] flex flex-col">
          <span className="text-zinc-600 text-lg font-Poppins">
            By placing your order, you agree to our company
            <span className="text-black"> Privacy policy</span> and
            <span className="text-black"> Conditions of use</span> .
          </span>

          <div className="w-full h-0  outline-1 outline-offset-[-0.50px] outline-zinc-400 my-[26px]"></div>
          <div className="text-2xl font-Poppins  ">Order Summary</div>
          <div className="flex flex-col text-zinc-600 text-lg mt-[45px] font-Poppins gap-y-[18px]">
            <div className="flex justify-between">
              <span> Items - Silhouette No. 1 – Vermilion</span>
              <span>7,999</span>
            </div>
            <div className="flex justify-between">
              <span> Shipping and handling:</span>
              <span>200</span>
            </div>
            <div className="flex justify-between">
              <span> Before tax:</span>
              <span>6,599</span>
            </div>
            <div className="flex justify-between">
              <span> Tax Collected:</span>
              <span>1,400</span>
            </div>
          </div>

          <div className="w-full h-0  outline-1 outline-offset-[-0.50px] outline-zinc-400 my-[42px]"></div>
          <div className="flex justify-between text-2xl font-Poppins">
            <span>Order Total</span>
            <span>8,199</span>
          </div>
           <div className="flex justify-center items-center">
<div className=" w-96 h-[67px] border-2 border-stone-300 bg-black text-white rounded-lg flex justify-center items-center text-xl cursor-pointer hover:bg-red-500 transition duration-200 mt-8">
              Save This Address
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
