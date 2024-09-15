const definition: IContractDefinition = {
  name: "StakeManager",
  description: `StakeManager contract for managing staking and rewards.`,
  content: [
    { tag: "h1", content: "StakeManager Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract allows users to stake tokens and earn rewards. It includes functionalities for managing staking pools, distributing rewards, and withdrawing staked tokens.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Staking and unstaking tokens</li>
                                <li>Earning rewards based on staked amount and time</li>
                                <li>Managing multiple staking pools with different reward distributions</li>
                                <li>Claiming accumulated rewards</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "To use the StakeManager contract, users can interact with the following functions:",
      style: {},
    },
    {
      tag: "ul",
      content: `
                                <li><strong>stake(uint256 amount, uint256 poolId):</strong> Stakes tokens into a specified pool.</li>
                                <li><strong>unstake(uint256 amount, uint256 poolId):</strong> Unstakes tokens from a specified pool.</li>
                                <li><strong>claimRewards(uint256 poolId):</strong> Claims accumulated rewards for a specific pool.</li>
                                <li><strong>getRewards(address user, uint256 poolId):</strong> Retrieves the accumulated rewards for a user in a pool.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The StakeManager contract utilizes a reward distribution mechanism that can be customized for different staking pools. It employs time-based calculations to determine rewards, and it ensures that rewards are distributed fairly among all stakers.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure proper access control and security measures for the contract.</li>
                                <li>Implement a robust reward calculation mechanism to prevent potential exploitation.</li>
                                <li>Consider using time-locked mechanisms for reward distribution to prevent sudden price fluctuations.</li>
                                <li>Perform thorough testing before deploying the contract to a live network.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "stake",
        signature: "stake(uint256,uint256)",
        params: [
          { name: "amount", type: "uint256" },
          { name: "poolId", type: "uint256" },
        ],
      },
      {
        function: "unstake",
        signature: "unstake(uint256,uint256)",
        params: [
          { name: "amount", type: "uint256" },
          { name: "poolId", type: "uint256" },
        ],
      },
      {
        function: "claimRewards",
        signature: "claimRewards(uint256)",
        params: [{ name: "poolId", type: "uint256" }],
      },
      {
        function: "updateRewards",
        signature: "updateRewards(uint256)",
        params: [{ name: "poolId", type: "uint256" }],
      },
    ],
    read: [
      {
        function: "getRewards",
        signature: "getRewards(address,uint256)",
        params: [
          { name: "user", type: "address" },
          { name: "poolId", type: "uint256" },
        ],
      },
      {
        function: "getPoolInfo",
        signature: "getPoolInfo(uint256)",
        params: [{ name: "poolId", type: "uint256" }],
      },
      {
        function: "getStakeInfo",
        signature: "getStakeInfo(address,uint256)",
        params: [
          { name: "user", type: "address" },
          { name: "poolId", type: "uint256" },
        ],
      },
    ],
  },
  events: [
    {
      function: "Staked",
      signature: "Staked(address,uint256,uint256)",
      params: [
        { name: "user", type: "address" },
        { name: "amount", type: "uint256" },
        { name: "poolId", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a user stakes tokens.", style: {} }],
    },
    {
      function: "Unstaked",
      signature: "Unstaked(address,uint256,uint256)",
      params: [
        { name: "user", type: "address" },
        { name: "amount", type: "uint256" },
        { name: "poolId", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a user unstakes tokens.", style: {} }],
    },
    {
      function: "RewardsClaimed",
      signature: "RewardsClaimed(address,uint256,uint256)",
      params: [
        { name: "user", type: "address" },
        { name: "amount", type: "uint256" },
        { name: "poolId", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a user claims their rewards.", style: {} }],
    },
    {
      function: "RewardsUpdated",
      signature: "RewardsUpdated(uint256)",
      params: [{ name: "poolId", type: "uint256" }],
      content: [{ tag: "p", content: "Emitted when the rewards for a pool are updated.", style: {} }],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "StakeManager Contract on Etherscan", url: "https://etherscan.io/address/<ContractAddress>" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum.org Documentation", url: "https://ethereum.org/en/developers/docs/" },
    {
      title: "Stack Overflow (Search for 'StakeManager Smart Contract')",
      url: "https://stackoverflow.com/questions/tagged/smart-contract",
    },
    {
      title: "GitHub (Search for 'StakeManager Smart Contract')",
      url: "https://github.com/search?q=StakeManager+Smart+Contract",
    },
    { title: "CryptoZombies", url: "https://cryptozombies.io/" },
  ],
}

export default definition
