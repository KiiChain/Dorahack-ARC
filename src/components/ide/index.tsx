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
import { CSSTabs } from "@/ui/css-tabs"
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
  const [activeTab, setActiveTab] = useState<number>()



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
  useEffect(()=>{
    console.log("change",activeTab)
  },[activeTab])
  useEffect(() => {
    if (activeFiles && activeFiles.length == 0) setSelectedFile(undefined)
  }, [activeFiles])
  return (
    <div className="w-full h-full row-span-12 col-span-12 border border-neutral-800 p-2 rounded-lg">
      <div className="grid grid-cols-12 grid-rows-12 w-full h-full gap-1 rounded-lg">
        {/* <TabButtons
          tabNames={tabNames}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabColors="bg-lightGray text-darkGray"
          activeTabColor="bg-blue-500 text-white"
          className=" col-span-12 row-span-1"
          seperator={false}
        /> */}
        <CSSTabs
          tabs={[
            {
              id: "0",
              label: "Editor"
            },
            
            {
              id: "1",
              label: "Compile"
            },
            {
              id: "2",
              label: "Copy to Clipboard"
            },
            {
              id: "3",
              label: "Deploy"
            },
            <Dropdown
              menuLabel="Download"
              menuItems={menuItems}
            />
          ]}
          selectedTabIndex={activeTab}
          setSelectedTab={setActiveTab}
        />
        <div className="flex h-full col-span-12 row-span-11 gap-1">
          {rootDir ? (
            <>
              <SidebarBody className="justify-between gap-10">
                <div className="no-scroll flex h-full flex-1 flex-col overflow-y-auto overflow-x-scroll mt-8 gap-2">
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
              <div className=" w-4/5 rounded-lg">
                <div className="h-full min-h-8 overflow-y-scroll rounded-lg">


                  <div className="no-scroll flex overflow-x-scroll bg-[#171616]">
                    {activeFiles?.map((file) => (
                      <div
                        key={file.id}
                        className={cn(
                          "relative flex cursor-pointer items-center gap-2 border border-neutral-950 px-3 py-1 text-sm font-semibold text-white focus:outline-none",
                          file.id === selectedFile?.id && "bg-[#3c3c3c]"
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
                    <div key={selectedFile?.id} className="h-full">
                      <MonacoEditor selectedFile={selectedFile} />
                    </div>
                  ) : (
                    <NoFileSelected />
                  )}


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
    </div>
  )
}

export default IDE
