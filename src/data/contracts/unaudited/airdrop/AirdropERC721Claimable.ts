const definition: IContractDefinition = {
  name: "AirdropERC721Claimable",
  description: `This contract implements an ERC721 airdrop system where users can claim tokens based on predefined criteria.`,
  content: [
    { tag: "h1", content: "AirdropERC721Claimable Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract allows for the distribution of ERC721 tokens to eligible users based on specific conditions, such as holding a certain token or being part of a whitelist.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Claimable ERC721 tokens with a defined maximum claimable amount per user</li>
                                <li>Configurable claim window with start and end timestamps</li>
                                <li>Optional requirement for holding a specific token to be eligible for claiming</li>
                                <li>Whitelist support for specific addresses to claim tokens</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "To use this contract, follow these steps:",
      style: {},
    },
    {
      tag: "ol",
      content: `
                                <li>Deploy the contract with the desired parameters, including the token address, maximum claimable amount, start and end timestamps, and whitelist (if applicable).</li>
                                <li>Set the claim window by calling the 'setClaimWindow' function.</li>
                                <li>Users can call the 'claim' function during the claim window to receive their tokens.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract implements the ERC721 standard and uses a mapping to track claimed tokens for each address. The claim window is defined using timestamps, and the whitelist is managed through a mapping. ",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure the correct token address is provided during deployment.</li>
                                <li>Set reasonable claim window start and end timestamps.</li>
                                <li>Maintain a secure whitelist if using one.</li>
                                <li>Implement proper security measures to prevent malicious attacks.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "setClaimWindow",
        signature: "setClaimWindow(uint256,uint256)",
        params: [
          { name: "startTime", type: "uint256" },
          { name: "endTime", type: "uint256" },
        ],
      },
      {
        function: "claim",
        signature: "claim()",
        params: [],
      },
      {
        function: "addWhitelistedAddress",
        signature: "addWhitelistedAddress(address)",
        params: [{ name: "addr", type: "address" }],
      },
      {
        function: "removeWhitelistedAddress",
        signature: "removeWhitelistedAddress(address)",
        params: [{ name: "addr", type: "address" }],
      },
      {
        function: "setRequiredToken",
        signature: "setRequiredToken(address)",
        params: [{ name: "token", type: "address" }],
      },
      {
        function: "setClaimableAmount",
        signature: "setClaimableAmount(uint256)",
        params: [{ name: "amount", type: "uint256" }],
      },
      {
        function: "setClaimedAmount",
        signature: "setClaimedAmount(address,uint256)",
        params: [
          { name: "addr", type: "address" },
          { name: "amount", type: "uint256" },
        ],
      },
    ],
    read: [
      {
        function: "claimWindowStart",
        signature: "claimWindowStart()",
        params: [],
      },
      {
        function: "claimWindowEnd",
        signature: "claimWindowEnd()",
        params: [],
      },
      {
        function: "requiredToken",
        signature: "requiredToken()",
        params: [],
      },
      {
        function: "claimableAmount",
        signature: "claimableAmount()",
        params: [],
      },
      {
        function: "claimedAmount",
        signature: "claimedAmount(address)",
        params: [{ name: "addr", type: "address" }],
      },
      {
        function: "isWhitelisted",
        signature: "isWhitelisted(address)",
        params: [{ name: "addr", type: "address" }],
      },
    ],
  },
  events: [
    {
      function: "Claim",
      signature: "Claim(address,uint256)",
      params: [
        { name: "claimer", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "WhitelistedAddressAdded",
      signature: "WhitelistedAddressAdded(address)",
      params: [{ name: "addr", type: "address" }],
      content: [],
    },
    {
      function: "WhitelistedAddressRemoved",
      signature: "WhitelistedAddressRemoved(address)",
      params: [{ name: "addr", type: "address" }],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC-721 Non-Fungible Token Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenZeppelin ERC721 Contract Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    {
      title: "Airdrop Smart Contract Example (Solidity)",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721Airdrop.sol",
    },
    {
      title: "Building an Airdrop System with Solidity",
      url: "https://medium.com/coinmonks/building-an-airdrop-system-with-solidity-854602696424",
    },
    {
      title: "Airdrop Contract: A Step-by-Step Guide to Building an Airdrop System",
      url: "https://medium.com/coinmonks/airdrop-contract-a-step-by-step-guide-to-building-an-airdrop-system-5c3c293532c2",
    },
    { title: "Solidity Tutorial - Creating an Airdrop Contract", url: "https://www.youtube.com/watch?v=H8s_19g9YfU" },
  ],
}

export default definition
