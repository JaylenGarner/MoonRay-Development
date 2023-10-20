import Hero from "@/components/Hero";
import ServiceContent from "@/components/ServiceContent";

const WebDevelopment = () => {
  return (
    <div className="h-screen">
      <Hero
        heading={"Web Development"}
        img={
          "https://moonray-development.s3.amazonaws.com/Public/Assets/rocket-cropped.jpg"
        }
      />

      <ServiceContent />
    </div>
  );
};

export default WebDevelopment;
