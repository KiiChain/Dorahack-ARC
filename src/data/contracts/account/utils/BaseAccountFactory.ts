const definition: IContractDefinition = {
  name: "BaseAccountFactory",
  description: `A factory contract for creating BaseAccount contracts.`,
  content: [
    { tag: "h1", content: "BaseAccountFactory Contract", style: {} },
    {
      tag: "p",
      content:
        "The BaseAccountFactory contract is a factory for deploying BaseAccount contracts, which are modular, upgradeable, and customizable accounts that can be used to manage assets, delegate permissions, and more.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Deploy new BaseAccount contracts with custom configurations.</li>
                                <li>Support for setting initial owner and permissions for the BaseAccount.</li>
                                <li>Ability to retrieve the address of a deployed BaseAccount contract.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To create a new BaseAccount contract, call the `create()` function on the BaseAccountFactory contract. You can specify the initial owner and desired permissions for the new BaseAccount. Once deployed, you can interact with the BaseAccount contract directly using its address.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The BaseAccountFactory contract uses the `create2` deployment pattern to ensure consistent address generation for BaseAccount contracts. This enables predictable deployment and simplifies management of multiple accounts.",
      style: {},
    },
    { tag: "h2", content: "Security Considerations", style: {} },
    {
      tag: "p",
      content:
        "It is important to secure the private keys associated with the BaseAccountFactory contract, as they control the deployment of new BaseAccount contracts. Implement robust security measures to prevent unauthorized access and protect against potential vulnerabilities.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "create",
        signature: "create(address,address,bytes32)",
        params: [
          { name: "owner_", type: "address" },
          { name: "permissions_", type: "address" },
          { name: "salt_", type: "bytes32" },
        ],
      },
    ],
    read: [
      {
        function: "getAddress",
        signature: "getAddress(address,address,bytes32)",
        params: [
          { name: "owner_", type: "address" },
          { name: "permissions_", type: "address" },
          { name: "salt_", type: "bytes32" },
        ],
      },
    ],
  },
  events: [
    {
      function: "AccountCreated",
      signature: "AccountCreated(address,address,address,bytes32)",
      params: [
        { name: "owner_", type: "address" },
        { name: "permissions_", type: "address" },
        { name: "account_", type: "address" },
        { name: "salt_", type: "bytes32" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "OpenZeppelin AccountFactory Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/account-factory",
    },
    {
      title: "OpenZeppelin Account Contract Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/account",
    },
    {
      title: "Creating and Managing Accounts with OpenZeppelin",
      url: "https://blog.openzeppelin.com/creating-and-managing-accounts-with-openzeppelin/",
    },
    {
      title: "Using a Smart Contract as an Account",
      url: "https://ethereum.org/en/developers/docs/smart-contracts/account-abstraction/",
    },
    { title: "EIP-2981: NFT Royalty Standard", url: "https://eips.ethereum.org/EIPS/eip-2981" },
  ],
}

export default definition
