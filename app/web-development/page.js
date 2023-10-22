import Hero from "@/components/Hero";
import ServiceContent from "@/components/ServiceContent";
import { services } from "@/lib/content";
import LoadIn from "@/components/animations/LoadIn";

const WebDevelopment = () => {
  const service = services.webDevelopment;

  return (
    <LoadIn>
      <Hero service={service} />
      <ServiceContent service={service} />
    </LoadIn>
  );
};

export default WebDevelopment;
