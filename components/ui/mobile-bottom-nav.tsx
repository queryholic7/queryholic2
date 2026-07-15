"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, LayoutGrid, GitMerge, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/#services", icon: LayoutGrid },
  { label: "Process", href: "/#our-process", icon: GitMerge },
  { label: "Contact", href: "/contact", icon: MessageSquare },
]

export function MobileBottomNav() {
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState("")

  useEffect(() => {
    // Initial hash
    setActiveHash(window.location.hash)
    
    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }
    
    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    
    // Polling for scroll-based hash changes if any
    const interval = setInterval(() => {
        if(window.location.hash !== activeHash) {
            setActiveHash(window.location.hash)
        }
    }, 500)
    
    return () => {
        window.removeEventListener("hashchange", handleHashChange)
        clearInterval(interval)
    }
  }, [activeHash])

  const getIsActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && (!activeHash || activeHash === "")
    }
    if (href.startsWith("/#")) {
      const hash = href.replace("/", "")
      return pathname === "/" && activeHash === hash
    }
    return pathname === href
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-border pb-safe">
      <nav className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = getIsActive(item.href)
          const Icon = item.icon
          
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => {
                if (item.href.startsWith("/#")) {
                  setActiveHash(item.href.replace("/", ""))
                } else if (item.href === "/") {
                  setActiveHash("")
                }
              }}
              className="flex flex-col items-center justify-center w-16 gap-1"
            >
              <div
                className={cn(
                  "flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 w-full",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon size={22} className={cn("mb-1", isActive ? "stroke-[2.5px]" : "stroke-2")} />
                <span className={cn(
                  "text-[10px] font-medium tracking-wide",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}>
                  {item.label}
                </span>
              </div>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
