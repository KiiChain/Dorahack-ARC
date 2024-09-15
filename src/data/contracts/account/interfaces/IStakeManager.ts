const definition: IContractDefinition = {
  name: "IStakeManager",
  description: `Interface for a Stake Manager contract.`,
  content: [
    { tag: "h1", content: "IStakeManager Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions for a Stake Manager contract, which manages the staking and unstaking of tokens. It allows users to stake their tokens to earn rewards and withdraw their staked tokens.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Stake tokens to earn rewards</li>
                                <li>Unstake tokens</li>
                                <li>View stake balance</li>
                                <li>Claim earned rewards</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "Implement this interface in your Stake Manager contract to ensure compatibility with other protocols that interact with stake managers. Use the functions defined in this interface to allow users to stake and unstake their tokens, view their stake balances, and claim rewards.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content: "When implementing this interface, ensure that your contract handles the following: ",
      style: {},
    },
    {
      tag: "ul",
      content: `
                                <li>Securely manage staked tokens</li>
                                <li>Calculate and distribute rewards accurately</li>
                                <li>Prevent unauthorized access to staked funds</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    { tag: "p", content: "Follow these best practices for a robust and secure Stake Manager contract: ", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use audited libraries for token management and reward calculations</li>
                                <li>Implement access controls to prevent unauthorized actions</li>
                                <li>Regularly audit your contract code for security vulnerabilities</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "stake",
        signature: "stake(uint256 amount)",
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
        signature: "unstake(uint256 amount)",
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
        signature: "getStakeBalance(address account)",
        params: [
          {
            name: "account",
            type: "address",
            description: "The address of the account to check the stake balance for.",
          },
        ],
      },
      {
        function: "getRewardBalance",
        signature: "getRewardBalance(address account)",
        params: [
          {
            name: "account",
            type: "address",
            description: "The address of the account to check the reward balance for.",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "Staked",
      signature: "Staked(address indexed account, uint256 amount)",
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
      signature: "Unstaked(address indexed account, uint256 amount)",
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
      signature: "RewardsClaimed(address indexed account, uint256 amount)",
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
      title: "Staking Contracts: A Comprehensive Guide",
      url: "https://www.blockchain-council.org/blockchain/staking-contracts-a-comprehensive-guide/",
    },
    {
      title: "Solidity Smart Contract for Staking",
      url: "https://medium.com/coinmonks/solidity-smart-contract-for-staking-3277742f18d7",
    },
    { title: "How to Build a Staking Contract in Solidity", url: "https://www.youtube.com/watch?v=Y6v79z7aZ34" },
    {
      title: "Staking Smart Contracts: A Beginner's Guide",
      url: "https://www.moralis.io/blog/staking-smart-contracts/",
    },
    {
      title: "Smart Contract Development: Staking",
      url: "https://medium.com/coinmonks/smart-contract-development-staking-949a6c813304",
    },
    {
      title: "Staking Contracts: A Deep Dive",
      url: "https://www.coindesk.com/tech/2022/07/08/staking-contracts-a-deep-dive/",
    },
    {
      title: "Solidity Staking Contract Example",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/staking",
    },
  ],
}

export default definition
