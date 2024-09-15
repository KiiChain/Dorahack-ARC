const definition: IContractDefinition = {
  name: "TokenBoundAccount",
  description: `A contract that allows for the creation of accounts that are bound to a specific token. This enables applications to restrict access to certain features or resources based on token ownership.`,
  content: [
    { tag: "h1", content: "TokenBoundAccount Contract", style: {} },
    {
      tag: "p",
      content:
        "The TokenBoundAccount contract provides a mechanism for associating an account with a specific token. This can be used to enforce access control based on token ownership, potentially allowing for features like token-gated access to content or services.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Creates token-bound accounts for restricted access.</li>
                                <li>Allows account creation and management.</li>
                                <li>Provides methods to verify ownership and access permissions.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To utilize the TokenBoundAccount contract, you'll need to deploy it and then interact with its functions. This involves creating accounts, linking them to tokens, and verifying ownership before accessing restricted resources. The contract's functions will guide you through these steps.",
      style: {},
    },
    { tag: "h2", content: "Example", style: {} },
    {
      tag: "p",
      content: `
                                    // Example: Creating a TokenBoundAccount 
                                    const account = await TokenBoundAccount.createAccount(userAddress, tokenAddress); 
                                    
                                    // Example: Verifying ownership
                                    const isOwner = await TokenBoundAccount.isOwner(account, userAddress);
                                `,
      style: {},
    },
    { tag: "h2", content: "Security Considerations", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure the underlying token contract is secure.</li>
                                <li> Implement appropriate access control mechanisms.</li>
                                <li> Use a reliable random number generator for account creation.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Thoroughly test the contract before deployment.</li>
                                <li> Use a trusted and audited smart contract library.</li>
                                <li> Continuously monitor for vulnerabilities.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The TokenBoundAccount contract utilizes a mapping to store the association between accounts and token holders. It defines methods for creating accounts, verifying ownership, and managing account data.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createAccount",
        signature: "createAccount(address,address)",
        params: [
          { name: "user", type: "address", description: "The address of the user." },
          { name: "token", type: "address", description: "The address of the token." },
        ],
      },
      {
        function: "deleteAccount",
        signature: "deleteAccount(uint256)",
        params: [{ name: "accountId", type: "uint256", description: "The ID of the account to delete." }],
      },
    ],
    read: [
      {
        function: "getAccount",
        signature: "getAccount(uint256)",
        params: [{ name: "accountId", type: "uint256", description: "The ID of the account." }],
      },
      {
        function: "isOwner",
        signature: "isOwner(uint256,address)",
        params: [
          { name: "accountId", type: "uint256", description: "The ID of the account." },
          { name: "user", type: "address", description: "The address of the user." },
        ],
      },
    ],
  },
  events: [
    {
      function: "AccountCreated",
      signature: "AccountCreated(uint256,address,address)",
      params: [
        { name: "accountId", type: "uint256", description: "The ID of the newly created account." },
        { name: "user", type: "address", description: "The address of the user." },
        { name: "token", type: "address", description: "The address of the token." },
      ],
      content: [],
    },
    {
      function: "AccountDeleted",
      signature: "AccountDeleted(uint256)",
      params: [{ name: "accountId", type: "uint256", description: "The ID of the deleted account." }],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "TokenBoundAccount (TBA) Whitepaper", url: "https://www.tokenbound.account/TBA-Whitepaper.pdf" },
    { title: "TokenBoundAccount (TBA) Website", url: "https://www.tokenbound.account/" },
    { title: "TokenBoundAccount (TBA) GitHub Repository", url: "https://github.com/tokenbound/tba-contracts" },
    { title: "TokenBoundAccount (TBA) Forum", url: "https://forum.tokenbound.account/" },
    { title: "TokenBoundAccount (TBA) Documentation", url: "https://docs.tokenbound.account/" },
    { title: "ERC-725 Standard", url: "https://eips.ethereum.org/EIPS/eip-725" },
    { title: "ERC-735 Standard", url: "https://eips.ethereum.org/EIPS/eip-735" },
  ],
}

export default definition
