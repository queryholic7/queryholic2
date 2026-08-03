import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#030303] px-4 text-center">
      {/* 404 Number */}
      <h1 className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-neutral-100 dark:text-neutral-900 leading-none select-none">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 dark:text-white -mt-8 md:-mt-12 mb-4">
        Page Not Found
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-10 text-sm md:text-base">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>

      {/* Navigation Options */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:opacity-90 transition-all"
        >
          <Home className="w-4 h-4" /> Go Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-6 py-3.5 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
        >
          <Search className="w-4 h-4" /> Explore Services
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-6 py-3.5 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Contact Us
        </Link>
      </div>

      {/* Quick Links */}
      <div className="mt-16 text-sm text-neutral-500 dark:text-neutral-400">
        <p className="mb-3 font-medium text-neutral-700 dark:text-neutral-300">Popular pages:</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/services/website-development" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Website Development</Link>
          <span>·</span>
          <Link href="/services/ai-development" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">AI Development</Link>
          <span>·</span>
          <Link href="/services/mobile-app-development" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Mobile Apps</Link>
          <span>·</span>
          <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link>
        </div>
      </div>
    </div>
  );
}
