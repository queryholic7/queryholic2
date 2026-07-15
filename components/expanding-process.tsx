"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Network, LayoutTemplate, TerminalSquare, Globe, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PROCESS_STAGES = [
  {
    num: "01",
    title: "Discovery",
    icon: Search,
    description: "Every successful project begins with understanding. We analyze business goals, technical requirements, challenges, and opportunities to define a clear path forward.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Strategy & Architecture",
    icon: Network,
    description: "We design the robust foundation of the solution, defining system architecture, workflows, cutting-edge technologies, and implementation strategies for maximum scalability.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Design & Prototyping",
    icon: LayoutTemplate,
    description: "Abstract ideas are transformed into engaging experiences through thoughtful design, interactive prototyping, and rapid validation before any code is written.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Engineering",
    icon: TerminalSquare,
    description: "Our developers bring concepts to life through meticulous software development, embedded systems engineering, AI integration, and intelligent technology implementation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "05",
    title: "Deployment & Growth",
    icon: Globe,
    description: "Once validated, solutions are deployed securely to the cloud, monitored globally, and continuously optimized to support and accelerate your long-term business growth.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  },
];

export default function ExpandingProcess() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="our-process" className="relative w-full py-24 md:py-32 bg-neutral-50 dark:bg-[#030303] transition-colors duration-300 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg max-w-2xl mt-6"
          >
            An interactive journey through our engineering process. Hover or tap to explore how we transform visions into reality.
          </motion.p>
        </div>

        {/* Expanding Cards Container */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 h-[600px] w-full max-w-6xl mx-auto mt-10">
          {PROCESS_STAGES.map((stage, index) => {
            const isActive = activeItem === index;
            
            return (
              <motion.div
                key={index}
                onClick={() => setActiveItem(index)}
                onMouseEnter={() => setActiveItem(index)}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  layout: { duration: 0.5, type: "spring", bounce: 0.2 },
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  y: { duration: 0.5, delay: index * 0.1 }
                }}
                className={cn(
                  "relative h-full rounded-3xl overflow-hidden cursor-pointer group flex-shrink-0 origin-left transition-all duration-300",
                  isActive ? "md:grow-[4] grow-[2]" : "md:grow-[1] grow-0 md:basis-[80px]"
                )}
                style={{
                  minHeight: isActive ? "300px" : "80px", // for mobile stack
                }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${stage.image})` }}
                />
                
                {/* Gradients to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                <div className={cn(
                  "absolute inset-0 bg-indigo-900/40 mix-blend-multiply transition-opacity duration-500",
                  isActive ? "opacity-100" : "opacity-0"
                )} />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  
                  {/* Collapsed State Content (Vertical Text for Desktop, Horizontal for Mobile) */}
                  <div className={cn(
                    "absolute md:inset-y-0 md:left-0 md:right-auto inset-x-0 top-0 bottom-auto p-6 md:w-[80px] flex md:flex-col items-center md:justify-end justify-between transition-opacity duration-300",
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  )}>
                    <div className="md:hidden flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <stage.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{stage.num} - {stage.title}</span>
                    </div>
                    
                    <span className="hidden md:block text-white/50 font-mono text-xl mb-4 transform -rotate-90 origin-bottom whitespace-nowrap">
                      {stage.num}
                    </span>
                    <div className="hidden md:flex items-center gap-4 transform -rotate-90 origin-bottom-left whitespace-nowrap absolute bottom-24 left-1/2 translate-x-3">
                      <span className="text-white text-xl font-medium tracking-wide">
                        {stage.title}
                      </span>
                    </div>
                    <div className="hidden md:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-md items-center justify-center border border-white/20 mb-4 absolute bottom-4">
                      <stage.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Expanded State Content */}
                  <div className={cn(
                    "flex flex-col gap-4 transform transition-all duration-500 ease-out",
                    isActive ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-10 absolute pointer-events-none"
                  )}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-indigo-500/20 backdrop-blur-xl flex items-center justify-center border border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                        <stage.icon className="w-6 h-6 md:w-8 md:h-8 text-indigo-300" />
                      </div>
                      <span className="text-5xl md:text-7xl font-black text-white/20 font-sans tracking-tighter">
                        {stage.num}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-2 whitespace-nowrap">
                      {stage.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm md:text-lg max-w-xl leading-relaxed mt-2 line-clamp-3 md:line-clamp-none">
                      {stage.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-indigo-300 font-medium cursor-pointer group/btn w-fit">
                      <span className="group-hover/btn:underline underline-offset-4">Explore stage</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Active Border Glow */}
                {isActive && (
                  <motion.div 
                    layoutId="active-border"
                    className="absolute inset-0 border-2 border-indigo-500/50 rounded-3xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
