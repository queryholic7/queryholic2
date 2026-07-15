"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "motion/react";

const PROCESS_STAGES = [
  {
    category: "01. Discovery",
    title: "We analyze business goals and technical requirements.",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    content: (
       <div className="bg-[#F5F5F7] dark:bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4 border border-neutral-200 dark:border-neutral-800 shadow-inner">
         <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
           Every successful project begins with deep understanding. We analyze business goals, technical requirements, challenges, and opportunities to define a crystal-clear path forward before writing any code.
         </p>
       </div>
    ),
  },
  {
    category: "02. Strategy",
    title: "Defining system architecture and implementation strategies.",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    content: (
       <div className="bg-[#F5F5F7] dark:bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4 border border-neutral-200 dark:border-neutral-800 shadow-inner">
         <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
           We design the robust foundation of the solution, defining system architecture, workflows, cutting-edge technologies, and implementation strategies for maximum scalability and future-proofing.
         </p>
       </div>
    ),
  },
  {
    category: "03. Design",
    title: "Interactive prototyping and rapid UI/UX validation.",
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop",
    content: (
       <div className="bg-[#F5F5F7] dark:bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4 border border-neutral-200 dark:border-neutral-800 shadow-inner">
         <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
           Abstract ideas are transformed into engaging experiences through thoughtful UI/UX design, interactive prototyping, and rapid validation. We ensure the user experience is flawless.
         </p>
       </div>
    ),
  },
  {
    category: "04. Engineering",
    title: "Meticulous software and embedded systems development.",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    content: (
       <div className="bg-[#F5F5F7] dark:bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4 border border-neutral-200 dark:border-neutral-800 shadow-inner">
         <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
           Our developers bring concepts to life through meticulous software development, embedded systems engineering, AI integration, and intelligent technology implementation with a focus on performance.
         </p>
       </div>
    ),
  },
  {
    category: "05. Deployment",
    title: "Securely deployed to the cloud and continuously optimized.",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    content: (
       <div className="bg-[#F5F5F7] dark:bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4 border border-neutral-200 dark:border-neutral-800 shadow-inner">
         <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
           Once validated, solutions are deployed securely to the cloud, monitored globally, and continuously optimized to support and accelerate your long-term business growth.
         </p>
       </div>
    ),
  },
];

export default function AppleProcess() {
  const cards = PROCESS_STAGES.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="our-process" className="w-full h-full py-20 md:py-32 bg-neutral-50 dark:bg-[#030303] overflow-hidden">
      <div className="max-w-7xl px-4 md:px-8 mx-auto mb-10 flex flex-col md:flex-row items-end justify-between">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.25em] text-indigo-600 dark:text-indigo-400 uppercase mb-4"
          >
            Methodology
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white max-w-4xl"
          >
            How we bring ideas to life.
          </motion.h2>
        </div>
      </div>
      <Carousel items={cards} />
    </section>
  );
}
