import React, { useState } from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"

import axios from "axios"

import { contract } from "@/data"

import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { Grid } from "@/ui/explore-grid-design"
import { CustomizeModal } from "@/ui/modal"

interface Category {
  identifier: string
  name: string
  description: string
  contracts: IContracts[]
}

export const ContractCard = ({ contract, className }: { contract: IContracts; className?: string }) => {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [content, setContent] = useState("")

  const onCustomize = () => {
    axios
      .post("/api/explore", { contract: contract.path })
      .then((response) => {
        setContent(response.data)
        setOpen(true)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <CustomizeModal
        title={contract.name}
        text={content}
        open={content !== "" && open}
        setOpen={setOpen}
      />
      <div
        key={contract.identifier}
        onClick={() => router.push(`${contract.identifier}/overview`)}
        className={cn(className)}
      >
        <article className="hover:bg-muted raise-on-hover group/contract relative flex min-h-[220px] flex-col rounded-lg border-[0.1px] border-gray-500 p-4">
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/contract:opacity-100 dark:from-neutral-800" />

          <div className="flex justify-between">
            <div className="flex items-center gap-1.5">
              <span className="z-1 relative flex items-center gap-1 text-sm font-medium text-accent-4 hover:underline">
                Flags
              </span>
              <div className="size-1 rounded-full bg-gray-500/75"></div>
              <div className="text-secondary-foreground text-sm font-medium">v{contract.version}</div>
            </div>
          </div>

          <div className="h-3.5"></div>
          <h3 className="text-lg font-semibold tracking-tight">{contract.name}</h3>
          <div className="text-secondary-foreground mt-1 line-clamp-3 text-sm leading-5">{contract.description}</div>
          <div className="relative mt-auto flex justify-between gap-2 pt-3">
            <Button
              onClick={(e) => {
                e.stopPropagation()
                onCustomize()
              }}
              variant="outline"
              className="text-sm"
            >
              Customize
            </Button>
            <Link
              href={`/${contract.identifier}/deploy`}
              className="ring-offset-background focus-visible:ring-ring text-primary-foreground relative z-10 inline-flex h-auto items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
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
  return (
    <section
      key={category.identifier}
      className="my-20"
    >
      <div className="flex items-center justify-between gap-4">
        <header className="flex flex-col gap-1.5">
          <h2 className="text-2xl font-semibold tracking-tight">{category.name}</h2>
          <div className="text-secondary-foreground">{category.description}</div>
        </header>
        <Link
          href={`/explore/${category.identifier}`}
          className="text-link-foreground hover:text-foreground flex shrink-0 items-center gap-1 text-base"
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
  return (
    <div className="relative mx-auto max-w-7xl px-16 py-20">
      <Grid
        size={20}
        className="right-1/2"
      />
      <Grid
        size={20}
        className="left-1/2"
      />

      <h1 className="mb-3 mt-32 text-7xl font-bold tracking-tighter">Explore</h1>
      <div className="text-secondary-foreground max-w-screen-md text-lg">
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
