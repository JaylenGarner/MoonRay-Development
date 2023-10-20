import HeroOverlay from "./HeroOverlay";

const VideoHero = () => {
  return (
    <div className="hero_container">
      <HeroOverlay />

      <div className="hero_heading_container">
        <h1 className="hero_heading">
          Space Age Soltuions For The Digital World
        </h1>
      </div>

      {/* Desktop */}
      <div className="max-sm:hidden">
        <video
          autoPlay
          loop
          muted
          controls={false}
          poster="https://moonray-development.s3.amazonaws.com/Public/Assets/background-video-poster.jpg"
          className="hero_video"
        >
          <source src="https://moonray-development.s3.amazonaws.com/Public/Assets/background-video.mp4" />
        </video>
      </div>

      {/* Mobile */}
      {/* <div className="absolute w-full z-0  sm:hidden h-2/5 bg-space bg-cover"></div> */}
    </div>
  );
};

export default VideoHero;
