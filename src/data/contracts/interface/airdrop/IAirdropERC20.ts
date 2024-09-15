const definition: IContractDefinition = {
  name: "IAirdropERC20",
  description: `Interface for an ERC20 contract that can be used for airdrops.`,
  content: [
    { tag: "h1", content: "IAirdropERC20 Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions necessary for an ERC20 contract to be used for airdrops. It includes functions for claiming airdropped tokens and retrieving airdrop information.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Provides a standard interface for airdrop functionality in ERC20 contracts.</li>
                                <li>Simplifies the process of integrating airdrops into existing ERC20 contracts.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use this interface, simply inherit it in your ERC20 contract and implement the required functions. This allows users to claim their airdropped tokens and provides a consistent way to interact with airdrop functionality across different ERC20 contracts.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The implementation of this interface will vary depending on the specific needs of the airdrop. For example, the `claimAirdrop` function may require users to provide a unique identifier or perform some specific action to claim their tokens. The `getAirdropInfo` function should return information about the airdrop, such as the total number of tokens available, the claiming deadline, and any other relevant details.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "p",
      content:
        "When implementing this interface, consider using a safe math library to prevent potential integer overflow or underflow errors. You should also ensure that the `getAirdropInfo` function returns accurate and up-to-date information about the airdrop.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "claimAirdrop",
        signature: "claimAirdrop()",
        params: [],
      },
    ],
    read: [
      {
        function: "getAirdropInfo",
        signature: "getAirdropInfo()",
        params: [],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    {
      title: "OpenZeppelin ERC20 Contract",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol",
    },
    { title: "Airdrop Tutorial", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    {
      title: "Smart Contract Security Best Practices",
      url: "https://consensys.net/blog/smart-contract-security-best-practices/",
    },
    { title: "Hardhat Tutorial", url: "https://hardhat.org/tutorial/" },
    { title: "Truffle Tutorial", url: "https://truffleframework.com/docs/truffle/getting-started/" },
  ],
}

export default definition
