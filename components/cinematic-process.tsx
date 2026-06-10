"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Search, Network, LayoutTemplate, TerminalSquare, ShieldCheck, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

// --- CUSTOM ABSTRACT VISUALS ---

const BlueprintVisual = () => (
  <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto flex items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-colors duration-300">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] transition-colors duration-300" />
    
    {/* Abstract UI Elements */}
    <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-1/4 left-1/4 w-32 h-20 border-2 border-indigo-500/30 rounded-lg backdrop-blur-sm" />
    <motion.div animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ repeat: Infinity, duration: 5, delay: 1 }} className="absolute bottom-1/3 right-1/4 w-40 h-32 border-2 border-cyan-500/30 rounded-lg backdrop-blur-sm" />
    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 3, delay: 2 }} className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-purple-500/40 rounded-full backdrop-blur-sm" />
    
    {/* Scanning Line */}
    <motion.div 
      animate={{ y: ["-100%", "400%"] }}
      transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent blur-md"
    />
  </div>
);

const ArchitectureVisual = () => (
  <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto flex items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-colors duration-300">
    <svg viewBox="0 0 100 100" className="w-full h-full p-8 overflow-visible">
      <motion.path 
        d="M 50 20 L 20 50 L 50 80 L 80 50 Z" 
        fill="none" 
        stroke="currentColor" 
        className="text-cyan-500/30 transition-colors duration-300" 
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.path 
        d="M 20 50 L 80 50 M 50 20 L 50 80" 
        fill="none" 
        stroke="currentColor" 
        className="text-fuchsia-500/30 transition-colors duration-300" 
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
      />
      {[ [50,20], [20,50], [80,50], [50,80], [50,50] ].map((pos, i) => (
        <motion.circle 
          key={i} cx={pos[0]} cy={pos[1]} r="3" 
          className="fill-neutral-900 dark:fill-white stroke-cyan-500/50 transition-colors duration-300"
          animate={{ r: [3, 5, 3], filter: ["blur(0px)", "blur(2px)", "blur(0px)"] }}
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
        />
      ))}
    </svg>
  </div>
);

