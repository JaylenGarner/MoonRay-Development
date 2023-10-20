import Hero from "@/components/Hero";
import ServiceContent from "@/components/ServiceContent";
import { services } from "@/lib/content";

const WebsiteRevamp = () => {
  const service = services.websiteRevamp;
  return (
    <>
      <Hero service={service} />
      <ServiceContent service={service} />
    </>
  );
};

export default WebsiteRevamp;
