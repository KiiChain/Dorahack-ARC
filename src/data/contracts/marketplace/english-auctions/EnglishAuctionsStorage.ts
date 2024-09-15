const definition: IContractDefinition = {
  name: "EnglishAuctionsStorage",
  description: `This contract stores the data for English Auctions. It stores the auction details, including the auction creator, the current highest bid, and the current highest bidder.`,
  content: [
    { tag: "h1", content: "EnglishAuctionsStorage Contract", style: {} },
    {
      tag: "p",
      content:
        "The EnglishAuctionsStorage contract is a simple storage contract that holds data for English auctions. It allows users to create auctions, place bids, and retrieve auction information.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Stores auction data including creator, highest bid, and highest bidder.</li>
                                <li>Allows users to create new auctions.</li>
                                <li>Allows users to place bids on existing auctions.</li>
                                <li>Allows users to retrieve auction information.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the EnglishAuctionsStorage contract, you can interact with it using a web3 library or a blockchain explorer. The contract provides functions for creating auctions, placing bids, and retrieving auction information.",
      style: {},
    },
    { tag: "h2", content: "Example Usage", style: {} },
    {
      tag: "p",
      content: `
                                    To create a new auction, you can call the \`createAuction\` function, passing the auction details as arguments. To place a bid, you can call the \`placeBid\` function, passing the auction ID and the bid amount. To retrieve auction information, you can call the \`getAuction\` function, passing the auction ID.
                                `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createAuction",
        signature: "createAuction(uint256,uint256,address)",
        params: [
          { name: "auctionId", type: "uint256" },
          { name: "startingPrice", type: "uint256" },
          { name: "creator", type: "address" },
        ],
      },
      {
        function: "placeBid",
        signature: "placeBid(uint256,uint256)",
        params: [
          { name: "auctionId", type: "uint256" },
          { name: "bidAmount", type: "uint256" },
        ],
      },
    ],
    read: [
      {
        function: "getAuction",
        signature: "getAuction(uint256)",
        params: [{ name: "auctionId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "AuctionCreated",
      signature: "AuctionCreated(uint256,uint256,address)",
      params: [
        { name: "auctionId", type: "uint256" },
        { name: "startingPrice", type: "uint256" },
        { name: "creator", type: "address" },
      ],
      content: [
        { tag: "p", content: "Emitted when a new auction is created.", style: {} },
        { tag: "p", content: "Parameters:", style: {} },
        {
          tag: "ul",
          content: `
                                        <li>auctionId: The ID of the newly created auction.</li>
                                        <li>startingPrice: The starting price of the auction.</li>
                                        <li>creator: The address of the auction creator.</li>
                                    `,
          style: {},
        },
      ],
    },
    {
      function: "BidPlaced",
      signature: "BidPlaced(uint256,uint256,address)",
      params: [
        { name: "auctionId", type: "uint256" },
        { name: "bidAmount", type: "uint256" },
        { name: "bidder", type: "address" },
      ],
      content: [
        { tag: "p", content: "Emitted when a new bid is placed on an auction.", style: {} },
        { tag: "p", content: "Parameters:", style: {} },
        {
          tag: "ul",
          content: `
                                        <li>auctionId: The ID of the auction that the bid was placed on.</li>
                                        <li>bidAmount: The amount of the bid.</li>
                                        <li>bidder: The address of the bidder.</li>
                                    `,
          style: {},
        },
      ],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "EnglishAuctionsStorage Contract on Etherscan", url: "https://etherscan.io/address/<contract_address>" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "OpenZeppelin Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/" },
    { title: "Ethereum.org Documentation", url: "https://ethereum.org/en/developers/docs/" },
  ],
}

export default definition
