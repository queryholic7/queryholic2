"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-24 pb-12 md:pt-32 md:pb-20">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-[50vh] md:min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center z-10"
        >
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-400 text-4xl md:text-6xl lg:text-7xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight mb-6">
            Let's Build Something <span className="text-indigo-500">Exceptional</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-xl text-neutral-600 dark:text-neutral-400 text-center">
            Whether you're building a software platform, embedded system, AI solution, IoT product, or engineering project, we're here to help bring your vision to life.
          </p>
        </motion.div>
      </BackgroundLines>
    </section>
  );
}
