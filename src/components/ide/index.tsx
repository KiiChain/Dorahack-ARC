"use client"
import React, { useEffect, useState } from "react"
import { useIDE } from "@/providers/ide"

// import { MonacoEditor } from "../editor"
// import { FileManager } from "../file-manager"
// import { SidebarBody } from "../ide-sidebar"
import { cn } from "@/lib/utils"
import { FileIcon } from "@/ui/file-tree/file-utils"
import { Directory, File } from "@/interface/custom/folder-tree/folder-tree"
import GettingStarted from "../getting-started"
import NoFileSelected from "../no-file-selected"
import { useSearchParams } from "next/navigation"
import { CSSTabs } from "@/ui/css-tabs"
import CompilePage, { Deployable } from "../compile-tab"
import { collectSolFiles } from "@/utils"
import Download from "../download"
import Audit from "../audit"
import dynamic from 'next/dynamic';
import { CircularSpinner } from "@/ui/circular-spinner"
const MonacoEditor = dynamic(() => import("@/components/editor/").then((mod) => mod.MonacoEditor), {
  ssr: false,
  loading: () => <CircularSpinner />
});
const SidebarBody = dynamic(() => import("@/components/ide-sidebar").then((mod) => mod.SidebarBody), {
  ssr: false,
  loading: () => <CircularSpinner />
})
const FileManager = dynamic(() => import("@/components/file-manager").then((mod) => mod.FileManager))

const IDE = () => {
  const { rootDir, selectedFile, setRootDir, setSelectedFile, activeFiles, setActiveFiles, handleFileUpdate } = useIDE()
  const searchparams = useSearchParams()
  const y = searchparams.get("content")
  const handleTabSelect = (file: File) => {
    setSelectedFile(file)
  }
  const [activeTab, setActiveTab] = useState<number>(0)
  // const [shouldRenderTabs,setshouldRenderTabs]=useState(rootDir && !GettingStarted)

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
    <div className="w-full h-full row-span-12 col-span-12 border border-neutral-800 p-2 rounded-lg">
      <div className="grid grid-cols-12 grid-rows-12 w-full h-full gap-1 rounded-lg">
        {
          rootDir ?
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
                label: "Download"
              }
              ,
              {
                id: "3",
                label: "Audit"
              }
            ]}
            selectedTabIndex={activeTab}
            setSelectedTab={setActiveTab}
          />:
          <div></div>
        }
        <div className="flex h-full col-span-12 row-span-11 gap-1">
          {rootDir ? (
            <>
              <SidebarBody className="justify-between gap-10">
                <div className="no-scroll flex h-full flex-1 flex-col overflow-y-auto overflow-x-scroll mt-8 gap-2">
                  {
                    activeTab == 0 ?
                      <FileManager
                        rootDir={rootDir}
                        selectedFile={selectedFile}
                        setRootDir={setRootDir}
                        setSelectedFile={setSelectedFile}
                        activeFiles={activeFiles}
                        setActiveFiles={setActiveFiles}
                      />
                      :
                      activeTab == 2 ?
                        <>
                          <Download contracts={collectSolFiles(rootDir)} rootDir={rootDir} />
                        </>
                        :
                        activeTab == 1 ?
                          <>
                            <CompilePage sources={collectSolFiles(rootDir)} />
                          </>
                          :
                          activeTab == 3 &&
                          <>
                            <Audit selectedFile={selectedFile} />
                          </>


                  }
                </div>
              </SidebarBody>
              <div className=" w-full md:w-4/5 rounded-lg">
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
                      <MonacoEditor selectedFile={selectedFile} handleFileUpdate={handleFileUpdate} />
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
