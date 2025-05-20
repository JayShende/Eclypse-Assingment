import VideoHeroSection from "./ui/video-container";

const HeroSection = () => {
  return (
   <div className="w-full">
    <div className="mt-[122px] flex justify-between items-end">
        <div className="text-8xl text-white ml-[44px] font-normal font-Poppins">
            Eclypse
        </div>
        <div className="text-white text-sm font-medium font-Poppins mr-[50.6px]">
            © 2025
        </div>
    </div>
    <VideoHeroSection/>
   </div>
  )
};

export default HeroSection;
