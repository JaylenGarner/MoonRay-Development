import { playfair } from "@/lib/fonts";
import VideoHero from "@/components/VideoHero";

export default function Home() {
  return (
    <div className="h-screen">
      <VideoHero />
      <div className="flex_center pt-16">
        <h2
          className={`text-5xl max-sm:text-4xl font-bold ${playfair.className} leading-snug`}
        >
          MISSION CONTROL
        </h2>
      </div>
    </div>
  );
}
