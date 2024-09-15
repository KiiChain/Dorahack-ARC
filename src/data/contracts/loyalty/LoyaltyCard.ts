const definition: IContractDefinition = {
  name: "LoyaltyCard",
  description: `A Solidity contract that implements a loyalty card system.`,
  content: [
    { tag: "h1", content: "LoyaltyCard Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract allows businesses to create and manage loyalty cards for their customers. Customers can earn points for purchases and redeem them for rewards.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Create and manage loyalty cards</li>
                                <li>Track customer points</li>
                                <li>Redeem points for rewards</li>
                                <li>View customer loyalty card details</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the LoyaltyCard contract, a business owner first deploys the contract. They can then create new loyalty cards for their customers. When a customer makes a purchase, the business owner can call the `addPoints` function to award points to the customer. Customers can then redeem their points for rewards by calling the `redeemPoints` function.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses a mapping to store the loyalty card details for each customer. The `addPoints` and `redeemPoints` functions update the customer's points balance accordingly.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use a secure random number generator to generate unique loyalty card IDs.</li>
                                <li>Implement access control to prevent unauthorized access to customer data.</li>
                                <li>Consider using a decentralized storage solution to store loyalty card data.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createCard",
        signature: "createCard(address)",
        params: [{ name: "customer", type: "address" }],
      },
      {
        function: "addPoints",
        signature: "addPoints(address, uint256)",
        params: [
          { name: "customer", type: "address" },
          { name: "points", type: "uint256" },
        ],
      },
      {
        function: "redeemPoints",
        signature: "redeemPoints(address, uint256)",
        params: [
          { name: "customer", type: "address" },
          { name: "points", type: "uint256" },
        ],
      },
    ],
    read: [
      {
        function: "getCardDetails",
        signature: "getCardDetails(address)",
        params: [{ name: "customer", type: "address" }],
      },
    ],
  },
  events: [
    {
      function: "CardCreated",
      signature: "CardCreated(address,uint256)",
      params: [
        { name: "customer", type: "address" },
        { name: "cardId", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a new loyalty card is created.", style: {} }],
    },
    {
      function: "PointsAdded",
      signature: "PointsAdded(address,uint256)",
      params: [
        { name: "customer", type: "address" },
        { name: "points", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when points are added to a customer's loyalty card.", style: {} }],
    },
    {
      function: "PointsRedeemed",
      signature: "PointsRedeemed(address,uint256)",
      params: [
        { name: "customer", type: "address" },
        { name: "points", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when points are redeemed from a customer's loyalty card.", style: {} }],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "Loyalty Program Smart Contract Development",
      url: "https://medium.com/coinmonks/loyalty-program-smart-contract-development-17f720a0a9e2",
    },
    {
      title: "Loyalty Program with Blockchain: Benefits and Best Practices",
      url: "https://www.101blockchains.com/loyalty-program-with-blockchain/",
    },
    {
      title: "Building a Loyalty Program on Ethereum",
      url: "https://medium.com/coinmonks/building-a-loyalty-program-on-ethereum-e97329f9f497",
    },
    {
      title: "Loyalty Programs: How To Design & Build Them on the Blockchain",
      url: "https://medium.com/hackernoon/loyalty-programs-how-to-design-build-them-on-the-blockchain-7a4e168a44a2",
    },
    {
      title: "Loyalty Program using Blockchain: A Case Study",
      url: "https://www.linkedin.com/pulse/loyalty-program-using-blockchain-a-case-study-920823886/",
    },
    {
      title: "Loyalty Points on the Blockchain: A Smart Contract Approach",
      url: "https://www.researchgate.net/publication/344428984_Loyalty_Points_on_the_Blockchain_A_Smart_Contract_Approach",
    },
    { title: "ERC721 standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenZeppelin ERC721 contract", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
  ],
}

export default definition
