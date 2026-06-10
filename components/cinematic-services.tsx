"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Monitor, Cpu, Code2, Layers, Cpu as Microchip, Radio, BatteryCharging, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// --- VISUAL COMPONENTS (Abstract Premium Mockups) ---

const SoftwareVisual = () => (
  <div className="relative w-full aspect-video md:aspect-video max-w-2xl mx-auto flex items-center justify-center mt-8 lg:mt-0">
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl" />
    <motion.div 
      animate={{ y: [-10, 10, -10] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="relative w-4/5 h-3/5 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-2xl shadow-xl dark:shadow-2xl overflow-hidden flex flex-col transition-colors duration-300"
    >
      <div className="h-10 border-b border-neutral-200 dark:border-white/10 flex items-center px-4 gap-2 transition-colors duration-300">
        <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/20 transition-colors duration-300" />
        <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/20 transition-colors duration-300" />
        <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/20 transition-colors duration-300" />
      </div>
      <div className="flex-1 p-6 flex gap-6">
        <div className="w-1/3 h-full rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 transition-colors duration-300" />
        <div className="flex-1 flex flex-col gap-4">
          <div className="w-full h-1/2 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 dark:from-indigo-500/20 dark:to-purple-500/10 border border-black/5 dark:border-white/5 transition-colors duration-300" />
          <div className="w-full h-1/2 flex gap-4">
            <div className="flex-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 transition-colors duration-300" />
            <div className="flex-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const AIVisual = () => {
  const inputNodes = [
    { id: "i1", x: 15, y: 30 }, { id: "i2", x: 15, y: 50 }, { id: "i3", x: 15, y: 70 }
  ];
  const hidden1Nodes = [
    { id: "h11", x: 40, y: 20 }, { id: "h12", x: 40, y: 40 }, { id: "h13", x: 40, y: 60 }, { id: "h14", x: 40, y: 80 }
  ];
  const hidden2Nodes = [
    { id: "h21", x: 65, y: 30 }, { id: "h22", x: 65, y: 50 }, { id: "h23", x: 65, y: 70 }
  ];
  const outputNodes = [
    { id: "o1", x: 85, y: 40 }, { id: "o2", x: 85, y: 60 }
  ];

  const allNodes = [...inputNodes, ...hidden1Nodes, ...hidden2Nodes, ...outputNodes];
  
  const connections = [
    ...inputNodes.flatMap(i => hidden1Nodes.map(h => ({ id: `${i.id}-${h.id}`, from: i, to: h }))),
    ...hidden1Nodes.flatMap(h1 => hidden2Nodes.map(h2 => ({ id: `${h1.id}-${h2.id}`, from: h1, to: h2 }))),
    ...hidden2Nodes.flatMap(h2 => outputNodes.map(o => ({ id: `${h2.id}-${o.id}`, from: h2, to: o })))
  ];

  // Predefined delays to avoid hydration mismatches
  const delays = [0.2, 0.8, 1.5, 0.5, 2.1, 1.1, 0.3, 1.8, 0.9, 1.4, 0.7, 2.5, 0.1, 1.9, 0.6, 2.2, 1.3, 0.4, 2.0, 1.7, 1.0, 1.6, 2.3, 1.2, 2.4];

  return (
    <div className="relative w-full aspect-video md:aspect-video max-w-2xl mx-auto flex items-center justify-center overflow-hidden mt-8 lg:mt-0">
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 via-transparent to-fuchsia-500/10 rounded-full blur-3xl" />
      
      <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] border border-neutral-200 dark:border-white/10 bg-white/40 dark:bg-black/20 rounded-2xl backdrop-blur-md shadow-xl flex items-center justify-center transition-colors duration-300 p-6 md:p-8">
        
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          {/* Connections */}
          {connections.map((conn, idx) => {
            const delay = delays[idx % delays.length];
            return (
              <motion.line
                key={conn.id}
                x1={conn.from.x} y1={conn.from.y}
                x2={conn.to.x} y2={conn.to.y}
                stroke="currentColor"
                className="text-purple-400/20 dark:text-purple-500/30 transition-colors duration-300"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1],
                  opacity: [0.1, 0.8, 0.1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2 + delay,
                  delay: delay,
                  ease: "easeInOut"
                }}
              />
            );
          })}

          {/* Nodes */}
          {allNodes.map((node, idx) => {
            const delay = delays[(idx + 5) % delays.length];
            return (
              <motion.circle
                key={node.id}
                cx={node.x}
                cy={node.y}
                r="2"
                className="fill-neutral-900 dark:fill-white stroke-purple-500/50 transition-colors duration-300"
                strokeWidth="1"
                animate={{
                  r: [2, 3, 2],
                  filter: [
                    "drop-shadow(0px 0px 2px rgba(168,85,247,0.3))", 
                    "drop-shadow(0px 0px 8px rgba(168,85,247,0.8))", 
                    "drop-shadow(0px 0px 2px rgba(168,85,247,0.3))"
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5 + delay,
                  delay: delay,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </svg>

      </div>
    </div>
  );
};

const EmbeddedVisual = () => (
  <div className="relative w-full aspect-video md:aspect-video max-w-2xl mx-auto flex items-center justify-center overflow-hidden mt-8 lg:mt-0">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10 rounded-full blur-3xl" />
    <motion.div 
      animate={{ y: [10, -10, 10] }}
      transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      className="relative w-[220px] h-[220px] md:w-[360px] md:h-[360px] rounded-2xl border-2 border-emerald-500/20 bg-emerald-50/50 dark:bg-[#0a1510] backdrop-blur-2xl shadow-xl dark:shadow-2xl flex items-center justify-center overflow-hidden transition-colors duration-300"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:20px_20px] transition-colors duration-300" />
      
      {/* Microchip */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg bg-white dark:bg-black border border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.1)] dark:shadow-[0_0_30px_rgba(16,185,129,0.15)] z-10 transition-colors duration-300">
        <Microchip className="w-8 h-8 md:w-12 md:h-12 text-emerald-600 dark:text-emerald-500/80 transition-colors duration-300" />
        
        {/* Chip pins */}
        <div className="absolute -top-2 left-4 right-4 h-2 flex justify-between">
          {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-full bg-emerald-500/40" />)}
        </div>
        <div className="absolute -bottom-2 left-4 right-4 h-2 flex justify-between">
          {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-full bg-emerald-500/40" />)}
        </div>
        <div className="absolute -left-2 top-4 bottom-4 w-2 flex flex-col justify-between">
          {[1,2,3,4,5].map(i => <div key={i} className="h-1.5 w-full bg-emerald-500/40" />)}
        </div>
        <div className="absolute -right-2 top-4 bottom-4 w-2 flex flex-col justify-between">
          {[1,2,3,4,5].map(i => <div key={i} className="h-1.5 w-full bg-emerald-500/40" />)}
        </div>
      </div>
    </motion.div>
  </div>
);

const IoTVisual = () => (
  <div className="relative w-full aspect-video md:aspect-video max-w-2xl mx-auto flex items-center justify-center overflow-hidden mt-8 lg:mt-0">
    <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 via-transparent to-blue-500/10 rounded-full blur-3xl" />
    <motion.div 
      animate={{ scale: [0.95, 1.05, 0.95] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-sky-500/20 border-dashed animate-[spin_30s_linear_infinite]" />
      <div className="absolute w-28 h-28 md:w-40 md:h-40 rounded-full border border-sky-500/30 animate-[spin_20s_linear_infinite_reverse]" />
      
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/30 flex items-center justify-center backdrop-blur-md z-10 shadow-[0_0_40px_rgba(14,165,233,0.15)] dark:shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-colors duration-300">
        <Radio className="w-6 h-6 md:w-8 md:h-8 text-sky-600 dark:text-sky-400 transition-colors duration-300" />
      </div>
      
      {/* Floating nodes */}
      <motion.div animate={{ y: [-15, 15, -15], x: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-1/4 left-1/4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white dark:bg-black border border-neutral-200 dark:border-white/10 flex items-center justify-center backdrop-blur-md shadow-sm transition-colors duration-300">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-sky-500 dark:bg-sky-400 transition-colors duration-300" />
      </motion.div>
      <motion.div animate={{ y: [15, -15, 15], x: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute bottom-1/4 right-1/4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-black border border-neutral-200 dark:border-white/10 flex items-center justify-center backdrop-blur-md shadow-sm transition-colors duration-300">
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500 dark:bg-blue-400 transition-colors duration-300" />
      </motion.div>
    </motion.div>
  </div>
);

const EnergyVisual = () => (
  <div className="relative w-full aspect-video md:aspect-video max-w-2xl mx-auto flex items-center justify-center overflow-hidden mt-8 lg:mt-0">
    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-orange-500/10 rounded-full blur-3xl" />
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px] flex items-center justify-center"
    >
      <div className="absolute inset-0 rounded-full border-4 border-t-amber-500 border-r-orange-500 border-b-transparent border-l-transparent opacity-50" />
      <div className="absolute inset-4 rounded-full border-2 border-dashed border-amber-500/30" />
      
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/5 dark:from-amber-500/20 dark:to-orange-500/5 border border-amber-500/30 flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.1)] dark:shadow-[0_0_50px_rgba(245,158,11,0.2)] transition-colors duration-300">
        <BatteryCharging className="w-8 h-8 md:w-10 md:h-10 text-amber-600 dark:text-amber-500 transition-colors duration-300" />
      </motion.div>
    </motion.div>
  </div>
);


// --- PROCESS DATA ---

const SERVICE_STAGES = [
  {
    num: "01",
    title: "Software Solutions",
    description: "Building modern websites, applications, digital platforms, and user experiences engineered for performance and scalability.",
    services: ["Website Development", "Landing Page Development", "Web Applications", "Mobile Applications", "UI/UX Design"],
    Visual: SoftwareVisual
  },
  {
    num: "02",
    title: "Artificial Intelligence",
    description: "Creating intelligent systems that automate workflows, improve decision-making, and unlock new business opportunities.",
    services: ["AI Solutions", "Workflow Automation", "Intelligent Systems"],
    Visual: AIVisual
  },
  {
    num: "03",
    title: "Embedded Systems",
    description: "Designing custom electronics, firmware, and embedded solutions for modern products and industrial applications.",
    services: ["PCB Design", "Firmware Development", "Microcontroller Programming"],
    Visual: EmbeddedVisual
  },
  {
    num: "04",
    title: "IoT & Automation",
    description: "Connecting devices, sensors, and cloud systems to create intelligent and automated ecosystems.",
    services: ["IoT Systems", "Sensor Integration", "Monitoring Platforms", "Smart Automation"],
    Visual: IoTVisual
  },
  {
    num: "05",
    title: "Energy & EV Technologies",
    description: "Developing smart energy systems, EV solutions, and next-generation engineering technologies for a sustainable future.",
    services: ["Smart Energy Systems", "Solar Solutions", "EV Solutions", "AI + Electronics Systems"],
    Visual: EnergyVisual
  }
];

// --- MAIN COMPONENT ---

const CubeSlide = ({ stage, index, scrollYProgress, total }: any) => {
  const getRanges = (i: number, t: number) => {
    const step = 1 / (t - 1);
    
    if (i === 0) {
      return {
        rotIn: [0, step],
        rotOut: [0, 90], // Exit to the right
        opIn: [0, step / 4, step],
        opOut: [1, 1, 0]
      };
    }
    
    if (i === t - 1) {
      return {
        rotIn: [1 - step, 1],
        rotOut: [-90, 0], // Enter from the left
        opIn: [1 - step, 1 - step / 4, 1],
        opOut: [0, 1, 1]
      };
    }
    
    return {
      rotIn: [(i - 1) * step, i * step, (i + 1) * step],
      rotOut: [-90, 0, 90], // Enter from left (-90), exit to right (90)
      opIn: [(i - 1) * step, i * step - step / 4, i * step + step / 4, (i + 1) * step],
      opOut: [0, 1, 1, 0]
    };
  };

  const { rotIn, rotOut, opIn, opOut } = getRanges(index, total);

  // -90deg (left) -> 0deg (front) -> 90deg (right)
  const rotateY = useTransform(scrollYProgress, rotIn, rotOut);
  
  // Fade in/out to prevent overlap visibility artifacts
  const opacity = useTransform(scrollYProgress, opIn, opOut);

  return (
    <motion.div
      style={{
        rotateY,
        opacity,
        transformOrigin: "50% 50% 50vw", // Origin pushed forward by 50vw to create inward fold
        position: "absolute",
        inset: 0,
      }}
      className="w-full h-full flex items-center justify-center bg-neutral-50 dark:bg-[#030303]"
    >
      <div className="w-[100vw] h-full flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24 items-center">
          
          {/* Background Massive Number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] lg:text-[30vw] font-bold leading-none text-neutral-200/40 dark:text-white/5 pointer-events-none select-none z-0 transition-colors duration-300">
            {stage.num}
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-start z-10 order-2 lg:order-1 h-auto lg:h-[500px]">
            {/* Invisible spacer to maintain vertical layout consistency with the fixed overlay */}
            <div className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 opacity-0 pointer-events-none select-none hidden lg:block">
              Our Services
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-2 md:mb-6 transition-colors duration-300"
            >
              {stage.title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-xl md:text-2xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 lg:mb-10 max-w-xl transition-colors duration-300"
            >
              {stage.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-2 lg:gap-4"
            >
              {stage.services.map((service: string, sIdx: number) => (
                <motion.div 
                  key={sIdx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 + (sIdx * 0.1), ease: "easeOut" }}
                  className="group flex items-center gap-2 lg:gap-3 p-2 lg:p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-indigo-500/30 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300 cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 group-hover:bg-indigo-500 transition-colors duration-300 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium transition-colors duration-300 text-xs lg:text-base leading-tight">{service}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="w-full h-auto lg:h-full flex items-center justify-center z-10 order-1 lg:order-2 px-8 lg:px-0 mb-4 lg:mb-0">
            <stage.Visual />
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default function CinematicServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create the horizontal scroll effect mapping scrollY to x displacement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // 5 stages = 5 screens wide. We want to scroll from 0 to -80% (which is 4/5 of the width)
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section id="services" className="relative w-full bg-neutral-50 dark:bg-[#030303] text-neutral-900 dark:text-white selection:bg-black/10 dark:selection:bg-white/20 transition-colors duration-300">
      
      {/* Sticky 3D Cube Container */}
      <div ref={containerRef} className="h-[500vh] relative">
        <div 
          className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-neutral-50 dark:bg-[#030303]"
          style={{ perspective: "1500px" }}
        >
          {/* FIXED 'OUR SERVICES' OVERLAY */}
          <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center px-6 md:px-12 lg:px-24">
            <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24 items-center">
              <div className="relative w-full h-[350px] lg:h-[500px] order-2 lg:order-1 flex flex-col justify-start">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm md:text-base font-semibold tracking-[0.3em] text-neutral-500 dark:text-neutral-400 uppercase"
                >
                  Our Services
                </motion.p>
              </div>
              <div className="order-1 lg:order-2" />
            </div>
          </div>

          {SERVICE_STAGES.map((stage, idx) => (
            <CubeSlide 
              key={idx} 
              stage={stage} 
              index={idx} 
              total={SERVICE_STAGES.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
      
    </section>
  );
}
