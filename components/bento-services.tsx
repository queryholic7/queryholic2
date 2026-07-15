"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MonitorSmartphone, Bot, Cpu, Radio, Zap, ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

// --- Custom Animated Visuals for Each Service ---

const SoftwareVisual = () => (
  <div className="flex flex-1 w-full h-full min-h-[160px] rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 dark:border-neutral-800 flex-col gap-2 p-4 overflow-hidden relative group-hover/card:scale-[1.02] transition-transform duration-500">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:14px_14px]" />
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 1 }}
      className="w-full h-6 rounded-md bg-indigo-500/20 relative z-10" 
    />
    <div className="flex gap-2 w-full flex-1 relative z-10">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-1/3 h-full rounded-md bg-purple-500/20" 
      />
      <div className="w-2/3 h-full flex flex-col gap-2">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full h-1/2 rounded-md bg-indigo-500/10" 
        />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full h-1/2 rounded-md bg-indigo-500/10" 
        />
      </div>
    </div>
  </div>
);

const AIVisual = () => (
  <div className="flex flex-1 w-full h-full min-h-[160px] rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 dark:border-neutral-800 items-center justify-center relative overflow-hidden group-hover/card:scale-[1.02] transition-transform duration-500">
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_70%)]" />
     <motion.div 
       animate={{ rotate: 360 }}
       transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
       className="w-24 h-24 border border-cyan-500/30 rounded-full flex items-center justify-center border-dashed"
     >
       <motion.div 
         animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
         transition={{ duration: 2, repeat: Infinity }}
         className="w-12 h-12 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center"
       >
         <Bot className="w-6 h-6 text-cyan-400" />
       </motion.div>
     </motion.div>
  </div>
);

const EmbeddedVisual = () => (
  <div className="flex flex-1 w-full h-full min-h-[160px] rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/10 dark:border-neutral-800 items-center justify-center relative overflow-hidden group-hover/card:scale-[1.02] transition-transform duration-500">
    <div className="w-20 h-20 bg-black/40 border-2 border-emerald-500/50 rounded-lg relative flex items-center justify-center shadow-lg z-10">
      <Cpu className="w-8 h-8 text-emerald-400" />
      <div className="absolute -top-2 left-2 w-1 h-2 bg-emerald-500/80 rounded-sm" />
      <div className="absolute -top-2 left-6 w-1 h-2 bg-emerald-500/80 rounded-sm" />
      <div className="absolute -top-2 right-6 w-1 h-2 bg-emerald-500/80 rounded-sm" />
      <div className="absolute -top-2 right-2 w-1 h-2 bg-emerald-500/80 rounded-sm" />
      <div className="absolute -bottom-2 left-2 w-1 h-2 bg-emerald-500/80 rounded-sm" />
      <div className="absolute -bottom-2 left-6 w-1 h-2 bg-emerald-500/80 rounded-sm" />
      <div className="absolute -bottom-2 right-6 w-1 h-2 bg-emerald-500/80 rounded-sm" />
      <div className="absolute -bottom-2 right-2 w-1 h-2 bg-emerald-500/80 rounded-sm" />
    </div>
    <motion.div 
      initial={{ left: "-100%" }}
      animate={{ left: "200%" }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.8)] z-20"
    />
  </div>
);

