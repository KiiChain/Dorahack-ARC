"use client"
import React, { useState } from "react"

//import { init } from "@/data/sample"
import { Directory, File } from "@/interface/custom/folder-tree/folder-tree"

interface IIDEContext {
  rootDir?: Directory
  setRootDir: React.Dispatch<React.SetStateAction<Directory | undefined>>
  selectedFile: File | undefined
  setSelectedFile: React.Dispatch<React.SetStateAction<File | undefined>>
  activeFiles: File[] | undefined
  setActiveFiles: React.Dispatch<React.SetStateAction<File[] | undefined>>
}

type IIDEProvider = {
  children: React.ReactNode
}

const defaultValues = {}
{
  /*const initialRoot: Directory = {
  id: "root",
  type: "directory",
  name: "root",
  parentId: undefined,
  depth: 0,
  files: [],
  dirs: [],
})*/
}
const Context = React.createContext<IIDEContext>(defaultValues as IIDEContext)
const IDEProvider: React.FC<IIDEProvider> = ({ children }) => {
  const [rootDir, setRootDir] = useState<Directory>()
  const [activeFiles, setActiveFiles] = useState<File[]>()

  const [selectedFile, setSelectedFile] = useState<File | undefined>()
  // useEffect(() => {
  //   setRootDir(init)
  // }, [])

  return (
    <Context.Provider value={{ rootDir, setRootDir, selectedFile, setSelectedFile, activeFiles, setActiveFiles }}>
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
