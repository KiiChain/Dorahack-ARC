"use client"
import React from "react"

import { Provider } from "@/providers"

import Contracts from "./contract.page"

const ExploreView = () => {
  return (
    <Provider>
      <Contracts />
    </Provider>
  )
}

export default ExploreView
