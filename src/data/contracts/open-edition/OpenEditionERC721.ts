const definition: IContractDefinition = {
  name: "OpenEditionERC721",
  description: `OpenEditionERC721 is an ERC-721 contract designed for creating and managing open editions of NFTs, where each NFT is a unique token with its own attributes but can be minted multiple times, allowing for unlimited copies of the same artwork. This contract enables creators to sell and distribute their art through the blockchain, while also giving collectors a way to own and trade these digital assets.`,
  content: [
    { tag: "h1", content: "OpenEditionERC721 Contract", style: {} },
    {
      tag: "p",
      content:
        "The OpenEditionERC721 contract provides a framework for creating and managing open editions of NFTs. This means that any NFT can be minted an unlimited number of times, each with its own unique attributes and ownership information. This allows for more accessible and widespread distribution of digital art.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Open Editions:** Enables the creation of NFTs that can be minted multiple times, allowing for unlimited copies of the same artwork.</li>
                                <li>**Unique Attributes:** Each NFT in an open edition has its own unique set of attributes, making it distinguishable from other copies.</li>
                                <li>**ERC-721 Standard:** Complies with the ERC-721 standard for non-fungible tokens, ensuring compatibility with various NFT marketplaces and wallets.</li>
                                <li>**Minting Control:** Allows the creator to control the minting process, including setting a maximum number of mintable NFTs.</li>
                                <li>**Ownership Management:** Tracks the ownership of each NFT, enabling transfer and secondary market trading.</li>
                                <li>**Royalty Implementation:** Supports royalty payments to the creator on secondary sales, ensuring ongoing revenue generation.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the OpenEditionERC721 contract, you need to deploy it to a blockchain and then interact with it through a smart contract wallet or dapp. Here's a basic outline of the usage:",
      style: {},
    },
    {
      tag: "ol",
      content: `
                                <li>**Deploy the Contract:** Deploy the OpenEditionERC721 contract to your desired blockchain network using a smart contract deployment tool.</li>
                                <li>**Set up the Collection:** Configure the contract with essential details, such as the name, symbol, and initial supply of the collection.</li>
                                <li>**Mint NFTs:** Use the contract's minting functions to create new NFTs in the open edition, assigning unique attributes to each.</li>
                                <li>**Transfer NFTs:** Transfer ownership of NFTs to buyers or other collectors using the contract's transfer functions.</li>
                                <li>**Manage Royalties:** Set up royalty payments for secondary sales and ensure the creator receives their share of the revenue.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Example", style: {} },
    {
      tag: "p",
      content: "Here's an example of how you can use the contract to create and mint a new open edition NFT:",
      style: {},
    },
    {
      tag: "code",
      content: `
                                // Import the OpenEditionERC721 contract
                                import { OpenEditionERC721 } from "./OpenEditionERC721.sol";

                                // Create a new instance of the contract
                                const openEdition = new OpenEditionERC721("My Open Edition", "MOE");

                                // Mint a new NFT with unique attributes
                                await openEdition.mint(
                                    "0x1234567890abcdef...", // Recipient address
                                    {
                                        name: "My NFT",
                                        description: "A unique digital artwork",
                                        image: "https://example.com/image.jpg" 
                                    }
                                );
                            `,
      style: { backgroundColor: "#f0f0f0", padding: "10px" },
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The OpenEditionERC721 contract is implemented using Solidity, a programming language specifically designed for smart contracts. It utilizes the ERC-721 standard for non-fungible tokens, ensuring compatibility with other NFT platforms and tools. The core functionality of the contract includes:",
      style: {},
    },
    {
      tag: "ul",
      content: `
                                <li>**Token URI:** Implementation of the 'tokenURI' function to provide metadata for each NFT, which can be accessed by NFT marketplaces and viewers.</li>
                                <li>**Minting:**  The 'mint' function allows the creator to create new NFTs in the open edition. This function takes the recipient address and attributes of the NFT as input.</li>
                                <li>**Ownership Transfer:** The 'transferFrom' function facilitates the transfer of NFT ownership from one address to another.</li>
                                <li>**Royalties:**  The contract supports royalty payments on secondary sales, allowing the creator to receive a percentage of the transaction value.</li>
                                <li>**SafeMint:**  Includes a 'safeMint' function for safer and more efficient minting.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "p",
      content:
        "To ensure the security and functionality of your OpenEditionERC721 contract, follow these best practices:",
      style: {},
    },
    {
      tag: "ul",
      content: `
                                <li>**Security Audits:** Conduct thorough security audits of the contract code before deploying it to a live network.</li>
                                <li>**Gas Optimization:** Optimize the code for gas efficiency to minimize transaction costs.</li>
                                <li>**Access Control:** Implement access control mechanisms to restrict certain functions to authorized users.</li>
                                <li>**Testing:**  Thoroughly test the contract in a development environment before deploying to the mainnet.</li>
                                <li>**Documentation:** Provide clear and comprehensive documentation for the contract, explaining its functionality and usage.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "mint",
        signature: "mint(address,string,string,string)",
        params: [
          { name: "to", type: "address" },
          { name: "name", type: "string" },
          { name: "description", type: "string" },
          { name: "image", type: "string" },
        ],
      },
      {
        function: "safeMint",
        signature: "safeMint(address,string,string,string)",
        params: [
          { name: "to", type: "address" },
          { name: "name", type: "string" },
          { name: "description", type: "string" },
          { name: "image", type: "string" },
        ],
      },
      {
        function: "transferFrom",
        signature: "transferFrom(address,address,uint256)",
        params: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "tokenId", type: "uint256" },
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
        function: "tokenURI",
        signature: "tokenURI(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "balanceOf",
        signature: "balanceOf(address)",
        params: [{ name: "owner", type: "address" }],
      },
      {
        function: "ownerOf",
        signature: "ownerOf(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "Transfer",
      signature: "Transfer(address,address,uint256)",
      params: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "Approval",
      signature: "Approval(address,address,uint256)",
      params: [
        { name: "owner", type: "address" },
        { name: "approved", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "ApprovalForAll",
      signature: "ApprovalForAll(address,address,bool)",
      params: [
        { name: "owner", type: "address" },
        { name: "operator", type: "address" },
        { name: "approved", type: "bool" },
      ],
      content: [],
    },
  ],
  extensions: [
    {
      name: "ERC721",
      description: "ERC-721 Standard for Non-Fungible Tokens",
      source: "https://eips.ethereum.org/EIPS/eip-721",
    },
  ],
  license: "MIT",

  resources: [
    { title: "OpenZeppelin ERC721 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenSea Blog: Understanding ERC721", url: "https://blog.opensea.io/understanding-erc721-tokens/" },
    {
      title: "Ethereum.org: ERC721 Non-Fungible Tokens",
      url: "https://ethereum.org/en/developers/docs/standards/tokens/erc-721/",
    },
    { title: "CryptoZombies: Learn to Code Smart Contracts", url: "https://cryptozombies.io/" },
    { title: "Solidity by Example: ERC721", url: "https://solidity-by-example.org/erc721/" },
    { title: "Building a Simple ERC721 NFT Contract with Hardhat", url: "https://www.youtube.com/watch?v=j4767r-Xv60" },
    { title: "Create Your First NFT with Solidity and Hardhat", url: "https://www.youtube.com/watch?v=xP71_W9u_7E" },
    { title: "OpenEdition: ERC721 Smart Contract (Github)", url: "https://github.com/OpenEdition/ERC721" },
    { title: "OpenEdition Documentation", url: "https://docs.openedition.org/" },
  ],
}

export default definition
