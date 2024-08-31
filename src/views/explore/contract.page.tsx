import React from "react"

import Link from "next/link"

import { contract } from "@/data"

const ExplorePageView = () => {
  return (
    <div className="px-16 py-20">
      <h1 className="mb-3 text-5xl font-bold tracking-tighter">Explore</h1>
      <p className="text-secondary-foreground max-w-screen-md text-lg">
        The best place for web3 developers to explore smart contracts from world-class web3 protocols &amp; engineers —
        all deployable with one click
      </p>
      <div className="h-10"></div>
      {contract.ContractStore.map((category) => {
        return (
          <section key={category.identifier}>
            <div className="flex items-center justify-between gap-4">
              <header className="flex flex-col gap-1.5">
                <h2 className="text-2xl font-semibold tracking-tight">{category.name}</h2>
                <p className="text-secondary-foreground">{category.description}</p>
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
              {category.contracts.map((contract) => {
                return (
                  <Link
                    key={contract.identifier}
                    href={`${contract.identifier}/overview`}
                  >
                    <article className="border-border hover:bg-muted raise-on-hover relative flex min-h-[220px] flex-col rounded-lg border bg-dark-6 p-4">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="z-1 relative flex items-center gap-1 text-sm font-medium text-accent-4 hover:underline">
                            Flags
                          </span>
                          <div className="size-1 rounded-full bg-gray-500/75"></div>
                          <div
                            aria-hidden="false"
                            className=""
                          >
                            <div className="">
                              <div className="opacity-100 transition-opacity duration-300">
                                <p className="text-secondary-foreground text-sm font-medium">v{contract.version}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-3.5"></div>
                      <div
                        aria-hidden="false"
                        className="inline-block"
                      >
                        <div className="">
                          <div className="opacity-100 transition-opacity duration-300">
                            <h3 className="text-lg font-semibold tracking-tight">{contract.name}</h3>
                          </div>
                        </div>
                      </div>
                      <p className="text-secondary-foreground mt-1 text-sm leading-5">{contract.description}</p>
                      <div className="z-1 relative mt-auto flex justify-between gap-2 pt-3">
                        <Link
                          className="flex shrink-0 items-center gap-1.5 hover:underline"
                          href={`#`}
                        >
                          <div className="opacity-100 transition-opacity duration-300">
                            <p className="text-xs"> {contract.identifier} </p>
                          </div>
                        </Link>
                        <div className="center gap-4">
                          <div className="flex items-center justify-between">
                            <Link
                              className="ring-offset-background focus-visible:ring-ring text-primary-foreground relative z-10 inline-flex h-auto items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                              href={`/${contract.identifier}/customize`}
                            >
                              Customize
                            </Link>
                          </div>
                          <div className="flex items-center justify-between">
                            <Link
                              className="ring-offset-background focus-visible:ring-ring text-primary-foreground relative z-10 inline-flex h-auto items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                              href={`/${contract.identifier}/deploy`}
                            >
                              Deploy
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default ExplorePageView
