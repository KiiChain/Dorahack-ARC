const definition: IContractDefinition = {
  name: "Marketplace",
  description: `A marketplace contract for buying and selling goods and services.`,
  content: [
    { tag: "h1", content: "Marketplace Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract implements a decentralized marketplace where users can list items for sale, browse listings, and purchase items using a specified payment token.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Listing Items: Users can create listings for their items, specifying details such as name, description, price, and image.</li>
                                <li>Browsing Listings: Users can browse available listings and filter them based on criteria like category, price range, and keywords.</li>
                                <li>Purchasing Items: Users can purchase items using a specified payment token. The contract handles escrow and secure transfer of funds.</li>
                                <li>Seller Management: Sellers can manage their listings, update details, and withdraw earned funds.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the marketplace, users can interact with the contract using a web3 client or a decentralized application (DApp). The contract provides functions for listing items, browsing listings, purchasing items, and managing listings.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract utilizes a mapping to store listings and their associated details. It uses a payment token for transactions and implements secure transfer mechanisms. The contract also includes event emissions for tracking and auditing purposes.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                    <li>Use a secure and audited payment token.</li>
                                    <li>Implement proper access controls and authorization.</li>
                                    <li>Consider using a decentralized storage solution for images and other media.</li>
                                    <li>Implement gas optimization techniques for efficient transactions.</li>
                                `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createListing",
        signature: "createListing(string,string,uint256,string)",
        params: [
          { name: "name", type: "string" },
          { name: "description", type: "string" },
          { name: "price", type: "uint256" },
          { name: "image", type: "string" },
        ],
      },
      {
        function: "purchaseItem",
        signature: "purchaseItem(uint256)",
        params: [{ name: "listingId", type: "uint256" }],
      },
      {
        function: "withdrawFunds",
        signature: "withdrawFunds()",
        params: [],
      },
    ],
    read: [
      {
        function: "getListing",
        signature: "getListing(uint256)",
        params: [{ name: "listingId", type: "uint256" }],
      },
      {
        function: "getAllListings",
        signature: "getAllListings()",
        params: [],
      },
      {
        function: "getListingCount",
        signature: "getListingCount()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "ListingCreated",
      signature: "ListingCreated(uint256,string,string,uint256,string)",
      params: [
        { name: "listingId", type: "uint256" },
        { name: "name", type: "string" },
        { name: "description", type: "string" },
        { name: "price", type: "uint256" },
        { name: "image", type: "string" },
      ],
      content: [],
    },
    {
      function: "ItemPurchased",
      signature: "ItemPurchased(uint256,address)",
      params: [
        { name: "listingId", type: "uint256" },
        { name: "buyer", type: "address" },
      ],
      content: [],
    },
    {
      function: "FundsWithdrawn",
      signature: "FundsWithdrawn(address,uint256)",
      params: [
        { name: "seller", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "OpenSea Documentation", url: "https://docs.opensea.io/docs/smart-contracts" },
    {
      title: "Ethereum.org Marketplace Documentation",
      url: "https://ethereum.org/en/developers/docs/smart-contracts/marketplace/",
    },
    {
      title: "Rarible Marketplace Smart Contract",
      url: "https://github.com/rarible/rarible-protocol/blob/main/contracts/lib/Market.sol",
    },
    { title: "Wyvern Protocol Documentation", url: "https://docs.wyvern.io/docs/protocol" },
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    {
      title: "Building a Marketplace on Ethereum",
      url: "https://medium.com/@0xPolygon/building-a-marketplace-on-ethereum-a-practical-guide-210261d086a0",
    },
    { title: "Solidity by Example: Marketplace", url: "https://solidity-by-example.org/marketplace/" },
    { title: "How to Create a Marketplace on Ethereum", url: "https://www.youtube.com/watch?v=N8n_i07l5s8" },
    { title: "Building a Decentralized Marketplace on Ethereum", url: "https://www.youtube.com/watch?v=bQf42J0Z4-I" },
  ],
}

export default definition
