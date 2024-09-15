const definition: IContractDefinition = {
  name: "DropERC721",
  description: `A contract for managing a collection of non-fungible tokens (NFTs) with a drop mechanism.`,
  content: [
    { tag: "h1", content: "DropERC721 Contract", style: {} },
    {
      tag: "p",
      content:
        "The DropERC721 contract enables the creation and management of a collection of ERC721 NFTs with a drop mechanism. This means that tokens are initially unavailable and are only released at a specific point in time. This is useful for creating limited-edition collections or managing the release of NFTs over time.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Drop Mechanism:** Allows for controlled release of NFTs at a specified time.</li>
                                <li>**Minting Functionality:** Enables the creation of new NFTs within the collection.</li>
                                <li>**Claim Functionality:** Provides a mechanism for users to claim their NFTs after the drop.</li>
                                <li>**ERC721 Compliance:** Adheres to the ERC721 standard for non-fungible tokens.</li>
                                <li>**Base URI Management:** Allows for setting and updating the base URI for token metadata.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the DropERC721 contract, you can interact with it through its public functions. Here are some key examples:",
      style: {},
    },
    {
      tag: "ul",
      content:
        `
                                <li>**` +
        "`" +
        `initializeDrop(uint256 _maxTotalMintable)` +
        "`" +
        `: Set the maximum number of NFTs that can be minted in the collection.</li>
                                <li>**` +
        "`" +
        `setBaseURI(string memory _baseURI)` +
        "`" +
        `: Set the base URI for token metadata.</li>
                                <li>**` +
        "`" +
        `startDrop()` +
        "`" +
        `: Start the drop, making NFTs claimable.</li>
                                <li>**` +
        "`" +
        `claim()` +
        "`" +
        `: Claim an NFT from the collection. This can be called by users after the drop has started.</li>
                                <li>**` +
        "`" +
        `mint()` +
        "`" +
        `: Mint a new NFT (can be called by the owner of the contract). This function is typically used to add additional NFTs to the collection after the drop has started.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The DropERC721 contract is implemented using the ERC721 standard. It includes functions for minting, transferring, and managing NFTs. The drop mechanism is implemented through the ` + '`' + `_dropStarted` + '`' + ` variable, which indicates whether the drop has started. ",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content:
        `
                                <li>Ensure sufficient gas for the ` +
        "`" +
        `claim()` +
        "`" +
        ` function, as the transaction might require a significant amount of gas.</li>
                                <li>Consider implementing a whitelist or allowlist mechanism for controlled access to the drop.</li>
                                <li>Test the contract thoroughly before deploying it to a live network.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "initializeDrop",
        signature: "initializeDrop(uint256)",
        params: [
          {
            name: "_maxTotalMintable",
            type: "uint256",
            description: "Maximum number of NFTs mintable in the collection.",
          },
        ],
      },
      {
        function: "setBaseURI",
        signature: "setBaseURI(string)",
        params: [
          {
            name: "_baseURI",
            type: "string",
            description: "Base URI for token metadata.",
          },
        ],
      },
      {
        function: "startDrop",
        signature: "startDrop()",
        params: [],
      },
      {
        function: "claim",
        signature: "claim()",
        params: [],
      },
      {
        function: "mint",
        signature: "mint()",
        params: [],
      },
    ],
    read: [
      {
        function: "maxTotalMintable",
        signature: "maxTotalMintable()",
        params: [],
      },
      {
        function: "baseURI",
        signature: "baseURI()",
        params: [],
      },
      {
        function: "dropStarted",
        signature: "dropStarted()",
        params: [],
      },
      {
        function: "totalSupply",
        signature: "totalSupply()",
        params: [],
      },
      {
        function: "tokenURI",
        signature: "tokenURI(uint256)",
        params: [
          {
            name: "tokenId",
            type: "uint256",
            description: "Token ID",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "Transfer",
      signature: "Transfer(address,address,uint256)",
      params: [
        {
          name: "from",
          type: "address",
          description: "From address",
        },
        {
          name: "to",
          type: "address",
          description: "To address",
        },
        {
          name: "tokenId",
          type: "uint256",
          description: "Token ID",
        },
      ],
      content: [],
    },
    {
      function: "Approval",
      signature: "Approval(address,address,uint256)",
      params: [
        {
          name: "owner",
          type: "address",
          description: "Owner address",
        },
        {
          name: "approved",
          type: "address",
          description: "Approved address",
        },
        {
          name: "tokenId",
          type: "uint256",
          description: "Token ID",
        },
      ],
      content: [],
    },
    {
      function: "ApprovalForAll",
      signature: "ApprovalForAll(address,address,bool)",
      params: [
        {
          name: "owner",
          type: "address",
          description: "Owner address",
        },
        {
          name: "operator",
          type: "address",
          description: "Operator address",
        },
        {
          name: "approved",
          type: "bool",
          description: "Approval status",
        },
      ],
      content: [],
    },
    {
      function: "DropStarted",
      signature: "DropStarted()",
      params: [],
      content: [],
    },
    {
      function: "Minted",
      signature: "Minted(address,uint256)",
      params: [
        {
          name: "to",
          type: "address",
          description: "Minted to address",
        },
        {
          name: "tokenId",
          type: "uint256",
          description: "Token ID",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenZeppelin ERC721 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    { title: "Drop Contract Overview", url: "https://docs.openzeppelin.com/contracts/4.x/drop" },
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "OpenZeppelin Merkle Proof Library", url: "https://docs.openzeppelin.com/contracts/4.x/merkle-proof" },
    { title: "OpenZeppelin Access Control Library", url: "https://docs.openzeppelin.com/contracts/4.x/access-control" },
    { title: "Ethereum.org - Smart Contracts", url: "https://ethereum.org/en/developers/docs/smart-contracts/" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Remix IDE", url: "https://remix.ethereum.org/" },
    { title: "Hardhat Documentation", url: "https://hardhat.org/guides/getting-started" },
    { title: "Truffle Documentation", url: "https://www.trufflesuite.com/docs/truffle/" },
    { title: "Ethers.js Documentation", url: "https://docs.ethers.io/v5/" },
    { title: "Web3.js Documentation", url: "https://web3js.readthedocs.io/en/v1.x/" },
  ],
}

export default definition
