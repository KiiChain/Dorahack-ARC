import dynamicaccount from "./account/dynamic/DynamicAccount"
import dynamicaccountfactory from "./account/dynamic/DynamicAccountFactory"
import iaccount from "./account/interfaces/IAccount"
import iaccountcore from "./account/interfaces/IAccountCore"
import iaccountexecute from "./account/interfaces/IAccountExecute"
import iaccountfactory from "./account/interfaces/IAccountFactory"
import iaccountfactorycore from "./account/interfaces/IAccountFactoryCore"
import iaggregator from "./account/interfaces/IAggregator"
import ientrypoint from "./account/interfaces/IEntryPoint"
import inoncemanager from "./account/interfaces/INonceManager"
import ipaymaster from "./account/interfaces/IPaymaster"
import istakemanager from "./account/interfaces/IStakeManager"
import packeduseroperation from "./account/interfaces/PackedUserOperation"
import managedaccount from "./account/managed/ManagedAccount"
import managedaccountfactory from "./account/managed/ManagedAccountFactory"
import account from "./account/non-upgradeable/Account"
import accountfactory from "./account/non-upgradeable/AccountFactory"
import erc6551accountlib from "./account/token-bound-account/erc6551-utils/ERC6551AccountLib"
import erc6551bytecodelib from "./account/token-bound-account/erc6551-utils/ERC6551BytecodeLib"
import ierc6551account from "./account/token-bound-account/erc6551-utils/IERC6551Account"
import tokenboundaccount from "./account/token-bound-account/TokenBoundAccount"
import accountcore from "./account/utils/AccountCore"
import accountcorestorage from "./account/utils/AccountCoreStorage"
import accountextension from "./account/utils/AccountExtension"
import accountseaportbulksigsupport from "./account/utils/AccountSeaportBulkSigSupport"
import baseaccount from "./account/utils/BaseAccount"
import baseaccountfactory from "./account/utils/BaseAccountFactory"
import entrypoint from "./account/utils/EntryPoint"
import exec from "./account/utils/Exec"
import helpers from "./account/utils/Helpers"
import noncemanager from "./account/utils/NonceManager"
import sendercreator from "./account/utils/SenderCreator"
import stakemanager from "./account/utils/StakeManager"
import tokencallbackhandler from "./account/utils/TokenCallbackHandler"
import useroperationlib from "./account/utils/UserOperationLib"
import airdrop from "./airdrop/Airdrop"
import droperc20 from "./drop/DropERC20"
import droperc721 from "./drop/DropERC721"
import droperc1155 from "./drop/DropERC1155"
import rulesengineextension from "./evolving-nfts/extension/RulesEngineExtension"
import iairdroperc20 from "./interface/airdrop/IAirdropERC20"
import iairdroperc721 from "./interface/airdrop/IAirdropERC721"
import iairdroperc721claimable from "./interface/airdrop/IAirdropERC721Claimable"
import iairdroperc1155 from "./interface/airdrop/IAirdropERC1155"
import iairdroperc1155claimable from "./interface/airdrop/IAirdropERC1155Claimable"
import idropclaimcondition from "./interface/drop/IDropClaimCondition"
import idroperc20 from "./interface/drop/IDropERC20"
import idroperc721 from "./interface/drop/IDropERC721"
import idroperc1155 from "./interface/drop/IDropERC1155"
import iloyaltycard from "./interface/ILoyaltyCard"
import iloyaltypoints from "./interface/ILoyaltyPoints"
import imultiwrap from "./interface/IMultiwrap"
import ipack from "./interface/IPack"
import ipackvrfdirect from "./interface/IPackVRFDirect"
import imarketplace from "./interface/marketplace/IMarketplace"
import ieditionstake from "./interface/staking/IEditionStake"
import inftstake from "./interface/staking/INFTStake"
import itokenstake from "./interface/staking/ITokenStake"
import itokenerc20 from "./interface/token/ITokenERC20"
import itokenerc721 from "./interface/token/ITokenERC721"
import itokenerc1155 from "./interface/token/ITokenERC1155"
import loyaltycard from "./loyalty/LoyaltyCard"
import directlistingslogic from "./marketplace/direct-listings/DirectListingsLogic"
import directlistingsstorage from "./marketplace/direct-listings/DirectListingsStorage"
import englishauctionslogic from "./marketplace/english-auctions/EnglishAuctionsLogic"
import englishauctionsstorage from "./marketplace/english-auctions/EnglishAuctionsStorage"
import marketplacev3 from "./marketplace/entrypoint/MarketplaceV3"
import offerslogic from "./marketplace/offers/OffersLogic"
import offersstorage from "./marketplace/offers/OffersStorage"
import marketplace from "./marketplace-legacy/Marketplace"
import openeditionerc721 from "./open-edition/OpenEditionERC721"
import openeditionerc721flatfee from "./open-edition/OpenEditionERC721FlatFee"
import pack from "./pack/Pack"
import packvrfdirect from "./pack/PackVRFDirect"
import signaturedrop from "./signature-drop/SignatureDrop"
import split from "./split/Split"
import editionstake from "./staking/EditionStake"
import nftstake from "./staking/NFTStake"
import tokenstake from "./staking/TokenStake"
import tiereddrop from "./tiered-drop/TieredDrop"
import tokenerc20 from "./token/TokenERC20"
import tokenerc721 from "./token/TokenERC721"
import tokenerc1155 from "./token/TokenERC1155"
import airdroperc20 from "./unaudited/airdrop/AirdropERC20"
import airdroperc20claimable from "./unaudited/airdrop/AirdropERC20Claimable"
import airdroperc721 from "./unaudited/airdrop/AirdropERC721"
import airdroperc721claimable from "./unaudited/airdrop/AirdropERC721Claimable"
import airdroperc1155 from "./unaudited/airdrop/AirdropERC1155"
import airdroperc1155claimable from "./unaudited/airdrop/AirdropERC1155Claimable"
import burntoclaimdroperc721 from "./unaudited/burn-to-claim-drop/BurnToClaimDropERC721"
import burntoclaimdrop721logic from "./unaudited/burn-to-claim-drop/extension/BurnToClaimDrop721Logic"
import burntoclaimdrop721storage from "./unaudited/burn-to-claim-drop/extension/BurnToClaimDrop721Storage"
import corerouter from "./unaudited/contract-builder/CoreRouter"
import permissionoverride from "./unaudited/contract-builder/extension/PermissionOverride"
import loyaltypoints from "./unaudited/loyalty/LoyaltyPoints"
import voteerc20 from "./vote/VoteERC20"

