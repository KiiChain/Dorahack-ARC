const definition: IContractDefinition = {
  name: "IAccountFactory",
  description: `Interface for AccountFactory contract.`,
  content: [
    { tag: "h1", content: "IAccountFactory Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions of an AccountFactory contract, responsible for creating and managing accounts.",
      style: {},
    },
    { tag: "h2", content: "Functions", style: {} },
    {
      tag: "ul",
      content: `
                                <li>createAccount(address owner): Creates a new account with the specified owner.</li>
                                <li>getAccount(address account): Returns the account address associated with the given owner.</li>
                                <li>getAccountOwner(address account): Returns the owner address associated with the given account.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createAccount",
        signature: "createAccount(address)",
        params: [
          {
            name: "owner",
            type: "address",
            description: "The address of the owner of the new account.",
          },
        ],
      },
    ],
    read: [
      {
        function: "getAccount",
        signature: "getAccount(address)",
        params: [
          {
            name: "owner",
            type: "address",
            description: "The address of the account owner.",
          },
        ],
      },
      {
        function: "getAccountOwner",
        signature: "getAccountOwner(address)",
        params: [
          {
            name: "account",
            type: "address",
            description: "The address of the account.",
          },
        ],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "IAccountFactory Interface Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/contracts/access/IAccountFactory.sol",
    },
    { title: "Account Abstraction Overview", url: "https://ethereum.org/en/developers/docs/account-abstraction/" },
    { title: "EIP-2938: Account Abstraction", url: "https://eips.ethereum.org/EIPS/eip-2938" },
    {
      title: "Account Abstraction on Ethereum: A Beginner's Guide",
      url: "https://blog.alchemy.com/account-abstraction-ethereum/",
    },
    {
      title: "Account Abstraction: The Future of Ethereum",
      url: "https://blog.consensys.net/account-abstraction-the-future-of-ethereum/",
    },
    { title: "Account Abstraction and the Future of Ethereum", url: "https://www.youtube.com/watch?v=l7p97F-dK-g" },
    {
      title: "Building with Account Abstraction: An Introduction",
      url: "https://blog.openzeppelin.com/building-with-account-abstraction-an-introduction/",
    },
  ],
}

export default definition
