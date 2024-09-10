import { type NextRequest, NextResponse } from "next/server"

import * as solc from "solc"

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()

    if (!body || !body.sources) {
      return NextResponse.json({ error: "Missing sources" }, { status: 400 })
    }

    const sources = body.sources

    const input = {
      language: "Solidity",
      sources: sources,
      settings: {
        outputSelection: {
          "*": {
            "*": ["abi", "evm.bytecode"],
          },
        },
      },
    }

    const output = JSON.parse(solc.compile(JSON.stringify(input)))

    const contracts = output.contracts
    const compiledContracts = Object.keys(contracts).map((contractName) => {
      const contract = contracts[contractName]
      const compiledData = {
        abi: contract[Object.keys(contract)[0]].abi,
        bytecode: contract[Object.keys(contract)[0]].evm.bytecode.object,
      }
      return {
        contractName,
        compiledData,
      }
    })

    return NextResponse.json({ contracts: compiledContracts })
  } catch (error) {
    console.error("Error compiling contract:", error)
    return NextResponse.json({ error: "Failed to compile contract" }, { status: 500 })
  }
}
