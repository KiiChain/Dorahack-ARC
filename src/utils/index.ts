import { toast } from "sonner"
import { BrowserApiUtils } from "./browser-api"
import { DateUtils } from "./date"
import misc from "./misc"
import Web3Utils from "./web3"
import { Directory } from "@/interface/custom/folder-tree/folder-tree"

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
export const downloadJson = (data: Record<string, unknown>, filename: string) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${filename}.json`
  link.click()
  URL.revokeObjectURL(url)
}

const removeLocalImports = (content: string): string => {
  const importRegex = /^\s*import\s+["'](\.\/|\.\.\/|\/)?[^"']+["'];\s*$/gm;
  return content.replace(importRegex, '');
};
export const collectSolFiles = (rootDir: Directory): ISources => {
  const sources: ISources = {};

  const traverseDirectory = (directory: Directory) => {
    directory.files.forEach((file) => {
      if (file.name.endsWith('.sol')) {
        const v = removeLocalImports(file.content);
        (sources[(`${file.name}` as keyof typeof sources)]) = { content: v };
      }
    });

    directory.dirs.forEach((subdir) => {
      traverseDirectory(subdir);
    });
  };

  traverseDirectory(rootDir);

  return sources;
};
export default utils
