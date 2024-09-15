const definition: IContractDefinition = {
  name: "BurnToClaimDropERC721",
  description: `This contract allows users to burn tokens from another ERC721 contract to claim a new ERC721 token from this contract.`,
  content: [
    { tag: "h1", content: "BurnToClaimDropERC721 Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract is a specialized ERC721 contract that allows users to claim new tokens by burning tokens from another ERC721 contract.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Allows users to burn tokens from a specified ERC721 contract to claim a new ERC721 token from this contract.</li>
                                <li>Maintains a mapping of burned token IDs to claimed token IDs.</li>
                                <li>Provides functions to check if a token has been claimed and to retrieve the claimed token ID based on the burned token ID.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use this contract, you need to deploy it and set the address of the ERC721 contract whose tokens will be burned. Users can then interact with the contract by calling the `claim` function, providing the token ID of the token they want to burn.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses the `IERC721` interface to interact with the source ERC721 contract. It keeps track of the claimed tokens and the corresponding burned tokens using a mapping. The `claim` function verifies that the user owns the token to be burned and then burns the token before minting a new token and assigning it to the user.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure the source ERC721 contract allows burning tokens.</li>
                                <li>Consider using a permissioned burn function if necessary to restrict the ability to burn tokens.</li>
                                <li>Securely store the address of the source ERC721 contract to prevent malicious modifications.</li>
                                <li>Implement proper error handling to gracefully handle potential issues during the claim process.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "claim",
        signature: "claim(uint256)",
        params: [{ name: "tokenId", type: "uint256" }],
      },
      {
        function: "setBurnedTokenId",
        signature: "setBurnedTokenId(uint256,uint256)",
        params: [
          { name: "burnedTokenId", type: "uint256" },
          { name: "claimedTokenId", type: "uint256" },
        ],
      },
      {
        function: "setBurnTokenContract",
        signature: "setBurnTokenContract(address)",
        params: [{ name: "burnTokenContract", type: "address" }],
      },
    ],
    read: [
      {
        function: "isClaimed",
        signature: "isClaimed(uint256)",
        params: [{ name: "burnedTokenId", type: "uint256" }],
      },
      {
        function: "getClaimedTokenId",
        signature: "getClaimedTokenId(uint256)",
        params: [{ name: "burnedTokenId", type: "uint256" }],
      },
      {
        function: "burnTokenContract",
        signature: "burnTokenContract()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "Claim",
      signature: "Claim(address,uint256,uint256)",
      params: [
        { name: "claimer", type: "address" },
        { name: "burnedTokenId", type: "uint256" },
        { name: "claimedTokenId", type: "uint256" },
      ],
      content: [
        { tag: "p", content: "Emitted when a user claims a token.", style: {} },
        {
          tag: "ul",
          content: `
                                        <li>claimer: Address of the user who claimed the token.</li>
                                        <li>burnedTokenId: Token ID of the burned token.</li>
                                        <li>claimedTokenId: Token ID of the claimed token.</li>
                                    `,
          style: {},
        },
      ],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC721 Standard", url: "https://eips.ethereum.org/EIPS/eip-721" },
    { title: "OpenZeppelin ERC721 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc721" },
    {
      title: "Burn Mechanism in Solidity",
      url: "https://ethereum.org/en/developers/docs/smart-contracts/functionality/burn-tokens/",
    },
    {
      title: "Claiming Tokens in Solidity",
      url: "https://ethereum.org/en/developers/docs/smart-contracts/functionality/claim-tokens/",
    },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
  ],
}

export default definition
