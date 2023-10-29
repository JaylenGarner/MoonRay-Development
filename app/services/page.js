import Hero from "@/components/Hero";
import { services } from "@/lib/content";
import LoadIn from "@/components/animations/LoadIn";
import ServiceCard from "@/components/ServiceCard";

const WebDevelopment = () => {
  const info = {
    name: "Services",
    heroImg:
      "https://moonray-development.s3.amazonaws.com/Public/Assets/night-sky.jpg",
  };

  return (
    <LoadIn>
      <Hero service={info} />
      <div className="flex_center flex-col pt-16 space-y-24 pb-16">
        {Object.values(services).map((service, i) => {
          return <ServiceCard service={service} i={i} key={i} />;
        })}
      </div>
    </LoadIn>
  );
};

export default WebDevelopment;
