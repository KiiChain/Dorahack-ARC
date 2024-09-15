const definition: IContractDefinition = {
  name: "DropERC1155",
  description: `An ERC-1155 contract that allows for the distribution of tokens to a list of recipients.`,
  content: [
    { tag: "h1", content: "DropERC1155 Contract", style: {} },
    {
      tag: "p",
      content:
        "The DropERC1155 contract is an ERC-1155 implementation that enables the distribution of tokens to a predefined list of recipients. This is useful for airdrops, giveaways, and other scenarios where you want to distribute tokens to a specific set of addresses.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Allows for the distribution of tokens to a list of recipients.</li>
                                <li>Supports the specification of token amounts for each recipient.</li>
                                <li>Includes a claim functionality for recipients to receive their tokens.</li>
                                <li>Provides a way to check the claiming status of a recipient.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "To use the DropERC1155 contract, you need to:",
      style: {},
    },
    {
      tag: "ol",
      content: `
                                <li>Deploy the contract.</li>
                                <li>Initialize the contract with the list of recipients and their respective token amounts.</li>
                                <li>Allow recipients to claim their tokens.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The DropERC1155 contract inherits from the ERC1155 contract and implements the necessary logic for token distribution and claiming.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure that the list of recipients is properly validated before deployment.</li>
                                <li>Consider adding a timelock mechanism to prevent immediate claims.</li>
                                <li>Implement appropriate security measures to prevent malicious attacks.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "constructor",
        signature:
          "constructor(address _defaultAdmin, string _name, string _symbol, address[] memory _initialReceivers, uint256[] memory _initialAmounts)",
        params: [
          { name: "_defaultAdmin", type: "address" },
          { name: "_name", type: "string" },
          { name: "_symbol", type: "string" },
          { name: "_initialReceivers", type: "address[]" },
          { name: "_initialAmounts", type: "uint256[]" },
        ],
      },
      {
        function: "claim",
        signature: "claim(uint256 _tokenId, uint256 _amount)",
        params: [
          { name: "_tokenId", type: "uint256" },
          { name: "_amount", type: "uint256" },
        ],
      },
      {
        function: "setReceivers",
        signature: "setReceivers(address[] memory _receivers, uint256[] memory _amounts)",
        params: [
          { name: "_receivers", type: "address[]" },
          { name: "_amounts", type: "uint256[]" },
        ],
      },
    ],
    read: [
      {
        function: "balanceOf",
        signature: "balanceOf(address _account, uint256 _id)",
        params: [
          { name: "_account", type: "address" },
          { name: "_id", type: "uint256" },
        ],
      },
      {
        function: "getReceiverAmount",
        signature: "getReceiverAmount(address _receiver, uint256 _tokenId)",
        params: [
          { name: "_receiver", type: "address" },
          { name: "_tokenId", type: "uint256" },
        ],
      },
      {
        function: "hasClaimed",
        signature: "hasClaimed(address _receiver, uint256 _tokenId)",
        params: [
          { name: "_receiver", type: "address" },
          { name: "_tokenId", type: "uint256" },
        ],
      },
      {
        function: "name",
        signature: "name()",
        params: [],
      },
      {
        function: "symbol",
        signature: "symbol()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "TransferSingle",
      signature:
        "TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
      params: [
        { name: "operator", type: "address", indexed: true },
        { name: "from", type: "address", indexed: true },
        { name: "to", type: "address", indexed: true },
        { name: "id", type: "uint256" },
        { name: "value", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "TransferBatch",
      signature:
        "TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)",
      params: [
        { name: "operator", type: "address", indexed: true },
        { name: "from", type: "address", indexed: true },
        { name: "to", type: "address", indexed: true },
        { name: "ids", type: "uint256[]" },
        { name: "values", type: "uint256[]" },
      ],
      content: [],
    },
    {
      function: "ApprovalForAll",
      signature: "ApprovalForAll(address indexed account, address indexed operator, bool approved)",
      params: [
        { name: "account", type: "address", indexed: true },
        { name: "operator", type: "address", indexed: true },
        { name: "approved", type: "bool" },
      ],
      content: [],
    },
    {
      function: "URI",
      signature: "URI(string value)",
      params: [{ name: "value", type: "string" }],
      content: [],
    },
    {
      function: "Claimed",
      signature: "Claimed(address indexed receiver, uint256 indexed tokenId, uint256 amount)",
      params: [
        { name: "receiver", type: "address", indexed: true },
        { name: "tokenId", type: "uint256", indexed: true },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "OpenZeppelin ERC1155 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc1155" },
    { title: "Drop Contract Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/drop" },
    { title: "ERC1155 Tutorial (with OpenZeppelin)", url: "https://blog.openzeppelin.com/erc1155-tutorial/" },
    {
      title: "Building an NFT Marketplace with ERC1155",
      url: "https://blog.openzeppelin.com/building-an-nft-marketplace-with-erc1155/",
    },
    {
      title: "ERC1155 vs ERC721: When to Use Each",
      url: "https://blog.openzeppelin.com/erc1155-vs-erc721-when-to-use-each/",
    },
    {
      title: "Drop Contract Example on Github",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/extensions/ERC1155Burnable.sol",
    },
  ],
}

export default definition
