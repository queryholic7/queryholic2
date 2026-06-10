"use client";

import React from "react";
import { motion } from "motion/react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

const capabilities = [
  {
    title: "Software Engineering",
    description: "Websites, applications, platforms, and digital experiences.",
  },
  {
    title: "Artificial Intelligence",
    description: "AI-powered systems, automation, and intelligent workflows.",
  },
  {
    title: "Embedded Systems",
    description: "PCB design, firmware development, and custom electronics.",
  },
  {
    title: "IoT Technologies",
    description: "Connected devices, monitoring systems, and automation platforms.",
  },
  {
    title: "Energy & EV Technologies",
    description: "Smart energy systems, renewable solutions, and electric vehicle technologies.",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-500 uppercase mb-4">
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
            Core <span className="text-neutral-500 dark:text-neutral-400">Capabilities</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-6 relative h-[24rem] group"
            >
              <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-full h-48 mb-4">
                <EvervaultCard text={item.title} />
              </div>

              <h3 className="dark:text-white text-black mt-4 text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-sm dark:text-neutral-400 text-neutral-600 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
