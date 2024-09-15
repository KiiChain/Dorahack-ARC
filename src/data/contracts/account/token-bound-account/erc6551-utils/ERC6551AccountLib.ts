const definition: IContractDefinition = {
  name: "ERC6551AccountLib",
  description: `This library provides the core functionality for ERC6551 accounts, enabling smart contracts to act as independent entities with their own wallets and the ability to manage their own assets.`,
  content: [
    { tag: "h1", content: "ERC6551AccountLib Contract", style: {} },
    {
      tag: "p",
      content:
        "This library implements the core functionalities of an ERC6551 account, enabling smart contracts to function as independent entities with their own wallets and the ability to manage their own assets. It defines essential functions and events that enable interaction with these accounts.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Enables smart contracts to function as independent accounts with their own wallets and asset management capabilities.</li>
                                <li>Defines functions for managing account balances, executing transactions, and controlling access to funds.</li>
                                <li>Offers a standardized interface for interacting with ERC6551 accounts, promoting interoperability and composability.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To utilize this library, developers can integrate the ERC6551AccountLib contract into their own smart contracts. They can then create new accounts, manage their balances, and execute transactions on behalf of these accounts. By implementing the ERC6551 standard, developers can interact seamlessly with other ERC6551-compliant applications and services.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    { tag: "p", content: "The library implements the ERC6551 standard by providing functions for: ", style: {} },
    {
      tag: "ul",
      content: `
                                <li> **Creating new accounts:**  The library defines a function to create new ERC6551 accounts with a specified initial owner and balance.</li>
                                <li> **Managing account balances:** Functions are provided for depositing and withdrawing funds from an ERC6551 account.</li>
                                <li> **Executing transactions:** The library enables the execution of transactions from an ERC6551 account, specifying the recipient, amount, and data to be sent.</li>
                                <li> **Controlling account access:** Functions for managing access control, including setting and removing controllers and granting specific permissions.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li> **Security:**  Ensure proper security measures are implemented to prevent unauthorized access to ERC6551 accounts.</li>
                                <li> **Gas Optimization:**  Consider gas optimization techniques when implementing functions to minimize transaction costs.</li>
                                <li> **Error Handling:**  Implement robust error handling to ensure smooth operation and prevent unexpected failures.</li>
                                <li> **Testing:**  Thoroughly test the implementation of ERC6551 accounts to verify their functionality and security.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createAccount",
        signature: "createAccount(address,uint256)",
        params: [
          { name: "owner", type: "address" },
          { name: "initialBalance", type: "uint256" },
        ],
      },
      {
        function: "deposit",
        signature: "deposit(uint256)",
        params: [{ name: "amount", type: "uint256" }],
      },
      {
        function: "withdraw",
        signature: "withdraw(uint256)",
        params: [{ name: "amount", type: "uint256" }],
      },
      {
        function: "execute",
        signature: "execute(address,uint256,bytes)",
        params: [
          { name: "recipient", type: "address" },
          { name: "amount", type: "uint256" },
          { name: "data", type: "bytes" },
        ],
      },
      {
        function: "setController",
        signature: "setController(address)",
        params: [{ name: "newController", type: "address" }],
      },
      {
        function: "removeController",
        signature: "removeController(address)",
        params: [{ name: "controller", type: "address" }],
      },
      {
        function: "grantPermission",
        signature: "grantPermission(address,bytes32)",
        params: [
          { name: "controller", type: "address" },
          { name: "permission", type: "bytes32" },
        ],
      },
      {
        function: "revokePermission",
        signature: "revokePermission(address,bytes32)",
        params: [
          { name: "controller", type: "address" },
          { name: "permission", type: "bytes32" },
        ],
      },
    ],
    read: [
      {
        function: "getBalance",
        signature: "getBalance()",
        params: [],
      },
      {
        function: "getController",
        signature: "getController()",
        params: [],
      },
      {
        function: "hasPermission",
        signature: "hasPermission(address,bytes32)",
        params: [
          { name: "controller", type: "address" },
          { name: "permission", type: "bytes32" },
        ],
      },
    ],
  },
  events: [
    {
      function: "AccountCreated",
      signature: "AccountCreated(address,address,uint256)",
      params: [
        { name: "account", type: "address" },
        { name: "owner", type: "address" },
        { name: "initialBalance", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "Deposit",
      signature: "Deposit(address,uint256)",
      params: [
        { name: "account", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "Withdrawal",
      signature: "Withdrawal(address,uint256)",
      params: [
        { name: "account", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "TransactionExecuted",
      signature: "TransactionExecuted(address,address,uint256,bytes)",
      params: [
        { name: "account", type: "address" },
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
        { name: "data", type: "bytes" },
      ],
      content: [],
    },
    {
      function: "ControllerSet",
      signature: "ControllerSet(address,address)",
      params: [
        { name: "account", type: "address" },
        { name: "newController", type: "address" },
      ],
      content: [],
    },
    {
      function: "ControllerRemoved",
      signature: "ControllerRemoved(address,address)",
      params: [
        { name: "account", type: "address" },
        { name: "controller", type: "address" },
      ],
      content: [],
    },
    {
      function: "PermissionGranted",
      signature: "PermissionGranted(address,address,bytes32)",
      params: [
        { name: "account", type: "address" },
        { name: "controller", type: "address" },
        { name: "permission", type: "bytes32" },
      ],
      content: [],
    },
    {
      function: "PermissionRevoked",
      signature: "PermissionRevoked(address,address,bytes32)",
      params: [
        { name: "account", type: "address" },
        { name: "controller", type: "address" },
        { name: "permission", type: "bytes32" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC-6551: Account Abstraction for Smart Contracts", url: "https://eips.ethereum.org/EIPS/eip-6551" },
    {
      title: "ERC-6551 Account Abstraction: A New Era for Smart Contracts",
      url: "https://www.youtube.com/watch?v=z4jI7hQ6x6Q",
    },
    {
      title: "ERC-6551: Account Abstraction for Smart Contracts",
      url: "https://blog.openzeppelin.com/erc-6551-account-abstraction/",
    },
    {
      title: "ERC-6551: Account Abstraction for Smart Contracts",
      url: "https://www.ethereum.org/en/developers/docs/standards/erc-6551/",
    },
    {
      title: "Account Abstraction and the Future of Ethereum",
      url: "https://www.coindesk.com/tech/2023/02/09/account-abstraction-and-the-future-of-ethereum/",
    },
    {
      title: "ERC-6551: Account Abstraction for Smart Contracts",
      url: "https://ethereum.org/en/developers/docs/standards/erc-6551/",
    },
    {
      title: "ERC-6551: A Deep Dive into Account Abstraction",
      url: "https://medium.com/ethereum-foundation/erc-6551-a-deep-dive-into-account-abstraction-4b4785463466",
    },
    {
      title: "Account Abstraction: A Guide to ERC-6551",
      url: "https://blog.alchemy.com/account-abstraction-a-guide-to-erc-6551/",
    },
    { title: "Building a Simple ERC-6551 Account", url: "https://www.youtube.com/watch?v=pJ-h2Qz178w" },
  ],
}

export default definition
