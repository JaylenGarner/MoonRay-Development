const VideoHero = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="max-sm:hidden">
        <video
          autoPlay
          loop
          muted
          controls={false}
          poster="https://moonray-development.s3.amazonaws.com/Public/Assets/background-video-poster.jpg"
          className="absolute h-2/5 w-screen z-10 object-cover object-right"
        >
          <source src="https://moonray-development.s3.amazonaws.com/Public/Assets/background-video.mp4" />
        </video>
      </div>

      {/* Mobile */}
      <div className="absolute w-full z-10  sm:hidden h-2/5 bg-space bg-cover"></div>

      {/* Tinted overlay */}
      <div className="absolute z-20 h-2/5 w-screen bg-black opacity-20"></div>
    </div>
  );
};

export default VideoHero;
