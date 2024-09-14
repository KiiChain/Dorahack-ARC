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

export const templates: Record<string, Directory> = {
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
            content: `// SPDX-License-Identifier: MIT\n// SimpleStorage.sol\npragma solidity ^0.8.0;\n\ncontract SimpleStorage {\n    uint256 public data;\n\n    function set(uint256 _data) public {\n        data = _data;\n    }\n}`,
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
            content: `// SPDX-License-Identifier: MIT\n// MyToken.sol\npragma solidity ^0.8.0;\n\nimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n\ncontract MyToken is ERC20 {\n    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {\n        _mint(msg.sender, initialSupply);\n    }\n}`,
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
            content: `// SPDX-License-Identifier: MIT\n// NFTMarket.sol\npragma solidity ^0.8.0;\n\nimport "@openzeppelin/contracts/token/ERC721/ERC721.sol";\n\ncontract NFTMarket is ERC721 {\n    constructor() ERC721("NFTMarket", "NFTM") {}\n}`,
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
  DAO: {
    id: "dao_project",
    name: "DAO Project",
    type: "directory",
    depth: 0,
    dirs: [
      {
        id: "contracts",
        name: "contracts",
        parentId: "dao_project",
        type: "directory",
        depth: 1,
        dirs: [],
        files: [
          {
            id: "daocontract",
            name: "DAO.sol",
            parentId: "contracts",
            type: "file",
            depth: 2,
            content: `// SPDX-License-Identifier: MIT\n// DAO.sol\npragma solidity ^0.8.0;\n\ncontract DAO {\n    struct Proposal {\n        uint id;\n        string description;\n        uint voteCount;\n    }\n\n    Proposal[] public proposals;\n\n    function createProposal(string memory description) public {\n        proposals.push(Proposal({\n            id: proposals.length,\n            description: description,\n            voteCount: 0\n        }));\n    }\n\n    function vote(uint proposalId) public {\n        proposals[proposalId].voteCount += 1;\n    }\n}`,
          },
        ],
      },
    ],
    files: [
      {
        id: "readme",
        name: "README.md",
        parentId: "dao_project",
        type: "file",
        depth: 1,
        content: "# DAO Project\nThis project includes a basic DAO contract.",
      },
    ],
    parentId: "0",
  },
  DeFi: {
    id: "defi_project",
    name: "DeFi Project",
    type: "directory",
    depth: 0,
    dirs: [
      {
        id: "contracts",
        name: "contracts",
        parentId: "defi_project",
        type: "directory",
        depth: 1,
        dirs: [],
        files: [
          {
            id: "deficontract",
            name: "DeFiContract.sol",
            parentId: "contracts",
            type: "file",
            depth: 2,
            content: `// SPDX-License-Identifier: MIT\n// DeFiContract.sol\npragma solidity ^0.8.0;\n\ncontract DeFiContract {\n    mapping(address => uint256) public balances;\n\n    function deposit() public payable {\n        balances[msg.sender] += msg.value;\n    }\n\n    function withdraw(uint256 amount) public {\n        require(balances[msg.sender] >= amount, "Insufficient balance");\n        balances[msg.sender] -= amount;\n        payable(msg.sender).transfer(amount);\n    }\n}`,
          },
        ],
      },
    ],
    files: [
      {
        id: "readme",
        name: "README.md",
        parentId: "defi_project",
        type: "file",
        depth: 1,
        content: "# DeFi Project\nThis project includes a basic DeFi contract.",
      },
    ],
    parentId: "0",
  },
  Oracle: {
    id: "oracle_project",
    name: "Oracle Project",
    type: "directory",
    depth: 0,
    dirs: [
      {
        id: "contracts",
        name: "contracts",
        parentId: "oracle_project",
        type: "directory",
        depth: 1,
        dirs: [],
        files: [
          {
            id: "oraclecontract",
            name: "Oracle.sol",
            parentId: "contracts",
            type: "file",
            depth: 2,
            content: `// SPDX-License-Identifier: MIT\n// Oracle.sol\npragma solidity ^0.8.0;\n\ncontract Oracle {\n    address public admin;\n    uint256 public data;\n\n    constructor() {\n        admin = msg.sender;\n    }\n\n    function updateData(uint256 _data) external {\n        require(msg.sender == admin, "Only admin can update data");\n        data = _data;\n    }\n}`,
          },
        ],
      },
    ],
    files: [
      {
        id: "readme",
        name: "README.md",
        parentId: "oracle_project",
        type: "file",
        depth: 1,
        content: "# Oracle Project\nThis project includes a basic Oracle contract.",
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
import { AiFillHome, AiFillMessage, AiFillUsb } from "react-icons/ai"

export const navItems = [
  {
    name: "Home",
    link: "/dashboard",
    icon: <AiFillHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <AiFillUsb className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Explore",
    link: "/explore",
    icon: <AiFillMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "IDE",
    link: "/ide",
    icon: <AiFillMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
]
