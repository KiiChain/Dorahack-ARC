const definition: IContractDefinition = {
  name: "Account",
  description: `Auto-generated description for the Account contract`,
  content: [
    { tag: "h1", content: "Account Contract", style: {} },
    {
      tag: "p",
      content: "This contract implements a basic account system, allowing users to deposit and withdraw funds.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Deposit funds to an account.</li>
                                <li>Withdraw funds from an account.</li>
                                <li>Check the current balance of an account.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the Account contract, you can interact with it through its public functions. For example, to deposit funds into an account, you would call the deposit function, passing the amount of funds you want to deposit. Similarly, to withdraw funds, you would call the withdraw function, passing the amount you want to withdraw.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The Account contract uses a mapping to store the balance of each account. The deposit function increments the balance of the account, while the withdraw function decrements it. The balance function returns the current balance of an account.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "p",
      content:
        "For security reasons, you should always ensure that the withdraw function is only called by the owner of the account. You can achieve this by using the onlyOwner modifier. Additionally, you should consider adding a gas limit to the withdraw function to prevent denial-of-service attacks.",
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
    ],
    read: [
      {
        function: "balance",
        signature: "balance()",
        params: [],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "Account Contract on Ethereum", url: "https://ethereum.org/en/developers/docs/accounts/" },
    {
      title: "Creating and Managing Accounts with Web3.js",
      url: "https://web3js.readthedocs.io/en/v1.7.0/web3-eth-accounts.html",
    },
    {
      title: "Understanding Ethereum Accounts",
      url: "https://medium.com/coinmonks/understanding-ethereum-accounts-a-beginners-guide-9b35e2827a22",
    },
    {
      title: "Account Abstraction on Ethereum",
      url: "https://ethereum.org/en/developers/docs/accounts/account-abstraction/",
    },
    { title: "Account Management in Solidity", url: "https://solidity-by-example.org/account-management/" },
    {
      title: "Account Security Best Practices",
      url: "https://medium.com/coinmonks/ethereum-account-security-best-practices-8174807653b9",
    },
    { title: "Ethereum Accounts: A Deep Dive", url: "https://www.youtube.com/watch?v=72_2_o0b9zE" },
  ],
}

export default definition
