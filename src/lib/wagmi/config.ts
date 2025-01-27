import { createConfig, http } from "wagmi"
import { injected } from "wagmi/connectors"

import { KiiChain } from "@/kiichain"

const config = createConfig({
  chains: [KiiChain],
  connectors: [injected()],
  transports: {
    [KiiChain.id]: http(),
  },
})

export default config
