"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useCompletion } from "ai/react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { PlaceholdersAndVanishInput } from "@/ui/search-input"

const AiChatPage = () => {
  const router = useRouter()
  const { completion, complete, isLoading } = useCompletion()
  const [input, setInput] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    complete("", {
      body: {
        messages: [
          {
            parts: [
              {
                text: `Please answer only questions related to smart contracts, such as generation, learning, resources, and optimizations. 
                For other topics, respond with: 'I thought you might be interested in learning about smart contracts. Would you like to know more about them?'. 
                For greetings or generic messages, respond with: 'Hello! How can I assist you today?'`,
              },
            ],
            role: "user",
          },
          {
            parts: [{ text: input }],
            role: "user",
          },
        ],
      },
    })

    setInput("")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-2xl rounded-lg bg-dark-2 p-6 shadow-md">
        <button
          onClick={() => router.push("/dashboard")}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>

        <h1 className="mb-6 text-center text-3xl font-bold">Arc Assistant</h1>
        <div className="mb-6 h-96 overflow-y-auto rounded-lg bg-light-2/25 p-4 text-white">
          {completion && (
            <div className="text-white">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className="text-white"
              >
                {completion}
              </ReactMarkdown>
            </div>
          )}
          {isLoading && <p className="text-gray-500">AI is thinking...</p>}
        </div>
        <div className="flex items-center space-x-4">
          <PlaceholdersAndVanishInput
            placeholders={[
              "Explain the working of ERC20 tokens",
              "What is the difference between ERC20 and ERC721 tokens?",
              "Find me a tutorial on how to create a smart contract",
            ]}
            onChange={(e) => setInput(e.target.value)}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default AiChatPage
