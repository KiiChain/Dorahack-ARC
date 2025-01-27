"use client"
import React, { useEffect, useState } from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"

import axios from "axios"

import { contract } from "@/data"

import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { Grid } from "@/ui/explore-grid-design"
import { CustomizeModal } from "@/ui/modal"
import { useTheme } from "@/providers/theme"

interface Category {
  identifier: string
  name: string
  description: string
  contracts: IContracts[]
}

export const ContractCard = ({ contract, className }: { contract: IContracts; className?: string }) => {
  const router = useRouter()
  const { theme } = useTheme()
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState("")
  const onClick = () => {
    if (content == "") {
      axios
        .post("/api/explore", { contract: contract.path })
        .then((response) => {
          setContent(response.data)
          console.log("mike ", response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    } else {
      setOpen(true)
    }
  }

  useEffect(() => {
    if (content != "") setOpen(true)
  }, [content])

  return (
    <>
      {content != "" && (
        <CustomizeModal
          text={JSON.parse(content) ?? ""}
          open={content !== "" && open}
          setOpen={setOpen}
        />
      )}

      <div
        key={contract.identifier}
        onClick={() => router.push(`${contract.identifier}/overview`)}
        className={cn(className)}
      >
        <article
          className="raise-on-hover group/contract relative flex min-h-[220px] flex-col rounded-lg p-4"
          style={{ backgroundColor: theme.boxColor, borderColor: theme.borderColor }}
        >
          <div
            className="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition duration-200 group-hover/contract:opacity-100"
            style={{ background: `linear-gradient(to top, ${theme.bgColor}, transparent)` }}
          />

          <div className="flex justify-between">
            <div className="flex items-center gap-1.5">
              <span
                className="z-1 relative flex items-center gap-1 text-sm font-medium hover:underline"
                style={{ color: theme.tertiaryTextColor }}
              >
                Flags
              </span>
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: theme.circleColor }}
              ></div>
              <div
                className="text-sm font-medium"
                style={{ color: theme.secondaryTextColor }}
              >
                v{contract.version}
              </div>
            </div>
          </div>

          <div className="h-3.5"></div>
          <h3
            className="text-lg font-semibold tracking-tight"
            style={{ color: theme.primaryTextColor }}
          >
            {contract.name}
          </h3>
          <div
            className="mt-1 line-clamp-3 text-sm leading-5"
            style={{ color: theme.secondaryTextColor }}
          >
            {contract.description}
          </div>
          <div className="relative mt-auto flex justify-between gap-2 pt-3">
            <Button
              onClick={(e) => {
                e.stopPropagation()
                onClick()
              }}
              variant="outline"
              className="text-sm"
              style={{
                backgroundColor: theme.boxColor,
                color: theme.primaryTextColor,
                borderColor: theme.borderColor,
              }}
            >
              Customize
            </Button>
            <Link
              href={`/${contract.identifier}/overview`}
              className="relative z-10 inline-flex h-auto items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors"
              style={{
                backgroundColor: theme.accentColor,
                color: theme.primaryTextColor,
              }}
            >
              Deploy
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}

const CategorySection = ({ category }: { category: Category }) => {
  const { theme } = useTheme()

  return (
    <section
      key={category.identifier}
      className="my-20"
    >
      <div className="flex items-center justify-between gap-4">
        <header className="flex flex-col gap-1.5">
          <h2
            className="text-2xl font-semibold tracking-tight"
            style={{ color: theme.primaryTextColor }}
          >
            {category.name}
          </h2>
          <div style={{ color: theme.secondaryTextColor }}>{category.description}</div>
        </header>
        <Link
          href={`/explore/${category.identifier}`}
          className="hover:text-foreground flex shrink-0 items-center gap-1 text-base"
          style={{ color: theme.tertiaryTextColor }}
        >
          View all
        </Link>
      </div>
      <div className="h-5"></div>
      <div className="relative z-0 grid grid-cols-1 gap-4 md:grid-cols-3">
        {category.contracts.slice(0, 6).map((contract) => (
          <ContractCard
            key={contract.identifier}
            contract={contract}
          />
        ))}
      </div>
    </section>
  )
}

const ExplorePageView = () => {
  const { theme } = useTheme()

  return (
    <div
      className="relative mx-auto max-w-7xl px-16 py-20"
      style={{ backgroundColor: theme.bgColor }}
    >
      <Grid
        size={20}
        className="right-1/2"
      />
      <Grid
        size={20}
        className="left-1/2"
      />

      <h1
        className="mb-3 mt-32 text-7xl font-bold tracking-tighter"
        style={{ color: theme.primaryTextColor }}
      >
        Explore
      </h1>
      <div
        className="max-w-screen-md text-lg"
        style={{ color: theme.secondaryTextColor }}
      >
        The best place for web3 developers to explore smart contracts from world-class web3 protocols &amp; engineers —
        all deployable with one click.
      </div>
      {contract.ContractStore.map((category) => (
        <CategorySection
          key={category.identifier}
          category={category}
        />
      ))}
    </div>
  )
}

export default ExplorePageView
