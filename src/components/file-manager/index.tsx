import React from "react"

import { Directory, File } from "@/interface/custom/folder-tree/folder-tree"

import { FileTree } from "@/utils/folder-tree"

interface FIleManageProps {
  rootDir: Directory
  setRootDir: React.Dispatch<React.SetStateAction<Directory | undefined>>
  selectedFile: File | undefined
  setSelectedFile: React.Dispatch<React.SetStateAction<File | undefined>>
  activeFiles: File[] | undefined
  setActiveFiles: React.Dispatch<React.SetStateAction<File[] | undefined>>
}

export const FileManager: React.FC<FIleManageProps> = ({
  rootDir,
  selectedFile,
  setRootDir,
  setSelectedFile,
  activeFiles,
  setActiveFiles,
}) => {
  const addFile = (parentDir: Directory) => {
    const newFile: File = {
      id: `${parentDir.id}-file-${parentDir.files.length}`,
      type: "file",
      name: `New File ${parentDir.files.length + 1}`,
      parentId: parentDir.id,
      depth: parentDir.depth + 1,
      content: "",
    }
    parentDir.files.push(newFile)
    setRootDir({ ...rootDir })
  }

  const addFolder = (parentDir: Directory) => {
    const newFolder: Directory = {
      id: `${parentDir.id}-folder-${parentDir.dirs.length}`,
      type: "directory",
      name: `New Folder ${parentDir.dirs.length + 1}`,
      parentId: parentDir.id,
      depth: parentDir.depth + 1,
      files: [],
      dirs: [],
    }
    parentDir.dirs.push(newFolder)
    setRootDir({ ...rootDir })
  }

  const deleteFileOrFolder = (fileOrDir: File | Directory) => {
    const remove = (dir: Directory) => {
      dir.files = dir.files.filter((file) => file.id !== fileOrDir.id)
      dir.dirs = dir.dirs.filter((subDir) => subDir.id !== fileOrDir.id)
      dir.dirs.forEach((subDir) => remove(subDir))
    }
    remove(rootDir)
    setRootDir({ ...rootDir })
  }
  const renameFileOrFolder = (fileOrDir: File | Directory, newName: string) => {
    const findAndRename = (dir: Directory) => {
      dir.files.forEach((file) => {
        if (file.id === fileOrDir.id) {
          file.name = newName
        }
      })
      dir.dirs.forEach((subDir) => {
        if (subDir.id === fileOrDir.id) {
          subDir.name = newName
        }
        findAndRename(subDir)
      })
    }
    findAndRename(rootDir)
    setRootDir({ ...rootDir })
  }
  const handleSelect = (file: File) => {
    setSelectedFile(file)
    if (activeFiles === undefined || !activeFiles.some((activeFile) => activeFile.id === file.id)) {
      if (activeFiles) setActiveFiles([...activeFiles, file])
      else setActiveFiles([file])
    }
  }
  return (
    <FileTree
      rootDir={rootDir}
      selectedFile={selectedFile}
      onSelect={handleSelect}
      onAddFile={addFile}
      onAddFolder={addFolder}
      onDelete={deleteFileOrFolder}
      onRename={renameFileOrFolder}
    />
  )
}
