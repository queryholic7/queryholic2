import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/ui/navbar";
import Hero from "@/components/hero";
import AboutUsSection from "@/components/about-us-section";

const BentoServices = dynamic(() => import("@/components/bento-services"));
const SimpleProcess = dynamic(() => import("@/components/simple-process"));
const Comparison = dynamic(() => import("@/components/comparison"));
const TechStack = dynamic(() => import("@/components/tech-stack"));
const GlowingEffectDemo = dynamic(() => import("@/components/glowing-effect-demo"));
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateWebPageSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  jsonLdScriptProps,
} from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/seo.config";

// =============================================================================
// Home Page Metadata
// =============================================================================

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Best Software Development Company in Chennai, India",
    description:
      "Queryholic is a leading software development company in Chennai, India. We build websites, web applications, mobile apps, AI solutions, embedded systems, IoT platforms, and smart energy technologies for startups and enterprises. Get a free quote today.",
    keywords: [
      "Software Development Company", "Website Development Company Chennai",
      "Software Company India", "Web Application Development", "Mobile App Development",
      "AI Development Company", "Custom Software Development", "IoT Solutions",
      "Embedded Systems", "Best Software Company Chennai", "Website Development India",
      "AI Automation Company", "React Development", "Next.js Development",
      "Queryholic", "Software Solutions", "Digital Transformation",
      "Best Website Development Company in Chennai",
      "Affordable Website Development Company in India",
    ],
    path: "/",
  }),
  title: {
    absolute: SITE_CONFIG.defaultTitle,
  },
};

// =============================================================================
// Home Page Component
// =============================================================================

export default function Home() {
  // Home page FAQ data for schema
  const homeFAQs = [
    { question: "What services does Queryholic offer?", answer: "Queryholic offers website development, web application development, mobile app development, AI & automation, embedded systems, IoT solutions, UI/UX design, cloud & AWS services, and EV & smart energy solutions." },
    { question: "Where is Queryholic located?", answer: "Queryholic is based in Chennai, Tamil Nadu, India. We serve clients globally across India, United States, United Kingdom, UAE, and Singapore." },
    { question: "Does Queryholic work with startups?", answer: "Yes, Queryholic works with startups, small businesses, and enterprises of all sizes. We offer MVP development, startup tech partnerships, and scalable solutions." },
    { question: "What technologies does Queryholic use?", answer: "We use modern technologies including Next.js, React, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker, Flutter, and AI/ML frameworks like OpenAI and LangChain." },
  ];

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

      {/* JSON-LD Structured Data */}
      <script
        {...jsonLdScriptProps(
          generateWebPageSchema({
            title: SITE_CONFIG.defaultTitle,
            description: SITE_CONFIG.defaultDescription,
            url: SITE_CONFIG.url,
            breadcrumb: [{ name: "Home", url: SITE_CONFIG.url }],
          })
        )}
      />
      <script {...jsonLdScriptProps(generateFAQSchema(homeFAQs))} />
      <script
        {...jsonLdScriptProps(
          generateBreadcrumbSchema([{ name: "Home", url: SITE_CONFIG.url }])
        )}
      />
    </div>
  );
}