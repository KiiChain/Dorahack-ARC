const definition: IContractDefinition = {
  name: "IAirdropERC1155",
  description: `Interface for airdropping ERC1155 tokens.`,
  content: [
    { tag: "h1", content: "IAirdropERC1155 Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines the functions for airdropping ERC1155 tokens to a list of recipients. It allows for airdropping multiple token IDs with specific quantities to each recipient.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
                                <li>Airdrop multiple ERC1155 tokens to a list of recipients</li>
                                <li>Specify token IDs and quantities for each recipient</li>
                            `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This interface is intended to be implemented by contracts that need to perform ERC1155 airdrops. Contracts can implement this interface and use its functions to execute airdrops effectively.",
      style: {},
    },
    { tag: "h2", content: "Example Implementation", style: {} },
    {
      tag: "pre",
      content: `
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "./IAirdropERC1155.sol";

contract AirdropERC1155 is ERC1155, IAirdropERC1155 {

    // ... constructor, other functions

    function airdrop(
        address[] memory recipients,
        uint256[] memory tokenIds,
        uint256[] memory quantities
    ) external override {
        require(recipients.length == tokenIds.length && tokenIds.length == quantities.length, "Arrays must have the same length");

        for (uint256 i = 0; i < recipients.length; i++) {
            _mintBatch(recipients[i], tokenIds[i], quantities[i], "");
        }
    }
}
                            `,
      style: {},
    },
  ],
  functions: {
    write: [
      {
        function: "airdrop",
        signature: "airdrop(address[],uint256[],uint256[])",
        params: [
          { name: "recipients", type: "address[]", description: "Array of recipient addresses" },
          { name: "tokenIds", type: "uint256[]", description: "Array of token IDs to airdrop" },
          { name: "quantities", type: "uint256[]", description: "Array of quantities for each token ID" },
        ],
      },
    ],
    read: [],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "OpenZeppelin ERC1155 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc1155" },
    {
      title: "Airdrop Tutorial (ERC20 & ERC721)",
      url: "https://ethereum.org/en/developers/tutorials/airdrop-tutorial/",
    },
    {
      title: "Airdrop Contract Example",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol",
    },
    {
      title: "ERC1155 Airdrop Example",
      url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol",
    },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Ethereum.org Documentation", url: "https://ethereum.org/en/developers/" },
  ],
}

export default definition
