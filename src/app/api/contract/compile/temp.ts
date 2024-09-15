import { type NextRequest, NextResponse } from "next/server"

import { existsSync, readFileSync } from "fs"
import path from "path"
import * as solc from "solc"

const resolveImportPath = (importPath: string) => {
  if (importPath.startsWith("@openzeppelin/contracts/")) {
    // Convert import path to a local path
    return path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "..",
      "..",
      "openzeppelin",
      importPath.replace("@openzeppelin/contracts/", "")
    )
  }
  return path.resolve(__dirname, importPath)
}

const readSourceFile = (filePath: string) => {
  if (existsSync(filePath)) {
    return readFileSync(filePath, "utf8")
  }
  throw new Error(`File not found: ${filePath}`)
}

const resolveSources = (sources: Record<string, { content: string }>) => {
  const modifiedSources: ITemporaryVariable = {}

  const queue = Object.entries(sources)

  for (const [key, value] of queue) {
    let content = value.content

    // Replace import paths
    content = content.replace(/import "(.*)";/g, (match, importPath) => {
      const localPath = resolveImportPath(importPath)
      const fileContent = readSourceFile(localPath)

      // Extract filename from the local path
      const filename = path.basename(localPath)

      // Recursively resolve imports in the imported file
      const resolvedSources = resolveSources({ [filename]: { content: fileContent } })

      // Add the resolved sources to the modified sources
      Object.assign(modifiedSources, resolvedSources)

      // Return an import statement with the local path
      return `import "${filename}";`
      // return `import "${localPath}";`
    })

    modifiedSources[key] = { content }
  }

  return modifiedSources
}

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()

    if (!body || !body.sources) {
      return NextResponse.json({ error: "Missing sources" }, { status: 400 })
    }

    const sources = body.sources

    // // Modify all @openzeppelin/contracts --> ../openzeppelin/
    // const modifiedSources = Object.fromEntries(
    //   Object.entries(sources).map(([key, value]) => {
    //     return [
    //       key,
    //       {
    //         content: (value as ITemporaryVariable).content.replace(
    //           /import "@openzeppelin\/contracts\//g,
    //           'import "../openzeppelin/'
    //         ),
    //       },
    //     ]
    //   })
    // )

    const modifiedSources = resolveSources(sources)

    console.log({ modifiedSources })

    return NextResponse.json({ contracts: [{ abi: modifiedSources }] })

    const input = {
      language: "Solidity",
      sources: modifiedSources,
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
