const definition: IContractDefinition = {
  name: "IAccountCore",
  description: `Interface for AccountCore contracts.`,
  content: [
    { tag: "h1", content: "IAccountCore Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the core functionality of AccountCore contracts, which manage account-related operations. It includes functions for managing account balances, transferring funds, and interacting with associated assets.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Defines fundamental account management functions.</li>
                                <li>Provides a standard interface for interacting with accounts.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "Implement this interface in your AccountCore contracts to ensure compatibility and interoperability with other applications that rely on account management functionality.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The implementation of this interface should include secure and efficient methods for managing account balances, transferring funds, and handling asset interactions.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use appropriate security measures to protect account data and prevent unauthorized access.</li>
                                <li>Implement gas optimization strategies to minimize transaction costs.</li>
                                <li>Ensure proper error handling and logging for debugging and auditing purposes.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "deposit",
        signature: "deposit(uint256)",
        params: [
          {
            name: "amount",
            type: "uint256",
            description: "The amount of funds to deposit.",
          },
        ],
      },
      {
        function: "withdraw",
        signature: "withdraw(uint256)",
        params: [
          {
            name: "amount",
            type: "uint256",
            description: "The amount of funds to withdraw.",
          },
        ],
      },
      {
        function: "transfer",
        signature: "transfer(address,uint256)",
        params: [
          {
            name: "recipient",
            type: "address",
            description: "The address of the recipient.",
          },
          {
            name: "amount",
            type: "uint256",
            description: "The amount of funds to transfer.",
          },
        ],
      },
      {
        function: "approve",
        signature: "approve(address,uint256)",
        params: [
          {
            name: "spender",
            type: "address",
            description: "The address of the spender.",
          },
          {
            name: "amount",
            type: "uint256",
            description: "The amount of funds the spender is allowed to spend.",
          },
        ],
      },
      {
        function: "increaseAllowance",
        signature: "increaseAllowance(address,uint256)",
        params: [
          {
            name: "spender",
            type: "address",
            description: "The address of the spender.",
          },
          {
            name: "addedValue",
            type: "uint256",
            description: "The amount to increase the allowance by.",
          },
        ],
      },
      {
        function: "decreaseAllowance",
        signature: "decreaseAllowance(address,uint256)",
        params: [
          {
            name: "spender",
            type: "address",
            description: "The address of the spender.",
          },
          {
            name: "subtractedValue",
            type: "uint256",
            description: "The amount to decrease the allowance by.",
          },
        ],
      },
    ],
    read: [
      {
        function: "balanceOf",
        signature: "balanceOf(address)",
        params: [
          {
            name: "account",
            type: "address",
            description: "The address of the account.",
          },
        ],
      },
      {
        function: "allowance",
        signature: "allowance(address,address)",
        params: [
          {
            name: "owner",
            type: "address",
            description: "The address of the account owner.",
          },
          {
            name: "spender",
            type: "address",
            description: "The address of the spender.",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "Deposit",
      signature: "Deposit(address,uint256)",
      params: [
        {
          name: "account",
          type: "address",
          description: "The address of the account that deposited funds.",
        },
        {
          name: "amount",
          type: "uint256",
          description: "The amount of funds deposited.",
        },
      ],
      content: [
        {
          tag: "p",
          content: "Emitted when funds are deposited into an account.",
          style: {},
        },
      ],
    },
    {
      function: "Withdraw",
      signature: "Withdraw(address,uint256)",
      params: [
        {
          name: "account",
          type: "address",
          description: "The address of the account that withdrew funds.",
        },
        {
          name: "amount",
          type: "uint256",
          description: "The amount of funds withdrawn.",
        },
      ],
      content: [
        {
          tag: "p",
          content: "Emitted when funds are withdrawn from an account.",
          style: {},
        },
      ],
    },
    {
      function: "Transfer",
      signature: "Transfer(address,address,uint256)",
      params: [
        {
          name: "sender",
          type: "address",
          description: "The address of the account that sent funds.",
        },
        {
          name: "recipient",
          type: "address",
          description: "The address of the account that received funds.",
        },
        {
          name: "amount",
          type: "uint256",
          description: "The amount of funds transferred.",
        },
      ],
      content: [
        {
          tag: "p",
          content: "Emitted when funds are transferred between accounts.",
          style: {},
        },
      ],
    },
    {
      function: "Approval",
      signature: "Approval(address,address,uint256)",
      params: [
        {
          name: "owner",
          type: "address",
          description: "The address of the account owner.",
        },
        {
          name: "spender",
          type: "address",
          description: "The address of the spender.",
        },
        {
          name: "amount",
          type: "uint256",
          description: "The amount of funds the spender is allowed to spend.",
        },
      ],
      content: [
        {
          tag: "p",
          content: "Emitted when an allowance is approved for a spender to use funds from an account.",
          style: {},
        },
      ],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "IAccountCore Interface on Etherscan",
      url: "https://etherscan.io/address/<IAccountCore_contract_address>#code",
    },
    { title: "IAccountCore Interface Documentation (if available)", url: "<link_to_documentation>" },
    {
      title: "Ethereum Account Abstraction (EAA) Documentation",
      url: "https://ethereum.org/en/developers/docs/account-abstraction/",
    },
    { title: "EIP-4337: Account Abstraction", url: "https://eips.ethereum.org/EIPS/eip-4337" },
    {
      title: "Smart Contract Security Best Practices",
      url: "https://consensys.net/blog/smart-contract-security-audit-best-practices/",
    },
  ],
}

export default definition
