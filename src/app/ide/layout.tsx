import { IDEProvider } from "@/providers/ide"
import React from "react"



const IDELayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <IDEProvider>
      <div className="mt-14 max-w-7xl mx-auto">
        {children}
      </div >
    </IDEProvider>

  )
}

export default IDELayout
