interface ICompilerOutput {
  contracts: {
    [key: `${string}.sol`]: {
      [key: string]: {
        abi: Abi[] // viem.Abi
        evm: {
          bytecode: {
            functionDebugData: {}
            generatedSources: never[]
            linkReferences: {}
            object: string
            opcodes: string
            sourceMap: string
          }
          deployedBytecode: {
            functionDebugData: {}
            generatedSources: never[]
            immutableReferences: {}
            linkReferences: {}
            object: string
            opcodes: string
            sourceMap: string
          }
        }
        metadata: string
      }
    }
  }
  sources: {
    [key: `${string}.sol`]: {
      id: number
    }
  }
  errors: {
    component: string
    errorCode: string
    formattedMessage: string
    message: string
    severity: "error" | "warning"
    sourceLocation: {
      end: number
      file: string
      start: number
    }
    type: string
  }[]
}
