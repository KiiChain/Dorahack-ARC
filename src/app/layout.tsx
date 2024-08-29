import React from "react"

import { Metadata } from "next"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: "Arc",
    template: "Arc | %s",
  },
  description: "",
  verification: {
    me: "",
    google: "",
    yahoo: "",
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark-3 font-satoshi text-light-0">
        <>{children}</>
      </body>
    </html>
  )
}

export default RootLayout
