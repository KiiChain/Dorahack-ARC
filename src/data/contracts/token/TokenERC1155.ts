const definition: IContractDefinition = {
  name: "TokenERC1155",
  description: `ERC-1155 standard compliant token contract, supporting minting and transferring of non-fungible tokens.`,
  content: [
    { tag: "h1", content: "TokenERC1155 Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract implements the ERC-1155 standard for managing non-fungible tokens. It allows users to mint, transfer, and manage unique digital assets.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Minting of new ERC-1155 tokens</li>
                                <li>Transferring tokens between accounts</li>
                                <li>Setting base URI for token metadata</li>
                                <li>Checking token balance for individual accounts</li>
                                <li>Batch minting and batch transferring</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the TokenERC1155 contract, you need to first deploy it to a blockchain. Once deployed, you can interact with the contract through its functions.",
      style: {},
    },
    { tag: "h2", content: "Functions", style: {} },
    { tag: "h3", content: "Write Functions", style: {} },
    {
      tag: "ul",
      content: `
                                <li><strong>mint(address to, uint256 id, uint256 amount, bytes memory data)</strong>: Mints new tokens of a specific ID to a designated recipient.</li>
                                <li><strong>mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)</strong>: Mints a batch of new tokens with different IDs to a recipient.</li>
                                <li><strong>setURI(string memory newuri)</strong>: Sets the base URI for fetching token metadata.</li>
                            `,
      style: {},
    },
    { tag: "h3", content: "Read Functions", style: {} },
    {
      tag: "ul",
      content: `
                                <li><strong>balanceOf(address owner, uint256 id)</strong>: Retrieves the balance of a specific token ID for a given account.</li>
                                <li><strong>balanceOfBatch(address[] memory owners, uint256[] memory ids)</strong>: Retrieves the balance of multiple token IDs for multiple accounts.</li>
                                <li><strong>uri(uint256 id)</strong>: Returns the URI for a specific token ID.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Events", style: {} },
    {
      tag: "ul",
      content: `
                                <li><strong>TransferSingle(address operator, address from, address to, uint256 id, uint256 value)</strong>: Emitted when a single token is transferred.</li>
                                <li><strong>TransferBatch(address operator, address from, address to, uint256[] memory ids, uint256[] memory values)</strong>: Emitted when a batch of tokens are transferred.</li>
                                <li><strong>ApprovalForAll(address owner, address operator, bool approved)</strong>: Emitted when an operator is approved or revoked for an owner.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract utilizes the OpenZeppelin ERC1155 implementation as a foundation, ensuring compatibility with the established standard.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use a secure random number generator for minting unique token IDs.</li>
                                <li>Consider implementing access control mechanisms to limit minting and other actions.</li>
                                <li>Store token metadata off-chain for better scalability and cost efficiency.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "mint",
        signature: "mint(address,uint256,uint256,bytes)",
        params: [
          { name: "to", type: "address" },
          { name: "id", type: "uint256" },
          { name: "amount", type: "uint256" },
          { name: "data", type: "bytes" },
        ],
      },
      {
        function: "mintBatch",
        signature: "mintBatch(address,uint256[],uint256[],bytes)",
        params: [
          { name: "to", type: "address" },
          { name: "ids", type: "uint256[]" },
          { name: "amounts", type: "uint256[]" },
          { name: "data", type: "bytes" },
        ],
      },
      {
        function: "setURI",
        signature: "setURI(string)",
        params: [{ name: "newuri", type: "string" }],
      },
    ],
    read: [
      {
        function: "balanceOf",
        signature: "balanceOf(address,uint256)",
        params: [
          { name: "owner", type: "address" },
          { name: "id", type: "uint256" },
        ],
      },
      {
        function: "balanceOfBatch",
        signature: "balanceOfBatch(address[],uint256[])",
        params: [
          { name: "owners", type: "address[]" },
          { name: "ids", type: "uint256[]" },
        ],
      },
      {
        function: "uri",
        signature: "uri(uint256)",
        params: [{ name: "id", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "TransferSingle",
      signature: "TransferSingle(address,address,address,uint256,uint256)",
      params: [
        { name: "operator", type: "address" },
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "id", type: "uint256" },
        { name: "value", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a single token is transferred.", style: {} }],
    },
    {
      function: "TransferBatch",
      signature: "TransferBatch(address,address,address,uint256[],uint256[])",
      params: [
        { name: "operator", type: "address" },
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "ids", type: "uint256[]" },
        { name: "values", type: "uint256[]" },
      ],
      content: [{ tag: "p", content: "Emitted when a batch of tokens are transferred.", style: {} }],
    },
    {
      function: "ApprovalForAll",
      signature: "ApprovalForAll(address,address,bool)",
      params: [
        { name: "owner", type: "address" },
        { name: "operator", type: "address" },
        { name: "approved", type: "bool" },
      ],
      content: [{ tag: "p", content: "Emitted when an operator is approved or revoked for an owner.", style: {} }],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "OpenZeppelin ERC1155 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc1155" },
    { title: "ERC1155 Tutorial by OpenZeppelin", url: "https://docs.openzeppelin.com/contracts/4.x/tutorials/erc1155" },
    { title: "ERC1155.js Library", url: "https://github.com/enjin/erc1155.js" },
    {
      title: "ERC1155 Contract Example (Solidity)",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol",
    },
    {
      title: "ERC1155: A Detailed Guide to the Standard",
      url: "https://medium.com/coinmonks/erc-1155-a-detailed-guide-to-the-standard-202f5c0247f9",
    },
    { title: "ERC1155: The Future of NFTs?", url: "https://www.coindesk.com/markets/erc-1155-the-future-of-nfts" },
    {
      title: "Building Your Own ERC1155 Token: A Step-by-Step Guide",
      url: "https://medium.com/coinmonks/building-your-own-erc-1155-token-a-step-by-step-guide-11e7415e97c3",
    },
  ],
}

export default definition
