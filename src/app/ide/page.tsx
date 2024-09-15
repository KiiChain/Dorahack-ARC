import React from "react"
import { Suspense } from "react"
import IDE from "@/components/ide"
import { SidebarProvider } from "@/providers/sidebar"

const page = () => {
  return (
    <>
      <SidebarProvider>
        <Suspense>
          <IDE />
        </Suspense>
      </SidebarProvider>
    </>
  )
}

export default page
