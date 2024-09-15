const definition: IContractDefinition = {
  name: "IMarketplace",
  description: `Interface for a generic marketplace contract.`,
  content: [
    { tag: "h1", content: "IMarketplace Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the basic functionalities of a marketplace contract, allowing for the creation, listing, and purchase of items. This interface can be implemented by various marketplace contracts, allowing for different functionalities and features.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Listing items for sale</li>
                                <li>Purchasing items</li>
                                <li>Managing item inventory</li>
                                <li>Setting item prices</li>
                                <li>Handling payment transactions</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This interface is meant to be implemented by concrete marketplace contracts. Developers can implement this interface to create their own marketplaces with specific functionalities and features.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "When implementing this interface, ensure to consider security best practices and handle potential vulnerabilities, such as re-entrancy attacks.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Implement robust input validation to prevent malicious input.</li>
                                <li>Use secure payment mechanisms to protect user funds.</li>
                                <li>Consider using a trusted oracle for price feeds, if applicable.</li>
                                <li>Implement a mechanism for resolving disputes.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createItem",
        signature: "createItem(string,uint256,address)",
        params: [
          { name: "itemId", type: "string" },
          { name: "price", type: "uint256" },
          { name: "seller", type: "address" },
        ],
      },
      {
        function: "listItem",
        signature: "listItem(string,uint256)",
        params: [
          { name: "itemId", type: "string" },
          { name: "price", type: "uint256" },
        ],
      },
      {
        function: "purchaseItem",
        signature: "purchaseItem(string)",
        params: [{ name: "itemId", type: "string" }],
      },
    ],
    read: [
      {
        function: "getItem",
        signature: "getItem(string)",
        params: [{ name: "itemId", type: "string" }],
      },
      {
        function: "getListing",
        signature: "getListing(string)",
        params: [{ name: "itemId", type: "string" }],
      },
      {
        function: "getInventory",
        signature: "getInventory(address)",
        params: [{ name: "seller", type: "address" }],
      },
    ],
  },
  events: [
    {
      function: "ItemCreated",
      signature: "ItemCreated(string,uint256,address)",
      params: [
        { name: "itemId", type: "string" },
        { name: "price", type: "uint256" },
        { name: "seller", type: "address" },
      ],
      content: [{ tag: "p", content: "Emitted when a new item is created.", style: {} }],
    },
    {
      function: "ItemListed",
      signature: "ItemListed(string,uint256)",
      params: [
        { name: "itemId", type: "string" },
        { name: "price", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when an item is listed for sale.", style: {} }],
    },
    {
      function: "ItemPurchased",
      signature: "ItemPurchased(string,address,address)",
      params: [
        { name: "itemId", type: "string" },
        { name: "buyer", type: "address" },
        { name: "seller", type: "address" },
      ],
      content: [{ tag: "p", content: "Emitted when an item is purchased.", style: {} }],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "IMarketplace Contract Documentation (Hypothetical)",
      url: "https://docs.example.com/contracts/imarketplace",
    },
    { title: "OpenZeppelin ERC721 Standard", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    { title: "OpenZeppelin ERC1155 Standard", url: "https://docs.openzeppelin.com/contracts/4.x/erc1155" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum Developer Documentation", url: "https://ethereum.org/en/developers/" },
    {
      title: "Building a Decentralized Marketplace on Ethereum (Article)",
      url: "https://medium.com/ethereum-dev/building-a-decentralized-marketplace-on-ethereum-746211b2e070",
    },
    {
      title: "Decentralized Marketplace Architecture (Blog Post)",
      url: "https://blog.example.com/decentralized-marketplace-architecture",
    },
    { title: "Decentralized Marketplaces: A Beginner's Guide (Video)", url: "https://www.youtube.com/watch?v=..." },
  ],
}

export default definition
