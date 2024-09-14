import { navItems } from "@/data/sample"
import { IDEProvider } from "@/providers/ide"
import { FloatingNav } from "@/ui/floating-navbar"
import React from "react"

const IDELayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <IDEProvider>
       <FloatingNav navItems={navItems} stagnant />
      <div className="mx-auto  max-w-7xl pt-16 p-2 sm:p-6 md:p-12 md:pt-[6rem]  h-screen max-h-screen grid grid-rows-12 grid-cols-12 ">{children}</div>
    </IDEProvider>
  )
}

export default IDELayout
