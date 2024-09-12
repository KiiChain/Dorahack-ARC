"use client"

import React, { useEffect, useState } from "react"

import axios from "axios"
import { ConnectKitButton } from "connectkit"
import { toast } from "sonner"
import { Abi } from "viem"
import { useAccount, useDeployContract, useSwitchChain } from "wagmi"

import { KiiChain } from "@/kiichain"

import RequestToken from "@/components/faucet/request-token"
import { Provider } from "@/providers"

interface ISources {
  [key: `${string}.sol`]: {
    content: string
  }
}

interface IPresent {
  name: string
  abi: Abi
  bytecode: `0x${string}`
  opcode: string
  sourceMap: string
  metadata: Record<string, unknown>
}

const CompilePage = () => {
  const [sources, setSources] = useState<ISources>({
    "SimpleStorage.sol": {
      content: `
        // SPDX-License-Identifier: MIT

        import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

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
  })

  const [output, setOutput] = useState<Array<IPresent>>([])
  const [error, setError] = useState<string | null>(null)

  const compileContract = async () => {
    try {
      // Use Axios to send the sources to the API for compilation
      const response = await axios.post("/api/contract/compile", { sources })

      const data = response.data

      if (!response.status || !data.compiled) {
        throw new Error(data.error || "Failed to compile contract")
      }

      // Extract ABI and bytecode
      const compiled = data.compiled as ICompilerOutput

      console.log("Compiled:", { compiled })

      const res: IPresent[] = []
      Object.keys(compiled.contracts).forEach((key) => {
        const contract = compiled.contracts[key as keyof typeof compiled.contracts][
          key.replace(".sol", "")
        ] as ICompilerOutput["contracts"][`${string}.sol`][string]

        console.log("Contract:", { contract })

        if (!contract) {
          return
        }

        res.push({
          name: key,
          abi: contract.abi,
          bytecode: `0x${contract.evm.bytecode.object}`,
          opcode: contract.evm.bytecode.opcodes,
          sourceMap: contract.evm.bytecode.sourceMap,
          metadata: contract.metadata ? JSON.parse(contract.metadata) : {},
        })
      })

      // Sort res in a way the contract from the first source is first
      res.sort((a, b) => {
        return Object.keys(sources).indexOf(b.name) - Object.keys(sources).indexOf(a.name)
      })

      setOutput(res)
      setError(null)
    } catch (e) {
      console.error("Compilation error:", e)
      setError("Failed to compile contract")
    }
  }

  return (
    <Provider>
      <div className="flex flex-col gap-4 p-4 pt-32">
        {JSON.stringify(sources)}
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={compileContract}
        >
          Compile
        </button>

        {error && <div className="text-red-500">{error}</div>}

        {/* Deployable */}
        <Deployable
          compiled={output}
          sources={sources}
        />

        {/* Outputs */}
        <Display output={output} />
      </div>
    </Provider>
  )
}

export default CompilePage

const Display = ({ output }: { output: IPresent[] }) => {
  const [expanded, setExpanded] = useState<Array<number>>([])

  const toggleExpand = (index: number) => {
    setExpanded((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.info("Copied to clipboard", { position: "bottom-right" })
  }

  const downloadJson = (data: Record<string, unknown>, filename: string) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${filename}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-4">
      {output.map((contract, index) => (
        <div
          key={index}
          className="rounded border border-gray-300 p-4 shadow-lg"
        >
          {/* Contract Name */}
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">{contract.name}</div>
            <button
              onClick={() => toggleExpand(index)}
              className="text-sm text-blue-500 underline hover:text-blue-700"
            >
              {expanded.includes(index) ? "View Less" : "View More"}
            </button>
          </div>

          {/* Basic Information */}
          {expanded.includes(index) && (
            <>
              {/* ABI Section */}
              <div className="mt-2">
                <div className="flex justify-between">
                  <div className="text-sm text-gray-500">ABI</div>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(contract.abi, null, 2))}
                    className="text-sm text-blue-500 underline hover:text-blue-700"
                  >
                    Copy ABI
                  </button>
                </div>
                <pre className="no-scroll max-h-40 overflow-y-auto rounded bg-dark-6 p-2">
                  {JSON.stringify(contract.abi, null, 2)}
                </pre>
              </div>

              {/* Bytecode Section */}
              <div className="mt-2">
                <div className="flex justify-between">
                  <div className="text-sm text-gray-500">Bytecode</div>
                  <button
                    onClick={() => copyToClipboard(contract.bytecode)}
                    className="text-sm text-blue-500 underline hover:text-blue-700"
                  >
                    Copy Bytecode
                  </button>
                </div>
                <pre className="no-scroll max-h-40 overflow-y-auto rounded bg-dark-6 p-2">{contract.bytecode}</pre>
              </div>

              {/* Opcode Section */}
              <div className="mt-2">
                <div className="text-sm text-gray-500">Opcode</div>
                <pre className="no-scroll max-h-20 overflow-y-auto rounded bg-dark-6 p-2">{contract.opcode}</pre>
              </div>

              {/* Source Map Section */}
              <div className="mt-2">
                <div className="text-sm text-gray-500">Source Map</div>
                <pre className="no-scroll max-h-20 overflow-y-auto rounded bg-dark-6 p-2">{contract.sourceMap}</pre>
              </div>

              {/* Metadata Section with download option */}
              <div className="mt-2">
                <div className="flex justify-between">
                  <div className="text-sm text-gray-500">Metadata</div>
                  <button
                    onClick={() => downloadJson(contract.metadata, contract.name)}
                    className="text-sm text-blue-500 underline hover:text-blue-700"
                  >
                    Download Metadata
                  </button>
                </div>
                <pre className="no-scroll max-h-40 overflow-y-auto rounded bg-dark-6 p-2">
                  {JSON.stringify(contract.metadata, null, 2)}
                </pre>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

const Deployable = ({ compiled, sources }: { compiled: IPresent[]; sources: ISources }) => {
  const { deployContract } = useDeployContract()
  const { isConnected, chain, address } = useAccount()
  const { switchChain } = useSwitchChain()

  const [selected, setSelected] = useState<IPresent[]>([])

  // Iterate through the sources and find the contract with the same name
  // Selected would be an array of contracts that are deployable and its bytecode + abi
  // would be used to deploy the contract
  useEffect(() => {
    const res: IPresent[] = []
    Object.keys(sources).forEach((key) => {
      const contract = compiled.find((c) => c.name === key)

      if (contract) {
        res.push(contract)
      }
    })

    setSelected(res)
  }, [compiled, sources])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.info("Copied to clipboard", { position: "bottom-right" })
  }

  const handleDeploy = async (bytecode: IPresent["bytecode"], abi: IPresent["abi"]) => {
    if (!isConnected) {
      toast.error("Please connect your wallet first")
      return
    }

    await switchChain({ chainId: KiiChain.id })

    if (!abi || !bytecode) {
      toast.error("Please compile the contract first")
      return
    }

    try {
      const contract = await deployContract({
        abi,
        bytecode,
        args: [],
      })

      console.log("Contract deployed at:", contract)
    } catch (e) {
      console.error("Deployment error:", e)
      toast.error("Failed to deploy contract")
    }
  }

  return (
    <div className="space-y-4">
      {selected.map((contract, index) => (
        <div
          key={index}
          className="rounded border border-gray-300 p-4 shadow-lg"
        >
          <div className="text-lg font-bold">{contract.name}</div>
          <div className="mt-2">
            <div className="flex justify-between">
              <div className="text-sm text-gray-500">ABI</div>
              <button
                onClick={() => copyToClipboard(JSON.stringify(contract.abi, null, 2))}
                className="text-sm text-blue-500 underline hover:text-blue-700"
              >
                Copy ABI
              </button>
            </div>
            <pre className="no-scroll max-h-40 overflow-y-auto rounded bg-dark-6 p-2">
              {JSON.stringify(contract.abi, null, 2)}
            </pre>
          </div>
          <div className="mt-2">
            <div className="flex justify-between">
              <div className="text-sm text-gray-500">Bytecode</div>
              <button
                onClick={() => copyToClipboard(contract.bytecode)}
                className="text-sm text-blue-500 underline hover:text-blue-700"
              >
                Copy Bytecode
              </button>
            </div>
            <pre className="no-scroll max-h-40 overflow-y-auto rounded bg-dark-6 p-2">{contract.bytecode}</pre>
          </div>

          {!isConnected && (
            <ConnectKitButton.Custom>
              {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
                return (
                  <button
                    className="transition-transfor mt-4 w-full transform rounded bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-bold text-white shadow-lg hover:from-green-500 hover:to-blue-600"
                    onClick={show}
                  >
                    Connect your wallet
                  </button>
                )
              }}
            </ConnectKitButton.Custom>
          )}

          {isConnected && address && <RequestToken address={address} />}

          {isConnected && chain?.id !== KiiChain.id && (
            <button
              className="transition-transfor mt-4 w-full transform rounded bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-bold text-white shadow-lg hover:from-green-500 hover:to-blue-600"
              onClick={() => switchChain({ chainId: KiiChain.id })}
            >
              Switch to KiiChain
            </button>
          )}

          {isConnected && chain?.id === KiiChain.id && (
            <button
              className="transition-transfor mt-4 w-full transform rounded bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-bold text-white shadow-lg hover:from-green-500 hover:to-blue-600"
              onClick={() => {
                handleDeploy(contract.bytecode, contract.abi)
                console.log(`Deploying ${contract.name}`)
              }}
            >
              Deploy to KiiChain
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
