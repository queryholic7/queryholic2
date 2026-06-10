"use client";

import React from "react";
import { motion } from "motion/react";
import { Code, Settings, Zap, Compass } from "lucide-react";

const differentiators = [
  {
    title: "Software + Engineering Expertise",
    description: "Combining software development, embedded systems, AI, and electronics under one company.",
    icon: Code,
  },
  {
    title: "End-to-End Development",
    description: "From idea and design to deployment and support.",
    icon: Settings,
  },
  {
    title: "Future-Ready Solutions",
    description: "Built using modern technologies designed for long-term growth.",
    icon: Zap,
  },
  {
    title: "Innovation-Driven Approach",
    description: "Focused on creating practical solutions powered by modern technology.",
    icon: Compass,
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-neutral-50 dark:bg-[#030303] border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-500 uppercase mb-4">
            Our Differentiator
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
            What Makes Us <span className="text-neutral-500 dark:text-neutral-400">Different</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative flex flex-col p-8 rounded-[2rem] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
