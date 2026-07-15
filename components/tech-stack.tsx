"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  IconBrandNextjs, 
  IconBrandReact, 
  IconBrandTypescript, 
  IconBrandTailwind, 
  IconBrandNodejs, 
  IconBrandOpenai, 
  IconBrandFigma, 
  IconBrandFramer, 
  IconBrandVercel, 
  IconBrandDocker,
  IconDatabase,
  IconLink,
  IconPalette,
} from "@tabler/icons-react";
import { Cpu, Microchip, Server, Activity } from "lucide-react";

const TECH_STACK = [
  { name: "Next.js", icon: IconBrandNextjs },
  { name: "React", icon: IconBrandReact },
  { name: "TypeScript", icon: IconBrandTypescript },
  { name: "Tailwind CSS", icon: IconBrandTailwind },
  { name: "Node.js", icon: IconBrandNodejs },
  { name: "PostgreSQL", icon: IconDatabase },
  { name: "OpenAI", icon: IconBrandOpenai },
  { name: "LangChain", icon: IconLink },
  { name: "Arduino", icon: Microchip },
  { name: "ESP32", icon: Cpu },
  { name: "STM32", icon: Cpu },
  { name: "Raspberry Pi", icon: Server },
  { name: "MQTT", icon: Activity },
  { name: "Design", icon: IconPalette },
  { name: "Figma", icon: IconBrandFigma },
  { name: "Framer", icon: IconBrandFramer },
  { name: "Vercel", icon: IconBrandVercel },
  { name: "Docker", icon: IconBrandDocker },
];

export default function TechStack() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-slate-50/80 dark:bg-[#030303] border-t border-slate-200/60 dark:border-neutral-800/50 overflow-hidden transition-colors duration-300">
      
      {/* Inline CSS for the infinite marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); } /* -50% to shift exactly half the duplicated container, minus half the gap */
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Header */}
      <div className="text-center px-4 max-w-4xl mx-auto mb-16 z-10 relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-600 dark:text-indigo-400 uppercase mb-4"
        >
          Technology Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          Engineered with modern tools. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600 dark:from-neutral-500 dark:to-neutral-300">Built to scale.</span>
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden w-full max-w-screen-2xl mx-auto py-10">
         {/* Left & Right Gradients for smooth fade out */}
         <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-slate-50 dark:from-[#030303] to-transparent z-10 pointer-events-none" />
         <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-slate-50 dark:from-[#030303] to-transparent z-10 pointer-events-none" />
         
         <div className="flex gap-8 w-max animate-marquee px-4">
            {/* Duplicate the array twice for seamless infinite looping */}
            {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={idx}
                  className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex-shrink-0"
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-neutral-500 dark:text-neutral-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-3 md:mb-4 transition-colors" strokeWidth={1.5} />
                  <span className="text-xs md:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {tech.name}
                  </span>
                </div>
              );
            })}
         </div>
      </div>
    </section>
  );
}
