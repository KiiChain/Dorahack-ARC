const definition: IContractDefinition = {
  name: "TokenERC721",
  description: `A basic ERC721 token contract.`,
  content: [
    { tag: "h1", content: "TokenERC721 Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract implements the ERC721 standard, enabling the creation and management of non-fungible tokens (NFTs).",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Minting of NFTs</li>
                                <li>Transfer of NFTs between owners</li>
                                <li>Ownership verification</li>
                                <li>Support for token URI metadata</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use this contract, you can deploy it and then interact with it through its functions. For example, you can mint new NFTs, transfer them to other addresses, and retrieve information about the tokens.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content: "This contract is based on the ERC721 standard, following its specifications and best practices.",
      style: {},
    },
    {
      tag: "p",
      content:
        "It uses a mapping to store the ownership of each token and provides functions for transferring, minting, and retrieving information about tokens.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    { tag: "p", content: "When using this contract, consider the following best practices:", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Implement appropriate access controls to prevent unauthorized access.</li>
                                <li>Use secure storage mechanisms for sensitive data.</li>
                                <li>Thoroughly test your contract before deploying it.</li>
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
          { name: "_to", type: "address" },
          { name: "_tokenId", type: "uint256" },
        ],
      },
      {
        function: "safeTransferFrom",
        signature: "safeTransferFrom(address,address,uint256)",
        params: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "tokenId", type: "uint256" },
        ],
      },
      {
        function: "safeTransferFrom",
        signature: "safeTransferFrom(address,address,uint256,bytes)",
        params: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "tokenId", type: "uint256" },
          { name: "data", type: "bytes" },
        ],
      },
      {
        function: "transferFrom",
        signature: "transferFrom(address,address,uint256)",
        params: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "tokenId", type: "uint256" },
        ],
      },
      {
        function: "approve",
        signature: "approve(address,uint256)",
        params: [
          { name: "approved", type: "address" },
          { name: "tokenId", type: "uint256" },
        ],
      },
      {
        function: "setApprovalForAll",
        signature: "setApprovalForAll(address,bool)",
        params: [
          { name: "operator", type: "address" },
          { name: "approved", type: "bool" },
        ],
      },
    ],
    read: [
      {
        function: "balanceOf",
        signature: "balanceOf(address)",
        params: [{ name: "owner", type: "address" }],
      },
      {
        function: "ownerOf",
        signature: "ownerOf(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "getApproved",
        signature: "getApproved(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "isApprovedForAll",
        signature: "isApprovedForAll(address,address)",
        params: [
          { name: "owner", type: "address" },
          { name: "operator", type: "address" },
        ],
      },
      {
        function: "supportsInterface",
        signature: "supportsInterface(bytes4)",
        params: [{ name: "interfaceId", type: "bytes4" }],
      },
      {
        function: "tokenURI",
        signature: "tokenURI(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "Transfer",
      signature: "Transfer(address,address,uint256)",
      params: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "Approval",
      signature: "Approval(address,address,uint256)",
      params: [
        { name: "owner", type: "address" },
        { name: "approved", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "ApprovalForAll",
      signature: "ApprovalForAll(address,address,bool)",
      params: [
        { name: "owner", type: "address" },
        { name: "operator", type: "address" },
        { name: "approved", type: "bool" },
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
      title: "ERC721: Non-Fungible Token Standard",
      url: "https://ethereum.org/en/developers/docs/standards/tokens/erc-721/",
    },
    { title: "Building Your First NFT Collection - YouTube", url: "https://www.youtube.com/watch?v=fN1J49L7fJg" },
    { title: "Solidity by Example: ERC721 Token", url: "https://solidity-by-example.org/erc721/" },
    {
      title: "Create an NFT Marketplace with Hardhat and OpenZeppelin",
      url: "https://ethereum.org/en/developers/tutorials/create-an-nft-marketplace/",
    },
    {
      title: "NFT Development: A Guide to Creating Your Own NFT Collection",
      url: "https://www.101blockchains.com/nft-development-guide/",
    },
    {
      title: "NFT Smart Contract Development: A Comprehensive Guide",
      url: "https://www.dappuniversity.com/articles/nft-smart-contract-development-guide",
    },
    {
      title: "NFT Smart Contract Security Best Practices",
      url: "https://www.consensys.net/blog/security-audit/nft-smart-contract-security-best-practices/",
    },
    {
      title: "Understanding ERC721 & ERC1155 (Non-Fungible Token Standards)",
      url: "https://medium.com/@austintgriffith/understanding-erc721-erc1155-non-fungible-token-standards-816707192d6b",
    },
  ],
}

export default definition
