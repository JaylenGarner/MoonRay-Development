const VideoHero = () => {
  return (
    <div className="w-full h-2/5">
      {/* Heading */}
      <div className="absolute w-full z-20 h-2/5 flex_center">
        <h1 className="text-6xl max-sm:text-4xl  font-bold   text-center leading-snug tracking-wide text-slate-200">
          MoonRay Development
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
          className="absolute h-2/5 w-screen z-0 object-cover object-right"
        >
          <source src="https://moonray-development.s3.amazonaws.com/Public/Assets/background-video.mp4" />
        </video>
      </div>

      {/* Mobile */}
      <div className="absolute w-full z-0  sm:hidden h-2/5 bg-space bg-cover"></div>

      {/* Tinted overlay */}
      <div className="absolute z-10 h-2/5 w-screen bg-black opacity-30"></div>
    </div>
  );
};

export default VideoHero;
