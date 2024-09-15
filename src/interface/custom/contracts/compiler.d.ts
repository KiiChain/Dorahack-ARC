interface ICompilerOutput {
  contracts: {
    [key: `${string}.sol`]: {
      [key: string]: {
        abi: Abi[] // viem.Abi
        evm: {
          bytecode: {
            functionDebugData: Record<string, unknown>
            generatedSources: never[]
            linkReferences: Record<string, unknown>
            object: string
            opcodes: string
            sourceMap: string
          }
          deployedBytecode: {
            functionDebugData: Record<string, unknown>
            generatedSources: never[]
            immutableReferences: Record<string, unknown>
            linkReferences: Record<string, unknown>
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
