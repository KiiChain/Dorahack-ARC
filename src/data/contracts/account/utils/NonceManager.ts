const definition: IContractDefinition = {
  name: "NonceManager",
  description: `A contract that helps manage the nonce of a user. This is useful when interacting with a contract that relies on the user to provide their own nonce, as it can help prevent replay attacks.`,
  content: [
    { tag: "h1", content: "NonceManager Contract", style: {} },
    {
      tag: "p",
      content:
        "The NonceManager contract is designed to handle the nonce management for a user, primarily to prevent replay attacks. This is particularly important when interacting with contracts that rely on user-provided nonces. By ensuring that each transaction has a unique nonce, the NonceManager helps guarantee the security and validity of transactions.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Provides a mechanism to retrieve and increment the user's nonce.</li>
                                <li>Stores the current nonce for each user, ensuring that each transaction has a unique nonce.</li>
                                <li>Facilitates secure and replay-resistant interactions with contracts requiring user-provided nonces.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the NonceManager, you can first call the `getNonce` function to retrieve the current nonce for a user.  This value can then be used when interacting with other contracts requiring a user-provided nonce. After submitting a transaction with the nonce, you should call the `incrementNonce` function to update the stored nonce, ensuring the next transaction uses a fresh value.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The NonceManager contract uses a simple mapping to store the current nonce for each user address. The `getNonce` function retrieves this value, and the `incrementNonce` function updates it after each successful transaction.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Always use the NonceManager to manage nonces when interacting with contracts that require them.</li>
                                <li>Ensure that the 'incrementNonce' function is called after each successful transaction using the retrieved nonce.</li>
                                <li>Consider using a separate NonceManager for different types of interactions to enhance security.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "incrementNonce",
        signature: "incrementNonce()",
        params: [],
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
      title: "NonceManager.sol Source Code",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/cryptography/NonceManager.sol",
    },
    {
      title: "OpenZeppelin Contracts Documentation - NonceManager",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/utils/cryptography/NonceManager",
    },
    { title: "EIP-1271 - Standard for validating signatures", url: "https://eips.ethereum.org/EIPS/eip-1271" },
    {
      title: "Understanding Nonces in Cryptography",
      url: "https://www.freecodecamp.org/news/understanding-nonces-in-cryptography/",
    },
    {
      title: "Solidity Documentation - ECDSA Signature Verification",
      url: "https://docs.soliditylang.org/en/v0.8.17/security-considerations.html#ecdsa-signature-verification",
    },
    {
      title: "Meta Transactions for Gasless Transactions",
      url: "https://medium.com/coinmonks/understanding-meta-transactions-in-ethereum-41d9282d6d8d",
    },
  ],
}

export default definition
