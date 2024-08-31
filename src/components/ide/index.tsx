"use client"
// import { useSidebar } from '@/providers/sidebar'
import React from "react"

import { useIDE } from "@/providers/ide"

import { MonacoEditor } from "../editor"
import { FileManager } from "../file-manager"
import { SidebarBody } from "../ide-sidebar"

const IDE = () => {
  // const { animate, open, setOpen } = useSidebar();
  const { rootDir, selectedFile, setRootDir, setSelectedFile } = useIDE()
  return (
    <div className="flex">
      <SidebarBody className="justify-between gap-10">
        <div className="flex h-full flex-1 flex-col overflow-y-auto overflow-x-scroll">
          <FileManager
            rootDir={rootDir}
            selectedFile={selectedFile}
            setRootDir={setRootDir}
            setSelectedFile={setSelectedFile}
          />
        </div>
      </SidebarBody>
      <div className="w-full">
        <MonacoEditor selectedFile={selectedFile} />
      </div>
    </div>
  )
}

export default IDE
