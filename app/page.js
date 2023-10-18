import VideoHero from "@/components/VideoHero";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    name: "Web Development",
    img: "https://newsroom.unsw.edu.au/sites/default/files/styles/full_width__2x/public/thumbnails/image/gettyimages-1360144430.jpg",
    description:
      "Ready to launch your business into the digital stratosphere? We offer a diverse range of web development solutions, ranging from complex full-stack web applications to simple yet effective websites that beautifully showcase your services.",
  },
  {
    name: "Website Revamp",
    img: "https://newsroom.unsw.edu.au/sites/default/files/styles/full_width__2x/public/thumbnails/image/gettyimages-1360144430.jpg",
    description:
      "We understand the importance of having a modern and professional online presence for businesses, and we are committed to helping our clients achieve just that.",
  },
  {
    name: "Managed Services",
    img: "https://newsroom.unsw.edu.au/sites/default/files/styles/full_width__2x/public/thumbnails/image/gettyimages-1360144430.jpg",
    description:
      "Our website management service ensures that your site is up-to-date, secure, and performing at its best. Leave the technical details to us and focus on your business with our subscription-based managed services.",
  },
];

export default function Home() {
  return (
    <div className="h-screen pb-20">
      <VideoHero />
      <div className="flex_center pt-16">
        <h2 className="text-5xl max-sm:text-4xl font-bold leading-snug">
          Mission Control
        </h2>
      </div>

      <div className="flex_center flex-col pt-16 space-y-24">
        {services.map((service, i) => {
          return <ServiceCard service={service} i={i} key={i} />;
        })}
      </div>
    </div>
  );
}
