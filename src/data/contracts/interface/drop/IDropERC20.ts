const definition: IContractDefinition = {
  name: "IDropERC20",
  description: `Interface for ERC20 token drops`,
  content: [
    { tag: "h1", content: "IDropERC20 Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract defines the interface for ERC20 token drops, enabling the distribution of tokens to specific recipients.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Provides functions for claiming tokens based on specific conditions.</li>
                                <li>Allows for setting claim limits and other parameters for token drops.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "Implementations of this interface can be used to create and manage token drops, allowing developers to distribute tokens to their communities in a controlled and transparent manner.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "claim",
        signature: "claim()",
        params: [],
      },
      {
        function: "setClaimLimit",
        signature: "setClaimLimit(uint256)",
        params: [
          {
            name: "limit",
            type: "uint256",
          },
        ],
      },
      {
        function: "setClaimStart",
        signature: "setClaimStart(uint256)",
        params: [
          {
            name: "start",
            type: "uint256",
          },
        ],
      },
      {
        function: "setClaimEnd",
        signature: "setClaimEnd(uint256)",
        params: [
          {
            name: "end",
            type: "uint256",
          },
        ],
      },
    ],
    read: [
      {
        function: "claimLimit",
        signature: "claimLimit()",
        params: [],
      },
      {
        function: "claimStart",
        signature: "claimStart()",
        params: [],
      },
      {
        function: "claimEnd",
        signature: "claimEnd()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "Claimed",
      signature: "Claimed(address,uint256)",
      params: [
        {
          name: "claimer",
          type: "address",
        },
        {
          name: "amount",
          type: "uint256",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "OpenZeppelin ERC20 Contract", url: "https://docs.openzeppelin.com/contracts/4.x/api/token/ERC20" },
    { title: "Understanding Smart Contracts", url: "https://ethereum.org/en/developers/docs/smart-contracts/" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum.org - Smart Contracts", url: "https://ethereum.org/en/developers/docs/smart-contracts/" },
    { title: "CryptoZombies - Learn Solidity", url: "https://cryptozombies.io/" },
    {
      title: "Remix IDE - Solidity Compiler and Runtime Environment",
      url: "https://remix-ide.readthedocs.io/en/latest/",
    },
  ],
}

export default definition
