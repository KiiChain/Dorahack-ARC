import React from "react"

import { Metadata } from "next"

import { Toaster } from "sonner"
import { AiFillHome, AiFillMessage, AiFillUsb } from "react-icons/ai";

import Navbar from "@/components/navbar"

import "@/styles/globals.css"
import { FloatingNav } from "@/ui/floating-navbar"

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
    icon: (
      <AiFillMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];


const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-secondary font-satoshi text-light-0">
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
      </body>
    </html>
  )
}

export default RootLayout