const DesignVisual = () => (
  <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto flex items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-colors duration-300">
    <motion.div 
      animate={{ scale: [0.95, 1.05, 0.95] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      className="relative w-2/3 h-2/3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-2xl flex flex-col p-4 gap-4 transition-colors duration-300"
    >
      <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3 transition-colors duration-300">
        <div className="w-8 h-8 rounded-full bg-indigo-500/20" />
        <div className="flex-1 flex flex-col gap-2 justify-center">
          <div className="w-1/2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-colors duration-300" />
          <div className="w-1/3 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300" />
        </div>
      </div>
      <div className="flex-1 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/5" />
      <div className="h-12 flex gap-4">
        <div className="flex-1 rounded-lg bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300" />
        <div className="flex-1 rounded-lg bg-indigo-500/20" />
      </div>
    </motion.div>
  </div>
);

const DevelopmentVisual = () => (
  <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto flex items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-colors duration-300">
    <div className="absolute inset-0 flex flex-col gap-2 p-6 opacity-30 dark:opacity-50 font-mono text-xs text-indigo-600 dark:text-indigo-400 overflow-hidden transition-colors duration-300">
      <motion.div animate={{ y: [0, -100] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="whitespace-nowrap">
        {"const compile = async () => { await sys.init(); return Object.assign({}, sys.cache); };"} <br/>
        {"export function ServerInit() { return <Suspense fallback={<Loading />}><Core /></Suspense>; }"} <br/>
        {"if (env.production) { optimize.memory(sys); cluster.fork(); } else { logger.info('Dev'); }"} <br/>
        {"class Engine { constructor(ctx) { this.ctx = ctx; this.boot(); } async boot() { await this.ctx.ready(); } }"} <br/>
        {"type Strict<T> = T extends object ? { [K in keyof T]-?: Strict<T[K]> } : T;"} <br/>
        {"// Processing buffer streams..."} <br/>
        {"const compile = async () => { await sys.init(); return Object.assign({}, sys.cache); };"} <br/>
        {"export function ServerInit() { return <Suspense fallback={<Loading />}><Core /></Suspense>; }"} <br/>
      </motion.div>
    </div>
    
    <motion.div 
      animate={{ rotateX: [10, -10, 10], rotateY: [-10, 10, -10] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="relative w-32 h-32 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.2)]"
    >
      <TerminalSquare className="w-12 h-12 text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
    </motion.div>
  </div>
);

const TestingVisual = () => (
  <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto flex items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-colors duration-300">
    <motion.div animate={{ scale: [1, 2], opacity: [0.8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }} className="absolute w-24 h-24 rounded-full border border-emerald-500/50" />
    <motion.div animate={{ scale: [1, 3], opacity: [0.5, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeOut" }} className="absolute w-24 h-24 rounded-full border border-emerald-500/30" />
    <motion.div animate={{ scale: [1, 4], opacity: [0.2, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 2, ease: "easeOut" }} className="absolute w-24 h-24 rounded-full border border-emerald-500/10" />
    
    <div className="relative w-24 h-24 rounded-full bg-emerald-500/20 border border-emerald-500/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)] z-10">
      <ShieldCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" />
    </div>
  </div>
);

const DeploymentVisual = () => (
  <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto flex items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-colors duration-300">
    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-cyan-500/10" />
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      className="relative w-64 h-64 border border-blue-500/20 rounded-full flex items-center justify-center border-dashed"
    >
      <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="w-48 h-48 border border-cyan-500/30 rounded-full flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)] backdrop-blur-md">
          <Globe className="w-10 h-10 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
        </div>
      </motion.div>
    </motion.div>
  </div>
);

// --- PROCESS DATA ---

const PROCESS_STAGES = [
  {
    num: "01",
    title: "DISCOVERY",
    description: "Every successful project begins with understanding. We analyze business goals, technical requirements, challenges, and opportunities to define a clear path forward.",
    highlights: ["Requirement Analysis", "Technical Consultation", "Feasibility Assessment", "Project Planning"],
    Visual: BlueprintVisual,
    icon: Search,
  },
  {
    num: "02",
    title: "STRATEGY & ARCHITECTURE",
    description: "We design the foundation of the solution, defining system architecture, workflows, technologies, and implementation strategies for maximum scalability.",
    highlights: ["Solution Architecture", "Technology Selection", "Infrastructure Planning", "Development Roadmap"],
    Visual: ArchitectureVisual,
    icon: Network,
  },
  {
    num: "03",
    title: "DESIGN & PROTOTYPING",
    description: "Ideas are transformed into experiences through thoughtful design, prototyping, and validation before development begins.",
    highlights: ["UI/UX Design", "Wireframing", "Interactive Prototypes", "Engineering Concepts"],
    Visual: DesignVisual,
    icon: LayoutTemplate,
  },
  {
    num: "04",
    title: "DEVELOPMENT & ENGINEERING",
    description: "Our developers and engineers bring concepts to life through software development, embedded systems engineering, AI integration, and intelligent technologies.",
    highlights: ["Software Development", "Embedded Systems", "AI Integration", "System Engineering"],
    Visual: DevelopmentVisual,
    icon: TerminalSquare,
  },
  {
    num: "05",
    title: "TESTING & OPTIMIZATION",
    description: "Every solution undergoes rigorous testing, validation, and optimization to ensure reliability, security, performance, and scalability.",
    highlights: ["Quality Assurance", "Security Validation", "Performance Testing", "Optimization"],
    Visual: TestingVisual,
    icon: ShieldCheck,
  },
  {
    num: "06",
    title: "DEPLOYMENT & GROWTH",
    description: "Once validated, solutions are deployed, monitored, and continuously improved to support long-term business growth.",
    highlights: ["Production Deployment", "Infrastructure Setup", "Monitoring", "Ongoing Support"],
    Visual: DeploymentVisual,
    icon: Globe,
  }
];

export default function CinematicProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create the horizontal scroll effect mapping scrollY to x displacement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // 6 stages = 6 screens wide. We want to scroll from 0 to -83.333% (which is 5/6 of the width)
  // The wrapper will be 600vw wide.
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-83.3333%"]);

  return (
    <section id="our-process" className="relative w-full bg-white dark:bg-black transition-colors duration-300">
      
      {/* Intro Header Section (Vertical Scroll normally before entering the horizontal sticky section) */}
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pt-32 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs md:text-sm font-semibold tracking-[0.3em] text-neutral-500 dark:text-neutral-400 uppercase mb-6 transition-colors duration-300"
        >
          Our Methodology
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-neutral-900 dark:text-white transition-colors duration-300"
        >
          Engineering Excellence <br className="hidden md:block" />
          <span className="text-neutral-400 dark:text-neutral-500 transition-colors duration-300">Through Every Stage.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl font-light text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed transition-colors duration-300"
        >
          From concept to deployment, every solution is built through a carefully structured process designed to ensure quality, scalability, and long-term success.
        </motion.p>
      </div>

      {/* Sticky Horizontal Scroll Container */}
      {/* 600vh gives us plenty of scrolling room to transition across the 6 stages */}
      <div ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          
          <motion.div 
            style={{ x: xTransform }}
            className="flex h-full w-[600vw]"
          >
            {PROCESS_STAGES.map((stage, idx) => (
              <div key={idx} className="w-[100vw] h-full flex items-center justify-center px-6 md:px-12 lg:px-24">
                <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
                  
                  {/* Background Massive Number */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] lg:text-[30vw] font-bold leading-none text-neutral-100/50 dark:text-neutral-900/50 pointer-events-none select-none z-0 transition-colors duration-300">
                    {stage.num}
                  </div>

                  {/* Content Side */}
                  <div className="flex flex-col justify-center z-10 order-2 lg:order-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
                        <stage.icon className="w-6 h-6 text-neutral-900 dark:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm font-semibold tracking-[0.2em] text-neutral-500 dark:text-neutral-400 uppercase transition-colors duration-300">
                        Stage {stage.num}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-4 lg:mb-6 transition-colors duration-300">
                      {stage.title}
                    </h3>
                    
                    <p className="text-base md:text-2xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 lg:mb-12 max-w-xl transition-colors duration-300">
                      {stage.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 lg:gap-4">
                      {stage.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="group flex items-center gap-2 lg:gap-3 p-2 lg:p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-indigo-500/30 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300 cursor-default">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 group-hover:bg-indigo-500 transition-colors duration-300 flex-shrink-0" />
                          <span className="text-neutral-700 dark:text-neutral-300 font-medium transition-colors duration-300 text-xs lg:text-base leading-tight">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="w-full h-auto lg:h-full flex items-center justify-center z-10 order-1 lg:order-2 mb-4 lg:mb-0">
                    <stage.Visual />
                  </div>

                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}
