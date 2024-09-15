const definition: IContractDefinition = {
  name: "AccountSeaportBulkSigSupport",
  description: `This contract enables batch signature support for Seaport, allowing users to sign multiple Seaport orders in a single transaction.`,
  content: [
    { tag: "h1", content: "AccountSeaportBulkSigSupport Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract provides a way to batch sign multiple Seaport orders in a single transaction, making it more efficient to execute multiple trades at once.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Batch signing of Seaport orders</li>
                                <li>Supports signing multiple orders with different parameters</li>
                                <li>Enhances user experience by reducing gas costs and transaction complexity</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "The AccountSeaportBulkSigSupport contract can be used by users to sign multiple Seaport orders. The contract's functions allow for the creation of a batch signature, which can then be submitted to Seaport for execution.",
      style: {},
    },
    { tag: "h2", content: "Example Usage", style: {} },
    {
      tag: "p",
      content: `
                                To use the AccountSeaportBulkSigSupport contract, follow these steps:
                                1. **Create a batch signature**: Call the 'createBatchSignature' function, providing an array of order parameters.
                                2. **Submit the signature**: Submit the generated signature to Seaport for execution. 
                                3. **Execute the trades**: Seaport will execute the trades based on the signed order parameters.
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content: `The contract leverages the 'Order' struct and other relevant structures from the Seaport contract. It utilizes a combination of on-chain storage and off-chain data to efficiently manage the batch signature process.`,
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use caution when providing order parameters to the contract, as it will be bound by the provided data.</li>
                                <li>Ensure that all necessary permissions and approvals are granted for the Seaport contract to execute the trades on your behalf.</li>
                                <li>Consider security best practices and review the code before deploying the contract.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createBatchSignature",
        signature:
          "createBatchSignature(tuple(uint256,address,address,uint128,uint128,uint128,uint256,address,address,address,uint128,uint128,uint128,uint256,bytes,bytes)[] memory,uint256[] memory,bytes[] memory,bytes)",
        params: [
          {
            name: "orders",
            type: "tuple(uint256,address,address,uint128,uint128,uint128,uint256,address,address,address,uint128,uint128,uint128,uint256,bytes,bytes)[] memory",
          },
          { name: "orderIds", type: "uint256[] memory" },
          { name: "signatures", type: "bytes[] memory" },
          { name: "domainSeparator", type: "bytes" },
        ],
      },
    ],
    read: [],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "AccountSeaportBulkSigSupport Documentation",
      url: "https://docs.opensea.io/docs/seaport/bulk-signatures",
    },
    { title: "Seaport API Documentation", url: "https://docs.opensea.io/docs/api" },
    {
      title: "Seaport Contract Source Code",
      url: "https://github.com/ProjectOpenSea/seaport/blob/main/contracts/Seaport.sol",
    },
    {
      title: "Seaport Bulk Signature Tutorial",
      url: "https://medium.com/opensea/introducing-bulk-signatures-on-seaport-58392f23d3f3",
    },
    {
      title: "Seaport Bulk Signature Example",
      url: "https://github.com/ProjectOpenSea/seaport/blob/main/test/SeaportBulkSignatures.ts",
    },
  ],
}

export default definition
