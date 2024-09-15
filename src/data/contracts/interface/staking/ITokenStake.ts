const definition: IContractDefinition = {
  name: "ITokenStake",
  description: `Interface for a token staking contract.`,
  content: [
    { tag: "h1", content: "ITokenStake Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the basic functions for a token staking contract. It allows users to stake their tokens and earn rewards. ",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Stake tokens</li>
                                <li>Unstake tokens</li>
                                <li>View staked balance</li>
                                <li>Claim rewards</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "To use this interface, implement the functions in your staking contract. ",
      style: {},
    },
    { tag: "h2", content: "Example Implementation", style: {} },
    {
      tag: "pre",
      content: `
                            pragma solidity ^0.8.0;

                            import "./ITokenStake.sol";

                            contract TokenStake is ITokenStake {
                                // ... Implementation details
                            }
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "stake",
        signature: "stake(uint256 amount)",
        params: [{ name: "amount", type: "uint256" }],
      },
      {
        function: "unstake",
        signature: "unstake(uint256 amount)",
        params: [{ name: "amount", type: "uint256" }],
      },
      {
        function: "claimRewards",
        signature: "claimRewards()",
        params: [],
      },
    ],
    read: [
      {
        function: "stakedBalanceOf",
        signature: "stakedBalanceOf(address account)",
        params: [{ name: "account", type: "address" }],
      },
      {
        function: "earnedRewards",
        signature: "earnedRewards(address account)",
        params: [{ name: "account", type: "address" }],
      },
    ],
  },
  events: [
    {
      function: "Staked",
      signature: "Staked(address indexed account, uint256 amount)",
      params: [
        { name: "account", type: "address", indexed: true },
        { name: "amount", type: "uint256", indexed: false },
      ],
      content: [{ tag: "p", content: "Emitted when a user stakes tokens.", style: {} }],
    },
    {
      function: "Unstaked",
      signature: "Unstaked(address indexed account, uint256 amount)",
      params: [
        { name: "account", type: "address", indexed: true },
        { name: "amount", type: "uint256", indexed: false },
      ],
      content: [{ tag: "p", content: "Emitted when a user unstakes tokens.", style: {} }],
    },
    {
      function: "RewardsClaimed",
      signature: "RewardsClaimed(address indexed account, uint256 amount)",
      params: [
        { name: "account", type: "address", indexed: true },
        { name: "amount", type: "uint256", indexed: false },
      ],
      content: [{ tag: "p", content: "Emitted when a user claims rewards.", style: {} }],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "ITokenStake Interface Documentation (OpenZeppelin)",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/token/ERC20/ITokenStake",
    },
    { title: "Staking Explained", url: "https://ethereum.org/en/developers/docs/dapps/staking/" },
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "OpenZeppelin Documentation", url: "https://docs.openzeppelin.com/" },
  ],
}

export default definition
