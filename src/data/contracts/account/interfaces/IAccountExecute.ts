const definition: IContractDefinition = {
  name: "IAccountExecute",
  description: `Interface for the Account contract to execute transactions via the account manager`,
  content: [
    { tag: "h1", content: "IAccountExecute Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the methods that the Account contract must implement to allow for the execution of transactions via the account manager. This provides a standardized way to interact with the Account contract, ensuring compatibility with different account managers.",
      style: {},
    },
    { tag: "h2", content: "Functions", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>execute(bytes calldata, uint256, bytes calldata)</b>: Executes a transaction on behalf of the account. This function accepts the transaction data, the gas limit, and the signature of the transaction. It returns a boolean value indicating the success of the execution.</li>
                                <li><b>getNonce()</b>: Retrieves the nonce of the account. This is used to ensure that transactions are executed in the correct order.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "The account manager can use the methods defined in this interface to interact with the Account contract. For example, to execute a transaction on behalf of the account, the account manager can call the <code>execute()</code> function. The account manager can also retrieve the nonce of the account by calling the <code>getNonce()</code> function.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "execute",
        signature: "execute(bytes,uint256,bytes)",
        params: [
          { name: "data", type: "bytes" },
          { name: "gasLimit", type: "uint256" },
          { name: "signature", type: "bytes" },
        ],
      },
    ],
    read: [
      {
        function: "getNonce",
        signature: "getNonce()",
        params: [],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "IAccountExecute Interface on Etherscan",
      url: "https://etherscan.io/address/<CONTRACT_ADDRESS_HERE>#code",
    },
    { title: "Account Abstraction - EIP-2938", url: "https://eips.ethereum.org/EIPS/eip-2938" },
    {
      title: "Account Abstraction: The Future of Ethereum Accounts",
      url: "https://blog.openzeppelin.com/account-abstraction-the-future-of-ethereum-accounts/",
    },
    {
      title: "Building Account Abstraction Smart Contracts",
      url: "https://docs.openzeppelin.com/contracts/4.x/account-abstraction",
    },
    {
      title: "Account Abstraction with Entry Point and User Operation",
      url: "https://medium.com/starkware/account-abstraction-with-entry-point-and-user-operation-a-deep-dive-484b7db8479f",
    },
    { title: "Understanding Account Abstraction", url: "https://ethereum.org/en/developers/docs/account-abstraction/" },
    {
      title: "Account Abstraction: A New Era for Ethereum",
      url: "https://www.coindesk.com/tech/2023/04/18/account-abstraction-a-new-era-for-ethereum/",
    },
  ],
}

export default definition
