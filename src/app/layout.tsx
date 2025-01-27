import React from "react"

import { Metadata } from "next"

import { Toaster } from "sonner"

import { navItems } from "@/data/sample"

import Navbar from "@/components/navbar"
import { Provider } from "@/providers"
import { FloatingNav } from "@/ui/floating-navbar"

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

const links = [
  {
    label: "IDE",
    href: "/ide",
  },
]

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen font-satoshi text-light-0">
        <Provider>
          <Toaster
            position="top-center"
            invert
          />
          <FloatingNav navItems={navItems} />
          <Navbar
            links={links}
            logoText="Arc"
            textColor="white"
          />
          {children}
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
