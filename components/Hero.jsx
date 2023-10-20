import HeroOverlay from "./HeroOverlay";

const Hero = ({ service }) => {
  return (
    <div className="hero_container">
      <HeroOverlay />

      <div className="hero_heading_container">
        <h1 className="hero_heading">{service.name}</h1>
      </div>

      <div className="max-sm:hidden">
        <img src={service.heroImg} className="hero_image" />
      </div>
    </div>
  );
};

export default Hero;
