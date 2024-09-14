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
import Modal2 from "@/ui/modal2"

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
      if (compiled.errors && compiled.errors.length > 0) {
        const err = compiled.errors.map((er) => er.formattedMessage)
        setError(JSON.stringify(err))
        return
      }

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
  const { isConnected, address } = useAccount()
  const { switchChain } = useSwitchChain()

  const [selected, setSelected] = useState<IPresent[]>([])
  const [args, setArgs] = useState<string[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [currentContract, setCurrentContract] = useState<IPresent | null>(null)

  // Extract constructor arguments from ABI
  const getConstructorParams = (abi: Abi) => {
    const constructorAbi = abi.find((item) => item.type === "constructor")
    return constructorAbi ? constructorAbi.inputs : []
  }

  // Iterate through the sources and find the contract with the same name
  useEffect(() => {
    const res: IPresent[] = []
    Object.keys(sources).forEach((key) => {
      const contract = compiled.find((c) => c.name === key)
      if (contract) res.push(contract)
    })
    setSelected(res)
  }, [compiled, sources])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.info("Copied to clipboard", { position: "bottom-right" })
  }

  // Open modal to collect arguments
  const handleDeployClick = (contract: IPresent) => {
    setCurrentContract(contract)
    setShowModal(true)
  }

  // Handle input change for constructor arguments
  const handleArgChange = (index: number, value: string) => {
    const newArgs = [...args]
    newArgs[index] = value
    setArgs(newArgs)
  }

  // Deploy the contract with collected arguments
  const handleDeploy = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first")
      return
    }

    if (!currentContract) return

    await switchChain({ chainId: KiiChain.id })

    if (!currentContract.abi || !currentContract.bytecode) {
      toast.error("Please compile the contract first")
      return
    }

    // Check if all arguments are provided otherwise show an error
    const constructorParams = getConstructorParams(currentContract.abi)
    if (constructorParams.length !== args.length || args.some((arg) => !arg.trim())) {
      toast.error("Please provide all constructor arguments")
      return
    }

    try {
      const contract = await deployContract({
        abi: currentContract.abi,
        bytecode: currentContract.bytecode,
        args: args,
      })

      console.log("Contract deployed at:", contract)
      toast.success(`Deploying contract`)
      setShowModal(false)
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
            <Button onClick={() => copyToClipboard(JSON.stringify(contract.abi, null, 2))}>Copy ABI</Button>
          </div>
          <div className="mt-2">
            <Button onClick={() => copyToClipboard(contract.bytecode)}>Copy Bytecode</Button>
            <pre className="no-scroll mt-2 max-h-40 overflow-y-auto rounded bg-dark-6 p-2">{contract.bytecode}</pre>
          </div>

          {/* Request Airdrop / Connect Wallet / Switch Chain / Deploy Button */}
          {!isConnected && (
            <ConnectKitButton.Custom>
              {({ isConnected, show }) => (
                <Button
                  className="mt-4 w-full transform rounded bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-bold text-white shadow-lg"
                  onClick={show}
                >
                  Connect Wallet
                </Button>
              )}
            </ConnectKitButton.Custom>
          )}

          {isConnected && address && <RequestToken address={address} />}

          {isConnected && (
            <>
              <Button
                className="mt-4 w-full transform rounded bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-bold text-white shadow-lg"
                onClick={() => handleDeployClick(contract)}
              >
                Deploy to KiiChain
              </Button>
            </>
          )}
        </div>
      ))}

      {/* Modal for entering constructor arguments */}
      {showModal && currentContract && (
        <>
          <div className="fixed inset-0 z-[10] bg-black/50" />
          <Modal2
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            className="relative z-[20] flex h-[50vh] flex-col rounded-t-[10px] bg-dark-2 p-5 outline-none ring-0"
          >
            <h3 className="text-center text-2xl font-bold">Deploy {currentContract.name}</h3>

            <div className="mt-4 space-y-2.5">
              <input
                type="text"
                placeholder="Contract Name"
                className="block w-full rounded-md bg-light-2/25 px-3 py-2 text-black shadow-sm outline-0 ring-0"
              />
              <input
                type="text"
                placeholder="Contract description"
                className="block w-full rounded-md bg-light-2/25 px-3 py-2 text-black shadow-sm outline-0 ring-0"
              />
              {getConstructorParams(currentContract.abi).map((param, index) => (
                <div
                  className=""
                  key={index}
                >
                  <label className="block text-sm font-medium text-light-2">
                    {param.name} ({param.type})
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter ${param.name}`}
                    value={args[index] || ""}
                    onChange={(e) => handleArgChange(index, e.target.value)}
                    className="block w-full rounded-md bg-light-2/25 px-3 py-2 text-black shadow-sm outline-0 ring-0"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="w-full transform whitespace-nowrap rounded bg-dark-3 px-4 py-2 text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-dark-3/75 focus:outline-none focus:ring-2 focus:ring-dark-1 focus:ring-opacity-50"
                onClick={handleDeploy}
              >
                Deploy Contract
              </button>
            </div>
          </Modal2>
        </>
      )}
    </div>
  )
}
