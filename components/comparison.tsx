"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  AlertCircle,
  Diamond,
  Cpu,
  Lightbulb,
  Layers,
  MessageCircle,
  Send,
  Handshake
} from "lucide-react";

const comparisonFeatures = [
  {
    title: "Approach",
    icon: Diamond,
    us: "Engineering, design & hardware in sync",
    them: "Disconnected and siloed teams"
  },
  {
    title: "Process",
    icon: Cpu,
    us: "Streamlined, transparent & efficient",
    them: "Endless calls, vague timelines"
  },
  {
    title: "Philosophy",
    icon: Lightbulb,
    us: "Modern, purposeful & scalable",
    them: "Trend-based and cluttered"
  },
  {
    title: "Tech Stack",
    icon: Layers,
    us: "Built with modern frameworks",
    them: "Outdated legacy stacks"
  },
  {
    title: "Communication",
    icon: MessageCircle,
    us: "Clear updates & direct access",
    them: "Multiple middlemen & delays"
  },
  {
    title: "Deliverables",
    icon: Send,
    us: "Production-ready robust systems",
    them: "Incomplete handoffs"
  },
  {
    title: "Support",
    icon: Handshake,
    us: "Long-term partnership mindset",
    them: "One-and-done projects"
  }
];

export default function Comparison() {
  const [mobileView, setMobileView] = useState<"us" | "them">("us");

  return (
    <section className="relative w-full py-24 md:py-32 bg-white dark:bg-[#030303]">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1] text-center md:text-left"
          >
            Queryholic VS <span className="text-neutral-500 dark:text-neutral-400 block md:inline mt-2 md:mt-0">Traditional Providers</span>
          </motion.h2>
        </div>

        {/* Desktop Table Container (Hidden on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex w-full overflow-hidden flex-col rounded-[2rem] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] shadow-xl shadow-neutral-200/50 dark:shadow-none"
        >
          {/* Header Row */}
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] border-b border-neutral-200 dark:border-neutral-800">
            <div className="bg-neutral-50 dark:bg-[#111] p-6 lg:p-8 flex items-center border-r border-neutral-200 dark:border-neutral-800">
              {/* Empty top-left cell */}
            </div>
            <div className="p-6 lg:p-8 flex items-center space-x-3 border-r border-neutral-200 dark:border-neutral-800 bg-indigo-50/30 dark:bg-indigo-500/5">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-500/20">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">Queryholic</span>
            </div>
            <div className="p-6 lg:p-8 flex items-center">
              <span className="text-lg font-medium text-neutral-500 dark:text-neutral-400">Traditional Service Providers</span>
            </div>
          </div>

          {/* Feature Rows */}
          {comparisonFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-[1fr_1.5fr_1.5fr] transition-colors hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 ${
                index !== comparisonFeatures.length - 1 ? "border-b border-neutral-200 dark:border-neutral-800" : ""
              }`}
            >
              <div className="bg-neutral-50 dark:bg-[#111] p-6 lg:p-8 flex items-center space-x-4 border-r border-neutral-200 dark:border-neutral-800">
                <feature.icon className="w-5 h-5 text-neutral-500" />
                <span className="font-semibold text-neutral-900 dark:text-neutral-200">{feature.title}</span>
              </div>
              
              <div className="p-6 lg:p-8 flex items-center space-x-4 border-r border-neutral-200 dark:border-neutral-800 bg-indigo-50/10 dark:bg-indigo-500/5">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-neutral-900 dark:text-neutral-100 font-medium">{feature.us}</span>
              </div>

              <div className="p-6 lg:p-8 flex items-center space-x-4">
                <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 opacity-80" />
                <span className="text-neutral-500 dark:text-neutral-400">{feature.them}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile Interactive Toggle Container (Hidden on desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:hidden flex flex-col items-center w-full"
        >
          
          {/* Custom Toggle Switch */}
          <div className="relative flex w-full max-w-sm rounded-full bg-neutral-100 dark:bg-neutral-900 p-1.5 mb-8 shadow-inner border border-neutral-200 dark:border-neutral-800">
            <button 
              onClick={() => setMobileView("us")} 
              className={`flex-1 rounded-full py-3.5 text-sm font-bold z-10 transition-colors duration-300 ${mobileView === "us" ? "text-white" : "text-neutral-500 dark:text-neutral-400"}`}
            >
              Queryholic
            </button>
            <button 
              onClick={() => setMobileView("them")} 
              className={`flex-1 rounded-full py-3.5 text-sm font-bold z-10 transition-colors duration-300 ${mobileView === "them" ? "text-white" : "text-neutral-500 dark:text-neutral-400"}`}
            >
              Others
            </button>
            
            {/* Animated Pill Background */}
            <motion.div 
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full z-0 shadow-md ${mobileView === "us" ? "bg-indigo-600" : "bg-neutral-800 dark:bg-neutral-700"}`}
              animate={{ 
                left: mobileView === "us" ? "6px" : "calc(50%)" 
              }}
            />
          </div>

          {/* List Content */}
          <div className="w-full relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileView}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-4 w-full absolute inset-0"
              >
                {comparisonFeatures.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-center gap-4 p-5 rounded-2xl border shadow-sm transition-colors ${
                      mobileView === "us" 
                        ? "bg-white dark:bg-[#0a0a0a] border-indigo-100 dark:border-indigo-500/20 shadow-indigo-500/5" 
                        : "bg-neutral-50 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800"
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl ${mobileView === "us" ? "bg-indigo-50 dark:bg-indigo-500/10" : "bg-neutral-200 dark:bg-neutral-800"}`}>
                      <feature.icon className={`w-5 h-5 ${mobileView === "us" ? "text-indigo-600 dark:text-indigo-400" : "text-neutral-500 dark:text-neutral-400"}`} />
                    </div>
                    
                    <div className="flex flex-col flex-1">
                      <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-1">{feature.title}</span>
                      <span className={`text-sm font-semibold leading-snug ${mobileView === "us" ? "text-neutral-900 dark:text-white" : "text-neutral-600 dark:text-neutral-400"}`}>
                        {mobileView === "us" ? feature.us : feature.them}
                      </span>
                    </div>
                    
                    <div className="ml-2 flex-shrink-0">
                      {mobileView === "us" ? (
                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-500/20 flex items-center justify-center">
                          <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
