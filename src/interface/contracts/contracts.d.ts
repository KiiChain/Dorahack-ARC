declare interface IContracts {
  identifier: string

  name: string
  version: string
  description: string
  source: string
}

declare interface IContractStore {
  identifier: string

  name: string
  description: string

  contracts: IContracts[]
}
