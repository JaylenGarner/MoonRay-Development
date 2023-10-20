import HeroOverlay from "./HeroOverlay";

const Hero = ({ heading, img }) => {
  return (
    <div className="hero_container">
      <HeroOverlay />

      <div className="hero_heading_container">
        <h1 className="hero_heading">{heading}</h1>
      </div>

      <div className="max-sm:hidden">
        <img src={img} className="hero_image" />
      </div>
    </div>
  );
};

export default Hero;
