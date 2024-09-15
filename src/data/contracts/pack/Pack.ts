const definition: IContractDefinition = {
  name: "Pack",
  description: `The Pack contract allows users to create and manage packs of items. These packs can be used to represent real-world collections, such as trading cards, or digital items, such as NFTs.`,
  content: [
    { tag: "h1", content: "Pack Contract", style: {} },
    {
      tag: "p",
      content:
        "The Pack contract is a smart contract that enables the creation and management of packs containing multiple items. Each pack can be designed with different item types and rarities, allowing for a wide range of applications.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Create packs with customizable item types and rarities.</li>
                                <li>Mint packs and assign them to users.</li>
                                <li>Open packs to reveal the contained items.</li>
                                <li>Manage the distribution and ownership of packs and items.</li>
                                <li>Integrate with other smart contracts and platforms.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the Pack contract, you will need to first deploy it to a blockchain network. Once deployed, you can interact with it using a web3 client or other blockchain tools. The contract provides functions for creating packs, minting packs, opening packs, and managing the distribution of packs and items.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The Pack contract is implemented using Solidity, a programming language specifically designed for smart contracts. It utilizes data structures and functions to manage the creation, ownership, and distribution of packs and items.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Secure your contract by auditing it thoroughly before deploying it to a live network.</li>
                                <li>Ensure that all transactions are properly handled and validated.</li>
                                <li>Implement clear and concise documentation for your contract.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Security Considerations", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Protect against reentrancy attacks by using appropriate security measures.</li>
                                <li>Validate all inputs to prevent malicious data injection.</li>
                                <li>Consider using a trusted third-party auditor to review your contract for vulnerabilities.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createPack",
        signature: "createPack(string memory _name, uint256[] memory _itemTypes, uint256[] memory _itemRarities)",
        params: [
          { name: "_name", type: "string" },
          { name: "_itemTypes", type: "uint256[]" },
          { name: "_itemRarities", type: "uint256[]" },
        ],
      },
      {
        function: "mintPack",
        signature: "mintPack(address _to, uint256 _packId)",
        params: [
          { name: "_to", type: "address" },
          { name: "_packId", type: "uint256" },
        ],
      },
    ],
    read: [
      {
        function: "getPack",
        signature: "getPack(uint256 _packId)",
        params: [{ name: "_packId", type: "uint256" }],
      },
      {
        function: "getPackOwner",
        signature: "getPackOwner(uint256 _packId)",
        params: [{ name: "_packId", type: "uint256" }],
      },
      {
        function: "getPackItems",
        signature: "getPackItems(uint256 _packId)",
        params: [{ name: "_packId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "PackCreated",
      signature: "PackCreated(uint256 indexed _packId, string _name)",
      params: [
        { name: "_packId", type: "uint256" },
        { name: "_name", type: "string" },
      ],
      content: [{ tag: "p", content: "Emitted when a new pack is created.", style: {} }],
    },
    {
      function: "PackMinted",
      signature: "PackMinted(uint256 indexed _packId, address indexed _to)",
      params: [
        { name: "_packId", type: "uint256" },
        { name: "_to", type: "address" },
      ],
      content: [{ tag: "p", content: "Emitted when a pack is minted to an address.", style: {} }],
    },
    {
      function: "PackOpened",
      signature: "PackOpened(uint256 indexed _packId, address indexed _opener)",
      params: [
        { name: "_packId", type: "uint256" },
        { name: "_opener", type: "address" },
      ],
      content: [{ tag: "p", content: "Emitted when a pack is opened.", style: {} }],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "Pack.gg Documentation", url: "https://docs.pack.gg/" },
    { title: "Pack.gg GitHub Repository", url: "https://github.com/pack-gg/pack" },
    { title: "Pack.gg Blog", url: "https://blog.pack.gg/" },
    { title: "Pack.gg Twitter", url: "https://twitter.com/packgg" },
    { title: "Pack.gg Discord", url: "https://discord.gg/packgg" },
    { title: "Pack.gg Forum", url: "https://forum.pack.gg/" },
    { title: "Pack.gg Medium", url: "https://medium.com/@packgg" },
    { title: "Pack.gg Telegram", url: "https://t.me/packgg" },
  ],
}

export default definition
