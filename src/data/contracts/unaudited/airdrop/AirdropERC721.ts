const definition: IContractDefinition = {
  name: "AirdropERC721",
  description: `AirdropERC721 contract allows to airdrop ERC721 tokens to a list of addresses.`,
  content: [
    { tag: "h1", content: "AirdropERC721 Contract", style: {} },
    {
      tag: "p",
      content:
        "The AirdropERC721 contract is a smart contract that allows for the distribution of ERC721 tokens to a list of addresses. It simplifies the process of airdropping NFTs, providing a secure and efficient way to distribute tokens.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Airdrop ERC721 tokens to a list of addresses</li>
                                <li>Set the quantity of tokens to airdrop to each address</li>
                                <li>Control the airdrop process through an owner role</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: `1. Deploy the AirdropERC721 contract.
                                2. Set the ERC721 token address to be airdropped.
                                3. Provide the list of addresses to receive tokens and the corresponding quantities.
                                4. Execute the airdrop function to distribute the tokens.`,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The AirdropERC721 contract is implemented using the ERC721 standard and leverages the `safeTransferFrom` function to transfer tokens securely. The contract includes an owner role to manage the airdrop process, ensuring controlled distribution.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use a reputable and audited ERC721 contract as the source of tokens.</li>
                                <li>Ensure the list of addresses and token quantities are accurate before executing the airdrop.</li>
                                <li>Implement appropriate security measures to prevent unauthorized access and manipulation of the airdrop process.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "constructor",
        signature: "constructor(address _erc721TokenAddress)",
        params: [{ name: "_erc721TokenAddress", type: "address" }],
      },
      {
        function: "setERC721TokenAddress",
        signature: "setERC721TokenAddress(address _erc721TokenAddress)",
        params: [{ name: "_erc721TokenAddress", type: "address" }],
      },
      {
        function: "airdrop",
        signature: "airdrop(address[] memory _addresses, uint256[] memory _quantities)",
        params: [
          { name: "_addresses", type: "address[]" },
          { name: "_quantities", type: "uint256[]" },
        ],
      },
    ],
    read: [
      {
        function: "erc721TokenAddress",
        signature: "erc721TokenAddress()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "Airdrop",
      signature: "Airdrop(address indexed _receiver, uint256 _quantity)",
      params: [
        { name: "_receiver", type: "address" },
        { name: "_quantity", type: "uint256" },
      ],
      content: [
        {
          tag: "p",
          content: "Emitted when tokens are airdropped to an address.",
          style: {},
        },
      ],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC-721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenZeppelin ERC721 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    { title: "Airdrop Smart Contract Tutorial", url: "https://www.youtube.com/watch?v=y8F0Qv0W6cI" },
    {
      title: "How to Create an Airdrop Smart Contract",
      url: "https://medium.com/coinmonks/how-to-create-an-airdrop-smart-contract-on-ethereum-665f7a8d95e4",
    },
    {
      title: "Airdrop Smart Contract Example",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721Airdrop.sol",
    },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Remix IDE", url: "https://remix.ethereum.org/" },
    { title: "Ethers.js Documentation", url: "https://docs.ethers.io/v5/" },
  ],
}

export default definition
