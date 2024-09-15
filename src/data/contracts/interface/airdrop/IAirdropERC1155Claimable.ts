const definition: IContractDefinition = {
  name: "IAirdropERC1155Claimable",
  description: `Interface for airdropping ERC1155 tokens with a claim functionality.`,
  content: [
    { tag: "h1", content: "IAirdropERC1155Claimable Contract", style: {} },
    {
      tag: "p",
      content:
        "This interface defines functions for airdropping ERC1155 tokens and allowing users to claim their allocated tokens.",
      style: {},
    },
    { tag: "h2", content: "Features", style: {} },
    {
      tag: "ul",
      content: `
        <li>Defines functions for setting the claim status of a user.</li>
        <li>Allows claiming allocated tokens.</li>
        <li>Provides methods for checking claim status and retrieving allocated tokens.</li>
      `,
      style: {},
    },
    { tag: "h2", content: "Usage", style: {} },
    {
      tag: "p",
      content:
        "This interface is intended to be implemented by contracts that need to perform airdrops of ERC1155 tokens. It provides a standardized way to manage claims and track allocations.",
      style: {},
    },
    { tag: "h2", content: "Example Implementation", style: {} },
    {
      tag: "p",
      content: "The following is an example of a contract that implements the `IAirdropERC1155Claimable` interface:",
      style: {},
    },
    {
      tag: "pre",
      content: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./IAirdropERC1155Claimable.sol";

contract AirdropERC1155Claimable is ERC1155, AccessControl, IAirdropERC1155Claimable {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    // Mapping to track claim status for each user
    mapping(address => bool) public hasClaimed;

    // Mapping to store the allocated tokens for each user
    mapping(address => uint256[]) public userAllocations;

    constructor(string memory _uri) ERC1155(_uri) {
        _setupRole(ADMIN_ROLE, msg.sender);
    }

    function setClaimStatus(address _user, bool _isClaimed) public onlyRole(ADMIN_ROLE) {
        hasClaimed[_user] = _isClaimed;
    }

    function claim() public {
        require(!hasClaimed[msg.sender], "Already claimed");

        // Get the user's allocated tokens
        uint256[] memory tokens = userAllocations[msg.sender];

        // Transfer allocated tokens to the user
        _mint(msg.sender, tokens, new uint256[](tokens.length), "");
        hasClaimed[msg.sender] = true;
    }

    // ... Other functions for managing allocations, etc.
}
      `,
      style: { backgroundColor: "#f0f0f0" },
    },
  ],
  functions: {
    write: [
      {
        function: "setClaimStatus",
        signature: "setClaimStatus(address,bool)",
        params: [
          {
            name: "_user",
            type: "address",
            description: "The address of the user to set the claim status for.",
          },
          {
            name: "_isClaimed",
            type: "bool",
            description: "The claim status to set.",
          },
        ],
      },
      {
        function: "claim",
        signature: "claim()",
        params: [],
      },
    ],
    read: [
      {
        function: "hasClaimed",
        signature: "hasClaimed(address)",
        params: [
          {
            name: "_user",
            type: "address",
            description: "The address of the user to check the claim status for.",
          },
        ],
      },
      {
        function: "userAllocations",
        signature: "userAllocations(address)",
        params: [
          {
            name: "_user",
            type: "address",
            description: "The address of the user to retrieve the allocations for.",
          },
        ],
      },
    ],
  },
  events: [],
  extensions: [],
  license: "MIT",

  resources: [
    { title: "ERC1155 Standard", url: "https://eips.ethereum.org/EIPS/eip-1155" },
    { title: "OpenZeppelin ERC1155 Documentation", url: "https://docs.openzeppelin.com/contracts/4.x/erc1155" },
    { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
    { title: "Airdrop Best Practices", url: "https://www.coindesk.com/learn/airdrop-best-practices/" },
    {
      title: "Smart Contract Security Best Practices",
      url: "https://consensys.net/blog/smart-contract-security-best-practices/",
    },
    { title: "Ethereum Development Resources", url: "https://ethereum.org/en/developers/" },
  ],
}

export default definition
