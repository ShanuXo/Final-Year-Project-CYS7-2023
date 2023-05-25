/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TimelockController,
  TimelockControllerInterface,
} from "../../../../@openzeppelin/contracts/governance/TimelockController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CANCELLER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200228e3803806200228e833981016040819052620000349162000408565b6200004f6000805160206200220e833981519152806200022d565b620000796000805160206200222e8339815191526000805160206200220e8339815191526200022d565b620000a36000805160206200224e8339815191526000805160206200220e8339815191526200022d565b620000cd6000805160206200226e8339815191526000805160206200220e8339815191526200022d565b620000e86000805160206200220e8339815191523062000278565b6001600160a01b038116156200011357620001136000805160206200220e8339815191528262000278565b60005b835181101562000199576200015d6000805160206200222e8339815191528583815181106200014957620001496200048f565b60200260200101516200027860201b60201c565b620001866000805160206200226e8339815191528583815181106200014957620001496200048f565b6200019181620004a5565b905062000116565b5060005b8251811015620001e357620001d06000805160206200224e8339815191528483815181106200014957620001496200048f565b620001db81620004a5565b90506200019d565b5060028490556040805160008152602081018690527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150505050620004cd565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b62000284828262000288565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000284576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002e43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200035657600080fd5b919050565b600082601f8301126200036d57600080fd5b815160206001600160401b03808311156200038c576200038c62000328565b8260051b604051601f19603f83011681018181108482111715620003b457620003b462000328565b604052938452858101830193838101925087851115620003d357600080fd5b83870191505b84821015620003fd57620003ed826200033e565b83529183019190830190620003d9565b979650505050505050565b600080600080608085870312156200041f57600080fd5b845160208601519094506001600160401b03808211156200043f57600080fd5b6200044d888389016200035b565b945060408701519150808211156200046457600080fd5b5062000473878288016200035b565b92505062000484606086016200033e565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b600060018201620004c657634e487b7160e01b600052601160045260246000fd5b5060010190565b611d3180620004dd6000396000f3fe60806040526004361061017b5760003560e01c80638065657f116100cc578063bc197c811161007a578063bc197c81146104a5578063c4d252f5146104d1578063d45c4435146104f1578063d547741f1461051e578063e38335e51461053e578063f23a6e6114610551578063f27a0c921461057d57600080fd5b80638065657f146103ba5780638f2a0bb0146103da5780638f61f4f5146103fa57806391d148541461041c578063a217fddf1461043c578063b08e51c014610451578063b1c5f4271461048557600080fd5b8063248a9ca311610129578063248a9ca3146102b95780632ab0f529146102e95780632f2ff15d1461031a57806331d507501461033a57806336568abe1461035a578063584b153e1461037a57806364d623531461039a57600080fd5b806301d5062a1461018757806301ffc9a7146101a957806307bd0265146101de5780630d3cf6fc1461020e578063134008d31461024257806313bc9f2014610255578063150b7a021461027557600080fd5b3661018257005b600080fd5b34801561019357600080fd5b506101a76101a2366004611314565b610592565b005b3480156101b557600080fd5b506101c96101c4366004611388565b610615565b60405190151581526020015b60405180910390f35b3480156101ea57600080fd5b50610200600080516020611cdc83398151915281565b6040519081526020016101d5565b34801561021a57600080fd5b506102007f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6101a76102503660046113b2565b610640565b34801561026157600080fd5b506101c961027036600461141d565b6106e3565b34801561028157600080fd5b506102a06102903660046114eb565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016101d5565b3480156102c557600080fd5b506102006102d436600461141d565b60009081526020819052604090206001015490565b3480156102f557600080fd5b506101c961030436600461141d565b6000908152600160208190526040909120541490565b34801561032657600080fd5b506101a7610335366004611552565b610709565b34801561034657600080fd5b506101c961035536600461141d565b610733565b34801561036657600080fd5b506101a7610375366004611552565b61074c565b34801561038657600080fd5b506101c961039536600461141d565b6107cf565b3480156103a657600080fd5b506101a76103b536600461141d565b6107e5565b3480156103c657600080fd5b506102006103d53660046113b2565b610889565b3480156103e657600080fd5b506101a76103f53660046115c2565b6108c8565b34801561040657600080fd5b50610200600080516020611cbc83398151915281565b34801561042857600080fd5b506101c9610437366004611552565b610a08565b34801561044857600080fd5b50610200600081565b34801561045d57600080fd5b506102007ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b34801561049157600080fd5b506102006104a0366004611673565b610a31565b3480156104b157600080fd5b506102a06104c036600461179a565b63bc197c8160e01b95945050505050565b3480156104dd57600080fd5b506101a76104ec36600461141d565b610a76565b3480156104fd57600080fd5b5061020061050c36600461141d565b60009081526001602052604090205490565b34801561052a57600080fd5b506101a7610539366004611552565b610b4b565b6101a761054c366004611673565b610b70565b34801561055d57600080fd5b506102a061056c366004611843565b63f23a6e6160e01b95945050505050565b34801561058957600080fd5b50600254610200565b600080516020611cbc8339815191526105aa81610ce8565b60006105ba898989898989610889565b90506105c68184610cf5565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a604051610602969594939291906118d0565b60405180910390a3505050505050505050565b60006001600160e01b03198216630271189760e51b148061063a575061063a82610de4565b92915050565b600080516020611cdc83398151915261065a816000610a08565b610668576106688133610e19565b6000610678888888888888610889565b90506106848185610e72565b61069088888888610f0e565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a6040516106c8949392919061190d565b60405180910390a36106d981610fe1565b5050505050505050565b6000818152600160205260408120546001811180156107025750428111155b9392505050565b60008281526020819052604090206001015461072481610ce8565b61072e838361101a565b505050565b60008181526001602052604081205481905b1192915050565b6001600160a01b03811633146107c15760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6107cb828261109e565b5050565b6000818152600160208190526040822054610745565b3330146108485760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b60648201526084016107b8565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b60008686868686866040516020016108a6969594939291906118d0565b6040516020818303038152906040528051906020012090509695505050505050565b600080516020611cbc8339815191526108e081610ce8565b8887146108ff5760405162461bcd60e51b81526004016107b89061193f565b88851461091e5760405162461bcd60e51b81526004016107b89061193f565b60006109308b8b8b8b8b8b8b8b610a31565b905061093c8184610cf5565b60005b8a8110156109fa5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e8581811061097c5761097c611982565b90506020020160208101906109919190611998565b8d8d868181106109a3576109a3611982565b905060200201358c8c878181106109bc576109bc611982565b90506020028101906109ce91906119b3565b8c8b6040516109e2969594939291906118d0565b60405180910390a36109f381611a0f565b905061093f565b505050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008888888888888888604051602001610a52989796959493929190611ab9565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610aa081610ce8565b610aa9826107cf565b610b0f5760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b60648201526084016107b8565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610b6681610ce8565b61072e838361109e565b600080516020611cdc833981519152610b8a816000610a08565b610b9857610b988133610e19565b878614610bb75760405162461bcd60e51b81526004016107b89061193f565b878414610bd65760405162461bcd60e51b81526004016107b89061193f565b6000610be88a8a8a8a8a8a8a8a610a31565b9050610bf48185610e72565b60005b89811015610cd25760008b8b83818110610c1357610c13611982565b9050602002016020810190610c289190611998565b905060008a8a84818110610c3e57610c3e611982565b9050602002013590503660008a8a86818110610c5c57610c5c611982565b9050602002810190610c6e91906119b3565b91509150610c7e84848484610f0e565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5886868686604051610cb5949392919061190d565b60405180910390a35050505080610ccb90611a0f565b9050610bf7565b50610cdc81610fe1565b50505050505050505050565b610cf28133610e19565b50565b610cfe82610733565b15610d635760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b60648201526084016107b8565b600254811015610dc45760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b60648201526084016107b8565b610dce8142611b5a565b6000928352600160205260409092209190915550565b60006001600160e01b03198216637965db0b60e01b148061063a57506301ffc9a760e01b6001600160e01b031983161461063a565b610e238282610a08565b6107cb57610e3081611103565b610e3b836020611115565b604051602001610e4c929190611b91565b60408051601f198184030181529082905262461bcd60e51b82526107b891600401611c00565b610e7b826106e3565b610e975760405162461bcd60e51b81526004016107b890611c33565b801580610eb35750600081815260016020819052604090912054145b6107cb5760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b60648201526084016107b8565b6000846001600160a01b0316848484604051610f2b929190611c7d565b60006040518083038185875af1925050503d8060008114610f68576040519150601f19603f3d011682016040523d82523d6000602084013e610f6d565b606091505b5050905080610fda5760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b60648201526084016107b8565b5050505050565b610fea816106e3565b6110065760405162461bcd60e51b81526004016107b890611c33565b600090815260016020819052604090912055565b6110248282610a08565b6107cb576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905561105a3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6110a88282610a08565b156107cb576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b606061063a6001600160a01b03831660145b60606000611124836002611c8d565b61112f906002611b5a565b6001600160401b0381111561114657611146611436565b6040519080825280601f01601f191660200182016040528015611170576020820181803683370190505b509050600360fc1b8160008151811061118b5761118b611982565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106111ba576111ba611982565b60200101906001600160f81b031916908160001a90535060006111de846002611c8d565b6111e9906001611b5a565b90505b6001811115611261576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061121d5761121d611982565b1a60f81b82828151811061123357611233611982565b60200101906001600160f81b031916908160001a90535060049490941c9361125a81611ca4565b90506111ec565b5083156107025760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016107b8565b80356001600160a01b03811681146112c757600080fd5b919050565b60008083601f8401126112de57600080fd5b5081356001600160401b038111156112f557600080fd5b60208301915083602082850101111561130d57600080fd5b9250929050565b600080600080600080600060c0888a03121561132f57600080fd5b611338886112b0565b96506020880135955060408801356001600160401b0381111561135a57600080fd5b6113668a828b016112cc565b989b979a50986060810135976080820135975060a09091013595509350505050565b60006020828403121561139a57600080fd5b81356001600160e01b03198116811461070257600080fd5b60008060008060008060a087890312156113cb57600080fd5b6113d4876112b0565b95506020870135945060408701356001600160401b038111156113f657600080fd5b61140289828a016112cc565b979a9699509760608101359660809091013595509350505050565b60006020828403121561142f57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561147457611474611436565b604052919050565b600082601f83011261148d57600080fd5b81356001600160401b038111156114a6576114a6611436565b6114b9601f8201601f191660200161144c565b8181528460208386010111156114ce57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561150157600080fd5b61150a856112b0565b9350611518602086016112b0565b92506040850135915060608501356001600160401b0381111561153a57600080fd5b6115468782880161147c565b91505092959194509250565b6000806040838503121561156557600080fd5b82359150611575602084016112b0565b90509250929050565b60008083601f84011261159057600080fd5b5081356001600160401b038111156115a757600080fd5b6020830191508360208260051b850101111561130d57600080fd5b600080600080600080600080600060c08a8c0312156115e057600080fd5b89356001600160401b03808211156115f757600080fd5b6116038d838e0161157e565b909b50995060208c013591508082111561161c57600080fd5b6116288d838e0161157e565b909950975060408c013591508082111561164157600080fd5b5061164e8c828d0161157e565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b03121561168f57600080fd5b88356001600160401b03808211156116a657600080fd5b6116b28c838d0161157e565b909a50985060208b01359150808211156116cb57600080fd5b6116d78c838d0161157e565b909850965060408b01359150808211156116f057600080fd5b506116fd8b828c0161157e565b999c989b509699959896976060870135966080013595509350505050565b600082601f83011261172c57600080fd5b813560206001600160401b0382111561174757611747611436565b8160051b61175682820161144c565b928352848101820192828101908785111561177057600080fd5b83870192505b8483101561178f57823582529183019190830190611776565b979650505050505050565b600080600080600060a086880312156117b257600080fd5b6117bb866112b0565b94506117c9602087016112b0565b935060408601356001600160401b03808211156117e557600080fd5b6117f189838a0161171b565b9450606088013591508082111561180757600080fd5b61181389838a0161171b565b9350608088013591508082111561182957600080fd5b506118368882890161147c565b9150509295509295909350565b600080600080600060a0868803121561185b57600080fd5b611864866112b0565b9450611872602087016112b0565b9350604086013592506060860135915060808601356001600160401b0381111561189b57600080fd5b6118368882890161147c565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038716815285602082015260a0604082015260006118f860a0830186886118a7565b60608301949094525060800152949350505050565b60018060a01b03851681528360208201526060604082015260006119356060830184866118a7565b9695505050505050565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156119aa57600080fd5b610702826112b0565b6000808335601e198436030181126119ca57600080fd5b8301803591506001600160401b038211156119e457600080fd5b60200191503681900382131561130d57600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611a2157611a216119f9565b5060010190565b81835260006020808501808196508560051b810191508460005b87811015611aac5782840389528135601e19883603018112611a6357600080fd5b870185810190356001600160401b03811115611a7e57600080fd5b803603821315611a8d57600080fd5b611a988682846118a7565b9a87019a9550505090840190600101611a42565b5091979650505050505050565b60a0808252810188905260008960c08301825b8b811015611afa576001600160a01b03611ae5846112b0565b16825260209283019290910190600101611acc565b5083810360208501528881526001600160fb1b03891115611b1a57600080fd5b8860051b9150818a60208301370182810360209081016040850152611b429082018789611a28565b60608401959095525050608001529695505050505050565b8082018082111561063a5761063a6119f9565b60005b83811015611b88578181015183820152602001611b70565b50506000910152565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351611bc3816017850160208801611b6d565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611bf4816028840160208801611b6d565b01602801949350505050565b6020815260008251806020840152611c1f816040850160208701611b6d565b601f01601f19169190910160400192915050565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b8183823760009101908152919050565b808202811582820484141761063a5761063a6119f9565b600081611cb357611cb36119f9565b50600019019056feb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63a264697066735822122041825ea5df0ed0e7d0b5fc0c1985b76e50c0f76bdf5c0ad4ba15f0a1c61ffd1764736f6c634300081100335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783";

type TimelockControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockController__factory extends ContractFactory {
  constructor(...args: TimelockControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimelockController> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    ) as Promise<TimelockController>;
  }
  override getDeployTransaction(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    );
  }
  override attach(address: string): TimelockController {
    return super.attach(address) as TimelockController;
  }
  override connect(signer: Signer): TimelockController__factory {
    return super.connect(signer) as TimelockController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerInterface {
    return new utils.Interface(_abi) as TimelockControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockController {
    return new Contract(address, _abi, signerOrProvider) as TimelockController;
  }
}
