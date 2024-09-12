import { Directory, File } from "@/interface/custom/folder-tree/folder-tree"

export const init: Directory = {
  id: "0",
  name: "root",
  type: "directory",
  depth: 0,
  dirs: [],
  files: [],
  parentId: "0",
}

const templates: Record<string, Directory> = {
  "Solidity Basic": {
    id: "solidity_basic",
    name: "Solidity Starter",
    type: "directory",
    depth: 0,
    dirs: [
      {
        id: "contracts",
        name: "contracts",
        parentId: "solidity_basic",
        type: "directory",
        depth: 1,
        dirs: [],
        files: [
          {
            id: "contract1",
            name: "SimpleStorage.sol",
            parentId: "contracts",
            type: "file",
            depth: 2,
            content: `// SimpleStorage.sol\npragma solidity ^0.8.0;\n\ncontract SimpleStorage {\n    uint256 public data;\n\n    function set(uint256 _data) public {\n        data = _data;\n    }\n}`,
          },
        ],
      },
    ],
    files: [
      {
        id: "readme",
        name: "README.md",
        parentId: "solidity_basic",
        type: "file",
        depth: 1,
        content: "# Solidity Starter\nA simple Solidity project.",
      },
    ],
    parentId: "0",
  },
  "ERC20 Token": {
    id: "erc20_token",
    name: "ERC20 Token Project",
    type: "directory",
    depth: 0,
    dirs: [
      {
        id: "contracts",
        name: "contracts",
        parentId: "erc20_token",
        type: "directory",
        depth: 1,
        dirs: [],
        files: [
          {
            id: "erc20contract",
            name: "MyToken.sol",
            parentId: "contracts",
            type: "file",
            depth: 2,
            content: `// MyToken.sol\npragma solidity ^0.8.0;\n\nimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n\ncontract MyToken is ERC20 {\n    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {\n        _mint(msg.sender, initialSupply);\n    }\n}`,
          },
        ],
      },
    ],
    files: [
      {
        id: "readme",
        name: "README.md",
        parentId: "erc20_token",
        type: "file",
        depth: 1,
        content: "# ERC20 Token Project\nThis is an ERC20 token contract using OpenZeppelin.",
      },
    ],
    parentId: "0",
  },
  "NFT Marketplace": {
    id: "nft_marketplace",
    name: "NFT Marketplace Project",
    type: "directory",
    depth: 0,
    dirs: [
      {
        id: "contracts",
        name: "contracts",
        parentId: "nft_marketplace",
        type: "directory",
        depth: 1,
        dirs: [],
        files: [
          {
            id: "nftcontract",
            name: "NFTMarket.sol",
            parentId: "contracts",
            type: "file",
            depth: 2,
            content: `// NFTMarket.sol\npragma solidity ^0.8.0;\n\nimport "@openzeppelin/contracts/token/ERC721/ERC721.sol";\n\ncontract NFTMarket is ERC721 {\n    constructor() ERC721("NFTMarket", "NFTM") {}\n}`,
          },
        ],
      },
    ],
    files: [
      {
        id: "readme",
        name: "README.md",
        parentId: "nft_marketplace",
        type: "file",
        depth: 1,
        content: "# NFT Marketplace Project\nThis project includes an ERC721-based NFT marketplace.",
      },
    ],
    parentId: "0",
  },
}

export const addLibrariesToProject = (project: Directory, libraries: File[]) => {
  const libsFolder: Directory = {
    id: "libs",
    name: "libraries",
    parentId: project.id,
    type: "directory",
    depth: project.depth + 1,
    dirs: [],
    files: libraries.map((lib, index) => ({
      id: `lib-${index}`,
      name: `${lib}.sol`,
      parentId: "libs",
      type: "file",
      depth: project.depth + 2,
      content: `// ${lib} library code\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n`,
    })),
  }
  project.dirs.push(libsFolder)
  return project
}
// libraries: File[]
export const createProject = (projectName: string, templateKey: string | null) => {
  console.log(`chk`, `pro`, projectName)
  let project: Directory = { ...init, name: projectName }
  if (templateKey == `empty`) return init
  if (templateKey && templates[templateKey]) {
    project = { ...templates[templateKey], name: projectName }
  } else {
    project = { ...init, name: projectName }
  }

  // if (libraries.length > 0) {
  //   project = addLibrariesToProject(project, libraries);
  // }

  return project
}
