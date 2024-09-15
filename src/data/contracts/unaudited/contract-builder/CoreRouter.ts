const definition: IContractDefinition = {
  name: "CoreRouter",
  description: `The CoreRouter contract acts as a central hub for interacting with various DeFi protocols. It allows users to seamlessly execute swaps, provide liquidity, and access other decentralized financial services in a secure and efficient manner. The contract leverages the power of aggregators to source the best prices across multiple decentralized exchanges (DEXs) and liquidity pools.`,
  content: [
    { tag: "h1", content: "CoreRouter Contract", style: {} },
    {
      tag: "p",
      content:
        "The CoreRouter contract is a versatile and secure platform that empowers users to navigate the complex world of DeFi with ease. It aggregates liquidity from various sources, ensuring optimal trade execution and enhanced efficiency.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li><strong>Multi-DEX Aggregation:</strong> The CoreRouter contract integrates with multiple DEXs, allowing users to access the broadest liquidity pool and find the best possible prices for their transactions.</li>
                                <li><strong>Advanced Routing Algorithms:</strong> The contract employs sophisticated routing algorithms to identify the most efficient path for executing trades, minimizing slippage and maximizing returns.</li>
                                <li><strong>Gas Optimization:</strong> Through intelligent gas management, the CoreRouter contract helps users minimize transaction fees, making it a cost-effective solution for DeFi transactions.</li>
                                <li><strong>Security and Transparency:</strong> Built on a secure and transparent blockchain infrastructure, the CoreRouter contract prioritizes user funds and provides full auditability for all transactions.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To interact with the CoreRouter contract, users can utilize various interfaces and tools. These interfaces can be integrated with wallets, exchanges, and other DeFi applications, providing seamless access to the contract's functionality. The CoreRouter contract can be used for a wide range of purposes, including:",
      style: {},
    },
    {
      tag: "ul",
      content: `
                                <li><strong>Swapping tokens:</strong> Users can exchange tokens between different blockchains efficiently and securely.</li>
                                <li><strong>Providing liquidity:</strong> Users can contribute liquidity to various pools, earning fees and supporting the DeFi ecosystem.</li>
                                <li><strong>Accessing other DeFi services:</strong> The CoreRouter contract can be used as a gateway to access other DeFi protocols, such as lending, borrowing, and yield farming.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The CoreRouter contract is implemented using the Solidity programming language and leverages the capabilities of the Ethereum Virtual Machine (EVM). It incorporates best practices for security and efficiency, ensuring a robust and reliable platform.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li><strong>Security Audits:</strong> Regularly conduct security audits to identify and address any potential vulnerabilities.</li>
                                <li><strong>Gas Optimization:</strong> Continuously optimize gas consumption to minimize transaction fees for users.</li>
                                <li><strong>Transparency and Open-Source:</strong> Maintain open-source code and transparent development practices to foster community trust.</li>
                                <li><strong>Community Governance:</strong> Consider incorporating a governance mechanism to empower users and allow for community-driven improvements.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "swapExactTokensForTokens",
        signature:
          "swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline)",
        params: [
          { name: "amountIn", type: "uint256" },
          { name: "amountOutMin", type: "uint256" },
          { name: "path", type: "address[]" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      {
        function: "swapTokensForExactTokens",
        signature:
          "swapTokensForExactTokens(uint256 amountOut, uint256 amountInMax, address[] path, address to, uint256 deadline)",
        params: [
          { name: "amountOut", type: "uint256" },
          { name: "amountInMax", type: "uint256" },
          { name: "path", type: "address[]" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      {
        function: "swapExactETHForTokens",
        signature: "swapExactETHForTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline)",
        params: [
          { name: "amountOutMin", type: "uint256" },
          { name: "path", type: "address[]" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      {
        function: "swapTokensForExactETH",
        signature:
          "swapTokensForExactETH(uint256 amountOut, uint256 amountInMax, address[] path, address to, uint256 deadline)",
        params: [
          { name: "amountOut", type: "uint256" },
          { name: "amountInMax", type: "uint256" },
          { name: "path", type: "address[]" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      {
        function: "swapExactTokensForETH",
        signature:
          "swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline)",
        params: [
          { name: "amountIn", type: "uint256" },
          { name: "amountOutMin", type: "uint256" },
          { name: "path", type: "address[]" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      {
        function: "swapETHForExactTokens",
        signature: "swapETHForExactTokens(uint256 amountOut, address[] path, address to, uint256 deadline)",
        params: [
          { name: "amountOut", type: "uint256" },
          { name: "path", type: "address[]" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      {
        function: "quote",
        signature: "quote(uint256 amountA, uint256 reserveA, uint256 reserveB)",
        params: [
          { name: "amountA", type: "uint256" },
          { name: "reserveA", type: "uint256" },
          { name: "reserveB", type: "uint256" },
        ],
      },
      {
        function: "getAmountOut",
        signature: "getAmountOut(uint256 amountIn, uint256 reserveIn, uint256 reserveOut)",
        params: [
          { name: "amountIn", type: "uint256" },
          { name: "reserveIn", type: "uint256" },
          { name: "reserveOut", type: "uint256" },
        ],
      },
      {
        function: "getAmountIn",
        signature: "getAmountIn(uint256 amountOut, uint256 reserveIn, uint256 reserveOut)",
        params: [
          { name: "amountOut", type: "uint256" },
          { name: "reserveIn", type: "uint256" },
          { name: "reserveOut", type: "uint256" },
        ],
      },
      {
        function: "getAmountsOut",
        signature: "getAmountsOut(uint256 amountIn, address[] path)",
        params: [
          { name: "amountIn", type: "uint256" },
          { name: "path", type: "address[]" },
        ],
      },
      {
        function: "getAmountsIn",
        signature: "getAmountsIn(uint256 amountOut, address[] path)",
        params: [
          { name: "amountOut", type: "uint256" },
          { name: "path", type: "address[]" },
        ],
      },
    ],
    read: [
      {
        function: "factory",
        signature: "factory()",
        params: [],
      },
      {
        function: "WETH",
        signature: "WETH()",
        params: [],
      },
      {
        function: "getPair",
        signature: "getPair(address tokenA, address tokenB)",
        params: [
          { name: "tokenA", type: "address" },
          { name: "tokenB", type: "address" },
        ],
      },
      {
        function: "addLiquidity",
        signature:
          "addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline)",
        params: [
          { name: "tokenA", type: "address" },
          { name: "tokenB", type: "address" },
          { name: "amountADesired", type: "uint256" },
          { name: "amountBDesired", type: "uint256" },
          { name: "amountAMin", type: "uint256" },
          { name: "amountBMin", type: "uint256" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      {
        function: "addLiquidityETH",
        signature:
          "addLiquidityETH(address token, uint256 amountTokenDesired, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline)",
        params: [
          { name: "token", type: "address" },
          { name: "amountTokenDesired", type: "uint256" },
          { name: "amountTokenMin", type: "uint256" },
          { name: "amountETHMin", type: "uint256" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      {
        function: "removeLiquidity",
        signature:
          "removeLiquidity(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline)",
        params: [
          { name: "tokenA", type: "address" },
          { name: "tokenB", type: "address" },
          { name: "liquidity", type: "uint256" },
          { name: "amountAMin", type: "uint256" },
          { name: "amountBMin", type: "uint256" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      {
        function: "removeLiquidityETH",
        signature:
          "removeLiquidityETH(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline)",
        params: [
          { name: "token", type: "address" },
          { name: "liquidity", type: "uint256" },
          { name: "amountTokenMin", type: "uint256" },
          { name: "amountETHMin", type: "uint256" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      {
        function: "removeLiquidityWithPermit",
        signature:
          "removeLiquidityWithPermit(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s)",
        params: [
          { name: "tokenA", type: "address" },
          { name: "tokenB", type: "address" },
          { name: "liquidity", type: "uint256" },
          { name: "amountAMin", type: "uint256" },
          { name: "amountBMin", type: "uint256" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
          { name: "approveMax", type: "bool" },
          { name: "v", type: "uint8" },
          { name: "r", type: "bytes32" },
          { name: "s", type: "bytes32" },
        ],
      },
      {
        function: "removeLiquidityETHWithPermit",
        signature:
          "removeLiquidityETHWithPermit(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s)",
        params: [
          { name: "token", type: "address" },
          { name: "liquidity", type: "uint256" },
          { name: "amountTokenMin", type: "uint256" },
          { name: "amountETHMin", type: "uint256" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
          { name: "approveMax", type: "bool" },
          { name: "v", type: "uint8" },
          { name: "r", type: "bytes32" },
          { name: "s", type: "bytes32" },
        ],
      },
      {
        function: "removeLiquidityETHSupportingFeeOnTransferTokens",
        signature:
          "removeLiquidityETHSupportingFeeOnTransferTokens(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline)",
        params: [
          { name: "token", type: "address" },
          { name: "liquidity", type: "uint256" },
          { name: "amountTokenMin", type: "uint256" },
          { name: "amountETHMin", type: "uint256" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      {
        function: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
        signature:
          "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s)",
        params: [
          { name: "token", type: "address" },
          { name: "liquidity", type: "uint256" },
          { name: "amountTokenMin", type: "uint256" },
          { name: "amountETHMin", type: "uint256" },
          { name: "to", type: "address" },
          { name: "deadline", type: "uint256" },
          { name: "approveMax", type: "bool" },
          { name: "v", type: "uint8" },
          { name: "r", type: "bytes32" },
          { name: "s", type: "bytes32" },
        ],
      },
    ],
  },
  events: [
    {
      function: "Swap",
      signature:
        "Swap(address indexed sender, uint256 amount0In, uint256 amount1In, uint256 amount0Out, uint256 amount1Out, address indexed to)",
      params: [
        { name: "sender", type: "address", indexed: true },
        { name: "amount0In", type: "uint256", indexed: false },
        { name: "amount1In", type: "uint256", indexed: false },
        { name: "amount0Out", type: "uint256", indexed: false },
        { name: "amount1Out", type: "uint256", indexed: false },
        { name: "to", type: "address", indexed: true },
      ],
      content: [{ tag: "p", content: "Emitted on every successful swap.", style: {} }],
    },
    {
      function: "Sync",
      signature: "Sync(uint112 reserve0, uint112 reserve1)",
      params: [
        { name: "reserve0", type: "uint112", indexed: false },
        { name: "reserve1", type: "uint112", indexed: false },
      ],
      content: [{ tag: "p", content: "Emitted when the reserves are synchronized.", style: {} }],
    },
    {
      function: "Transfer",
      signature: "Transfer(address indexed from, address indexed to, uint256 value)",
      params: [
        { name: "from", type: "address", indexed: true },
        { name: "to", type: "address", indexed: true },
        { name: "value", type: "uint256", indexed: false },
      ],
      content: [{ tag: "p", content: "Emitted when tokens are transferred.", style: {} }],
    },
    {
      function: "Approval",
      signature: "Approval(address indexed owner, address indexed spender, uint256 value)",
      params: [
        { name: "owner", type: "address", indexed: true },
        { name: "spender", type: "address", indexed: true },
        { name: "value", type: "uint256", indexed: false },
      ],
      content: [{ tag: "p", content: "Emitted when an allowance is updated.", style: {} }],
    },
    {
      function: "Mint",
      signature: "Mint(address indexed sender, uint256 amount0, uint256 amount1)",
      params: [
        { name: "sender", type: "address", indexed: true },
        { name: "amount0", type: "uint256", indexed: false },
        { name: "amount1", type: "uint256", indexed: false },
      ],
      content: [{ tag: "p", content: "Emitted when liquidity is minted.", style: {} }],
    },
    {
      function: "Burn",
      signature: "Burn(address indexed sender, uint256 amount0, uint256 amount1, address indexed to)",
      params: [
        { name: "sender", type: "address", indexed: true },
        { name: "amount0", type: "uint256", indexed: false },
        { name: "amount1", type: "uint256", indexed: false },
        { name: "to", type: "address", indexed: true },
      ],
      content: [{ tag: "p", content: "Emitted when liquidity is burned.", style: {} }],
    },
    {
      function: "Swap",
      signature:
        "Swap(address indexed sender, uint256 amount0In, uint256 amount1In, uint256 amount0Out, uint256 amount1Out, address indexed to)",
      params: [
        { name: "sender", type: "address", indexed: true },
        { name: "amount0In", type: "uint256", indexed: false },
        { name: "amount1In", type: "uint256", indexed: false },
        { name: "amount0Out", type: "uint256", indexed: false },
        { name: "amount1Out", type: "uint256", indexed: false },
        { name: "to", type: "address", indexed: true },
      ],
      content: [{ tag: "p", content: "Emitted on every successful swap.", style: {} }],
    },
    {
      function: "Sync",
      signature: "Sync(uint112 reserve0, uint112 reserve1)",
      params: [
        { name: "reserve0", type: "uint112", indexed: false },
        { name: "reserve1", type: "uint112", indexed: false },
      ],
      content: [{ tag: "p", content: "Emitted when the reserves are synchronized.", style: {} }],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "CoreRouter Documentation", url: "https://docs.uniswap.org/protocol/reference/core/router" },
    {
      title: "Uniswap V3 Core Contract",
      url: "https://github.com/Uniswap/v3-core/blob/main/contracts/UniswapV3Core.sol",
    },
    { title: "Uniswap V3 Whitepaper", url: "https://uniswap.org/whitepaper.pdf" },
    { title: "Uniswap V3 Docs", url: "https://docs.uniswap.org/protocol/V3/" },
    { title: "Uniswap V3 SDK", url: "https://uniswap.org/docs/v3/sdk" },
    { title: "Uniswap V3 Community Forum", url: "https://community.uniswap.org/" },
  ],
}

export default definition
