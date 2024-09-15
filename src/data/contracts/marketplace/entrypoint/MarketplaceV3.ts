const definition: IContractDefinition = {
  name: "MarketplaceV3",
  description: `A decentralized marketplace for buying and selling digital assets, featuring an advanced royalty system, flexible listing options, and robust security measures.`,
  content: [
    { tag: "h1", content: "MarketplaceV3 Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract facilitates the creation of a secure and transparent marketplace where users can buy, sell, and trade digital assets like NFTs, tokens, and other digital goods.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Secure Asset Trading:** Facilitates secure transactions with robust validation and escrow mechanisms.</li>
                                <li>**Royalty System:** Supports creators by automatically distributing royalties to them on secondary sales.</li>
                                <li>**Flexible Listing Options:** Allows sellers to set various listing parameters, including reserve prices, duration, and bidding options.</li>
                                <li>**Decentralized Governance:** Enhances transparency and community involvement through on-chain governance mechanisms.</li>
                                <li>**Upgradeable Contract:** Enables future improvements and feature additions without requiring a new contract deployment.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "The MarketplaceV3 contract can be integrated into various applications, including NFT marketplaces, gaming platforms, and decentralized exchanges. Users can interact with the contract using standard smart contract interactions to list, bid, buy, and sell assets.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    { tag: "p", content: "The contract leverages advanced Solidity coding practices, including: ", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**OpenZeppelin libraries:** Provides robust security and best practices for contract development.</li>
                                <li>**ERC-721 and ERC-1155 support:** Allows for seamless integration with various NFT standards.</li>
                                <li>**Gas optimization:** Reduces transaction costs by employing efficient coding strategies.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    { tag: "p", content: "For optimal security and performance, it is recommended to:", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Thoroughly audit the contract:** Ensure the contract's code is secure and bug-free.</li>
                                <li>**Use a reliable smart contract wallet:** Securely manage the contract's assets and interactions.</li>
                                <li>**Stay updated on security best practices:** Continuously monitor and adapt to evolving security threats.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createListing",
        signature:
          "createListing(uint256,address,uint256,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint256)",
        params: [
          { name: "assetId", type: "uint256" },
          { name: "tokenAddress", type: "address" },
          { name: "startingPrice", type: "uint256" },
          { name: "reservePrice", type: "uint256" },
          { name: "duration", type: "uint256" },
          { name: "royaltyPercentage", type: "uint256" },
          { name: "isAuction", type: "bool" },
          { name: "startTime", type: "uint256" },
          { name: "endTime", type: "uint256" },
          { name: "minIncrement", type: "uint256" },
          { name: "bidIncrement", type: "uint256" },
        ],
      },
      {
        function: "cancelListing",
        signature: "cancelListing(uint256)",
        params: [{ name: "listingId", type: "uint256" }],
      },
      {
        function: "placeBid",
        signature: "placeBid(uint256,uint256)",
        params: [
          { name: "listingId", type: "uint256" },
          { name: "amount", type: "uint256" },
        ],
      },
      {
        function: "buyNow",
        signature: "buyNow(uint256)",
        params: [{ name: "listingId", type: "uint256" }],
      },
      {
        function: "withdrawEarnings",
        signature: "withdrawEarnings()",
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
        function: "getHighestBid",
        signature: "getHighestBid(uint256)",
        params: [{ name: "listingId", type: "uint256" }],
      },
      {
        function: "getListingStatus",
        signature: "getListingStatus(uint256)",
        params: [{ name: "listingId", type: "uint256" }],
      },
      {
        function: "getEarnings",
        signature: "getEarnings()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "ListingCreated",
      signature: "ListingCreated(uint256,address,uint256,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint256)",
      params: [
        { name: "listingId", type: "uint256" },
        { name: "assetAddress", type: "address" },
        { name: "assetId", type: "uint256" },
        { name: "startingPrice", type: "uint256" },
        { name: "reservePrice", type: "uint256" },
        { name: "duration", type: "uint256" },
        { name: "isAuction", type: "bool" },
        { name: "startTime", type: "uint256" },
        { name: "endTime", type: "uint256" },
        { name: "minIncrement", type: "uint256" },
        { name: "bidIncrement", type: "uint256" },
      ],
      content: [{ tag: "p", content: "A new listing has been created.", style: {} }],
    },
    {
      function: "ListingCancelled",
      signature: "ListingCancelled(uint256)",
      params: [{ name: "listingId", type: "uint256" }],
      content: [{ tag: "p", content: "A listing has been cancelled.", style: {} }],
    },
    {
      function: "BidPlaced",
      signature: "BidPlaced(uint256,address,uint256)",
      params: [
        { name: "listingId", type: "uint256" },
        { name: "bidder", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [{ tag: "p", content: "A bid has been placed on a listing.", style: {} }],
    },
    {
      function: "ListingSold",
      signature: "ListingSold(uint256,address,uint256)",
      params: [
        { name: "listingId", type: "uint256" },
        { name: "buyer", type: "address" },
        { name: "price", type: "uint256" },
      ],
      content: [{ tag: "p", content: "A listing has been sold.", style: {} }],
    },
    {
      function: "RoyaltyPaid",
      signature: "RoyaltyPaid(uint256,address,uint256)",
      params: [
        { name: "listingId", type: "uint256" },
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Royalties have been paid for a listing.", style: {} }],
    },
    {
      function: "EarningsWithdrawn",
      signature: "EarningsWithdrawn(address,uint256)",
      params: [
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Earnings have been withdrawn from the contract.", style: {} }],
    },
  ],
  resources: [] as IAnchor[] | [],
  extensions: [],
  license: "MIT",
}

export default definition
