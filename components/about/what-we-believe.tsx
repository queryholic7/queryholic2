"use client";

import React from "react";
import { motion } from "motion/react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const ValueContent = ({ text }: { text: string }) => {
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
    category: "Innovation",
    title: "Continuously exploring new technologies and smarter ways to solve problems.",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    content: <ValueContent text="We believe in challenging the status quo. By continuously exploring emerging technologies, AI, and modern software paradigms, we find smarter, more efficient ways to solve complex business problems." />,
  },
  {
    category: "Excellence",
    title: "Delivering solutions with precision, quality, and attention to detail.",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    content: <ValueContent text="We are committed to delivering engineering excellence. Every line of code, every UI element, and every embedded system we build is crafted with precision, quality, and an unwavering attention to detail." />,
  },
  {
    category: "Scalability",
    title: "Building systems designed to grow with evolving business needs.",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    content: <ValueContent text="We don't just build for today; we engineer for the future. Our architectures are inherently scalable, designed to seamlessly handle growth and adapt to evolving business needs over time." />,
  },
  {
    category: "Reliability",
    title: "Creating technology businesses can trust for long-term success.",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    content: <ValueContent text="Trust is built on reliability. We rigorously test, optimize, and secure our solutions to ensure they perform flawlessly under pressure, giving businesses the confidence they need for long-term success." />,
  },
];

export default function WhatWeBelieve() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="relative w-full pt-24 md:pt-32 bg-background border-t border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-500 uppercase mb-4">
            Our Values
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
            What We <span className="text-neutral-500 dark:text-neutral-400">Believe</span>
          </h2>
        </motion.div>
      </div>
      
      <div className="w-full">
        <Carousel items={cards} />
      </div>
    </section>
  );
}
