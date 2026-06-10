"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme")
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches

      const initial = stored ? stored === "dark" : true
      setIsDark(initial)
      document.documentElement.classList.toggle("dark", initial)
    } catch (e) {
      // ignore (SSR safe)
    }
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    try {
      document.documentElement.classList.toggle("dark", next)
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch (e) {
      // ignore
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}
