"use client"

import React from "react"

import { Drawer } from "vaul"

import { useMediaQuery } from "@/hooks"

const ResponsiveDrawer = () => {
  const isMobile = useMediaQuery("(max-width: 640px)")

  return isMobile ? (
    <Drawer.Root>
      <Drawer.Trigger asChild></Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex flex-col rounded-t-[10px] bg-dark-1 p-5">
          <div className="bg-accent-0/10"></div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  ) : (
    <></>
  )
}

export default ResponsiveDrawer
