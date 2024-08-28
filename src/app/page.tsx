import React from "react"

import { Metadata, NextPage } from "next"

import { HomeView } from "@/views"

interface HomePageProps {}

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page",
}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <>
      <HomeView />
    </>
  )
}

export default HomePage
