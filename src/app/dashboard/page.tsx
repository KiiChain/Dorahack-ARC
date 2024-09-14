"use client"

import React, { useEffect, useState } from "react"

import axios from "axios"
import { toast } from "sonner"
import { useAccount } from "wagmi"

import { Button } from "@/ui/button"

interface ITransaction {
  transaction: {
    type: "0x0"
    chainId: "0x75bc371"
    nonce: "0x40d"
    to: string
    gas: "0x5208"
    gasPrice: "0xba43b7400"
    maxPriorityFeePerGas: null
    maxFeePerGas: null
    value: "0x878678326eac900000"
    input: "0x"
    v: "0xeb78706"
    r: string
    s: string
    hash: string
  }
  sender: string
  success: true
  timestamp: 1725908567000
  BlockNumber: 1438923
}

interface IContract {
  address: string
  name: string
  description: string
  version: string
  abi: string
}

const DashboardPage = () => {
  const { address, isConnected } = useAccount()

  const [transactions, setTransactions] = useState<ITransaction[]>([])
  const [contracts, setContracts] = useState<IContract[]>([])

  useEffect(() => {
    // Fetch deployed contracts
    const fetchContracts = async () => {
      try {
        if (isConnected && address) {
          const response = await axios.get(`https://kii.backend.kiivalidator.com/transactionsByAddress/${address}`)
          const data = response.data.transactions
          setTransactions(data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchContracts()
  }, [address, isConnected])

  useEffect(() => {
    // Check local storage for contracts deployed
    const contracts = localStorage.getItem("deployed-contracts")
    if (contracts) {
      try {
        setContracts(JSON.parse(contracts) ?? [])
      } catch (error) {
        console.error("Error fetching contracts: ", error)
        setContracts([])
      }
    }
  }, [])

  return (
    <div className="flex h-screen flex-col py-20 text-neutral-100">
      {/* User not signed in */}
      {!isConnected ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold">Welcome to KiiChain</h1>
          <p className="mt-4 text-lg">Sign in to get started</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Contracts contracts={contracts} />
          <Transactions transactions={transactions} />
        </div>
      )}
    </div>
  )
}

export default DashboardPage

const Contracts: React.FC<{ contracts: readonly IContract[] }> = ({ contracts }) => {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Deployed Contracts</h2>
      <div className="grid grid-cols-3 gap-4">
        {contracts.map((contract) => (
          <div key={contract.name}>
            <article className="hover:bg-muted raise-on-hover group/contract relative flex min-h-[220px] flex-col rounded-lg border-[0.1px] border-gray-500 p-4">
              <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/contract:opacity-100 dark:from-neutral-800" />

              <div className="flex justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="z-1 relative flex items-center gap-1 text-sm font-medium text-accent-4 hover:underline">
                    Flags
                  </span>
                  <div className="size-1 rounded-full bg-gray-500/75"></div>
                  {contract.version && (
                    <div className="text-secondary-foreground text-sm font-medium">v{contract.version}</div>
                  )}
                </div>
              </div>

              <div className="h-3.5"></div>
              <h3 className="text-lg font-semibold tracking-tight">{contract.name}</h3>
              <div className="text-secondary-foreground mt-1 line-clamp-3 text-sm leading-5">
                {contract.description}
              </div>
              <div className="relative mt-auto flex justify-between gap-2 pt-3">
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigator.clipboard.writeText(contract.abi)
                    toast("ABI copied to clipboard")
                  }}
                  variant="outline"
                  className="text-sm"
                >
                  Copy ABI
                </Button>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}

const Transactions: React.FC<{ transactions: ITransaction[] }> = ({ transactions }) => {
  return (
    <div className="grid grid-cols-4">
      {/* Left Section: Deployed Contracts */}
      <div className="col-span-3 p-4">
        <h2 className="mb-4 text-lg font-semibold">All transactions</h2>
        {transactions.length > 0 ? (
          <ul className="space-y-4">
            {transactions.map((contract, index) => (
              <li
                key={index}
                className="flex items-center justify-between rounded-lg bg-dark-6/50 px-4 py-2 shadow-md backdrop-blur-lg"
              >
                <div className="">
                  <div className="center w-min gap-2.5 whitespace-nowrap">
                    <p className="text-lg text-neutral-100">Test {16 - index}</p>(
                    <a
                      href={`https://app.kiichain.io/kiichain/tx/${contract.transaction.hash}`}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer text-sm text-neutral-100 hover:text-blue-500 hover:underline"
                    >
                      {`${contract.transaction.hash?.slice(0, 4)}...${contract.transaction.hash?.slice(-3)}`}
                    </a>
                    )
                  </div>
                  <p className="text-sm text-neutral-500">
                    this is a test contract to check the deployment functionality
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => navigator.clipboard.writeText(contract.transaction.hash)}
                      className="rounded-lg bg-zinc-700 px-2 py-1 text-sm text-neutral-100 shadow-md"
                    >
                      Copy details
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-lg bg-zinc-700 p-4 text-neutral-400 shadow-md">
            <p>No contracts deployed yet</p>
          </div>
        )}
      </div>

      {/* Right Section: Options */}
      <div className="p-4">
        <h2 className="mb-4 text-lg font-semibold">Explore</h2>
        <div className="space-y-4">
          {[
            {
              title: "Explore Prebuilt Contracts",
              description:
                "Browse through a wide variety of prebuilt and audited smart contracts and interact with them",
              gradient: "from-blue-500 to-purple-600",
            },
            {
              title: "Open Integrated IDE",
              description:
                "Launch the integrated development environment to start coding and deploying your smart contracts directly from your browser",
              gradient: "from-green-500 to-teal-600",
            },
            {
              title: "Learning Resources",
              description:
                "Access a variety of tutorials, guides and other educational materials to help you get started with KiiChain",
              gradient: "from-yellow-500 to-orange-600",
            },
            {
              title: "Comprehensive Documentation",
              description:
                "Find detailed and thorough documentation for KiiChain, covering all its features and functionalities",
              gradient: "from-red-500 to-pink-600",
            },
            {
              title: "Explore our AI",
              description: "Explore our fine tuned AI to help you with your smart contract development",
              gradient: "from-purple-500 to-indigo-600",
            },
          ].map((option, index) => (
            <div
              key={index}
              className="group relative transform cursor-pointer rounded-lg bg-zinc-700 p-4 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-zinc-600"
              style={{ height: "120px" }}
            >
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-r ${option.gradient} opacity-0 transition duration-300 ease-in-out group-hover:opacity-100`}
              ></div>
              <div className="relative z-10 flex h-full flex-col justify-center">
                <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-white">{option.title}</h3>
                <p className="text-sm text-neutral-400 group-hover:text-light-3/75">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
