const definition: IContractDefinition = {
  name: "PermissionOverride",
  description: `The PermissionOverride contract allows for overriding the permission settings of a given address for a specific function. This is useful for scenarios where you need to grant temporary or limited access to a function, even if the address doesn't normally have permission.`,
  content: [
    { tag: "h1", content: "PermissionOverride Contract", style: {} },
    {
      tag: "p",
      content:
        "The PermissionOverride contract enables temporary or restricted function access for specific addresses.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Override permissions for specific addresses and functions.</li>
                                <li>Manage permission overrides through dedicated functions.</li>
                                <li>Revoke overrides when no longer needed.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the PermissionOverride contract, you can deploy it and interact with it using a compatible wallet or development environment. Here's a basic usage guide:",
      style: {},
    },
    {
      tag: "ol",
      content: `
                                <li>Deploy the PermissionOverride contract.</li>
                                <li>Call the 'setOverride' function to grant an address temporary permission to execute a specific function.</li>
                                <li>The target address can now call the overridden function.</li>
                                <li>Use the 'revokeOverride' function to remove the granted permission when it's no longer needed.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses a mapping to store the granted overrides. Each override is associated with an address and a function selector. The contract also includes functions to manage these overrides.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use this contract only when absolutely necessary for temporary or limited access.</li>
                                <li>Ensure that the 'setOverride' and 'revokeOverride' functions are called with the correct arguments.</li>
                                <li>Document the purpose and duration of each override for easier maintenance.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "setOverride",
        signature: "setOverride(address,bytes4)",
        params: [
          { name: "target", type: "address" },
          { name: "functionSelector", type: "bytes4" },
        ],
      },
      {
        function: "revokeOverride",
        signature: "revokeOverride(address,bytes4)",
        params: [
          { name: "target", type: "address" },
          { name: "functionSelector", type: "bytes4" },
        ],
      },
    ],
    read: [
      {
        function: "hasOverride",
        signature: "hasOverride(address,bytes4)",
        params: [
          { name: "target", type: "address" },
          { name: "functionSelector", type: "bytes4" },
        ],
      },
    ],
  },
  events: [
    {
      function: "OverrideSet",
      signature: "OverrideSet(address,bytes4)",
      params: [
        { name: "target", type: "address" },
        { name: "functionSelector", type: "bytes4" },
      ],
      content: [],
    },
    {
      function: "OverrideRevoked",
      signature: "OverrideRevoked(address,bytes4)",
      params: [
        { name: "target", type: "address" },
        { name: "functionSelector", type: "bytes4" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "OpenZeppelin Access Control Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/access-control",
    },
    { title: "OpenZeppelin ERC165 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/introspection" },
    {
      title: "Ethereum Docs - Role-Based Access Control",
      url: "https://ethereum.org/en/developers/docs/standards/tokens/erc-165/",
    },
    {
      title: "Solidity Documentation - Access Control",
      url: "https://docs.soliditylang.org/en/v0.8.17/contracts.html#access-control",
    },
    { title: "Permission Override Pattern", url: "https://blog.openzeppelin.com/permission-override-pattern/" },
    {
      title: "Permission Override Contract Implementation",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol",
    },
  ],
}

export default definition
