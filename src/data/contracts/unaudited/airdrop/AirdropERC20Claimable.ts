const definition: IContractDefinition = {
  name: "AirdropERC20Claimable",
  description: `An ERC20 token contract that implements an airdrop functionality where users can claim tokens based on their eligibility. This contract allows for easy distribution of tokens to a pre-defined list of addresses.`,
  content: [
    { tag: "h1", content: "AirdropERC20Claimable Contract", style: {} },
    {
      tag: "p",
      content:
        "The AirdropERC20Claimable contract is a smart contract designed to facilitate the distribution of ERC20 tokens to a predetermined list of addresses. This airdrop mechanism ensures that tokens are allocated to the intended recipients efficiently.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>Claiming Mechanism:</b>  Users can claim their allocated tokens by interacting with the contract, providing their address and fulfilling any specified claim conditions.</li>
                                <li><b>Pre-defined Recipient List:</b>  The airdrop is configured with a predefined list of addresses that are eligible to receive tokens.</li>
                                <li><b>Token Allocation:</b>  The contract defines the number of tokens each recipient is entitled to receive.</li>
                                <li><b>Claim Period:</b>  The airdrop can be set with a defined start and end time for the claim period, ensuring a controlled distribution process.</li>
                                <li><b>Gas Optimization:</b>  The contract is optimized for gas efficiency, minimizing the cost of claiming tokens for users.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To utilize the AirdropERC20Claimable contract, you can interact with it through a web3 interface or a blockchain explorer. The contract exposes functions to:",
      style: {},
    },
    {
      tag: "ul",
      content: `
                                <li><b>claimTokens:</b>  This function allows eligible recipients to claim their allocated tokens.</li>
                                <li><b>setClaimPeriod:</b>  The owner of the contract can define the start and end time for the claim period.</li>
                                <li><b>setRecipients:</b>  The owner can update the list of recipients and their corresponding token allocations.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The AirdropERC20Claimable contract is implemented using the ERC20 token standard, ensuring compatibility with various wallets and exchanges. The contract leverages Solidity, a high-level programming language for smart contracts, to achieve secure and transparent functionality.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>Security Audits:</b>  It is recommended to conduct thorough security audits to identify and address potential vulnerabilities in the contract code.</li>
                                <li><b>Gas Optimization:</b>  Optimize the contract for gas efficiency to minimize transaction costs for users.</li>
                                <li><b>Detailed Documentation:</b>  Provide comprehensive documentation explaining the contract's functionality, usage instructions, and potential risks.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "claimTokens",
        signature: "claimTokens()",
        params: [],
      },
      {
        function: "setClaimPeriod",
        signature: "setClaimPeriod(uint256,uint256)",
        params: [
          { name: "startTime", type: "uint256" },
          { name: "endTime", type: "uint256" },
        ],
      },
      {
        function: "setRecipients",
        signature: "setRecipients(address[],uint256[])",
        params: [
          { name: "recipients", type: "address[]" },
          { name: "tokenAmounts", type: "uint256[]" },
        ],
      },
    ],
    read: [
      {
        function: "claimPeriodStart",
        signature: "claimPeriodStart()",
        params: [],
      },
      {
        function: "claimPeriodEnd",
        signature: "claimPeriodEnd()",
        params: [],
      },
      {
        function: "hasClaimed",
        signature: "hasClaimed(address)",
        params: [{ name: "recipient", type: "address" }],
      },
      {
        function: "tokenAllocated",
        signature: "tokenAllocated(address)",
        params: [{ name: "recipient", type: "address" }],
      },
    ],
  },
  events: [
    {
      function: "Claimed",
      signature: "Claimed(address,uint256)",
      params: [
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a recipient claims their allocated tokens.", style: {} }],
    },
    {
      function: "ClaimPeriodSet",
      signature: "ClaimPeriodSet(uint256,uint256)",
      params: [
        { name: "startTime", type: "uint256" },
        { name: "endTime", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when the claim period is set or updated.", style: {} }],
    },
    {
      function: "RecipientsUpdated",
      signature: "RecipientsUpdated(address[],uint256[])",
      params: [
        { name: "recipients", type: "address[]" },
        { name: "tokenAmounts", type: "uint256[]" },
      ],
      content: [
        { tag: "p", content: "Emitted when the list of recipients and their token allocations is updated.", style: {} },
      ],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "Airdrop Smart Contract Tutorial", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "ERC20 Token Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "OpenZeppelin ERC20 Contract", url: "https://docs.openzeppelin.com/contracts/4.x/erc20" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    {
      title: "How to Create an Airdrop Smart Contract",
      url: "https://medium.com/ethereum-dev/how-to-create-an-airdrop-smart-contract-121321718b43",
    },
    {
      title: "Airdrop Contract Example",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20/extensions",
    },
    { title: "Understanding Smart Contract Security", url: "https://consensys.net/blog/smart-contract-security/" },
    { title: "Gas Optimization for Smart Contracts", url: "https://ethereum.org/en/developers/docs/gas/" },
    {
      title: "Best Practices for Building Smart Contracts",
      url: "https://blog.openzeppelin.com/best-practices-for-building-smart-contracts/",
    },
    { title: "Airdrop Contract Audit", url: "https://www.certik.com/audits" },
  ],
}

export default definition
