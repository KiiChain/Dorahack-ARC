import { type NextRequest, NextResponse } from "next/server"

import { existsSync, readFileSync } from "fs"
import path from "path"
import * as solc from "solc"

const resolveImportPath = (importPath: string, currentPath?: string) => {
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

  if (currentPath) {
    // Convert import path to a local path
    return path.resolve(path.dirname(currentPath), importPath)
  }

  return path.resolve(__dirname, "..", "..", "..", "..", "..", "openzeppelin", importPath)
}

const readSourceFile = (filePath: string) => {
  if (existsSync(filePath)) {
    return readFileSync(filePath, "utf8")
  }
  throw new Error(`File not found: ${filePath}`)
}

const resolveSources = (sources: Record<string, { content: string }>, parent?: string) => {
  const modifiedSources: Record<string, { content: string }> = {}

  const queue = Object.entries(sources)

  for (const [key, value] of queue) {
    console.log(`Resolving sources: ${key}`)
    let content = value.content

    // Replace both types of import paths (standard and named imports)
    content = content.replace(/import\s+(\{.*?\}\s+from\s+)?["'](.*)["'];/g, (match, namedImports, importPath) => {
      console.log(`Resolving import: ${importPath}`)
      // Resolve the local path based on the import
      const localPath = resolveImportPath(importPath, parent)
      const fileContent = readSourceFile(localPath)

      // Extract filename from the local path (to prevent nested directories)
      const filename = path.basename(localPath)

      // Recursively resolve imports in the imported file
      const resolvedSources = resolveSources({ [filename]: { content: fileContent } }, localPath)

      // Add the resolved sources to the modified sources, preventing duplicates
      Object.assign(modifiedSources, resolvedSources)

      // Return the import statement with the local path or use base file name
      return `import ${namedImports ? namedImports : ""}"${filename}";`
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

    const input = {
      language: "Solidity",
      sources: modifiedSources,
      settings: {
        outputSelection: {
          "*": {
            "*": ["abi", "evm.bytecode", "evm.deployedBytecode", "metadata"],
          },
        },
      },
    }

    const output = JSON.parse(solc.compile(JSON.stringify(input)))

    // const compiledContracts = Object.keys(contracts).map((contractName) => {
    //   const contract = contracts[contractName]
    //   const compiledData = {
    //     abi: contract[Object.keys(contract)[0]].abi,
    //     bytecode: contract[Object.keys(contract)[0]].evm.bytecode.object,
    //   }
    //   return {
    //     contractName,
    //     compiledData,
    //   }
    // })

    return NextResponse.json({ compiled: output })
  } catch (error) {
    console.error("Error compiling contract:", error)
    return NextResponse.json({ error: "Failed to compile contract" }, { status: 500 })
  }
}
