"use client";
import React, { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "motion/react";
import { Search, Network, LayoutTemplate, TerminalSquare, Globe, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const PROCESS_STAGES = [
  {
    num: "01",
    title: "Discovery & Analysis",
    description: "Every successful project begins with deep understanding. We analyze business goals, technical requirements, challenges, and opportunities to define a crystal-clear path forward before writing any code. We leave nothing to chance.",
    icon: Search,
    color: "from-blue-500/20 to-cyan-500/20",
    visual: (
      <div className="w-full h-full flex items-center justify-center relative">
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-48 h-48 rounded-full border border-cyan-500/50"
        />
        <motion.div 
          animate={{ scale: [1, 2, 1], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
          className="absolute w-48 h-48 rounded-full border border-blue-500/30"
        />
        <div className="w-24 h-24 rounded-2xl bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)] z-10">
          <Search className="w-10 h-10 text-cyan-400" />
        </div>
      </div>
    )
  },
  {
    num: "02",
    title: "Strategy & Architecture",
    description: "We design the robust foundation of the solution, defining system architecture, workflows, cutting-edge technologies, and implementation strategies for maximum scalability and future-proofing.",
    icon: Network,
    color: "from-purple-500/20 to-pink-500/20",
    visual: (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2)_0,transparent_100%)]" />
        <motion.svg viewBox="0 0 100 100" className="w-full h-full max-w-[200px] overflow-visible">
          <motion.path 
            d="M 50 20 L 20 50 L 50 80 L 80 50 Z" 
            fill="none" 
            stroke="#c084fc" 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path 
            d="M 20 50 L 80 50 M 50 20 L 50 80" 
            fill="none" 
            stroke="#f472b6" 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
          {[ [50,20], [20,50], [80,50], [50,80], [50,50] ].map((pos, i) => (
            <motion.circle 
              key={i} cx={pos[0]} cy={pos[1]} r="4" 
              className="fill-black stroke-purple-400"
              strokeWidth="2"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: i * 0.2, duration: 1, repeat: Infinity }}
            />
          ))}
        </motion.svg>
      </div>
    )
  },
  {
    num: "03",
    title: "Design & Prototyping",
    description: "Abstract ideas are transformed into engaging experiences through thoughtful UI/UX design, interactive prototyping, and rapid validation. We ensure the user experience is flawless and intuitive.",
    icon: LayoutTemplate,
    color: "from-emerald-500/20 to-teal-500/20",
    visual: (
      <div className="w-full h-full flex items-center justify-center relative perspective-[1000px]">
        <motion.div 
          animate={{ rotateX: [10, -10, 10], rotateY: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-64 bg-black/40 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.2)] flex flex-col p-4 gap-4"
        >
          <div className="w-full h-1/3 rounded-lg bg-emerald-500/20" />
          <div className="w-full flex-1 flex gap-2">
            <div className="h-full w-1/3 rounded-lg bg-teal-500/20" />
            <div className="h-full flex-1 flex flex-col gap-2">
              <div className="w-full flex-1 rounded-lg bg-emerald-500/10" />
              <div className="w-full flex-1 rounded-lg bg-emerald-500/10" />
            </div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    num: "04",
    title: "Engineering",
    description: "Our developers bring concepts to life through meticulous software development, embedded systems engineering, AI integration, and intelligent technology implementation with a strict focus on extreme performance.",
    icon: TerminalSquare,
    color: "from-orange-500/20 to-red-500/20",
    visual: (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="w-64 h-48 bg-[#0a0a0a] rounded-xl border border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.2)] flex flex-col overflow-hidden font-mono text-xs">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-black border-b border-orange-500/20">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <div className="p-4 flex flex-col gap-2 text-orange-400/80">
            <motion.div animate={{ opacity: [0, 1, 1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              {">"} initializing core engine...
            </motion.div>
            <motion.div animate={{ opacity: [0, 0, 1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              {">"} compiling microservices...
            </motion.div>
            <motion.div animate={{ opacity: [0, 0, 0, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              {">"} [OK] Systems ready.
            </motion.div>
            <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }} className="w-2 h-4 bg-orange-400 mt-1" />
          </div>
        </div>
      </div>
    )
  },
  {
    num: "05",
    title: "Deployment & Growth",
    description: "Once validated, solutions are deployed securely to the cloud, monitored globally, and continuously optimized to support and accelerate your long-term business growth.",
    icon: Globe,
    color: "from-indigo-500/20 to-violet-500/20",
    visual: (
      <div className="w-full h-full flex items-center justify-center relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 rounded-full border border-indigo-500/20 border-dashed"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 rounded-full border border-violet-500/30"
        />
        <div className="w-24 h-24 rounded-full bg-indigo-500/20 backdrop-blur-xl border border-indigo-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.4)] z-10">
          <Globe className="w-10 h-10 text-indigo-400" />
        </div>
      </div>
    )
  }
];

export default function StickyScrollProcess() {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  
  const cardLength = PROCESS_STAGES.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = PROCESS_STAGES.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Background colors array mapped to each stage for smooth transitions
  const backgroundColors = [
    "bg-[#0a0a0f]", // Deep Blue/Cyan tone
    "bg-[#0f0a14]", // Deep Purple/Pink tone
    "bg-[#0a120f]", // Deep Emerald tone
    "bg-[#140a05]", // Deep Orange/Red tone
    "bg-[#0a0514]", // Deep Indigo tone
  ];

  return (
    <motion.section 
      animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
      transition={{ duration: 0.5 }}
      className="relative w-full transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-16">
          <div className="text-xs font-semibold tracking-[0.25em] text-white/50 uppercase mb-4">
            Methodology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl">
            The way we build.
          </h2>
        </div>
      </div>

      <motion.div
        ref={ref}
        className="h-[300vh] w-full relative flex justify-center"
      >
        <div className="sticky top-0 h-screen w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-10 lg:gap-20">
          
          {/* Left: Scrollable Text Area */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center h-full relative">
            <div className="absolute inset-y-0 left-0 w-1 bg-white/5 rounded-full">
               <motion.div 
                 className="w-full bg-white/50 rounded-full transition-all duration-300"
                 style={{ 
                   height: `${100 / cardLength}%`,
                   transform: `translateY(${activeCard * 100}%)`
                 }}
               />
            </div>
            
            <div className="pl-8 relative h-[40vh] md:h-[50vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl md:text-8xl font-black text-white/10 tracking-tighter">
                      {PROCESS_STAGES[activeCard].num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                      {React.createElement(PROCESS_STAGES[activeCard].icon, { className: "w-6 h-6 text-white/80" })}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                    {PROCESS_STAGES[activeCard].title}
                  </h3>
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-md">
                    {PROCESS_STAGES[activeCard].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Sticky Visual Area */}
          <div className="hidden lg:flex w-1/2 h-[70vh] items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={cn(
                  "absolute inset-0 rounded-3xl bg-gradient-to-br border border-white/10 overflow-hidden shadow-2xl",
                  PROCESS_STAGES[activeCard].color
                )}
              >
                {PROCESS_STAGES[activeCard].visual}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
