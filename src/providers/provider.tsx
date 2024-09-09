"use client"

import React, { useEffect, useState } from "react"

import { WagmiProvider } from "@/lib"

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
    return <WagmiProvider>{children}</WagmiProvider>
  }

  return (
    <WagmiProvider>
      <ModalProvider>
        <UserProvider>
          <>{children}</>
        </UserProvider>
      </ModalProvider>
    </WagmiProvider>
  )
}

export default Providers
