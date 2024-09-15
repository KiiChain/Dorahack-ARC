const definition: IContractDefinition = {
  name: "OffersStorage",
  description: `A contract for storing offers.`,
  content: [
    { tag: "h1", content: "OffersStorage Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract provides functionality to store and manage offers. It allows users to create, update, and retrieve offers.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Create new offers</li>
                                <li>Update existing offers</li>
                                <li>Retrieve offers by ID</li>
                                <li>Retrieve all offers</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To interact with the OffersStorage contract, you can use its public functions. You can create new offers using the `createOffer` function, update existing offers using the `updateOffer` function, and retrieve offers using the `getOffer` and `getAllOffers` functions. ",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The OffersStorage contract uses a mapping to store offers. Each offer is uniquely identified by an ID. The contract also implements an event that is emitted when a new offer is created.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "p",
      content:
        "It's important to ensure that the data stored in the OffersStorage contract is secure and tamper-proof. Consider implementing appropriate access control mechanisms and using trusted data sources.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createOffer",
        signature: "createOffer(string,uint256,uint256,string,string,string,address)",
        params: [
          { name: "offerId", type: "string" },
          { name: "price", type: "uint256" },
          { name: "expirationTime", type: "uint256" },
          { name: "description", type: "string" },
          { name: "offerType", type: "string" },
          { name: "offerData", type: "string" },
          { name: "owner", type: "address" },
        ],
      },
      {
        function: "updateOffer",
        signature: "updateOffer(string,uint256,uint256,string,string,string,address)",
        params: [
          { name: "offerId", type: "string" },
          { name: "price", type: "uint256" },
          { name: "expirationTime", type: "uint256" },
          { name: "description", type: "string" },
          { name: "offerType", type: "string" },
          { name: "offerData", type: "string" },
          { name: "owner", type: "address" },
        ],
      },
    ],
    read: [
      {
        function: "getOffer",
        signature: "getOffer(string)",
        params: [{ name: "offerId", type: "string" }],
      },
      {
        function: "getAllOffers",
        signature: "getAllOffers()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "OfferCreated",
      signature: "OfferCreated(string,uint256,uint256,string,string,string,address)",
      params: [
        { name: "offerId", type: "string" },
        { name: "price", type: "uint256" },
        { name: "expirationTime", type: "uint256" },
        { name: "description", type: "string" },
        { name: "offerType", type: "string" },
        { name: "offerData", type: "string" },
        { name: "owner", type: "address" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "OffersStorage Contract on Etherscan", url: "https://etherscan.io/address/<contract_address>" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum.org Documentation", url: "https://ethereum.org/en/developers/docs/" },
    { title: "OpenZeppelin Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/" },
    { title: "Stack Overflow", url: "https://stackoverflow.com/questions/tagged/solidity" },
    { title: "Ethereum Stack Exchange", url: "https://ethereum.stackexchange.com/questions/tagged/solidity" },
  ],
}

export default definition
