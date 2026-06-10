"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ui/theme-toggle"

import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

interface NavbarProps {
  logoSrc?: string
}

export function Navbar({ logoSrc = "https://res.cloudinary.com/drqsvwrjt/image/upload/v1779368735/logo_1_yipt5y.png" }: NavbarProps) {
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/#services" },
    { label: "OUR PROCESS", href: "/#our-process" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ]

  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"))
    })
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => obs.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset" };
  }, [isMobileMenuOpen])

  const darkLogoSrc = "https://res.cloudinary.com/drqsvwrjt/image/upload/v1769607730/logo1_xi72sv.png"
  const currentLogo = isDark ? darkLogoSrc : logoSrc

  return (
    <>
      <header className="navbar z-50">
        <div className="navbar-inner relative z-50 bg-background/80 backdrop-blur-md">
          <Link href="/" className="navbar-brand" onClick={() => setIsMobileMenuOpen(false)}>
            {currentLogo ? (
              <img
                src={currentLogo}
                alt="Queryholic logo"
                className="navbar-logo-image"
                onError={(event) => {
                  event.currentTarget.hidden = true
                }}
              />
            ) : (
              <span className="navbar-logo-placeholder">Q</span>
            )}
          </Link>

          {/* Desktop Links */}
          <nav className="navbar-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="navbar-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="navbar-actions flex items-center gap-4 md:gap-8">
            <ThemeToggle />
            <Button 
              className="hidden md:flex rounded-full bg-black dark:bg-white text-white dark:text-black hover:scale-[1.02] hover:opacity-90 transition-all duration-300 px-6 font-medium text-sm tracking-wide shadow-sm"
            >
              Get Started
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 -mr-2 text-foreground focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-2xl font-semibold tracking-wide text-foreground hover:text-indigo-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pb-8">
              <Button className="w-full h-14 text-base tracking-widest uppercase rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                Get Quotes
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
