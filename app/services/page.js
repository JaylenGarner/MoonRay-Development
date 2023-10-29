import Hero from "@/components/Hero";
import { services } from "@/lib/content";
import ServiceCard from "@/components/ServiceCard";

const WebDevelopment = () => {
  const info = {
    name: "Services",
    heroImg:
      "https://moonray-development.s3.amazonaws.com/Public/Assets/night-sky.jpg",
  };

  return (
    <>
      <Hero service={info} />
      <div className="flex_center flex-col pt-16 space-y-24 pb-16">
        {Object.values(services).map((service, i) => {
          return <ServiceCard service={service} i={i} key={i} />;
        })}
      </div>
    </>
  );
};

export default WebDevelopment;
