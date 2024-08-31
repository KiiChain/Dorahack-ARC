"use client"
import { createContext, useContext } from "react"
import React, { useState } from "react"

interface ISidebarContext {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  animate: boolean
}

type ISideBarProvider = {
  children: React.ReactNode
}

const defaultValues: ISidebarContext = {
  open: false,
  setOpen: () => false,
  animate: true,
}

const Context = createContext<ISidebarContext>(defaultValues)

const SidebarProvider: React.FC<ISideBarProvider> = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = false,
}: {
  children: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  animate?: boolean
}) => {
  const [openState, setOpenState] = useState(false)
  const open = openProp !== undefined ? openProp : openState
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState
  return <Context.Provider value={{ open, setOpen, animate }}>{children}</Context.Provider>
}

const useSidebar = () => {
  const context = useContext(Context)
  if (context == undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export { SidebarProvider, useSidebar }
