const definition: IContractDefinition = {
  name: "IEntryPoint",
  description: `Interface for entry point of a reentrancy guard`,
  content: [
    { tag: "h1", content: "IEntryPoint Contract", style: {} },
    { tag: "p", content: "This contract defines the interface for the entry point of a reentrancy guard.", style: {} },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Provides a standard interface for reentrancy guard entry points.</li>
                                <li>Simplifies the integration of reentrancy guards into different contracts.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the IEntryPoint interface, implement it in your contract that requires reentrancy protection. The `check()` function should be called at the beginning of any critical operation that could lead to reentrancy vulnerabilities.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The `check()` function should be implemented to manage the reentrancy guard's state. A common implementation uses a boolean flag that is set to true when a function is called and reset to false when the function returns. Any attempts to call the function again while the flag is true would be considered a reentrancy attempt and prevented.",
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "check",
        signature: "check()",
        params: [],
      },
    ],
    read: [],
  },
  events: [],
  extensions: [],
  license: "MIT",
  resources: [],
}

export default definition
