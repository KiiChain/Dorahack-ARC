"use client"

import React, { CSSProperties, useState } from "react"

import { FaHardHat } from "react-icons/fa"
import { IoMdClipboard } from "react-icons/io"
import SyncLoader from "react-spinners/SyncLoader"

import { Directory } from "@/interface/custom/folder-tree/folder-tree"

import { Button } from "@/ui/button"
import { copyToClipboard } from "@/utils"
const Download = ({ contracts, rootDir }: { contracts: ISources; rootDir: Directory }) => {
  const [isLoading, setIsLoading] = useState(false)

  const sendContract = async (framework: string) => {
    setIsLoading(true)

    try {
      const res = await fetch("/api/contract/zip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ framework, contracts }),
      })

      if (!res.ok) {
        throw new Error("Failed to fetch")
      }

      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "project.zip"
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading file:", error)
    } finally {
      setIsLoading(false)
    }
  }
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  }
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="mb-4 flex flex-col gap-4">
        <SyncLoader
          color={"#fff"}
          loading={isLoading}
          cssOverride={override}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="mt-4"
        />
        <Button
          className="flex w-full items-center gap-2 whitespace-nowrap bg-[#3c3c3c] px-2 py-1 !outline-none transition-all"
          onClick={() => copyToClipboard(JSON.stringify(rootDir, null, 2))}
        >
          Copy To Clipboard <IoMdClipboard className="ml-auto" />
        </Button>
        <Button
          className="flex w-full items-center gap-2 whitespace-nowrap bg-[#3c3c3c] px-2 py-1 !outline-none transition-all"
          onClick={() => sendContract("hardhat")}
        >
          Hardhat <FaHardHat className="ml-auto" />
        </Button>
        <Button
          className="flex w-full items-center gap-2 whitespace-nowrap bg-[#3c3c3c] px-2 py-1 !outline-none transition-all"
          onClick={() => sendContract("foundry")}
        >
          Foundry
        </Button>
        <Button
          className="flex w-full items-center gap-2 whitespace-nowrap bg-[#3c3c3c] px-2 py-1 !outline-none transition-all"
          onClick={() => sendContract("standalone")}
        >
          Standalone
        </Button>
      </div>
    </div>
  )
}

export default Download
