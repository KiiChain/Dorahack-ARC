const definition: IContractDefinition = {
  name: "IAirdropERC721",
  description: `Interface for an ERC721 contract with airdrop functionality.`,
  content: [
    { tag: "h1", content: "IAirdropERC721 Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions for an ERC721 contract that supports airdropping tokens to multiple recipients.",
      style: {},
    },
    { tag: "h2", content: "Functions", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>claim(uint256)</b>: Allows a recipient to claim their airdrop token by providing the unique claim ID.</li>
                                <li><b>airdrop(address[], uint256[])</b>: Allows an administrator to initiate an airdrop, distributing tokens to multiple recipients.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "claim",
        signature: "claim(uint256)",
        params: [
          {
            name: "claimId",
            type: "uint256",
            description: "The unique claim ID assigned to the recipient.",
          },
        ],
      },
      {
        function: "airdrop",
        signature: "airdrop(address[],uint256[])",
        params: [
          {
            name: "recipients",
            type: "address[]",
            description: "An array of addresses to receive airdrop tokens.",
          },
          {
            name: "tokenIds",
            type: "uint256[]",
            description: "An array of token IDs to be airdropped. The length must match the recipients array.",
          },
        ],
      },
    ],
    read: [],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenZeppelin ERC721 Contract Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    {
      title: "Airdrop Smart Contract Example (using ERC721)",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721Airdrop.sol",
    },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum Development Resources", url: "https://ethereum.org/en/developers/" },
  ],
}

export default definition
