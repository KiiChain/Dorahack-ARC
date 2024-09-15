import React, { useState } from "react"

import { CopyBlock, tomorrowNight } from "react-code-blocks"
import { toast } from "sonner"

import { Button } from "@/ui/button"

const CodeBlockWithViewMore: React.FC<{ text: string; language: string }> = ({ text, language }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const MAX_HEIGHT = 300 // Maximum height before showing "View More" button

  return (
    <div className="relative">
      <div
        className="relative"
        style={{ maxHeight: isExpanded ? "none" : MAX_HEIGHT, overflow: "hidden" }}
      >
        <CopyBlock
          language={language}
          text={text}
          showLineNumbers={true}
          theme={tomorrowNight}
          wrapLongLines
          onCopy={() => {
            toast.info("Copied to clipboard", { position: "top-right" })
          }}
          codeBlock
        />
      </div>
      {text.length > MAX_HEIGHT && (
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute bottom-4 right-4 mt-2"
          variant="outline"
        >
          {isExpanded ? "View Less" : "View More"}
        </Button>
      )}
    </div>
  )
}

export default CodeBlockWithViewMore
