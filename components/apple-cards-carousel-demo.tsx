"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Services
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ServiceContent = ({ text }: { text: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
        {text}
      </p>
    </div>
  );
};

const data = [
  {
    category: "Website Development",
    title: "Modern responsive websites crafted for startups, businesses, and premium digital brands.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ServiceContent text="We build high-performance websites focused on modern design, responsiveness, speed, and scalability. Every website is designed to create a strong digital presence while delivering smooth user experiences across all devices." />,
  },
  {
    category: "Landing Page Development",
    title: "High-converting landing pages designed for branding, growth, and performance.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ServiceContent text="We create premium landing pages optimized for product launches, marketing campaigns, and startup growth. Our landing pages combine modern visuals, smooth interactions, and conversion-focused layouts." />,
  },
  {
    category: "Web Applications",
    title: "Scalable dashboards, portals, and custom software systems for modern businesses.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ServiceContent text="We develop powerful web applications tailored for startups, enterprises, and digital platforms. From admin dashboards to scalable SaaS systems, every solution is built for performance, security, and long-term scalability." />,
  },
  {
    category: "Mobile App Development",
    title: "Cross-platform mobile applications with premium user experience and scalable architecture.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ServiceContent text="We build modern mobile applications for Android and iOS with clean interfaces, smooth performance, and scalable backend systems. Our apps are designed to deliver seamless user experiences and reliable performance." />,
  },
  {
    category: "AI & Automation",
    title: "Intelligent AI systems, automation workflows, and scalable digital solutions.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ServiceContent text="We create AI-powered systems that help businesses automate workflows, improve productivity, and enhance customer experiences using modern artificial intelligence technologies and smart automation systems." />,
  },
  {
    category: "UI/UX Design",
    title: "Premium digital experiences crafted with modern interfaces and intuitive interactions.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ServiceContent text="We design visually refined and user-focused interfaces that combine aesthetics, usability, and functionality. Every experience is carefully crafted to feel modern, seamless, and premium across all platforms." />,
  },
];
