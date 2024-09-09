import React from "react"

import { WagmiProvider as Provider } from "wagmi"

import { QueryClientProvider } from "@tanstack/react-query"

import queryClient from "./client"
import config from "./config"

const WagmiProvider: React.FC<IChildren> = ({ children }) => {
  return (
    <Provider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  )
}

export default WagmiProvider
