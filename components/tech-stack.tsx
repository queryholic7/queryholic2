"use client";

import React from "react";
import { motion } from "motion/react";
import { DraggableCardContainer, DraggableCardBody } from "@/components/ui/draggable-card";
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
    <section className="relative w-full min-h-screen bg-neutral-50 dark:bg-[#030303] overflow-hidden flex flex-col items-center justify-center py-24 selection:bg-black/10 dark:selection:bg-white/20 transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center px-4 max-w-4xl mx-auto mb-16 z-10 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-500 uppercase mb-6"
        >
          Technology Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          Engineered with modern tools. <br className="hidden md:block" />
          <span className="text-neutral-400 dark:text-neutral-500">Built to scale.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg text-neutral-600 dark:text-neutral-400"
        >
          Drag the technologies around to explore our ecosystem.
        </motion.p>
      </div>

      {/* Draggable Cards Container */}
      <DraggableCardContainer className="relative w-full max-w-6xl mx-auto min-h-[600px] flex flex-wrap items-center justify-center gap-4 md:gap-8 p-12">
        {TECH_STACK.map((tech, idx) => {
          const Icon = tech.icon;
          
          // Deterministic pseudo-random values for a jumbled, scattered look
          const rotate = (idx * 47) % 30 - 15; // -15 to +15 deg
          const mt = (idx * 53) % 50 - 25; // -25 to +25 px margin top
          const ml = (idx * 61) % 50 - 25; // -25 to +25 px margin left

          return (
            <div 
              key={idx}
              style={{
                transform: `rotate(${rotate}deg)`,
                marginTop: `${mt}px`,
                marginLeft: `${ml}px`,
                zIndex: (idx * 7) % 20 // Randomize z-index slightly
              }}
            >
              <DraggableCardBody 
                className="!min-h-0 !w-32 !h-32 p-4 flex flex-col items-center justify-center gap-3 bg-white dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200/50 dark:border-white/10 shadow-lg cursor-grab active:cursor-grabbing hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-colors"
              >
                <Icon className="w-10 h-10 text-neutral-700 dark:text-neutral-300 pointer-events-none" strokeWidth={1.5} />
                <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 text-center select-none pointer-events-none">
                  {tech.name}
                </span>
              </DraggableCardBody>
            </div>
          );
        })}
      </DraggableCardContainer>

    </section>
  );
}
