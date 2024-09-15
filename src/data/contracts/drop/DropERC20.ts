const definition: IContractDefinition = {
  name: "DropERC20",
  description: `A contract for airdropping ERC20 tokens to a list of addresses.`,
  content: [
    { tag: "h1", content: "DropERC20 Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract enables airdropping ERC20 tokens to a predetermined list of addresses. It allows the contract owner to set the token to be airdropped and the amount to be distributed to each recipient.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Airdropping ERC20 tokens to multiple addresses at once</li>
                                <li>Setting the token to be airdropped and the amount per recipient</li>
                                <li>Admin-controlled operations for initiating and managing the airdrop</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "1. Deploy the DropERC20 contract.",
      style: {},
    },
    {
      tag: "p",
      content: "2. Call the `setDropToken` function to set the token to be airdropped and its decimals.",
      style: {},
    },
    {
      tag: "p",
      content:
        "3. Call the `setRecipients` function to provide a list of recipient addresses and the amount to be airdropped to each address.",
      style: {},
    },
    {
      tag: "p",
      content:
        "4. Call the `startDrop` function to initiate the airdrop process. The contract will transfer the specified amount of tokens to each recipient address in the list.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses the ERC20 interface to interact with the token to be airdropped. It stores the list of recipients and their respective amounts in a mapping. The `startDrop` function iterates through the list and transfers the specified amount of tokens to each recipient address.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "p",
      content: "1. Ensure that the token contract has sufficient balance before initiating the airdrop.",
      style: {},
    },
    {
      tag: "p",
      content: "2. Use a secure deployment process for the contract.",
      style: {},
    },
    {
      tag: "p",
      content: "3. Test the functionality thoroughly before using it in a live environment.",
      style: {},
    },
    { tag: "h2", content: "Security Considerations", style: {} },
    {
      tag: "p",
      content:
        "1. Access Control: Only the contract owner should be able to initiate the airdrop and update the recipient list.",
      style: {},
    },
    {
      tag: "p",
      content:
        "2. Reentrancy: Ensure that the `startDrop` function is not vulnerable to reentrancy attacks. Implement appropriate safeguards to prevent malicious actors from interfering with the airdrop process.",
      style: {},
    },
    {
      tag: "p",
      content:
        "3. Gas Optimization: Optimize the code to reduce gas costs associated with airdropping tokens to a large number of recipients.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "setDropToken",
        signature: "setDropToken(address,uint8)",
        params: [
          { name: "_token", type: "address" },
          { name: "_decimals", type: "uint8" },
        ],
      },
      {
        function: "setRecipients",
        signature: "setRecipients(address[],uint256[])",
        params: [
          { name: "_recipients", type: "address[]" },
          { name: "_amounts", type: "uint256[]" },
        ],
      },
      {
        function: "startDrop",
        signature: "startDrop()",
        params: [],
      },
    ],
    read: [
      {
        function: "dropToken",
        signature: "dropToken()",
        params: [],
      },
      {
        function: "tokenDecimals",
        signature: "tokenDecimals()",
        params: [],
      },
      {
        function: "recipients",
        signature: "recipients(uint256)",
        params: [{ name: "index", type: "uint256" }],
      },
      {
        function: "amounts",
        signature: "amounts(uint256)",
        params: [{ name: "index", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "DropStarted",
      signature: "DropStarted()",
      params: [],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "OpenZeppelin ERC20 Implementation", url: "https://docs.openzeppelin.com/contracts/4.x/erc20" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum.org - Smart Contracts", url: "https://ethereum.org/en/developers/docs/smart-contracts/" },
    { title: "CryptoZombies - Learn Solidity", url: "https://cryptozombies.io/" },
    { title: "Remix IDE", url: "https://remix-ide.com/" },
    { title: "Truffle Framework", url: "https://www.trufflesuite.com/" },
    { title: "Hardhat Framework", url: "https://hardhat.org/" },
    { title: "Ethers.js Library", url: "https://docs.ethers.io/v5/" },
    { title: "Web3.js Library", url: "https://web3js.readthedocs.io/en/v1.x/" },
    { title: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/contracts/4.x/" },
  ],
}

export default definition
