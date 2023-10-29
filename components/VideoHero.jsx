import LoadIn from "./animations/LoadIn";
import Link from "next/link";

const VideoHero = () => {
  return (
    <LoadIn>
      <div className="video_hero_container">
        <div className="hero_heading_container">
          <h1 className="hero_heading">
            Space Age Soltuions For The Digital World
          </h1>

          <Link href="/services">
            <button className="bg-white p-4 rounded-md text-xl font-bold">
              View Our Services
            </button>
          </Link>
        </div>

        {/* Desktop */}
        <div className="max-sm:hidden">
          <video
            autoPlay
            loop
            muted
            controls={false}
            poster="https://moonray-development.s3.amazonaws.com/Public/Assets/background-motion.video-poster.jpg"
            className="hero_video"
          >
            <source src="https://moonray-development.s3.amazonaws.com/Public/Assets/background-video.mp4" />
          </video>
        </div>

        <div className="absolute z-10 h-screen w-full bg-black opacity-40"></div>

        {/* Mobile */}
        {/* <div className="absolute w-full z-0  sm:hidden h-2/5 bg-space bg-cover"></div> */}
      </div>
    </LoadIn>
  );
};

export default VideoHero;
