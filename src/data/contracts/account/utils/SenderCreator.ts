const definition: IContractDefinition = {
  name: "SenderCreator",
  description: `The SenderCreator contract allows users to create and manage sender accounts with specific permission levels. These accounts can be used to send transactions on behalf of the creator without exposing the creator's primary address.`,
  content: [
    { tag: "h1", content: "SenderCreator Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract enables the creation of sender accounts with controlled permissions. These accounts can execute transactions on behalf of the creator without revealing the creator's primary address.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Create sender accounts with specific permission levels (e.g., limited to specific functions or contracts).</li>
                                <li>Control the execution of transactions by sender accounts through permission checks.</li>
                                <li>Revoke permissions or disable sender accounts for security purposes.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "1. **Deploy the SenderCreator contract:** You will need to deploy the contract on a compatible blockchain. \n 2. **Create Sender Accounts:**  Call the `createSender` function to generate new sender accounts with desired permissions. \n 3. **Execute Transactions:** Use the `execute` function of the sender account to interact with other contracts. \n 4. **Manage Permissions:**  Update or revoke permissions of sender accounts through the `updatePermissions` and `disableSender` functions.",
      style: {},
    },
    { tag: "h2", content: "Security Considerations", style: {} },
    {
      tag: "p",
      content:
        "Ensure that the permission levels assigned to sender accounts are carefully considered and adequately restrict their actions. Regularly audit the contract's code for potential vulnerabilities.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The SenderCreator contract uses a mapping to store sender accounts and their associated permissions.  Each sender account is identified by an unique ID. The contract implements functions to create, update, and disable these accounts.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createSender",
        signature: "createSender(address)",
        params: [
          {
            name: "newSender",
            type: "address",
          },
        ],
      },
      {
        function: "updatePermissions",
        signature: "updatePermissions(uint256,address[],bytes4[])",
        params: [
          {
            name: "senderId",
            type: "uint256",
          },
          {
            name: "allowedContracts",
            type: "address[]",
          },
          {
            name: "allowedFunctions",
            type: "bytes4[]",
          },
        ],
      },
      {
        function: "disableSender",
        signature: "disableSender(uint256)",
        params: [
          {
            name: "senderId",
            type: "uint256",
          },
        ],
      },
      {
        function: "execute",
        signature: "execute(address,bytes4,bytes)",
        params: [
          {
            name: "target",
            type: "address",
          },
          {
            name: "functionSignature",
            type: "bytes4",
          },
          {
            name: "data",
            type: "bytes",
          },
        ],
      },
    ],
    read: [
      {
        function: "getSender",
        signature: "getSender(uint256)",
        params: [
          {
            name: "senderId",
            type: "uint256",
          },
        ],
      },
      {
        function: "isSenderActive",
        signature: "isSenderActive(uint256)",
        params: [
          {
            name: "senderId",
            type: "uint256",
          },
        ],
      },
      {
        function: "hasPermissions",
        signature: "hasPermissions(uint256,address,bytes4)",
        params: [
          {
            name: "senderId",
            type: "uint256",
          },
          {
            name: "targetContract",
            type: "address",
          },
          {
            name: "functionSignature",
            type: "bytes4",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "SenderCreated",
      signature: "SenderCreated(uint256,address)",
      params: [
        {
          name: "senderId",
          type: "uint256",
        },
        {
          name: "senderAddress",
          type: "address",
        },
      ],
      content: [],
    },
    {
      function: "PermissionsUpdated",
      signature: "PermissionsUpdated(uint256,address[],bytes4[])",
      params: [
        {
          name: "senderId",
          type: "uint256",
        },
        {
          name: "allowedContracts",
          type: "address[]",
        },
        {
          name: "allowedFunctions",
          type: "bytes4[]",
        },
      ],
      content: [],
    },
    {
      function: "SenderDisabled",
      signature: "SenderDisabled(uint256)",
      params: [
        {
          name: "senderId",
          type: "uint256",
        },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "SenderCreator Contract Documentation (GitHub)",
      url: "https://github.com/your-repository/sendercreator/blob/main/contracts/SenderCreator.sol",
    },
    { title: "Solidity Documentation (Official)", url: "https://docs.soliditylang.org/" },
    {
      title: "Ethereum Smart Contract Development Tutorials",
      url: "https://ethereum.org/en/developers/docs/smart-contracts/",
    },
    { title: "OpenZeppelin Documentation (for common smart contract patterns)", url: "https://docs.openzeppelin.com/" },
    { title: "Ethereum Stack Exchange (for Q&A)", url: "https://ethereum.stackexchange.com/" },
  ],
}

export default definition
