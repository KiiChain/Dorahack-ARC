const definition: IContractDefinition = {
  name: "PackVRFDirect",
  description: `Auto-generated description for the PackVRFDirect contract`,
  content: [
    { tag: "h1", content: "PackVRFDirect Contract", style: {} },
    {
      tag: "p",
      content: "This contract allows direct access to Chainlink VRF without the need for a subscription.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Direct VRF request functionality, eliminating the need for subscriptions.</li>
                                <li>Supports multiple request types, including single and batch requests.</li>
                                <li>Provides efficient gas consumption by utilizing a single VRF request for multiple packs.</li>
                                <li>Integration with Chainlink VRF ensures secure and verifiable random numbers generation.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "To use the PackVRFDirect contract, follow these steps:",
      style: {},
    },
    {
      tag: "ol",
      content: `
                                <li>Deploy the contract and configure it with the desired Chainlink VRF coordinator and key hash.</li>
                                <li>Call the 'requestRandomWords' function with the desired number of words and other parameters.</li>
                                <li>Wait for the VRF response to be fulfilled and retrieve the generated random numbers using the 'getLatestRandomWords' function.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The PackVRFDirect contract utilizes the Chainlink VRF service to generate random numbers. It handles the request process, including fee payments and response management. The contract ensures efficient gas usage by grouping multiple pack requests into a single VRF request.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "p",
      content:
        "Ensure that the contract is deployed with sufficient funds to cover VRF request fees. Use the appropriate number of words and randomness parameters for your specific application. Consider the gas cost of requesting random numbers and optimize your request strategy accordingly.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "requestRandomWords",
        signature: "requestRandomWords(uint256,uint256,uint256,uint256,bytes32)",
        params: [
          { name: "numWords", type: "uint256" },
          { name: "subId", type: "uint256" },
          { name: "callbackGasLimit", type: "uint256" },
          { name: "requestConfirmations", type: "uint256" },
          { name: "keyHash", type: "bytes32" },
        ],
      },
    ],
    read: [
      {
        function: "getLatestRandomWords",
        signature: "getLatestRandomWords()",
        params: [],
      },
      {
        function: "getLastRequestId",
        signature: "getLastRequestId()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "RandomWordsFulfilled",
      signature: "RandomWordsFulfilled(uint256,uint256[])",
      params: [
        { name: "requestId", type: "uint256" },
        { name: "randomWords", type: "uint256[]" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "PackVRFDirect Contract on Etherscan", url: "https://etherscan.io/address/<CONTRACT_ADDRESS>" },
    { title: "Chainlink VRF Documentation", url: "https://docs.chain.link/docs/vrf/v2/introduction" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "OpenZeppelin Contracts Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/" },
  ],
}

export default definition
