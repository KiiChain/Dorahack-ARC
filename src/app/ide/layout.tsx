import React from "react"

import { IDEProvider } from "@/providers/ide"

const IDELayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <IDEProvider>{children}</IDEProvider>
}

export default IDELayout
