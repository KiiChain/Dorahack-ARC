import { IDEProvider } from "@/providers/ide"
import React from "react"

const IDELayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <IDEProvider>
      <div className="mx-auto  max-w-7xl p-12 pt-16 h-screen max-h-screen grid grid-rows-12 grid-cols-12 ">{children}</div>
    </IDEProvider>
  )
}

export default IDELayout
