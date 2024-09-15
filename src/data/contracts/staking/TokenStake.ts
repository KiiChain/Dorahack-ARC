const definition: IContractDefinition = {
  name: "TokenStake",
  description: `A smart contract allowing users to stake tokens and earn rewards.`,
  content: [
    { tag: "h1", content: "TokenStake Contract", style: {} },
    {
      tag: "p",
      content:
        "The TokenStake contract facilitates the staking of tokens, enabling users to earn rewards for locking up their assets. This contract is designed to be flexible, allowing for customization of reward distribution and staking duration.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Stake tokens to earn rewards.</li>
                                <li>Withdraw staked tokens and accumulated rewards.</li>
                                <li>Configurable reward distribution mechanism.</li>
                                <li>Adjustable staking duration.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "Users can interact with the TokenStake contract through the following functions: ",
      style: {},
    },
    {
      tag: "ul",
      content: `
                                <li>**stake(uint256 amount):** Stake tokens by providing the desired amount. </li>
                                <li>**unstake(uint256 amount):** Withdraw a portion of the staked tokens. </li>
                                <li>**claimRewards():** Collect accrued rewards for staked tokens.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The TokenStake contract employs a standard ERC20 interface for token interactions and incorporates a reward distribution mechanism based on the total staked tokens. It includes functionalities for managing stake durations, tracking rewards, and handling withdrawals. The contract's state is managed using storage variables, and events are emitted for tracking crucial actions.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure that the token contract you are integrating with is secure and adheres to the ERC20 standard.</li>
                                <li>Implement appropriate access controls to prevent unauthorized modifications.</li>
                                <li>Perform rigorous testing to ensure contract functionality and security before deployment.</li>
                                <li>Consider the impact of gas costs and optimize contract code for efficiency.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "stake",
        signature: "stake(uint256)",
        params: [
          {
            name: "amount",
            type: "uint256",
            description: "The amount of tokens to stake.",
          },
        ],
      },
      {
        function: "unstake",
        signature: "unstake(uint256)",
        params: [
          {
            name: "amount",
            type: "uint256",
            description: "The amount of tokens to unstake.",
          },
        ],
      },
      {
        function: "claimRewards",
        signature: "claimRewards()",
        params: [],
      },
    ],
    read: [
      {
        function: "getStakeBalance",
        signature: "getStakeBalance(address)",
        params: [
          {
            name: "account",
            type: "address",
            description: "The address of the account.",
          },
        ],
      },
      {
        function: "getRewardBalance",
        signature: "getRewardBalance(address)",
        params: [
          {
            name: "account",
            type: "address",
            description: "The address of the account.",
          },
        ],
      },
      {
        function: "getStakingDuration",
        signature: "getStakingDuration()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "Staked",
      signature: "Staked(address,uint256)",
      params: [
        {
          name: "account",
          type: "address",
          description: "The address of the account that staked.",
        },
        {
          name: "amount",
          type: "uint256",
          description: "The amount of tokens staked.",
        },
      ],
      content: [],
    },
    {
      function: "Unstaked",
      signature: "Unstaked(address,uint256)",
      params: [
        {
          name: "account",
          type: "address",
          description: "The address of the account that unstaked.",
        },
        {
          name: "amount",
          type: "uint256",
          description: "The amount of tokens unstaked.",
        },
      ],
      content: [],
    },
    {
      function: "RewardsClaimed",
      signature: "RewardsClaimed(address,uint256)",
      params: [
        {
          name: "account",
          type: "address",
          description: "The address of the account that claimed rewards.",
        },
        {
          name: "amount",
          type: "uint256",
          description: "The amount of rewards claimed.",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "TokenStake Smart Contract Documentation",
      url: "https://github.com/TokenStake/tokenstake-contracts/blob/main/README.md",
    },
    { title: "TokenStake Project Website", url: "https://www.tokenstake.com/" },
    { title: "TokenStake Blog", url: "https://blog.tokenstake.com/" },
    { title: "TokenStake on GitHub", url: "https://github.com/TokenStake" },
    { title: "TokenStake on Twitter", url: "https://twitter.com/tokenstake" },
    { title: "TokenStake Whitepaper", url: "https://www.tokenstake.com/whitepaper.pdf" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum Documentation", url: "https://ethereum.org/en/developers/docs/" },
    { title: "OpenZeppelin Documentation", url: "https://docs.openzeppelin.com/" },
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "Uniswap Documentation", url: "https://docs.uniswap.org/" },
    { title: "TokenStake Contract Audit", url: "https://www.tokenstake.com/audit.pdf" },
  ],
}

export default definition
