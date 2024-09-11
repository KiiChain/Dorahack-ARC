"use client"

import React, { useState } from "react"

const Download = () => {
  const [framework, setFramework] = useState("standalone")
  const [isLoading, setIsLoading] = useState(false)

  const sendContract = async () => {
    setIsLoading(true)

    const contracts = {
      "SimpleStorage.sol": {
        content: `
          // SPDX-License-Identifier: MIT
          pragma solidity ^0.8.0;

          contract SimpleStorage {
            uint256 private _value;

            function setValue(uint256 value) public {
              _value = value;
            }

            function getValue() public view returns (uint256) {
              return _value;
            }
          }
        `,
      },
    }

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
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="mb-8 text-4xl font-bold">Smart Contract Download</h1>
      <div className="mb-4">
        <label
          htmlFor="framework"
          className="mb-2 block text-lg font-medium text-gray-700"
        >
          Select Framework
        </label>
        <select
          id="framework"
          onChange={(e) => setFramework(e.target.value)}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="standalone">Standalone</option>
          <option value="foundry">Foundry</option>
          <option value="hardhat">Hardhat</option>
        </select>
      </div>
      <button
        onClick={sendContract}
        className="rounded-md bg-indigo-600 px-6 py-2 font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Download Contract"}
      </button>
    </div>
  )
}

export default Download
