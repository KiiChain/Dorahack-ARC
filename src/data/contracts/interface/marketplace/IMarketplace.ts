const definition: IContractDefinition = {
  name: "IMarketplace",
  description: `Interface for a marketplace contract.`,
  content: [
    { tag: "h1", content: "IMarketplace Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the basic functions and events for a marketplace contract. This contract allows for listing items, making bids, and purchasing items. It is intended to be implemented by specific marketplace contracts.",
      style: {},
    },
    { tag: "h2", content: "Functions", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>listItem</b>: Lists a new item for sale.</li>
                                <li><b>makeBid</b>: Places a bid on an item.</li>
                                <li><b>buyItem</b>: Purchases an item.</li>
                                <li><b>cancelListing</b>: Cancels a listing for an item.</li>
                                <li><b>withdrawBid</b>: Withdraws a bid on an item.</li>
                                <li><b>getItemDetails</b>: Returns information about an item.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Events", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>ItemListed</b>: Emitted when a new item is listed.</li>
                                <li><b>BidPlaced</b>: Emitted when a bid is placed on an item.</li>
                                <li><b>ItemBought</b>: Emitted when an item is purchased.</li>
                                <li><b>ListingCancelled</b>: Emitted when a listing is cancelled.</li>
                                <li><b>BidWithdrawn</b>: Emitted when a bid is withdrawn.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "listItem",
        signature: "listItem(address,uint256,uint256,string,string)",
        params: [
          { name: "seller", type: "address" },
          { name: "itemId", type: "uint256" },
          { name: "startingPrice", type: "uint256" },
          { name: "itemName", type: "string" },
          { name: "itemDescription", type: "string" },
        ],
      },
      {
        function: "makeBid",
        signature: "makeBid(uint256,uint256)",
        params: [
          { name: "itemId", type: "uint256" },
          { name: "bidAmount", type: "uint256" },
        ],
      },
      {
        function: "buyItem",
        signature: "buyItem(uint256)",
        params: [{ name: "itemId", type: "uint256" }],
      },
      {
        function: "cancelListing",
        signature: "cancelListing(uint256)",
        params: [{ name: "itemId", type: "uint256" }],
      },
      {
        function: "withdrawBid",
        signature: "withdrawBid(uint256)",
        params: [{ name: "itemId", type: "uint256" }],
      },
    ],
    read: [
      {
        function: "getItemDetails",
        signature: "getItemDetails(uint256)",
        params: [{ name: "itemId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "ItemListed",
      signature: "ItemListed(address,uint256,uint256,string,string)",
      params: [
        { name: "seller", type: "address" },
        { name: "itemId", type: "uint256" },
        { name: "startingPrice", type: "uint256" },
        { name: "itemName", type: "string" },
        { name: "itemDescription", type: "string" },
      ],
      content: [],
    },
    {
      function: "BidPlaced",
      signature: "BidPlaced(address,uint256,uint256)",
      params: [
        { name: "bidder", type: "address" },
        { name: "itemId", type: "uint256" },
        { name: "bidAmount", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "ItemBought",
      signature: "ItemBought(address,uint256,address)",
      params: [
        { name: "buyer", type: "address" },
        { name: "itemId", type: "uint256" },
        { name: "seller", type: "address" },
      ],
      content: [],
    },
    {
      function: "ListingCancelled",
      signature: "ListingCancelled(address,uint256)",
      params: [
        { name: "seller", type: "address" },
        { name: "itemId", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "BidWithdrawn",
      signature: "BidWithdrawn(address,uint256)",
      params: [
        { name: "bidder", type: "address" },
        { name: "itemId", type: "uint256" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "IMarketplace Interface",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/contracts/interfaces/IMarketplace.sol",
    },
    { title: "OpenZeppelin Contracts Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/" },
    { title: "ERC-721 Non-Fungible Token Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "ERC-1155 Multi Token Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum Development Tutorials", url: "https://ethereum.org/en/developers/" },
    { title: "CryptoZombies", url: "https://cryptozombies.io/" },
    {
      title: "Build a Decentralized Marketplace on Ethereum",
      url: "https://medium.com/ethereum-dev/build-a-decentralized-marketplace-on-ethereum-d7eb5b47b66c",
    },
    {
      title: "Smart Contracts for Decentralized Marketplaces",
      url: "https://medium.com/hackernoon/smart-contracts-for-decentralized-marketplaces-9a414d0e7076",
    },
  ],
}

export default definition
