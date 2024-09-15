const definition: IContractDefinition = {
  name: "IAirdropERC721Claimable",
  description: `Interface for ERC721 airdrop contracts that allow claiming of tokens.`,
  content: [
    { tag: "h1", content: "IAirdropERC721Claimable Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the basic functions required for ERC721 airdrop contracts that allow users to claim their tokens. It ensures compatibility and interoperability across different airdrop implementations.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
            <li>Defines functions for claiming tokens based on a user's eligibility criteria.</li>
            <li>Provides a way to query the claim status of a user.</li>
            <li>Allows for checking the total number of tokens available for airdrop.</li>
        `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "Any ERC721 airdrop contract that implements this interface can be used to distribute tokens to eligible users. Users can interact with the contract to claim their tokens. ",
      style: {},
    },
    { tag: "h2", content: "Implementation", style: {} },
    {
      tag: "p",
      content:
        "Contracts implementing this interface must define the specified functions and ensure they behave according to the defined logic. Developers can build upon this interface to add more specific functionalities and features tailored to their particular airdrop needs.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "claim",
        signature: "claim()",
        params: [],
      },
      {
        function: "claimFor",
        signature: "claimFor(address)",
        params: [
          {
            name: "recipient",
            type: "address",
          },
        ],
      },
    ],
    read: [
      {
        function: "totalClaimable",
        signature: "totalClaimable()",
        params: [],
      },
      {
        function: "claimable",
        signature: "claimable(address)",
        params: [
          {
            name: "recipient",
            type: "address",
          },
        ],
      },
      {
        function: "isClaimed",
        signature: "isClaimed(address)",
        params: [
          {
            name: "recipient",
            type: "address",
          },
        ],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenZeppelin ERC721 Implementation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    { title: "Airdrop Basics", url: "https://www.investopedia.com/terms/a/airdrop.asp" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum Development Tutorials", url: "https://ethereum.org/en/developers/" },
    { title: "Web3.js Documentation", url: "https://web3js.readthedocs.io/en/v1.x/" },
    { title: "Hardhat Framework", url: "https://hardhat.org/" },
  ],
}

export default definition
