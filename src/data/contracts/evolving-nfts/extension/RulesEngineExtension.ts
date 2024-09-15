const definition: IContractDefinition = {
  name: "RulesEngineExtension",
  description: `A Solidity contract for defining and executing rules using a flexible expression-based system.`,
  content: [
    { tag: "h1", content: "RulesEngineExtension Contract", style: {} },
    {
      tag: "p",
      content:
        "The RulesEngineExtension contract provides a powerful and customizable mechanism for implementing complex rule-based logic within your smart contracts. It uses a flexible expression syntax to define rules, allowing for a wide range of conditions and actions.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Expression-based rule definition:** Define rules using a clear and concise syntax that allows for complex conditions and actions.</li>
                                <li>**Customizable rule evaluation:**  Supports various data types and operators, enabling you to create rules that suit your specific needs.</li>
                                <li>**Modular design:** Easily integrate the RulesEngineExtension into your existing smart contracts.</li>
                                <li>**Gas efficiency:** Optimized for efficient execution, minimizing gas consumption during rule evaluation.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "1. **Initialize the RulesEngineExtension:** Deploy the contract and store its address for future reference. 2. **Define your rules:** Use the provided functions to register rules with the desired expressions and actions. 3. **Evaluate rules:** Trigger rule evaluation by calling the appropriate function, providing the necessary context. 4. **Retrieve results:** Access the results of rule evaluation using the defined methods.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "The RulesEngineExtension contract utilizes a robust expression evaluation engine to handle complex rule logic. It leverages a stack-based approach for efficient computation. The contract also employs well-defined data structures for storing rules and their associated metadata.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Test thoroughly:** Rigorous testing is essential for validating the correctness and security of your rules. Ensure that you test all possible scenarios and edge cases.</li>
                                <li>**Keep expressions simple:**  Strive for clear and concise expressions to enhance readability and maintainability. Avoid overly complex expressions that can lead to errors or inefficiencies.</li>
                                <li>**Minimize gas usage:** Optimize your rule definitions to minimize gas consumption. Consider using efficient data structures and limiting the complexity of expressions.</li>
                                <li>**Use appropriate error handling:** Implement robust error handling mechanisms to manage unexpected situations during rule evaluation. Handle potential exceptions gracefully to ensure the integrity of your contract.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Security Considerations", style: {} },
    {
      tag: "ul",
      content: `
                                <li>**Reentrancy prevention:**  Implement reentrancy guards to protect against malicious attacks that could manipulate the execution flow of your contract.</li>
                                <li>**Input sanitization:** Validate user input to prevent unexpected behavior or potential vulnerabilities due to malicious data.</li>
                                <li>**Access control:** Enforce appropriate access controls to limit unauthorized interactions with your rules.</li>
                                <li>**Solidity best practices:** Adhere to Solidity best practices to minimize the risk of security vulnerabilities.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "addRule",
        signature: "addRule(string,bytes)",
        params: [
          { name: "ruleId", type: "string" },
          { name: "expression", type: "bytes" },
        ],
      },
      {
        function: "setRuleAction",
        signature: "setRuleAction(string,bytes)",
        params: [
          { name: "ruleId", type: "string" },
          { name: "action", type: "bytes" },
        ],
      },
      {
        function: "setRuleContext",
        signature: "setRuleContext(string,bytes)",
        params: [
          { name: "ruleId", type: "string" },
          { name: "context", type: "bytes" },
        ],
      },
    ],
    read: [
      {
        function: "getRule",
        signature: "getRule(string)",
        params: [{ name: "ruleId", type: "string" }],
      },
      {
        function: "evaluateRule",
        signature: "evaluateRule(string)",
        params: [{ name: "ruleId", type: "string" }],
      },
    ],
  },
  events: [
    {
      function: "RuleAdded",
      signature: "RuleAdded(string,bytes,bytes,bytes)",
      params: [
        { name: "ruleId", type: "string" },
        { name: "expression", type: "bytes" },
        { name: "action", type: "bytes" },
        { name: "context", type: "bytes" },
      ],
      content: [] as IRichText[],
    },
    {
      function: "RuleEvaluated",
      signature: "RuleEvaluated(string,bool)",
      params: [
        { name: "ruleId", type: "string" },
        { name: "result", type: "bool" },
      ],
      content: [] as IRichText[],
    },
  ],
  extensions: [] as IContractExtension[],
  license: "MIT",

  resources: [
    { title: "Chainlink Documentation: Chainlink Keepers", url: "https://docs.chain.link/docs/keepers/introduction" },
    {
      title: "Chainlink Blog: How to Build a Decentralized Rules Engine with Chainlink Keepers",
      url: "https://blog.chain.link/build-a-decentralized-rules-engine-with-chainlink-keepers/",
    },
    {
      title: "OpenZeppelin Documentation:  Chainlink Keepers Integration",
      url: "https://docs.openzeppelin.com/contracts/4.x/examples-chainlink-keepers",
    },
    {
      title: "Solidity Documentation:  Solidity Contract Development",
      url: "https://docs.soliditylang.org/en/v0.8.17/",
    },
  ],
}

export default definition
