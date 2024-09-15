const definition: IContractDefinition = {
  name: "ITokenERC20",
  description: `Interface of the ERC20 standard as defined in the EIP-20 specification.`,
  content: [
    { tag: "h1", content: "ITokenERC20 Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the standard functions for interacting with ERC20 compatible tokens. It outlines the fundamental methods for transferring tokens, checking balances, and retrieving token metadata.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Transfer tokens between accounts</li>
                                <li>Retrieve the balance of an account</li>
                                <li>Approve a spender to access a specific amount of tokens</li>
                                <li>Check the allowance granted to a spender</li>
                                <li>Retrieve the total supply of tokens</li>
                                <li>Retrieve the name of the token</li>
                                <li>Retrieve the symbol of the token</li>
                                <li>Retrieve the number of decimals of the token</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This interface is used by other contracts to interact with ERC20 tokens. It ensures compatibility and interoperability between different token contracts.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "transfer",
        signature: "transfer(address recipient, uint256 amount)",
        params: [
          { name: "recipient", type: "address" },
          { name: "amount", type: "uint256" },
        ],
      },
      {
        function: "approve",
        signature: "approve(address spender, uint256 amount)",
        params: [
          { name: "spender", type: "address" },
          { name: "amount", type: "uint256" },
        ],
      },
      {
        function: "transferFrom",
        signature: "transferFrom(address sender, address recipient, uint256 amount)",
        params: [
          { name: "sender", type: "address" },
          { name: "recipient", type: "address" },
          { name: "amount", type: "uint256" },
        ],
      },
      {
        function: "increaseAllowance",
        signature: "increaseAllowance(address spender, uint256 addedValue)",
        params: [
          { name: "spender", type: "address" },
          { name: "addedValue", type: "uint256" },
        ],
      },
      {
        function: "decreaseAllowance",
        signature: "decreaseAllowance(address spender, uint256 subtractedValue)",
        params: [
          { name: "spender", type: "address" },
          { name: "subtractedValue", type: "uint256" },
        ],
      },
    ],
    read: [
      {
        function: "balanceOf",
        signature: "balanceOf(address account)",
        params: [{ name: "account", type: "address" }],
      },
      {
        function: "allowance",
        signature: "allowance(address owner, address spender)",
        params: [
          { name: "owner", type: "address" },
          { name: "spender", type: "address" },
        ],
      },
      {
        function: "totalSupply",
        signature: "totalSupply()",
        params: [],
      },
      {
        function: "name",
        signature: "name()",
        params: [],
      },
      {
        function: "symbol",
        signature: "symbol()",
        params: [],
      },
      {
        function: "decimals",
        signature: "decimals()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "Transfer",
      signature: "Transfer(address indexed from, address indexed to, uint256 value)",
      params: [
        { name: "from", type: "address", indexed: true },
        { name: "to", type: "address", indexed: true },
        { name: "value", type: "uint256", indexed: false },
      ],
      content: [
        {
          tag: "p",
          content: "Emitted when value tokens are moved from one account (`from`) to another (`to`).",
          style: {},
        },
      ],
    },
    {
      function: "Approval",
      signature: "Approval(address indexed owner, address indexed spender, uint256 value)",
      params: [
        { name: "owner", type: "address", indexed: true },
        { name: "spender", type: "address", indexed: true },
        { name: "value", type: "uint256", indexed: false },
      ],
      content: [
        {
          tag: "p",
          content: "Emitted when `spender` is allowed to spend `value` tokens from `owner`'s account.",
          style: {},
        },
      ],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    {
      title: "OpenZeppelin ERC20 Contract Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/token/ERC20",
    },
    { title: "Building a Simple ERC20 Token in Solidity", url: "https://www.youtube.com/watch?v=L_Q8_kZcJ6k" },
    {
      title: "How to Create an ERC20 Token on Ethereum",
      url: "https://medium.com/@CryptoZombies/how-to-create-an-erc20-token-on-ethereum-4f02915b110d",
    },
    { title: "ERC20 Token Smart Contracts Explained", url: "https://www.youtube.com/watch?v=s09Vj8l_X1I" },
    {
      title: "Understanding and Creating ERC20 Tokens",
      url: "https://blog.openzeppelin.com/erc20-token-smart-contracts-explained/",
    },
    {
      title: "ERC20 Token Smart Contract Tutorial",
      url: "https://www.dappuniversity.com/articles/erc20-token-smart-contract-tutorial",
    },
  ],
}

export default definition
