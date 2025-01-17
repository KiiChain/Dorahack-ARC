import { defineChain } from "viem"

const kiichain = defineChain({
  id: 0x538,
  name: "Kiichain Oro",
  nativeCurrency: { name: "Ether", symbol: "kii", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com"] },
  },
  blockExplorers: {
    default: { name: "Kii Explorer", url: "https://app.kiichain.io/kiichain" },
  },
  contracts: {},
})

export default kiichain
