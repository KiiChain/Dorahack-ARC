"use client"

import React, { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import axios from "axios"
import { ConnectKitButton } from "connectkit"
import { ReactSearchAutocomplete } from "react-search-autocomplete"
import { toast } from "sonner"
import { useAccount } from "wagmi"
import { useTheme } from "@/providers/theme"

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
  const router = useRouter()
  const { theme } = useTheme()
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
    <article
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-4 py-8 lg:px-8"
      style={{ backgroundColor: theme.bgColor }}
    >
      {/* Header Section */}
      {isConnected && (
        <header
          className="flex items-center justify-between rounded-xl p-4"
          style={{ backgroundColor: theme.boxColor }}
        >
          <div className="relative w-[420px]">
            <ReactSearchAutocomplete
              placeholder="Search anything"
              showNoResultsText={"Hmm... Couldn't find anything on that!"}
              items={searchModule}
              styling={{
                backgroundColor: theme.bgColor,
                color: theme.primaryTextColor,
                hoverBackgroundColor: theme.bgColor,
              }}
            />
          </div>

          <ConnectKitButton.Custom>
            {({ address, truncatedAddress, show }) => (
              <div
                className="flex items-center gap-4 rounded-lg p-3"
                style={{ backgroundColor: theme.bgColor }}
              >
                <Chads
                  className="h-10 w-10 rounded-full"
                  seed={address ?? "guest"}
                />
                <div className="flex flex-col">
                  <span style={{ color: theme.primaryTextColor }}>{truncatedAddress}</span>
                  <button
                    onClick={show}
                    style={{ color: theme.tertiaryTextColor }}
                    className="text-start text-xs hover:underline"
                  >
                    Manage Account
                  </button>
                </div>
              </div>
            )}
          </ConnectKitButton.Custom>
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {!isConnected ? (
          <div
            className="flex h-[60vh] flex-col items-center justify-center rounded-xl backdrop-blur"
            style={{ backgroundColor: theme.boxColor }}
          >
            <h1
              className="text-5xl font-bold"
              style={{ color: theme.primaryTextColor }}
            >
              Welcome to KiiChain
            </h1>
            <p
              className="mt-4 text-lg"
              style={{ color: theme.secondaryTextColor }}
            >
              Connect your wallet to get started
            </p>
            <ConnectKitButton.Custom>
              {({ show }) => (
                <Button
                  onClick={show}
                  className="mt-8 px-8 py-2"
                  style={{
                    backgroundColor: theme.accentColor,
                    color: theme.primaryTextColor,
                  }}
                >
                  Connect Wallet
                </Button>
              )}
            </ConnectKitButton.Custom>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Left Section: Contracts & Transactions */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                <section
                  className="rounded-xl p-6"
                  style={{ backgroundColor: theme.boxColor }}
                >
                  <Contracts contracts={contracts} />
                </section>
                <section
                  className="rounded-xl p-6"
                  style={{ backgroundColor: theme.boxColor }}
                >
                  <Transactions
                    transactions={transactions}
                    isLoading={isLoading}
                  />
                </section>
              </div>
            </div>

            {/* Right Section: Quick Actions */}
            <div className="lg:col-span-1">
              <div
                className="sticky top-24 rounded-xl p-6"
                style={{ backgroundColor: theme.bgColor }}
              >
                <h2
                  className="mb-4 text-xl font-semibold"
                  style={{ color: theme.primaryTextColor }}
                >
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      title: "Explore Prebuilt Contracts",
                      description: "Browse through audited smart contracts",
                      gradient: theme.accentColor,
                      link: "/explore",
                    },
                    {
                      title: "Open IDE",
                      description: "Start coding in the browser",
                      gradient: theme.tertiaryTextColor,
                      link: "/ide",
                    },
                    {
                      title: "Learning Resources",
                      description: "Access tutorials and guides",
                      gradient: theme.quaternaryTextColor,
                      link: "/learning",
                    },
                    {
                      title: "Documentation",
                      description: "Read detailed documentation",
                      gradient: theme.accentColor,
                      link: "/docs",
                    },
                    {
                      title: "AI Assistant",
                      description: "Get help from our AI",
                      gradient: theme.tertiaryTextColor,
                      link: "/ai",
                    },
                  ].map((option, index) => (
                    <button
                      key={index}
                      onClick={() => router.push(option.link)}
                      className="group relative w-full overflow-hidden rounded-lg p-4 text-left transition-all hover:scale-[1.02]"
                      style={{ backgroundColor: theme.boxColor }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10"
                        style={{ backgroundColor: option.gradient }}
                      />
                      <h3
                        style={{ color: theme.primaryTextColor }}
                        className="text-sm font-medium"
                      >
                        {option.title}
                      </h3>
                      <p
                        style={{ color: theme.secondaryTextColor }}
                        className="mt-1 text-xs"
                      >
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </article>
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
