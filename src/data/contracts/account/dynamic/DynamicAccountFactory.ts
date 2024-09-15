const definition: IContractDefinition = {
  name: "DynamicAccountFactory",
  description: `A contract that allows creating dynamic accounts with unique IDs. The owner can customize these accounts by setting their initial state, specifying their functionality with bytecode and runtime code, and controlling their permissions. These accounts can be deployed in various ways based on the chosen configuration, offering flexibility in their deployment.`,
  content: [
    { tag: "h1", content: "DynamicAccountFactory Contract", style: {} },
    {
      tag: "p",
      content:
        "The DynamicAccountFactory contract facilitates the creation and management of dynamic accounts with customizable functionalities. It enables the owner to define the account's initial state, choose the desired code execution environment, and control its permissions. These accounts can be deployed in various ways, including creating them as standalone contracts or as part of a larger application.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Create dynamic accounts with unique IDs.</li>
                                <li>Customize the account's initial state, including storage values and permissions.</li>
                                <li>Define the account's functionality by specifying the execution environment using bytecode and runtime code.</li>
                                <li>Deploy accounts as standalone contracts or integrate them into existing applications.</li>
                                <li>Manage account permissions, including controlling access to specific functionalities.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To utilize the DynamicAccountFactory, you can interact with its functions to create new accounts, configure their initial state, and manage their permissions. The `createAccount` function allows you to specify the desired configurations, including the initial state and code execution environment. Subsequent interactions with the created account are facilitated through its own unique address, allowing for customized functionalities and interactions.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The DynamicAccountFactory is implemented using a combination of state variables, functions, and events. The `accounts` mapping stores information about each created account, including its ID, state, and deployment configuration. The `createAccount` function handles the creation and initialization of new accounts, while the `setAccountState` and `setAccountPermission` functions allow for customizing the account's state and permissions. The `deployAccount` function facilitates the deployment of the created account as a separate contract or as part of an existing application. Various events are emitted to track important actions like account creation, state updates, and deployment.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "p",
      content:
        "When utilizing the DynamicAccountFactory, it's essential to adhere to security best practices. Carefully consider the initial state and permissions assigned to each account to ensure that only authorized actions are allowed. Thoroughly test the code execution environment and functionalities before deploying accounts to avoid potential vulnerabilities. Regularly audit the contracts for security risks and keep them updated with the latest security patches.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createAccount",
        signature: "createAccount(uint256,bytes,bytes)",
        params: [
          { name: "initialState", type: "uint256" },
          { name: "bytecode", type: "bytes" },
          { name: "runtimeCode", type: "bytes" },
        ],
      },
      {
        function: "setAccountState",
        signature: "setAccountState(uint256,uint256)",
        params: [
          { name: "accountId", type: "uint256" },
          { name: "newState", type: "uint256" },
        ],
      },
      {
        function: "setAccountPermission",
        signature: "setAccountPermission(uint256,bool)",
        params: [
          { name: "accountId", type: "uint256" },
          { name: "permission", type: "bool" },
        ],
      },
      {
        function: "deployAccount",
        signature: "deployAccount(uint256)",
        params: [{ name: "accountId", type: "uint256" }],
      },
    ],
    read: [
      {
        function: "getAccountState",
        signature: "getAccountState(uint256)",
        params: [{ name: "accountId", type: "uint256" }],
      },
      {
        function: "getAccountPermission",
        signature: "getAccountPermission(uint256)",
        params: [{ name: "accountId", type: "uint256" }],
      },
      {
        function: "getAccountAddress",
        signature: "getAccountAddress(uint256)",
        params: [{ name: "accountId", type: "uint256" }],
      },
    ],
  },
  events: [
    {
      function: "AccountCreated",
      signature: "AccountCreated(uint256,address)",
      params: [
        { name: "accountId", type: "uint256" },
        { name: "accountAddress", type: "address" },
      ],
      content: [],
    },
    {
      function: "AccountStateUpdated",
      signature: "AccountStateUpdated(uint256,uint256)",
      params: [
        { name: "accountId", type: "uint256" },
        { name: "newState", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "AccountPermissionUpdated",
      signature: "AccountPermissionUpdated(uint256,bool)",
      params: [
        { name: "accountId", type: "uint256" },
        { name: "permission", type: "bool" },
      ],
      content: [],
    },
    {
      function: "AccountDeployed",
      signature: "AccountDeployed(uint256,address)",
      params: [
        { name: "accountId", type: "uint256" },
        { name: "accountAddress", type: "address" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "DynamicAccountFactory Contract on Etherscan", url: "https://etherscan.io/address/<CONTRACT_ADDRESS>" },
    {
      title: "OpenZeppelin Factory Contract Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/utils/cryptography#DynamicAccountFactory",
    },
    { title: "Creating and Using Dynamic Accounts", url: "https://blog.openzeppelin.com/dynamic-accounts/" },
    {
      title: "Dynamic Account Factory Explained",
      url: "https://medium.com/ethereum-dev/dynamic-account-factory-explained-55635096a8a9",
    },
    {
      title: "Dynamic Account Factory Example",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/cryptography/DynamicAccountFactory.sol",
    },
  ],
}

export default definition
