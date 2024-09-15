const definition: IContractDefinition = {
  name: "EvolvingNFTLogic",
  description: `This contract defines the core logic for evolving NFTs, enabling dynamic updates and changes to their attributes over time.`,
  content: [
    { tag: "h1", content: "EvolvingNFTLogic Contract", style: {} },
    {
      tag: "p",
      content:
        "The EvolvingNFTLogic contract allows for the creation and management of NFTs that can evolve over time based on predefined rules or external events. It provides functions to initiate evolution, update attributes, and query the current state of an NFT.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Evolution Rules:** Defines conditions and actions for NFT evolution, such as time-based progression, interaction with other contracts, or user-triggered events.</li>
                                <li>**Attribute Updates:** Allows for modification of NFT attributes, such as image, metadata, or traits, as part of the evolution process.</li>
                                <li>**State Tracking:** Maintains a record of evolution stages and timestamps, providing transparency and auditability.</li>
                                <li>**Customizable Logic:** Offers flexibility to implement various evolution patterns and behaviors tailored to specific NFT projects.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To utilize the EvolvingNFTLogic contract, developers can integrate it into their NFT projects and implement the necessary logic for evolution rules and attribute updates. The contract provides functions for initiating evolution, querying the current state of an NFT, and retrieving information about its evolution history.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses a combination of mappings and events to track NFT evolution and attribute changes. It leverages the ERC-721 standard for managing ownership and transfers.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Security:** Ensure proper access control mechanisms and input validation to prevent malicious actions.</li>
                                <li>**Gas Optimization:** Consider efficient data structures and storage patterns to minimize transaction costs.</li>
                                <li>**Transparency:** Document evolution rules and attributes clearly for user understanding.</li>
                                <li>**Versioning:** Maintain compatibility with existing NFT contracts and consider versioning for future updates.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "initialize",
        signature: "initialize(address,uint256)",
        params: [
          { name: "_nftContract", type: "address" },
          { name: "_evolutionInterval", type: "uint256" },
        ],
      },
      {
        function: "evolve",
        signature: "evolve(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "setEvolutionRules",
        signature: "setEvolutionRules(uint256,string,bytes)",
        params: [
          { name: "tokenId", type: "uint256" },
          { name: "newRule", type: "string" },
          { name: "ruleData", type: "bytes" },
        ],
      },
      {
        function: "updateAttribute",
        signature: "updateAttribute(uint256,string,string)",
        params: [
          { name: "tokenId", type: "uint256" },
          { name: "attributeKey", type: "string" },
          { name: "newValue", type: "string" },
        ],
      },
    ],
    read: [
      {
        function: "getEvolutionStage",
        signature: "getEvolutionStage(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "getLastEvolvedAt",
        signature: "getLastEvolvedAt(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "getEvolutionRules",
        signature: "getEvolutionRules(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "getAttribute",
        signature: "getAttribute(uint256,string)",
        params: [
          { name: "tokenId", type: "uint256" },
          { name: "attributeKey", type: "string" },
        ],
      },
    ],
  },
  events: [
    {
      function: "Evolved",
      signature: "Evolved(uint256,uint256)",
      params: [
        { name: "tokenId", type: "uint256" },
        { name: "newStage", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "AttributeUpdated",
      signature: "AttributeUpdated(uint256,string,string)",
      params: [
        { name: "tokenId", type: "uint256" },
        { name: "attributeKey", type: "string" },
        { name: "newValue", type: "string" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "EvolvingNFTLogic Contract Documentation",
      url: "https://github.com/EvolvingNFT/evolving-nft-logic/blob/main/docs/EvolvingNFTLogic.md",
    },
    { title: "EvolvingNFT Logic Repository", url: "https://github.com/EvolvingNFT/evolving-nft-logic" },
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenZeppelin ERC721 Contract", url: "https://docs.openzeppelin.com/contracts/4.x/api/token/ERC721" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Hardhat Documentation", url: "https://hardhat.org/guides/introduction.html" },
  ],
}

export default definition
