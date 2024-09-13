"use client"

import { Directory } from "@/interface/custom/folder-tree/folder-tree"
import { Button } from "@/ui/button"
import { copyToClipboard } from "@/utils"
import React, { useState } from "react"
import { IoMdClipboard } from "react-icons/io";
import { FaHardHat } from "react-icons/fa";
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

    return (
        <div className="flex  flex-col items-center justify-center py-2">
            <div className="mb-4 flex flex-col gap-4">
                <Button
                    className="flex gap-2 items-center transition-all  bg-[#3c3c3c] !outline-none  px-2 py-1  whitespace-nowrap w-full"
                    onClick={() => copyToClipboard(JSON.stringify(rootDir, null, 2))}
                >
                    Copy To Clipboard <IoMdClipboard className="ml-auto"/>
                </Button>
                <Button
                    className="flex gap-2 items-center transition-all  bg-[#3c3c3c] !outline-none  px-2 py-1  whitespace-nowrap w-full"
                    onClick={() => sendContract("hardhat")}>Hardhat <FaHardHat className="ml-auto"/></Button>
                <Button
                    className="flex gap-2 items-center transition-all  bg-[#3c3c3c] !outline-none  px-2 py-1  whitespace-nowrap w-full"
                    onClick={() => sendContract("foundry")}>Foundry</Button>
                <Button
                    className="flex gap-2 items-center transition-all  bg-[#3c3c3c] !outline-none  px-2 py-1  whitespace-nowrap w-full"
                    onClick={() => sendContract("standalone")}
                >Standalone</Button>

            </div>
            
        </div>
    )
}

export default Download
