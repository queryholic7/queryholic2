"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-background">
      <BackgroundLines className="flex items-center justify-center w-full h-full flex-col px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-500 uppercase mb-6"
        >
          About Us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] max-w-5xl"
        >
          Engineering The Future Through Software, Electronics & Intelligence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mt-8 leading-relaxed"
        >
          Queryholic is a technology company focused on building modern software, intelligent systems, embedded technologies, and engineering solutions that help businesses innovate, automate, and scale.
          <br /><br />
          We believe technology should not only solve problems but create opportunities for growth, efficiency, and long-term impact.
        </motion.p>
      </BackgroundLines>
    </section>
  );
}
