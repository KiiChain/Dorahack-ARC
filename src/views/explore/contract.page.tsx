import React, { useState } from "react"

import Link from "next/link"

import { contract } from "@/data"
// import { useModal } from "@/providers";
import { useRouter } from "next/navigation";
// import Modal from "@/ui/modal/modal";
import { CustomizeModal } from "@/ui/modal";
interface Contract {
  identifier: string;
  name: string;
  description: string;
  version: string;
}
interface Category {
  identifier: string;
  name: string;
  description: string;
  contracts: Contract[];
}
const sampleText = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Counter {
    uint256 public count;

    // Function to get the current count
    function get() public view returns (uint256) {
        return count;
    }

    // Function to increment count by 1
    function inc() public {
        count += 1;
    }

    // Function to decrement count by 1
    function dec() public {
        // This function will fail if count = 0
        count -= 1;
    }
}

`

const ContractCard = ({ contract }: { contract: Contract }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      <CustomizeModal text={sampleText} open={open} setOpen={setOpen} />
      <div
        key={contract.identifier}
        onClick={() => router.push(`${contract.identifier}/overview`)}
      >
        <article className="border-border hover:bg-muted raise-on-hover relative flex min-h-[220px] flex-col rounded-lg border bg-dark-6 p-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-1.5">
              <span className="z-1 relative flex items-center gap-1 text-sm font-medium text-accent-4 hover:underline">
                Flags
              </span>
              <div className="size-1 rounded-full bg-gray-500/75"></div>
              <p className="text-secondary-foreground text-sm font-medium">v{contract.version}</p>
            </div>
          </div>

          <div className="h-3.5"></div>
          <h3 className="text-lg font-semibold tracking-tight">{contract.name}</h3>
          <p className="text-secondary-foreground mt-1 text-sm leading-5">{contract.description}</p>
          <div className="relative mt-auto flex justify-between gap-2 pt-3">
            <button onClick={(e) => { e.stopPropagation(); setOpen(true) }} className="ring-offset-background focus-visible:ring-ring text-primary-foreground relative z-10 inline-flex h-auto items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Customize
            </button>
            <Link href={`/${contract.identifier}/deploy`} className="ring-offset-background focus-visible:ring-ring text-primary-foreground relative z-10 inline-flex h-auto items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Deploy
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

const CategorySection = ({ category }: { category: Category }) => {
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
        {category.contracts.map((contract) => (
          <ContractCard key={contract.identifier} contract={contract} />
        ))}
      </div>
    </section>
  );
};

const ExplorePageView = () => {
  return (
    <div className="px-16 py-20">
      <h1 className="mb-3 text-5xl font-bold tracking-tighter">Explore</h1>
      <p className="text-secondary-foreground max-w-screen-md text-lg">
        The best place for web3 developers to explore smart contracts from world-class web3 protocols &amp; engineers —
        all deployable with one click.
      </p>
      <div className="h-10"></div>
      {contract.ContractStore.map((category) => (
        <CategorySection key={category.identifier} category={category} />
      ))}
    </div>
  )
}

export default ExplorePageView
