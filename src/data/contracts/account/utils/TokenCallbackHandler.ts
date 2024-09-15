const definition: IContractDefinition = {
  name: "TokenCallbackHandler",
  description: `A contract that handles callbacks from other contracts.`,
  content: [
    { tag: "h1", content: "TokenCallbackHandler Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract provides a mechanism for other contracts to interact with it through callbacks. This can be useful for implementing functionality like token transfers, voting, or other actions that need to be performed by a trusted third-party.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Handles callbacks from other contracts</li>
                                <li>Provides a safe and secure way to interact with other contracts</li>
                                <li>Can be used to implement various functionalities like token transfers, voting, and more</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the TokenCallbackHandler, other contracts can call the `handleCallback` function with the necessary data. The `handleCallback` function will then execute the appropriate actions based on the provided data. For example, if the data represents a token transfer, the contract can execute the transfer.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses a simple mapping to store the callback functions that are registered with it. When a callback is received, the contract looks up the corresponding function and executes it.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure that the callback functions are only accessible to trusted contracts.</li>
                                <li>Consider using access control mechanisms to limit who can register callback functions.</li>
                                <li>Thoroughly test all callback functions to ensure they are secure and function as expected.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "handleCallback",
        signature: "handleCallback(bytes)",
        params: [
          {
            name: "data",
            type: "bytes",
            description: "The data to be processed by the callback function.",
          },
        ],
      },
      {
        function: "registerCallback",
        signature: "registerCallback(address,bytes4)",
        params: [
          {
            name: "caller",
            type: "address",
            description: "The address of the contract that will call the callback function.",
          },
          {
            name: "selector",
            type: "bytes4",
            description: "The selector of the callback function.",
          },
        ],
      },
    ],
    read: [],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "EIP-712:  Draft: Standard for Signature Verification", url: "https://eips.ethereum.org/EIPS/eip-712" },
    { title: "OpenZeppelin EIP-712 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/eip-712" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum.org: Token Standards", url: "https://ethereum.org/en/developers/docs/standards/tokens/" },
    { title: "Web3.js Documentation", url: "https://web3js.readthedocs.io/en/v1.x/" },
    { title: "Ethers.js Documentation", url: "https://docs.ethers.io/v5/" },
  ],
}

export default definition
