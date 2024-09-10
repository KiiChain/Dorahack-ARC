declare module "solc" {
  // You can declare any functions and types used by solc here
  export function compile(input: string): string
  export function version(): string

  // If needed, define specific structures for input/output
  interface SolcInput {
    language: string
    sources: { [key: string]: { content: string } }
    settings: {
      outputSelection: {
        "*": {
          "*": string[]
        }
      }
    }
  }

  interface SolcOutput {
    contracts: {
      [fileName: string]: {
        [contractName: string]: {
          abi: ITemporaryVariable[]
          evm: {
            bytecode: {
              object: string
            }
          }
        }
      }
    }
  }
}
