import React from "react"

import { File } from "@/interface/folder-tree/folder-tree"
import Editor from "@monaco-editor/react"

export const MonacoEditor = ({ selectedFile }: { selectedFile: File | undefined }) => {
  if (!selectedFile) return null

  const code = selectedFile.content
  let language = selectedFile.name.split(".").pop()

  if (language === "js" || language === "jsx") language = "javascript"
  else if (language === "ts" || language === "tsx") language = "typescript"

  return (
    <div className="m-0 w-full text-[16px]">
      <Editor
        height="100vh"
        language={language}
        value={code}
        theme="vs-dark"
      />
    </div>
  )
}
