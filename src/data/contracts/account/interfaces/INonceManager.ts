const definition: IContractDefinition = {
  name: "INonceManager",
  description: `Interface for managing nonces.`,
  content: [
    { tag: "h1", content: "INonceManager Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines functions for managing nonces, which are used to prevent replay attacks. It allows the retrieval of the current nonce for an address and the incrementing of the nonce.",
      style: {},
    },
    { tag: "h2", content: "Functions", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>currentNonce(address):</b> Retrieves the current nonce for the specified address.</li>
                                <li><b>nextNonce(address):</b> Increments the nonce for the specified address and returns the updated nonce.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This interface is typically implemented by contracts that require nonces to prevent replay attacks. For example, a contract that allows users to sign transactions with their private keys could use an INonceManager implementation to ensure that each transaction uses a unique nonce.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "nextNonce",
        signature: "nextNonce(address)",
        params: [{ name: "account", type: "address" }],
      },
    ],
    read: [
      {
        function: "currentNonce",
        signature: "currentNonce(address)",
        params: [{ name: "account", type: "address" }],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "INonceManager Interface Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/contracts/utils/cryptography/INonceManager.sol",
    },
    { title: "OpenZeppelin Nonces Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/security/nonces" },
    { title: "Understanding Nonces in Ethereum", url: "https://ethereum.org/en/developers/docs/gas/nonces/" },
    {
      title: "Implementing Nonce-based Authentication in Solidity",
      url: "https://medium.com/@benjamin.dillon/implementing-nonce-based-authentication-in-solidity-221668a4e0fc",
    },
    {
      title: "Nonce Management in Smart Contracts - Best Practices",
      url: "https://blog.openzeppelin.com/nonce-management-in-smart-contracts-best-practices/",
    },
  ],
}

export default definition
