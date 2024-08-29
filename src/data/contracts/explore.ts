import governanceVoteERC20 from "./governance/VoteERC20"

const ContractStore: IContractStore[] = [
  {
    identifier: "governance",
    name: "Governance",
    description: "Contracts for managing voting and governance",
    contracts: [
      {
        identifier: "arc/VoteERC20",
        name: "Vote ERC20",
        version: "0.0.1",
        description: "A contract for managing voting with ERC20 tokens",
        source: governanceVoteERC20,
      },
    ],
  },
]

export default ContractStore
