import { ContractForContractType, ContractType } from "@thirdweb-dev/sdk";
/**
 * @internal
 * @param contractType - the contract type
 * @param contractAddress - the contract address
 * @returns the instance of the contract for the given type and address
 */
export declare function useContract<TContractType extends ContractType>(contractType?: TContractType, contractAddress?: string): ContractForContractType<TContractType> | undefined;
