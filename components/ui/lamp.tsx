"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="hero-title mt-8 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-300 dark:to-slate-500 py-4 bg-clip-text text-center font-black tracking-tight text-transparent text-6xl sm:text-5xl md:text-7xl lg:text-8xl"
      >
        Queryholic
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="hero-subtitle mt-4 text-center text-base text-foreground dark:text-muted-foreground max-w-2xl"
      >
        Powering intelligent data products and immersive web experiences.
      </motion.p>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent w-full rounded-md z-0",
        className
      )}
    >
      <BackgroundLines className="absolute inset-0 z-0 h-full w-full bg-background dark:bg-background opacity-30 mix-blend-soft-light pointer-events-none" svgOptions={{ duration: 18 }} />
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={
            {
              backgroundImage: `conic-gradient(var(--conic-position), var(--glow), transparent)`,
              "--glow": "var(--primary)",
            } as React.CSSProperties & { "--glow": string }
          }
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-background  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={
            {
              backgroundImage: `conic-gradient(var(--conic-position), transparent, var(--glow))`,
              "--glow": "var(--primary)",
            } as React.CSSProperties & { "--glow": string }
          }
          className="absolute inset-auto left-1/2 h-56 w-[30rem] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-background  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div
          className="absolute inset-auto z-50 h-36 w-96 -translate-y-1/2 rounded-full opacity-30 blur-2xl"
          style={{ backgroundColor: "var(--primary)" }}
        ></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full opacity-30 blur-xl"
          style={{ backgroundColor: "var(--primary)" }}
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] opacity-40 blur-sm"
          style={{ backgroundColor: "var(--primary)" }}
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background "></div>
      </div>

      <div className="relative z-50 flex -translate-y-105 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
