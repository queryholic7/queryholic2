"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export function WhatsappButton() {
  return (
    <Link 
      href="https://wa.me/919597733152?text=Hello%20Queryholic!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." 
      target="_blank" 
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <span className="font-semibold text-sm md:text-base text-neutral-800 dark:text-neutral-200 drop-shadow-sm">Chat with us</span>
      <motion.div
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor"
        >
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.127.553 4.195 1.603 5.992L.037 24l6.126-1.554a11.94 11.94 0 0 0 5.868 1.53h.005c6.646 0 12.03-5.385 12.03-12.031S18.677 0 12.031 0zm0 22.022h-.004a9.98 9.98 0 0 1-5.083-1.385l-.364-.216-3.784.96.98-3.687-.238-.378a9.976 9.976 0 0 1-1.528-5.285c0-5.516 4.49-10.005 10.021-10.005 2.673 0 5.184 1.042 7.073 2.932A9.957 9.957 0 0 1 22.052 12c0 5.515-4.489 10.022-10.021 10.022zm5.503-7.518c-.302-.152-1.787-.883-2.064-.984-.277-.1-.478-.152-.679.15-.201.303-.781.984-.956 1.186-.176.202-.352.228-.654.076-.302-.151-1.275-.471-2.429-1.503-.898-.804-1.503-1.796-1.68-2.098-.176-.303-.019-.467.132-.618.136-.136.302-.353.453-.529.151-.177.201-.303.302-.505.101-.202.05-.379-.025-.53-.076-.152-.679-1.64-.929-2.246-.244-.593-.493-.513-.679-.523-.176-.008-.378-.01-.58-.01s-.529.076-.805.379c-.277.303-1.057 1.034-1.057 2.52 0 1.487 1.082 2.924 1.233 3.126.151.202 2.133 3.253 5.166 4.561.722.312 1.286.498 1.726.638.725.23 1.385.197 1.905.12.584-.087 1.787-.731 2.039-1.436.252-.706.252-1.311.177-1.437-.076-.126-.277-.201-.58-.352z"/>
        </svg>
      </motion.div>
    </Link>
  );
}
