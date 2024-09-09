import { createConfig, http } from "wagmi"

import { KiiChain } from "@/kiichain"

const config = createConfig({
  chains: [KiiChain],
  transports: {
    [KiiChain.id]: http(),
  },
})

export default config