const ContractStore: IContractStore[] = [
  {
    identifier: "token",
    name: "Token",
    description: "",
    contracts: [
      {
        identifier: "arc/tokenerc20",
        name: "TokenERC20",
        version: "0.0.1",
        description:
          "A standard ERC20 token contract for representing and managing fungible tokens on the Ethereum blockchain. ",
        source: tokenerc20,
      },
      {
        identifier: "arc/tokenerc1155",
        name: "TokenERC1155",
        version: "0.0.1",
        description:
          "ERC-1155 standard compliant token contract, supporting minting and transferring of non-fungible tokens. ",
        source: tokenerc1155,
      },
      {
        identifier: "arc/tokenerc721",
        name: "TokenERC721",
        version: "0.0.1",
        description: "A basic ERC721 token contract. ",
        source: tokenerc721,
      },
    ],
  },
  {
    identifier: "split",
    name: "Split",
    description: "",
    contracts: [
      {
        identifier: "arc/split",
        name: "Split",
        version: "0.0.1",
        description:
          "The Split contract enables the division of funds between multiple recipients based on pre-defined proportions. ",
        source: split,
      },
    ],
  },
  {
    identifier: "vote",
    name: "Vote",
    description: "",
    contracts: [
      {
        identifier: "arc/voteerc20",
        name: "VoteERC20",
        version: "0.0.1",
        description: "A contract that allows voting on proposals using ERC20 tokens. ",
        source: voteerc20,
      },
    ],
  },
  {
    identifier: "interface",
    name: "Interface",
    description: "",
    contracts: [
      {
        identifier: "arc/iloyaltycard",
        name: "ILoyaltyCard",
        version: "0.0.1",
        description: "Interface for a loyalty card contract. ",
        source: iloyaltycard,
      },
      {
        identifier: "arc/iloyaltypoints",
        name: "ILoyaltyPoints",
        version: "0.0.1",
        description: "Interface for LoyaltyPoints contract. ",
        source: iloyaltypoints,
      },
      {
        identifier: "arc/imultiwrap",
        name: "IMultiwrap",
        version: "0.0.1",
        description: "Interface for the Multiwrap contract ",
        source: imultiwrap,
      },
      {
        identifier: "arc/ipack",
        name: "IPack",
        version: "0.0.1",
        description: "Interface for a Pack contract ",
        source: ipack,
      },
      {
        identifier: "arc/ipackvrfdirect",
        name: "IPackVRFDirect",
        version: "0.0.1",
        description: "Interface for VRFDirect contract. ",
        source: ipackvrfdirect,
      },
      {
        identifier: "arc/itokenerc1155",
        name: "ITokenERC1155",
        version: "0.0.1",
        description: "Interface for the ERC1155 standard ",
        source: itokenerc1155,
      },
      {
        identifier: "arc/itokenerc721",
        name: "ITokenERC721",
        version: "0.0.1",
        description: "Interface for ERC721 token contracts that can be minted and burned. ",
        source: itokenerc721,
      },
      {
        identifier: "arc/itokenerc20",
        name: "ITokenERC20",
        version: "0.0.1",
        description: "Interface of the ERC20 standard as defined in the EIP-20 specification. ",
        source: itokenerc20,
      },
      {
        identifier: "arc/imarketplace",
        name: "IMarketplace",
        version: "0.0.1",
        description: "Interface for a marketplace contract. ",
        source: imarketplace,
      },
      {
        identifier: "arc/idroperc20",
        name: "IDropERC20",
        version: "0.0.1",
        description: "Interface for ERC20 token drops ",
        source: idroperc20,
      },
      {
        identifier: "arc/idroperc721",
        name: "IDropERC721",
        version: "0.0.1",
        description: "Interface for ERC721 Drop contracts ",
        source: idroperc721,
      },
      {
        identifier: "arc/idropclaimcondition",
        name: "IDropClaimCondition",
        version: "0.0.1",
        description: "Interface for a claim condition that can be used to determine if a user can claim a drop ",
        source: idropclaimcondition,
      },
      {
        identifier: "arc/idroperc1155",
        name: "IDropERC1155",
        version: "0.0.1",
        description: "Interface for the ERC1155 Drop contract. ",
        source: idroperc1155,
      },
      {
        identifier: "arc/ieditionstake",
        name: "IEditionStake",
        version: "0.0.1",
        description: "Interface for Edition Stake contract. ",
        source: ieditionstake,
      },
      {
        identifier: "arc/itokenstake",
        name: "ITokenStake",
        version: "0.0.1",
        description: "Interface for a token staking contract. ",
        source: itokenstake,
      },
      {
        identifier: "arc/inftstake",
        name: "INFTStake",
        version: "0.0.1",
        description: "A contract for staking NFTs and earning rewards. ",
        source: inftstake,
      },
      {
        identifier: "arc/iairdroperc721claimable",
        name: "IAirdropERC721Claimable",
        version: "0.0.1",
        description: "Interface for ERC721 airdrop contracts that allow claiming of tokens. ",
        source: iairdroperc721claimable,
      },
      {
        identifier: "arc/iairdroperc1155claimable",
        name: "IAirdropERC1155Claimable",
        version: "0.0.1",
        description: "Interface for airdropping ERC1155 tokens with a claim functionality. ",
        source: iairdroperc1155claimable,
      },
      {
        identifier: "arc/iairdroperc1155",
        name: "IAirdropERC1155",
        version: "0.0.1",
        description: "Interface for airdropping ERC1155 tokens. ",
        source: iairdroperc1155,
      },
      {
        identifier: "arc/iairdroperc721",
        name: "IAirdropERC721",
        version: "0.0.1",
        description: "Interface for an ERC721 contract with airdrop functionality. ",
        source: iairdroperc721,
      },
      {
        identifier: "arc/iairdroperc20",
        name: "IAirdropERC20",
        version: "0.0.1",
        description: "Interface for an ERC20 contract that can be used for airdrops. ",
        source: iairdroperc20,
      },
    ],
  },
  {
    identifier: "open-edition",
    name: "Open-edition",
    description: "",
    contracts: [
      {
        identifier: "arc/openeditionerc721flatfee",
        name: "OpenEditionERC721FlatFee",
        version: "0.0.1",
        description:
          "An ERC721 contract that allows for the minting of multiple copies of the same token, with a flat fee for each copy. ",
        source: openeditionerc721flatfee,
      },
      {
        identifier: "arc/openeditionerc721",
        name: "OpenEditionERC721",
        version: "0.0.1",
        description:
          "OpenEditionERC721 is an ERC-721 contract designed for creating and managing open editions of NFTs, where each NFT is a unique token with its own attributes but can be minted multiple times, allowing for unlimited copies of the same artwork. This contract enables creators to sell and distribute their art through the blockchain, while also giving collectors a way to own and trade these digital assets. ",
        source: openeditionerc721,
      },
    ],
  },
  {
    identifier: "marketplace",
    name: "Marketplace",
    description: "",
    contracts: [
      {
        identifier: "arc/imarketplace",
        name: "IMarketplace",
        version: "0.0.1",
        description: "Interface for a generic marketplace contract. ",
        source: imarketplace,
      },
      {
        identifier: "arc/englishauctionslogic",
        name: "EnglishAuctionsLogic",
        version: "0.0.1",
        description:
          "This contract implements English auctions, where the highest bidder wins. It allows anyone to create an auction, make bids, and claim the auctioned item if they are the highest bidder. ",
        source: englishauctionslogic,
      },
      {
        identifier: "arc/englishauctionsstorage",
        name: "EnglishAuctionsStorage",
        version: "0.0.1",
        description:
          "This contract stores the data for English Auctions. It stores the auction details, including the auction creator, the current highest bid, and the current highest bidder. ",
        source: englishauctionsstorage,
      },
      {
        identifier: "arc/directlistingsstorage",
        name: "DirectListingsStorage",
        version: "0.0.1",
        description:
          "This contract is used to store listings for the Direct Listings platform. It is designed to be used in conjunction with the Direct Listings Marketplace contract, which provides the functionality for users to interact with the listings. ",
        source: directlistingsstorage,
      },
      {
        identifier: "arc/directlistingslogic",
        name: "DirectListingsLogic",
        version: "0.0.1",
        description:
          "This contract manages direct listings for the marketplace. It allows for the creation, listing, and removal of direct listings, ensuring proper ownership and access control. ",
        source: directlistingslogic,
      },
      {
        identifier: "arc/offerslogic",
        name: "OffersLogic",
        version: "0.0.1",
        description: "A contract for managing offers and their interactions with users and tokens. ",
        source: offerslogic,
      },
      {
        identifier: "arc/offersstorage",
        name: "OffersStorage",
        version: "0.0.1",
        description: "A contract for storing offers. ",
        source: offersstorage,
      },
      {
        identifier: "arc/marketplacev3",
        name: "MarketplaceV3",
        version: "0.0.1",
        description:
          "A decentralized marketplace for buying and selling digital assets, featuring an advanced royalty system, flexible listing options, and robust security measures. ",
        source: marketplacev3,
      },
    ],
  },
  {
    identifier: "pack",
    name: "Pack",
    description: "",
    contracts: [
      {
        identifier: "arc/packvrfdirect",
        name: "PackVRFDirect",
        version: "0.0.1",
        description: "Auto-generated description for the PackVRFDirect contract ",
        source: packvrfdirect,
      },
      {
        identifier: "arc/pack",
        name: "Pack",
        version: "0.0.1",
        description:
          "The Pack contract allows users to create and manage packs of items. These packs can be used to represent real-world collections, such as trading cards, or digital items, such as NFTs. ",
        source: pack,
      },
    ],
  },
  {
    identifier: "loyalty",
    name: "Loyalty",
    description: "",
    contracts: [
      {
        identifier: "arc/loyaltycard",
        name: "LoyaltyCard",
        version: "0.0.1",
        description: "A Solidity contract that implements a loyalty card system. ",
        source: loyaltycard,
      },
    ],
  },
  {
    identifier: "drop",
    name: "Drop",
    description: "",
    contracts: [
      {
        identifier: "arc/droperc1155",
        name: "DropERC1155",
        version: "0.0.1",
        description: "An ERC-1155 contract that allows for the distribution of tokens to a list of recipients. ",
        source: droperc1155,
      },
    ],
  },
  {
    identifier: "account",
    name: "Account",
    description: "",
    contracts: [
      {
        identifier: "arc/managedaccount",
        name: "ManagedAccount",
        version: "0.0.1",
        description: "A contract that allows for the management of an account by a designated manager. ",
        source: managedaccount,
      },
      {
        identifier: "arc/managedaccountfactory",
        name: "ManagedAccountFactory",
        version: "0.0.1",
        description: "A factory contract for creating and managing managed accounts. ",
        source: managedaccountfactory,
      },
      {
        identifier: "arc/dynamicaccount",
        name: "DynamicAccount",
        version: "0.0.1",
        description:
          "A dynamic account contract that allows for the delegation of execution permissions to other addresses. This contract can be used to implement a variety of use cases, such as multi-signature wallets, decentralized governance systems, and more. ",
        source: dynamicaccount,
      },
      {
        identifier: "arc/dynamicaccountfactory",
        name: "DynamicAccountFactory",
        version: "0.0.1",
        description:
          "A contract that allows creating dynamic accounts with unique IDs. The owner can customize these accounts by setting their initial state, specifying their functionality with bytecode and runtime code, and controlling their permissions. These accounts can be deployed in various ways based on the chosen configuration, offering flexibility in their deployment. ",
        source: dynamicaccountfactory,
      },
      {
        identifier: "arc/helpers",
        name: "Helpers",
        version: "0.0.1",
        description: "A library of reusable helper functions for various common Solidity tasks. ",
        source: helpers,
      },
      {
        identifier: "arc/baseaccountfactory",
        name: "BaseAccountFactory",
        version: "0.0.1",
        description: "A factory contract for creating BaseAccount contracts. ",
        source: baseaccountfactory,
      },
      {
        identifier: "arc/useroperationlib",
        name: "UserOperationLib",
        version: "0.0.1",
        description: "Library for user operations in account abstraction ",
        source: useroperationlib,
      },
      {
        identifier: "arc/accountcore",
        name: "AccountCore",
        version: "0.0.1",
        description: "A core account management contract. ",
        source: accountcore,
      },
      {
        identifier: "arc/accountseaportbulksigsupport",
        name: "AccountSeaportBulkSigSupport",
        version: "0.0.1",
        description:
          "This contract enables batch signature support for Seaport, allowing users to sign multiple Seaport orders in a single transaction. ",
        source: accountseaportbulksigsupport,
      },
      {
        identifier: "arc/entrypoint",
        name: "EntryPoint",
        version: "0.0.1",
        description:
          "This contract is an entry point for executing user operations on StarkNet. It is responsible for handling gas payments, validating signatures, and executing the user operation on the StarkNet system. It is also responsible for handling the execution of the user operation and the resulting state updates on the StarkNet system. ",
        source: entrypoint,
      },
      {
        identifier: "arc/accountcorestorage",
        name: "AccountCoreStorage",
        version: "0.0.1",
        description:
          "The AccountCoreStorage contract is a core component of the OpenZeppelin Account system. It serves as a central storage unit for account-related data, including account creation, management, and permissions. This contract is designed to be used in conjunction with other Account modules, offering flexibility and extensibility for various account implementation needs. ",
        source: accountcorestorage,
      },
      {
        identifier: "arc/exec",
        name: "Exec",
        version: "0.0.1",
        description:
          "A contract that allows for the execution of arbitrary code with a configurable gas limit and a configurable execution environment. ",
        source: exec,
      },
      {
        identifier: "arc/noncemanager",
        name: "NonceManager",
        version: "0.0.1",
        description:
          "A contract that helps manage the nonce of a user. This is useful when interacting with a contract that relies on the user to provide their own nonce, as it can help prevent replay attacks. ",
        source: noncemanager,
      },
      {
        identifier: "arc/sendercreator",
        name: "SenderCreator",
        version: "0.0.1",
        description:
          "The SenderCreator contract allows users to create and manage sender accounts with specific permission levels. These accounts can be used to send transactions on behalf of the creator without exposing the creator's primary address. ",
        source: sendercreator,
      },
      {
        identifier: "arc/accountextension",
        name: "AccountExtension",
        version: "0.0.1",
        description:
          "This contract extends the functionality of an account by allowing for the delegation of operations to another address. This can be useful for scenarios like multi-sig wallets, where multiple parties need to approve transactions before they can be executed. ",
        source: accountextension,
      },
      {
        identifier: "arc/stakemanager",
        name: "StakeManager",
        version: "0.0.1",
        description: "StakeManager contract for managing staking and rewards. ",
        source: stakemanager,
      },
      {
        identifier: "arc/tokencallbackhandler",
        name: "TokenCallbackHandler",
        version: "0.0.1",
        description: "A contract that handles callbacks from other contracts. ",
        source: tokencallbackhandler,
      },
      {
        identifier: "arc/baseaccount",
        name: "BaseAccount",
        version: "0.0.1",
        description:
          "The BaseAccount contract is a foundational component of the ecosystem, enabling the creation of secure and customizable accounts for various applications. It is designed to be flexible and extensible, allowing developers to incorporate diverse functionalities into their projects. ",
        source: baseaccount,
      },
      {
        identifier: "arc/account",
        name: "Account",
        version: "0.0.1",
        description: "Auto-generated description for the Account contract ",
        source: account,
      },
      {
        identifier: "arc/accountfactory",
        name: "AccountFactory",
        version: "0.0.1",
        description: "A factory contract for creating new accounts with customizable permissions. ",
        source: accountfactory,
      },
      {
        identifier: "arc/iaccount",
        name: "IAccount",
        version: "0.0.1",
        description: "Interface for accounts. ",
        source: iaccount,
      },
      {
        identifier: "arc/packeduseroperation",
        name: "PackedUserOperation",
        version: "0.0.1",
        description: "A packed user operation structure for use with the EntryPoint contract ",
        source: packeduseroperation,
      },
      {
        identifier: "arc/iaccountfactory",
        name: "IAccountFactory",
        version: "0.0.1",
        description: "Interface for AccountFactory contract. ",
        source: iaccountfactory,
      },
      {
        identifier: "arc/iaccountexecute",
        name: "IAccountExecute",
        version: "0.0.1",
        description: "Interface for the Account contract to execute transactions via the account manager ",
        source: iaccountexecute,
      },
      {
        identifier: "arc/iaccountcore",
        name: "IAccountCore",
        version: "0.0.1",
        description: "Interface for AccountCore contracts. ",
        source: iaccountcore,
      },
      {
        identifier: "arc/ipaymaster",
        name: "IPaymaster",
        version: "0.0.1",
        description: "Interface for a Paymaster contract. ",
        source: ipaymaster,
      },
      {
        identifier: "arc/inoncemanager",
        name: "INonceManager",
        version: "0.0.1",
        description: "Interface for managing nonces. ",
        source: inoncemanager,
      },
      {
        identifier: "arc/istakemanager",
        name: "IStakeManager",
        version: "0.0.1",
        description: "Interface for a Stake Manager contract. ",
        source: istakemanager,
      },
      {
        identifier: "arc/iaggregator",
        name: "IAggregator",
        version: "0.0.1",
        description: "Interface for aggregators of price feeds. ",
        source: iaggregator,
      },
      {
        identifier: "arc/ientrypoint",
        name: "IEntryPoint",
        version: "0.0.1",
        description: "Interface for entry point of a reentrancy guard ",
        source: ientrypoint,
      },
      {
        identifier: "arc/iaccountfactorycore",
        name: "IAccountFactoryCore",
        version: "0.0.1",
        description: "Interface for the account factory core contract. ",
        source: iaccountfactorycore,
      },
      {
        identifier: "arc/tokenboundaccount",
        name: "TokenBoundAccount",
        version: "0.0.1",
        description:
          "A contract that allows for the creation of accounts that are bound to a specific token. This enables applications to restrict access to certain features or resources based on token ownership. ",
        source: tokenboundaccount,
      },
      {
        identifier: "arc/erc6551bytecodelib",
        name: "ERC6551BytecodeLib",
        version: "0.0.1",
        description: "Library for generating ERC-6551 bytecode. ",
        source: erc6551bytecodelib,
      },
      {
        identifier: "arc/ierc6551account",
        name: "IERC6551Account",
        version: "0.0.1",
        description:
          "Interface of the ERC-6551 Account standard, allowing contracts to interact with account-based smart contracts. ",
        source: ierc6551account,
      },
      {
        identifier: "arc/erc6551accountlib",
        name: "ERC6551AccountLib",
        version: "0.0.1",
        description:
          "This library provides the core functionality for ERC6551 accounts, enabling smart contracts to act as independent entities with their own wallets and the ability to manage their own assets. ",
        source: erc6551accountlib,
      },
    ],
  },
  {
    identifier: "unaudited",
    name: "Unaudited",
    description: "",
    contracts: [
      {
        identifier: "arc/burntoclaimdroperc721",
        name: "BurnToClaimDropERC721",
        version: "0.0.1",
        description:
          "This contract allows users to burn tokens from another ERC721 contract to claim a new ERC721 token from this contract. ",
        source: burntoclaimdroperc721,
      },
      {
        identifier: "arc/burntoclaimdrop721storage",
        name: "BurnToClaimDrop721Storage",
        version: "0.0.1",
        description: "This contract stores the storage for the BurnToClaimDrop721 contract. ",
        source: burntoclaimdrop721storage,
      },
      {
        identifier: "arc/burntoclaimdrop721logic",
        name: "BurnToClaimDrop721Logic",
        version: "0.0.1",
        description:
          "This contract is a logic contract for the BurnToClaimDrop721 contract. It allows users to burn a specified ERC20 token and claim a corresponding NFT from the BurnToClaimDrop721 contract. ",
        source: burntoclaimdrop721logic,
      },
      {
        identifier: "arc/corerouter",
        name: "CoreRouter",
        version: "0.0.1",
        description:
          "The CoreRouter contract acts as a central hub for interacting with various DeFi protocols. It allows users to seamlessly execute swaps, provide liquidity, and access other decentralized financial services in a secure and efficient manner. The contract leverages the power of aggregators to source the best prices across multiple decentralized exchanges (DEXs) and liquidity pools. ",
        source: corerouter,
      },
      {
        identifier: "arc/permissionoverride",
        name: "PermissionOverride",
        version: "0.0.1",
        description:
          "The PermissionOverride contract allows for overriding the permission settings of a given address for a specific function. This is useful for scenarios where you need to grant temporary or limited access to a function, even if the address doesn't normally have permission. ",
        source: permissionoverride,
      },
      {
        identifier: "arc/loyaltypoints",
        name: "LoyaltyPoints",
        version: "0.0.1",
        description: "A contract for managing loyalty points, allowing users to earn, redeem, and transfer points. ",
        source: loyaltypoints,
      },
      {
        identifier: "arc/airdroperc20claimable",
        name: "AirdropERC20Claimable",
        version: "0.0.1",
        description:
          "An ERC20 token contract that implements an airdrop functionality where users can claim tokens based on their eligibility. This contract allows for easy distribution of tokens to a pre-defined list of addresses. ",
        source: airdroperc20claimable,
      },
      {
        identifier: "arc/airdroperc1155claimable",
        name: "AirdropERC1155Claimable",
        version: "0.0.1",
        description: "An ERC-1155 contract for airdropping tokens with a claim functionality. ",
        source: airdroperc1155claimable,
      },
      {
        identifier: "arc/airdroperc721claimable",
        name: "AirdropERC721Claimable",
        version: "0.0.1",
        description:
          "This contract implements an ERC721 airdrop system where users can claim tokens based on predefined criteria. ",
        source: airdroperc721claimable,
      },
      {
        identifier: "arc/airdroperc20",
        name: "AirdropERC20",
        version: "0.0.1",
        description:
          "AirdropERC20 contract allows for airdropping ERC20 tokens to a list of addresses. It features a simple, secure, and gas-efficient way to distribute tokens to multiple recipients. ",
        source: airdroperc20,
      },
      {
        identifier: "arc/airdroperc1155",
        name: "AirdropERC1155",
        version: "0.0.1",
        description:
          "This contract implements an airdrop mechanism for ERC1155 tokens, allowing the contract owner to distribute tokens to a list of recipients. ",
        source: airdroperc1155,
      },
      {
        identifier: "arc/airdroperc721",
        name: "AirdropERC721",
        version: "0.0.1",
        description: "AirdropERC721 contract allows to airdrop ERC721 tokens to a list of addresses. ",
        source: airdroperc721,
      },
    ],
  },
  {
    identifier: "airdrop",
    name: "Airdrop",
    description: "",
    contracts: [
      {
        identifier: "arc/airdrop",
        name: "Airdrop",
        version: "0.0.1",
        description: "A contract that allows for the distribution of tokens to a list of addresses. ",
        source: airdrop,
      },
    ],
  },
  {
    identifier: "signature-drop",
    name: "Signature-drop",
    description: "",
    contracts: [
      {
        identifier: "arc/signaturedrop",
        name: "SignatureDrop",
        version: "0.0.1",
        description: "A contract for minting NFTs with a signature-based whitelist. ",
        source: signaturedrop,
      },
    ],
  },
  {
    identifier: "token",
    name: "Token",
    description: "",
    contracts: [
      {
        identifier: "arc/itokenerc1155",
        name: "ITokenERC1155",
        version: "0.0.1",
        description: "Interface for the ERC1155 standard ",
        source: itokenerc1155,
      },
      {
        identifier: "arc/itokenerc721",
        name: "ITokenERC721",
        version: "0.0.1",
        description: "Interface for ERC721 token contracts that can be minted and burned. ",
        source: itokenerc721,
      },
      {
        identifier: "arc/itokenerc20",
        name: "ITokenERC20",
        version: "0.0.1",
        description: "Interface of the ERC20 standard as defined in the EIP-20 specification. ",
        source: itokenerc20,
      },
    ],
  },
  {
    identifier: "marketplace",
    name: "Marketplace",
    description: "",
    contracts: [
      {
        identifier: "arc/imarketplace",
        name: "IMarketplace",
        version: "0.0.1",
        description: "Interface for a marketplace contract. ",
        source: imarketplace,
      },
    ],
  },
  {
    identifier: "drop",
    name: "Drop",
    description: "",
    contracts: [
      {
        identifier: "arc/idroperc20",
        name: "IDropERC20",
        version: "0.0.1",
        description: "Interface for ERC20 token drops ",
        source: idroperc20,
      },
      {
        identifier: "arc/idroperc721",
        name: "IDropERC721",
        version: "0.0.1",
        description: "Interface for ERC721 Drop contracts ",
        source: idroperc721,
      },
      {
        identifier: "arc/idropclaimcondition",
        name: "IDropClaimCondition",
        version: "0.0.1",
        description: "Interface for a claim condition that can be used to determine if a user can claim a drop ",
        source: idropclaimcondition,
      },
      {
        identifier: "arc/idroperc1155",
        name: "IDropERC1155",
        version: "0.0.1",
        description: "Interface for the ERC1155 Drop contract. ",
        source: idroperc1155,
      },
    ],
  },
  {
    identifier: "staking",
    name: "Staking",
    description: "",
    contracts: [
      {
        identifier: "arc/ieditionstake",
        name: "IEditionStake",
        version: "0.0.1",
        description: "Interface for Edition Stake contract. ",
        source: ieditionstake,
      },
      {
        identifier: "arc/itokenstake",
        name: "ITokenStake",
        version: "0.0.1",
        description: "Interface for a token staking contract. ",
        source: itokenstake,
      },
      {
        identifier: "arc/inftstake",
        name: "INFTStake",
        version: "0.0.1",
        description: "A contract for staking NFTs and earning rewards. ",
        source: inftstake,
      },
    ],
  },
  {
    identifier: "airdrop",
    name: "Airdrop",
    description: "",
    contracts: [
      {
        identifier: "arc/iairdroperc721claimable",
        name: "IAirdropERC721Claimable",
        version: "0.0.1",
        description: "Interface for ERC721 airdrop contracts that allow claiming of tokens. ",
        source: iairdroperc721claimable,
      },
      {
        identifier: "arc/iairdroperc1155claimable",
        name: "IAirdropERC1155Claimable",
        version: "0.0.1",
        description: "Interface for airdropping ERC1155 tokens with a claim functionality. ",
        source: iairdroperc1155claimable,
      },
      {
        identifier: "arc/iairdroperc1155",
        name: "IAirdropERC1155",
        version: "0.0.1",
        description: "Interface for airdropping ERC1155 tokens. ",
        source: iairdroperc1155,
      },
      {
        identifier: "arc/iairdroperc721",
        name: "IAirdropERC721",
        version: "0.0.1",
        description: "Interface for an ERC721 contract with airdrop functionality. ",
        source: iairdroperc721,
      },
      {
        identifier: "arc/iairdroperc20",
        name: "IAirdropERC20",
        version: "0.0.1",
        description: "Interface for an ERC20 contract that can be used for airdrops. ",
        source: iairdroperc20,
      },
    ],
  },
  {
    identifier: "english-auctions",
    name: "English-auctions",
    description: "",
    contracts: [
      {
        identifier: "arc/englishauctionslogic",
        name: "EnglishAuctionsLogic",
        version: "0.0.1",
        description:
          "This contract implements English auctions, where the highest bidder wins. It allows anyone to create an auction, make bids, and claim the auctioned item if they are the highest bidder. ",
        source: englishauctionslogic,
      },
      {
        identifier: "arc/englishauctionsstorage",
        name: "EnglishAuctionsStorage",
        version: "0.0.1",
        description:
          "This contract stores the data for English Auctions. It stores the auction details, including the auction creator, the current highest bid, and the current highest bidder. ",
        source: englishauctionsstorage,
      },
    ],
  },
  {
    identifier: "direct-listings",
    name: "Direct-listings",
    description: "",
    contracts: [
      {
        identifier: "arc/directlistingsstorage",
        name: "DirectListingsStorage",
        version: "0.0.1",
        description:
          "This contract is used to store listings for the Direct Listings platform. It is designed to be used in conjunction with the Direct Listings Marketplace contract, which provides the functionality for users to interact with the listings. ",
        source: directlistingsstorage,
      },
      {
        identifier: "arc/directlistingslogic",
        name: "DirectListingsLogic",
        version: "0.0.1",
        description:
          "This contract manages direct listings for the marketplace. It allows for the creation, listing, and removal of direct listings, ensuring proper ownership and access control. ",
        source: directlistingslogic,
      },
    ],
  },
  {
    identifier: "offers",
    name: "Offers",
    description: "",
    contracts: [
      {
        identifier: "arc/offerslogic",
        name: "OffersLogic",
        version: "0.0.1",
        description: "A contract for managing offers and their interactions with users and tokens. ",
        source: offerslogic,
      },
      {
        identifier: "arc/offersstorage",
        name: "OffersStorage",
        version: "0.0.1",
        description: "A contract for storing offers. ",
        source: offersstorage,
      },
    ],
  },
  {
    identifier: "entrypoint",
    name: "Entrypoint",
    description: "",
    contracts: [
      {
        identifier: "arc/marketplacev3",
        name: "MarketplaceV3",
        version: "0.0.1",
        description:
          "A decentralized marketplace for buying and selling digital assets, featuring an advanced royalty system, flexible listing options, and robust security measures. ",
        source: marketplacev3,
      },
    ],
  },
  {
    identifier: "extension",
    name: "Extension",
    description: "",
    contracts: [
      {
        identifier: "arc/rulesengineextension",
        name: "RulesEngineExtension",
        version: "0.0.1",
        description: "A Solidity contract for defining and executing rules using a flexible expression-based system. ",
        source: rulesengineextension,
      },
    ],
  },
  {
    identifier: "managed",
    name: "Managed",
    description: "",
    contracts: [
      {
        identifier: "arc/managedaccount",
        name: "ManagedAccount",
        version: "0.0.1",
        description: "A contract that allows for the management of an account by a designated manager. ",
        source: managedaccount,
      },
      {
        identifier: "arc/managedaccountfactory",
        name: "ManagedAccountFactory",
        version: "0.0.1",
        description: "A factory contract for creating and managing managed accounts. ",
        source: managedaccountfactory,
      },
    ],
  },
  {
    identifier: "dynamic",
    name: "Dynamic",
    description: "",
    contracts: [
      {
        identifier: "arc/dynamicaccount",
        name: "DynamicAccount",
        version: "0.0.1",
        description:
          "A dynamic account contract that allows for the delegation of execution permissions to other addresses. This contract can be used to implement a variety of use cases, such as multi-signature wallets, decentralized governance systems, and more. ",
        source: dynamicaccount,
      },
      {
        identifier: "arc/dynamicaccountfactory",
        name: "DynamicAccountFactory",
        version: "0.0.1",
        description:
          "A contract that allows creating dynamic accounts with unique IDs. The owner can customize these accounts by setting their initial state, specifying their functionality with bytecode and runtime code, and controlling their permissions. These accounts can be deployed in various ways based on the chosen configuration, offering flexibility in their deployment. ",
        source: dynamicaccountfactory,
      },
    ],
  },
  {
    identifier: "utils",
    name: "Utils",
    description: "",
    contracts: [
      {
        identifier: "arc/helpers",
        name: "Helpers",
        version: "0.0.1",
        description: "A library of reusable helper functions for various common Solidity tasks. ",
        source: helpers,
      },
      {
        identifier: "arc/baseaccountfactory",
        name: "BaseAccountFactory",
        version: "0.0.1",
        description: "A factory contract for creating BaseAccount contracts. ",
        source: baseaccountfactory,
      },
      {
        identifier: "arc/useroperationlib",
        name: "UserOperationLib",
        version: "0.0.1",
        description: "Library for user operations in account abstraction ",
        source: useroperationlib,
      },
      {
        identifier: "arc/accountcore",
        name: "AccountCore",
        version: "0.0.1",
        description: "A core account management contract. ",
        source: accountcore,
      },
      {
        identifier: "arc/accountseaportbulksigsupport",
        name: "AccountSeaportBulkSigSupport",
        version: "0.0.1",
        description:
          "This contract enables batch signature support for Seaport, allowing users to sign multiple Seaport orders in a single transaction. ",
        source: accountseaportbulksigsupport,
      },
      {
        identifier: "arc/entrypoint",
        name: "EntryPoint",
        version: "0.0.1",
        description:
          "This contract is an entry point for executing user operations on StarkNet. It is responsible for handling gas payments, validating signatures, and executing the user operation on the StarkNet system. It is also responsible for handling the execution of the user operation and the resulting state updates on the StarkNet system. ",
        source: entrypoint,
      },
      {
        identifier: "arc/accountcorestorage",
        name: "AccountCoreStorage",
        version: "0.0.1",
        description:
          "The AccountCoreStorage contract is a core component of the OpenZeppelin Account system. It serves as a central storage unit for account-related data, including account creation, management, and permissions. This contract is designed to be used in conjunction with other Account modules, offering flexibility and extensibility for various account implementation needs. ",
        source: accountcorestorage,
      },
      {
        identifier: "arc/exec",
        name: "Exec",
        version: "0.0.1",
        description:
          "A contract that allows for the execution of arbitrary code with a configurable gas limit and a configurable execution environment. ",
        source: exec,
      },
      {
        identifier: "arc/noncemanager",
        name: "NonceManager",
        version: "0.0.1",
        description:
          "A contract that helps manage the nonce of a user. This is useful when interacting with a contract that relies on the user to provide their own nonce, as it can help prevent replay attacks. ",
        source: noncemanager,
      },
      {
        identifier: "arc/sendercreator",
        name: "SenderCreator",
        version: "0.0.1",
        description:
          "The SenderCreator contract allows users to create and manage sender accounts with specific permission levels. These accounts can be used to send transactions on behalf of the creator without exposing the creator's primary address. ",
        source: sendercreator,
      },
      {
        identifier: "arc/accountextension",
        name: "AccountExtension",
        version: "0.0.1",
        description:
          "This contract extends the functionality of an account by allowing for the delegation of operations to another address. This can be useful for scenarios like multi-sig wallets, where multiple parties need to approve transactions before they can be executed. ",
        source: accountextension,
      },
      {
        identifier: "arc/stakemanager",
        name: "StakeManager",
        version: "0.0.1",
        description: "StakeManager contract for managing staking and rewards. ",
        source: stakemanager,
      },
      {
        identifier: "arc/tokencallbackhandler",
        name: "TokenCallbackHandler",
        version: "0.0.1",
        description: "A contract that handles callbacks from other contracts. ",
        source: tokencallbackhandler,
      },
      {
        identifier: "arc/baseaccount",
        name: "BaseAccount",
        version: "0.0.1",
        description:
          "The BaseAccount contract is a foundational component of the ecosystem, enabling the creation of secure and customizable accounts for various applications. It is designed to be flexible and extensible, allowing developers to incorporate diverse functionalities into their projects. ",
        source: baseaccount,
      },
    ],
  },
  {
    identifier: "non-upgradeable",
    name: "Non-upgradeable",
    description: "",
    contracts: [
      {
        identifier: "arc/account",
        name: "Account",
        version: "0.0.1",
        description: "Auto-generated description for the Account contract ",
        source: account,
      },
      {
        identifier: "arc/accountfactory",
        name: "AccountFactory",
        version: "0.0.1",
        description: "A factory contract for creating new accounts with customizable permissions. ",
        source: accountfactory,
      },
    ],
  },
  {
    identifier: "interfaces",
    name: "Interfaces",
    description: "",
    contracts: [
      {
        identifier: "arc/iaccount",
        name: "IAccount",
        version: "0.0.1",
        description: "Interface for accounts. ",
        source: iaccount,
      },
      {
        identifier: "arc/packeduseroperation",
        name: "PackedUserOperation",
        version: "0.0.1",
        description: "A packed user operation structure for use with the EntryPoint contract ",
        source: packeduseroperation,
      },
      {
        identifier: "arc/iaccountfactory",
        name: "IAccountFactory",
        version: "0.0.1",
        description: "Interface for AccountFactory contract. ",
        source: iaccountfactory,
      },
      {
        identifier: "arc/iaccountexecute",
        name: "IAccountExecute",
        version: "0.0.1",
        description: "Interface for the Account contract to execute transactions via the account manager ",
        source: iaccountexecute,
      },
      {
        identifier: "arc/iaccountcore",
        name: "IAccountCore",
        version: "0.0.1",
        description: "Interface for AccountCore contracts. ",
        source: iaccountcore,
      },
      {
        identifier: "arc/ipaymaster",
        name: "IPaymaster",
        version: "0.0.1",
        description: "Interface for a Paymaster contract. ",
        source: ipaymaster,
      },
      {
        identifier: "arc/inoncemanager",
        name: "INonceManager",
        version: "0.0.1",
        description: "Interface for managing nonces. ",
        source: inoncemanager,
      },
      {
        identifier: "arc/istakemanager",
        name: "IStakeManager",
        version: "0.0.1",
        description: "Interface for a Stake Manager contract. ",
        source: istakemanager,
      },
      {
        identifier: "arc/iaggregator",
        name: "IAggregator",
        version: "0.0.1",
        description: "Interface for aggregators of price feeds. ",
        source: iaggregator,
      },
      {
        identifier: "arc/ientrypoint",
        name: "IEntryPoint",
        version: "0.0.1",
        description: "Interface for entry point of a reentrancy guard ",
        source: ientrypoint,
      },
      {
        identifier: "arc/iaccountfactorycore",
        name: "IAccountFactoryCore",
        version: "0.0.1",
        description: "Interface for the account factory core contract. ",
        source: iaccountfactorycore,
      },
    ],
  },
  {
    identifier: "token-bound-account",
    name: "Token-bound-account",
    description: "",
    contracts: [
      {
        identifier: "arc/tokenboundaccount",
        name: "TokenBoundAccount",
        version: "0.0.1",
        description:
          "A contract that allows for the creation of accounts that are bound to a specific token. This enables applications to restrict access to certain features or resources based on token ownership. ",
        source: tokenboundaccount,
      },
      {
        identifier: "arc/erc6551bytecodelib",
        name: "ERC6551BytecodeLib",
        version: "0.0.1",
        description: "Library for generating ERC-6551 bytecode. ",
        source: erc6551bytecodelib,
      },
      {
        identifier: "arc/ierc6551account",
        name: "IERC6551Account",
        version: "0.0.1",
        description:
          "Interface of the ERC-6551 Account standard, allowing contracts to interact with account-based smart contracts. ",
        source: ierc6551account,
      },
      {
        identifier: "arc/erc6551accountlib",
        name: "ERC6551AccountLib",
        version: "0.0.1",
        description:
          "This library provides the core functionality for ERC6551 accounts, enabling smart contracts to act as independent entities with their own wallets and the ability to manage their own assets. ",
        source: erc6551accountlib,
      },
    ],
  },
  {
    identifier: "erc6551-utils",
    name: "Erc6551-utils",
    description: "",
    contracts: [
      {
        identifier: "arc/erc6551bytecodelib",
        name: "ERC6551BytecodeLib",
        version: "0.0.1",
        description: "Library for generating ERC-6551 bytecode. ",
        source: erc6551bytecodelib,
      },
      {
        identifier: "arc/ierc6551account",
        name: "IERC6551Account",
        version: "0.0.1",
        description:
          "Interface of the ERC-6551 Account standard, allowing contracts to interact with account-based smart contracts. ",
        source: ierc6551account,
      },
      {
        identifier: "arc/erc6551accountlib",
        name: "ERC6551AccountLib",
        version: "0.0.1",
        description:
          "This library provides the core functionality for ERC6551 accounts, enabling smart contracts to act as independent entities with their own wallets and the ability to manage their own assets. ",
        source: erc6551accountlib,
      },
    ],
  },
  {
    identifier: "burn-to-claim-drop",
    name: "Burn-to-claim-drop",
    description: "",
    contracts: [
      {
        identifier: "arc/burntoclaimdroperc721",
        name: "BurnToClaimDropERC721",
        version: "0.0.1",
        description:
          "This contract allows users to burn tokens from another ERC721 contract to claim a new ERC721 token from this contract. ",
        source: burntoclaimdroperc721,
      },
      {
        identifier: "arc/burntoclaimdrop721storage",
        name: "BurnToClaimDrop721Storage",
        version: "0.0.1",
        description: "This contract stores the storage for the BurnToClaimDrop721 contract. ",
        source: burntoclaimdrop721storage,
      },
      {
        identifier: "arc/burntoclaimdrop721logic",
        name: "BurnToClaimDrop721Logic",
        version: "0.0.1",
        description:
          "This contract is a logic contract for the BurnToClaimDrop721 contract. It allows users to burn a specified ERC20 token and claim a corresponding NFT from the BurnToClaimDrop721 contract. ",
        source: burntoclaimdrop721logic,
      },
    ],
  },
  {
    identifier: "contract-builder",
    name: "Contract-builder",
    description: "",
    contracts: [
      {
        identifier: "arc/corerouter",
        name: "CoreRouter",
        version: "0.0.1",
        description:
          "The CoreRouter contract acts as a central hub for interacting with various DeFi protocols. It allows users to seamlessly execute swaps, provide liquidity, and access other decentralized financial services in a secure and efficient manner. The contract leverages the power of aggregators to source the best prices across multiple decentralized exchanges (DEXs) and liquidity pools. ",
        source: corerouter,
      },
      {
        identifier: "arc/permissionoverride",
        name: "PermissionOverride",
        version: "0.0.1",
        description:
          "The PermissionOverride contract allows for overriding the permission settings of a given address for a specific function. This is useful for scenarios where you need to grant temporary or limited access to a function, even if the address doesn't normally have permission. ",
        source: permissionoverride,
      },
    ],
  },
  {
    identifier: "loyalty",
    name: "Loyalty",
    description: "",
    contracts: [
      {
        identifier: "arc/loyaltypoints",
        name: "LoyaltyPoints",
        version: "0.0.1",
        description: "A contract for managing loyalty points, allowing users to earn, redeem, and transfer points. ",
        source: loyaltypoints,
      },
    ],
  },
  {
    identifier: "airdrop",
    name: "Airdrop",
    description: "",
    contracts: [
      {
        identifier: "arc/airdroperc20claimable",
        name: "AirdropERC20Claimable",
        version: "0.0.1",
        description:
          "An ERC20 token contract that implements an airdrop functionality where users can claim tokens based on their eligibility. This contract allows for easy distribution of tokens to a pre-defined list of addresses. ",
        source: airdroperc20claimable,
      },
      {
        identifier: "arc/airdroperc1155claimable",
        name: "AirdropERC1155Claimable",
        version: "0.0.1",
        description: "An ERC-1155 contract for airdropping tokens with a claim functionality. ",
        source: airdroperc1155claimable,
      },
      {
        identifier: "arc/airdroperc721claimable",
        name: "AirdropERC721Claimable",
        version: "0.0.1",
        description:
          "This contract implements an ERC721 airdrop system where users can claim tokens based on predefined criteria. ",
        source: airdroperc721claimable,
      },
      {
        identifier: "arc/airdroperc20",
        name: "AirdropERC20",
        version: "0.0.1",
        description:
          "AirdropERC20 contract allows for airdropping ERC20 tokens to a list of addresses. It features a simple, secure, and gas-efficient way to distribute tokens to multiple recipients. ",
        source: airdroperc20,
      },
      {
        identifier: "arc/airdroperc1155",
        name: "AirdropERC1155",
        version: "0.0.1",
        description:
          "This contract implements an airdrop mechanism for ERC1155 tokens, allowing the contract owner to distribute tokens to a list of recipients. ",
        source: airdroperc1155,
      },
      {
        identifier: "arc/airdroperc721",
        name: "AirdropERC721",
        version: "0.0.1",
        description: "AirdropERC721 contract allows to airdrop ERC721 tokens to a list of addresses. ",
        source: airdroperc721,
      },
    ],
  },
  {
    identifier: "extension",
    name: "Extension",
    description: "",
    contracts: [
      {
        identifier: "arc/burntoclaimdrop721storage",
        name: "BurnToClaimDrop721Storage",
        version: "0.0.1",
        description: "This contract stores the storage for the BurnToClaimDrop721 contract. ",
        source: burntoclaimdrop721storage,
      },
      {
        identifier: "arc/burntoclaimdrop721logic",
        name: "BurnToClaimDrop721Logic",
        version: "0.0.1",
        description:
          "This contract is a logic contract for the BurnToClaimDrop721 contract. It allows users to burn a specified ERC20 token and claim a corresponding NFT from the BurnToClaimDrop721 contract. ",
        source: burntoclaimdrop721logic,
      },
    ],
  },
  {
    identifier: "extension",
    name: "Extension",
    description: "",
    contracts: [
      {
        identifier: "arc/permissionoverride",
        name: "PermissionOverride",
        version: "0.0.1",
        description:
          "The PermissionOverride contract allows for overriding the permission settings of a given address for a specific function. This is useful for scenarios where you need to grant temporary or limited access to a function, even if the address doesn't normally have permission. ",
        source: permissionoverride,
      },
    ],
  },
]

export default ContractStore
