const definition: IContractDefinition = {
  name: "IAggregator",
  description: `Interface for aggregators of price feeds.`,
  content: [
    { tag: "h1", content: "IAggregator Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions for an aggregator of price feeds. Aggregators are responsible for collecting and processing price data from multiple sources and providing a single, reliable price for a given asset.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Provides a standardized interface for interacting with price aggregators.</li>
                                <li>Allows for the retrieval of the latest price and historical price data.</li>
                                <li>Supports different aggregation methods to ensure accuracy and robustness.</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "To use the IAggregator interface, you need to implement a contract that inherits from it and implements the required functions. This contract will then be responsible for collecting price data, aggregating it, and providing it to consumers. The interface provides methods for getting the latest price, the latest timestamp, and the latest answer.",
      style: {},
    },
    { tag: "h2", content: "Implementation Details", style: {} },
    {
      tag: "p",
      content:
        "When implementing the IAggregator interface, it's crucial to consider factors like data sources, aggregation methods, and security considerations. The choice of data sources and aggregation methods should be based on the specific requirements of the application. Security considerations include ensuring data integrity, preventing manipulation, and maintaining the confidentiality of sensitive information.",
      style: {},
    },
    { tag: "h2", content: "Best Practices", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Use reliable and trusted data sources for price feeds.</li>
                                <li>Implement robust security measures to prevent data manipulation and attacks.</li>
                                <li>Regularly audit the code and data sources to ensure accuracy and security.</li>
                                <li>Document the aggregation method and data sources used for transparency and accountability.</li>
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "update",
        signature: "update(int256 _answer, uint256 _timestamp)",
        params: [
          {
            name: "_answer",
            type: "int256",
          },
          {
            name: "_timestamp",
            type: "uint256",
          },
        ],
      },
    ],
    read: [
      {
        function: "latestAnswer",
        signature: "latestAnswer()",
        params: [],
      },
      {
        function: "latestTimestamp",
        signature: "latestTimestamp()",
        params: [],
      },
      {
        function: "latestRound",
        signature: "latestRound()",
        params: [],
      },
      {
        function: "getRoundData",
        signature: "getRoundData(uint80 _roundId)",
        params: [
          {
            name: "_roundId",
            type: "uint80",
          },
        ],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    {
      title: "IAggregator Interface on Ethereum",
      url: "https://ethereum.org/en/developers/docs/standards/erc/erc-1497/",
    },
    {
      title: "Chainlink Documentation: Aggregator Interface",
      url: "https://docs.chain.link/docs/chainlink-contracts/",
    },
    {
      title: "Chainlink Aggregator Contract Example",
      url: "https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol",
    },
    {
      title: "Using Chainlink Price Feeds in Solidity",
      url: "https://docs.chain.link/docs/ethereum-developer-tools/using-chainlink-price-feeds",
    },
    {
      title: "Understanding Price Feeds and Oracles",
      url: "https://www.coindesk.com/learn/what-are-price-feeds-and-oracles/",
    },
    {
      title: "Solidity Documentation: Interface",
      url: "https://docs.soliditylang.org/en/v0.8.17/contracts.html#interfaces",
    },
  ],
}

export default definition
