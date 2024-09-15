const definition: IContractDefinition = {
  name: "ITokenERC1155",
  description: `Interface for the ERC1155 standard`,
  content: [
    { tag: "h1", content: "ITokenERC1155 Contract", style: {} },
    {
      tag: "p",
      content:
        "This is an interface for the ERC1155 standard, which defines a set of functions for interacting with non-fungible tokens (NFTs) that can have multiple instances.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Supports multiple token IDs</li>
                                <li>Allows for batch transfers</li>
                                <li>Provides a mechanism for tracking token balances</li>
                                <li>Defines a standard for interacting with ERC1155 tokens</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This interface is used by ERC1155 token contracts to define the standard methods for interacting with their tokens.  Developers can use this interface to interact with any ERC1155 contract in a standardized way.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The ITokenERC1155 interface is a fundamental component of the ERC1155 standard. Implementing this interface in your token contract ensures compatibility with a wide range of tools and applications built to work with ERC1155 tokens.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "setApprovalForAll",
        signature: "setApprovalForAll(address operator, bool approved)",
        params: [
          {
            name: "operator",
            type: "address",
            description: "Address of the operator",
          },
          {
            name: "approved",
            type: "bool",
            description: "Whether the operator is approved",
          },
        ],
      },
      {
        function: "safeTransferFrom",
        signature: "safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data)",
        params: [
          {
            name: "from",
            type: "address",
            description: "Address of the sender",
          },
          {
            name: "to",
            type: "address",
            description: "Address of the receiver",
          },
          {
            name: "id",
            type: "uint256",
            description: "ID of the token",
          },
          {
            name: "amount",
            type: "uint256",
            description: "Amount of tokens",
          },
          {
            name: "data",
            type: "bytes",
            description: "Additional data",
          },
        ],
      },
      {
        function: "safeBatchTransferFrom",
        signature: "safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)",
        params: [
          {
            name: "from",
            type: "address",
            description: "Address of the sender",
          },
          {
            name: "to",
            type: "address",
            description: "Address of the receiver",
          },
          {
            name: "ids",
            type: "uint256[]",
            description: "Array of token IDs",
          },
          {
            name: "amounts",
            type: "uint256[]",
            description: "Array of token amounts",
          },
          {
            name: "data",
            type: "bytes",
            description: "Additional data",
          },
        ],
      },
    ],
    read: [
      {
        function: "balanceOf",
        signature: "balanceOf(address account, uint256 id)",
        params: [
          {
            name: "account",
            type: "address",
            description: "Address of the account",
          },
          {
            name: "id",
            type: "uint256",
            description: "ID of the token",
          },
        ],
      },
      {
        function: "balanceOfBatch",
        signature: "balanceOfBatch(address[] accounts, uint256[] ids)",
        params: [
          {
            name: "accounts",
            type: "address[]",
            description: "Array of account addresses",
          },
          {
            name: "ids",
            type: "uint256[]",
            description: "Array of token IDs",
          },
        ],
      },
      {
        function: "isApprovedForAll",
        signature: "isApprovedForAll(address owner, address operator)",
        params: [
          {
            name: "owner",
            type: "address",
            description: "Address of the owner",
          },
          {
            name: "operator",
            type: "address",
            description: "Address of the operator",
          },
        ],
      },
      {
        function: "supportsInterface",
        signature: "supportsInterface(bytes4 interfaceId)",
        params: [
          {
            name: "interfaceId",
            type: "bytes4",
            description: "Interface ID",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "TransferSingle",
      signature: "TransferSingle(address operator, address from, address to, uint256 id, uint256 value)",
      params: [
        {
          name: "operator",
          type: "address",
          description: "Address of the operator",
        },
        {
          name: "from",
          type: "address",
          description: "Address of the sender",
        },
        {
          name: "to",
          type: "address",
          description: "Address of the receiver",
        },
        {
          name: "id",
          type: "uint256",
          description: "ID of the token",
        },
        {
          name: "value",
          type: "uint256",
          description: "Amount of tokens",
        },
      ],
      content: [],
    },
    {
      function: "TransferBatch",
      signature: "TransferBatch(address operator, address from, address to, uint256[] ids, uint256[] values)",
      params: [
        {
          name: "operator",
          type: "address",
          description: "Address of the operator",
        },
        {
          name: "from",
          type: "address",
          description: "Address of the sender",
        },
        {
          name: "to",
          type: "address",
          description: "Address of the receiver",
        },
        {
          name: "ids",
          type: "uint256[]",
          description: "Array of token IDs",
        },
        {
          name: "values",
          type: "uint256[]",
          description: "Array of token amounts",
        },
      ],
      content: [],
    },
    {
      function: "ApprovalForAll",
      signature: "ApprovalForAll(address owner, address operator, bool approved)",
      params: [
        {
          name: "owner",
          type: "address",
          description: "Address of the owner",
        },
        {
          name: "operator",
          type: "address",
          description: "Address of the operator",
        },
        {
          name: "approved",
          type: "bool",
          description: "Whether the operator is approved",
        },
      ],
      content: [],
    },
    {
      function: "URI",
      signature: "URI(uint256 id)",
      params: [
        {
          name: "id",
          type: "uint256",
          description: "ID of the token",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "OpenZeppelin ERC1155 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc1155" },
    {
      title: "ERC1155: Fungible & Non-Fungible Tokens",
      url: "https://medium.com/coinmonks/erc-1155-fungible-non-fungible-tokens-321252c10227",
    },
    { title: "ERC1155 Implementation Tutorial", url: "https://www.youtube.com/watch?v=oJ32uQm_t84" },
    {
      title: "ERC1155 vs. ERC721",
      url: "https://www.coindesk.com/learn/2021/05/11/erc-721-vs-erc-1155-what-are-the-differences/",
    },
  ],
}

export default definition
