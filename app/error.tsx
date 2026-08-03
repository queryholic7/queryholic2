"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#030303] px-4 text-center">
      <h1 className="text-[6rem] md:text-[8rem] font-black tracking-tighter text-neutral-100 dark:text-neutral-900 leading-none select-none">
        500
      </h1>

      <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 dark:text-white -mt-4 md:-mt-8 mb-4">
        Something Went Wrong
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-10 text-sm md:text-base">
        An unexpected error occurred. Please try again or navigate back to safety.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:opacity-90 transition-all"
        >
          <RefreshCw className="w-4 h-4" /> Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-6 py-3.5 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Go Home
        </Link>
      </div>
    </div>
  );
}
