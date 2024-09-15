const definition: IContractDefinition = {
  name: "ILoyaltyCard",
  description: `Interface for a loyalty card contract.`,
  content: [
    { tag: "h1", content: "ILoyaltyCard Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the basic functionality of a loyalty card contract, allowing users to earn and redeem points.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Earning points for purchases or actions</li>
                                <li>Redeeming points for discounts or rewards</li>
                                <li>Viewing point balances</li>
                                <li>Transferring points between users</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This interface can be implemented by a smart contract to create a loyalty card system. It defines the core functions that any loyalty card contract should provide.",
      style: {},
    },
    { tag: "h2", content: "Implementation", style: {} },
    {
      tag: "p",
      content:
        "When implementing this interface, consider using a secure and efficient storage mechanism for point balances. Also, ensure that the transfer function handles point balances correctly and prevents malicious actions.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "earnPoints",
        signature: "earnPoints(address,uint256)",
        params: [
          {
            name: "user",
            type: "address",
            description: "The address of the user earning points.",
          },
          {
            name: "amount",
            type: "uint256",
            description: "The number of points to be earned.",
          },
        ],
      },
      {
        function: "redeemPoints",
        signature: "redeemPoints(address,uint256)",
        params: [
          {
            name: "user",
            type: "address",
            description: "The address of the user redeeming points.",
          },
          {
            name: "amount",
            type: "uint256",
            description: "The number of points to be redeemed.",
          },
        ],
      },
      {
        function: "transferPoints",
        signature: "transferPoints(address,address,uint256)",
        params: [
          {
            name: "from",
            type: "address",
            description: "The address of the user sending points.",
          },
          {
            name: "to",
            type: "address",
            description: "The address of the user receiving points.",
          },
          {
            name: "amount",
            type: "uint256",
            description: "The number of points to be transferred.",
          },
        ],
      },
    ],
    read: [
      {
        function: "getPointBalance",
        signature: "getPointBalance(address)",
        params: [
          {
            name: "user",
            type: "address",
            description: "The address of the user whose point balance to retrieve.",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "PointsEarned",
      signature: "PointsEarned(address,uint256)",
      params: [
        {
          name: "user",
          type: "address",
          description: "The address of the user who earned points.",
        },
        {
          name: "amount",
          type: "uint256",
          description: "The number of points earned.",
        },
      ],
      content: [],
    },
    {
      function: "PointsRedeemed",
      signature: "PointsRedeemed(address,uint256)",
      params: [
        {
          name: "user",
          type: "address",
          description: "The address of the user who redeemed points.",
        },
        {
          name: "amount",
          type: "uint256",
          description: "The number of points redeemed.",
        },
      ],
      content: [],
    },
    {
      function: "PointsTransferred",
      signature: "PointsTransferred(address,address,uint256)",
      params: [
        {
          name: "from",
          type: "address",
          description: "The address of the user who sent points.",
        },
        {
          name: "to",
          type: "address",
          description: "The address of the user who received points.",
        },
        {
          name: "amount",
          type: "uint256",
          description: "The number of points transferred.",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "ILoyaltyCard Contract Documentation (Source Code)",
      url: "https://github.com/your-repository/contracts/blob/main/ILoyaltyCard.sol",
    },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum.org Documentation", url: "https://ethereum.org/en/developers/docs/" },
    { title: "OpenZeppelin Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/" },
    { title: "ERC-721 (Non-Fungible Token Standard)", url: "https://eips.ethereum.org/EIPS/eip-721" },
    {
      title: "Understanding Smart Contracts (Ethereum.org)",
      url: "https://ethereum.org/en/developers/docs/smart-contracts/",
    },
    { title: "Building DApps (Ethereum.org)", url: "https://ethereum.org/en/developers/docs/dapps/" },
    { title: "Web3.js Documentation", url: "https://web3js.readthedocs.io/en/v1.x/" },
  ],
}

export default definition
