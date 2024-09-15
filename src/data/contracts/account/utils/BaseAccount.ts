const definition: IContractDefinition = {
  name: "BaseAccount",
  description: `The BaseAccount contract is a foundational component of the ecosystem, enabling the creation of secure and customizable accounts for various applications. It is designed to be flexible and extensible, allowing developers to incorporate diverse functionalities into their projects.`,
  content: [
    { tag: "h1", content: "BaseAccount Contract", style: {} },
    {
      tag: "p",
      content:
        "The BaseAccount contract serves as the cornerstone for establishing accounts within the ecosystem. It provides a secure and adaptable framework for managing user identities, assets, and interactions with decentralized applications.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Customizable Account Structure:** Allows developers to tailor account properties and functionalities to suit specific application requirements.</li>
                                <li>**Secure Asset Management:** Provides robust mechanisms for managing and transferring digital assets, ensuring safety and integrity.</li>
                                <li>**Flexible Interaction Model:** Enables seamless integration with various decentralized applications, empowering users to interact with a wide range of services.</li>
                                <li>**Upgradeable Architecture:** Supports future enhancements and upgrades without compromising existing functionality.</li>
                                <li>**Decentralized Governance:** Enables community participation in shaping the evolution and direction of the BaseAccount contract.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "The BaseAccount contract can be utilized in a variety of contexts, including:",
      style: {},
    },
    {
      tag: "ul",
      content: `
                                <li>**Decentralized Identity Management:** Establish secure and verifiable user identities for access control and authentication.</li>
                                <li>**Tokenized Asset Management:** Manage and transfer digital assets, including cryptocurrencies, NFTs, and other tokenized representations of value.</li>
                                <li>**Decentralized Applications:** Serve as a foundation for building and deploying secure and user-friendly decentralized applications.</li>
                                <li>**Multi-Chain Compatibility:** Integrate seamlessly with various blockchain networks, offering cross-chain functionality.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content: "The BaseAccount contract is meticulously designed with the following considerations:",
      style: {},
    },
    {
      tag: "ul",
      content: `
                                <li>**Solidity Programming Language:** Developed using the industry-standard Solidity language, ensuring compatibility with Ethereum Virtual Machine (EVM)-based blockchains.</li>
                                <li>**Modular Design:** Implemented with a modular approach, enabling easy customization and extension.</li>
                                <li>**Gas Optimization:**  Designed to minimize gas consumption, reducing transaction costs for users.</li>
                                <li>**Security Best Practices:** Adheres to industry-leading security best practices, including code audits and vulnerability assessments.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    { tag: "p", content: "For optimal usage and security, consider the following best practices:", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Thoroughly Review Documentation:** Familiarize yourself with the contract's functionalities, limitations, and security considerations before deployment.</li>
                                <li>**Conduct Rigorous Testing:** Employ comprehensive testing strategies to ensure the contract's functionality, security, and resilience under various scenarios.</li>
                                <li>**Deploy on a Testnet:**  Deploy and test the contract on a testnet environment before deploying to a live mainnet.</li>
                                <li>**Regularly Monitor and Update:** Keep abreast of updates and security patches released for the BaseAccount contract to maintain the highest level of security.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "init",
        signature: "init(address)",
        params: [{ name: "owner", type: "address" }],
      },
      {
        function: "setOwner",
        signature: "setOwner(address)",
        params: [{ name: "newOwner", type: "address" }],
      },
      {
        function: "addModule",
        signature: "addModule(address)",
        params: [{ name: "module", type: "address" }],
      },
      {
        function: "removeModule",
        signature: "removeModule(address)",
        params: [{ name: "module", type: "address" }],
      },
      {
        function: "execute",
        signature: "execute(address,uint256,bytes)",
        params: [
          { name: "target", type: "address" },
          { name: "value", type: "uint256" },
          { name: "data", type: "bytes" },
        ],
      },
      {
        function: "setFallbackHandler",
        signature: "setFallbackHandler(address)",
        params: [{ name: "handler", type: "address" }],
      },
      {
        function: "setProxyAdmin",
        signature: "setProxyAdmin(address)",
        params: [{ name: "newAdmin", type: "address" }],
      },
    ],
    read: [
      {
        function: "owner",
        signature: "owner()",
        params: [],
      },
      {
        function: "modules",
        signature: "modules(uint256)",
        params: [{ name: "index", type: "uint256" }],
      },
      {
        function: "getFallbackHandler",
        signature: "getFallbackHandler()",
        params: [],
      },
      {
        function: "getProxyAdmin",
        signature: "getProxyAdmin()",
        params: [],
      },
      {
        function: "implementation",
        signature: "implementation()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "OwnerUpdated",
      signature: "OwnerUpdated(address,address)",
      params: [
        { name: "previousOwner", type: "address" },
        { name: "newOwner", type: "address" },
      ],
      content: [],
    },
    {
      function: "ModuleAdded",
      signature: "ModuleAdded(address)",
      params: [{ name: "module", type: "address" }],
      content: [],
    },
    {
      function: "ModuleRemoved",
      signature: "ModuleRemoved(address)",
      params: [{ name: "module", type: "address" }],
      content: [],
    },
    {
      function: "FallbackHandlerUpdated",
      signature: "FallbackHandlerUpdated(address)",
      params: [{ name: "handler", type: "address" }],
      content: [],
    },
    {
      function: "ProxyAdminUpdated",
      signature: "ProxyAdminUpdated(address)",
      params: [{ name: "newAdmin", type: "address" }],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "OpenZeppelin Account Contract Documentation",
      url: "https://docs.openzeppelin.com/contracts/4.x/access-control",
    },
    { title: "Understanding Smart Contracts", url: "https://ethereum.org/en/developers/docs/smart-contracts/" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    {
      title: "Ethereum Yellow Paper",
      url: "https://ethereum.org/en/developers/docs/whitepapers/ethereum-yellow-paper/",
    },
    { title: "Web3.js Documentation", url: "https://web3js.readthedocs.io/en/v1.x/" },
    { title: "Ethers.js Documentation", url: "https://docs.ethers.io/v5/" },
    { title: "Hardhat Documentation", url: "https://hardhat.org/getting-started/" },
    { title: "Remix IDE", url: "https://remix-ide.readthedocs.io/en/latest/" },
    { title: "Truffle Suite", url: "https://www.trufflesuite.com/docs/truffle/" },
    {
      title: "OpenZeppelin Account Contract Examples",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/access",
    },
  ],
}

export default definition
