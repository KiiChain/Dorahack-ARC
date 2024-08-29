import React from "react"

import { NextPage } from "next"
import { redirect } from "next/navigation"

interface ContractOverviewRedirectProps {
  params: {
    author: string
    slug: string
  }
}

const ContractOverviewRedirect: NextPage<ContractOverviewRedirectProps> = ({
  params,
}: ContractOverviewRedirectProps) => {
  const { author, slug } = params

  redirect(`/${author}/${slug}/overview`)

  return <></>
}

export default ContractOverviewRedirect
