"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function DraggableCardDemo() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const items = [
    {
      title: "Website Development",
      shortDescription: "Modern responsive websites crafted for startups, brands, and growing businesses.",
      fullExplanation: "We design and develop high-performance websites that help businesses build a strong digital presence. Our websites are optimized for responsiveness, speed, scalability, and modern user experience across all devices.",
      features: [
        "Responsive UI Design",
        "Modern Animations",
        "SEO Optimization",
        "Business Websites",
        "Corporate Websites",
        "Portfolio Websites",
        "Performance Optimization",
        "Contact & Lead Systems"
      ],
      className: "absolute top-10 left-[15%] rotate-[-5deg]",
      gradient: "from-blue-500/20 to-cyan-400/20"
    },
    {
      title: "Landing Page Development",
      shortDescription: "High-converting landing pages designed for branding, performance, and growth.",
      fullExplanation: "We create premium landing pages focused on user engagement, product presentation, and conversion optimization. Perfect for startups, SaaS products, campaigns, and product launches.",
      features: [
        "Hero Sections",
        "Conversion-Focused Layouts",
        "Smooth Animations",
        "Product Showcase",
        "Waitlist & CTA Systems",
        "Mobile Optimization",
        "Fast Loading Performance",
        "Premium UI Design"
      ],
      className: "absolute top-40 left-[25%] rotate-[3deg]",
      gradient: "from-emerald-500/20 to-teal-400/20"
    },
    {
      title: "Web Applications",
      shortDescription: "Scalable dashboards, portals, and custom software systems for modern businesses.",
      fullExplanation: "We build custom web applications tailored for startups, enterprises, and businesses. From dashboards to SaaS platforms, our systems are designed for scalability, security, and long-term growth.",
      features: [
        "Admin Dashboards",
        "CRM Systems",
        "SaaS Platforms",
        "Authentication Systems",
        "APIs & Integrations",
        "Real-time Features",
        "Database Architecture",
        "Scalable Backend Systems"
      ],
      className: "absolute top-16 left-[40%] rotate-[-8deg]",
      gradient: "from-violet-500/20 to-purple-400/20"
    },
    {
      title: "Mobile App Development",
      shortDescription: "Cross-platform mobile applications with premium user experience and scalable architecture.",
      fullExplanation: "We develop high-performance mobile applications for Android and iOS using modern frameworks and scalable technologies. Designed for seamless user experience and business growth.",
      features: [
        "Android & iOS Apps",
        "Cross-Platform Development",
        "Modern Mobile UI",
        "Authentication Systems",
        "Push Notifications",
        "Realtime Data",
        "API Integrations",
        "App Performance Optimization"
      ],
      className: "absolute top-32 left-[55%] rotate-[6deg]",
      gradient: "from-orange-500/20 to-red-400/20"
    },
    {
      title: "AI & Automation",
      shortDescription: "Intelligent AI systems, automation workflows, and scalable digital solutions.",
      fullExplanation: "We build AI-powered solutions that help businesses automate repetitive tasks, improve workflows, and enhance customer experiences using modern artificial intelligence technologies.",
      features: [
        "AI Chatbots",
        "Workflow Automation",
        "AI Search Systems",
        "OpenAI Integrations",
        "Smart Assistants",
        "Customer Support Automation",
        "AI-Powered Analytics",
        "Intelligent Data Processing"
      ],
      className: "absolute top-20 right-[15%] rotate-[2deg]",
      gradient: "from-pink-500/20 to-rose-400/20"
    },
    {
      title: "UI/UX Design",
      shortDescription: "Premium digital experiences crafted with modern interfaces and intuitive interactions.",
      fullExplanation: "We create visually immersive and user-focused interfaces designed for usability, engagement, and scalability. Every design is optimized for modern digital experiences and seamless interactions.",
      features: [
        "Modern Interface Design",
        "User Experience Research",
        "Design Systems",
        "Wireframing & Prototyping",
        "Responsive Layouts",
        "Interactive Animations",
        "SaaS UI Design",
        "Mobile UI/UX"
      ],
      className: "absolute top-[18rem] left-[20%] rotate-[-4deg]",
      gradient: "from-yellow-500/20 to-amber-400/20"
    },
    {
      title: "SaaS Development",
      shortDescription: "Scalable cloud-based software platforms built for modern startups and digital businesses.",
      fullExplanation: "We build modern SaaS platforms with scalable architecture, secure systems, and subscription-ready infrastructure designed for long-term product growth.",
      features: [
        "Subscription Systems",
        "Multi-user Platforms",
        "Authentication & Roles",
        "Cloud Infrastructure",
        "Payment Integrations",
        "Admin Management",
        "Scalable Backend Architecture",
        "SaaS Product Development"
      ],
      className: "absolute top-[14rem] left-[45%] rotate-[5deg]",
      gradient: "from-indigo-500/20 to-blue-400/20"
    }
  ];

  return (
    <>
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <div className="absolute top-1/2 mx-auto max-w-sm -translate-y-[120%] text-center">
          <h2 className="text-3xl font-black text-neutral-800 md:text-5xl dark:text-neutral-200">
            Our Services
          </h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400">
            Drag these cards around or click to view more details.
          </p>
        </div>
        
        {items.map((item) => (
          <DraggableCardBody 
            key={item.title} 
            className={`${item.className} cursor-pointer group hover:scale-[1.02] transition-transform flex flex-col justify-between`}
          >
            <div 
              className="absolute inset-0 bg-transparent z-20"
              onClick={() => setSelectedItem(item)}
            />
            
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient.replace('/20', '')}`} />
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50`} />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.shortDescription}
                </p>
              </div>
              <div className="mt-6 text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center group-hover:text-blue-500 transition-colors">
                View Details <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>

      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-lg bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${selectedItem.gradient.replace('/20', '')}`} />
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                      {selectedItem.title}
                    </h2>
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                    </button>
                  </div>
                  
                  <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                    {selectedItem.fullExplanation}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedItem.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedItem.gradient.replace('/20', '')} mr-3`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
