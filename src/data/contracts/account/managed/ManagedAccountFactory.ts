const definition: IContractDefinition = {
  name: "ManagedAccountFactory",
  description: `A factory contract for creating and managing managed accounts.`,
  content: [
    { tag: "h1", content: "ManagedAccountFactory Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract serves as a factory for creating and managing managed accounts. It allows for the deployment of new managed accounts and the setting of their initial configurations, including the initial owner and access controls.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Creates new managed accounts with configurable initial settings.</li>
                                <li>Allows setting initial owners and access controls for newly created accounts.</li>
                                <li>Provides functions for retrieving information about managed accounts.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the ManagedAccountFactory, you can deploy the contract and then call the `createManagedAccount` function to create a new managed account. You can then set the initial owner and access controls for the account using the provided functions.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The ManagedAccountFactory contract uses a mapping to store information about created managed accounts. Each managed account is represented by a unique address, and the mapping stores the account's owner and access controls.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "p",
      content:
        "It is recommended to carefully consider the initial settings for new managed accounts, including the owner and access controls. Ensure that only authorized individuals or entities have the ability to manage the account.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createManagedAccount",
        signature: "createManagedAccount(address)",
        params: [
          {
            name: "initialOwner",
            type: "address",
            description: "The initial owner of the managed account.",
          },
        ],
      },
      {
        function: "setOwner",
        signature: "setOwner(address,address)",
        params: [
          {
            name: "account",
            type: "address",
            description: "The address of the managed account.",
          },
          {
            name: "newOwner",
            type: "address",
            description: "The new owner of the managed account.",
          },
        ],
      },
      {
        function: "setAccessControls",
        signature: "setAccessControls(address,address[])",
        params: [
          {
            name: "account",
            type: "address",
            description: "The address of the managed account.",
          },
          {
            name: "newAccessControlList",
            type: "address[]",
            description: "The new list of addresses granted access to the managed account.",
          },
        ],
      },
    ],
    read: [
      {
        function: "getOwner",
        signature: "getOwner(address)",
        params: [
          {
            name: "account",
            type: "address",
            description: "The address of the managed account.",
          },
        ],
      },
      {
        function: "getAccessControls",
        signature: "getAccessControls(address)",
        params: [
          {
            name: "account",
            type: "address",
            description: "The address of the managed account.",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "ManagedAccountCreated",
      signature: "ManagedAccountCreated(address,address)",
      params: [
        {
          name: "account",
          type: "address",
          description: "The address of the newly created managed account.",
        },
        {
          name: "owner",
          type: "address",
          description: "The initial owner of the managed account.",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "OpenZeppelin Account Factory Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/account-factory",
    },
    { title: "OpenZeppelin Accounts", url: "https://docs.openzeppelin.com/contracts/4.x/accounts" },
    {
      title: "OpenZeppelin Accounts (GitHub)",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/access",
    },
    {
      title: "Ethereum Accounts and the Account Abstraction Concept",
      url: "https://ethereum.org/en/developers/docs/accounts/",
    },
    { title: "EIP-2938: Account Abstraction", url: "https://eips.ethereum.org/EIPS/eip-2938" },
  ],
}

export default definition
