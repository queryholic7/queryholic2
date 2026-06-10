"use client";

import React from "react";
import { motion } from "motion/react";
import { Target, Lightbulb } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-neutral-950 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8">
              <Target className="w-7 h-7 text-indigo-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
              To build intelligent digital and engineering solutions that empower businesses to innovate, automate, and grow with confidence.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8">
              <Lightbulb className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
              Our Vision
            </h3>
            <p className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
              To become a leading technology company that bridges software, electronics, artificial intelligence, and engineering to create the next generation of intelligent systems.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
