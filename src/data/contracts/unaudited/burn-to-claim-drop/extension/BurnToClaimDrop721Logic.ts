const definition: IContractDefinition = {
  name: "BurnToClaimDrop721Logic",
  description: `This contract is a logic contract for the BurnToClaimDrop721 contract. It allows users to burn a specified ERC20 token and claim a corresponding NFT from the BurnToClaimDrop721 contract.`,
  content: [
    { tag: "h1", content: "BurnToClaimDrop721Logic Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract acts as the logic for the BurnToClaimDrop721 contract, facilitating the burning of ERC20 tokens to claim corresponding NFTs. This allows for a unique and dynamic distribution of NFTs, rewarding users for their contribution to the project.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Allows users to burn a specified ERC20 token to claim a corresponding NFT from the BurnToClaimDrop721 contract.</li>
                                <li>Provides a mechanism for managing the mapping of ERC20 tokens to specific NFTs.</li>
                                <li>Enforces the burning of the ERC20 token before allowing the claim of the corresponding NFT.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This contract is designed to be used in conjunction with the BurnToClaimDrop721 contract. To use it, the BurnToClaimDrop721 contract must be deployed and configured with the address of this logic contract. Users can then burn the specified ERC20 token and call the `claim()` function on the BurnToClaimDrop721 contract to claim the corresponding NFT.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract utilizes a `burnAndClaim` function that verifies the burn event of the ERC20 token and then allows the claim of the corresponding NFT from the BurnToClaimDrop721 contract. This ensures that only users who have burned the required amount of tokens can claim the NFT.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure that the ERC20 token contract is verified and secure.</li>
                                <li>Thoroughly test the contract before deploying it to a live network.</li>
                                <li>Consider using a security audit service to identify and address any vulnerabilities.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "burnAndClaim",
        signature: "burnAndClaim(address,uint256,uint256)",
        params: [
          { name: "_tokenAddress", type: "address" },
          { name: "_tokenId", type: "uint256" },
          { name: "_amount", type: "uint256" },
        ],
      },
    ],
    read: [
      {
        function: "getClaimedNftTokenId",
        signature: "getClaimedNftTokenId(address)",
        params: [{ name: "_claimer", type: "address" }],
      },
      {
        function: "getBurnedAmount",
        signature: "getBurnedAmount(address,uint256)",
        params: [
          { name: "_claimer", type: "address" },
          { name: "_tokenId", type: "uint256" },
        ],
      },
      {
        function: "getClaimedStatus",
        signature: "getClaimedStatus(address,uint256)",
        params: [
          { name: "_claimer", type: "address" },
          { name: "_tokenId", type: "uint256" },
        ],
      },
    ],
  },
  events: [
    {
      function: "Claimed",
      signature: "Claimed(address,uint256,uint256)",
      params: [
        { name: "claimer", type: "address" },
        { name: "tokenId", type: "uint256" },
        { name: "amount", type: "uint256" },
      ],
      content: [
        {
          tag: "p",
          content: "Emitted when a user successfully claims an NFT after burning the required amount of ERC20 tokens.",
          style: {},
        },
      ],
    },
  ],
  extensions: [
    {
      name: "BurnToClaimDrop721",
      description: "This contract is a logic contract for the BurnToClaimDrop721 contract.",
      source: "BurnToClaimDrop721Logic.sol",
    },
  ],
  license: "MIT",

  resources: [
    { title: "ERC-721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "ERC-20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "OpenZeppelin ERC721 Contract", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    {
      title: "Burn Mechanism in Solidity",
      url: "https://ethereum.org/en/developers/docs/smart-contracts/token-standards/erc-20/#burning-tokens",
    },
    {
      title: "Smart Contract Security Best Practices",
      url: "https://consensys.net/blog/smart-contract-security-best-practices/",
    },
    { title: "Gas Optimization Techniques for Solidity", url: "https://solidity-by-example.com/gas-optimization/" },
  ],
}

export default definition
