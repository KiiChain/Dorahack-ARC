const definition: IContractDefinition = {
  name: "IAccountFactoryCore",
  description: `Interface for the account factory core contract.`,
  content: [
    { tag: "h1", content: "IAccountFactoryCore Contract", style: {} },
    { tag: "p", content: "This interface defines the core functions of an account factory contract.", style: {} },
    { tag: "h2", content: "Functions", style: {} },
    {
      tag: "ul",
      content: `
                                <li><b>createAccount(address _owner, string _name):</b> Creates a new account with the specified owner and name.</li>
                                <li><b>getAccount(string _name):</b> Retrieves the address of an account by its name.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "createAccount",
        signature: "createAccount(address,string)",
        params: [
          { name: "_owner", type: "address" },
          { name: "_name", type: "string" },
        ],
      },
    ],
    read: [
      {
        function: "getAccount",
        signature: "getAccount(string)",
        params: [{ name: "_name", type: "string" }],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "IAccountFactoryCore Interface Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/api/contracts/access/IAccountFactoryCore.html",
    },
    { title: "Account Abstraction - EIP-4337", url: "https://eips.ethereum.org/EIPS/eip-4337" },
    { title: "Account Abstraction: Design and Implementation", url: "https://eprint.iacr.org/2023/1079.pdf" },
    {
      title: "Account Abstraction - Ethereum.org",
      url: "https://ethereum.org/en/developers/docs/accounts/account-abstraction/",
    },
    { title: "Account Abstraction - StarkWare", url: "https://starkware.co/account-abstraction/" },
  ],
}

export default definition
