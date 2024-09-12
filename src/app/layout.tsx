import React from "react"

import { Metadata } from "next"

import { Toaster } from "sonner"

import Navbar from "@/components/navbar"

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
        <Toaster
          position="top-center"
          invert
        />
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
