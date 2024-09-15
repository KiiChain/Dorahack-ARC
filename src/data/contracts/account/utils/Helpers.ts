const definition: IContractDefinition = {
  name: "Helpers",
  description: `A library of reusable helper functions for various common Solidity tasks.`,
  content: [
    { tag: "h1", content: "Helpers Contract", style: {} },
    {
      tag: "p",
      content:
        "This contract provides a collection of helper functions that can be used in other smart contracts. These functions cover tasks such as address validation, safe math operations, and data manipulation. ",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
            <li>**Address Validation:** Helper functions to validate Ethereum addresses and ensure they are valid.</li>
            <li>**Safe Math:** Functions for performing arithmetic operations safely, preventing overflows and underflows.</li>
            <li>**Data Manipulation:** Functions to work with bytes arrays, strings, and other data types efficiently.</li>
            <li>**String Utilities:** Functions for string manipulation, such as splitting and joining strings.</li>
            <li>**Time and Block Operations:** Functions for obtaining current block timestamps and block numbers.</li>
        `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the helper functions, simply import the Helpers contract into your own smart contract and call the desired functions.",
      style: {},
    },
    {
      tag: "h2",
      content: "Examples",
      style: {},
    },
    {
      tag: "p",
      content: "Here's an example of how to use the address validation helper function:",
      style: {},
    },
    {
      tag: "code",
      content: `
            // Import the Helpers contract
            import "./Helpers.sol";

            // ... your contract code ...

            function myFunction(address _address) public {
                // Validate the address using the helper function
                require(Helpers.isValidAddress(_address), "Invalid address provided");
                // ... rest of your function logic ...
            }
            `,
      style: {},
    },
    {
      tag: "h2",
      content: "Implementation Details",
      style: {},
    },
    {
      tag: "p",
      content: "The Helpers contract implements each helper function using best practices for security and efficiency.",
      style: {},
    },
    {
      tag: "h2",
      content: "Best Practices",
      style: {},
    },
    {
      tag: "ul",
      content: `
            <li>Always use the helper functions provided by the Helpers contract for common tasks.</li>
            <li>Ensure you understand the functionality of each helper function before using it.</li>
            <li>Review the code of the Helpers contract for any potential vulnerabilities before integrating it into your project.</li>
        `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "setUint256",
        signature: "setUint256(bytes memory _data, uint256 _index, uint256 _value)",
        params: [
          {
            name: "_data",
            type: "bytes",
          },
          {
            name: "_index",
            type: "uint256",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
      },
      {
        function: "setBytes32",
        signature: "setBytes32(bytes memory _data, uint256 _index, bytes32 _value)",
        params: [
          {
            name: "_data",
            type: "bytes",
          },
          {
            name: "_index",
            type: "uint256",
          },
          {
            name: "_value",
            type: "bytes32",
          },
        ],
      },
      {
        function: "setAddress",
        signature: "setAddress(bytes memory _data, uint256 _index, address _value)",
        params: [
          {
            name: "_data",
            type: "bytes",
          },
          {
            name: "_index",
            type: "uint256",
          },
          {
            name: "_value",
            type: "address",
          },
        ],
      },
      {
        function: "setBool",
        signature: "setBool(bytes memory _data, uint256 _index, bool _value)",
        params: [
          {
            name: "_data",
            type: "bytes",
          },
          {
            name: "_index",
            type: "uint256",
          },
          {
            name: "_value",
            type: "bool",
          },
        ],
      },
    ],
    read: [
      {
        function: "isValidAddress",
        signature: "isValidAddress(address _address)",
        params: [
          {
            name: "_address",
            type: "address",
          },
        ],
      },
      {
        function: "getUint256",
        signature: "getUint256(bytes memory _data, uint256 _index)",
        params: [
          {
            name: "_data",
            type: "bytes",
          },
          {
            name: "_index",
            type: "uint256",
          },
        ],
      },
      {
        function: "getBytes32",
        signature: "getBytes32(bytes memory _data, uint256 _index)",
        params: [
          {
            name: "_data",
            type: "bytes",
          },
          {
            name: "_index",
            type: "uint256",
          },
        ],
      },
      {
        function: "getAddress",
        signature: "getAddress(bytes memory _data, uint256 _index)",
        params: [
          {
            name: "_data",
            type: "bytes",
          },
          {
            name: "_index",
            type: "uint256",
          },
        ],
      },
      {
        function: "getBool",
        signature: "getBool(bytes memory _data, uint256 _index)",
        params: [
          {
            name: "_data",
            type: "bytes",
          },
          {
            name: "_index",
            type: "uint256",
          },
        ],
      },
      {
        function: "toBytes",
        signature: "toBytes(uint256 _value)",
        params: [
          {
            name: "_value",
            type: "uint256",
          },
        ],
      },
      {
        function: "toBytes",
        signature: "toBytes(bytes32 _value)",
        params: [
          {
            name: "_value",
            type: "bytes32",
          },
        ],
      },
      {
        function: "toBytes",
        signature: "toBytes(address _value)",
        params: [
          {
            name: "_value",
            type: "address",
          },
        ],
      },
      {
        function: "toBytes",
        signature: "toBytes(bool _value)",
        params: [
          {
            name: "_value",
            type: "bool",
          },
        ],
      },
      {
        function: "getBlockTimestamp",
        signature: "getBlockTimestamp()",
        params: [],
      },
      {
        function: "getBlockNumber",
        signature: "getBlockNumber()",
        params: [],
      },
      {
        function: "splitString",
        signature: "splitString(string memory _str, string memory _delimiter)",
        params: [
          {
            name: "_str",
            type: "string",
          },
          {
            name: "_delimiter",
            type: "string",
          },
        ],
      },
      {
        function: "joinString",
        signature: "joinString(string[] memory _strArray, string memory _delimiter)",
        params: [
          {
            name: "_strArray",
            type: "string[]",
          },
          {
            name: "_delimiter",
            type: "string",
          },
        ],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",
  resources: [],
}

export default definition
