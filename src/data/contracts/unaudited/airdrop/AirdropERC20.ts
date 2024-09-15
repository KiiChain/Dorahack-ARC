const definition: IContractDefinition = {
  name: "AirdropERC20",
  description: `AirdropERC20 contract allows for airdropping ERC20 tokens to a list of addresses. It features a simple, secure, and gas-efficient way to distribute tokens to multiple recipients.`,
  content: [
    { tag: "h1", content: "AirdropERC20 Contract", style: {} },
    {
      tag: "p",
      content:
        "The AirdropERC20 contract provides a streamlined mechanism for distributing ERC20 tokens to a list of addresses. It prioritizes efficiency and security, enabling developers to conduct airdrops with ease.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Simple and efficient airdrop functionality.</li>
                                <li>Secure distribution of ERC20 tokens to multiple recipients.</li>
                                <li>Gas-optimized design for cost-effective airdrops.</li>
                                <li>Flexible configuration to specify the token amount and recipient addresses.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To utilize the AirdropERC20 contract, follow these steps: 1. Deploy the contract. 2. Configure the airdrop parameters, including the ERC20 token address, the amount to be distributed, and the list of recipient addresses. 3. Execute the airdrop function to distribute the tokens to the specified recipients.",
      style: {},
    },
    { tag: "h2", content: "Security Considerations", style: {} },
    {
      tag: "ul",
      content: `
                                <li>The contract should only be deployed by a trusted entity to prevent unauthorized airdrops.</li>
                                <li>Ensure the accuracy of the recipient addresses and token amounts to avoid distribution errors.</li>
                                <li>Thoroughly audit the contract code to identify and address potential vulnerabilities.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The AirdropERC20 contract is implemented using the ERC20 token standard. It utilizes the `transfer` function of the ERC20 token contract to distribute the tokens to the specified recipient addresses. The airdrop process is executed in a single transaction, minimizing gas costs and ensuring efficient distribution.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "airdrop",
        signature: "airdrop(address,uint256[],address[])",
        params: [
          {
            name: "_token",
            type: "address",
            description: "Address of the ERC20 token to be airdropped.",
          },
          {
            name: "_amounts",
            type: "uint256[]",
            description: "Array of token amounts to be distributed to each recipient.",
          },
          {
            name: "_recipients",
            type: "address[]",
            description: "Array of recipient addresses for the airdrop.",
          },
        ],
      },
    ],
    read: [],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "Airdrop Smart Contract Tutorial", url: "https://www.youtube.com/watch?v=w8B3i7F2r6M" },
    {
      title: "Building an Airdrop Smart Contract in Solidity",
      url: "https://blog.openzeppelin.com/building-an-airdrop-smart-contract-in-solidity/",
    },
    { title: "ERC20 Token Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
    { title: "OpenZeppelin ERC20 Contract", url: "https://docs.openzeppelin.com/contracts/4.x/api/token/ERC20" },
    {
      title: "How to Create an Airdrop Smart Contract",
      url: "https://medium.com/coinmonks/how-to-create-an-airdrop-smart-contract-7b5043362616",
    },
    { title: "Solidity Tutorial: Airdrop Smart Contract", url: "https://www.youtube.com/watch?v=y8Zt_Z83D5Y" },
    {
      title: "Airdrop Smart Contract: A Comprehensive Guide",
      url: "https://www.blockchain-council.org/blockchain/airdrop-smart-contract-a-comprehensive-guide/",
    },
    { title: "Building an Airdrop Contract with Hardhat", url: "https://www.youtube.com/watch?v=0P3_M_k2z0A" },
    {
      title: "Airdrop Smart Contracts: A Beginner's Guide",
      url: "https://www.tutorialspoint.com/airdrop-smart-contracts-a-beginners-guide",
    },
    {
      title: "How to Create an Airdrop Smart Contract on Ethereum",
      url: "https://www.ethereum.org/en/developers/tutorials/how-to-create-an-airdrop-smart-contract/",
    },
  ],
}

export default definition
