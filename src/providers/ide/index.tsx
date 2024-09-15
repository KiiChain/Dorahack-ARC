"use client"
import React, { useEffect, useState } from "react"

//import { init } from "@/data/sample"
import { Directory, File } from "@/interface/custom/folder-tree/folder-tree"

interface IIDEContext {
  rootDir?: Directory
  setRootDir: React.Dispatch<React.SetStateAction<Directory | undefined>>
  selectedFile: File | undefined
  setSelectedFile: React.Dispatch<React.SetStateAction<File | undefined>>
  activeFiles: File[] | undefined
  setActiveFiles: React.Dispatch<React.SetStateAction<File[] | undefined>>
  handleFileUpdate: (updatedFile: File) => void
}

type IIDEProvider = {
  children: React.ReactNode
}

const Context = React.createContext<IIDEContext>({} as IIDEContext)
const IDEProvider: React.FC<IIDEProvider> = ({ children }) => {
  const [rootDir, setRootDir] = useState<Directory>()
  const [activeFiles, setActiveFiles] = useState<File[]>()
  const [selectedFile, setSelectedFile] = useState<File | undefined>()
  // useEffect(() => {
  //   setRootDir(init)
  // }, [])
  const updateFileInRootDir = (dir: Directory, updatedFile: File): Directory => {
    // Recursively update the file in the directory structure
    return {
      ...dir,
      files: dir.files.map((file) => (file.id === updatedFile.id ? { ...file, content: updatedFile.content } : file)),
      dirs: dir.dirs.map((subDir) => updateFileInRootDir(subDir, updatedFile)),
    }
  }
  const handleFileUpdate = (updatedFile: File) => {
    setSelectedFile(updatedFile)

    if (activeFiles) {
      setActiveFiles(activeFiles.map((file) => (file.id === updatedFile.id ? updatedFile : file)))
    }
    if (rootDir) {
      setRootDir(updateFileInRootDir(rootDir, updatedFile))
    }
  }
  useEffect(() => {
    const x = window.localStorage.getItem("rootdir")
    console.log("pager  ", x)
    if (x != undefined) {
      console.log("chkec ", x)
      const y = JSON.parse(x)
      setRootDir(y)
    }
  }, [])
  useEffect(() => {
    if (rootDir != undefined) {
      window.localStorage.setItem("rootdir", JSON.stringify(rootDir))
    }
  }, [rootDir])

  return (
    <Context.Provider
      value={{ rootDir, setRootDir, selectedFile, setSelectedFile, activeFiles, setActiveFiles, handleFileUpdate }}
    >
      {children}
    </Context.Provider>
  )
}

const useIDE = () => {
  const c = React.useContext(Context)

  if (c === undefined) {
    throw new Error("useIDE must be used within a IDEProvider")
  }

  return c
}

export { IDEProvider, useIDE }
