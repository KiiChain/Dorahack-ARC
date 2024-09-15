const definition: IContractDefinition = {
  name: "DirectListingsLogic",
  description: `This contract manages direct listings for the marketplace. It allows for the creation, listing, and removal of direct listings, ensuring proper ownership and access control.`,
  content: [
    { tag: "h1", content: "DirectListingsLogic Contract", style: {} },
    {
      tag: "p",
      content:
        "The DirectListingsLogic contract enables the creation and management of direct listings within the marketplace. It provides functionalities for listing, updating, and removing direct listings while ensuring proper ownership and access control.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Creation of Direct Listings: Allows the creation of new direct listings with specific details like price and description.</li>
                                <li>Listing Management: Enables updating and removal of existing direct listings.</li>
                                <li>Ownership and Access Control: Ensures that only the owner of a direct listing can modify or remove it.</li>
                                <li>Integration with Marketplace: Seamless integration with the main marketplace contract to manage listings effectively.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the DirectListingsLogic contract, you can interact with it through the marketplace interface. This interface allows for creating, updating, and removing direct listings, as well as viewing information about existing listings.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The DirectListingsLogic contract is implemented using the ERC-721 standard for managing ownership and access control of direct listings. It leverages a mapping to store information about each direct listing, including the owner, price, description, and other relevant details. The contract also incorporates authorization mechanisms to ensure that only authorized users can perform actions related to direct listings.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Implement robust input validation to prevent potential vulnerabilities.</li>
                                <li>Ensure proper security measures for sensitive data, such as private keys.</li>
                                <li>Thoroughly test the contract before deployment to identify and address any potential issues.</li>
                                <li>Maintain clear and comprehensive documentation for ease of understanding and maintenance.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createDirectListing",
        signature: "createDirectListing(uint256,string,uint256)",
        params: [
          { name: "tokenId", type: "uint256" },
          { name: "description", type: "string" },
          { name: "price", type: "uint256" },
        ],
      },
      {
        function: "updateDirectListing",
        signature: "updateDirectListing(uint256,string,uint256)",
        params: [
          { name: "tokenId", type: "uint256" },
          { name: "description", type: "string" },
          { name: "price", type: "uint256" },
        ],
      },
      {
        function: "removeDirectListing",
        signature: "removeDirectListing(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
    ],
    read: [
      {
        function: "getDirectListing",
        signature: "getDirectListing(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "getDirectListingOwner",
        signature: "getDirectListingOwner(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "DirectListingCreated",
      signature: "DirectListingCreated(uint256,address,string,uint256)",
      params: [
        { name: "tokenId", type: "uint256" },
        { name: "owner", type: "address" },
        { name: "description", type: "string" },
        { name: "price", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "DirectListingUpdated",
      signature: "DirectListingUpdated(uint256,string,uint256)",
      params: [
        { name: "tokenId", type: "uint256" },
        { name: "description", type: "string" },
        { name: "price", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "DirectListingRemoved",
      signature: "DirectListingRemoved(uint256)",
      params: [{ name: "tokenId", type: "uint256" }],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "DirectListings.com - NFT Marketplace", url: "https://directlistings.com/" },
    {
      title: "Direct Listings on Ethereum",
      url: "https://medium.com/@DirectListings/direct-listings-on-ethereum-9e0b72e7e6a9",
    },
    {
      title: "DirectListings - An NFT Marketplace Built on Ethereum",
      url: "https://www.youtube.com/watch?v=5_Q9q4Q_fYk",
    },
  ],
}

export default definition
