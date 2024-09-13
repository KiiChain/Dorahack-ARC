import React from "react"

import { Metadata } from "next"

import { AiFillHome, AiFillMessage, AiFillUsb } from "react-icons/ai"
import { Toaster } from "sonner"

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
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <AiFillHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <AiFillUsb className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <AiFillMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
]

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-secondary px-2.5 font-satoshi text-light-0 sm:px-5">
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
          <>{children}</>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
