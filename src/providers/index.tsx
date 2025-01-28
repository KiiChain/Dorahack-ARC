"use client"

import React from "react"
import { ConnectKitProvider } from "connectkit"
import { WagmiProvider } from "wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { ThemeProvider } from "./theme"
import config from "@/lib/wagmi/config"

const queryClient = new QueryClient()

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
