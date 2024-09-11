import React from "react"

import IDE from "@/components/ide"
import { SidebarProvider } from "@/providers/sidebar"

const page = () => {
  
  return (
    <>
      <SidebarProvider>
      
        <IDE />
      </SidebarProvider>
    </>
  )
}

export default page
