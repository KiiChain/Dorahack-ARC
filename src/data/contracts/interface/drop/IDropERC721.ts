const definition: IContractDefinition = {
  name: "IDropERC721",
  description: `Interface for ERC721 Drop contracts`,
  content: [
    { tag: "h1", content: "IDropERC721 Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions required for ERC721 Drop contracts, which are contracts that allow for the minting of a collection of ERC721 tokens in a single drop.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Allows for the minting of a collection of ERC721 tokens in a single drop.</li>
                                <li>Provides functions for managing the minting process, including setting the drop start and end times.</li>
                                <li>Includes functions for getting information about the drop, such as the number of tokens minted and the remaining supply.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This interface can be implemented by any contract that wants to provide ERC721 Drop functionality. To use this interface, you will need to implement the functions defined in the interface.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "setClaimerProof",
        signature: "setClaimerProof(bytes32)",
        params: [
          {
            name: "proof",
            type: "bytes32",
          },
        ],
      },
      {
        function: "setMerkleRoot",
        signature: "setMerkleRoot(bytes32)",
        params: [
          {
            name: "merkleRoot_",
            type: "bytes32",
          },
        ],
      },
      {
        function: "setClaimConditions",
        signature: "setClaimConditions(uint256[],uint256[],uint256[],uint256[],address)",
        params: [
          {
            name: "startTimes",
            type: "uint256[]",
          },
          {
            name: "maxClaimCountPerTransaction",
            type: "uint256[]",
          },
          {
            name: "maxClaimCountPerWallet",
            type: "uint256[]",
          },
          {
            name: "prices",
            type: "uint256[]",
          },
          {
            name: "currency",
            type: "address",
          },
        ],
      },
      {
        function: "setQuantityLimitPerWallet",
        signature: "setQuantityLimitPerWallet(uint256)",
        params: [
          {
            name: "quantityLimit_",
            type: "uint256",
          },
        ],
      },
      {
        function: "setRevealURI",
        signature: "setRevealURI(string)",
        params: [
          {
            name: "revealURI_",
            type: "string",
          },
        ],
      },
      {
        function: "setBaseURI",
        signature: "setBaseURI(string)",
        params: [
          {
            name: "baseURI_",
            type: "string",
          },
        ],
      },
      {
        function: "setPrimarySaleRecipient",
        signature: "setPrimarySaleRecipient(address)",
        params: [
          {
            name: "recipient_",
            type: "address",
          },
        ],
      },
      {
        function: "setPlatformFeeRecipient",
        signature: "setPlatformFeeRecipient(address)",
        params: [
          {
            name: "recipient_",
            type: "address",
          },
        ],
      },
      {
        function: "setPlatformFee",
        signature: "setPlatformFee(uint256)",
        params: [
          {
            name: "fee_",
            type: "uint256",
          },
        ],
      },
      {
        function: "setMetadataURI",
        signature: "setMetadataURI(string)",
        params: [
          {
            name: "metadataURI_",
            type: "string",
          },
        ],
      },
      {
        function: "setPublicSale",
        signature: "setPublicSale(bool)",
        params: [
          {
            name: "sale_",
            type: "bool",
          },
        ],
      },
    ],
    read: [
      {
        function: "getClaimConditions",
        signature: "getClaimConditions()",
        params: [],
      },
      {
        function: "getClaimerProof",
        signature: "getClaimerProof()",
        params: [],
      },
      {
        function: "getMerkleRoot",
        signature: "getMerkleRoot()",
        params: [],
      },
      {
        function: "getQuantityLimitPerWallet",
        signature: "getQuantityLimitPerWallet()",
        params: [],
      },
      {
        function: "getRevealURI",
        signature: "getRevealURI()",
        params: [],
      },
      {
        function: "getBaseURI",
        signature: "getBaseURI()",
        params: [],
      },
      {
        function: "getPrimarySaleRecipient",
        signature: "getPrimarySaleRecipient()",
        params: [],
      },
      {
        function: "getPlatformFeeRecipient",
        signature: "getPlatformFeeRecipient()",
        params: [],
      },
      {
        function: "getPlatformFee",
        signature: "getPlatformFee()",
        params: [],
      },
      {
        function: "getMetadataURI",
        signature: "getMetadataURI()",
        params: [],
      },
      {
        function: "getPublicSale",
        signature: "getPublicSale()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "ClaimConditionsUpdated",
      signature: "ClaimConditionsUpdated(uint256[],uint256[],uint256[],uint256[],address)",
      params: [
        {
          name: "startTimes",
          type: "uint256[]",
        },
        {
          name: "maxClaimCountPerTransaction",
          type: "uint256[]",
        },
        {
          name: "maxClaimCountPerWallet",
          type: "uint256[]",
        },
        {
          name: "prices",
          type: "uint256[]",
        },
        {
          name: "currency",
          type: "address",
        },
      ],
      content: [
        {
          type: "text",
          content: "Emitted when the claim conditions are updated.",
        },
      ],
    },
    {
      function: "ClaimerProofUpdated",
      signature: "ClaimerProofUpdated(bytes32)",
      params: [
        {
          name: "proof",
          type: "bytes32",
        },
      ],
      content: [
        {
          type: "text",
          content: "Emitted when the claimer proof is updated.",
        },
      ],
    },
    {
      function: "MerkleRootUpdated",
      signature: "MerkleRootUpdated(bytes32)",
      params: [
        {
          name: "merkleRoot_",
          type: "bytes32",
        },
      ],
      content: [
        {
          type: "text",
          content: "Emitted when the merkle root is updated.",
        },
      ],
    },
    {
      function: "QuantityLimitPerWalletUpdated",
      signature: "QuantityLimitPerWalletUpdated(uint256)",
      params: [
        {
          name: "quantityLimit_",
          type: "uint256",
        },
      ],
      content: [
        {
          type: "text",
          content: "Emitted when the quantity limit per wallet is updated.",
        },
      ],
    },
    {
      function: "RevealURIUpdated",
      signature: "RevealURIUpdated(string)",
      params: [
        {
          name: "revealURI_",
          type: "string",
        },
      ],
      content: [
        {
          type: "text",
          content: "Emitted when the reveal URI is updated.",
        },
      ],
    },
    {
      function: "BaseURIUpdated",
      signature: "BaseURIUpdated(string)",
      params: [
        {
          name: "baseURI_",
          type: "string",
        },
      ],
      content: [
        {
          type: "text",
          content: "Emitted when the base URI is updated.",
        },
      ],
    },
    {
      function: "PrimarySaleRecipientUpdated",
      signature: "PrimarySaleRecipientUpdated(address)",
      params: [
        {
          name: "recipient_",
          type: "address",
        },
      ],
      content: [
        {
          type: "text",
          content: "Emitted when the primary sale recipient is updated.",
        },
      ],
    },
    {
      function: "PlatformFeeRecipientUpdated",
      signature: "PlatformFeeRecipientUpdated(address)",
      params: [
        {
          name: "recipient_",
          type: "address",
        },
      ],
      content: [
        {
          type: "text",
          content: "Emitted when the platform fee recipient is updated.",
        },
      ],
    },
    {
      function: "PlatformFeeUpdated",
      signature: "PlatformFeeUpdated(uint256)",
      params: [
        {
          name: "fee_",
          type: "uint256",
        },
      ],
      content: [
        {
          type: "text",
          content: "Emitted when the platform fee is updated.",
        },
      ],
    },
    {
      function: "MetadataURIUpdated",
      signature: "MetadataURIUpdated(string)",
      params: [
        {
          name: "metadataURI_",
          type: "string",
        },
      ],
      content: [
        {
          type: "text",
          content: "Emitted when the metadata URI is updated.",
        },
      ],
    },
    {
      function: "PublicSaleUpdated",
      signature: "PublicSaleUpdated(bool)",
      params: [
        {
          name: "sale_",
          type: "bool",
        },
      ],
      content: [
        {
          type: "text",
          content: "Emitted when the public sale status is updated.",
        },
      ],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenZeppelin ERC721 Contract Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    {
      title: "Understanding ERC721: A Guide to Non-Fungible Tokens",
      url: "https://medium.com/crypto-news/understanding-erc721-a-guide-to-non-fungible-tokens-7118c82f2114",
    },
    {
      title: "ERC721 Interface Documentation",
      url: "https://ethereum.org/en/developers/docs/standards/tokens/erc-721/",
    },
    {
      title: "Building an ERC721 NFT Contract: A Beginner's Guide",
      url: "https://medium.com/coinmonks/building-an-erc721-nft-contract-a-beginners-guide-9c876373072d",
    },
    { title: "Solidity by Example: ERC721 (NFT)", url: "https://solidity-by-example.org/erc721/" },
    {
      title: "NFT Smart Contract Development: A Comprehensive Guide",
      url: "https://www.blockchain.com/developers/docs/guides/nft-smart-contract-development",
    },
    {
      title: "NFT Smart Contracts: A Beginner's Guide to Development",
      url: "https://www.moralis.io/blog/nft-smart-contracts/",
    },
  ],
}

export default definition
