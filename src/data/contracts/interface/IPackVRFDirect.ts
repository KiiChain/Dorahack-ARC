const definition: IContractDefinition = {
  name: "IPackVRFDirect",
  description: `Interface for VRFDirect contract.`,
  content: [
    { tag: "h1", content: "IPackVRFDirect Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions and events of the VRFDirect contract. It provides a way for external contracts to interact with the VRFDirect contract and utilize its functionality.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Provides an interface for external contracts to interact with the VRFDirect contract.</li>
                                <li>Allows for requesting random numbers directly from the VRFDirect contract.</li>
                                <li>Emits events for successful and failed VRF requests.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To utilize the VRFDirect functionality, an external contract can implement this interface and call the relevant functions. The contract can then receive random numbers through the events emitted by the VRFDirect contract.",
      style: {},
    },
    { tag: "h2", content: "Example Usage", style: {} },
    {
      tag: "pre",
      content: `
                                // Example usage
                                contract MyContract {
                                    IPackVRFDirect vrfDirect;
                                    
                                    constructor(address _vrfDirect) {
                                        vrfDirect = IPackVRFDirect(_vrfDirect);
                                    }
                                    
                                    function requestRandomNumber() {
                                        vrfDirect.requestRandomNumber();
                                    }
                                    
                                    function onRandomNumberReceived(uint256 randomNumber) {
                                        // Handle the received random number
                                    }
                                }
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "requestRandomNumber",
        signature: "requestRandomNumber()",
        params: [],
      },
    ],
    read: [
      {
        function: "lastRequestId",
        signature: "lastRequestId() view returns (uint256)",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "RandomNumberRequested",
      signature: "RandomNumberRequested(uint256)",
      params: [{ name: "requestId", type: "uint256" }],
      content: [],
    },
    {
      function: "RandomNumberReceived",
      signature: "RandomNumberReceived(uint256,uint256)",
      params: [
        { name: "requestId", type: "uint256" },
        { name: "randomNumber", type: "uint256" },
      ],
      content: [],
    },
    {
      function: "RandomNumberRequestFailed",
      signature: "RandomNumberRequestFailed(uint256,string)",
      params: [
        { name: "requestId", type: "uint256" },
        { name: "reason", type: "string" },
      ],
      content: [],
    },
  ],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "IPackVRFDirect Contract on Etherscan", url: "https://etherscan.io/address/0x..." },
    { title: "Chainlink VRF Documentation", url: "https://docs.chain.link/docs/vrf/" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/contracts/4.x/" },
    { title: "IPackVRFDirect GitHub Repository", url: "https://github.com/..." },
  ],
}

export default definition
