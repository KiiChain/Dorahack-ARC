const definition: IContractDefinition = {
  name: "IERC6551Account",
  description: `Interface of the ERC-6551 Account standard, allowing contracts to interact with account-based smart contracts.`,
  content: [
    { tag: "h1", content: "IERC6551Account Contract", style: {} },
    {
      tag: "p",
      content:
        "The IERC6551Account interface defines the standard for interacting with account-based smart contracts. It provides a set of functions that allow any contract to interact with an ERC-6551 Account contract, enabling features like authorization, delegation, and control of assets associated with the account.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Standardized interface for account-based smart contracts.</li>
                                <li>Allows contracts to interact with accounts for authorization, delegation, and asset control.</li>
                                <li>Enhances security by providing a clear and consistent way to manage account interactions.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To interact with an ERC-6551 Account, any contract can use the functions defined in this interface. For example, a contract could use the `getController` function to retrieve the current controller of the account, or use the `setController` function to transfer control to a different address.",
      style: {},
    },
    { tag: "h2", content: "Implementation", style: {} },
    {
      tag: "p",
      content:
        "Implementing the IERC6551Account interface in a contract makes it compliant with the ERC-6551 standard, allowing it to be used as an account-based smart contract. It enables interaction with other contracts through the defined functions.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Implement the interface carefully to ensure compatibility with the ERC-6551 standard.</li>
                                <li>Consider security implications when implementing authorization and delegation mechanisms.</li>
                                <li>Document the purpose and functionalities of the implemented functions clearly.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "setController",
        signature: "setController(address)",
        params: [
          {
            name: "newController",
            type: "address",
            description: "The new address to become the controller of the account.",
          },
        ],
      },
      {
        function: "setProxy",
        signature: "setProxy(address)",
        params: [
          {
            name: "newProxy",
            type: "address",
            description: "The new address to become the proxy of the account.",
          },
        ],
      },
      {
        function: "setFallbackHandler",
        signature: "setFallbackHandler(address)",
        params: [
          {
            name: "newFallbackHandler",
            type: "address",
            description: "The new address to become the fallback handler of the account.",
          },
        ],
      },
      {
        function: "setDelegate",
        signature: "setDelegate(address,bool)",
        params: [
          {
            name: "delegate",
            type: "address",
            description: "The address to set as a delegate.",
          },
          {
            name: "enabled",
            type: "bool",
            description: "Whether to enable or disable the delegate.",
          },
        ],
      },
    ],
    read: [
      {
        function: "getController",
        signature: "getController()",
        params: [],
      },
      {
        function: "getProxy",
        signature: "getProxy()",
        params: [],
      },
      {
        function: "getFallbackHandler",
        signature: "getFallbackHandler()",
        params: [],
      },
      {
        function: "isDelegateEnabled",
        signature: "isDelegateEnabled(address)",
        params: [
          {
            name: "delegate",
            type: "address",
            description: "The address of the delegate.",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "ControllerSet",
      signature: "ControllerSet(address)",
      params: [
        {
          name: "newController",
          type: "address",
          description: "The new controller address.",
        },
      ],
      content: [],
    },
    {
      function: "ProxySet",
      signature: "ProxySet(address)",
      params: [
        {
          name: "newProxy",
          type: "address",
          description: "The new proxy address.",
        },
      ],
      content: [],
    },
    {
      function: "FallbackHandlerSet",
      signature: "FallbackHandlerSet(address)",
      params: [
        {
          name: "newFallbackHandler",
          type: "address",
          description: "The new fallback handler address.",
        },
      ],
      content: [],
    },
    {
      function: "DelegateSet",
      signature: "DelegateSet(address,bool)",
      params: [
        {
          name: "delegate",
          type: "address",
          description: "The delegate address.",
        },
        {
          name: "enabled",
          type: "bool",
          description: "Whether the delegate is enabled.",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC-6551: Account Abstraction for ERC-721", url: "https://eips.ethereum.org/EIPS/eip-6551" },
    { title: "Account Abstraction on Ethereum", url: "https://ethereum.org/en/developers/docs/accounts/" },
    { title: "EIP-2981: NFT Royalty Standard", url: "https://eips.ethereum.org/EIPS/eip-2981" },
    { title: "ERC-721: Non-Fungible Token Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    {
      title: "Account Abstraction: A Primer",
      url: "https://medium.com/ethereum-cat/account-abstraction-a-primer-63c6b446f469",
    },
    {
      title: "ERC-6551: Account Abstraction for ERC-721 - A Deeper Dive",
      url: "https://blog.openzeppelin.com/erc-6551-account-abstraction-for-erc-721/",
    },
    {
      title: "Building with ERC-6551: A Step-by-Step Guide",
      url: "https://blog.alchemy.com/building-with-erc-6551-a-step-by-step-guide/",
    },
    { title: "ERC-6551: Account Abstraction for NFTs", url: "https://www.youtube.com/watch?v=v4v5L3x1t_I" },
  ],
}

export default definition
