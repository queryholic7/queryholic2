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
  
  // Track scroll progress within the tall container
  // "start center" means p=0 when top of container reaches center of viewport
  // "end center" means p=1 when bottom of container reaches center of viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const stepHeight = 800; // Height of each drop
  const numSteps = 5; // 6 stages = 5 drops
  
  // X values for the ball (10% to 90%)
  const ballX = useTransform(
    scrollYProgress,
    [0, 1/11, 2/11, 3/11, 4/11, 5/11, 6/11, 7/11, 8/11, 9/11, 10/11, 1],
    ["10%", "90%", "90%", "10%", "10%", "90%", "90%", "10%", "10%", "90%", "90%", "10%"]
  );

  // Y values for the ball (in pixels)
  const ballY = useTransform(
    scrollYProgress,
    [0, 1/11, 2/11, 3/11, 4/11, 5/11, 6/11, 7/11, 8/11, 9/11, 10/11, 1],
    [
      0, 
      0, 
      stepHeight, 
      stepHeight, 
      stepHeight * 2, 
      stepHeight * 2, 
      stepHeight * 3, 
      stepHeight * 3, 
      stepHeight * 4, 
      stepHeight * 4, 
      stepHeight * 5, 
      stepHeight * 5
    ]
  );

  return (
    <section id="our-process" className="relative w-full bg-white dark:bg-black transition-colors duration-300 py-24 md:py-32 overflow-hidden">
      
      {/* Intro Header Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mb-24 md:mb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm font-semibold tracking-[0.3em] text-neutral-500 dark:text-neutral-400 uppercase mb-6"
        >
          Our Methodology
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-neutral-900 dark:text-white"
        >
          Engineering Excellence <br className="hidden md:block" />
          <span className="text-neutral-400 dark:text-neutral-500">Through Every Stage.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl font-light text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed"
        >
          From concept to deployment, every solution is built through a carefully structured process designed to ensure quality, scalability, and long-term success.
        </motion.p>
      </div>

      {/* Staircase Container */}
      {/* We use a tall relative container so scrolling feels natural, and the ball follows the scroll */}
      <div 
        ref={containerRef} 
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-64"
        style={{ height: `${stepHeight * numSteps}px` }}
      >
        
        {/* === THE STAIRS (BACKGROUND TRACK) === */}
        {/* We use absolute divs to draw the zigzag borders */}
        {Array.from({ length: numSteps }).map((_, i) => {
          const isRightDrop = i % 2 === 0;
          return (
            <div 
              key={`stair-${i}`}
              className={cn(
                "absolute left-[10%] w-[80%] border-neutral-100 dark:border-neutral-900",
                isRightDrop ? "border-t-4 border-r-4" : "border-t-4 border-l-4"
              )}
              style={{
                top: i * stepHeight,
                height: stepHeight,
              }}
            />
          );
        })}
        {/* Final bottom step (horizontal line only) */}
        <div 
          className="absolute left-[10%] w-[80%] border-t-4 border-neutral-100 dark:border-neutral-900"
          style={{ top: numSteps * stepHeight }}
        />

        {/* === THE ROLLING BALL === */}
        <motion.div 
          className="absolute w-6 h-6 rounded-full bg-white dark:bg-black border-[5px] border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,1)] z-30"
          style={{ 
            left: ballX, 
            top: ballY,
            x: "-50%", // Center the ball on the line horizontally
            y: "-50%"  // Center the ball on the line vertically
          }}
        />

        {/* === STAGE CONTENT === */}
        {PROCESS_STAGES.map((stage, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <div 
              key={`content-${idx}`} 
              className="absolute left-[10%] w-[80%] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-16 md:pt-24 px-4 md:px-16"
              style={{
                top: idx * stepHeight,
                height: stepHeight,
              }}
            >
              
              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.7 }}
                className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-start md:text-left order-2 md:order-1' : 'md:items-end md:text-right order-2'}`}
              >
                <div className={`flex items-center gap-4 mb-5 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 shadow-sm transition-colors duration-300">
                    <stage.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="text-sm font-semibold tracking-[0.2em] text-neutral-500 dark:text-neutral-400 uppercase">
                    Stage {stage.num}
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-4">
                  {stage.title}
                </h3>
                
                <p className={`text-base md:text-lg font-light text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-lg ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  {stage.description}
                </p>
                
                <div className={`flex flex-wrap gap-3 w-full max-w-lg ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  {stage.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300 font-medium text-xs lg:text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Visual Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`w-full md:w-1/2 flex items-center justify-center ${isEven ? 'order-1 md:order-2' : 'order-1'}`}
              >
                <stage.Visual />
              </motion.div>
              
            </div>
          );
        })}

      </div>
      
    </section>
  );
}
