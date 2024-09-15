const definition: IContractDefinition = {
  name: "AccountFactory",
  description: `A factory contract for creating new accounts with customizable permissions.`,
  content: [
    { tag: "h1", content: "AccountFactory Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract allows for the creation of new accounts with specific permissions, providing more flexibility and security than traditional accounts.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Create new accounts with pre-defined permissions.</li>
                                <li>Set account owners and managers.</li>
                                <li>Grant and revoke permissions for specific actions.</li>
                                <li>Maintain a registry of all created accounts.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To create a new account, call the `createAccount()` function with the desired permissions and owner. You can then grant and revoke permissions for this account using the `grantPermission()` and `revokePermission()` functions. The `getAccount()` function allows you to retrieve information about an existing account.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses a mapping to store account information, including permissions, owner, and manager. Permissions are defined as a set of actions that an account can perform. The contract also includes events to track account creation, permission changes, and ownership transfers.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use caution when granting permissions, as this can affect the security of your application.</li>
                                <li>Consider using a multi-sig wallet for managing permissions to enhance security.</li>
                                <li>Implement robust access control mechanisms to prevent unauthorized access.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createAccount",
        signature: "createAccount(address,address,bytes32[])",
        params: [
          { name: "owner", type: "address" },
          { name: "manager", type: "address" },
          { name: "permissions", type: "bytes32[]" },
        ],
      },
      {
        function: "grantPermission",
        signature: "grantPermission(address,bytes32)",
        params: [
          { name: "account", type: "address" },
          { name: "permission", type: "bytes32" },
        ],
      },
      {
        function: "revokePermission",
        signature: "revokePermission(address,bytes32)",
        params: [
          { name: "account", type: "address" },
          { name: "permission", type: "bytes32" },
        ],
      },
      {
        function: "setOwner",
        signature: "setOwner(address,address)",
        params: [
          { name: "account", type: "address" },
          { name: "newOwner", type: "address" },
        ],
      },
      {
        function: "setManager",
        signature: "setManager(address,address)",
        params: [
          { name: "account", type: "address" },
          { name: "newManager", type: "address" },
        ],
      },
    ],
    read: [
      {
        function: "getAccount",
        signature: "getAccount(address)",
        params: [{ name: "account", type: "address" }],
      },
      {
        function: "hasPermissions",
        signature: "hasPermissions(address,bytes32)",
        params: [
          { name: "account", type: "address" },
          { name: "permission", type: "bytes32" },
        ],
      },
      {
        function: "getOwner",
        signature: "getOwner(address)",
        params: [{ name: "account", type: "address" }],
      },
      {
        function: "getManager",
        signature: "getManager(address)",
        params: [{ name: "account", type: "address" }],
      },
    ],
  },
  events: [
    {
      function: "AccountCreated",
      signature: "AccountCreated(address,address,address,bytes32[])",
      params: [
        { name: "account", type: "address" },
        { name: "owner", type: "address" },
        { name: "manager", type: "address" },
        { name: "permissions", type: "bytes32[]" },
      ],
      content: [],
    },
    {
      function: "PermissionGranted",
      signature: "PermissionGranted(address,bytes32)",
      params: [
        { name: "account", type: "address" },
        { name: "permission", type: "bytes32" },
      ],
      content: [],
    },
    {
      function: "PermissionRevoked",
      signature: "PermissionRevoked(address,bytes32)",
      params: [
        { name: "account", type: "address" },
        { name: "permission", type: "bytes32" },
      ],
      content: [],
    },
    {
      function: "OwnerChanged",
      signature: "OwnerChanged(address,address)",
      params: [
        { name: "account", type: "address" },
        { name: "newOwner", type: "address" },
      ],
      content: [],
    },
    {
      function: "ManagerChanged",
      signature: "ManagerChanged(address,address)",
      params: [
        { name: "account", type: "address" },
        { name: "newManager", type: "address" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "AccountFactory - OpenZeppelin Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/account-factory",
    },
    {
      title: "AccountFactory Contract Source Code",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccountFactory.sol",
    },
    {
      title: "Using AccountFactory to Deploy Account Contracts",
      url: "https://forum.openzeppelin.com/t/using-account-factory-to-deploy-account-contracts/11263",
    },
    {
      title: "Account Abstraction with AccountFactory",
      url: "https://ethereum.org/en/developers/docs/account-abstraction/",
    },
    {
      title: "Understanding Account Abstraction",
      url: "https://medium.com/ethereum-foundation/understanding-account-abstraction-a-primer-a8e9f411c709",
    },
  ],
}

export default definition
