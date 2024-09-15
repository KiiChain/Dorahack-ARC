const definition: IContractDefinition = {
  name: "TieredDrop",
  description: `A smart contract that allows for the creation and management of tiered NFT drops, where different tiers of NFTs have different access levels and pricing.`,
  content: [
    { tag: "h1", content: "TieredDrop Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract allows you to create and manage NFT drops with different tiers, each offering unique benefits and access levels. It's perfect for projects that want to incentivize early adopters and offer exclusive perks to different segments of their community.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Create multiple tiers of NFTs with varying price points and access levels.</li>
                                <li>Manage the sale and distribution of NFTs across different tiers.</li>
                                <li>Control the minting process, including the number of NFTs available in each tier.</li>
                                <li>Implement whitelisting mechanisms for exclusive access to specific tiers.</li>
                                <li>Track the minting history and ownership of NFTs.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the TieredDrop contract, you'll need to deploy it and then configure the different tiers, pricing, and access levels. You can then use the contract's functions to mint NFTs, manage sales, and track ownership.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract utilizes a combination of ERC721 and ERC20 principles to handle the minting, ownership, and pricing of NFTs. It also leverages access control mechanisms to restrict access to certain functions based on user roles and tier memberships.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use a secure and audited smart contract development process.</li>
                                <li>Implement appropriate gas optimization techniques for efficient transactions.</li>
                                <li>Clearly document the functionality and usage of the contract.</li>
                                <li>Regularly update and audit the contract for vulnerabilities.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "constructor",
        signature: "constructor(string memory _name, string memory _symbol, uint256 _initialSupply)",
        params: [
          { name: "_name", type: "string" },
          { name: "_symbol", type: "string" },
          { name: "_initialSupply", type: "uint256" },
        ],
      },
      {
        function: "mint",
        signature: "mint(address to, uint256 tokenId)",
        params: [
          { name: "to", type: "address" },
          { name: "tokenId", type: "uint256" },
        ],
      },
      {
        function: "setBaseURI",
        signature: "setBaseURI(string memory _baseURI)",
        params: [{ name: "_baseURI", type: "string" }],
      },
      {
        function: "pause",
        signature: "pause()",
        params: [],
      },
      {
        function: "unpause",
        signature: "unpause()",
        params: [],
      },
      {
        function: "setMinter",
        signature: "setMinter(address _minter)",
        params: [{ name: "_minter", type: "address" }],
      },
      {
        function: "setSaleActive",
        signature: "setSaleActive(bool _saleActive)",
        params: [{ name: "_saleActive", type: "bool" }],
      },
      {
        function: "withdraw",
        signature: "withdraw()",
        params: [],
      },
      {
        function: "setTierPrice",
        signature: "setTierPrice(uint256 _tierId, uint256 _price)",
        params: [
          { name: "_tierId", type: "uint256" },
          { name: "_price", type: "uint256" },
        ],
      },
      {
        function: "setTierAccess",
        signature: "setTierAccess(uint256 _tierId, address[] memory _addresses)",
        params: [
          { name: "_tierId", type: "uint256" },
          { name: "_addresses", type: "address[]" },
        ],
      },
      {
        function: "mintTiered",
        signature: "mintTiered(uint256 _tierId, uint256 _quantity)",
        params: [
          { name: "_tierId", type: "uint256" },
          { name: "_quantity", type: "uint256" },
        ],
      },
    ],
    read: [
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
      {
        function: "totalSupply",
        signature: "totalSupply()",
        params: [],
      },
      {
        function: "ownerOf",
        signature: "ownerOf(uint256 tokenId)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "tokenURI",
        signature: "tokenURI(uint256 tokenId)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "baseURI",
        signature: "baseURI()",
        params: [],
      },
      {
        function: "paused",
        signature: "paused()",
        params: [],
      },
      {
        function: "minter",
        signature: "minter()",
        params: [],
      },
      {
        function: "saleActive",
        signature: "saleActive()",
        params: [],
      },
      {
        function: "tierPrice",
        signature: "tierPrice(uint256 _tierId)",
        params: [{ name: "_tierId", type: "uint256" }],
      },
      {
        function: "tierAccess",
        signature: "tierAccess(uint256 _tierId)",
        params: [{ name: "_tierId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "Transfer",
      signature: "Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
      params: [
        { name: "from", type: "address", indexed: true },
        { name: "to", type: "address", indexed: true },
        { name: "tokenId", type: "uint256", indexed: true },
      ],
      content: [{ tag: "p", content: "Emitted when tokens are transferred between accounts.", style: {} }],
    },
    {
      function: "Approval",
      signature: "Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
      params: [
        { name: "owner", type: "address", indexed: true },
        { name: "approved", type: "address", indexed: true },
        { name: "tokenId", type: "uint256", indexed: true },
      ],
      content: [
        { tag: "p", content: "Emitted when an approval to spend a token is given to another address.", style: {} },
      ],
    },
    {
      function: "ApprovalForAll",
      signature: "ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
      params: [
        { name: "owner", type: "address", indexed: true },
        { name: "operator", type: "address", indexed: true },
        { name: "approved", type: "bool" },
      ],
      content: [
        { tag: "p", content: "Emitted when an operator is approved or revoked for a token holder.", style: {} },
      ],
    },
    {
      function: "Paused",
      signature: "Paused(address account)",
      params: [{ name: "account", type: "address" }],
      content: [{ tag: "p", content: "Emitted when the contract is paused.", style: {} }],
    },
    {
      function: "Unpaused",
      signature: "Unpaused(address account)",
      params: [{ name: "account", type: "address" }],
      content: [{ tag: "p", content: "Emitted when the contract is unpaused.", style: {} }],
    },
    {
      function: "MinterUpdated",
      signature: "MinterUpdated(address indexed previousMinter, address indexed newMinter)",
      params: [
        { name: "previousMinter", type: "address", indexed: true },
        { name: "newMinter", type: "address", indexed: true },
      ],
      content: [{ tag: "p", content: "Emitted when the minter address is updated.", style: {} }],
    },
    {
      function: "SaleActiveUpdated",
      signature: "SaleActiveUpdated(bool indexed saleActive)",
      params: [{ name: "saleActive", type: "bool", indexed: true }],
      content: [{ tag: "p", content: "Emitted when the sale status is updated.", style: {} }],
    },
    {
      function: "TierPriceUpdated",
      signature: "TierPriceUpdated(uint256 indexed tierId, uint256 indexed price)",
      params: [
        { name: "tierId", type: "uint256", indexed: true },
        { name: "price", type: "uint256", indexed: true },
      ],
      content: [{ tag: "p", content: "Emitted when the price for a specific tier is updated.", style: {} }],
    },
    {
      function: "TierAccessUpdated",
      signature: "TierAccessUpdated(uint256 indexed tierId, address[] addresses)",
      params: [
        { name: "tierId", type: "uint256", indexed: true },
        { name: "addresses", type: "address[]" },
      ],
      content: [{ tag: "p", content: "Emitted when the access list for a specific tier is updated.", style: {} }],
    },
    {
      function: "TieredMint",
      signature: "TieredMint(address indexed minter, uint256 indexed tierId, uint256 indexed quantity)",
      params: [
        { name: "minter", type: "address", indexed: true },
        { name: "tierId", type: "uint256", indexed: true },
        { name: "quantity", type: "uint256", indexed: true },
      ],
      content: [{ tag: "p", content: "Emitted when NFTs are minted for a specific tier.", style: {} }],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "TieredDrop Contract on Etherscan", url: "https://etherscan.io/address/<contract_address>" },
    {
      title: "TieredDrop Contract Source Code on GitHub",
      url: "https://github.com/your-organization/tiered-drop-contract",
    },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/contracts/4.x/" },
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "Web3.js Documentation", url: "https://web3js.readthedocs.io/en/v1.x/" },
    { title: "Ethereum Development Resources", url: "https://ethereum.org/en/developers/" },
    {
      title: "Tiered Drops: A Guide to Building Inclusive and Equitable NFT Drops",
      url: "https://nft-drops.com/tiered-drops/",
    },
  ],
}

export default definition
