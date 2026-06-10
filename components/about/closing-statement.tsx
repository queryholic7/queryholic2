"use client";

import React from "react";
import { motion } from "motion/react";

export default function ClosingStatement() {
  return (
    <section className="relative w-full py-32 md:py-48 bg-background flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 text-center z-10">
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-relaxed md:leading-relaxed lg:leading-relaxed"
        >
          At Queryholic, we don't just develop technology.
          <br /><br />
          <span className="font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            We engineer solutions
          </span>{" "}
          that connect ideas, intelligence, and innovation to create meaningful impact.
        </motion.p>
      </div>
    </section>
  );
}
