"use client";

import React from "react";
import { Search, Network, LayoutTemplate, TerminalSquare, Globe, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const PROCESS_STAGES = [
  {
    num: "01",
    title: "Discovery",
    description: "We analyze business goals, technical requirements, and opportunities to define a clear path forward.",
    icon: Search,
  },
  {
    num: "02",
    title: "Strategy",
    description: "We design the robust foundation, defining system architecture and technologies for maximum scalability.",
    icon: Network,
  },
  {
    num: "03",
    title: "Design",
    description: "Abstract ideas are transformed into engaging experiences through thoughtful UI/UX and rapid prototyping.",
    icon: LayoutTemplate,
  },
  {
    num: "04",
    title: "Engineering",
    description: "Meticulous software development, AI integration, and intelligent technology implementation.",
    icon: TerminalSquare,
  },
  {
    num: "05",
    title: "Deployment",
    description: "Solutions are deployed securely to the cloud, monitored globally, and continuously optimized.",
    icon: Globe,
  },
];

export default function SimpleProcess() {
  return (
    <section id="our-process" className="py-20 md:py-32 bg-indigo-50/60 dark:bg-[#0a0a0a] border-y border-indigo-100 dark:border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <div className="text-xs font-semibold tracking-[0.25em] text-indigo-600 dark:text-indigo-400 uppercase mb-4">
            Methodology
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white max-w-2xl">
            A simple, proven process.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg max-w-2xl mt-6">
            We follow a clean, straightforward methodology to ensure every project is delivered with precision and excellence. No overly complex jargon, just results.
          </p>
        </div>

        {/* Process Grid / Mobile Carousel */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory custom-scrollbar pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {PROCESS_STAGES.map((stage, index) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`snap-center shrink-0 w-[85vw] md:w-auto relative flex flex-col p-6 md:p-8 rounded-3xl bg-white dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 transition-all hover:shadow-lg dark:hover:shadow-indigo-500/10 shadow-sm group ${
                index === 3 ? "md:col-span-1 md:col-start-1" : ""
              } ${
                index === 4 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <stage.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-3xl md:text-4xl font-black text-neutral-200 dark:text-neutral-800 tracking-tighter">
                  {stage.num}
                </span>
              </div>
              
              <h3 className="text-lg md:text-2xl font-bold text-neutral-900 dark:text-white mb-3 md:mb-4">
                {stage.title}
              </h3>
              
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                {stage.description}
              </p>

              {/* Decorative line/arrow for flow visualization (hidden on mobile) */}
              {index < PROCESS_STAGES.length - 1 && index !== 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 text-neutral-300 dark:text-neutral-700 z-10 translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
