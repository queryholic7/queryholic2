import React from "react";
import { Navbar } from "@/components/ui/navbar";
import ContactHero from "@/components/contact/contact-hero";
import ContactFormSection from "@/components/contact/contact-form-section";
import FAQ from "@/components/contact/faq";
import FinalCTA from "@/components/contact/final-cta";

export default function ContactPage() {
  return (
    <div className="page-shell bg-background transition-colors duration-300">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
