const definition: IContractDefinition = {
  name: "AirdropERC1155Claimable",
  description: `An ERC-1155 contract for airdropping tokens with a claim functionality.`,
  content: [
    { tag: "h1", content: "AirdropERC1155Claimable Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract implements an ERC-1155 token standard with a claim functionality, allowing users to claim tokens by interacting with the contract directly.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>ERC-1155 compliant token implementation</li>
                                <li>Claim functionality for users to claim tokens</li>
                                <li>Claim limit for each user</li>
                                <li>Ability to set claim start and end dates</li>
                                <li>Control over token distribution and claim status</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This contract can be used to conduct an airdrop of ERC-1155 tokens. The contract owner can set the distribution of tokens, claim limits, and timeframes for claiming.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract utilizes the OpenZeppelin ERC1155 implementation and includes custom functions for claim management.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                    <li>Ensure proper security audits before deploying the contract to a mainnet.</li>
                                    <li>Consider using a multi-sig wallet for ownership to improve security.</li>
                                    <li>Thoroughly test the contract before launching the airdrop.</li>
                                    <li>Provide clear and concise documentation for users and developers.</li>
                                `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "claim",
        signature: "claim(uint256,uint256)",
        params: [
          {
            name: "id",
            type: "uint256",
            description: "Token ID to claim",
          },
          {
            name: "amount",
            type: "uint256",
            description: "Amount of tokens to claim",
          },
        ],
      },
      {
        function: "setClaimDates",
        signature: "setClaimDates(uint256,uint256)",
        params: [
          {
            name: "startDate",
            type: "uint256",
            description: "Timestamp for claim start",
          },
          {
            name: "endDate",
            type: "uint256",
            description: "Timestamp for claim end",
          },
        ],
      },
      {
        function: "setClaimLimit",
        signature: "setClaimLimit(uint256,uint256)",
        params: [
          {
            name: "id",
            type: "uint256",
            description: "Token ID to set limit for",
          },
          {
            name: "limit",
            type: "uint256",
            description: "Claim limit for the token ID",
          },
        ],
      },
      {
        function: "setClaimStatus",
        signature: "setClaimStatus(uint256,bool)",
        params: [
          {
            name: "id",
            type: "uint256",
            description: "Token ID to set claim status for",
          },
          {
            name: "status",
            type: "bool",
            description: "New claim status for the token ID",
          },
        ],
      },
      {
        function: "mint",
        signature: "mint(address,uint256,uint256,bytes)",
        params: [
          {
            name: "to",
            type: "address",
            description: "Recipient address for the minted tokens",
          },
          {
            name: "id",
            type: "uint256",
            description: "Token ID to mint",
          },
          {
            name: "amount",
            type: "uint256",
            description: "Amount of tokens to mint",
          },
          {
            name: "data",
            type: "bytes",
            description: "Optional data associated with the minted tokens",
          },
        ],
      },
      {
        function: "mintBatch",
        signature: "mintBatch(address,uint256[],uint256[],bytes)",
        params: [
          {
            name: "to",
            type: "address",
            description: "Recipient address for the minted tokens",
          },
          {
            name: "ids",
            type: "uint256[]",
            description: "Array of token IDs to mint",
          },
          {
            name: "amounts",
            type: "uint256[]",
            description: "Array of amounts for each corresponding token ID",
          },
          {
            name: "data",
            type: "bytes",
            description: "Optional data associated with the minted tokens",
          },
        ],
      },
    ],
    read: [
      {
        function: "getClaimLimit",
        signature: "getClaimLimit(uint256)",
        params: [
          {
            name: "id",
            type: "uint256",
            description: "Token ID to get claim limit for",
          },
        ],
      },
      {
        function: "getClaimStatus",
        signature: "getClaimStatus(uint256)",
        params: [
          {
            name: "id",
            type: "uint256",
            description: "Token ID to get claim status for",
          },
        ],
      },
      {
        function: "getClaimDates",
        signature: "getClaimDates()",
        params: [],
      },
      {
        function: "getClaimedAmount",
        signature: "getClaimedAmount(address,uint256)",
        params: [
          {
            name: "claimer",
            type: "address",
            description: "Address of the claimer",
          },
          {
            name: "id",
            type: "uint256",
            description: "Token ID to get claimed amount for",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "Claim",
      signature: "Claim(address,uint256,uint256)",
      params: [
        {
          name: "claimer",
          type: "address",
          description: "Address of the claimer",
        },
        {
          name: "id",
          type: "uint256",
          description: "Token ID claimed",
        },
        {
          name: "amount",
          type: "uint256",
          description: "Amount of tokens claimed",
        },
      ],
      content: [],
    },
  ],
  extensions: [
    {
      name: "ERC-1155",
      description: "ERC-1155 standard compliant",
      source: "https://eips.ethereum.org/EIPS/eip-1155",
    },
  ],
  license: "MIT",

  resources: [
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "OpenZeppelin ERC1155 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc1155" },
    {
      title: "Airdroping ERC1155 Tokens: A Guide",
      url: "https://medium.com/coinmonks/airdropping-erc1155-tokens-a-guide-f387a26d1d17",
    },
    {
      title: "Building an ERC1155 Airdrop Contract: A Step-by-Step Guide",
      url: "https://blog.openzeppelin.com/building-an-erc1155-airdrop-contract/",
    },
    {
      title: "Airdrop Contract Example",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/extensions/ERC1155Airdrop.sol",
    },
  ],
}

export default definition
