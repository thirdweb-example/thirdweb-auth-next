import { ClaimTokenParams, RequiredParam, TokenBurnParams, TokenParams, WalletAddress } from "../../types";
import type { Erc20, TokenDrop } from "@thirdweb-dev/sdk/dist/browser";
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Use this to get a the total supply of your {@link Erc20} contract.
 *
 * @example
 * ```javascript
 * const { data: totalSupply, isLoading, error } = useTokenSupply(<YourTokenContractInstance>);
 * ```
 *
 * @param contract - an instance of a Token contract.
 * @returns a response object that incudes the total minted supply
 * @beta
 */
export declare function useTokenSupply(contract: RequiredParam<Erc20>): import("@tanstack/react-query").UseQueryResult<{
    symbol: string;
    value: import("ethers").BigNumber;
    name: string;
    decimals: number;
    displayValue: string;
}, unknown>;
/**
 * Use this to get the balance of your {@link Erc20} contract for a given address.
 *
 * @example
 * ```javascript
 * const { data: balance, isLoading, error } = useTokenBalance(<YourTokenContractInstance>);
 * ```
 *
 * @param contract - an instance of a Token contract.
 * @returns a response object that includes the balance of the address
 * @beta
 */
export declare function useTokenBalance(contract: RequiredParam<Erc20>, walletAddress: RequiredParam<WalletAddress>): import("@tanstack/react-query").UseQueryResult<{
    symbol: string;
    value: import("ethers").BigNumber;
    name: string;
    decimals: number;
    displayValue: string;
}, unknown>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Use this to mint new tokens on your {@link Erc20} contract
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: mintTokens,
 *     isLoading,
 *     error,
 *   } = useMintToken(">>YourERC20ContractInstance<<");
 *
 *   if (error) {
 *     console.error("failed to mint tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => mintTokens({ to: "0x...", amount: 1000 })}
 *     >
 *       Mint!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC20 spec (token, token drop, custom contract that follows the ERC20 spec)
 * @returns a mutation object that can be used to mint new tokens to the connected wallet
 * @beta
 */
export declare function useMintToken(contract: RequiredParam<Erc20>): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, TokenParams, unknown>;
/**
 * Use this to claim tokens on your {@link TokenDrop}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: claimTokens,
 *     isLoading,
 *     error,
 *   } = useClaimToken(TokenDropContract);
 *
 *   if (error) {
 *     console.error("failed to claim tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => claimTokens({ to: "0x...", amount: 100 })}
 *     >
 *       Claim Tokens!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link TokenDrop}
 * @returns a mutation object that can be used to tokens to the wallet specificed in the params
 * @beta
 */
export declare function useClaimToken<TContract extends TokenDrop>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, ClaimTokenParams, unknown>;
/**
 * Use this to transfer tokens on your {@link Erc20} contract
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: transferTokens,
 *     isLoading,
 *     error,
 *   } = useTransferToken(">>YourERC20ContractInstance<<");
 *
 *   if (error) {
 *     console.error("failed to transfer tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => transferTokens({ to: "0x...", amount: 1000 })}
 *     >
 *       Transfer
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC20 spec (token, token drop, custom contract that follows the ERC20 spec)
 * @returns a mutation object that can be used to transfer tokens
 * @beta
 */
export declare function useTransferToken(contract: RequiredParam<Erc20>): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, TokenParams, unknown>;
/**
 * Use this to transfer batch tokens on your {@link Erc20} contract
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: transferBatchTokens,
 *     isLoading,
 *     error,
 *   } = useTransferToken(">>YourERC20ContractInstance<<");
 *
 *   if (error) {
 *     console.error("failed to transfer batch tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => transferBatchTokens([{ to: "0x...", amount: 1000 }, { to: "0x...", amount: 2000 }])}
 *     >
 *       Transfer Batch
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC20 spec (token, token drop, custom contract that follows the ERC20 spec)
 * @returns a mutation object that can be used to transfer batch tokens
 * @beta
 */
export declare function useTransferBatchToken(contract: RequiredParam<Erc20>): import("@tanstack/react-query").UseMutationResult<void, unknown, TokenParams[], unknown>;
/**
 * Use this to burn tokens on your {@link Erc20} contract
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: burnTokens,
 *     isLoading,
 *     error,
 *   } = useBurnToken(">>YourERC20ContractInstance<<");
 *
 *   if (error) {
 *     console.error("failed to burn tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => burnTokens({ amount: 1000 })}
 *     >
 *       Burn!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC20 spec (token, token drop, custom contract that follows the ERC20 spec)
 * @returns a mutation object that can be used to burn tokens from the connected wallet
 * @beta
 */
export declare function useBurnToken(contract: RequiredParam<Erc20>): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, TokenBurnParams, unknown>;
