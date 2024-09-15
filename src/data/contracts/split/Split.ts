const definition: IContractDefinition = {
  name: "Split",
  description: `The Split contract enables the division of funds between multiple recipients based on pre-defined proportions.`,
  content: [
    { tag: "h1", content: "Split Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract allows for the distribution of funds among multiple recipients according to specified percentages. It provides a secure and transparent mechanism for splitting funds based on predefined proportions.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Divides funds among multiple recipients based on percentages.</li>
                                <li>Supports dynamic adjustments to recipient proportions.</li>
                                <li>Ensures transparent and verifiable distribution of funds.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the Split contract, first deploy it and initialize it with the list of recipients and their respective percentages. Subsequently, you can deposit funds into the contract, which will be automatically distributed among the recipients according to their allocated proportions.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract utilizes a mapping to store the recipient addresses and their corresponding percentages. When funds are deposited, the contract iterates through the mapping, calculating and distributing the allocated share to each recipient.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                    <li>Ensure that the sum of all percentages equals 100%.</li>
                                    <li>Consider using a trusted address to manage the contract and update recipient proportions.</li>
                                    <li>Implement proper security measures to protect against potential vulnerabilities.</li>
                                `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "setRecipients",
        signature: "setRecipients(address[],uint256[])",
        params: [
          { name: "recipients", type: "address[]" },
          { name: "percentages", type: "uint256[]" },
        ],
      },
      {
        function: "deposit",
        signature: "deposit()",
        params: [],
      },
    ],
    read: [
      {
        function: "getRecipient",
        signature: "getRecipient(uint256)",
        params: [{ name: "index", type: "uint256" }],
      },
      {
        function: "getPercentage",
        signature: "getPercentage(uint256)",
        params: [{ name: "index", type: "uint256" }],
      },
      {
        function: "getBalance",
        signature: "getBalance()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "FundsDeposited",
      signature: "FundsDeposited(uint256)",
      params: [{ name: "amount", type: "uint256" }],
      content: [],
    },
    {
      function: "FundsDistributed",
      signature: "FundsDistributed(address,uint256)",
      params: [
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "Split - Documentation", url: "https://docs.split.io/docs/sdks/javascript" },
    { title: "Split - API Reference", url: "https://docs.split.io/docs/api/sdk-api" },
    { title: "Split - GitHub Repository", url: "https://github.com/split-io/javascript-sdk" },
    { title: "Split - Blog", url: "https://split.io/blog/" },
    { title: "Split - Community Forum", url: "https://community.split.io/" },
    { title: "Split - YouTube Channel", url: "https://www.youtube.com/channel/UCt9tR6zX1zM6L-F1_Z1W0Sg" },
    { title: "Split - Integrations", url: "https://split.io/integrations/" },
    { title: "Split - Case Studies", url: "https://split.io/case-studies/" },
    { title: "Split - Pricing", url: "https://split.io/pricing/" },
  ],
}

export default definition
