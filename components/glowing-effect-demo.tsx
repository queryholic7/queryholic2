"use client";

import React from "react";
import { motion } from "motion/react";
import { Infinity, Cpu, TrendingUp, ShieldCheck, HeartHandshake } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export default function GlowingEffectDemo() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Background Grids & Atmospheric Ambient Glows */}
      <div className="absolute inset-0 bg-background pointer-events-none transition-colors duration-300 -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Cinematic glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[80px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-500/5 dark:bg-purple-500/8 blur-[100px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-16 max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.25em] text-indigo-600 dark:text-indigo-400 uppercase mb-3"
        >
          Why Choose Us
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15]"
        >
          Why Businesses Choose <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 dark:from-indigo-300 dark:via-purple-300 dark:to-sky-300 bg-clip-text text-transparent">Queryholic</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-[1.05rem] leading-relaxed max-w-2xl"
        >
          We combine software, engineering, and innovation to deliver solutions that are scalable, reliable, and built for the future.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Infinity className="h-5 w-5" />}
            title="End-to-End Development"
            description="From concept and planning to deployment and support, we manage the complete development lifecycle under one roof."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Cpu className="h-5 w-5" />}
            title="Software & Engineering Expertise"
            description="A unique combination of software development, embedded systems, IoT, AI, and electronics engineering."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<TrendingUp className="h-6 w-6" />}
            title="Scalable & Future-Ready Solutions"
            description="Systems designed to grow with your business while adapting to future technologies and evolving requirements."
            isFeatured={true}
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Quality & Performance Focus"
            description="Every solution is built with reliability, security, maintainability, and performance as core priorities."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<HeartHandshake className="h-5 w-5" />}
            title="Long-Term Partnership"
            description="Beyond project delivery, we provide continuous support, optimization, and technical guidance to help businesses succeed."
          />

        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  isFeatured = false,
}: GridItemProps & { isFeatured?: boolean }) => {
  return (
    <motion.li
      className={`list-none ${area} group relative`}
      {...(isFeatured
        ? {
            animate: { y: [0, -4, 0] },
            transition: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            },
          }
        : {})}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl md:rounded-3xl p-1 transition-all duration-300 ease-out",
          "bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md",
          "border border-neutral-200/50 dark:border-neutral-800/40",
          "hover:-translate-y-1 hover:scale-[1.01]",
          "hover:border-neutral-300 dark:hover:border-neutral-700/60",
          "hover:shadow-2xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10",
          isFeatured && "shadow-xl shadow-purple-500/5 dark:shadow-purple-500/10 border-indigo-500/20 dark:border-indigo-500/10"
        )}
      >
        <GlowingEffect
          spread={isFeatured ? 70 : 40}
          glow={true}
          disabled={false}
          proximity={isFeatured ? 80 : 64}
          inactiveZone={0.01}
          borderWidth={isFeatured ? 1.5 : 1}
        />

        {/* Ambient colored background glow for featured card */}
        {isFeatured && (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}

        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl md:rounded-2xl p-6 md:p-8 bg-white/70 dark:bg-neutral-950/80 backdrop-blur-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-6">
            {/* Icon Container */}
            <div
              className={cn(
                "w-fit rounded-xl border p-2.5 transition-all duration-300",
                "border-neutral-200 bg-neutral-50 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300",
                "group-hover:border-indigo-500/30 group-hover:bg-indigo-50/50 dark:group-hover:bg-indigo-950/20 dark:group-hover:text-indigo-400",
                isFeatured && "border-purple-500/30 bg-purple-50/50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 group-hover:scale-110"
              )}
            >
              {icon}
            </div>

            {/* Typography Content */}
            <div className="space-y-3">
              <h3
                className={cn(
                  "font-sans text-xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-2xl transition-colors duration-300",
                  "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
                  isFeatured && "group-hover:text-purple-500 dark:group-hover:text-purple-400 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent"
                )}
              >
                {title}
              </h3>
              <p
                className={cn(
                  "font-sans text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 transition-colors duration-300",
                  isFeatured && "text-neutral-700 dark:text-neutral-300 text-sm md:text-base"
                )}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
