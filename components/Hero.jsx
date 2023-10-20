import HeroOverlay from "./HeroOverlay";

const Hero = ({ heading, img }) => {
  return (
    <div className="w-full h-2/5">
      <HeroOverlay />

      <div className="absolute w-full z-20 h-1/2 flex_center">
        <h1 className="text-6xl max-sm:text-4xl  font-bold   text-center leading-snug tracking-wide text-slate-200">
          {heading}
        </h1>
      </div>

      <div className="max-sm:hidden">
        <img
          src={img}
          className="absolute h-1/2 w-screen z-0 object-cover "
        ></img>
      </div>
    </div>
  );
};

export default Hero;
