import Hero_Video from "../../assets/video/Hero_Video.mp4"

const VideoHeroSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative w-[95vw] h-[530px] mt-[27px] mx-[37px]">
        <video
          src={Hero_Video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-4 right-4 text-white text-lg md:text-4xl lg:text-2xl font-semibold  px-4 py-2 rounded-xl font-Poppins">
          A silhouette worth remembering
        </div>
      </div>
    </div>
  );
};

export default VideoHeroSection
