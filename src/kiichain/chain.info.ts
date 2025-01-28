import { defineChain } from "viem"

const kiichain = defineChain({
  id: 1336,
  name: "KiiChain Testnet Oro",
  nativeCurrency: { name: "KII", symbol: "ukii", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com/"] },
  },
  blockExplorers: {
    default: { name: "Testnet Oro Explorer", url: "https://app.kiichain.io/kiichain" },
  },
  contracts: {},
})

export default kiichain
