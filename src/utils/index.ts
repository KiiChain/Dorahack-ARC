import { toast } from "sonner"
import { BrowserApiUtils } from "./browser-api"
import { DateUtils } from "./date"
import misc from "./misc"
import Web3Utils from "./web3"

const utils = {
  date: DateUtils,
  browserApi: BrowserApiUtils,
  web3: Web3Utils,
  misc: misc,
}

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
  toast.info("Copied to clipboard", { position: "bottom-right" })
}

export default utils
