"use client"
import React, { useEffect, useRef, useState } from "react"

import { useRouter } from "next/navigation"

import { useCompletion } from "ai/react"
import { CopyBlock, dracula } from "react-code-blocks"

import { Directory, File } from "@/interface/custom/folder-tree/folder-tree"
import { Content } from "@google/generative-ai"

import { GenerateCustomizationInstructions } from "@/utils/prompt"

import Modal2 from "../modal2"
import { PlaceholdersAndVanishInput } from "../search-input"

const placeholders = ["customize the code", "ask me anything", "ask me to change any part"]

export const CustomizeModal = ({
  title,
  text: content,
  open,
  setOpen,
}: {
  title?: string
  text: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const router = useRouter()

  const chatContainerRef = useRef<HTMLDivElement>(null)

  const [text, setText] = useState(content)
  const [messages, setMessages] = useState<{ role: "user" | "ai" | "generic"; content: string }[]>([])

  const { complete } = useCompletion({
    api: "/api/customize",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onSubmit = () => {
    setMessages((prev) => [...prev, { role: "user", content: text }])

    const payload: Content[] = [
      GenerateCustomizationInstructions(),
      {
        parts: [{ text: text }],
        role: "user",
      },
    ]

    complete("", {
      body: {
        messages: payload,
      },
    })
      .then((newCompletion) => {
        const aiResponse = newCompletion || "There was an error with the AI response. Please try again."
        const cleanedResponse = aiResponse.replace(/```(\w+)?/g, "")
        setMessages((prev) => [...prev, { role: "ai", content: cleanedResponse }])
      })
      .catch((err) => console.log(err))
    setText("")
  }

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  // If messages are empty and content is not empty, add the content to the messages as generic
  useEffect(() => {
    if (title && messages.length === 0) {
      setMessages((prev) => [...prev, { role: "generic", content: `Chatting with ${title}` }])
    }
  }, [title, messages.length])

  const handleMoveToEditor = (content: string) => {
    const tempFile: File = {
      id: `temp-${Date.now()}`,
      name: `temp-${Date.now()}.sol`,
      type: "file",
      parentId: "0",
      depth: 1,
      content,
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
    <>
      {open ? <div className="fixed inset-0 z-[10] bg-black/50" /> : null}
      <Modal2
        isOpen={open}
        onClose={() => setOpen(false)}
        className="relative z-[20] flex flex-col rounded-t-[10px] bg-dark-3/90 p-5 outline-none ring-0"
      >
        <div className="relative h-full">
          <div
            ref={chatContainerRef}
            className="no-scrollbar max-h-full overflow-y-auto pb-28"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message-bubble ${msg.role === "ai" ? "bg-dark-5 text-white" : msg.role === "user" ? "bg-black text-white" : "bg-zinc-800 text-center text-light-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)]"} p-4`}
              >
                {msg.role === "ai" ? (
                  <>
                    <CopyBlock
                      language={"solidity"}
                      text={msg.content}
                      theme={dracula}
                      codeBlock
                    />
                    <div className="center mt-2.5 w-min gap-2.5">
                      <button
                        onClick={() => handleMoveToEditor(msg.content)}
                        className="transform whitespace-nowrap rounded bg-dark-2 px-4 py-2 text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-dark-1 focus:outline-none focus:ring-2 focus:ring-dark-1 focus:ring-opacity-50"
                      >
                        Open in IDE
                      </button>
                      <button
                        onClick={() => {}}
                        className="transform whitespace-nowrap rounded bg-dark-2 px-4 py-2 text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-dark-1 focus:outline-none focus:ring-2 focus:ring-dark-1 focus:ring-opacity-50"
                      >
                        Save Code
                      </button>
                    </div>
                  </>
                ) : msg.role === "user" ? (
                  <div>{msg.content}</div>
                ) : (
                  <div>{msg.content}</div>
                )}
              </div>
            ))}
          </div>

          <div className="absolute bottom-2.5 left-1/2 z-[20] w-full -translate-x-1/2">
            <div className="absolute h-[250%] w-full -translate-y-10 bg-gradient-to-t from-dark-3 via-dark-3 to-transparent" />
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </Modal2>
    </>
  )
}
