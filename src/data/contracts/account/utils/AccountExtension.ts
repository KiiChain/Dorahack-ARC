const definition: IContractDefinition = {
  name: "AccountExtension",
  description: `This contract extends the functionality of an account by allowing for the delegation of operations to another address. This can be useful for scenarios like multi-sig wallets, where multiple parties need to approve transactions before they can be executed.`,
  content: [
    { tag: "h1", content: "AccountExtension Contract", style: {} },
    {
      tag: "p",
      content:
        "The AccountExtension contract is a simple but powerful tool that can be used to enhance the functionality of standard accounts on the blockchain.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Delegation of operations to a designated address.</li>
                                <li>Support for revoking delegation.</li>
                                <li>Ability to check if an operation is currently delegated.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "The AccountExtension contract can be used to create multi-sig wallets, where multiple parties need to approve transactions before they can be executed. It can also be used to delegate operations to a specific address, such as a smart contract, for automated execution of tasks.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses a simple mapping to store the address to which operations are delegated. The `delegate()` function sets the delegate address, while the `revoke()` function removes the delegation. The `isDelegated()` function can be used to check if an operation is currently delegated.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure that the delegate address is trusted and secure.</li>
                                <li>Consider using a timelock mechanism to prevent immediate revocation of delegation.</li>
                                <li>Implement access control measures to prevent unauthorized delegation or revocation.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "delegate",
        signature: "delegate(address)",
        params: [{ name: "_delegate", type: "address" }],
      },
      {
        function: "revoke",
        signature: "revoke()",
        params: [],
      },
    ],
    read: [
      {
        function: "isDelegated",
        signature: "isDelegated()",
        params: [],
      },
      {
        function: "delegateAddress",
        signature: "delegateAddress()",
        params: [],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "Account Extension: A Powerful Tool for Decentralized Applications",
      url: "https://medium.com/ethereum-foundation/account-extension-a-powerful-tool-for-decentralized-applications-313547955c40",
    },
    {
      title: "Account Abstraction and Account Extensions",
      url: "https://ethereum.org/en/developers/docs/account-abstraction/",
    },
    { title: "EIP-4337: Account Abstraction", url: "https://eips.ethereum.org/EIPS/eip-4337" },
    {
      title: "Account Extension Examples",
      url: "https://github.com/account-abstraction/account-abstraction/tree/main/examples/account-extensions",
    },
    { title: "Account Extension Smart Contract Tutorial", url: "https://www.youtube.com/watch?v=your-video-id-here" },
  ],
}

export default definition
