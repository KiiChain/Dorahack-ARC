const definition: IContractDefinition = {
  name: "EnglishAuctionsLogic",
  description: `This contract implements English auctions, where the highest bidder wins. It allows anyone to create an auction, make bids, and claim the auctioned item if they are the highest bidder.`,
  content: [
    { tag: "h1", content: "EnglishAuctionsLogic Contract", style: {} },
    {
      tag: "p",
      content:
        "The EnglishAuctionsLogic contract is a smart contract that facilitates English auctions. It allows users to create auctions for various items, place bids, and claim the auctioned item if they are the highest bidder.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Auction Creation:** Anyone can create an auction by specifying the auctioned item, starting price, and duration.</li>
                                <li>**Bidding:** Participants can place bids on ongoing auctions. The highest bidder at the end of the auction wins.</li>
                                <li>**Claiming the Item:** The highest bidder can claim the auctioned item after the auction ends.</li>
                                <li>**Transparency:** All auction details, bids, and winners are recorded on the blockchain, ensuring transparency and immutability.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "To use the EnglishAuctionsLogic contract, follow these steps:",
      style: {},
    },
    {
      tag: "ol",
      content: `
                                <li>**Create an Auction:** Call the 'createAuction' function, providing the item details, starting price, and auction duration.</li>
                                <li>**Place a Bid:** Call the 'bid' function with the auction ID and your bid amount.</li>
                                <li>**Claim the Item:** After the auction ends, call the 'claimItem' function to receive the auctioned item if you are the highest bidder.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The EnglishAuctionsLogic contract uses a mapping to store auction details, including the item, starting price, duration, and current highest bid. It also maintains a list of bids for each auction. The contract handles bid validation, auction duration tracking, and claim functionality.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use appropriate data types to avoid overflows or underflows.</li>
                                <li>Handle potential errors and revert transactions if necessary.</li>
                                <li>Implement access control mechanisms to ensure only authorized parties can perform specific actions.</li>
                                <li>Test the contract thoroughly before deployment to prevent unexpected behavior.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createAuction",
        signature: "createAuction(string,uint256,uint256)",
        params: [
          { name: "item", type: "string" },
          { name: "startingPrice", type: "uint256" },
          { name: "duration", type: "uint256" },
        ],
      },
      {
        function: "bid",
        signature: "bid(uint256,uint256)",
        params: [
          { name: "auctionId", type: "uint256" },
          { name: "amount", type: "uint256" },
        ],
      },
      {
        function: "claimItem",
        signature: "claimItem(uint256)",
        params: [{ name: "auctionId", type: "uint256" }],
      },
    ],
    read: [
      {
        function: "getAuction",
        signature: "getAuction(uint256)",
        params: [{ name: "auctionId", type: "uint256" }],
      },
      {
        function: "getHighestBid",
        signature: "getHighestBid(uint256)",
        params: [{ name: "auctionId", type: "uint256" }],
      },
      {
        function: "getAuctionEndTime",
        signature: "getAuctionEndTime(uint256)",
        params: [{ name: "auctionId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "AuctionCreated",
      signature: "AuctionCreated(uint256,string,uint256,uint256)",
      params: [
        { name: "auctionId", type: "uint256" },
        { name: "item", type: "string" },
        { name: "startingPrice", type: "uint256" },
        { name: "duration", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "BidPlaced",
      signature: "BidPlaced(uint256,address,uint256)",
      params: [
        { name: "auctionId", type: "uint256" },
        { name: "bidder", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "ItemClaimed",
      signature: "ItemClaimed(uint256,address)",
      params: [
        { name: "auctionId", type: "uint256" },
        { name: "winner", type: "address" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "English Auctions Logic", url: "https://docs.openzeppelin.com/contracts/4.x/auction" },
    { title: "OpenZeppelin Auctions Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/auction" },
    { title: "Ethereum Smart Contract Development Tutorials", url: "https://www.youtube.com/watch?v=M576wJ7-D0o" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "English Auctions", url: "https://en.wikipedia.org/wiki/English_auction" },
  ],
}

export default definition
