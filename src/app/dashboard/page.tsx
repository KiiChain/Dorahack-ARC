"use client"

import React, { useEffect, useState } from "react"

import axios from "axios"
import { ConnectKitButton } from "connectkit"
import { ReactSearchAutocomplete } from "react-search-autocomplete"
import { toast } from "sonner"
import { useAccount } from "wagmi"

import { searchModule } from "@/data"

import { Chads } from "@/components"
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

  const [isLoading, setIsLoading] = useState(true)
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
          setIsLoading(false)
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
    <>
      {isConnected && (
        <div className="flex w-screen justify-between pt-5">
          {/* Searchbar */}
          <div className="relative w-[420px]">
            <div className="absolute z-20 w-[420px]">
              <ReactSearchAutocomplete
                placeholder="Search anything"
                showNoResultsText={"Hmm... Couldn't find anything on that!"}
                items={searchModule}
                styling={{
                  borderRadius: "8px",
                  backgroundColor: "#2C3235",
                  color: "#FBFBFB",
                  hoverBackgroundColor: "#1E2224",
                }}
              />
            </div>
          </div>

          {/* User */}
          <div className="relative -translate-x-[80px]">
            <ConnectKitButton.Custom>
              {({ isConnected, address, truncatedAddress, show }) => {
                return (
                  <div className="flex items-center space-x-4">
                    <Chads
                      className="w-12 rounded"
                      seed={address ?? "guest"}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <span className="w-full text-start text-sm text-neutral-100">{truncatedAddress}</span>
                      <button
                        onClick={show}
                        className="w-full text-start text-xs text-blue-500 hover:underline"
                      >
                        Manage Account
                      </button>
                    </div>
                  </div>
                )
              }}
            </ConnectKitButton.Custom>
          </div>
        </div>
      )}
      <div className="flex min-h-screen flex-col py-5 pb-20 text-neutral-100">
        <div className="grid grid-cols-4">
          {/* User not signed in */}
          <div className="col-span-3 flex w-full flex-col">
            {!isConnected ? (
              <div className="flex w-full flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold">Welcome to KiiChain</h1>
                <p className="mt-4 text-lg">Sign in to get started</p>
              </div>
            ) : (
              <div className="flex w-full flex-col items-center justify-center space-y-10">
                <Contracts contracts={contracts} />
                <Transactions
                  transactions={transactions}
                  isLoading={isLoading}
                />
              </div>
            )}
          </div>
          <div className="px-5">
            <h2 className="mb-4 text-xl font-semibold">More</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Explore Prebuilt Contracts",
                  description:
                    "Browse through a wide variety of prebuilt and audited smart contracts and interact with them",
                  gradient: "from-blue-500 to-purple-600",
                  link: "/explore",
                },
                {
                  title: "Open Integrated IDE",
                  description:
                    "Launch the integrated development environment to start coding and deploying your smart contracts directly from your browser",
                  gradient: "from-green-500 to-teal-600",
                  link: "/ide",
                },
                {
                  title: "Learning Resources",
                  description:
                    "Access a variety of tutorials, guides and other educational materials to help you get started with KiiChain",
                  gradient: "from-yellow-500 to-orange-600",
                  link: "/learning",
                },
                {
                  title: "Comprehensive Documentation",
                  description:
                    "Find detailed and thorough documentation for KiiChain, covering all its features and functionalities",
                  gradient: "from-red-500 to-pink-600",
                  link: "/docs",
                },
                {
                  title: "Explore our AI",
                  description: "Explore our fine tuned AI to help you with your smart contract development",
                  gradient: "from-purple-500 to-indigo-600",
                  link: "/ai",
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
      </div>
    </>
  )
}

export default DashboardPage

const Contracts: React.FC<{ contracts: readonly IContract[] }> = ({ contracts }) => {
  return (
    <div className="w-full">
      <h2 className="mb-4 w-full px-2 text-start text-xl font-semibold">My Contracts</h2>
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

const Transactions: React.FC<{ transactions: ITransaction[]; isLoading: boolean }> = ({ transactions, isLoading }) => {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="w-full">
      {/* Left Section: Deployed Contracts */}
      <h2 className="mb-4 w-full px-2 text-start text-xl font-semibold">All transactions</h2>
      {isLoading ? (
        <div className="">
          <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-light-1"></div>
        </div>
      ) : transactions.length > 0 ? (
        <ul className="w-full space-y-4">
          {transactions.map((contract, index) => (
            <li
              onClick={() =>
                setExpanded((prev) => (prev === contract.transaction.hash ? null : contract.transaction.hash))
              }
              key={index}
              className="flex cursor-pointer flex-col space-y-2 rounded-lg bg-dark-6/50 px-4 py-2 shadow-md backdrop-blur-lg"
            >
              <div className="flex items-center justify-between">
                <div className="center w-min gap-2.5 whitespace-nowrap">
                  <a
                    href={`https://app.kiichain.io/kiichain/tx/${contract.transaction.hash}`}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-sm text-neutral-100 hover:text-blue-500 hover:underline"
                  >
                    {`${contract.transaction.hash}`}
                  </a>
                  <span className="text-sm text-neutral-400">
                    {(() => {
                      const now = new Date()
                      const diff = now.getTime() - contract.timestamp
                      const seconds = Math.floor(diff / 1000)
                      const minutes = Math.floor(seconds / 60)
                      const hours = Math.floor(minutes / 60)
                      const days = Math.floor(hours / 24)

                      if (days > 0) {
                        return `(${days} day${days > 1 ? "s" : ""} ago)`
                      } else if (hours > 0) {
                        return `(${hours} hour${hours > 1 ? "s" : ""} ago)`
                      } else if (minutes > 0) {
                        return `(${minutes} minute${minutes > 1 ? "s" : ""} ago)`
                      } else if (seconds > 0) {
                        return `(${seconds} second${seconds > 1 ? "s" : ""} ago)`
                      } else {
                        return `(${new Date(contract.timestamp).toLocaleString()})`
                      }
                    })()}
                  </span>
                </div>
              </div>
              {expanded === contract.transaction.hash && (
                <>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-neutral-400">From: {contract.sender}</span>
                    <span className="text-sm text-neutral-400">To: {contract.transaction.to}</span>
                    <span className="text-sm text-neutral-400">
                      Value: {parseInt(contract.transaction.value, 16) / 1e18} ETH
                    </span>
                    <span className="text-sm text-neutral-400">Gas: {parseInt(contract.transaction.gas, 16)}</span>
                    <span className="text-sm text-neutral-400">
                      Gas Price: {parseInt(contract.transaction.gasPrice, 16) / 1e9} Gwei
                    </span>
                  </div>
                  <div className="mt-2 space-x-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white shadow-md"
                    >
                      Decode Transaction
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        navigator.clipboard.writeText(contract.transaction.hash)
                      }}
                      className="rounded-lg bg-zinc-700 px-4 py-2 text-sm text-neutral-100 shadow-md"
                    >
                      Copy details
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="w-full rounded-lg bg-zinc-700 p-4 text-neutral-400 shadow-md">
          <p>No transactions yet</p>
        </div>
      )}
    </div>
  )
}
