/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  DoubleEndedQueue,
  DoubleEndedQueueInterface,
} from "../../../../../@openzeppelin/contracts/utils/structs/DoubleEndedQueue";

const _abi = [
  {
    inputs: [],
    name: "Empty",
    type: "error",
  },
  {
    inputs: [],
    name: "OutOfBounds",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122015e6e963b6c71947b9606655d71ee2c6db3437d6a05d31df852252787b9c43be64736f6c63430008110033";

type DoubleEndedQueueConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DoubleEndedQueueConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DoubleEndedQueue__factory extends ContractFactory {
  constructor(...args: DoubleEndedQueueConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DoubleEndedQueue> {
    return super.deploy(overrides || {}) as Promise<DoubleEndedQueue>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DoubleEndedQueue {
    return super.attach(address) as DoubleEndedQueue;
  }
  override connect(signer: Signer): DoubleEndedQueue__factory {
    return super.connect(signer) as DoubleEndedQueue__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DoubleEndedQueueInterface {
    return new utils.Interface(_abi) as DoubleEndedQueueInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DoubleEndedQueue {
    return new Contract(address, _abi, signerOrProvider) as DoubleEndedQueue;
  }
}
