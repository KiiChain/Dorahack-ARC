import { toast } from "sonner"

import { Directory } from "@/interface/custom/folder-tree/folder-tree"

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
  const importRegex = /^\s*import\s+["'](\.\/|\.\.\/)[^"']*["'];\s*$/gm
  return content.replace(importRegex, "")
}

export const collectSolFiles = (rootDir: Directory): ISources => {
  const sources: ISources = {}

  const traverseDirectory = (directory: Directory) => {
    directory.files.forEach((file) => {
      if (file.name.endsWith(".sol")) {
        const v = removeLocalImports(file.content)
        sources[`${file.name}` as keyof typeof sources] = { content: v }
      }
    })

    directory.dirs.forEach((subdir) => {
      traverseDirectory(subdir)
    })
  }

  traverseDirectory(rootDir)

  return sources
}
/**
 * Checks if a file with a given name already exists in a directory or its subdirectories.
 * @param dir - The directory to search within.
 * @param fileName - The name of the file to check.
 * @returns boolean - True if the file name exists, false otherwise.
 */
export const fileNameAlreadyExists = (dir: Directory, fileName: string): boolean => {
  // Check if any file in the current directory matches the given name
  const fileExistsInCurrentDir = dir.files.some((file) => file.name === fileName)

  if (fileExistsInCurrentDir) {
    return true
  }

  // Recursively check in each subdirectory
  return dir.dirs.some((subDir) => fileNameAlreadyExists(subDir, fileName))
}

/**
 * Checks if a directory with a given name already exists in a directory or its subdirectories.
 * @param dir - The directory to search within.
 * @param dirName - The name of the directory to check.
 * @returns boolean - True if the directory name exists, false otherwise.
 */
export const directoryAlreadyExists = (dir: Directory, dirName: string): boolean => {
  // Check if any directory in the current directory matches the given name
  const directoryExistsInCurrentDir = dir.dirs.some((sm) => sm.dirs.some((subDir) => subDir.name === dirName))

  if (directoryExistsInCurrentDir) {
    return true
  }
  return false
}

export default utils
