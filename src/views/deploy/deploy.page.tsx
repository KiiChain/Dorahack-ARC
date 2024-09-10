"use client"

import React, { useState } from "react"

import axios from "axios"
import { ConnectKitButton } from "connectkit"
import { Abi } from "viem"
import { useAccount, useDeployContract } from "wagmi"

import { Provider } from "@/providers"

const DeployView = () => {
  const singleFileExample = {
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

  return (
    <Provider>
      <Deploy sources={singleFileExample} />
    </Provider>
  )
}

export default DeployView

interface DeployProps {
  sources: {
    [key: `${string}.sol`]: {
      content: string
    }
  }
}

const Deploy: React.FC<DeployProps> = ({ sources }) => {
  const { deployContract } = useDeployContract()
  const { isConnected } = useAccount()

  const [abi, setAbi] = useState<Abi | null>(null)
  const [bytecode, setBytecode] = useState<`0x${string}` | null>(null)
  const [error, setError] = useState<string | null>(null)

  const compileContract = async () => {
    try {
      // Use Axios to send the sources to the API for compilation
      const response = await axios.post("/api/contract/compile", { sources })

      const data = response.data

      if (!response.status || !data.contracts) {
        throw new Error(data.error || "Failed to compile contract")
      }

      // Extract ABI and bytecode
      const contract = data.contracts[0]?.compiledData
      setAbi(contract.abi)
      setBytecode(`0x${contract.bytecode}`)
      setError(null)
    } catch (e) {
      console.error("Compilation error:", e)
      setError("Failed to compile contract")
    }
  }

  const handleDeploy = async () => {
    if (!abi || !bytecode || !isConnected) {
      setError("Please compile the contract first")
      return
    }

    try {
      const contract = await deployContract({
        abi,
        bytecode,
        args: [],
      })

      console.log("Contract deployed at:", contract)
      setError(null)
    } catch (e) {
      console.error("Deployment error:", e)
      setError("Failed to deploy contract")
    }
  }

  return (
    <>
      <ConnectKitButton />

      {/* {isConnected && (
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
      )} */}
      <div>
        <h2>Compile and Deploy Contract</h2>
        {error && <p className="text-red-500">{error}</p>}

        <button
          onClick={compileContract}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Compile
        </button>

        {abi && (
          <div>
            <h3>Contract ABI</h3>
            <pre>{JSON.stringify(abi, null, 2)}</pre>
          </div>
        )}

        {bytecode && (
          <div>
            <h3>Contract Bytecode</h3>
            <pre className="break-all">{bytecode}</pre>
          </div>
        )}

        <button
          onClick={handleDeploy}
          disabled={!abi || !bytecode || !isConnected}
          className={`${
            !abi || !bytecode || !isConnected ? "bg-gray-300" : "bg-green-500"
          } rounded px-4 py-2 text-white`}
        >
          Deploy Contract
        </button>
      </div>
    </>
  )
}
