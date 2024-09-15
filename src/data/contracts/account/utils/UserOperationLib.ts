const definition: IContractDefinition = {
  name: "UserOperationLib",
  description: `Library for user operations in account abstraction`,
  content: [
    { tag: "h1", content: "UserOperationLib Contract", style: {} },
    {
      tag: "p",
      content:
        "This library provides utilities for working with user operations in account abstraction. It defines the structure of a user operation and provides functions for verifying and executing them.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Defines the UserOperation struct, which represents a user operation.</li>
                                <li>Provides functions for verifying the validity of a user operation.</li>
                                <li>Provides functions for executing user operations.</li>
                                <li>Includes functions for calculating gas costs and fees for user operations.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use this library, you can include it in your contracts. You can then use the provided functions to create, verify, and execute user operations. For example, you can use the `isValidUserOperation` function to check if a user operation is valid before executing it.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The library is implemented using the `UserOperation` struct, which defines the structure of a user operation. The `isValidUserOperation` function checks if the user operation is valid by verifying the signature and other parameters. The `executeUserOperation` function executes the user operation by calling the specified contract function.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Always verify the validity of a user operation before executing it.</li>
                                <li>Use a secure random number generator to generate the 'nonce' for user operations.</li>
                                <li>Ensure that the 'entryPoint' address is trusted and that the code executed by the user operation is secure.</li>
                                <li>Use gas estimation functions to accurately calculate the gas costs for user operations.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "executeUserOperation",
        signature: "executeUserOperation(UserOperation calldata _userOp, bytes calldata _signature)",
        params: [
          {
            name: "_userOp",
            type: "UserOperation",
            description: "The user operation to execute",
          },
          {
            name: "_signature",
            type: "bytes",
            description: "The signature of the user operation",
          },
        ],
      },
      {
        function: "isValidUserOperation",
        signature: "isValidUserOperation(UserOperation calldata _userOp, bytes calldata _signature)",
        params: [
          {
            name: "_userOp",
            type: "UserOperation",
            description: "The user operation to validate",
          },
          {
            name: "_signature",
            type: "bytes",
            description: "The signature of the user operation",
          },
        ],
      },
    ],
    read: [
      {
        function: "getSender",
        signature: "getSender(UserOperation calldata _userOp)",
        params: [
          {
            name: "_userOp",
            type: "UserOperation",
            description: "The user operation to get the sender from",
          },
        ],
      },
      {
        function: "getNonce",
        signature: "getNonce(UserOperation calldata _userOp)",
        params: [
          {
            name: "_userOp",
            type: "UserOperation",
            description: "The user operation to get the nonce from",
          },
        ],
      },
      {
        function: "getPayload",
        signature: "getPayload(UserOperation calldata _userOp)",
        params: [
          {
            name: "_userOp",
            type: "UserOperation",
            description: "The user operation to get the payload from",
          },
        ],
      },
      {
        function: "getEntryPoint",
        signature: "getEntryPoint(UserOperation calldata _userOp)",
        params: [
          {
            name: "_userOp",
            type: "UserOperation",
            description: "The user operation to get the entry point from",
          },
        ],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "UserOperationLib Documentation", url: "https://docs.starknet.io/docs/starknet-guides/user-operations" },
    {
      title: "StarkNet User Operations Guide",
      url: "https://docs.starknet.io/docs/starknet-guides/user-operations/user-operations-overview",
    },
    {
      title: "StarkNet User Operations Tutorial",
      url: "https://docs.starknet.io/docs/starknet-guides/user-operations/tutorial",
    },
    {
      title: "StarkNet User Operations: Bundlers and Paymasters",
      url: "https://docs.starknet.io/docs/starknet-guides/user-operations/bundlers-and-paymasters",
    },
    {
      title: "StarkNet User Operations: Simulating Transactions",
      url: "https://docs.starknet.io/docs/starknet-guides/user-operations/simulating-transactions",
    },
    {
      title: "StarkNet User Operations: Example Code",
      url: "https://github.com/starkware-libs/starknet-examples/tree/main/contracts/user_operations",
    },
    { title: "StarkNet User Operations: Community Resources", url: "https://discord.com/invite/starknet" },
  ],
}

export default definition
