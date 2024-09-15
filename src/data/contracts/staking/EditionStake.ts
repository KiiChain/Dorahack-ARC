const definition: IContractDefinition = {
  name: "EditionStake",
  description: `A contract that allows users to stake their Editions and earn rewards.`,
  content: [
    { tag: "h1", content: "EditionStake Contract", style: {} },
    {
      tag: "p",
      content:
        "The EditionStake contract enables users to stake their Editions and earn rewards. Staking involves locking up Editions for a specific duration, allowing users to participate in governance or earn rewards based on the contract's mechanism.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Stake Editions to earn rewards</li>
                                <li>Unstake Editions at any time</li>
                                <li>View staking history and rewards earned</li>
                                <li>Access governance rights based on stake amount</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the EditionStake contract, users need to interact with its functions. First, users approve the contract to spend their Editions. Then, they can stake their Editions by calling the `stake` function, specifying the number of Editions to stake and the duration. To unstake, users can call the `unstake` function.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract utilizes a mapping to store the staking information for each user. It tracks the amount staked, the time of staking, and the rewards earned. The contract also implements a reward distribution mechanism based on the total amount staked and a defined reward rate.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure proper security measures are implemented to protect user funds.</li>
                                <li>Clearly document the reward mechanism and governance rights.</li>
                                <li>Implement a mechanism to handle potential bugs or vulnerabilities.</li>
                                <li>Consider using a trusted audit service to review the contract's security.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "stake",
        signature: "stake(uint256)",
        params: [{ name: "amount", type: "uint256" }],
      },
      {
        function: "unstake",
        signature: "unstake(uint256)",
        params: [{ name: "amount", type: "uint256" }],
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
    ],
  },
  events: [
    {
      function: "Staked",
      signature: "Staked(address,uint256)",
      params: [
        { name: "user", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a user stakes their Editions.", style: {} }],
    },
    {
      function: "Unstaked",
      signature: "Unstaked(address,uint256)",
      params: [
        { name: "user", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a user unstakes their Editions.", style: {} }],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "EditionStake Documentation (Github)",
      url: "https://github.com/EditionStake/editionstake-contracts/blob/main/contracts/EditionStake.sol",
    },
    {
      title: "EditionStake on Etherscan",
      url: "https://etherscan.io/address/0x831149D1B18371482d07f5343E5d910D1439828D",
    },
    { title: "EditionStake Medium Blog", url: "https://medium.com/@EditionStake" },
    { title: "EditionStake Twitter", url: "https://twitter.com/EditionStake" },
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenZeppelin ERC721 Contract", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
  ],
}

export default definition
