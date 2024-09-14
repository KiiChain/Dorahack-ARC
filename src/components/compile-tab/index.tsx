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
import { copyToClipboard, downloadJson } from "@/utils"
import { Button } from "@/ui/button"
import { getIcon } from "@/ui/icons"

interface IPresent {
  name: string
  abi: Abi
  bytecode: `0x${string}`
  opcode: string
  sourceMap: string
  metadata: Record<string, unknown>
}

const CompilePage = ({ sources }: { sources: ISources }) => {
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
    <div className="flex flex-col gap-4">
      {/* {JSON.stringify(sources)} */}
      <Button
        // variant="outline"
        onClick={compileContract}
        className="w-full whitespace-nowrap bg-[#3c3c3c] px-2 py-1 !outline-none"
      >
        Compile
      </Button>

      {error && <div className="text-red-500">{error}</div>}

      {/* Deployable */}
      <Deployable
        compiled={output}
        sources={sources}
      />

      {/* Outputs */}
      <Display output={output} />
    </div>
  )
}

export default CompilePage

const Display = ({ output }: { output: IPresent[] }) => {
  const [expanded, setExpanded] = useState<Array<number>>([])

  const toggleExpand = (index: number) => {
    setExpanded((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
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
              {getIcon(expanded.includes(index) ? "openDirectory" : "closedDirectory")}
            </button>
          </div>

          {/* Basic Information */}
          {expanded.includes(index) && (
            <>
              {/* ABI Section */}
              <div className="mt-2">
                <div className="flex justify-between">
                  {/* <div className="text-sm text-gray-500">ABI</div> */}
                  <Button
                    className="w-full whitespace-nowrap bg-[#3c3c3c] px-2 py-1 !outline-none transition-all"
                    onClick={() => copyToClipboard(JSON.stringify(contract.abi, null, 2))}
                  >
                    Copy ABI
                  </Button>
                </div>
              </div>

              {/* Bytecode Section */}
              <div className="mt-2">
                <div className="flex justify-between">
                  <Button
                    className="w-full whitespace-nowrap bg-[#3c3c3c] px-2 py-1 !outline-none transition-all"
                    onClick={() => copyToClipboard(contract.bytecode)}
                  >
                    Copy Bytecode
                  </Button>
                </div>
              </div>

              {/* Opcode Section */}
              <div className="mt-2">
                <pre className="no-scroll max-h-20 overflow-y-auto rounded bg-dark-6 p-2">{contract.opcode}</pre>
              </div>

              {/* Source Map Section */}
              <div className="mt-2">
                <pre className="no-scroll max-h-20 overflow-y-auto rounded bg-dark-6 p-2">{contract.sourceMap}</pre>
              </div>

              {/* Metadata Section with download option */}
              <div className="mt-2">
                <div className="flex justify-between">
                  <Button
                    onClick={() => downloadJson(contract.metadata, contract.name)}
                    className="w-full whitespace-nowrap bg-[#3c3c3c] px-2 py-1 !outline-none transition-all"
                  >
                    Download Metadata
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export const Deployable = ({ compiled, sources }: { compiled: IPresent[]; sources: ISources }) => {
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
              {/* <div className="text-sm text-gray-500">ABI</div> */}
              <Button
                className="w-full whitespace-nowrap bg-[#3c3c3c] px-2 py-1 !outline-none transition-all"
                onClick={() => copyToClipboard(JSON.stringify(contract.abi, null, 2))}
              >
                Copy ABI
              </Button>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between">
              {/* <div className="text-sm text-gray-500">Bytecode</div> */}
              <Button
                onClick={() => copyToClipboard(contract.bytecode)}
                className="w-full whitespace-nowrap bg-[#3c3c3c] px-2 py-1 !outline-none transition-all"
              >
                Copy Bytecode
              </Button>
            </div>
            <pre className="no-scroll mt-2 max-h-40 overflow-y-auto rounded bg-dark-6 p-2">{contract.bytecode}</pre>
          </div>

          {!isConnected && (
            <ConnectKitButton.Custom>
              {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
                return (
                  <Button
                    className="mt-4 w-full transform rounded bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-bold text-white shadow-lg transition-transform hover:from-green-500 hover:to-blue-600"
                    onClick={show}
                  >
                    Connect your wallet
                  </Button>
                )
              }}
            </ConnectKitButton.Custom>
          )}

          {isConnected && address && <RequestToken address={address} />}

          {isConnected && chain?.id !== KiiChain.id && (
            <Button
              className="mt-4 w-full transform rounded bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-bold text-white shadow-lg transition-transform hover:from-green-500 hover:to-blue-600"
              onClick={() => switchChain({ chainId: KiiChain.id })}
            >
              Switch to KiiChain
            </Button>
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
