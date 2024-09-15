const definition: IContractDefinition = {
  name: "IAccount",
  description: `Interface for accounts.`,
  content: [
    { tag: "h1", content: "IAccount Contract", style: {} },
    { tag: "p", content: "This interface defines the basic functions for an account.", style: {} },
    { tag: "h2", content: "Functions", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>deposit(uint256 amount)</b>: Deposits funds into the account.</li>
                                <li><b>withdraw(uint256 amount)</b>: Withdraws funds from the account.</li>
                                <li><b>getBalance()</b>: Returns the current balance of the account.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This interface can be implemented by any contract that needs to represent an account with basic functionalities like deposits, withdrawals, and balance checks. ",
      style: {},
    },
  ],
  functions: {
    write: [
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
    ],
    read: [
      {
        function: "getBalance",
        signature: "getBalance()",
        params: [],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "OpenZeppelin IAccount Interface",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/interfaces/IAccount",
    },
    { title: "EIP-1271: Standard for Signature Verification", url: "https://eips.ethereum.org/EIPS/eip-1271" },
    { title: "Ethereum Accounts and Key Management", url: "https://ethereum.org/en/developers/docs/accounts/" },
    { title: "Gnosis Safe: Multi-Signature Wallets", url: "https://safe.global/" },
    { title: "Argent: Non-Custodial Wallet", url: "https://www.argent.xyz/" },
    { title: "EIP-712: Typed Data V4", url: "https://eips.ethereum.org/EIPS/eip-712" },
    { title: "EIP-2771: Meta-Transactions over ERC2771", url: "https://eips.ethereum.org/EIPS/eip-2771" },
  ],
}

export default definition
