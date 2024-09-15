const definition: IContractDefinition = {
  name: "IPaymaster",
  description: `Interface for a Paymaster contract.`,
  content: [
    { tag: "h1", content: "IPaymaster Contract", style: {} },
    {
      tag: "p",
      content:
        "The `IPaymaster` interface defines the functions required for a contract to act as a paymaster in the context of a Gas Station Network (GSN). A paymaster is responsible for covering the gas costs of transactions submitted through GSN, enabling users to perform transactions without having to pay gas upfront.",
      style: {},
    },
    { tag: "h2", content: "Functions", style: {} },
    { tag: "p", content: "The `IPaymaster` interface includes the following functions:", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>post</b>: This function is called by the GSN Relay to verify and pay for a transaction on behalf of a user. If the paymaster approves the transaction, it should return true, otherwise false.</li>
                                <li><b>postTransaction</b>: This function is called by the GSN Relay after a successful transaction to allow the paymaster to perform any post-transaction actions, such as updating its internal state.</li>
                                <li><b>preRelayedCall</b>: This function is called by the GSN Relay before the transaction is relayed to the destination contract. The paymaster can use this function to perform checks and modify the transaction parameters.</li>
                                <li><b>version</b>: This function allows clients to retrieve the current version of the paymaster implementation.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use a paymaster contract with a GSN Relay, the user needs to specify the address of the paymaster contract in the transaction request. The GSN Relay will then interact with the paymaster contract to verify and pay for the transaction. ",
      style: {},
    },
    { tag: "h2", content: "Security Considerations", style: {} },
    {
      tag: "p",
      content:
        "Paymaster contracts should be carefully audited to ensure they are secure and do not introduce vulnerabilities that could be exploited by malicious actors.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "post",
        signature: "post(bytes calldata, address, bytes calldata, uint256, uint256, bytes calldata, uint256)",
        params: [
          { name: "context", type: "bytes" },
          { name: "user", type: "address" },
          { name: "paymasterAndData", type: "bytes" },
          { name: "chainId", type: "uint256" },
          { name: "version", type: "uint256" },
          { name: "relayData", type: "bytes" },
          { name: "nonce", type: "uint256" },
        ],
      },
      {
        function: "postTransaction",
        signature: "postTransaction(bytes calldata, address, bytes calldata, uint256, bytes calldata)",
        params: [
          { name: "context", type: "bytes" },
          { name: "user", type: "address" },
          { name: "paymasterAndData", type: "bytes" },
          { name: "chainId", type: "uint256" },
          { name: "relayData", type: "bytes" },
        ],
      },
      {
        function: "preRelayedCall",
        signature: "preRelayedCall(bytes calldata, address, bytes calldata, uint256, uint256, bytes calldata, uint256)",
        params: [
          { name: "context", type: "bytes" },
          { name: "user", type: "address" },
          { name: "paymasterAndData", type: "bytes" },
          { name: "chainId", type: "uint256" },
          { name: "version", type: "uint256" },
          { name: "relayData", type: "bytes" },
          { name: "nonce", type: "uint256" },
        ],
      },
    ],
    read: [
      {
        function: "version",
        signature: "version()",
        params: [],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "IPaymaster Interface on Etherscan",
      url: "https://etherscan.io/address/0x0000000000000000000000000000000000000000#code",
    },
    { title: "EIP-2938: Paymaster API", url: "https://eips.ethereum.org/EIPS/eip-2938" },
    { title: "EIP-4337: Account Abstraction", url: "https://eips.ethereum.org/EIPS/eip-4337" },
    {
      title: "Account Abstraction with Paymasters: A Beginner's Guide",
      url: "https://blog.openzeppelin.com/account-abstraction-with-paymasters-a-beginners-guide/",
    },
    {
      title: "Building a Paymaster: Implementing the IPaymaster Interface",
      url: "https://blog.openzeppelin.com/building-a-paymaster-implementing-the-ipaymaster-interface/",
    },
    {
      title: "Paymaster Example on Github",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/paymaster",
    },
    {
      title: "EIP-2938: Paymaster API Discussion on Ethereum Magicians",
      url: "https://ethereum.stackexchange.com/questions/116835/eip-2938-paymaster-api-explanation",
    },
  ],
}

export default definition
