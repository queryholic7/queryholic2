"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Monitor, Cpu, Code2, Layers, Cpu as Microchip, Radio, BatteryCharging, Sparkles } from "lucide-react";

const SERVICE_STAGES = [
  {
    num: "01",
    title: "Software Solutions",
    description: "Building modern websites, applications, digital platforms, and user experiences engineered for performance and scalability.",
    services: ["Website Development", "Landing Page Development", "Web Applications", "Mobile Applications", "UI/UX Design"],
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    num: "02",
    title: "Artificial Intelligence",
    description: "Creating intelligent systems that automate workflows, improve decision-making, and unlock new business opportunities.",
    services: ["AI Solutions", "Workflow Automation", "Intelligent Systems"],
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    num: "03",
    title: "Embedded Systems",
    description: "Designing custom electronics, firmware, and embedded solutions for modern products and industrial applications.",
    services: ["PCB Design", "Firmware Development", "Microcontroller Programming"],
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
  {
    num: "04",
    title: "IoT & Automation",
    description: "Connecting devices, sensors, and cloud systems to create intelligent and automated ecosystems.",
    services: ["IoT Systems", "Sensor Integration", "Monitoring Platforms", "Smart Automation"],
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    num: "05",
    title: "Energy & EV Technologies",
    description: "Developing smart energy systems, EV solutions, and next-generation engineering technologies for a sustainable future.",
    services: ["Smart Energy Systems", "Solar Solutions", "EV Solutions", "AI + Electronics Systems"],
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

const ServiceContent = ({ description, services }: { description: string, services: string[] }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
            <span className="text-neutral-700 dark:text-neutral-300">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default function ServicesCarousel() {
  const cards = SERVICE_STAGES.map((service, index) => ({
    category: service.title,
    title: service.description,
    src: service.src,
    content: <ServiceContent description={service.description} services={service.services} />,
  })).map((card, index) => (
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