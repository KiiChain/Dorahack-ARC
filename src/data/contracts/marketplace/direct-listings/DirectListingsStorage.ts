const definition: IContractDefinition = {
  name: "DirectListingsStorage",
  description: `This contract is used to store listings for the Direct Listings platform. It is designed to be used in conjunction with the Direct Listings Marketplace contract, which provides the functionality for users to interact with the listings.`,
  content: [
    { tag: "h1", content: "DirectListingsStorage Contract", style: {} },
    {
      tag: "p",
      content:
        "The DirectListingsStorage contract is a key component of the Direct Listings platform. It is responsible for storing all the listings that are available on the platform.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Stores listings data, including title, description, price, and images</li>
                                <li>Allows users to create new listings</li>
                                <li>Allows users to update and delete their listings</li>
                                <li>Provides a view function to retrieve listings data</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "The DirectListingsStorage contract is used by the Direct Listings Marketplace contract to retrieve and store listings data. Users can interact with the listings through the Marketplace contract.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The DirectListingsStorage contract is implemented using a mapping to store the listings data. The mapping is keyed by the listing ID, which is generated when a new listing is created.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use a secure random number generator to generate the listing ID.</li>
                                <li>Implement access control mechanisms to restrict unauthorized access to the listings data.</li>
                                <li>Consider using a decentralized storage solution for storing the images associated with the listings.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createListing",
        signature:
          "function createListing(string memory _title, string memory _description, uint256 _price, string memory _image) public",
        params: [
          { name: "_title", type: "string" },
          { name: "_description", type: "string" },
          { name: "_price", type: "uint256" },
          { name: "_image", type: "string" },
        ],
      },
      {
        function: "updateListing",
        signature:
          "function updateListing(uint256 _listingId, string memory _title, string memory _description, uint256 _price, string memory _image) public",
        params: [
          { name: "_listingId", type: "uint256" },
          { name: "_title", type: "string" },
          { name: "_description", type: "string" },
          { name: "_price", type: "uint256" },
          { name: "_image", type: "string" },
        ],
      },
      {
        function: "deleteListing",
        signature: "function deleteListing(uint256 _listingId) public",
        params: [{ name: "_listingId", type: "uint256" }],
      },
    ],
    read: [
      {
        function: "getListing",
        signature: "function getListing(uint256 _listingId) public view returns (Listing memory)",
        params: [{ name: "_listingId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "ListingCreated",
      signature:
        "event ListingCreated(uint256 listingId, string title, string description, uint256 price, string image)",
      params: [
        { name: "listingId", type: "uint256" },
        { name: "title", type: "string" },
        { name: "description", type: "string" },
        { name: "price", type: "uint256" },
        { name: "image", type: "string" },
      ],
      content: [],
    },
    {
      function: "ListingUpdated",
      signature:
        "event ListingUpdated(uint256 listingId, string title, string description, uint256 price, string image)",
      params: [
        { name: "listingId", type: "uint256" },
        { name: "title", type: "string" },
        { name: "description", type: "string" },
        { name: "price", type: "uint256" },
        { name: "image", type: "string" },
      ],
      content: [],
    },
    {
      function: "ListingDeleted",
      signature: "event ListingDeleted(uint256 listingId)",
      params: [{ name: "listingId", type: "uint256" }],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "DirectListingsStorage Contract on Etherscan", url: "https://etherscan.io/address/<CONTRACT_ADDRESS>" },
    {
      title: "DirectListingsStorage Contract Source Code on Github",
      url: "https://github.com/<REPOSITORY>/blob/master/contracts/DirectListingsStorage.sol",
    },
    {
      title: "DirectListings.com Documentation",
      url: "https://docs.directlistings.com/contracts/directlistingsstorage",
    },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum Developer Documentation", url: "https://ethereum.org/en/developers/" },
    { title: "OpenZeppelin Documentation", url: "https://docs.openzeppelin.com/" },
    { title: "Ethereum Stack Exchange", url: "https://ethereum.stackexchange.com/" },
  ],
}

export default definition
