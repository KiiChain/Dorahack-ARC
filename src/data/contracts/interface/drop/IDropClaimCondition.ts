const definition: IContractDefinition = {
  name: "IDropClaimCondition",
  description: `Interface for a claim condition that can be used to determine if a user can claim a drop`,
  content: [
    { tag: "h1", content: "IDropClaimCondition Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the methods that a claim condition must implement to be used with the Drop contract.",
      style: {},
    },
    { tag: "h2", content: "Methods", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>canClaim</b>: Checks if a given address can claim the drop based on the claim condition.</li>
                                <li><b>maxClaimableSupply</b>: Returns the maximum number of tokens that can be claimed based on the claim condition.</li>
                                <li><b>currentClaimedSupply</b>: Returns the number of tokens that have already been claimed based on the claim condition.</li>
                                <li><b>availableSupply</b>: Returns the number of tokens that are still available to be claimed based on the claim condition.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "The Drop contract uses this interface to determine if a user is eligible to claim a drop. You can create your own claim conditions that implement this interface to customize the drop claiming process.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "setClaimCondition",
        signature:
          "setClaimCondition(uint256 _conditionId, uint256 _startTimestamp, uint256 _maxClaimableSupply, uint256 _supplyClaimed, bytes32 _merkleRoot, uint256 _quantityLimitPerWallet, uint256 _waitTimeSeconds, uint256 _maxClaimablePerWallet, bool _active)",
        params: [
          { name: "_conditionId", type: "uint256" },
          { name: "_startTimestamp", type: "uint256" },
          { name: "_maxClaimableSupply", type: "uint256" },
          { name: "_supplyClaimed", type: "uint256" },
          { name: "_merkleRoot", type: "bytes32" },
          { name: "_quantityLimitPerWallet", type: "uint256" },
          { name: "_waitTimeSeconds", type: "uint256" },
          { name: "_maxClaimablePerWallet", type: "uint256" },
          { name: "_active", type: "bool" },
        ],
      },
      {
        function: "setClaimConditionActive",
        signature: "setClaimConditionActive(uint256 _conditionId, bool _active)",
        params: [
          { name: "_conditionId", type: "uint256" },
          { name: "_active", type: "bool" },
        ],
      },
    ],
    read: [
      {
        function: "canClaim",
        signature: "canClaim(address _claimer, uint256 _conditionId, uint256 _quantity)",
        params: [
          { name: "_claimer", type: "address" },
          { name: "_conditionId", type: "uint256" },
          { name: "_quantity", type: "uint256" },
        ],
      },
      {
        function: "maxClaimableSupply",
        signature: "maxClaimableSupply(uint256 _conditionId)",
        params: [{ name: "_conditionId", type: "uint256" }],
      },
      {
        function: "currentClaimedSupply",
        signature: "currentClaimedSupply(uint256 _conditionId)",
        params: [{ name: "_conditionId", type: "uint256" }],
      },
      {
        function: "availableSupply",
        signature: "availableSupply(uint256 _conditionId)",
        params: [{ name: "_conditionId", type: "uint256" }],
      },
      {
        function: "claimConditionActive",
        signature: "claimConditionActive(uint256 _conditionId)",
        params: [{ name: "_conditionId", type: "uint256" }],
      },
      {
        function: "getClaimCondition",
        signature: "getClaimCondition(uint256 _conditionId)",
        params: [{ name: "_conditionId", type: "uint256" }],
      },
    ],
  },
  events: [],
  extensions: [
    {
      name: "Source",
      description: "Source code for the contract.",
      source: "https://github.com/eric-jiang/drop/blob/main/contracts/interfaces/IDropClaimCondition.sol",
    },
  ],
  license: "MIT",

  resources: [
    { title: "EIP-712:  Draft -  Standard for Signature Verification", url: "https://eips.ethereum.org/EIPS/eip-712" },
    { title: "OpenZeppelin's ERC721  Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    { title: "OpenZeppelin's  ERC1155 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc1155" },
    { title: "OpenZeppelin's  EIP-712 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/eip712" },
    { title: "OpenZeppelin's  Merkle Proofs Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/merkle" },
    {
      title: "OpenZeppelin's  Access Control Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/access",
    },
    {
      title: "OpenZeppelin's  Claim Conditions Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/claim",
    },
    { title: "Learnweb3's Claim Condition Tutorial", url: "https://learnweb3.io/docs/claim-conditions" },
    {
      title: "Drop (NFT) Contract Example",
      url: "https://github.com/learnweb3/learnweb3-examples/blob/main/contracts/drop/Drop.sol",
    },
  ],
}

export default definition
