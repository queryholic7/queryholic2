"use client";
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { Search, Network, LayoutTemplate, TerminalSquare, ShieldCheck, Globe, Code2, Database, Rocket } from "lucide-react";
import Globe3D from "@/components/ui/3d-globe";

// --- Advanced Visual Components ---

const DiscoveryVisual = () => {
  return (
    <div className="h-64 md:h-80 w-full rounded-2xl bg-neutral-900 border border-neutral-800 relative overflow-hidden flex items-center justify-center shadow-2xl">
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Radar scanning effect */}
      <div className="absolute w-48 h-48 rounded-full border border-indigo-500/30 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute w-full h-full rounded-full border-t-2 border-indigo-500 opacity-50"
        />
        <div className="w-32 h-32 rounded-full border border-purple-500/30" />
      </div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-32 rounded-full bg-indigo-500/20 blur-2xl absolute"
      />
      <motion.div 
        initial={{ rotate: -10, y: 0 }}
        animate={{ rotate: 10, y: -10 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
        className="relative z-10 w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center"
      >
        <Search className="w-10 h-10 text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
      </motion.div>
    </div>
  )
}

const NetworkGraph = () => {
  return (
    <div className="h-64 md:h-80 w-full rounded-2xl bg-[#030303] border border-neutral-800 relative overflow-hidden flex items-center justify-center p-8 shadow-2xl">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.5)_0,transparent_100%)]" />
      <motion.svg viewBox="0 0 100 100" className="w-full h-full overflow-visible z-10 max-w-[250px]">
        <motion.path 
          d="M 20 50 L 50 20 L 80 50 L 50 80 Z" 
          fill="none" 
          stroke="url(#gradient)" 
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path 
          d="M 20 50 L 80 50 M 50 20 L 50 80" 
          fill="none" 
          stroke="url(#gradient2)" 
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {[ [50,20], [20,50], [80,50], [50,80], [50,50] ].map((pos, i) => (
          <motion.circle 
            key={i} cx={pos[0]} cy={pos[1]} r="4" 
            className="fill-[#030303] stroke-indigo-400"
            strokeWidth="2"
            initial={{ scale: 0 }}
            whileInView={{ scale: [0, 1.2, 1] }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          />
        ))}
      </motion.svg>
    </div>
  )
}

const DesignVisual = () => {
  return (
    <div className="h-64 md:h-80 w-full rounded-2xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-[#030303] border border-neutral-800 relative overflow-hidden flex items-center justify-center p-6">
       <motion.div 
         initial={{ y: 80, opacity: 0, rotateX: 20 }}
         whileInView={{ y: 20, opacity: 1, rotateX: 0 }}
         transition={{ type: "spring", bounce: 0.4, duration: 1 }}
         style={{ transformPerspective: 1000 }}
         className="w-full max-w-sm h-full rounded-t-2xl bg-[#0a0a0a] border-t border-l border-r border-neutral-700 shadow-[0_-10px_40px_rgba(99,102,241,0.3)] flex flex-col pt-3 px-3 gap-3 relative"
       >
         {/* Window controls */}
         <div className="flex gap-1.5 mb-2 px-1">
           <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
           <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
         </div>
         {/* UI Mockup Grid */}
         <div className="flex-1 rounded-t-xl bg-neutral-900 border-t border-l border-r border-neutral-800 p-4 flex flex-col gap-3">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "40%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-4 rounded-md bg-indigo-500/40"
            />
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "80%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-3 rounded-md bg-purple-500/30"
            />
            <div className="flex gap-3 mt-4 h-full">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex-1 rounded-lg bg-neutral-800/80 border border-neutral-700/50"
              />
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex-1 rounded-lg bg-indigo-500/20 border border-indigo-500/30"
              />
            </div>
         </div>
       </motion.div>
    </div>
  )
}

