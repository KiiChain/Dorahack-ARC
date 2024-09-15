import { Directory, File } from "@/interface/custom/folder-tree/folder-tree"

import { ExtensionTypes, getIcon } from "../icons"

export function findFileByName(rootDir: Directory, filename: string): File | undefined {
  let targetFile: File | undefined = undefined

  function findFile(rootDir: Directory, filename: string) {
    rootDir.files.forEach((file) => {
      if (file.name === filename) {
        targetFile = file
        return
      }
    })
    rootDir.dirs.forEach((dir) => {
      findFile(dir, filename)
    })
  }

  findFile(rootDir, filename)
  return targetFile
}

export function sortDir(l: Directory, r: Directory) {
  return l.name.localeCompare(r.name)
}

export function sortFile(l: File, r: File) {
  return l.name.localeCompare(r.name)
}

export const FileIcon = ({ extension, name }: { name?: string; extension?: ExtensionTypes }) => {
  const icon = getIcon(name || "", extension)
  return <span className="flex aspect-square w-[24px] items-center justify-center">{icon}</span>
}
