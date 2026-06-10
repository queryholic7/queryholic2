"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-32 bg-neutral-50 dark:bg-neutral-950 overflow-hidden flex items-center justify-center transition-colors duration-300">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_70%)]" />
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Ready to build
            </h2>
            <ContainerTextFlip 
              words={["software", "intelligence", "electronics", "the future"]} 
              className="text-4xl md:text-6xl lg:text-7xl !py-0 !pb-2 mt-2 md:mt-0 !bg-transparent dark:!bg-transparent !shadow-none dark:!shadow-none"
              textClassName="text-neutral-900 dark:text-white"
            />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white">
              ?
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl leading-relaxed">
            Let's discuss your next software, AI, embedded, or engineering project and bring your vision to life.
          </p>
          
          <Link href="mailto:queryholic@gmail.com">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 rounded-full font-semibold text-lg flex items-center space-x-3 overflow-hidden shadow-lg dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-xl dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-neutral-800 dark:bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-700 dark:group-hover:bg-neutral-200 transition-colors">
                <ArrowRight className="w-4 h-4 text-white dark:text-neutral-950 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
