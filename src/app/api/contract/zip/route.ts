import { NextRequest, NextResponse } from "next/server"

import archiver from "archiver"
import fs from "fs"
import path from "path"

interface Contract {
  content: string
}

interface Contracts {
  [fileName: string]: Contract
}

const generateZip = async (projectPath: string): Promise<string> => {
  const zipFilePath = `${projectPath}/project.zip`
  const output = fs.createWriteStream(zipFilePath)
  const archive = archiver("zip", { zlib: { level: 9 } })

  return new Promise((resolve, reject) => {
    output.on("close", () => {
      resolve(zipFilePath)
    })

    archive.on("error", (err) => {
      reject(err)
    })

    archive.pipe(output)
    archive.directory(projectPath, false)
    archive.finalize()
  })
}

const handleStandalone = async (contracts: Contracts): Promise<string> => {
  const projectPath = path.resolve(".temp/standalone-project")
  fs.mkdirSync(projectPath, { recursive: true })

  Object.keys(contracts).forEach((fileName) => {
    const filePath = path.join(projectPath, fileName)
    fs.writeFileSync(filePath, contracts[fileName].content)
  })

  return await generateZip(projectPath)
}

// const handleFoundry = async (contracts: Contracts): Promise<string> => {
//   const projectPath = path.resolve(".temp/foundry-project")
//   const srcPath = path.join(projectPath, "src")
//   const contractsPath = path.join(projectPath, "contracts")

//   fs.mkdirSync(srcPath, { recursive: true })
//   fs.mkdirSync(contractsPath, { recursive: true })

//   Object.keys(contracts).forEach((fileName) => {
//     const filePath = path.join(contractsPath, fileName)
//     fs.writeFileSync(filePath, contracts[fileName].content)
//   })

//   await execPromise("foundryup")

//   return await generateZip(projectPath)
// }

// const handleHardhat = async (contracts: Contracts): Promise<string> => {
//   const projectPath = path.resolve(".temp/hardhat-project")
//   const contractsPath = path.join(projectPath, "contracts")

//   fs.mkdirSync(contractsPath, { recursive: true })

//   Object.keys(contracts).forEach((fileName) => {
//     const filePath = path.join(contractsPath, fileName)
//     fs.writeFileSync(filePath, contracts[fileName].content)
//   })

//   await execPromise("npx hardhat init", { cwd: projectPath })

//   return await generateZip(projectPath)
// }

const handleFoundry = async (contracts: Contracts): Promise<string> => {
  const projectPath = path.resolve(".temp/foundry-project")
  const srcPath = path.join(projectPath, "src")
  const libPath = path.join(projectPath, "lib")

  // Create Foundry project structure
  fs.mkdirSync(srcPath, { recursive: true })
  fs.mkdirSync(libPath, { recursive: true })

  // Create a basic foundry.toml config file
  const foundryConfig = `
      [profile.default]
      src = 'src'
      out = 'out'
      libs = ['lib']
      solc_version = '0.8.0'
    `
  fs.writeFileSync(path.join(projectPath, "foundry.toml"), foundryConfig)

  // Write contracts into the src folder
  Object.keys(contracts).forEach((fileName) => {
    const filePath = path.join(srcPath, fileName)
    fs.writeFileSync(filePath, contracts[fileName].content)
  })

  return await generateZip(projectPath)
}

const handleHardhat = async (contracts: Contracts): Promise<string> => {
  const projectPath = path.resolve(".temp/hardhat-project")
  const contractsPath = path.join(projectPath, "contracts")

  // Create Hardhat project structure
  fs.mkdirSync(contractsPath, { recursive: true })

  // Create a basic hardhat.config.js
  const hardhatConfig = `
      require("@nomiclabs/hardhat-waffle");
  
      module.exports = {
        solidity: "0.8.0",
      };
    `
  fs.writeFileSync(path.join(projectPath, "hardhat.config.js"), hardhatConfig)

  // Write contracts into the contracts folder
  Object.keys(contracts).forEach((fileName) => {
    const filePath = path.join(contractsPath, fileName)
    fs.writeFileSync(filePath, contracts[fileName].content)
  })

  return await generateZip(projectPath)
}

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as { framework: string; contracts: Contracts }

  if (!body || !body.contracts) {
    return NextResponse.json({ error: "Missing sources" }, { status: 400 })
  }

  try {
    let zipFilePath: string

    switch (body.framework) {
      case "standalone":
        zipFilePath = await handleStandalone(body.contracts)
        break
      case "foundry":
        zipFilePath = await handleFoundry(body.contracts)
        break
      case "hardhat":
        zipFilePath = await handleHardhat(body.contracts)
        break
      default:
        return NextResponse.json({ error: "Invalid framework" }, { status: 400 })
    }

    // Serve the zip file for download
    const fileStream = fs.createReadStream(zipFilePath)
    const fileName = path.basename(zipFilePath)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return new NextResponse(fileStream, {
      headers: {
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Content-Type": "application/zip",
      },
    })
  } catch (error: IError) {
    return NextResponse.json({ error: "Failed to process the request", details: error.message }, { status: 500 })
  }
}
