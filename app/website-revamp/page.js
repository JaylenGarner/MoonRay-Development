import Hero from "@/components/Hero";
import ServiceContent from "@/components/ServiceContent";
import { services } from "@/lib/content";
import LoadIn from "@/components/animations/LoadIn";

const WebsiteRevamp = () => {
  const service = services.websiteRevamp;
  return (
    <LoadIn>
      <Hero service={service} />
      <ServiceContent service={service} />
    </LoadIn>
  );
};

export default WebsiteRevamp;
