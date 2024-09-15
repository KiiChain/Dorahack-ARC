import React from "react"

import { navItems } from "@/data/sample"

import { FloatingNav } from "@/ui/floating-navbar"

const IDELayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className="">{children}</div>
    </>
  )
}

export default IDELayout
