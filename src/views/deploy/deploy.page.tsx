"use client"

import React from "react"

import { useDeployContract } from "wagmi"

import { Provider } from "@/providers"

const DeployView = () => {
  return (
    <Provider>
      <Deploy />
    </Provider>
  )
}

export default DeployView

const Deploy = () => {
  const { deployContract } = useDeployContract()

  return (
    <button
      onClick={() => {
        console.log("Initiating contract deployment")
        deployContract({
          abi: [],
          args: [],
          bytecode: "0x",
        })
      }}
    >
      Deploy Contract
    </button>
  )
}
