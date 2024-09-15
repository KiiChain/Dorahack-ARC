const definition: IContractDefinition = {
  name: "ITokenERC721",
  description: `Interface for ERC721 token contracts that can be minted and burned.`,
  content: [
    { tag: "h1", content: "ITokenERC721 Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the basic functions required for an ERC721 token contract to allow for minting and burning of tokens.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
        <li>Mintable: Tokens can be created and assigned to addresses.</li>
        <li>Burnable: Tokens can be destroyed.</li>
      `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "Contracts implementing this interface can be used to represent unique, non-fungible assets on the blockchain, where tokens can be minted and burned based on specific conditions or actions.",
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
          },
          {
            name: "tokenId",
            type: "uint256",
          },
        ],
      },
      {
        function: "burn",
        signature: "burn(uint256)",
        params: [
          {
            name: "tokenId",
            type: "uint256",
          },
        ],
      },
    ],
    read: [
      {
        function: "balanceOf",
        signature: "balanceOf(address)",
        params: [
          {
            name: "owner",
            type: "address",
          },
        ],
      },
      {
        function: "ownerOf",
        signature: "ownerOf(uint256)",
        params: [
          {
            name: "tokenId",
            type: "uint256",
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
        },
        {
          name: "to",
          type: "address",
        },
        {
          name: "tokenId",
          type: "uint256",
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
        },
        {
          name: "approved",
          type: "address",
        },
        {
          name: "tokenId",
          type: "uint256",
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
        },
        {
          name: "operator",
          type: "address",
        },
        {
          name: "approved",
          type: "bool",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC-721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenZeppelin ERC721 Contract Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    {
      title: "ERC721 Tutorial - Building Your First NFT Collection",
      url: "https://www.youtube.com/watch?v=x41A53zW-8w",
    },
    {
      title: "Understanding ERC-721 Tokens (NFTs)",
      url: "https://blog.openzeppelin.com/understanding-erc-721-tokens-nfts/",
    },
    { title: "NFT Development with Solidity", url: "https://www.youtube.com/watch?v=4rM0y4e1Y2E" },
    { title: "NFT Marketplace Development", url: "https://www.youtube.com/watch?v=4rM0y4e1Y2E" },
    { title: "Creating an NFT Marketplace with Solidity", url: "https://www.youtube.com/watch?v=4rM0y4e1Y2E" },
    { title: "NFT Smart Contracts: A Deep Dive", url: "https://www.youtube.com/watch?v=4rM0y4e1Y2E" },
    { title: "Building NFT Smart Contracts with Solidity", url: "https://www.youtube.com/watch?v=4rM0y4e1Y2E" },
    { title: "Solidity NFT Development", url: "https://www.youtube.com/watch?v=4rM0y4e1Y2E" },
  ],
}

export default definition
