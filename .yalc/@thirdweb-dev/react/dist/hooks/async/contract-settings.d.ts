import { RequiredParam } from "../../types";
import type { SmartContract, ValidContractInstance } from "@thirdweb-dev/sdk/dist/browser";
/**
 *
 * @example
 * ```jsx
 * const { data: recipient, isLoading, error } = usePrimarySalesRecipient(SmartContract);
 * ```
 *
 * Use this to get the primary sales recipient of your {@link SmartContract}
 * @param contract - an instance of a {@link SmartContract}
 * @returns the wallet address of the primary sales recipient
 * @beta
 */
export declare function usePrimarySaleRecipient(contract: RequiredParam<SmartContract | ValidContractInstance>): import("@tanstack/react-query").UseQueryResult<string, unknown>;
/**
 * Use this to update the primary sales recipient of your {@link SmartContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: updatePrimarySalesRecipient,
 *     isLoading,
 *     error,
 *   } = useUpdatePrimarySaleRecipient(SmartContract);
 *
 *   if (error) {
 *     console.error("failed to update recipient", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updatePrimarySalesRecipient({ newRecipient: "0x123" })}
 *     >
 *       Update Recipient
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the primary sales recipient
 * @beta
 */
export declare function useUpdatePrimarySaleRecipient(contract: RequiredParam<SmartContract | ValidContractInstance>): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, string, unknown>;
/**
 * Use this to get the royalty settings of your {@link SmartContract}
 *
 * @example
 * ```jsx
 * const { data: settings, isLoading, error } = useRoyaltySettings(SmartContract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns an object containing recipient address and the royalty basis points
 * @beta
 */
export declare function useRoyaltySettings(contract: RequiredParam<SmartContract | ValidContractInstance>): import("@tanstack/react-query").UseQueryResult<{
    seller_fee_basis_points: number;
    fee_recipient: string;
}, unknown>;
/**
 * Use this to update the royalty settings of your {@link SmartContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: updateRoyaltySettings,
 *     isLoading,
 *     error,
 *   } = useUpdateRoyaltySettings(SmartContract);
 *
 *   if (error) {
 *     console.error("failed to update royalty settings", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updateRoyaltySettings({ updatePayload: { fee_recipient: "0x123", seller_fee_basis_points: 5_00 } })}
 *     >
 *       Update Royalty Settings
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the royalty settings
 * @beta
 */
export declare function useUpdateRoyaltySettings(contract: RequiredParam<SmartContract | ValidContractInstance>): import("@tanstack/react-query").UseMutationResult<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<{
        seller_fee_basis_points: number;
        fee_recipient: string;
    }>;
}, unknown, {
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
}, unknown>;
/**
 * Use this to get the platform fees settings of your {@link SmartContract}
 *
 * @example
 * ```jsx
 * const { data: platformFees, isLoading, error } = usePlatformFees(SmartContract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns an object containing the platform fee basis points and the fee recipient address
 * @beta
 */
export declare function usePlatformFees(contract: RequiredParam<SmartContract | ValidContractInstance>): import("@tanstack/react-query").UseQueryResult<{
    platform_fee_basis_points: number;
    platform_fee_recipient: string;
}, unknown>;
/**
 * Use this to update the platform fees settings of your {@link SmartContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: updatePlatformFees,
 *     isLoading,
 *     error,
 *   } = useUpdatePlatformFees(SmartContract);
 *
 *   if (error) {
 *     console.error("failed to update platform fees", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updatePlatformFees({ updatePayload: { fee_recipient: "0x123", platform_fee_basis_points: 5_00 } })}
 *     >
 *       Update Platform fees
 *     </button>
 *   );
 * };
 * ```
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the platform fees settings
 * @beta
 */
export declare function useUpdatePlatformFees(contract: RequiredParam<SmartContract | ValidContractInstance>): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, {
    platform_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
}, unknown>;
/**
 * Use this to get the metadata of your {@link SmartContract}
 *
 * @example
 * ```jsx
 * const { data: metadata, isLoading, error } = useMetadata(SmartContract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a {@link CustomContractMetadata} object containing the metadata
 * @beta
 */
export declare function useMetadata(contract: RequiredParam<SmartContract | ValidContractInstance>): import("@tanstack/react-query").UseQueryResult<{
    [x: string]: import("@thirdweb-dev/sdk/dist/browser").Json;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}, unknown>;
/**
 * Use this to update the metadata of your {@link SmartContract}
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: updateMetadata,
 *     isLoading,
 *     error,
 *   } = useUpdateMetadata(SmartContract);
 *
 *   if (error) {
 *     console.error("failed to update metadata", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updateMetadata({ updatePayload: { name: "My Contract", description: "This is my contract" } })}
 *     >
 *       Update Metadata
 *     </button>
 *   );
 * };
 * ```
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the metadata
 * @beta
 */
export declare function useUpdateMetadata(contract: RequiredParam<SmartContract | ValidContractInstance>): import("@tanstack/react-query").UseMutationResult<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<any>;
}, unknown, {
    [x: string]: import("@thirdweb-dev/sdk/dist/browser").Json;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}, unknown>;
