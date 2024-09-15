const definition: IContractDefinition = {
  name: "ILoyaltyPoints",
  description: `Interface for LoyaltyPoints contract.`,
  content: [
    { tag: "h1", content: "ILoyaltyPoints Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions that the LoyaltyPoints contract implements. This allows for other contracts to interact with the LoyaltyPoints contract in a standardized way.",
      style: {},
    },
    { tag: "h2", content: "Functions", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>mint(address to, uint256 amount)</b>: Mints loyalty points to a given address.</li>
                                <li><b>burn(address from, uint256 amount)</b>: Burns loyalty points from a given address.</li>
                                <li><b>balanceOf(address account)</b>: Returns the balance of loyalty points for a given address.</li>
                                <li><b>transfer(address to, uint256 amount)</b>: Transfers loyalty points from the caller's address to a given address.</li>
                                <li><b>approve(address spender, uint256 amount)</b>: Allows a spender to transfer loyalty points from the caller's address.</li>
                                <li><b>transferFrom(address from, address to, uint256 amount)</b>: Transfers loyalty points from one address to another, where the caller must have been approved by the "from" address.</li>
                                <li><b>allowance(address owner, address spender)</b>: Returns the amount of loyalty points that a spender is allowed to transfer from an owner's address.</li>
                                <li><b>getTotalSupply()</b>: Returns the total supply of loyalty points.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Events", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>Transfer(address indexed from, address indexed to, uint256 amount)</b>: Emitted when loyalty points are transferred.</li>
                                <li><b>Approval(address indexed owner, address indexed spender, uint256 amount)</b>: Emitted when an approval is granted.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "mint",
        signature: "mint(address,uint256)",
        params: [
          { name: "to", type: "address" },
          { name: "amount", type: "uint256" },
        ],
      },
      {
        function: "burn",
        signature: "burn(address,uint256)",
        params: [
          { name: "from", type: "address" },
          { name: "amount", type: "uint256" },
        ],
      },
      {
        function: "transfer",
        signature: "transfer(address,uint256)",
        params: [
          { name: "to", type: "address" },
          { name: "amount", type: "uint256" },
        ],
      },
      {
        function: "approve",
        signature: "approve(address,uint256)",
        params: [
          { name: "spender", type: "address" },
          { name: "amount", type: "uint256" },
        ],
      },
      {
        function: "transferFrom",
        signature: "transferFrom(address,address,uint256)",
        params: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "amount", type: "uint256" },
        ],
      },
    ],
    read: [
      {
        function: "balanceOf",
        signature: "balanceOf(address)",
        params: [{ name: "account", type: "address" }],
      },
      {
        function: "allowance",
        signature: "allowance(address,address)",
        params: [
          { name: "owner", type: "address" },
          { name: "spender", type: "address" },
        ],
      },
      {
        function: "getTotalSupply",
        signature: "getTotalSupply()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "Transfer",
      signature: "Transfer(address,address,uint256)",
      params: [
        { name: "from", type: "address", indexed: true },
        { name: "to", type: "address", indexed: true },
        { name: "amount", type: "uint256", indexed: false },
      ],
      content: [],
    },
    {
      function: "Approval",
      signature: "Approval(address,address,uint256)",
      params: [
        { name: "owner", type: "address", indexed: true },
        { name: "spender", type: "address", indexed: true },
        { name: "amount", type: "uint256", indexed: false },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "ILoyaltyPoints Interface on Etherscan",
      url: "https://etherscan.io/address/<ILoyaltyPoints_Contract_Address>#code",
    },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "OpenZeppelin Documentation", url: "https://docs.openzeppelin.com/" },
    { title: "Ethereum.org Documentation", url: "https://ethereum.org/en/developers/docs/" },
    { title: "Stack Overflow", url: "https://stackoverflow.com/" },
    { title: "Reddit - r/ethereum", url: "https://www.reddit.com/r/ethereum/" },
    { title: "GitHub - OpenZeppelin", url: "https://github.com/OpenZeppelin/openzeppelin-contracts" },
    {
      title: "YouTube -  Ethereum Development Tutorials",
      url: "https://www.youtube.com/results?search_query=ethereum+development+tutorials",
    },
  ],
}

export default definition
