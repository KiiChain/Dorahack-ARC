const definition: IContractDefinition = {
  name: "OpenEditionERC721FlatFee",
  description: `An ERC721 contract that allows for the minting of multiple copies of the same token, with a flat fee for each copy.`,
  content: [
    { tag: "h1", content: "OpenEditionERC721FlatFee Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract implements an ERC721 standard for minting non-fungible tokens (NFTs) with a unique feature: the ability to create multiple copies of a single token design.",
      style: {},
    },
    {
      tag: "p",
      content:
        "Each copy of the token, referred to as an 'edition', is minted with a fixed flat fee, regardless of how many editions have already been created.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>Open Editions:</b> Mint multiple copies of the same NFT design.</li>
                                <li><b>Flat Fee:</b> A fixed price per copy of the NFT.</li>
                                <li><b>ERC721 Compliance:</b> Adheres to the ERC721 standard for non-fungible tokens.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "The contract provides functions for minting new editions, retrieving information about the token, including the total number of minted editions, and managing the minting process. You can interact with the contract using a web3 library or tools like Remix or Hardhat.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses the `ERC721Enumerable` base contract to handle ERC721 functionality and provide an efficient way to track and manage the editions of each token. It also includes a `flatFee` variable to store the fixed price per copy, and a `totalMinted` variable to keep track of the total number of editions minted for each token ID.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>Security:</b> Consider implementing additional security measures to prevent potential vulnerabilities like reentrancy attacks.</li>
                                <li><b>Gas Optimization:</b> Optimize the contract code for efficient gas usage, especially during minting operations, to reduce costs for users.</li>
                                <li><b>Documentation:</b> Provide clear and comprehensive documentation for the contract, including usage instructions, security considerations, and potential limitations.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "mint",
        signature: "mint(address,uint256)",
        params: [
          {
            name: "to",
            type: "address",
            description: "Address of the recipient of the minted token",
          },
          {
            name: "tokenId",
            type: "uint256",
            description: "ID of the token to mint",
          },
        ],
      },
      {
        function: "setFlatFee",
        signature: "setFlatFee(uint256)",
        params: [
          {
            name: "newFlatFee",
            type: "uint256",
            description: "The new flat fee for minting",
          },
        ],
      },
    ],
    read: [
      {
        function: "flatFee",
        signature: "flatFee()",
        params: [],
      },
      {
        function: "totalMinted",
        signature: "totalMinted(uint256)",
        params: [
          {
            name: "tokenId",
            type: "uint256",
            description: "ID of the token",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "Transfer",
      signature: "Transfer(address,address,uint256)",
      params: [
        {
          name: "from",
          type: "address",
          description: "The address of the from account",
        },
        {
          name: "to",
          type: "address",
          description: "The address of the to account",
        },
        {
          name: "tokenId",
          type: "uint256",
          description: "The token ID",
        },
      ],
      content: [],
    },
    {
      function: "Approval",
      signature: "Approval(address,address,uint256)",
      params: [
        {
          name: "owner",
          type: "address",
          description: "The owner of the token",
        },
        {
          name: "approved",
          type: "address",
          description: "The address of the approved account",
        },
        {
          name: "tokenId",
          type: "uint256",
          description: "The token ID",
        },
      ],
      content: [],
    },
    {
      function: "ApprovalForAll",
      signature: "ApprovalForAll(address,address,bool)",
      params: [
        {
          name: "owner",
          type: "address",
          description: "The owner of the tokens",
        },
        {
          name: "operator",
          type: "address",
          description: "The operator",
        },
        {
          name: "approved",
          type: "bool",
          description: "Whether the operator is approved",
        },
      ],
      content: [],
    },
    {
      function: "Minted",
      signature: "Minted(address,uint256)",
      params: [
        {
          name: "to",
          type: "address",
          description: "The address of the recipient",
        },
        {
          name: "tokenId",
          type: "uint256",
          description: "The token ID",
        },
      ],
      content: [],
    },
    {
      function: "FlatFeeUpdated",
      signature: "FlatFeeUpdated(uint256)",
      params: [
        {
          name: "newFlatFee",
          type: "uint256",
          description: "The new flat fee",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "OpenZeppelin ERC721 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenSea Documentation", url: "https://docs.opensea.io/docs/smart-contracts" },
    { title: "Ethereum.org Documentation", url: "https://ethereum.org/en/developers/docs/standards/tokens/" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    {
      title: "Smart Contract Security Best Practices",
      url: "https://consensys.net/diligence/smart-contract-security-audit-checklist/",
    },
  ],
}

export default definition
