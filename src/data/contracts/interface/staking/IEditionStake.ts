const definition: IContractDefinition = {
  name: "IEditionStake",
  description: `Interface for Edition Stake contract.`,
  content: [
    { tag: "h1", content: "IEditionStake Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions and events for an Edition Stake contract. It allows for the staking of editions, providing incentives for users to hold and support the project.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Staking of Editions: Allows users to stake their editions to earn rewards.</li>
                                <li>Reward Distribution: Defines the mechanism for distributing rewards to stakers.</li>
                                <li>Stake Management: Provides functions to manage stakes, such as depositing, withdrawing, and claiming rewards.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This interface can be implemented by a smart contract to create an Edition Stake system. It provides the necessary functions and events for users to interact with the system and manage their stakes.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The implementing contract should implement the functions defined in this interface. It should also handle the logic for reward distribution and stake management. It's important to consider security and efficiency when implementing the contract.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure the contract is secure by using best practices for smart contract development.</li>
                                <li>Implement efficient reward distribution mechanisms to minimize gas costs.</li>
                                <li>Use clear and concise naming conventions for functions and variables.</li>
                                <li>Document the contract thoroughly to explain its functionality and usage.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "stake",
        signature: "stake(uint256)",
        params: [{ name: "editionId", type: "uint256" }],
      },
      {
        function: "unstake",
        signature: "unstake(uint256)",
        params: [{ name: "editionId", type: "uint256" }],
      },
      {
        function: "claimRewards",
        signature: "claimRewards()",
        params: [],
      },
    ],
    read: [
      {
        function: "getStake",
        signature: "getStake(address)",
        params: [{ name: "user", type: "address" }],
      },
      {
        function: "getRewards",
        signature: "getRewards(address)",
        params: [{ name: "user", type: "address" }],
      },
      {
        function: "getStakeDuration",
        signature: "getStakeDuration(uint256)",
        params: [{ name: "editionId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "Staked",
      signature: "Staked(address,uint256)",
      params: [
        { name: "user", type: "address" },
        { name: "editionId", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "Unstaked",
      signature: "Unstaked(address,uint256)",
      params: [
        { name: "user", type: "address" },
        { name: "editionId", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "RewardsClaimed",
      signature: "RewardsClaimed(address,uint256)",
      params: [
        { name: "user", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "IEditionStake Smart Contract Documentation (GitHub)", url: "https://github.com/0xProject/IEditionStake" },
    { title: "IEditionStake Contract on Etherscan", url: "https://etherscan.io/address/CONTRACT_ADDRESS" },
    { title: "0x Project Website", url: "https://0x.org/" },
    { title: "0x Project Documentation", url: "https://docs.0x.org/" },
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
  ],
}

export default definition
