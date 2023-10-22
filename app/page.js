import VideoHero from "@/components/VideoHero";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/content";
import LoadIn from "@/components/animations/LoadIn";

export default function Home() {
  return (
    <LoadIn>
      <VideoHero />
      <div className="flex_center pt-16">
        <h2 className="text-5xl max-sm:text-4xl font-bold leading-snug">
          Mission Control
        </h2>
      </div>

      <div className="flex_center flex-col pt-16 space-y-24">
        {Object.values(services).map((service, i) => {
          return <ServiceCard service={service} i={i} key={i} />;
        })}
      </div>
    </LoadIn>
  );
}
