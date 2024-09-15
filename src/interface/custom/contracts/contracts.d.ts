declare interface IContracts {
  identifier: string

  name: string
  version: string
  description: string
  source: IContractDefinition
  path?: `contracts/${string}`
}

declare interface IContractStore {
  identifier: string

  name: string
  description: string

  contracts: IContracts[]
}

interface IContractFunction {
  function: string
  signature: string
  params: FunctionParam[]
}

interface IContractEvent {
  function: string
  signature: string
  params: FunctionParam[]
  content: ContentItem[] | []
}

interface IContractExtension {
  name: string
  description: string
  source: string
}

declare interface IContractDefinition {
  name: string
  description: string
  content: IRichText[]
  resources: IAnchor[] | []
  functions: {
    write: IContractFunction[]
    read: IContractFunction[]
  }
  events: IContractEvent[]
  extensions: IContractExtension[] | []
  license: string
}
