const definition: IContractDefinition = {
  name: "BurnToClaimDrop721Storage",
  description: `This contract stores the storage for the BurnToClaimDrop721 contract.`,
  content: [
    { tag: "h1", content: "BurnToClaimDrop721Storage Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract stores the storage for the BurnToClaimDrop721 contract. It tracks the claimed tokens, the burn status of the ERC721 tokens, and the associated claim data.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Stores claimed tokens to prevent double claiming</li>
                                <li>Tracks burned ERC721 tokens to ensure they are not re-used for claiming</li>
                                <li>Manages claim data like the associated ERC721 token ID and claimer address</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This contract is not intended to be used directly by users. It is primarily used internally by the BurnToClaimDrop721 contract to manage storage.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses a mapping to store claimed tokens and a separate mapping to track burned ERC721 tokens. It also stores claim data in a struct.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "claim",
        signature: "claim(uint256,address)",
        params: [
          { name: "tokenId", type: "uint256" },
          { name: "claimer", type: "address" },
        ],
      },
      {
        function: "setBurned",
        signature: "setBurned(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
    ],
    read: [
      {
        function: "isClaimed",
        signature: "isClaimed(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "isBurned",
        signature: "isBurned(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "getClaimData",
        signature: "getClaimData(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "Claimed",
      signature: "Claimed(uint256,address)",
      params: [
        { name: "tokenId", type: "uint256" },
        { name: "claimer", type: "address" },
      ],
      content: [],
    },
    {
      function: "Burned",
      signature: "Burned(uint256)",
      params: [{ name: "tokenId", type: "uint256" }],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "BurnToClaimDrop721Storage Contract on Etherscan",
      url: "https://etherscan.io/address/YOUR_CONTRACT_ADDRESS",
    },
    { title: "OpenZeppelin ERC721 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum.org Documentation", url: "https://ethereum.org/en/developers/docs/" },
    { title: "Stack Overflow", url: "https://stackoverflow.com/questions/tagged/solidity" },
    { title: "CryptoZombies Course", url: "https://cryptozombies.io/" },
    { title: "Ethereum Developers Forum", url: "https://ethereum.org/en/developers/forum/" },
    { title: "GitHub", url: "https://github.com/search?q=BurnToClaimDrop721Storage" },
    {
      title: "YouTube Tutorials on Smart Contract Development",
      url: "https://www.youtube.com/results?search_query=smart+contract+development",
    },
  ],
}

export default definition
