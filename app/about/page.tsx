import React from "react";
import { Navbar } from "@/components/ui/navbar";
import AboutHero from "@/components/about/about-hero";
import OurStory from "@/components/about/our-story";
import WhatWeBelieve from "@/components/about/what-we-believe";
import WhatMakesUsDifferent from "@/components/about/what-makes-us-different";
import CoreCapabilities from "@/components/about/core-capabilities";
import ClosingStatement from "@/components/about/closing-statement";

export default function AboutPage() {
  return (
    <div className="page-shell bg-background transition-colors duration-300">
      <Navbar />
      <AboutHero />
      <OurStory />
      <WhatWeBelieve />
      <WhatMakesUsDifferent />
      <CoreCapabilities />
      <ClosingStatement />
    </div>
  );
}
