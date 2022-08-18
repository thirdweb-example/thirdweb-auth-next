import { ContractAddress } from "../../types";
/**
 * A hook to get the native or (optional) ERC20 token balance of the connected wallet.
 *
 * @param tokenAddress - the address of the token contract, if empty will use the chain's native token
 * @returns the balance of the connected wallet (native or ERC20)
 * @beta
 */
export declare function useBalance(tokenAddress?: ContractAddress): import("@tanstack/react-query").UseQueryResult<{
    symbol: string;
    value: import("ethers").BigNumber;
    name: string;
    decimals: number;
    displayValue: string;
} | undefined, unknown>;
