const definition: IContractDefinition = {
  name: "AirdropERC1155",
  description: `This contract implements an airdrop mechanism for ERC1155 tokens, allowing the contract owner to distribute tokens to a list of recipients.`,
  content: [
    { tag: "h1", content: "AirdropERC1155 Contract", style: {} },
    {
      tag: "p",
      content:
        "The AirdropERC1155 contract is a smart contract designed to facilitate airdrops of ERC1155 tokens to a predefined list of recipients. This allows for efficient and secure distribution of tokens to a large number of users.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li><strong>Airdrop functionality:</strong> Allows the contract owner to distribute ERC1155 tokens to a list of recipients.</li>
                                <li><strong>Configurable token IDs and amounts:</strong> The contract supports airdropping multiple token IDs with specific quantities to each recipient.</li>
                                <li><strong>Gas-efficient distribution:</strong> The airdrop process is optimized for gas efficiency, reducing the cost of distributing tokens.</li>
                                <li><strong>Owner-controlled:</strong> Only the contract owner can initiate airdrop operations.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "To use the AirdropERC1155 contract, follow these steps:",
      style: {},
    },
    {
      tag: "ol",
      content: `
                                <li>Deploy the contract and set the ERC1155 token address.</li>
                                <li>Call the 'addRecipients' function to add a list of recipients to the airdrop.</li>
                                <li>Call the 'airdrop' function to distribute the tokens to the recipients.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract uses a mapping to store the list of recipients and their corresponding token amounts. The airdrop function iterates through the recipients list, transferring the appropriate tokens to each address.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Ensure that the ERC1155 token contract has granted the AirdropERC1155 contract the necessary transfer permissions.</li>
                                <li>Thoroughly test the contract on a testnet before deploying it to a mainnet.</li>
                                <li>Consider using a gas optimization tool to minimize transaction costs during the airdrop.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "addRecipients",
        signature: "addRecipients(address[],uint256[],uint256[])",
        params: [
          { name: "recipients", type: "address[]" },
          { name: "tokenIds", type: "uint256[]" },
          { name: "amounts", type: "uint256[]" },
        ],
      },
      {
        function: "airdrop",
        signature: "airdrop()",
        params: [],
      },
      {
        function: "setERC1155Token",
        signature: "setERC1155Token(address)",
        params: [{ name: "tokenAddress", type: "address" }],
      },
    ],
    read: [
      {
        function: "getRecipient",
        signature: "getRecipient(uint256)",
        params: [{ name: "index", type: "uint256" }],
      },
      {
        function: "getRecipientTokenData",
        signature: "getRecipientTokenData(uint256)",
        params: [{ name: "index", type: "uint256" }],
      },
      {
        function: "getERC1155Token",
        signature: "getERC1155Token()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "AirdropStarted",
      signature: "AirdropStarted()",
      params: [],
      content: [],
    },
    {
      function: "AirdropCompleted",
      signature: "AirdropCompleted()",
      params: [],
      content: [],
    },
    {
      function: "RecipientAdded",
      signature: "RecipientAdded(address,uint256,uint256)",
      params: [
        { name: "recipient", type: "address" },
        { name: "tokenId", type: "uint256" },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "TokensTransferred",
      signature: "TokensTransferred(address,uint256,uint256)",
      params: [
        { name: "recipient", type: "address" },
        { name: "tokenId", type: "uint256" },
        { name: "amount", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "ERC1155TokenSet",
      signature: "ERC1155TokenSet(address)",
      params: [{ name: "tokenAddress", type: "address" }],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "OpenZeppelin ERC1155 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc1155" },
    {
      title: "Airdrop Contract Example (OpenZeppelin)",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/utils/ERC1155Holder.sol",
    },
    {
      title: "Airdrop Tutorial (Moralis)",
      url: "https://moralis.io/blog/how-to-create-an-airdrop-smart-contract-in-solidity/",
    },
    { title: "Airdrop Contract Example (Hardhat)", url: "https://www.youtube.com/watch?v=m2u6F5q9d9o" },
    {
      title: "Understanding Airdrops and their Implementation",
      url: "https://medium.com/coinmonks/understanding-airdrops-and-their-implementation-8428513b0987",
    },
    {
      title: "Airdrop Smart Contract Security Considerations",
      url: "https://blog.openzeppelin.com/airdrop-smart-contract-security-considerations/",
    },
  ],
}

export default definition
