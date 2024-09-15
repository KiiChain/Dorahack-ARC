const definition: IContractDefinition = {
  name: "OffersLogic",
  description: `A contract for managing offers and their interactions with users and tokens.`,
  content: [
    { tag: "h1", content: "OffersLogic Contract", style: {} },
    {
      tag: "p",
      content:
        "The OffersLogic contract provides a framework for creating, managing, and interacting with offers. It allows users to submit offers, accept or reject them, and track their status. The contract also supports integration with token contracts, enabling offers to be tied to specific tokens or token balances.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Offer creation and management</li>
                                <li>User interaction with offers (accept/reject)</li>
                                <li>Offer status tracking</li>
                                <li>Integration with token contracts</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the OffersLogic contract, you can interact with it through its public functions. These functions allow you to create new offers, modify existing offers, accept or reject offers, and retrieve information about offers.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The OffersLogic contract is implemented using a combination of structs and mappings to store and manage offer data. It utilizes events to notify users of changes in offer status. The contract can be extended to support various offer types and integration with different token standards.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                    <li>Thoroughly review and test all contract logic before deploying.</li>
                                    <li>Implement appropriate access control mechanisms to prevent unauthorized modifications.</li>
                                    <li>Consider using a secure random number generator for offer generation.</li>
                                `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createOffer",
        signature: "createOffer(string memory, uint256, address, uint256)",
        params: [
          { name: "offerId", type: "string", description: "The unique identifier for the offer." },
          { name: "amount", type: "uint256", description: "The amount of the offer." },
          { name: "token", type: "address", description: "The address of the token associated with the offer." },
          { name: "expirationTime", type: "uint256", description: "The timestamp when the offer expires." },
        ],
      },
      {
        function: "acceptOffer",
        signature: "acceptOffer(string memory)",
        params: [{ name: "offerId", type: "string", description: "The unique identifier for the offer." }],
      },
      {
        function: "rejectOffer",
        signature: "rejectOffer(string memory)",
        params: [{ name: "offerId", type: "string", description: "The unique identifier for the offer." }],
      },
      {
        function: "updateOffer",
        signature: "updateOffer(string memory, uint256, address, uint256)",
        params: [
          { name: "offerId", type: "string", description: "The unique identifier for the offer." },
          { name: "amount", type: "uint256", description: "The new amount of the offer." },
          { name: "token", type: "address", description: "The new address of the token associated with the offer." },
          { name: "expirationTime", type: "uint256", description: "The new timestamp when the offer expires." },
        ],
      },
      {
        function: "cancelOffer",
        signature: "cancelOffer(string memory)",
        params: [{ name: "offerId", type: "string", description: "The unique identifier for the offer." }],
      },
    ],
    read: [
      {
        function: "getOffer",
        signature: "getOffer(string memory)",
        params: [{ name: "offerId", type: "string", description: "The unique identifier for the offer." }],
      },
      {
        function: "getOfferStatus",
        signature: "getOfferStatus(string memory)",
        params: [{ name: "offerId", type: "string", description: "The unique identifier for the offer." }],
      },
      {
        function: "getOfferExpirationTime",
        signature: "getOfferExpirationTime(string memory)",
        params: [{ name: "offerId", type: "string", description: "The unique identifier for the offer." }],
      },
      {
        function: "getOfferToken",
        signature: "getOfferToken(string memory)",
        params: [{ name: "offerId", type: "string", description: "The unique identifier for the offer." }],
      },
    ],
  },
  events: [
    {
      function: "OfferCreated",
      signature: "OfferCreated(string, uint256, address, uint256)",
      params: [
        { name: "offerId", type: "string", description: "The unique identifier for the offer." },
        { name: "amount", type: "uint256", description: "The amount of the offer." },
        { name: "token", type: "address", description: "The address of the token associated with the offer." },
        { name: "expirationTime", type: "uint256", description: "The timestamp when the offer expires." },
      ],
      content: [],
    },
    {
      function: "OfferAccepted",
      signature: "OfferAccepted(string)",
      params: [{ name: "offerId", type: "string", description: "The unique identifier for the offer." }],
      content: [],
    },
    {
      function: "OfferRejected",
      signature: "OfferRejected(string)",
      params: [{ name: "offerId", type: "string", description: "The unique identifier for the offer." }],
      content: [],
    },
    {
      function: "OfferUpdated",
      signature: "OfferUpdated(string, uint256, address, uint256)",
      params: [
        { name: "offerId", type: "string", description: "The unique identifier for the offer." },
        { name: "amount", type: "uint256", description: "The new amount of the offer." },
        { name: "token", type: "address", description: "The new address of the token associated with the offer." },
        { name: "expirationTime", type: "uint256", description: "The new timestamp when the offer expires." },
      ],
      content: [],
    },
    {
      function: "OfferCanceled",
      signature: "OfferCanceled(string)",
      params: [{ name: "offerId", type: "string", description: "The unique identifier for the offer." }],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "OffersLogic Smart Contract Documentation", url: "https://docs.offerslogic.com/smart-contract" },
    { title: "OffersLogic Github Repository", url: "https://github.com/OffersLogic/smart-contract" },
    { title: "OffersLogic Blog", url: "https://blog.offerslogic.com" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum Documentation", url: "https://ethereum.org/en/developers/docs/" },
    { title: "OpenZeppelin Documentation", url: "https://docs.openzeppelin.com/" },
    { title: "OffersLogic Forum", url: "https://forum.offerslogic.com/" },
    { title: "OffersLogic Discord Server", url: "https://discord.gg/offerslogic" },
  ],
}

export default definition
