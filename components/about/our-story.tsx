"use client";

import React from "react";
import { motion } from "motion/react";
import Globe3DDemo from "@/components/3d-globe-demo";

export default function OurStory() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-500 uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
              Where Innovation <br />
              <span className="text-neutral-500 dark:text-neutral-400">Meets Engineering</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed"
          >
            <p className="mb-4 md:mb-6">
              Queryholic was founded with a simple vision: to bridge the gap between software, electronics, and emerging technologies.
            </p>
            <p className="hidden md:block mb-6">
              While many companies focus solely on software or hardware, we bring both worlds together to create integrated solutions that solve real-world challenges.
            </p>
            <p>
              From websites and applications to embedded systems, IoT platforms, AI solutions, and smart engineering technologies, our goal is to help businesses build smarter and operate more efficiently.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full aspect-video md:aspect-auto md:h-[600px] rounded-[2rem] overflow-hidden border border-border bg-neutral-100 dark:bg-neutral-900 shadow-2xl"
        >
          <div className="absolute inset-0 z-0">
            <Globe3DDemo />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>
    </section>
  );
}
