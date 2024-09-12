"use client"
import { CopyBlock, dracula } from "react-code-blocks"
import { PlaceholdersAndVanishInput } from "../search-input"
import Modal2 from "../modal2"
import { useState, useRef, useEffect } from "react"
import { useCompletion } from "ai/react"
import { Content } from "@google/generative-ai"
import { GenerateCustomizationInstructions } from "@/utils/prompt"
import { Directory, File } from "@/interface/custom/folder-tree/folder-tree"
import { useRouter } from "next/navigation"

export const CustomizeModal = ({
  text,
  open,
  setOpen,
}: {
  text: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const placeholders = ["customize the code", "ask me anything", "ask me to change any part"]
  const [tex, settex] = useState(text)
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([{ role: "ai", content: text }])

  const chatContainerRef = useRef<HTMLDivElement>(null) // Ref for the chat container

  const { complete } = useCompletion({
    api: "/api/customize",
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settex(e.target.value)
  }

  const prom: Content[] = [
    GenerateCustomizationInstructions(),
    {
      parts: [{ text: tex }],
      role: "user",
    },
  ]

  const onSubmit = () => {
    setMessages((prev) => [...prev, { role: "user", content: tex }])
    complete("", {
      body: {
        messages: prom,
      },
    })
      .then((newCompletion) => {
        const aiResponse = newCompletion || "No response"
        setMessages((prev) => [...prev, { role: "ai", content: aiResponse }])
      })
      .catch((err) => console.log(err))
    settex("")
  }

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages]) // This effect runs whenever 'messages' updates
  const handleMoveToEditor = (content: string) => {
    const tempFile: File = {
      id: `temp-${Date.now()}`,
      name: `temp-${Date.now()}.sol`, // Temporary file name
      type: "file",
      parentId: "0",
      depth: 1,
      content, // Set AI response as content
    }
    const init: Directory = {
      id: "0",
      name: "root",
      type: "directory",
      depth: 0,
      dirs: [],
      files: [tempFile],
      parentId: "0",
    }
    const varr = JSON.stringify(init)
    router.push(`/ide?content=${varr}`, {
      scroll: true,
    })
    console.log("dekh lo ", varr)
  }
  return (
    <Modal2
      isOpen={open}
      onClose={() => setOpen(false)}
      className=""
    >
      <div
        ref={chatContainerRef} // Attach the ref to the chat container
        className="chat-container no-scrollbar overflow-y-auto"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-bubble ${msg.role === "ai" ? "bg-gray-800 text-white" : "bg-black text-white"} p-4`}
          >
            {msg.role === "ai" ? (
              <>
                <CopyBlock
                  language={"solidity"}
                  text={msg.content}
                  showLineNumbers={true}
                  theme={dracula}
                  codeBlock
                />
                <button
                  onClick={() => handleMoveToEditor(msg.content)}
                  className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
                >
                  Move to Editor
                </button>
              </>
            ) : (
              <p>{msg.content}</p>
            )}
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 z-20 bg-[#282a36]">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </Modal2>
  )
}
