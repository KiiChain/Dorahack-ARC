import React from "react"

import { Metadata } from "next"

import "@/styles/globals.css"
import Navbar from "@/components/navbar"

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
const links: { label: string; href: string }[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "IDE",
    href: "/ide",
  },
]

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark-3 font-satoshi text-light-0">
        <Navbar
          links={links}
          logoText="Arc"
          textColor="white"
        />
        <>{children}</>
      </body>
    </html>
  )
}

export default RootLayout
