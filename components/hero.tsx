"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const images = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", // Microchip
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", // Server room
  "https://images.unsplash.com/photo-1517077304055-6e89babf8ee7?auto=format&fit=crop&w=800&q=80", // Circuit board
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", // Earth / Connectivity
  "https://images.unsplash.com/photo-1518932945647-7a3c96924ab7?auto=format&fit=crop&w=800&q=80", // Robot
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", // Tech code
  "https://images.unsplash.com/photo-1531297172866-08eaeb59a1f1?auto=format&fit=crop&w=800&q=80", // Code screen
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // Data / Tech
  "https://images.unsplash.com/photo-1593349480506-8433634cb024?auto=format&fit=crop&w=800&q=80", // EV Charger
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80", // Laptop / Coding
  "https://images.unsplash.com/photo-1555664424-778a1f5e1b48?auto=format&fit=crop&w=800&q=80", // Smart AI
  "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80", // Drone / IoT
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", // Engineering lab
  "https://images.unsplash.com/photo-1518432031352-d6fc5c10da59?auto=format&fit=crop&w=800&q=80", // Smart energy / Grid
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80", // Tech workspace
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80", // Servers
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", // Modern architecture / Scale
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80", // VR / Future tech
  "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80", // Robotics
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Software team
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80", // IoT Smart Home
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80", // AI Abstract
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80", // Network
  "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80", // Electronics
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // Data graphs
  "https://images.unsplash.com/photo-1553341640-6b28f1e58f09?auto=format&fit=crop&w=800&q=80", // Electric vehicle
];

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center overflow-hidden bg-background py-28 md:py-36 w-full text-foreground transition-colors duration-300">
      {/* Background 3D Marquee component */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-15 dark:opacity-40 z-0"
        style={{
          maskImage: "radial-gradient(circle at center, black 15%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 15%, transparent 75%)"
        }}
      >
        <ThreeDMarquee images={images} className="absolute inset-0 w-full h-full !h-full border-none rounded-none max-w-none ring-0 shadow-none pointer-events-none" />
      </div>

      {/* Background radial gradients for a premium glow effect */}
      <div className="absolute inset-0 bg-background pointer-events-none transition-colors duration-300 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.04),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-2 text-center text-[2.75rem] font-medium tracking-tight leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-foreground"
        >
          Building{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-600 dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent font-semibold">
            Modern
          </span>
          <br className="hidden sm:inline" />{" "}
          Software{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-600 dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent font-semibold">
            Experiences
          </span>
          <span className="block mt-4 text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-light italic text-neutral-500 dark:text-neutral-400 tracking-tight font-sans">
            for the Future
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-center text-sm sm:text-base md:text-[1.05rem] text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans"
        >
          Queryholic builds scalable websites, web applications, AI-powered systems
          and digital platforms for startups and modern businesses.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all duration-200 hover:opacity-90 w-full sm:w-auto shadow-lg shadow-black/5 dark:shadow-white/5"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-transparent px-7 py-3.5 text-sm font-medium text-neutral-900 dark:text-white transition-all duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 w-full sm:w-auto"
          >
            Explore Services
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
