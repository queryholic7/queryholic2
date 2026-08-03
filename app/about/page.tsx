import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/ui/navbar";
import AboutHero from "@/components/about/about-hero";
import OurStory from "@/components/about/our-story";
import WhatWeBelieve from "@/components/about/what-we-believe";
import WhatMakesUsDifferent from "@/components/about/what-makes-us-different";
import CoreCapabilities from "@/components/about/core-capabilities";
import ClosingStatement from "@/components/about/closing-statement";
import { generatePageMetadata, generateBreadcrumbFromPath } from "@/lib/metadata";
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
  jsonLdScriptProps,
} from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/seo.config";

// =============================================================================
// About Page Metadata
// =============================================================================

export const metadata: Metadata = generatePageMetadata({
  title: "About Queryholic — Software, AI & Engineering Company in Chennai",
  description:
    "Learn about Queryholic — a technology company in Chennai, India focused on building modern software, intelligent AI systems, embedded technologies, IoT platforms, and engineering solutions. We bridge software and hardware to help businesses innovate and scale.",
  keywords: [
    "About Queryholic", "Software Company Chennai", "AI Company Chennai",
    "Technology Company India", "Software Engineering Company",
    "IoT Company India", "Embedded Systems Company",
    "About Us", "Our Story", "Engineering The Future",
  ],
  path: "/about",
});

// =============================================================================
// About Page Component
// =============================================================================

export default function AboutPage() {
  const breadcrumb = generateBreadcrumbFromPath("/about");

  return (
    <div className="page-shell bg-background transition-colors duration-300">
      <Navbar />
      <AboutHero />
      <OurStory />
      <WhatWeBelieve />
      <WhatMakesUsDifferent />
      <CoreCapabilities />
      <ClosingStatement />

      {/* JSON-LD Structured Data */}
      <script
        {...jsonLdScriptProps(
          generateWebPageSchema({
            title: "About Queryholic — Software, AI & Engineering Company",
            description: "Learn about Queryholic — a technology company focused on building modern software, intelligent AI systems, embedded technologies, and engineering solutions.",
            url: `${SITE_CONFIG.url}/about`,
            breadcrumb,
          })
        )}
      />
      <script {...jsonLdScriptProps(generateBreadcrumbSchema(breadcrumb))} />
    </div>
  );
}
