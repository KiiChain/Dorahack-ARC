"use client"

import { Provider } from "@/providers"

import HomeLandingView from "./landing.page"

const HomeView = () => {
  return (
    <Provider>
      <HomeLandingView />
    </Provider>
  )
}

export default HomeView
