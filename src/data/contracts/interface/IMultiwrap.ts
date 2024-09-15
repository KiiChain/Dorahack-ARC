const definition: IContractDefinition = {
  name: "IMultiwrap",
  description: `Interface for the Multiwrap contract`,
  content: [
    { tag: "h1", content: "IMultiwrap Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions and events for the Multiwrap contract, which is used to wrap and unwrap multiple ERC20 tokens into a single ERC20 token.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Allows wrapping multiple ERC20 tokens into a single ERC20 token.</li>
                                <li>Allows unwrapping the wrapped token back into the original ERC20 tokens.</li>
                                <li>Provides functions to query the underlying ERC20 tokens and their balances within the wrapped token.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the Multiwrap contract, you can interact with its functions through a compatible smart contract or web3 library. The contract provides functions for wrapping, unwrapping, and querying the underlying assets.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The Multiwrap contract utilizes a combination of ERC20 token standards and internal bookkeeping to manage the wrapping and unwrapping of tokens. It uses a mapping to track the balances of underlying tokens for each wrapped token holder.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "wrap",
        signature: "wrap(address[],uint256[])",
        params: [
          {
            name: "_tokens",
            type: "address[]",
          },
          {
            name: "_amounts",
            type: "uint256[]",
          },
        ],
      },
      {
        function: "unwrap",
        signature: "unwrap(uint256)",
        params: [
          {
            name: "_amount",
            type: "uint256",
          },
        ],
      },
    ],
    read: [
      {
        function: "getUnderlyingTokens",
        signature: "getUnderlyingTokens()",
        params: [],
      },
      {
        function: "getUnderlyingBalances",
        signature: "getUnderlyingBalances(address)",
        params: [
          {
            name: "_account",
            type: "address",
          },
        ],
      },
      {
        function: "getWrappedToken",
        signature: "getWrappedToken()",
        params: [],
      },
      {
        function: "isWrappedToken",
        signature: "isWrappedToken(address)",
        params: [
          {
            name: "_token",
            type: "address",
          },
        ],
      },
      {
        function: "isWrapped",
        signature: "isWrapped()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "Wrapped",
      signature: "Wrapped(address,uint256)",
      params: [
        {
          name: "account",
          type: "address",
        },
        {
          name: "amount",
          type: "uint256",
        },
      ],
      content: [],
    },
    {
      function: "Unwrapped",
      signature: "Unwrapped(address,uint256)",
      params: [
        {
          name: "account",
          type: "address",
        },
        {
          name: "amount",
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
      title: "IMultiwrap Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/utils/multicall/imultiwrap.html",
    },
    {
      title: "Multicall Contract",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/utils/multicall/multicall.html",
    },
    {
      title: "OpenZeppelin Documentation: Multicall",
      url: "https://docs.openzeppelin.com/contracts/4.x/utils/multicall",
    },
    {
      title: "Ethereum Improvement Proposal - 1167 (EIP-1167):  Standard for deploying contracts with create2",
      url: "https://eips.ethereum.org/EIPS/eip-1167",
    },
    {
      title: "EIP-1167 and CREATE2 for Deterministic Deployments",
      url: "https://medium.com/coinmonks/eip-1167-and-create2-for-deterministic-deployments-1d37f0460f10",
    },
  ],
}

export default definition
