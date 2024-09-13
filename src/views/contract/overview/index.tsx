"use client"
import React, { useEffect, useState } from "react"

import Link from "next/link"

import axios from "axios"
import clsx from "clsx"

import { RichText } from "@/components"
import CodeBlockWithViewMore from "@/components/code-block-vmore"
import Tabs from "@/components/misc/Tabs"
import { PlaceholdersAndVanishInput } from "@/ui/search-input"

interface IContractOverviewViewProps {
  contract: IContracts
}

const ContractOverviewView: React.FC<IContractOverviewViewProps> = ({ contract }) => {
  const [sourceCode, setSourceCode] = useState<string | null>(null)

  useEffect(() => {
    // Fetch source code
    if (!sourceCode) {
      console.log("Fetching source code")
      axios
        .post("/api/explore", { contract: contract.path })
        .then((response) => {
          setSourceCode(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [])

  const deployContract = () => {
    // Deploy contract
  }

  return (
    <div className="container mx-auto max-w-7xl px-5 py-32 sm:px-8">
      <div className="py-2 md:pb-0 md:pt-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="flex flex-1 items-center gap-4">
            <div className="border-border hidden aspect-square rounded-full border p-2 md:flex">
              <div className="aspect-square h-10"></div>
            </div>
            {/* Metadata */}
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{contract.name}</h1>
                <div className="text-muted-foreground text-sm">{contract.description}</div>
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="flex gap-2"></div>
        </div>
      </div>

      <div className="h-10" />

      {/* Content */}
      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Metadata */}
        <div className="col-span-2 flex flex-col">
          {/* Content and Resources */}
          {contract.source.content.map((item, index) => {
            return (
              <RichText
                key={index}
                content={item}
              />
            )
          })}

          {/* Metadata */}
          <div className="container rounded-sm border border-gray-400/75">
            <Tabs
              headerClassName=""
              activeTabButtonClassName="bg-[#1d1f21]"
              tabs={[
                {
                  name: "Source",
                  identifier: "source",
                  content: (
                    <>
                      {sourceCode ? (
                        <CodeBlockWithViewMore
                          language={"solidity"}
                          text={JSON.parse(sourceCode) || ""}
                        />
                      ) : (
                        sourceCode
                      )}
                    </>
                  ),
                },
                {
                  name: "Functions",
                  identifier: "functions",
                  content: (
                    <>
                      <Tabs
                        activeTabButtonClassName="bg-[#1d1f21]"
                        tabs={[
                          {
                            name: "Write",
                            identifier: "write",
                            content: contract.source.functions.write ? (
                              <Viewer items={contract.source.functions.write} />
                            ) : (
                              JSON.stringify(contract.source.functions.write)
                            ),
                          },
                          {
                            name: "Read",
                            identifier: "read",
                            content: contract.source.functions.read ? (
                              <Viewer items={contract.source.functions.read} />
                            ) : (
                              JSON.stringify(contract.source.functions.read)
                            ),
                          },
                        ]}
                      />
                    </>
                  ),
                },
                {
                  name: "Events",
                  identifier: "events",
                  content: contract.source.events ? (
                    <Viewer items={contract.source.events} />
                  ) : (
                    JSON.stringify(contract.source.events)
                  ),
                },
              ]}
            />
          </div>
        </div>

        {/* Details */}
        {/* <div className="flex flex-col"> */}
        <div className="sticky top-4 h-fit space-y-2">
          <RichText
            content={{
              tag: "h2",
              content: "Extensions",
              className: "",
            }}
          />
          <div className="flex flex-col gap-1">
            {contract.source.extensions.map((extension, index) => (
              <RichText
                key={`extension_${index}`}
                content={{
                  tag: "span",
                  content: extension.name,
                  className: "hover:underline cursor-pointer",
                }}
              />
            ))}
          </div>

          <div className="h-10" />

          <RichText
            content={{
              tag: "h2",
              content: "Resources",
              className: "",
            }}
          />
          <div className="flex flex-col gap-1">
            {contract.source.resources.map((resource, index) => (
              <Link
                target="_blank"
                key={`resource_${index}`}
                href={resource.url}
                className="text-blue-400 hover:underline"
              >
                {resource.title}
              </Link>
            ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ContractOverviewView

interface IListProps {
  items: IContractEvent[] | IContractFunction[]
}

const Viewer: React.FC<IListProps> = ({ items }) => {
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (items.length > 0) {
      setSelected(items[0].function)
    }
  }, [items])

  const onSelect = (item: IContractFunction | IContractEvent) => {
    setSelected(item.function)
  }

  const selectedItem = React.useMemo(() => {
    return items.find((item) => item.function === selected)
  }, [items, selected])

  return (
    <div className="grid min-h-[480px] grid-cols-3 gap-4 p-4">
      <div className="col-span-1 rounded-lg border border-solid border-zinc-800 p-4 shadow-md">
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className="mb-2"
            >
              <button
                onClick={() => onSelect(item)}
                className={clsx(
                  "transition-all hover:scale-105",
                  selected === item.function ? "text-white" : "text-light-3/50"
                )}
              >
                {item.function}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative col-span-2 overflow-hidden rounded-lg border border-solid border-zinc-800 p-4 text-white shadow-md">
        {selectedItem ? (
          <div className="overflow-y-scroll pb-20">
            <h2 className="mb-4 text-2xl font-bold">Function: {selectedItem.function}</h2>

            {(selectedItem as IContractEvent).content ? (
              <>
                <h3 className="mt-6 text-lg font-semibold">Description</h3>
                {(selectedItem as IContractEvent).content.map((ct, index) => (
                  <RichText
                    key={index}
                    content={ct}
                    overrideClass="text-gray-400 hover:text-light-1 transition-all cursor-pointer"
                  />
                ))}
              </>
            ) : null}

            <h3 className="mt-6 text-lg font-semibold">Signature</h3>
            <div className="cursor-pointer text-gray-400 transition-all hover:text-light-1">
              {selectedItem.signature}
            </div>

            <h3 className="mt-6 text-lg font-semibold">Parameters</h3>
            <ul className="mt-1 cursor-pointer pl-6 text-gray-400 transition-all">
              {selectedItem.params.map((param) => {
                return (
                  <li
                    key={param.name}
                    className="mb-2 list-disc"
                  >
                    <span className="text-orange-500">{param.name}</span>
                    <span className="ml-2 cursor-pointer text-gray-400 transition-all hover:text-light-1">
                      : {param.type}
                    </span>
                    <div className="ml-4 text-gray-500">{param.description}</div>
                  </li>
                )
              })}
            </ul>

            <div className="absolute bottom-2.5 left-1/2 z-[20] w-full -translate-x-1/2">
              <div className="absolute h-[250%] w-full -translate-y-10 bg-gradient-to-t from-dark-3 via-dark-3 to-transparent" />
              <div className="mx-auto w-[95%]">
                <PlaceholdersAndVanishInput
                  placeholders={[
                    `Find me more resources on ${selectedItem.function}`,
                    `Explain more about ${selectedItem.params?.[0]?.name ?? "this"}`,
                    `What is the return value of ${selectedItem.function}`,
                  ].sort(() => Math.random() - 0.5)}
                  onChange={() => {}}
                  onSubmit={() => {}}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-gray-400">No function selected</div>
        )}
      </div>
    </div>
  )
}
