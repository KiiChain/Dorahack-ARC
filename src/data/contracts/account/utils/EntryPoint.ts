const definition: IContractDefinition = {
  name: "EntryPoint",
  description: `This contract is an entry point for executing user operations on StarkNet. It is responsible for handling gas payments, validating signatures, and executing the user operation on the StarkNet system. It is also responsible for handling the execution of the user operation and the resulting state updates on the StarkNet system.`,
  content: [
    { tag: "h1", content: "EntryPoint Contract", style: {} },
    {
      tag: "p",
      content:
        "The EntryPoint contract is a core component of StarkNet's execution layer, enabling the execution of user operations on the StarkNet system.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                <li>Handles gas payments for user operations.</li>
                <li>Validates signatures for user operations.</li>
                <li>Executes user operations on the StarkNet system.</li>
                <li>Manages state updates resulting from user operations.</li>
                <li>Provides a standardized interface for interacting with StarkNet.</li>
            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "The EntryPoint contract is used by users to submit user operations to the StarkNet system. Developers can interact with the EntryPoint contract to execute user operations on their smart contracts.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The EntryPoint contract implements a number of functionalities for handling user operations, including:",
      style: {},
    },
    {
      tag: "ul",
      content: `
                <li><strong>Gas Handling:</strong> The EntryPoint contract charges a gas fee for executing user operations. The fee is calculated based on the complexity of the operation and is paid by the user submitting the operation.</li>
                <li><strong>Signature Validation:</strong> The EntryPoint contract validates the signatures provided with user operations to ensure they are authorized by the user submitting them.</li>
                <li><strong>Operation Execution:</strong> The EntryPoint contract executes the user operations submitted by users, which involves interacting with StarkNet's virtual machine to update the state of the StarkNet system.</li>
                <li><strong>State Updates:</strong> The EntryPoint contract handles the state updates resulting from the execution of user operations, ensuring the integrity and consistency of the StarkNet system's state.</li>
            `,
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                <li><strong>Security:</strong> Ensure that the EntryPoint contract is secure against vulnerabilities such as reentrancy attacks and gas manipulation.</li>
                <li><strong>Efficiency:</strong> Optimize the EntryPoint contract for performance to minimize gas costs and execution time.</li>
                <li><strong>Maintainability:</strong> Design the EntryPoint contract to be easily maintainable and extendable to support future features and functionalities.</li>
            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "execute",
        signature: "execute(uint256[],uint256[],uint256[],uint256[],uint256[],bytes calldata)",
        params: [
          {
            name: "calldata",
            type: "uint256[]",
            description: "The calldata for the user operation, which includes the function selector and arguments.",
          },
          {
            name: "calldata_length",
            type: "uint256[]",
            description: "The length of the calldata.",
          },
          {
            name: "selector",
            type: "uint256[]",
            description: "The function selector of the user operation.",
          },
          {
            name: "args",
            type: "uint256[]",
            description: "The arguments of the user operation.",
          },
          {
            name: "l1_queue_index",
            type: "uint256[]",
            description: "The index of the L1 queue from which the user operation was originated.",
          },
          {
            name: "l1_message",
            type: "bytes",
            description: "The L1 message associated with the user operation, if any.",
          },
        ],
      },
      {
        function: "simulate_execute",
        signature: "simulate_execute(uint256[],uint256[],uint256[],uint256[],uint256[],bytes calldata)",
        params: [
          {
            name: "calldata",
            type: "uint256[]",
            description: "The calldata for the user operation, which includes the function selector and arguments.",
          },
          {
            name: "calldata_length",
            type: "uint256[]",
            description: "The length of the calldata.",
          },
          {
            name: "selector",
            type: "uint256[]",
            description: "The function selector of the user operation.",
          },
          {
            name: "args",
            type: "uint256[]",
            description: "The arguments of the user operation.",
          },
          {
            name: "l1_queue_index",
            type: "uint256[]",
            description: "The index of the L1 queue from which the user operation was originated.",
          },
          {
            name: "l1_message",
            type: "bytes",
            description: "The L1 message associated with the user operation, if any.",
          },
        ],
      },
      {
        function: "get_caller_address",
        signature: "get_caller_address()",
        params: [],
      },
      {
        function: "get_block_timestamp",
        signature: "get_block_timestamp()",
        params: [],
      },
      {
        function: "get_block_number",
        signature: "get_block_number()",
        params: [],
      },
    ],
    read: [
      {
        function: "get_storage_at",
        signature: "get_storage_at(uint256,uint256)",
        params: [
          {
            name: "contract_address",
            type: "uint256",
            description: "The address of the contract.",
          },
          {
            name: "key",
            type: "uint256",
            description: "The key of the storage slot.",
          },
        ],
      },
      {
        function: "get_function_selector_from_name",
        signature: "get_function_selector_from_name(string calldata)",
        params: [
          {
            name: "function_name",
            type: "string",
            description: "The name of the function.",
          },
        ],
      },
      {
        function: "get_contract_address",
        signature: "get_contract_address()",
        params: [],
      },
    ],
  },
  events: [
    {
      function: "ExecutionResult",
      signature: "ExecutionResult(uint256,uint256,uint256,uint256[],uint256[],bytes)",
      params: [
        {
          name: "transaction_hash",
          type: "uint256",
          description: "The hash of the transaction.",
        },
        {
          name: "contract_address",
          type: "uint256",
          description: "The address of the contract.",
        },
        {
          name: "call_type",
          type: "uint256",
          description: "The type of the call.",
        },
        {
          name: "calldata",
          type: "uint256[]",
          description: "The calldata for the user operation, which includes the function selector and arguments.",
        },
        {
          name: "calldata_length",
          type: "uint256[]",
          description: "The length of the calldata.",
        },
        {
          name: "l1_message",
          type: "bytes",
          description: "The L1 message associated with the user operation, if any.",
        },
      ],
      content: [
        {
          tag: "p",
          content: "This event is emitted whenever a user operation is executed on the StarkNet system.",
          style: {},
        },
        {
          tag: "ul",
          content: `
                        <li><strong>transaction_hash</strong>: The hash of the transaction that executed the user operation.</li>
                        <li><strong>contract_address</strong>: The address of the contract that was interacted with.</li>
                        <li><strong>call_type</strong>: The type of the call (e.g., function call, constructor call, etc.).</li>
                        <li><strong>calldata</strong>: The calldata for the user operation.</li>
                        <li><strong>l1_message</strong>: The L1 message associated with the user operation.</li>
                    `,
          style: {},
        },
      ],
    },
  ],
  extensions: [],
  license: "MIT",
  resources: [],
}

export default definition
