"use client"

import React, { useEffect, useState } from "react"

import { ModalProvider } from "./modal"
import { UserProvider } from "./user"

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ModalProvider>
      <UserProvider>
        <>{children}</>
      </UserProvider>
    </ModalProvider>
  )
}

export default Providers
