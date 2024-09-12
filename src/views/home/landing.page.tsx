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

const items = [
  <PluginCard
    title="Plugin 1"
    description="Description for plugin 1"
    logo={<>Logo</>}
    onExploreClick={() => console.log("Explore Plugin 1")}
    key={0}
  />,
  <PluginCard
    title="Plugin 2"
    description="Description for plugin 2"
    logo={<>Logo</>}
    onExploreClick={() => console.log("Explore Plugin 2")}
    key={1}
  />,
  <PluginCard
    title="Plugin 2"
    description="Description for plugin 2"
    logo={<>Logo</>}
    onExploreClick={() => console.log("Explore Plugin 2")}
    key={2}
  />,
  <PluginCard
    title="Plugin 2"
    description="Description for plugin 2"
    logo={<>Logo</>}
    onExploreClick={() => console.log("Explore Plugin 2")}
    key={3}
  />,
]

const words = ["sample line1 ", "sample line 2", "sample line 3"]
export const footerLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Licensing" },
  { href: "#", label: "Contact" },
]

export const footerLogo = {
  src: "https://flowbite.com/docs/images/logo.svg",
  alt: "Flowbite Logo",
  text: "Flowbite",
  href: "https://flowbite.com/",
}

export const footerText = {
  year: 2023,
  trademark: "Flowbite™",
  href: "https://flowbite.com/",
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
    <div className="snap-y snap-mandatory">
      <section className="snap-center snap-always">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <FlipWords words={words} />
          </motion.h1>
        </LampContainer>
      </section>
      <section className="snap-center snap-always bg-secondary">
        <FeaturesSectionDemo />
      </section>
      <section className="snap-center snap-always bg-secondary">
        <div className="mx-auto max-w-7xl">
          <Carousel
            items={items}
            className=""
            direction="right"
            speed="normal"
          />
        </div>
      </section>
      <section className="snap-center snap-always bg-secondary">
        <div className="mx-auto max-w-7xl">
          <CTA3
            items={arr.map((e, idx) => {
              return (
                <BackgroundGradient
                  className="max-w-sm rounded-[22px] bg-primary text-white"
                  key={idx}
                >
                  <FollowerPointerCard blogContent={e} />
                </BackgroundGradient>
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
