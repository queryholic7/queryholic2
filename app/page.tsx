import { Navbar } from "@/components/ui/navbar";
import Hero from "@/components/hero";
import GlowingEffectDemo from "@/components/glowing-effect-demo";
import BentoServices from "@/components/bento-services";
import SimpleProcess from "@/components/simple-process";
import TechStack from "@/components/tech-stack";
import AboutUsSection from "@/components/about-us-section";

import Comparison from "@/components/comparison";

export default function Home() {
  return (
    <div className="page-shell bg-background transition-colors duration-300">
      <Navbar />
      <Hero />
      <AboutUsSection />
      <BentoServices />
      <SimpleProcess />
      <Comparison />
      <TechStack />
      <GlowingEffectDemo />
    </div>
  );
}