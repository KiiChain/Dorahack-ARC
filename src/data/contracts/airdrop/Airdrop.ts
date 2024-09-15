const definition: IContractDefinition = {
  name: "Airdrop",
  description: `A contract that allows for the distribution of tokens to a list of addresses.`,
  content: [
    { tag: "h1", content: "Airdrop Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract facilitates the airdrop of tokens to a predefined list of addresses. It ensures a secure and transparent distribution process.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Distribution of tokens to multiple addresses.</li>
                                <li>Ability to set a specific token amount for each recipient.</li>
                                <li>Option to set a claim period for recipients to collect their tokens.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "To use the Airdrop contract, follow these steps:",
      style: {},
    },
    {
      tag: "ol",
      content: `
                                <li>Deploy the contract and initialize it with the token address and distribution details.</li>
                                <li>Call the 'claimTokens' function to receive your airdropped tokens within the claim period.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The Airdrop contract utilizes a mapping to store the airdrop details for each recipient. The claim period is enforced using timestamps, ensuring that tokens can only be claimed within the designated window.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Thoroughly review and audit the contract code before deployment.</li>
                                <li>Ensure that the token contract is secure and has sufficient liquidity for the airdrop.</li>
                                <li>Communicate clearly with recipients regarding the airdrop process and claim period.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "constructor",
        signature:
          "constructor(address _token, address[] memory _recipients, uint256[] memory _amounts, uint256 _claimPeriod)",
        params: [
          { name: "_token", type: "address" },
          { name: "_recipients", type: "address[]" },
          { name: "_amounts", type: "uint256[]" },
          { name: "_claimPeriod", type: "uint256" },
        ],
      },
      {
        function: "claimTokens",
        signature: "claimTokens()",
        params: [],
      },
    ],
    read: [
      {
        function: "token",
        signature: "token() view returns (address)",
        params: [],
      },
      {
        function: "claimPeriod",
        signature: "claimPeriod() view returns (uint256)",
        params: [],
      },
      {
        function: "isClaimed",
        signature: "isClaimed(address _recipient) view returns (bool)",
        params: [{ name: "_recipient", type: "address" }],
      },
      {
        function: "amount",
        signature: "amount(address _recipient) view returns (uint256)",
        params: [{ name: "_recipient", type: "address" }],
      },
    ],
  },
  events: [
    {
      function: "TokenClaimed",
      signature: "TokenClaimed(address recipient, uint256 amount)",
      params: [
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "Airdrop Smart Contract Tutorial", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "Building an Airdrop Smart Contract on Ethereum", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "How to Create an Airdrop Smart Contract", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "Airdrop Smart Contract Best Practices", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "Understanding Airdrop Smart Contract Security", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "Airdrop Smart Contract Code Examples", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "Airdrop Smart Contract Audit", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "Airdrop Smart Contract Development Tools", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "Airdrop Smart Contract Gas Optimization", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  ],
}

export default definition
