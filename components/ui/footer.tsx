import React from "react";
import Link from "next/link";

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-50 dark:bg-[#050505] border-t border-neutral-200 dark:border-neutral-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 lg:gap-8">
          
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              {/* Light mode logo */}
              <img 
                src="https://res.cloudinary.com/drqsvwrjt/image/upload/v1779368735/logo_1_yipt5y.png" 
                alt="Queryholic Logo" 
                className="h-10 w-auto dark:hidden" 
              />
              {/* Dark mode logo */}
              <img 
                src="https://res.cloudinary.com/drqsvwrjt/image/upload/v1769607730/logo1_xi72sv.png" 
                alt="Queryholic Logo" 
                className="h-10 w-auto hidden dark:block" 
              />
            </Link>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 max-w-xs">
              Engineering The Future Through Software, Electronics & Intelligence. 
              We build solutions that innovate, automate, and scale.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-neutral-200/50 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all">
                <TwitterIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-neutral-200/50 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all">
                <LinkedinIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-neutral-200/50 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all">
                <InstagramIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-neutral-200/50 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all">
                <GithubIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/#services" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Embedded Systems
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  IoT Platforms
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Smart Energy Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#our-process" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 pt-4 lg:pt-0 border-t border-neutral-200 dark:border-neutral-800/50 lg:border-none">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-6">
              Connect
            </h4>
            <ul className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-8 lg:gap-4">
              <li>
                <a href="mailto:queryholic@gmail.com" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  queryholic@gmail.com
                </a>
              </li>
              <li>
                <Link href="#" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            &copy; {currentYear} Queryholic. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-xs text-neutral-400 dark:text-neutral-500">
              Designed in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
