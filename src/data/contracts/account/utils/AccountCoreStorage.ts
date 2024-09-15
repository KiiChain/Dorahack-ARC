const definition: IContractDefinition = {
  name: "AccountCoreStorage",
  description: `The AccountCoreStorage contract is a core component of the OpenZeppelin Account system. It serves as a central storage unit for account-related data, including account creation, management, and permissions. This contract is designed to be used in conjunction with other Account modules, offering flexibility and extensibility for various account implementation needs.`,
  content: [
    { tag: "h1", content: "AccountCoreStorage Contract", style: {} },
    {
      tag: "p",
      content:
        "The AccountCoreStorage contract provides a secure and efficient way to store and manage account-related data within the OpenZeppelin Account system.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Stores account creation timestamp for tracking account creation.</li>
                                <li>Manages account nonce to ensure the uniqueness of each transaction.</li>
                                <li>Implements a mechanism for setting and retrieving account permissions, allowing for fine-grained control over account operations.</li>
                                <li>Provides functionality to update account data, including account owner and associated metadata.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "The AccountCoreStorage contract is typically used in conjunction with other Account modules, such as AccountFactory and AccountModule, to create and manage accounts. Developers can interact with this contract to retrieve account information, set permissions, and perform other operations related to account management.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The AccountCoreStorage contract utilizes a combination of storage slots and event emissions to ensure data integrity and transparency. It also adheres to best practices for contract security and efficiency, including using safe math operations and appropriate access controls.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                    <li>Use the AccountCoreStorage contract in conjunction with other Account modules for a comprehensive account management solution.</li>
                                    <li>Implement appropriate access controls to protect sensitive account data.</li>
                                    <li>Regularly review and update account permissions as needed.</li>
                                `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "initialize",
        signature: "initialize(address)",
        params: [
          {
            name: "owner_",
            type: "address",
          },
        ],
      },
      {
        function: "setOwner",
        signature: "setOwner(address)",
        params: [
          {
            name: "newOwner",
            type: "address",
          },
        ],
      },
      {
        function: "setMetadata",
        signature: "setMetadata(bytes)",
        params: [
          {
            name: "metadata_",
            type: "bytes",
          },
        ],
      },
      {
        function: "addPermission",
        signature: "addPermission(address,uint256)",
        params: [
          {
            name: "grantee",
            type: "address",
          },
          {
            name: "permission",
            type: "uint256",
          },
        ],
      },
      {
        function: "removePermission",
        signature: "removePermission(address,uint256)",
        params: [
          {
            name: "grantee",
            type: "address",
          },
          {
            name: "permission",
            type: "uint256",
          },
        ],
      },
      {
        function: "increaseNonce",
        signature: "increaseNonce()",
        params: [],
      },
    ],
    read: [
      {
        function: "owner",
        signature: "owner()",
        params: [],
      },
      {
        function: "creationTimestamp",
        signature: "creationTimestamp()",
        params: [],
      },
      {
        function: "nonce",
        signature: "nonce()",
        params: [],
      },
      {
        function: "metadata",
        signature: "metadata()",
        params: [],
      },
      {
        function: "getPermission",
        signature: "getPermission(address,uint256)",
        params: [
          {
            name: "grantee",
            type: "address",
          },
          {
            name: "permission",
            type: "uint256",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "OwnerChanged",
      signature: "OwnerChanged(address,address)",
      params: [
        {
          name: "previousOwner",
          type: "address",
        },
        {
          name: "newOwner",
          type: "address",
        },
      ],
      content: [],
    },
    {
      function: "MetadataChanged",
      signature: "MetadataChanged(bytes)",
      params: [
        {
          name: "metadata",
          type: "bytes",
        },
      ],
      content: [],
    },
    {
      function: "PermissionGranted",
      signature: "PermissionGranted(address,uint256)",
      params: [
        {
          name: "grantee",
          type: "address",
        },
        {
          name: "permission",
          type: "uint256",
        },
      ],
      content: [],
    },
    {
      function: "PermissionRevoked",
      signature: "PermissionRevoked(address,uint256)",
      params: [
        {
          name: "grantee",
          type: "address",
        },
        {
          name: "permission",
          type: "uint256",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "AccountCoreStorage Contract Documentation",
      url: "https://github.com/account-core/account-core-contracts/blob/main/contracts/AccountCoreStorage.sol",
    },
    {
      title: "AccountCoreStorage Contract Source Code",
      url: "https://github.com/account-core/account-core-contracts/blob/main/contracts/AccountCoreStorage.sol",
    },
    { title: "AccountCore GitHub Repository", url: "https://github.com/account-core/account-core-contracts" },
    { title: "AccountCore Documentation", url: "https://account-core.gitbook.io/account-core-documentation/" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum Documentation", url: "https://ethereum.org/en/developers/docs/" },
  ],
}

export default definition
