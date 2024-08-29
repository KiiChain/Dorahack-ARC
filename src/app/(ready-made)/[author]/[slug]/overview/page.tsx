import React from "react"

import { NextPage } from "next"
import { contract as contractData } from "@/data"

interface ContractOverviewPageProps {
  params: {
    author: string
    slug: string
  }
}

const ContractOverviewPage: NextPage<ContractOverviewPageProps> = ({ params }: ContractOverviewPageProps) => {
  const { author, slug } = params

  const identifier = `${author}/${slug}`

  const metadata = contractData.ContractStore.find((ctx) =>
    ctx.contracts.some((contract) => contract.identifier === identifier)
  )?.contracts.find((contract) => contract.identifier === identifier)

  if (!metadata) {
    return <></>
  }

  return (
    <div className="container mx-auto max-w-5xl py-20">
      <div className="py-2 md:pb-0 md:pt-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="flex flex-1 items-center gap-4">
            <div className="border-border hidden aspect-square rounded-full border p-2 md:flex">
              <div className="aspect-square h-10"></div>
            </div>
            {/* Metadata */}
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{metadata.name}</h1>
              <p className="text-muted-foreground text-sm">{metadata.description}</p>
            </div>
          </div>
          {/* Actions */}
          <div className=""></div>
        </div>
      </div>

      <div className="h-10" />

      {/* Content */}
    </div>
  )
}

export default ContractOverviewPage