const IoTVisual = () => (
  <div className="flex flex-1 w-full h-full min-h-[160px] rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-white/10 dark:border-neutral-800 items-center justify-center relative overflow-hidden group-hover/card:scale-[1.02] transition-transform duration-500">
    <motion.div 
      animate={{ scale: [1, 2, 3], opacity: [0.8, 0.4, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute w-12 h-12 rounded-full border border-orange-500/50"
    />
    <motion.div 
      animate={{ scale: [1, 2, 3], opacity: [0.8, 0.4, 0] }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
      className="absolute w-12 h-12 rounded-full border border-orange-500/50"
    />
    <div className="w-12 h-12 bg-orange-500/20 backdrop-blur-md rounded-full border border-orange-500/50 flex items-center justify-center z-10">
      <Radio className="w-6 h-6 text-orange-400" />
    </div>
  </div>
);

const EnergyVisual = () => (
  <div className="flex flex-1 w-full h-full min-h-[160px] rounded-xl bg-gradient-to-br from-yellow-500/10 to-green-500/10 border border-white/10 dark:border-neutral-800 items-center justify-center relative overflow-hidden group-hover/card:scale-[1.02] transition-transform duration-500">
    <motion.div 
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="w-16 h-24 bg-neutral-900 border-2 border-yellow-500/50 rounded-xl relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 w-6 h-2 bg-yellow-500/50 rounded-t-sm -mt-2" />
      <motion.div 
        initial={{ height: "0%" }}
        animate={{ height: "80%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 w-full bg-gradient-to-t from-green-500 to-yellow-500 opacity-80"
      />
      <Zap className="w-8 h-8 text-white z-10 drop-shadow-md" />
    </motion.div>
  </div>
);

// --- Data ---

const SERVICES = [
  {
    id: "software",
    area: "md:col-span-12 lg:col-span-8",
    title: "Software Solutions",
    description: "Building modern websites, web & mobile applications, digital platforms, and user experiences engineered for extreme performance and effortless scalability.",
    tags: ["Web Apps", "Mobile Apps", "UI/UX", "Cloud Architecture"],
    visual: <SoftwareVisual />,
    isFeatured: true,
    accentColor: "indigo",
    subServices: [
      { title: "Landing Pages", desc: "High-converting, lightning-fast marketing pages designed to drive growth and sales." },
      { title: "E-Commerce", desc: "Scalable online stores with robust cart logic, secure payment gateways, and inventory management." },
      { title: "Mobile Apps", desc: "Cross-platform iOS & Android applications using modern frameworks like React Native and Flutter." },
      { title: "Business ERP / CRM", desc: "Custom dashboards and internal tools to seamlessly manage your business operations and data." },
      { title: "Payment Gateways", desc: "Secure, reliable financial integrations with Stripe, Razorpay, PayPal, and more." },
      { title: "API Development", desc: "Robust, secure backend systems and microservices built to handle massive scale." }
    ]
  },
  {
    id: "ai",
    area: "md:col-span-6 lg:col-span-4",
    title: "Artificial Intelligence",
    description: "Intelligent systems that automate workflows, improve decision-making, and unlock new business opportunities.",
    tags: ["LLMs", "Machine Learning", "Automation"],
    visual: <AIVisual />,
    accentColor: "cyan",
    subServices: [
      { title: "Custom LLM Agents", desc: "AI Chatbots that know your business data and can assist customers 24/7." },
      { title: "Workflow Automation", desc: "AI pipelines that automate repetitive tasks, saving thousands of hours." },
      { title: "Predictive Analytics", desc: "Data models that analyze trends and forecast business metrics." },
      { title: "Computer Vision", desc: "Image recognition systems for quality control, security, and medical imaging." }
    ]
  },
  {
    id: "embedded",
    area: "md:col-span-6 lg:col-span-4",
    title: "Embedded Systems",
    description: "Custom electronics, firmware, and embedded solutions for modern products and industrial applications.",
    tags: ["PCB Design", "Firmware", "Microcontrollers"],
    visual: <EmbeddedVisual />,
    accentColor: "emerald",
    subServices: [
      { title: "PCB Design", desc: "Custom circuit board design, layout, and rapid prototyping for new products." },
      { title: "Firmware Development", desc: "Low-level, hyper-efficient programming in C/C++ for microcontrollers." },
      { title: "Hardware Prototyping", desc: "From breadboards to production-ready units, we build the physical product." },
      { title: "Edge Computing", desc: "Processing data directly on the device for zero-latency, offline decision making." }
    ]
  },
  {
    id: "iot",
    area: "md:col-span-6 lg:col-span-4",
    title: "IoT & Automation",
    description: "Connecting devices, sensors, and cloud systems to create intelligent and automated ecosystems.",
    tags: ["Sensors", "Smart Homes", "Industrial IoT"],
    visual: <IoTVisual />,
    accentColor: "orange",
    subServices: [
      { title: "Smart Sensors", desc: "Integration of temperature, motion, humidity, and environmental tracking hardware." },
      { title: "Industrial IoT (IIoT)", desc: "Monitoring factory floors, logistics, and machinery for predictive maintenance." },
      { title: "Smart Home Systems", desc: "Connected consumer devices, hubs, and mobile app controllers." },
      { title: "Cloud Dashboards", desc: "Real-time telemetry and remote control of hardware from anywhere in the world." }
    ]
  },
  {
    id: "energy",
    area: "md:col-span-6 lg:col-span-4",
    title: "Energy & EV Tech",
    description: "Smart energy systems, EV solutions, and next-gen engineering technologies for a sustainable future.",
    tags: ["BMS", "Smart Grids", "EV Chargers"],
    visual: <EnergyVisual />,
    accentColor: "yellow",
    subServices: [
      { title: "Battery Management (BMS)", desc: "Safe, highly efficient battery monitoring and balancing systems." },
      { title: "EV Charging Solutions", desc: "Smart charging stations with mobile app and payment integrations." },
      { title: "Smart Grid Tech", desc: "Advanced energy distribution, tracking, and load balancing software." },
      { title: "Solar Integrations", desc: "Monitoring solar inverters, calculating yields, and optimizing power usage." }
    ]
  }
];

export default function BentoServices() {
  const [activeService, setActiveService] = useState<typeof SERVICES[0] | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeService]);

  return (
    <section id="services" className="relative w-full py-20 md:py-32 bg-white dark:bg-[#030303] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.25em] text-indigo-600 dark:text-indigo-400 uppercase mb-4"
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6"
          >
            Services that drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Innovation.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-base md:text-lg text-neutral-600 dark:text-neutral-400"
          >
            We blend cutting-edge software with advanced electronics to deliver visually stunning and highly performant solutions. Click any service to explore our capabilities.
          </motion.p>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-12 gap-4 xl:gap-6 auto-rows-auto relative">
          {SERVICES.map((service) => (
            <GridItem
              key={service.id}
              service={service}
              onClick={() => setActiveService(service)}
            />
          ))}
        </ul>

      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Card */}
            <motion.div
              layoutId={`card-${activeService.id}`}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full backdrop-blur-md transition-colors z-20"
              >
                <X className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
              </button>

              <div className="overflow-y-auto w-full h-full custom-scrollbar">
                {/* Visual Header */}
                <motion.div 
                  layoutId={`visual-${activeService.id}`}
                  className="w-full h-64 md:h-80"
                >
                  {activeService.visual}
                </motion.div>

                {/* Content Body */}
                <div className="p-6 md:p-10">
                  <motion.h3 
                    layoutId={`title-${activeService.id}`}
                    className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4"
                  >
                    {activeService.title}
                  </motion.h3>
                  
                  <motion.p 
                    layoutId={`desc-${activeService.id}`}
                    className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10"
                  >
                    {activeService.description}
                  </motion.p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                      What we offer
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {activeService.subServices.map((sub, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-indigo-500/30 transition-colors"
                        >
                          <CheckCircle2 className={`w-6 h-6 text-${activeService.accentColor}-500 flex-shrink-0 mt-0.5`} />
                          <div>
                            <h5 className="font-bold text-neutral-900 dark:text-white text-lg mb-1">{sub.title}</h5>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                              {sub.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex justify-end">
                    <button 
                      onClick={() => setActiveService(null)}
                      className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

const GridItem = ({ service, onClick }: { service: typeof SERVICES[0], onClick: () => void }) => {
  return (
    <motion.li
      layoutId={`card-${service.id}`}
      onClick={onClick}
      className={cn("list-none relative group/card flex cursor-pointer", service.area)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={cn(
          "relative flex flex-col w-full h-full rounded-3xl p-1 transition-all duration-300 ease-out",
          "bg-white/40 dark:bg-[#0a0a0a]/60 backdrop-blur-xl",
          "border border-neutral-200/50 dark:border-neutral-800",
          "hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20",
          `hover:border-${service.accentColor}-500/30`
        )}
      >
        <GlowingEffect
          spread={service.isFeatured ? 80 : 50}
          glow={true}
          disabled={false}
          proximity={service.isFeatured ? 90 : 70}
          inactiveZone={0.01}
          borderWidth={service.isFeatured ? 1.5 : 1}
        />

        <div className="relative flex flex-col flex-1 overflow-hidden rounded-[22px] p-6 gap-6 bg-white/70 dark:bg-[#0d0d0d]/90">
          
          {/* Visual Header */}
          <motion.div layoutId={`visual-${service.id}`} className="w-full flex-shrink-0">
            {service.visual}
          </motion.div>

          {/* Content Footer */}
          <div className="flex flex-col flex-1 justify-end z-10 mt-auto">
            <div className="flex justify-between items-start mb-2">
              <motion.h3 layoutId={`title-${service.id}`} className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover/card:text-indigo-600 dark:group-hover/card:text-indigo-400 transition-colors duration-300">
                {service.title}
              </motion.h3>
              <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group-hover/card:bg-indigo-500 group-hover/card:text-white transition-colors duration-300">
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover/card:text-white transition-colors duration-300" />
              </div>
            </div>
            
            <motion.p layoutId={`desc-${service.id}`} className="font-sans text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 transition-colors duration-300 line-clamp-2">
              {service.description}
            </motion.p>
            
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50">
              <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider flex items-center gap-1">
                Click to explore {service.subServices.length} services <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
