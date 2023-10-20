import Hero from "@/components/Hero";
import ServiceContent from "@/components/ServiceContent";
import { services } from "@/lib/content";

const ManagedServices = () => {
  const service = services.managedServices;

  return (
    <>
      <Hero service={service} />
      <ServiceContent service={service} />
    </>
  );
};

export default ManagedServices;
