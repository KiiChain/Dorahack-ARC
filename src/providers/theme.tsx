"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react"
import { darkTheme, lightTheme } from "@/theme"

interface ThemeContextType {
  theme: typeof darkTheme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<typeof darkTheme | typeof lightTheme>(darkTheme)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setTheme(lightTheme)
    } else {
      setTheme(darkTheme)
    }
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("theme", theme === darkTheme ? "dark" : "light")
    }
  }, [theme, isMounted])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme))
  }

  if (!isMounted) {
    return null
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
