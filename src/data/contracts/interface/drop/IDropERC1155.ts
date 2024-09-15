const definition: IContractDefinition = {
  name: "IDropERC1155",
  description: `Interface for the ERC1155 Drop contract.`,
  content: [
    { tag: "h1", content: "IDropERC1155 Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions and events for an ERC1155 Drop contract, which is a specialized form of ERC1155 contract designed for managing and distributing a collection of non-fungible tokens (NFTs) in a controlled way.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Provides a mechanism to create and manage a collection of NFTs.</li>
                                <li>Offers control over the distribution and claiming of NFTs.</li>
                                <li>Supports different claiming phases, allowing for staged releases.</li>
                                <li>Allows for setting a price for each NFT or the entire collection.</li>
                                <li>Enables the setting of a maximum claim amount per wallet.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "Implement this interface in your ERC1155 Drop contract to ensure compatibility and adherence to the established standard for ERC1155 drops.",
      style: {},
    },
    { tag: "h2", content: "Example", style: {} },
    { tag: "p", content: "The following code snippet demonstrates how to use this interface:", style: {} },
    {
      tag: "code",
      content: `
                            // Example implementation of an ERC1155 Drop contract
                            contract MyERC1155Drop is ERC1155, IDropERC1155 {
                                // ... Contract implementation ...
                            }
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    { tag: "p", content: "The implementation of an ERC1155 Drop contract should include the following:", style: {} },
    {
      tag: "ul",
      content: `
                                <li>A function to set the claim price.</li>
                                <li>A function to set the maximum claim amount per wallet.</li>
                                <li>A function to manage claiming phases.</li>
                                <li>A function to claim NFTs.</li>
                                <li>A function to withdraw funds from the contract.</li>
                                <li>An event to track claim events.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use a secure random number generator for token minting.</li>
                                <li>Implement proper input validation and error handling.</li>
                                <li>Consider using a trusted third-party audit to review your contract implementation.</li>
                                <li>Ensure your contract is well-documented to aid in maintenance and understanding.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "setClaimPrice",
        signature: "setClaimPrice(uint256)",
        params: [
          {
            name: "price_",
            type: "uint256",
            description: "The new price for claiming NFTs.",
          },
        ],
      },
      {
        function: "setMaxClaimAmountPerWallet",
        signature: "setMaxClaimAmountPerWallet(uint256)",
        params: [
          {
            name: "maxClaimAmount_",
            type: "uint256",
            description: "The new maximum claim amount per wallet.",
          },
        ],
      },
      {
        function: "setClaimPhases",
        signature: "setClaimPhases(uint256[], uint256[], uint256[])",
        params: [
          {
            name: "startTimes_",
            type: "uint256[]",
            description: "The start times for each claim phase.",
          },
          {
            name: "endTimes_",
            type: "uint256[]",
            description: "The end times for each claim phase.",
          },
          {
            name: "maxClaimAmounts_",
            type: "uint256[]",
            description: "The maximum claim amounts for each claim phase.",
          },
        ],
      },
      {
        function: "claim",
        signature: "claim(uint256[], uint256[])",
        params: [
          {
            name: "tokenIds_",
            type: "uint256[]",
            description: "The IDs of the NFTs to claim.",
          },
          {
            name: "quantities_",
            type: "uint256[]",
            description: "The quantities of each NFT to claim.",
          },
        ],
      },
      {
        function: "withdraw",
        signature: "withdraw(address payable)",
        params: [
          {
            name: "recipient_",
            type: "address payable",
            description: "The recipient address for the withdrawn funds.",
          },
        ],
      },
    ],
    read: [
      {
        function: "claimPrice",
        signature: "claimPrice() view returns (uint256)",
        params: [],
      },
      {
        function: "maxClaimAmountPerWallet",
        signature: "maxClaimAmountPerWallet() view returns (uint256)",
        params: [],
      },
      {
        function: "currentClaimPhase",
        signature: "currentClaimPhase() view returns (uint256)",
        params: [],
      },
      {
        function: "claimPhaseStartTime",
        signature: "claimPhaseStartTime(uint256) view returns (uint256)",
        params: [
          {
            name: "phaseIndex_",
            type: "uint256",
            description: "The index of the claim phase.",
          },
        ],
      },
      {
        function: "claimPhaseEndTime",
        signature: "claimPhaseEndTime(uint256) view returns (uint256)",
        params: [
          {
            name: "phaseIndex_",
            type: "uint256",
            description: "The index of the claim phase.",
          },
        ],
      },
      {
        function: "claimPhaseMaxClaimAmount",
        signature: "claimPhaseMaxClaimAmount(uint256) view returns (uint256)",
        params: [
          {
            name: "phaseIndex_",
            type: "uint256",
            description: "The index of the claim phase.",
          },
        ],
      },
      {
        function: "totalClaimedByWallet",
        signature: "totalClaimedByWallet(address) view returns (uint256)",
        params: [
          {
            name: "wallet_",
            type: "address",
            description: "The wallet address to query.",
          },
        ],
      },
      {
        function: "isClaimed",
        signature: "isClaimed(uint256, uint256) view returns (bool)",
        params: [
          {
            name: "tokenId_",
            type: "uint256",
            description: "The ID of the NFT to check.",
          },
          {
            name: "quantity_",
            type: "uint256",
            description: "The quantity of the NFT to check.",
          },
        ],
      },
      {
        function: "getClaimedQuantities",
        signature: "getClaimedQuantities(uint256[]) view returns (uint256[])",
        params: [
          {
            name: "tokenIds_",
            type: "uint256[]",
            description: "The IDs of the NFTs to query.",
          },
        ],
      },
      {
        function: "getClaimStatus",
        signature: "getClaimStatus(address, uint256[], uint256[]) view returns (bool, uint256[], uint256[])",
        params: [
          {
            name: "claimer_",
            type: "address",
            description: "The address of the claimer.",
          },
          {
            name: "tokenIds_",
            type: "uint256[]",
            description: "The IDs of the NFTs to claim.",
          },
          {
            name: "quantities_",
            type: "uint256[]",
            description: "The quantities of each NFT to claim.",
          },
        ],
      },
      {
        function: "getClaimedQuantitiesForPhase",
        signature: "getClaimedQuantitiesForPhase(uint256) view returns (uint256[])",
        params: [
          {
            name: "phaseIndex_",
            type: "uint256",
            description: "The index of the claim phase.",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "Claim",
      signature: "Claim(address, uint256[], uint256[])",
      params: [
        {
          name: "claimer",
          type: "address",
          description: "The address of the claimer.",
        },
        {
          name: "tokenIds",
          type: "uint256[]",
          description: "The IDs of the claimed NFTs.",
        },
        {
          name: "quantities",
          type: "uint256[]",
          description: "The quantities of each claimed NFT.",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "OpenZeppelin ERC1155 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc1155" },
    {
      title: "ERC1155: Semi-Fungible Tokens",
      url: "https://medium.com/ethereum-hub/erc-1155-semi-fungible-tokens-a-comprehensive-guide-3c0d7d47a682",
    },
    { title: "ERC1155: A Detailed Overview", url: "https://blog.openzeppelin.com/erc-1155-detailed-overview/" },
    { title: "ERC1155 for Beginners: A Practical Guide", url: "https://www.youtube.com/watch?v=qU63T4Z72z4" },
    {
      title: "Building a Decentralized Marketplace for ERC1155 Tokens",
      url: "https://medium.com/coinmonks/building-a-decentralized-marketplace-for-erc-1155-tokens-202b286a1a48",
    },
  ],
}

export default definition
