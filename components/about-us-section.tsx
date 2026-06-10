"use client";

import React from "react";
import { motion } from "motion/react";
import { Zap, Cpu, Brain, Network } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function AboutUsSection() {
  const links = [
    {
      title: "Software Solutions",
      icon: <Zap className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Embedded Systems",
      icon: <Cpu className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "AI Integration",
      icon: <Brain className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "IoT Technologies",
      icon: <Network className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start max-w-5xl mx-auto">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.15] md:leading-[1.15]"
          >
            Queryholic engineers digital and <br className="hidden md:block" />
            hardware solutions for the modern world.
            <span className="block text-neutral-400 dark:text-neutral-500 font-bold mt-1 md:mt-2">
              We build custom software, embedded, <br className="hidden md:block" />
              AI, and IoT systems for growth.
            </span>
          </motion.h2>

          {/* Desktop Floating Dock */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:block mt-16 md:mt-24 w-full max-w-5xl"
          >
            <FloatingDock 
              items={links} 
              desktopClassName="w-full justify-around px-12 bg-neutral-100 dark:bg-neutral-900/50"
              mobileClassName="hidden"
            />
          </motion.div>

          {/* Mobile Grid Fallback */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:hidden mt-12 w-full grid grid-cols-2 gap-8"
          >
            {links.map((link, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-sm">
                  <div className="h-7 w-7 text-neutral-600 dark:text-neutral-300">
                    {link.icon}
                  </div>
                </div>
                <span className="text-sm font-medium text-center text-foreground">
                  {link.title}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
