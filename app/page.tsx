import { Navbar } from "@/components/ui/navbar";
import Hero from "@/components/hero";
import GlowingEffectDemo from "@/components/glowing-effect-demo";
import CinematicServices from "@/components/cinematic-services";
import CinematicProcess from "@/components/cinematic-process";
import TechStack from "@/components/tech-stack";
import AboutUsSection from "@/components/about-us-section";

export default function Home() {
  return (
    <div className="page-shell bg-background transition-colors duration-300">
      <Navbar />
      <Hero />
      <AboutUsSection />
      <CinematicServices />
      <CinematicProcess />
      <TechStack />
      <GlowingEffectDemo />
    </div>
  );
}