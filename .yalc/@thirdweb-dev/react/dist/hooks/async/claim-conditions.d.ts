import { RequiredParam, WalletAddress } from "../../types";
import { EditionDrop, Erc1155, NFTDrop, SignatureDrop, TokenDrop } from "@thirdweb-dev/sdk/dist/browser";
import { BigNumberish } from "ethers";
declare type ActiveClaimConditionParams<TContract> = TContract extends Erc1155 ? [contract: RequiredParam<TContract>, tokenId: RequiredParam<BigNumberish>] : [contract: RequiredParam<TContract>];
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Use this to get the active claim conditon for ERC20, ERC721 or ERC1155 based contracts. They need to extend the `claimCondition` extension for this hook to work.
 *
 * @example
 * ```javascript
 * const { data: activeClaimCondition, isLoading, error } = useActiveClaimCondition(<YourERC20ContractInstance>);
 * ```
 * @example
 * ```javascript
 * const { data: activeClaimCondition, isLoading, error } = useActiveClaimCondition(<YourERC721ContractInstance>);
 * ```
 * @example
 * ```javascript
 * const { data: activeClaimCondition, isLoading, error } = useActiveClaimCondition(<YourERC1155ContractInstance>, <tokenId>);
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721 or ERC1155 spec and implements the `claimConditions` extension.
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the currently active claim condition
 *
 * @beta
 */
export declare function useActiveClaimCondition<TContract extends NFTDrop | EditionDrop | TokenDrop | SignatureDrop>(...[contract, tokenId]: ActiveClaimConditionParams<TContract>): import("@tanstack/react-query").UseQueryResult<{
    snapshot?: {
        address: string;
        maxClaimable: string;
    }[] | undefined;
    quantityLimitPerTransaction: string;
    startTime: Date;
    price: import("ethers").BigNumber;
    currencyAddress: string;
    maxQuantity: string;
    waitInSeconds: import("ethers").BigNumber;
    merkleRootHash: string | number[];
    availableSupply: string;
    currentMintSupply: string;
    currencyMetadata: {
        symbol: string;
        value: import("ethers").BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    };
}, unknown>;
/**
 * Use this to get all claim conditons for ERC20, ERC721 or ERC1155 based contracts. They need to extend the `claimCondition` extension for this hook to work.
 *
 * @example
 * ```javascript
 * const { data: claimConditions, isLoading, error } = useClaimConditions(<YourERC20ContractInstance>);
 * ```
 * @example
 * ```javascript
 * const { data: claimConditions, isLoading, error } = useClaimConditions(<YourERC721ContractInstance>);
 * ```
 * @example
 * ```javascript
 * const { data: claimConditions, isLoading, error } = useClaimConditions(<YourERC1155ContractInstance>, <tokenId>);
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721 or ERC1155 spec and implements the `claimConditions` extension.
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the list of claim conditions
 *
 * @beta
 */
export declare function useClaimConditions<TContract extends NFTDrop | EditionDrop | TokenDrop | SignatureDrop>(...[contract, tokenId]: ActiveClaimConditionParams<TContract>): import("@tanstack/react-query").UseQueryResult<{
    snapshot?: {
        address: string;
        maxClaimable: string;
    }[] | undefined;
    quantityLimitPerTransaction: string;
    startTime: Date;
    price: import("ethers").BigNumber;
    currencyAddress: string;
    maxQuantity: string;
    waitInSeconds: import("ethers").BigNumber;
    merkleRootHash: string | number[];
    availableSupply: string;
    currentMintSupply: string;
    currencyMetadata: {
        symbol: string;
        value: import("ethers").BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    };
}[], unknown>;
/**
 * The options to be passed as the second parameter to the `useClaimIneligibilityReasons` hook.
 *
 * @beta
 */
export declare type ClaimIneligibilityParameters = {
    walletAddress: WalletAddress;
    quantity: string | number;
};
declare type ClaimIneligibilityInputParams<TContract> = TContract extends Erc1155 ? [
    contract: RequiredParam<TContract>,
    eligibilityParams: ClaimIneligibilityParameters,
    tokenId: RequiredParam<BigNumberish>
] : [
    contract: RequiredParam<TContract>,
    eligibilityParams: ClaimIneligibilityParameters
];
/**
 * Use this to check for reasons that prevent claiming for either  ERC20, ERC721 or ERC1155 based contracts. They need to extend the `claimCondition` extension for this hook to work.
 * @example
 * ```javascript
 * const { data: activeClaimCondition, isLoading, error } = useClaimIneligibilityReasons(<YourERC20ContractInstance>, { walletAddress: <walletAddress> });
 * ```
 * @example
 * ```javascript
 * const { data: claimIneligibilityReasons, isLoading, error } = useClaimIneligibilityReasons(<YourERC721ContractInstance>, { quantity: <quantity>, walletAddress: <walletAddress> });
 * ```
 * @example
 * ```javascript
 * const { data: claimIneligibilityReasons, isLoading, error } = useClaimIneligibilityReasons(<YourERC1155ContractInstance>, { quantity: <quantity>, walletAddress: <walletAddress> }, <tokenId>);
 * ```
 *
 * @param contract - an instance of a contract that extends the  ERC20, ERC721 or ERC1155 spec and implements the `claimConditions` extension.
 * @param eligibilityParams - the parameters for the eligibility check, see: {@link ClaimIneligibilityParameters}
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the resons for the claim ineligibility
 *
 * @beta
 */
export declare function useClaimIneligibilityReasons<TContract extends NFTDrop | EditionDrop | TokenDrop | SignatureDrop>(...[contract, params, tokenId]: ClaimIneligibilityInputParams<TContract>): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk/dist/browser").ClaimEligibility[], unknown>;
export {};
