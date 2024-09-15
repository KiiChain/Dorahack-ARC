import React from "react"

import Image from "next/image"
// import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link"

// import { useEffect, useRef } from "react";
import { motion } from "framer-motion"
import { TbBrandYoutubeFilled } from "react-icons/tb"

import Compile from "@/assets/images/compile.png"
import Download from "@/assets/images/download.png"
import Alt from "@/assets/images/IDE.png"
import IDE from "@/assets/images/IDE.png"
import Opt from "@/assets/images/optimizations.png"
import Vulnerability from "@/assets/images/vulnerability.png"
import { cn } from "@/lib/utils"

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Seamless Smart Contract Creation",
      description:
        "Easily write and deploy smart contracts with our intuitive code editor, which includes AI-powered auto-complete and dynamic import resolution for a smooth development experience.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "AI-Driven Code Assistance",
      description:
        "Enhance your coding efficiency with AI-powered features like real-time code vulnerability checking, automatic documentation generation, and interactive contract chat.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Comprehensive Contract Management",
      description:
        "Manage and monitor your deployed contracts with our detailed dashboard. Access pre-deployed contracts, view metrics, and make adjustments effortlessly.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "One-Click Deployment to Kiichain",
      description:
        "Deploy your smart contracts to the Kiichain testnet with a single click. Our platform integrates with a testnet faucet to ensure you have the necessary tokens for deployment.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]

  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-12">
      <div className="px-8">
        <h4 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-black lg:text-5xl lg:leading-tight dark:text-white">
          Empowering Your Smart Contract Journey
        </h4>

        <div className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 lg:text-base dark:text-neutral-300">
          Discover how Arc transforms smart contract development with cutting-edge AI features. From seamless code
          creation to comprehensive contract management, our platform provides everything you need for efficient and
          secure smart contract deployment.
        </div>
      </div>
      <div className="relative">
        <div className="mt-12 grid grid-cols-1 rounded-md lg:grid-cols-6 xl:border dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              className={feature.className}
            >
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return <div className={cn(`relative overflow-hidden p-4 sm:p-8`, className)}>{children}</div>
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-5xl text-left text-xl tracking-tight text-black md:text-2xl md:leading-snug dark:text-white">
      {children}
    </div>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-4xl text-left text-sm md:text-base",
        "text-center font-normal text-neutral-500 dark:text-neutral-300",
        "mx-0 my-2 max-w-sm text-left md:text-sm"
      )}
    >
      {children}
    </div>
  )
}

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full gap-10 px-2 py-8">
      <div className="group mx-auto h-full w-full bg-secondary p-5 shadow-2xl">
        <div className="flex h-96 w-full flex-1 flex-col space-y-2">
          {/* TODO */}
          <Image
            src={IDE}
            alt="header"
            width={1200}
            height={1200}
            className="aspect-square h-full rounded-sm object-cover object-left-top"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-gradient-to-t from-secondary to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-60 w-full bg-gradient-to-b from-secondary to-transparent" />
    </div>
  )
}

export const SkeletonThree = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="group/image relative flex h-full gap-10"
    >
      <div className="group mx-auto h-full w-full bg-transparent dark:bg-transparent">
        <div className="relative flex h-full w-full flex-1 flex-col space-y-2">
          {/* TODO */}
          <TbBrandYoutubeFilled className="absolute inset-0 z-10 m-auto h-20 w-20 text-red-500" />
          <Image
            src="https://assets.aceternity.com/fireship.jpg"
            alt="header"
            // width={800}
            // height={800}
            fill
            className="aspect-square h-full w-full rounded-sm object-cover object-center blur-none transition-all duration-200 group-hover/image:blur-md"
          />
        </div>
      </div>
    </Link>
  )
}

export const SkeletonTwo = () => {
  const images = [Download, Compile, Vulnerability, Alt, Opt]

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  }
  return (
    <div className="relative flex h-full flex-col items-start gap-10 overflow-hidden p-8">
      {/* TODO */}
      <div className="-ml-20 flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="-mr-4 mt-4 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="-mr-4 mt-4 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-secondary" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-secondary" />
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className="relative mt-10 flex h-60 flex-col items-center bg-transparent md:h-60 dark:bg-transparent">
      <Image
        src={"/deploy.gif"}
        alt=""
        width={1080}
        height={1080}
        className=""
      />
    </div>
  )
}
