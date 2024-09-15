const definition: IContractDefinition = {
  name: "INFTStake",
  description: `A contract for staking NFTs and earning rewards.`,
  content: [
    { tag: "h1", content: "INFTStake Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract allows users to stake their NFTs to earn rewards. The rewards are distributed based on the staked NFT's rarity and the duration of the staking period.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Stake NFTs to earn rewards.</li>
                                <li>Unstake NFTs at any time.</li>
                                <li>View the current staking balance.</li>
                                <li>Claim accumulated rewards.</li>
                                <li>View the list of supported NFTs.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the INFTStake contract, first, you need to approve the contract to spend your NFTs. Once approved, you can stake your NFTs by calling the `stake` function. To unstake your NFTs, call the `unstake` function. You can also view your current staking balance and claim your accumulated rewards using the `getBalance` and `claimRewards` functions, respectively. ",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses a mapping to store the staking balances for each user and their staked NFTs. The rewards are calculated based on the rarity of the NFT and the duration of the staking period.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure that the contract is thoroughly tested before deploying it to a live network.</li>
                                <li>Use a secure random number generator to determine the reward distribution.</li>
                                <li>Consider using a multisig wallet to control the funds of the contract.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "stake",
        signature: "stake(uint256 tokenId)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "unstake",
        signature: "unstake(uint256 tokenId)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "claimRewards",
        signature: "claimRewards()",
        params: [],
      },
      {
        function: "setRewardsPerDay",
        signature: "setRewardsPerDay(uint256 _rewardsPerDay)",
        params: [{ name: "_rewardsPerDay", type: "uint256" }],
      },
    ],
    read: [
      {
        function: "getBalance",
        signature: "getBalance(address user)",
        params: [{ name: "user", type: "address" }],
      },
      {
        function: "getRewardsPerDay",
        signature: "getRewardsPerDay()",
        params: [],
      },
      {
        function: "getStakedTokens",
        signature: "getStakedTokens(address user)",
        params: [{ name: "user", type: "address" }],
      },
      {
        function: "getUnclaimedRewards",
        signature: "getUnclaimedRewards(address user)",
        params: [{ name: "user", type: "address" }],
      },
    ],
  },
  events: [
    {
      function: "Staked",
      signature: "Staked(address indexed user, uint256 tokenId)",
      params: [
        { name: "user", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a user stakes an NFT.", style: {} }],
    },
    {
      function: "Unstaked",
      signature: "Unstaked(address indexed user, uint256 tokenId)",
      params: [
        { name: "user", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a user unstakes an NFT.", style: {} }],
    },
    {
      function: "RewardsClaimed",
      signature: "RewardsClaimed(address indexed user, uint256 amount)",
      params: [
        { name: "user", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a user claims their rewards.", style: {} }],
    },
    {
      function: "RewardsPerDayUpdated",
      signature: "RewardsPerDayUpdated(uint256 _rewardsPerDay)",
      params: [{ name: "_rewardsPerDay", type: "uint256" }],
      content: [{ tag: "p", content: "Emitted when the rewards per day are updated.", style: {} }],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "INFTStake Contract on Etherscan", url: "https://etherscan.io/address/<CONTRACT_ADDRESS>" },
    { title: "INFTStake Documentation (If Available)", url: "https://<WEBSITE_OR_GITHUB_REPO_LINK>/docs/INFTStake" },
    { title: "INFTStake GitHub Repository", url: "https://github.com/<OWNER>/INFTStake" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "ERC721 Standard (For NFT Functionality)", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "ERC20 Standard (For Token Functionality)", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/contracts/4.x/" },
  ],
}

export default definition
