import { navItems } from "@/data/sample"

import { FloatingNav } from "@/ui/floating-navbar"
import React from "react"

const IDELayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
<>
       <FloatingNav navItems={navItems}  />
      <div className="">{children}</div>
      </>
    )
}

export default IDELayout
