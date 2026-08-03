import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/ui/navbar";
import ContactFormSection from "@/components/contact/contact-form-section";
import FAQ from "@/components/contact/faq";
import FinalCTA from "@/components/contact/final-cta";
import { generatePageMetadata, generateBreadcrumbFromPath } from "@/lib/metadata";
import {
  generateWebPageSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  jsonLdScriptProps,
} from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/seo.config";

// =============================================================================
// Contact Page Metadata
// =============================================================================

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Queryholic — Get a Free Quote for Your Project",
  description:
    "Contact Queryholic for website development, software development, AI solutions, mobile app development, and engineering services. Get a free quote within 24 hours. Based in Chennai, India — serving clients worldwide.",
  keywords: [
    "Contact Queryholic", "Get a Quote", "Hire Software Company",
    "Hire Website Developer", "Website Development Cost",
    "Software Development Pricing", "Free Quote",
    "Contact Software Company Chennai", "Hire Developers India",
  ],
  path: "/contact",
});

// =============================================================================
// Contact Page Component
// =============================================================================

export default function ContactPage() {
  const breadcrumb = generateBreadcrumbFromPath("/contact");

  // Contact page FAQs for schema
  const contactFAQs = [
    { question: "How soon will I receive a response?", answer: "Most inquiries receive a response within 24–48 hours." },
    { question: "Do you work with startups?", answer: "Yes. We work with startups, businesses, and organizations of all sizes." },
    { question: "Can you handle both software and hardware projects?", answer: "Yes. Queryholic specializes in software, embedded systems, AI, IoT, and engineering solutions." },
    { question: "Do you offer ongoing support?", answer: "Yes. We provide maintenance, optimization, and long-term technical support." },
  ];

  return (
    <div className="page-shell bg-background transition-colors duration-300">
      <Navbar />
      <ContactFormSection />
      <FAQ />
      <FinalCTA />

      {/* JSON-LD Structured Data */}
      <script
        {...jsonLdScriptProps(
          generateWebPageSchema({
            title: "Contact Queryholic — Get a Free Quote",
            description: "Contact Queryholic for software development, website development, AI solutions, and engineering services.",
            url: `${SITE_CONFIG.url}/contact`,
            breadcrumb,
          })
        )}
      />
      <script {...jsonLdScriptProps(generateFAQSchema(contactFAQs))} />
      <script {...jsonLdScriptProps(generateBreadcrumbSchema(breadcrumb))} />
    </div>
  );
}
