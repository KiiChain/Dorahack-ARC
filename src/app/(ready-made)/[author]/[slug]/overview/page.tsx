import React from "react"

import { NextPage } from "next"

import { contract as contractData } from "@/data"

import { ContractOverviewView } from "@/views"

interface ContractOverviewPageProps {
  params: {
    author: string
    slug: string
  }
}

const ContractOverviewPage: NextPage<ContractOverviewPageProps> = ({ params }: ContractOverviewPageProps) => {
  const { author, slug } = params

  const identifier = `${author}/${slug}`

  const contract = contractData.ContractStore.find((ctx) =>
    ctx.contracts.some((contract) => contract.identifier === identifier)
  )?.contracts.find((contract) => contract.identifier === identifier)

  if (!contract) {
    return <></>
  }

  return (
    <>
      <ContractOverviewView contract={contract} />
    </>
  )
}

export default ContractOverviewPage
