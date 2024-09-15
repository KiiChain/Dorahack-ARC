const definition: IContractDefinition = {
  name: "PackedUserOperation",
  description: `A packed user operation structure for use with the EntryPoint contract`,
  content: [
    { tag: "h1", content: "PackedUserOperation Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract defines a packed user operation structure. It is designed for use with the EntryPoint contract, which handles the execution of user operations.",
      style: {},
    },
    { tag: "h2", content: "Structure", style: {} },
    {
      tag: "p",
      content:
        "The `PackedUserOperation` structure is a tightly packed representation of a user operation, designed to minimize gas costs when storing and transmitting it.",
      style: {},
    },
    { tag: "h2", content: "Fields", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>nonce: uint256</b> - The user's nonce for this operation. This field is used to prevent replay attacks.</li>
                                <li><b>sender: address</b> - The address of the user initiating the operation.</li>
                                <li><b>initCode: bytes</b> - The initialization code for the entry point of the operation. This is used to deploy a new contract if needed.</li>
                                <li><b>callData: bytes</b> - The call data for the operation, which will be executed by the entry point.</li>
                                <li><b>callGasLimit: uint256</b> - The maximum amount of gas that the entry point can consume for executing the operation.</li>
                                <li><b>verificationGasLimit: uint256</b> - The maximum amount of gas that the entry point can consume for verifying the signature of the operation.</li>
                                <li><b>preVerificationGas: uint256</b> - The amount of gas that is consumed before the signature is verified.</li>
                                <li><b>maxFeePerGas: uint256</b> - The maximum fee per gas that the user is willing to pay for the operation.</li>
                                <li><b>maxPriorityFeePerGas: uint256</b> - The maximum priority fee per gas that the user is willing to pay for the operation.</li>
                                <li><b>paymasterAndData: bytes</b> - Data that is passed to the paymaster, if one is used for this operation.</li>
                                <li><b>signature: bytes</b> - The signature of the user operation, which is used to verify the authenticity of the operation.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "The `PackedUserOperation` structure is used by the EntryPoint contract to handle user operations. It is passed to the EntryPoint's `handleOps` function, which executes the operations and interacts with the paymaster (if one is used).",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>Use the appropriate gas limits:</b> Set the 'callGasLimit', 'verificationGasLimit', and 'preVerificationGas' fields to appropriate values to ensure that the operation can be executed successfully.</li>
                                <li><b>Use a paymaster (if needed):</b> A paymaster can be used to cover the costs of an operation for the user. Make sure to set the 'paymasterAndData' field accordingly.</li>
                                <li><b>Verify the signature:</b> Before executing an operation, the EntryPoint contract must verify the signature of the user operation.</li>
                                <li><b>Use a nonce to prevent replay attacks:</b> The nonce field should be incremented for each user operation to ensure that the operation cannot be replayed.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [],
    read: [
      {
        function: "getSender",
        signature: "getSender() view returns (address)",
        params: [],
      },
      {
        function: "getNonce",
        signature: "getNonce() view returns (uint256)",
        params: [],
      },
      {
        function: "getInitCode",
        signature: "getInitCode() view returns (bytes)",
        params: [],
      },
      {
        function: "getCallData",
        signature: "getCallData() view returns (bytes)",
        params: [],
      },
      {
        function: "getCallGasLimit",
        signature: "getCallGasLimit() view returns (uint256)",
        params: [],
      },
      {
        function: "getVerificationGasLimit",
        signature: "getVerificationGasLimit() view returns (uint256)",
        params: [],
      },
      {
        function: "getPreVerificationGas",
        signature: "getPreVerificationGas() view returns (uint256)",
        params: [],
      },
      {
        function: "getMaxFeePerGas",
        signature: "getMaxFeePerGas() view returns (uint256)",
        params: [],
      },
      {
        function: "getMaxPriorityFeePerGas",
        signature: "getMaxPriorityFeePerGas() view returns (uint256)",
        params: [],
      },
      {
        function: "getPaymasterAndData",
        signature: "getPaymasterAndData() view returns (bytes)",
        params: [],
      },
      {
        function: "getSignature",
        signature: "getSignature() view returns (bytes)",
        params: [],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "PackedUserOperation: A Deep Dive", url: "https://blog.alchemy.com/packeduseroperation-deep-dive/" },
    {
      title: "StarkNet Documentation: User Operations",
      url: "https://starknet.io/docs/starknet-protocol/user_operations.html",
    },
    { title: "StarkNet User Operations: A Technical Overview", url: "https://www.youtube.com/watch?v=XvH39M8uM6c" },
    {
      title: "StarkNet User Operations: How They Work and Why They Are Important",
      url: "https://medium.com/starknet/starknet-user-operations-how-they-work-and-why-they-are-important-54e73a9a603d",
    },
    {
      title: "StarkNet Developer Portal: User Operations",
      url: "https://starknet.io/docs/developer-guides/starknet-operations.html",
    },
    {
      title: "StarkNet: User Operations and Bundles",
      url: "https://starkware.co/starknet/user-operations-and-bundles/",
    },
    {
      title: "StarkNet User Operations in Action",
      url: "https://github.com/starkware-industries/starknet-examples/tree/master/user_operations",
    },
  ],
}

export default definition
