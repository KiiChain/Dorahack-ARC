const definition: IContractDefinition = {
  name: "SignatureDrop",
  description: `A contract for minting NFTs with a signature-based whitelist.`,
  content: [
    { tag: "h1", content: "SignatureDrop Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract allows you to mint NFTs using a signature-based whitelist. It provides a secure and efficient way to manage a limited edition NFT drop, ensuring only authorized addresses can mint.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Signature-based whitelist: Allows you to control who can mint NFTs by verifying signatures.</li>
                                <li>Max supply: Sets a limit on the total number of NFTs that can be minted.</li>
                                <li>Minting price: Defines the cost of minting each NFT.</li>
                                <li>Public minting: Enables minting of NFTs after the whitelist period.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content: "To use this contract, you'll need to:",
      style: {},
    },
    {
      tag: "ul",
      content: `
                                <li>Deploy the contract and set the initial parameters.</li>
                                <li>Generate signatures for authorized addresses using a private key.</li>
                                <li>Whitelist addresses using the signatures.</li>
                                <li>Enable public minting once the whitelist period is over.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The contract implements a set of functions for managing the whitelist, minting NFTs, and updating contract parameters.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Securely store your private key for signature generation.</li>
                                <li>Test the contract thoroughly before deploying to a live network.</li>
                                <li>Consider using a gas optimization library for improved efficiency.</li>
                                <li>Regularly audit the code for vulnerabilities.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "constructor",
        signature: "constructor(address _signer, string _uri, uint256 _maxSupply, uint256 _mintPrice)",
        params: [
          {
            name: "_signer",
            type: "address",
          },
          {
            name: "_uri",
            type: "string",
          },
          {
            name: "_maxSupply",
            type: "uint256",
          },
          {
            name: "_mintPrice",
            type: "uint256",
          },
        ],
      },
      {
        function: "setBaseURI",
        signature: "setBaseURI(string _baseURI)",
        params: [
          {
            name: "_baseURI",
            type: "string",
          },
        ],
      },
      {
        function: "mint",
        signature: "mint(bytes _signature)",
        params: [
          {
            name: "_signature",
            type: "bytes",
          },
        ],
      },
      {
        function: "publicMint",
        signature: "publicMint()",
        params: [],
      },
      {
        function: "togglePublicMint",
        signature: "togglePublicMint()",
        params: [],
      },
      {
        function: "withdraw",
        signature: "withdraw()",
        params: [],
      },
    ],
    read: [
      {
        function: "signer",
        signature: "signer()",
        params: [],
      },
      {
        function: "baseURI",
        signature: "baseURI()",
        params: [],
      },
      {
        function: "maxSupply",
        signature: "maxSupply()",
        params: [],
      },
      {
        function: "mintPrice",
        signature: "mintPrice()",
        params: [],
      },
      {
        function: "totalSupply",
        signature: "totalSupply()",
        params: [],
      },
      {
        function: "isPublicMintActive",
        signature: "isPublicMintActive()",
        params: [],
      },
      {
        function: "isWhitelisted",
        signature: "isWhitelisted(address _address)",
        params: [
          {
            name: "_address",
            type: "address",
          },
        ],
      },
    ],
  },
  events: [
    {
      function: "Minted",
      signature: "Minted(address indexed _to, uint256 _tokenId)",
      params: [
        {
          name: "_to",
          type: "address",
          indexed: true,
        },
        {
          name: "_tokenId",
          type: "uint256",
          indexed: false,
        },
      ],
      content: [],
    },
    {
      function: "PublicMintEnabled",
      signature: "PublicMintEnabled()",
      params: [],
      content: [],
    },
  ],
  resources: [] as IAnchor[] | [],
  extensions: [],
  license: "MIT",
}

export default definition
