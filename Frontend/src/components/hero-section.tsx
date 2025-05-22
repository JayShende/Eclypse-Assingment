import VideoHeroSection from "./ui/video-container";
import { FaRegRegistered } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="mt-40 flex justify-between items-end">
        <div className="flex">
          <div className="text-8xl text-white ml-[44px] font-normal font-Poppins">
            Eclypse
          </div>
          <FaRegRegistered className="text-lg text-white" />
        </div>
        <div className="text-white text-sm font-medium font-Poppins mr-[50.6px]">
          © 2025
        </div>
      </div>
      <VideoHeroSection />
    </div>
  );
};

export default HeroSection;
