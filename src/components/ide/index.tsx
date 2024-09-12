"use client"
import React, { useEffect, useState } from "react"
import { useIDE } from "@/providers/ide"

import { MonacoEditor } from "../editor"
import { FileManager } from "../file-manager"
import { SidebarBody } from "../ide-sidebar"
import { cn } from "@/lib/utils"
import { FileIcon } from "@/ui/file-tree/file-utils"
import { Directory, File } from "@/interface/custom/folder-tree/folder-tree"
import TabButtons from "../tab-section"
import Dropdown from "@/ui/dropdown"
import { FaPencilAlt as PencilIcon, FaLayerGroup as Square2StackIcon } from "react-icons/fa"
import GettingStarted from "../getting-started"
import NoFileSelected from "../no-file-selected"
import { useSearchParams } from "next/navigation"
const menuItems = [
  {
    heading: "Edit",
    icon: PencilIcon,
    subheading: "Sample Hardhat project to get started with development and testing.",
    onClick: () => console.log("Edit clicked"),
  },
  {
    heading: "Duplicate",
    icon: Square2StackIcon,
    subheading: "Create a copy of the current project for experimentation.",
    onClick: () => console.log("Duplicate clicked"),
  },
]
const IDE = () => {
  const { rootDir, selectedFile, setRootDir, setSelectedFile, activeFiles, setActiveFiles } = useIDE()
  const searchparams = useSearchParams()
  const y = searchparams.get("content")
  const handleTabSelect = (file: File) => {
    setSelectedFile(file)
  }
  const [activeTab, setActiveTab] = useState<string>("Overview")

  const tabNames = [
    "Deploy with Defender",
    "Copy",
    <Dropdown
      menuLabel="Download"
      menuItems={menuItems}
    />,
  ]

  const handleTabClose = (file: File) => {
    setActiveFiles((prevFiles) => prevFiles?.filter((activeFile) => activeFile.id !== file.id))
    if (selectedFile?.id === file.id && activeFiles && activeFiles.length > 1) setSelectedFile(activeFiles[0])
  }

  useEffect(() => {
    if (y != null) {
      const z: Directory = JSON.parse(y)

      setRootDir(z)
    }
  }, [])
  useEffect(() => {
    if (activeFiles && activeFiles.length == 0) setSelectedFile(undefined)
  }, [activeFiles])
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <TabButtons
        tabNames={tabNames}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabColors="bg-lightGray text-darkGray"
        activeTabColor="bg-blue-500 text-white"
        className=""
        seperator={false}
      />
      <div className="flex h-full">
        {rootDir ? (
          <>
            <SidebarBody className="justify-between gap-10">
              <div className="no-scroll flex h-full flex-1 flex-col overflow-y-auto overflow-x-scroll">
                <FileManager
                  rootDir={rootDir}
                  selectedFile={selectedFile}
                  setRootDir={setRootDir}
                  setSelectedFile={setSelectedFile}
                  activeFiles={activeFiles}
                  setActiveFiles={setActiveFiles}
                />
              </div>
            </SidebarBody>
            <div className="w-full md:w-[80vw]">
              <div className="h-full min-h-8 overflow-y-scroll">
                {
                  <div>
                    <div className="no-scroll flex overflow-x-scroll">
                      {activeFiles?.map((file) => (
                        <div
                          key={file.id}
                          className={cn(
                            "relative flex cursor-pointer items-center gap-2 border border-neutral-950 px-3 py-1 text-sm font-semibold text-white focus:outline-none",
                            file.id === selectedFile?.id && "bg-black"
                          )}
                          onClick={(e) => {
                            handleTabSelect(file)
                          }}
                        >
                          <FileIcon name={file.name} />
                          {file.name}
                          <button
                            onClick={(e) => {
                              console.log(e)
                              e.stopPropagation()
                              handleTabClose(file)
                            }}
                            className="ml-2 text-gray-400 hover:text-gray-200"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                    {selectedFile ? (
                      <div key={selectedFile?.id}>
                        <MonacoEditor selectedFile={selectedFile} />
                      </div>
                    ) : (
                      <NoFileSelected />
                    )}
                  </div>
                }
              </div>
              {/* <MonacoEditor selectedFile={selectedFile} /> */}
            </div>
          </>
        ) : (
          <div className="w-full">
            <GettingStarted />
          </div>
        )}
      </div>
    </div>
  )
}

export default IDE
