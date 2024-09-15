const definition: IContractDefinition = {
  name: "IPack",
  description: `Interface for a Pack contract`,
  content: [
    { tag: "h1", content: "IPack Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions and events for a Pack contract. A Pack represents a collection of items that can be opened to reveal their contents.",
      style: {},
    },
    { tag: "h2", content: "Functions", style: {} },
    {
      tag: "ul",
      content: `
                                <li><strong>mint(address to, uint256 packId)</strong>: Mints a new pack for the specified recipient.</li>
                                <li><strong>open(uint256 packId)</strong>: Opens a pack and reveals its contents.</li>
                                <li><strong>getPackContents(uint256 packId)</strong>: Returns the contents of a pack without opening it.</li>
                                <li><strong>getPackOwner(uint256 packId)</strong>: Returns the address of the pack owner.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Events", style: {} },
    {
      tag: "ul",
      content: `
                                <li><strong>PackMinted(address to, uint256 packId)</strong>: Emitted when a new pack is minted.</li>
                                <li><strong>PackOpened(address owner, uint256 packId)</strong>: Emitted when a pack is opened.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "Implement this interface in your Pack contract to ensure compatibility with other contracts that interact with Packs.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "mint",
        signature: "mint(address,uint256)",
        params: [
          { name: "to", type: "address" },
          { name: "packId", type: "uint256" },
        ],
      },
      {
        function: "open",
        signature: "open(uint256)",
        params: [{ name: "packId", type: "uint256" }],
      },
    ],
    read: [
      {
        function: "getPackContents",
        signature: "getPackContents(uint256)",
        params: [{ name: "packId", type: "uint256" }],
      },
      {
        function: "getPackOwner",
        signature: "getPackOwner(uint256)",
        params: [{ name: "packId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "PackMinted",
      signature: "PackMinted(address,uint256)",
      params: [
        { name: "to", type: "address" },
        { name: "packId", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "PackOpened",
      signature: "PackOpened(address,uint256)",
      params: [
        { name: "owner", type: "address" },
        { name: "packId", type: "uint256" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "IPack Documentation", url: "https://docs.ipack.io/" },
    { title: "IPack Whitepaper", url: "https://ipack.io/whitepaper.pdf" },
    { title: "IPack Blog", url: "https://blog.ipack.io/" },
    { title: "IPack Github Repository", url: "https://github.com/ipack-io/ipack-contracts" },
    { title: "IPack on Ethereum", url: "https://etherscan.io/address/..." },
    { title: "IPack Community Forum", url: "https://forum.ipack.io/" },
    { title: "IPack Medium", url: "https://medium.com/@ipack.io" },
  ],
}

export default definition
