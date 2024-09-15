import React from "react"

import { navItems } from "@/data/sample"

import { IDEProvider } from "@/providers/ide"
import { FloatingNav } from "@/ui/floating-navbar"

const IDELayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <IDEProvider>
      <FloatingNav
        navItems={navItems}
        stagnant
      />
      <div className="mx-auto grid h-screen max-h-screen max-w-7xl grid-cols-12 grid-rows-12 p-2 pt-16 sm:p-6 md:p-12 md:pt-[6rem]">
        {children}
      </div>
    </IDEProvider>
  )
}

export default IDELayout
