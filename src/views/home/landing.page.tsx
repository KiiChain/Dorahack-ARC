import React, { useState } from "react"

import x from "@/assets/images/IDE.png"
import Footer from "@/components/footer"
import { Carousel } from "@/components/infinite-movement"
import { FeaturesSectionDemo } from "@/components/landing-cta1"
import { FollowerPointerCard } from "@/components/landing-cta2"
import CTA3 from "@/components/landing-cta3"
// import { PluginCard } from "@/components/plugin-card"
// import { BackgroundGradient } from "@/ui/background-gradient"
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
import { useRouter } from "next/navigation"
// import { TypewriterEffect } from "@/components/typewriter-effect"
const items = ContractStore[0].contracts.slice(0, 6).map((contract) => {
  return (
    <ContractCard
      key={contract.identifier}
      contract={contract}
      className="w-[400px]"
    />
  )
})


const words = [
  "Unlock Smart Contract Innovation",
  "AI-driven coding  made easy.",
  "Deploy to Kiichain with one click."]
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

const blogContent = [
  {
    date: "14th September, 2023",
    title: "Mastering Smart Contract Development with AI Assistance",
    description:
      "Explore how Arc leverages AI to streamline smart contract development. From AI-powered code suggestions to automatic documentation generation, dive into the tools that make smart contract creation faster and more reliable.",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*JUwAzE4aWU5k0VpMIWyomA.png",
  },
  {
    date: "1st September, 2023",
    title: "Dynamic Import Resolution in Smart Contracts Explained",
    description:
      "Learn how Arc's dynamic import resolution feature simplifies multi-file contract compilation and standard imports, making it easier for developers to manage dependencies in their smart contracts.",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*bXfJKdiXjtkKG899alj3ow.png",
  },
  {
    date: "20th August, 2023",
    title: "Enhancing Security: AI-Powered Code Vulnerability Checks",
    description:
      "Security is a top priority in blockchain development. In this article, we explore how Arc’s AI-powered code vulnerability checker helps developers catch potential issues early, ensuring safer smart contracts.",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*7rFLQSKSIgfyPMWc-IIZiA.jpeg",
  },
  {
    date: "10th August, 2023",
    title: "One-Click Deployment to Kiichain: How Arc Simplifies Smart Contract Launches",
    description:
      "Deploying smart contracts has never been easier. Learn how Arc integrates one-click deployment and a testnet faucet to simplify the process, getting your contracts live on Kiichain in seconds.",
    image: "https://blog.kiiglobal.io/wp-content/uploads/2024/04/safeguarding-the-digital-financial-future.webp",
  },
  {
    date: "5th July, 2023",
    title: "Comprehensive Contract Management with Arc’s Dashboard",
    description:
      "Arc's dashboard allows users to manage and monitor deployed contracts efficiently. In this article, we walk through the features and how you can use them to track, manage, and optimize your smart contracts.",
    image: "https://blog.kiiglobal.io/wp-content/uploads/2024/07/KiiChain-launches-testnet-2.webp",
  },
];
const words2 = [
  { text: "Spotlight effect is a great way to draw attention to a specific part " },
  { text: "of the page. ", className: "text-neutral-300" },
  { text: "Here,", className: "text-neutral-300" },
  { text: "we are drawing the attention towards the text" },
  { text: "section of the page.", className: "text-neutral-300" },
  { text: "I don't know why but I'm running out of" },
  { text: "copy. ", className: "text-neutral-300" },
];
const HomeLandingView = () => {
  const router = useRouter()
  const [isFlipWordsComplete, setIsFlipWordsComplete] = useState(false);
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
            <h1 className="text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <FlipWords words={words} onAnimationComplete={() => setTimeout(() => setIsFlipWordsComplete(true), 3000)} />
            </h1>
            {isFlipWordsComplete ? (
              <>
                <div className="mt-4 font-normal text-base text-neutral-300 max-w-2xl text-center mx-auto italic">
                  Transform smart contract development with Arc. Write, deploy, and manage contracts effortlessly with AI-driven tools and one-click deployment to Kiichain’s testnet.
                </div>
                <Button type="button" className="flex gap-4 mx-auto mt-6" variant="fill" onClick={() => { router.push("/ide") }}>
                  <AiFillThunderbolt className="text-2xl my-auto h-full" /><div className="font-extrabold mx-auto text-xl" >Get started</div>
                </Button>
              </>
            ) :
              <div className="mt-4 font-normal text-base text-neutral-300 w-[32rem] text-center mx-auto h-[170px]"></div>
            }
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
            items={blogContent.map((e) => {
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
