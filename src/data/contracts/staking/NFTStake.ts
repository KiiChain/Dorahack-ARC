const definition: IContractDefinition = {
  name: "NFTStake",
  description: `A contract for staking NFTs and earning rewards.`,
  content: [
    { tag: "h1", content: "NFTStake Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract allows users to stake their NFTs and earn rewards in the form of tokens. The contract is designed to be secure, transparent, and easy to use.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Stake NFTs to earn rewards.</li>
                                <li>Unstake NFTs at any time.</li>
                                <li>View staking rewards and withdraw them.</li>
                                <li>Upgradeable contract for future updates.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the NFTStake contract, users first need to approve the contract to spend their NFTs. Once approved, users can stake their NFTs by calling the `stake` function. The contract will track the staked NFTs and distribute rewards to users based on their stake and the time they have been staked. Users can unstake their NFTs at any time by calling the `unstake` function. Rewards can be viewed and withdrawn by calling the `getRewards` and `withdrawRewards` functions respectively.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses a mapping to store the staked NFTs and their corresponding reward amounts. It also uses a timer to track the time each NFT has been staked. The reward calculation is based on the user's stake and the time their NFTs have been staked. The contract is designed to be upgradeable, which allows for future updates and bug fixes without requiring a new deployment.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure that the contract is thoroughly tested before deployment.</li>
                                <li>Implement appropriate access control mechanisms to prevent unauthorized access.</li>
                                <li>Consider using a trusted third-party audit to verify the security of the contract.</li>
                                <li>Keep the contract's code up-to-date with security best practices.</li>
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
        function: "withdrawRewards",
        signature: "withdrawRewards()",
        params: [],
      },
    ],
    read: [
      {
        function: "getRewards",
        signature: "getRewards()",
        params: [],
      },
      {
        function: "isStaked",
        signature: "isStaked(uint256 tokenId)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "Staked",
      signature: "Staked(address indexed user, uint256 indexed tokenId)",
      params: [
        { name: "user", type: "address", indexed: true },
        { name: "tokenId", type: "uint256", indexed: true },
      ],
      content: [],
    },
    {
      function: "Unstaked",
      signature: "Unstaked(address indexed user, uint256 indexed tokenId)",
      params: [
        { name: "user", type: "address", indexed: true },
        { name: "tokenId", type: "uint256", indexed: true },
      ],
      content: [],
    },
    {
      function: "RewardsWithdrawn",
      signature: "RewardsWithdrawn(address indexed user, uint256 amount)",
      params: [
        { name: "user", type: "address", indexed: true },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "NFT Staking: A Comprehensive Guide", url: "https://www.blockchain.com/en/resources/guides/nft-staking" },
    {
      title: "NFT Staking Explained: How to Stake Your NFTs and Earn Rewards",
      url: "https://cointelegraph.com/explained/nft-staking-explained-how-to-stake-your-nfts-and-earn-rewards",
    },
    {
      title: "NFT Staking Explained: Everything You Need to Know",
      url: "https://www.binance.com/en/blog/nft-staking-explained-everything-you-need-to-know-55819",
    },
    {
      title: "NFT Staking: A Beginner's Guide to NFT Staking Platforms and How to Earn Passive Income",
      url: "https://www.kucoin.com/news/en/nft-staking-a-beginners-guide-to-nft-staking-platforms-and-how-to-earn-passive-income",
    },
    {
      title: "NFT Staking: How to Stake NFTs & Earn Rewards",
      url: "https://academy.binance.com/en/articles/nft-staking",
    },
    {
      title: "NFT Staking 101: A Step-by-Step Guide",
      url: "https://cryptopotato.com/nft-staking-101-a-step-by-step-guide/",
    },
    {
      title: "NFT Staking: What Is It and How Does it Work?",
      url: "https://www.coingecko.com/en/learn/what-is-nft-staking",
    },
    {
      title: "NFT Staking Guide: A Complete Guide to NFT Staking",
      url: "https://www.coinbureau.com/learn/nft-staking/",
    },
    {
      title: "NFT Staking: A Comprehensive Guide",
      url: "https://medium.com/@NFT_Staking_Guide/nft-staking-a-comprehensive-guide-784259e56093",
    },
    { title: "NFT Staking: How to Stake Your NFTs", url: "https://www.youtube.com/watch?v=3X13u50o35M" },
    {
      title: "NFT Staking for Beginners: How to Stake Your NFTs and Earn Rewards",
      url: "https://www.youtube.com/watch?v=gU9p_w1yQ4A",
    },
  ],
}

export default definition
