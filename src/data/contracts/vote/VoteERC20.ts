const definition: IContractDefinition = {
  name: "VoteERC20",
  description: `A contract that allows voting on proposals using ERC20 tokens.`,
  content: [
    { tag: "h1", content: "VoteERC20 Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract implements a token-based voting system where holders of an ERC20 token can vote on proposals. It provides functions for creating proposals, voting on them, and calculating the results.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Allows creation of proposals with a description, deadline, and vote options.</li>
                                <li>Enables token holders to vote on proposals by casting their tokens for a specific option.</li>
                                <li>Calculates the result of a proposal based on the weighted votes of token holders.</li>
                                <li>Provides functions to retrieve information about proposals, votes, and results.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the VoteERC20 contract, you can interact with it through its public functions. This includes creating proposals, casting votes, and checking the results of proposals.",
      style: {},
    },
    { tag: "h2", content: "Security Considerations", style: {} },
    {
      tag: "p",
      content:
        "The VoteERC20 contract utilizes standard security practices for smart contracts, such as input validation, access control, and time-based constraints to prevent malicious attacks.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses the ERC20 standard for token handling and relies on the timestamp functionality of the Ethereum blockchain to manage proposal deadlines.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                    <li>Always review the code and contract details before interacting with the contract.</li>
                                    <li>Use a reputable and secure wallet for interacting with the contract.</li>
                                    <li>Be aware of potential gas fees and transaction costs associated with using the contract.</li>
                                `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createProposal",
        signature: "createProposal(string,uint256,string[],uint256)",
        params: [
          { name: "description", type: "string" },
          { name: "deadline", type: "uint256" },
          { name: "options", type: "string[]" },
          { name: "voteDuration", type: "uint256" },
        ],
      },
      {
        function: "vote",
        signature: "vote(uint256,uint256)",
        params: [
          { name: "proposalId", type: "uint256" },
          { name: "optionIndex", type: "uint256" },
        ],
      },
      {
        function: "setVoteDuration",
        signature: "setVoteDuration(uint256)",
        params: [{ name: "newVoteDuration", type: "uint256" }],
      },
    ],
    read: [
      {
        function: "getProposal",
        signature: "getProposal(uint256)",
        params: [{ name: "proposalId", type: "uint256" }],
      },
      {
        function: "getVoteResult",
        signature: "getVoteResult(uint256)",
        params: [{ name: "proposalId", type: "uint256" }],
      },
      {
        function: "getVoteDuration",
        signature: "getVoteDuration()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "ProposalCreated",
      signature: "ProposalCreated(uint256,string,uint256,string[],uint256)",
      params: [
        { name: "proposalId", type: "uint256" },
        { name: "description", type: "string" },
        { name: "deadline", type: "uint256" },
        { name: "options", type: "string[]" },
        { name: "voteDuration", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a new proposal is created.", style: {} }],
    },
    {
      function: "VoteCast",
      signature: "VoteCast(uint256,address,uint256)",
      params: [
        { name: "proposalId", type: "uint256" },
        { name: "voter", type: "address" },
        { name: "optionIndex", type: "uint256" },
      ],
      content: [{ tag: "p", content: "Emitted when a vote is cast on a proposal.", style: {} }],
    },
    {
      function: "VoteDurationUpdated",
      signature: "VoteDurationUpdated(uint256)",
      params: [{ name: "newVoteDuration", type: "uint256" }],
      content: [{ tag: "p", content: "Emitted when the vote duration is updated.", style: {} }],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "OpenZeppelin Governor Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/governance" },
    { title: "Meta-Transactions Overview", url: "https://docs.openzeppelin.com/contracts/4.x/metatx" },
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    {
      title: "VoteERC20 Contract Source Code",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/extensions/VoteERC20.sol",
    },
    {
      title: "VoteERC20 Contract Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/governance#voteerc20",
    },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum Documentation", url: "https://ethereum.org/en/developers/docs/" },
    {
      title: "Voting Systems in Blockchain",
      url: "https://medium.com/coinmonks/voting-systems-in-blockchain-a-comprehensive-guide-63356535d4c0",
    },
    {
      title: "Decentralized Governance with ERC20 Voting",
      url: "https://medium.com/coinmonks/decentralized-governance-with-erc20-voting-a-guide-for-developers-23e7775757df",
    },
    {
      title: "Building a Decentralized Governance System with Ethereum",
      url: "https://medium.com/coinmonks/building-a-decentralized-governance-system-with-ethereum-a-practical-guide-f0677f2d87a7",
    },
  ],
}

export default definition
