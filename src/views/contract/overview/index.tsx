"use client"
import React, { useEffect, useState } from "react"

import Link from "next/link"

import axios from "axios"

import { RichText } from "@/components"
import Tabs from "@/components/misc/Tabs"

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

  return (
    <div className="container mx-auto max-w-5xl px-5 py-20 sm:px-2">
      <div className="py-2 md:pb-0 md:pt-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="flex flex-1 items-center gap-4">
            <div className="border-border hidden aspect-square rounded-full border p-2 md:flex">
              <div className="aspect-square h-10"></div>
            </div>
            {/* Metadata */}
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{contract.name}</h1>
              <p className="text-muted-foreground text-sm">{contract.description}</p>
            </div>
          </div>
          {/* Actions */}
          <div className="flex gap-2"></div>
        </div>
      </div>

      <div className="h-10" />

      {/* Content */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
              tabs={[
                {
                  name: "Source",
                  identifier: "source",
                  content: <>{sourceCode}</>,
                },
                {
                  name: "Functions",
                  identifier: "functions",
                  content: <>{JSON.stringify(contract.source.functions)}</>,
                },
                {
                  name: "Events",
                  identifier: "events",
                  content: <>{JSON.stringify(contract.source.events)}</>,
                },
              ]}
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="space-y-2">
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
        </div>
      </div>
    </div>
  )
}

export default ContractOverviewView