const CodeTyping = () => {
  return (
    <div className="h-64 md:h-80 w-full bg-[#0d1117] rounded-2xl border border-neutral-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-neutral-800">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="text-neutral-500 ml-2 text-xs flex items-center gap-2">
          <TerminalSquare className="w-3 h-3" /> build.sh
        </span>
      </div>
      <div className="p-6 flex-1 overflow-hidden relative">
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: false, margin: "-10%" }}
           transition={{ duration: 0.5 }}
           className="text-green-400 mb-2 flex items-center gap-2"
        >
          <span className="text-fuchsia-400">queryholic</span>@<span className="text-blue-400">system</span>:~$ npm run build
        </motion.div>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: false, margin: "-10%" }}
           transition={{ delay: 0.6 }}
           className="text-neutral-400 space-y-1"
        >
          <p>{`> queryholic@1.0.0 build`}</p>
          <p>{`> next build`}</p>
        </motion.div>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: false, margin: "-10%" }}
           transition={{ delay: 1.2 }}
           className="text-indigo-300 mt-3 space-y-1"
        >
          <p>- info Creating an optimized production build...</p>
          <p>- info Compiled successfully</p>
          <p>- info Collecting page data (5/5)</p>
          <p>- info Generating static pages...</p>
        </motion.div>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: false, margin: "-10%" }}
           transition={{ delay: 2.2 }}
           className="text-emerald-400 mt-4 font-bold flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded border border-emerald-500/20 w-fit"
        >
          <ShieldCheck className="w-4 h-4" /> Ready for deployment.
        </motion.div>
      </div>
    </div>
  )
}

const DeploymentVisual = () => {
  return (
    <div className="h-64 md:h-80 rounded-2xl bg-[#030303] border border-neutral-800 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.2)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <Globe3D 
          config={{ 
            radius: 2, 
            autoRotateSpeed: 1, 
            showAtmosphere: true, 
            atmosphereColor: "#4f46e5",
            globeColor: "#111111",
            bumpScale: 2,
            ambientIntensity: 0.8
          }}
        />
      </div>
      {/* Floating UI element over globe */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl flex items-center gap-3 z-20"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-white text-xs font-semibold tracking-wider uppercase">Systems Online</span>
      </motion.div>
    </div>
  )
}

// --- Main Data & Component ---

const PROCESS_STAGES = [
  {
    title: "Discovery",
    content: (
      <div className="mb-16 md:mb-0">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-normal mb-8 leading-relaxed max-w-lg">
          Every successful project begins with deep understanding. We analyze business goals, technical requirements, challenges, and opportunities to define a crystal-clear path forward.
        </p>
        <DiscoveryVisual />
      </div>
    ),
  },
  {
    title: "Strategy & Architecture",
    content: (
      <div className="mb-16 md:mb-0">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-normal mb-8 leading-relaxed max-w-lg">
          We design the robust foundation of the solution, defining system architecture, workflows, cutting-edge technologies, and implementation strategies for maximum scalability.
        </p>
        <NetworkGraph />
      </div>
    ),
  },
  {
    title: "Design & Prototyping",
    content: (
      <div className="mb-16 md:mb-0">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-normal mb-8 leading-relaxed max-w-lg">
          Abstract ideas are transformed into engaging experiences through thoughtful design, interactive prototyping, and rapid validation before any code is written.
        </p>
        <DesignVisual />
      </div>
    ),
  },
  {
    title: "Engineering",
    content: (
      <div className="mb-16 md:mb-0">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-normal mb-8 leading-relaxed max-w-lg">
          Our developers bring concepts to life through meticulous software development, embedded systems engineering, AI integration, and intelligent technology implementation.
        </p>
        <CodeTyping />
      </div>
    ),
  },
  {
    title: "Deployment & Growth",
    content: (
      <div className="mb-16 md:mb-0">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-normal mb-8 leading-relaxed max-w-lg">
          Once validated, solutions are deployed securely to the cloud, monitored globally, and continuously optimized to support and accelerate your long-term business growth.
        </p>
        <DeploymentVisual />
      </div>
    ),
  },
];

export default function TimelineProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
    
    // Update height on resize
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-[#030303] transition-colors duration-300 md:px-10 font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-32">
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
            Our proven process ensures every project is executed with precision, quality, and scalability in mind. We leave nothing to chance.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {PROCESS_STAGES.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-16"
            >
              {/* Sticky Title (Desktop) */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-12 absolute left-2 md:left-2 w-12 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-lg border border-neutral-200 dark:border-neutral-800">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
                </div>
                <h3 className="hidden md:block text-2xl md:pl-24 md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white/80">
                  {item.title}
                </h3>
              </div>

              {/* Content Box */}
              <div className="relative pl-16 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-900 dark:text-white/80">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          ))}
          
          {/* Scroll Line Background */}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-[2rem] left-[2rem] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            {/* Animated Scroll Progress Line */}
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[4px] -ml-[1px] bg-gradient-to-t from-fuchsia-500 via-indigo-500 to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
