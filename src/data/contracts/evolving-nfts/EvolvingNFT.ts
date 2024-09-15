const definition: IContractDefinition = {
  name: "EvolvingNFT",
  description: `A non-fungible token contract that allows for the evolution of its NFTs over time.`,
  content: [
    { tag: "h1", content: "EvolvingNFT Contract", style: {} },
    {
      tag: "p",
      content:
        "The EvolvingNFT contract is a smart contract that implements the ERC721 standard, with the added functionality of allowing NFTs to evolve over time. This means that the attributes of an NFT can change based on predefined rules or events, creating a dynamic and engaging experience for users.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li><strong>Evolutionary Mechanics:</strong>  Define rules and events that trigger NFT attribute changes, such as reaching a certain age or interacting with other NFTs.</li>
                                <li><strong>Customizable Evolution Paths:</strong>  Design unique evolution paths for different NFT types, allowing for a diverse and engaging collection.</li>
                                <li><strong>Transparency and On-Chain Evolution:</strong> All evolution events are recorded on the blockchain, ensuring transparency and immutability.</li>
                                <li><strong>Programmable Evolution:</strong> Utilize Solidity's capabilities to implement complex evolution logic and dynamic attribute changes.</li>
                                <li><strong>Community Engagement:</strong> Encourage user participation by allowing them to vote on evolution proposals or participate in events that influence NFT changes.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the EvolvingNFT contract, you can interact with it through a web3 library or a decentralized application (DApp). You can mint new evolving NFTs, view their current attributes, and observe their evolution over time. The contract also allows for specific functions to be called that trigger evolution events, such as reaching a certain age or interacting with other NFTs.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract utilizes a combination of ERC721 token standard and custom logic to manage the evolving nature of the NFTs. It stores information about each NFT's current state and the rules governing its evolution. When certain conditions are met, the contract automatically updates the NFT's attributes, reflecting the evolution.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li><strong>Security Audits:</strong> Conduct thorough security audits to ensure the contract's integrity and prevent vulnerabilities.</li>
                                <li><strong>Clear Documentation:</strong> Provide comprehensive documentation for the contract, including evolution rules, event triggers, and interaction instructions.</li>
                                <li><strong>Community Feedback:</strong> Encourage user feedback and engage with the community to gather suggestions for improvements and enhancements.</li>
                                <li><strong>Transparency and Open Source:</strong> Consider making the contract's source code open source for increased transparency and community collaboration.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "mint",
        signature: "mint(address,string,string,uint256)",
        params: [
          { name: "_to", type: "address" },
          { name: "_uri", type: "string" },
          { name: "_name", type: "string" },
          { name: "_evolutionStage", type: "uint256" },
        ],
      },
      {
        function: "evolve",
        signature: "evolve(uint256)",
        params: [{ name: "_tokenId", type: "uint256" }],
      },
      {
        function: "setBaseURI",
        signature: "setBaseURI(string)",
        params: [{ name: "_baseURI", type: "string" }],
      },
    ],
    read: [
      {
        function: "tokenURI",
        signature: "tokenURI(uint256)",
        params: [{ name: "_tokenId", type: "uint256" }],
      },
      {
        function: "ownerOf",
        signature: "ownerOf(uint256)",
        params: [{ name: "_tokenId", type: "uint256" }],
      },
      {
        function: "getEvolutionStage",
        signature: "getEvolutionStage(uint256)",
        params: [{ name: "_tokenId", type: "uint256" }],
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
    {
      function: "Evolved",
      signature: "Evolved(uint256,uint256)",
      params: [
        { name: "tokenId", type: "uint256" },
        { name: "newStage", type: "uint256" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "EvolvingNFT Documentation", url: "https://evolvingnft.com/docs" },
    { title: "EvolvingNFT Whitepaper", url: "https://evolvingnft.com/whitepaper" },
    { title: "EvolvingNFT Blog", url: "https://evolvingnft.com/blog" },
    { title: "EvolvingNFT on Medium", url: "https://medium.com/@evolvingnft" },
    { title: "EvolvingNFT on GitHub", url: "https://github.com/evolvingnft" },
    { title: "EvolvingNFT on Discord", url: "https://discord.gg/evolvingnft" },
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "OpenZeppelin ERC721 Implementation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    { title: "OpenZeppelin ERC1155 Implementation", url: "https://docs.openzeppelin.com/contracts/4.x/erc1155" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org" },
    { title: "Hardhat Documentation", url: "https://hardhat.org/guides" },
    { title: "Truffle Documentation", url: "https://www.trufflesuite.com/docs/truffle" },
    { title: "Ganache Documentation", url: "https://trufflesuite.com/ganache" },
  ],
}

export default definition
