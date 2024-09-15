const definition: IContractDefinition = {
  name: "ManagedAccount",
  description: `A contract that allows for the management of an account by a designated manager.`,
  content: [
    { tag: "h1", content: "ManagedAccount Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract implements a basic managed account system, where a designated manager can control the account's funds and actions. It provides functionality for setting a manager, making withdrawals, and freezing the account.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Setting a manager who controls the account.</li>
                                <li>Making withdrawals from the account by the manager.</li>
                                <li>Freezing the account to prevent further withdrawals.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "1. Deploy the contract.",
      style: {},
    },
    {
      tag: "p",
      content: "2. Set a manager using the `setManager` function.",
      style: {},
    },
    {
      tag: "p",
      content: "3. The manager can then withdraw funds using the `withdraw` function.",
      style: {},
    },
    {
      tag: "p",
      content: "4. The account can be frozen using the `freeze` function, preventing further withdrawals.",
      style: {},
    },
    { tag: "h2", content: "Security Considerations", style: {} },
    {
      tag: "p",
      content:
        "This contract should be used with caution. Ensure that the manager is trustworthy, as they have complete control over the account's funds. Consider implementing additional security measures like multi-sig wallets or timelocks for more critical operations.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "p",
      content:
        "It's recommended to deploy this contract with a dedicated address for improved security. Ensure to audit the contract before using it in a production environment.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "setManager",
        signature: "setManager(address)",
        params: [{ name: "newManager", type: "address" }],
      },
      {
        function: "withdraw",
        signature: "withdraw(uint256)",
        params: [{ name: "amount", type: "uint256" }],
      },
      {
        function: "freeze",
        signature: "freeze()",
        params: [],
      },
    ],
    read: [
      {
        function: "manager",
        signature: "manager()",
        params: [],
      },
      {
        function: "isFrozen",
        signature: "isFrozen()",
        params: [],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "OpenZeppelin Account Management", url: "https://docs.openzeppelin.com/contracts/4.x/access-control" },
    { title: "OpenZeppelin Ownable", url: "https://docs.openzeppelin.com/contracts/4.x/access-control#ownable" },
    { title: "OpenZeppelin Roles", url: "https://docs.openzeppelin.com/contracts/4.x/access-control#roles" },
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "EIP-725: Account Abstraction", url: "https://eips.ethereum.org/EIPS/eip-725" },
  ],
}

export default definition
