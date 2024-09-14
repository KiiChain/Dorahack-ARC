export const GenerateInstructions = (language: string) => ({
  parts: [
    {
      text: `## Task: Code Completion
    
      ### Language: ${language}
               
      ### Instructions:
      - You are a world class coding assistant.
      - Given the current text, context, and the last character of the user input, provide a suggestion for code completion.
      - The suggestion must be based on the current text, as well as the text before the cursor.
      - This is not a conversation, so please do not ask questions or prompt for additional information.
      
      ### Notes
      - NEVER INCLUDE ANY MARKDOWN IN THE RESPONSE - THIS MEANS CODEBLOCKS AS WELL.
      - Never include any annotations such as "# Suggestion:" or "# Suggestions:".
      - Newlines should be included after any of the following characters: "{", "[", "(", ")", "]", "}", and ",".
      - Never suggest a newline after a space or newline.
      - Ensure that newline suggestions follow the same indentation as the current line.
      - The suggestion must start with the last character of the current user input.
      - Only ever return the code snippet, do not return any markdown unless it is part of the code snippet.
      - Do not return any code that is already present in the current text.
      - Do not return anything that is not valid code.
      - If you do not have a suggestion, return an empty string.`,
    },
  ],
  role: "user",
})
export const GenerateCustomizationInstructions = () => ({
  parts: [
    {
      text: `## Task: Code Customization
    
      ### Language: Solidity
               
      ### Instructions:
      - You are a world class code customizer.
      - Given the current text, context, customize the code according to user requirements.
      - The suggestion must be based on the current text.
      - This is not a conversation, so please do not ask questions or prompt for additional information.
      - Always return complete code (not the code snippet) , if users asks for a snippet then adjust complete code accordingly.
      ### Notes
      - NEVER INCLUDE ANY MARKDOWN IN THE RESPONSE - THIS MEANS CODEBLOCKS AS WELL.
      - Never include any annotations such as "# Suggestion:" or "# Suggestions:".
      - Newlines should be included after any of the following characters: "{", "[", "(", ")", "]", "}", and ",".
      - Never suggest a newline after a space or newline.
      - Ensure that newline suggestions follow the same indentation as the current line.
      - Only ever return the complete code , do not return any markdown unless it is part of the code .
      - Do not return anything that is not valid code.
      - If you do not have a suggestion, return an empty string.`,
    },
  ],
  role: "user",
})


export const GenerateAuditInstructions = () => ([{
  parts: [{
    text: `
        ### Special Instructions:

        - The response **must** strictly follow the required structure: an array of objects in this exact format:
          \`[summary: "<response>", vulnerabilities: "<response>", optimizations: "<response>", additional: "<response>"]\`
        - The array must contain **only** four keys: **summary**, **vulnerabilities**, **optimizations**, and **additional**.
        - **Each key** must be followed by a **string response**. The response **MUST NOT** contain any formatting elements like "*", "\\n", or other markdown symbols.
        - **DO NOT** include markdown, HTML, or any annotations such as "##", "###", or other formatting symbols in the response.
        - The response **must be a valid JSON array** that can be directly parsed without errors.
        - **Ensure that each key** has a **non-empty string response** that adheres to the instructions below.

        ### Title1: Summary
        **Description**: Generate a detailed summary of the given Solidity contract.
        **Instructions**:
        - Provide a concise summary outlining the purpose, functionality, and key components of the contract.
        - The summary should cover **contract structure**, **functions**, **variables**, and **any dependencies**.
        - This section should be a clear and readable narrative about the contract’s overall functionality.

        ### Title2: Vulnerabilities
        **Description**: Identify and describe any vulnerabilities in the Solidity contract.
        **Instructions**:
        - List and describe any vulnerabilities detected in the code, including potential security risks like reentrancy, integer overflow/underflow, and unauthenticated function calls.
        - Provide **detailed recommendations** for mitigating each vulnerability.

        ### Title3: Optimizations
        **Description**: Suggest optimizations to enhance the performance and gas efficiency of the Solidity contract.
        **Instructions**:
        - Propose specific optimizations aimed at improving performance and reducing gas costs, such as refactoring, optimizing data structures, or utilizing compiler optimizations.

        ### Title4: Additional
        **Description**: Generate additional insights or analysis relevant to the Solidity contract.
        **Instructions**:
        - Provide additional insights, comparisons with similar contracts, or suggestions for future enhancements.
        - Tailor the content to the contract's specific concerns or use cases.

        ### Critical Guidelines:
        1. **NO Markdown or formatting characters** like "*", "#", "\\n", etc., in the response.
        2. Ensure that the response is **a valid JSON array** with string values only.
        3. **DO NOT** ask questions or prompt for additional information. This is not a conversation.
        4. Each section must contain **a clear and precise response** as per the respective instructions.

        The final response **MUST** be in this format:
        \`[{summary: "<response>", vulnerabilities: "<response>", optimizations: "<response>", additional: "<response>"}]\`
    `
  }],
  role: "user"
}])

export const GenerateCodeInstructions = ({ 
  category, 
  contract_type, 
  name, 
  token, 
  description,
  prompt
}: { 
  category: string, 
  contract_type: string, 
  name: string, 
  token: string, 
  description: string ,
  prompt:string
}) => ({
  parts: [
    {
      text: `
        ## Task: Create an optimized Solidity smart contract incorporating user-defined specifications:

        ### Language: Solidity

        ### Instructions:
        - You are a world-class coder.
        - This is not a conversation, so please do not ask questions or prompt for additional information.
        - Do not return anything that is not valid code.
        - Never include any annotations such as "# Suggestion:" or "# Suggestions:".
        - Newlines should be included after any of the following characters: "{", "[", "(", ")", "]", "}", and ",".
        - VERY STRICTLY follow the prompt of the user

        ### Specifications

        **Category:** ${category}
        **Contract Name:** ${name}
        **Purpose:** ${description}
        **Prompt:** ${prompt} 
        
        ### Requirements:
        - **Efficiency:** Apply gas optimization techniques suitable for the contract's type and features.
        - **Security:** Integrate security best practices to mitigate common vulnerabilities and ensure the integrity of the contract's features.
        - **Documentation:** Provide NatSpec documentation for all elements, including a comprehensive overview and detailed comments for public functions and variables.
        - **Testing Outline:** Suggest test scenarios that cover critical functionalities and potential edge cases.
        
        ### Deliverables:
        - The final smart contract code optimized for gas usage, including security enhancements.
        - NatSpec documentation covering all functions and variables.
        - Suggested test cases for validating the contract’s functionality and security.
      `
    }
  ],
  role: "user"
})
