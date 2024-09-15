const definition: IContractDefinition = {
  name: "VoteERC20",
  description: `The VoteERC20 contract is an advanced governance system built for ERC20 token holders. It leverages OpenZeppelin's Governor framework to allow token holders to propose and vote on decisions affecting the protocol. The contract supports meta-transactions for enhanced flexibility, making it suitable for decentralized applications requiring robust governance mechanisms.
  
    This contract is upgradeable and inherits various components from OpenZeppelin, including the core Governor functionalities, settings for voting delay and period, a simple voting mechanism, token-based voting, and quorum determination based on a fraction of token holders. Additionally, it supports ERC2771 meta-transactions, allowing trusted forwarders to submit transactions on behalf of users.
  
    The contract allows proposals to be created and managed by users holding the governance token, which is an ERC20 token specified during initialization. Proposals include actions such as executing transactions or changing protocol parameters, and they are governed by a voting process where the weight of votes is determined by token balances. The contract also tracks all proposals and allows users to query them.`,
  content: [
    { tag: "h1", content: "VoteERC20 Governance Contract", style: {} },
    {
      tag: "p",
      content: "The VoteERC20 contract provides a comprehensive governance system for ERC20 token holders.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `<li>Upgradeable contract supporting decentralized governance.</li>
                            <li>Uses OpenZeppelin's Governor framework for secure and tested governance logic.</li>
                            <li>Meta-transaction support via ERC2771 for flexible user interaction.</li>
                            <li>Customizable voting delay, voting period, and proposal thresholds.</li>
                            <li>Token-based voting system with quorum calculation based on token holdings.</li>`,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This contract is initialized with specific parameters, including the governance token, voting delay, voting period, and quorum fraction. Users can create proposals, vote on them, and query existing proposals.",
      style: {},
    },
    { tag: "h3", content: "Initialization", style: {} },
    {
      tag: "p",
      content:
        "The contract must be initialized with the name of the governance module, a URI for the contract's metadata, trusted forwarder addresses for meta-transactions, the ERC20 token used for voting, and initial settings for voting delay, voting period, proposal threshold, and quorum fraction.",
      style: {},
    },
  ],
  resources: [
    { title: "OpenZeppelin Governor Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/governance" },
    { title: "Meta-Transactions Overview", url: "https://docs.openzeppelin.com/contracts/4.x/metatx" },
    { title: "ERC20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
  ],
  functions: {
    write: [
      {
        function: "initialize",
        signature:
          "initialize(string _name, string _contractURI, address[] _trustedForwarders, address _token, uint256 _initialVotingDelay, uint256 _initialVotingPeriod, uint256 _initialProposalThreshold, uint256 _initialVoteQuorumFraction)",
        params: [
          { name: "_name", type: "string", description: "The name of the governance contract." },
          { name: "_contractURI", type: "string", description: "URI for the contract's metadata." },
          {
            name: "_trustedForwarders",
            type: "address[]",
            description: "Array of trusted forwarder addresses for meta-transactions.",
          },
          { name: "_token", type: "address", description: "Address of the ERC20 token used for voting." },
          {
            name: "_initialVotingDelay",
            type: "uint256",
            description: "Delay before voting starts, measured in blocks.",
          },
          {
            name: "_initialVotingPeriod",
            type: "uint256",
            description: "Duration of the voting period, measured in blocks.",
          },
          {
            name: "_initialProposalThreshold",
            type: "uint256",
            description: "Minimum token threshold required to create a proposal.",
          },
          {
            name: "_initialVoteQuorumFraction",
            type: "uint256",
            description: "Quorum fraction required for a proposal to pass.",
          },
        ],
      },
      {
        function: "propose",
        signature:
          "propose(address[] targets, uint256[] values, bytes[] calldatas, string description) returns (uint256 proposalId)",
        params: [
          { name: "targets", type: "address[]", description: "List of target addresses for the proposal's actions." },
          { name: "values", type: "uint256[]", description: "List of values (in ETH) to be sent with each call." },
          { name: "calldatas", type: "bytes[]", description: "List of calldata for each call." },
          { name: "description", type: "string", description: "A description of the proposal." },
        ],
      },
      {
        function: "setContractURI",
        signature: "setContractURI(string uri)",
        params: [{ name: "uri", type: "string", description: "The new URI to set for the contract's metadata." }],
      },
    ],
    read: [
      {
        function: "contractType",
        signature: "contractType() returns (bytes32)",
        params: [],
      },
      {
        function: "contractVersion",
        signature: "contractVersion() returns (uint8)",
        params: [],
      },
      {
        function: "getAllProposals",
        signature: "getAllProposals() returns (Proposal[] memory allProposals)",
        params: [],
      },
      {
        function: "proposalThreshold",
        signature:
          "proposalThreshold() public view override(GovernorUpgradeable, GovernorSettingsUpgradeable) returns (uint256)",
        params: [],
      },
      {
        function: "supportsInterface",
        signature: "supportsInterface(bytes4 interfaceId) public view override returns (bool)",
        params: [{ name: "interfaceId", type: "bytes4", description: "The interface ID to check for support." }],
      },
    ],
  },
  events: [
    {
      function: "ProposalCreated",
      signature:
        "event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, bytes[] calldatas, string description)",
      params: [
        { name: "proposalId", type: "uint256", description: "The ID of the created proposal." },
        { name: "proposer", type: "address", description: "The address of the proposal creator." },
        { name: "targets", type: "address[]", description: "The list of target addresses for the proposal's actions." },
        { name: "values", type: "uint256[]", description: "The list of values (in ETH) to be sent with each call." },
        { name: "calldatas", type: "bytes[]", description: "The list of calldata for each call." },
        { name: "description", type: "string", description: "A description of the proposal." },
      ],
      content: [{ tag: "p", content: "This event is emitted when a new proposal is created.", style: {} }],
    },
  ],
  extensions: [
    {
      name: "ERC2771ContextUpgradeable",
      description: "Handles the context for meta-transactions, allowing trusted forwarders to act on behalf of users.",
      source: "",
    },
    {
      name: "GovernorUpgradeable",
      description: "Core functionality for a governance contract, handling proposals and voting.",
      source: "",
    },
    {
      name: "GovernorSettingsUpgradeable",
      description: "Allows configuration of voting delay, period, and proposal threshold.",
      source: "",
    },
    {
      name: "GovernorCountingSimpleUpgradeable",
      description: "Implements a simple voting mechanism where each vote counts equally.",
      source: "",
    },
    {
      name: "GovernorVotesUpgradeable",
      description: "Voting mechanism using token balances.",
      source: "",
    },
    {
      name: "GovernorVotesQuorumFractionUpgradeable",
      description: "Quorum mechanism based on a fraction of token holders.",
      source: "",
    },
  ],
  license: "MIT",
}

export default definition
