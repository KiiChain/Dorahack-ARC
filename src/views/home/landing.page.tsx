import React from "react"

import { motion } from "framer-motion"

import x from "@/assets/images/IDE.png"
import Footer from "@/components/footer"
import { Carousel } from "@/components/infinite-movement"
import { FeaturesSectionDemo } from "@/components/landing-cta1"
import { FollowerPointerCard } from "@/components/landing-cta2"
import CTA3 from "@/components/landing-cta3"
import { PluginCard } from "@/components/plugin-card"
import { BackgroundGradient } from "@/ui/background-gradient"
// import Image from "next/image";
import { FlipWords } from "@/ui/flip-words"
import { LampContainer } from "@/ui/lampcontainer"
import { Spotlight } from "@/components/spotlight"
import { BackgroundCellCore } from "@/components/background-cell"
import { ContractStore } from "@/data/contracts"
import { ContractCard } from "../explore/contract.page"
import Logo from "@/assets/images/arc-logo.webp"
import { Button } from "@/ui/button"
import { AiFillThunderbolt } from "react-icons/ai"
const items = ContractStore[0].contracts.map((contract) => {
  return (
    <ContractCard
      key={contract.identifier}
      contract={contract}
      className="w-[400px]"
    />
  )
})


const words = ["sample line1 ", "sample line 2", "sample line 3"]
export const footerLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Licensing" },
  { href: "#", label: "Contact" },
]

export const footerLogo = {
  src: Logo.src,
  alt: "Arc",
  text: "Arc",
  href: "/",
}

export const footerText = {
  year: 2024,
  trademark: "Arc™",
  href: "/",
}
const blogContent = {
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: x.src,
}
const arr = [blogContent, blogContent, blogContent, blogContent, blogContent]
const HomeLandingView = () => {
  return (
    <div className="snap-y snap-mandatory max-w-7xl mx-auto bg-secondary">
      <section className="snap-center snap-always">
        <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <BackgroundCellCore />
          <div className=" p-4 max-w-7xl  m-auto relative z-50  w-full pt-20 md:pt-0">
            <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <FlipWords words={words} />
            </h1>
            <div className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Spotlight effect is a great way to draw attention to a specific part
              of the page. Here, we are drawing the attention towards the text
              section of the page. I don&apos;t know why but I&apos;m running out of
              copy.
            </div>
            <Button className="flex gap-4 mx-auto mt-6" variant="fill">
              <AiFillThunderbolt className="text-2xl my-auto h-full" /><div className="font-extrabold mx-auto text-xl" >Get started</div>
            </Button>
          </div>
        </div>

      </section>
      <section className="snap-center snap-always bg-black py-14">
        <FeaturesSectionDemo />
      </section>
      <section className="snap-center snap-always bg-secondary my-14">
        <h2 className=" max-w-5xl  text-3xl font-bold tracking-tight text-black lg:text-5xl lg:leading-tight dark:text-white mb-4">
          Smart contracts for <br />every use case
        </h2>
        <div className="mx-auto max-w-7xl">

          <Carousel
            items={items}
            className=""
            direction="right"
          // speed="normal"
          />
        </div>
      </section>
      <section className="snap-center snap-always bg-secondary my-16 pt-14">
        <h2 className=" max-w-5xl  text-3xl font-bold tracking-tight text-black lg:text-5xl lg:leading-tight dark:text-white mb-2">
          End-to-end tools for smart contracts
        </h2>
        <div className=" my-4 pb-4   text-sm font-normal text-neutral-300 lg:text-base dark:text-neutral-300">
          Trusted and modular smart contracts that can be deployed securely on Kiichain.
        </div>
        <div className="mx-auto max-w-7xl">
          <CTA3
            items={arr.map((e) => {
              return (
                <FollowerPointerCard blogContent={e} />
              )
            })}
          />
        </div>
      </section>
      <section>
        <Footer
          footerLinks={footerLinks}
          footerLogo={footerLogo}
          footerText={footerText}
        />
      </section>
    </div>
  )
}

export default HomeLandingView
