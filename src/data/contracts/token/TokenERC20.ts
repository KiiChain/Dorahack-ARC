const definition: IContractDefinition = {
  name: "TokenERC20",
  description: `A standard ERC20 token contract for representing and managing fungible tokens on the Ethereum blockchain.`,
  content: [
    { tag: "h1", content: "TokenERC20 Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract implements the ERC20 standard, defining functions for transferring, approving, and querying token balances.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Transfer tokens between accounts.</li>
                                <li>Approve other contracts to spend tokens on behalf of an account.</li>
                                <li>Retrieve token balances for any account.</li>
                                <li>Query the total supply of tokens.</li>
                                <li>Emit events for transfer and approval operations.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "Deploy this contract to create a new ERC20 token. You can then interact with it using functions like `transfer`, `approve`, and `balanceOf` to manage your tokens.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses standard Solidity syntax and adheres to the ERC20 interface. It implements the core functionality of token transfers, approvals, and balance queries.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Thoroughly audit the contract code before deployment.</li>
                                <li>Implement appropriate access controls and security measures.</li>
                                <li>Consider using a trusted third-party service for contract deployment and management.</li>
                            `,
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
          content: "Emitted when an approval is made to spend tokens on behalf of another account.",
          style: {},
        },
      ],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "OpenZeppelin ERC20 Implementation", url: "https://docs.openzeppelin.com/contracts/4.x/api/token/ERC20" },
    { title: "Solidity by Example - ERC20 Token", url: "https://solidity-by-example.org/erc20/" },
    { title: "CryptoZombies - Token Contract", url: "https://cryptozombies.io/en/lessons/token-contract/" },
    { title: "Building a Token with Solidity", url: "https://www.youtube.com/watch?v=l8H0pN0X3x0" },
    {
      title: "Understanding ERC20 Tokens",
      url: "https://medium.com/coinmonks/understanding-erc20-tokens-in-ethereum-dapps-b6655a4f064c",
    },
    {
      title: "Create Your Own ERC20 Token with Truffle and Ganache",
      url: "https://medium.com/coinmonks/create-your-own-erc20-token-with-truffle-and-ganache-a470a4e62000",
    },
    { title: "ERC20 Token Smart Contract Tutorial", url: "https://www.youtube.com/watch?v=a5h-9t4iG6s" },
  ],
}

export default definition
