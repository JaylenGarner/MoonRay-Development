import Hero from "@/components/Hero";
import ServiceContent from "@/components/ServiceContent";
import { services } from "@/lib/content";

const WebDevelopment = () => {
  const service = services.webDevelopment;

  return (
    <>
      <Hero service={service} />
      <ServiceContent service={service} />
    </>
  );
};

export default WebDevelopment;
