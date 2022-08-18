import { RequiredParam, WalletAddress } from "../../types";
import type { Multiwrap, Role, SmartContract, Split, ValidContractInstance, Vote } from "@thirdweb-dev/sdk/dist/browser";
/** **********************/
/**         UTILS       **/
/** **********************/
/**
 * @internal
 */
export declare type ContractWithRoles = Exclude<ValidContractInstance, Vote | Split | Multiwrap> | SmartContract;
/**
 * @internal
 */
export declare type RolesForContract<TContract extends ContractWithRoles> = TContract extends SmartContract ? Role | (string & {}) : NonNullable<TContract["roles"]>["roles"][number];
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Use this to get the roles of a {@link SmartContract}
 *
 * @example
 * ```jsx
 * const { data: roles, isLoading, error } = useAllRoleMembers(SmartContract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a list of addresses for all supported roles on the contract.
 * @beta
 */
export declare function useAllRoleMembers<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseQueryResult<Awaited<Record<RolesForContract<TContract>, string[]>>, unknown>;
/**
 * Use this to get the members of a role on a {@link SmartContract}
 *
 * @example
 * ```jsx
 * const { data: members, isLoading, error } = useRoleMembers(SmartContract, "admin");
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @param role - the role to get the members of, see {@link Role}
 * @returns a list of addresses that are members of the role
 * @beta
 */
export declare function useRoleMembers<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>, role: RolesForContract<TContract>): import("@tanstack/react-query").UseQueryResult<string[], unknown>;
/**
 * Use this to check if a {@link WalletAddress} is a member of a role on a {@link SmartContract}
 *
 * @example
 * ```jsx
 * const { data: isMember, isLoading, error } = useIsAddressRole(SmartContract, "admin", "0x123");
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @param role - the role to check the member against, see {@link Role}
 * @param walletAddress - the address to check
 * @returns true if the address is a member of the role, or false if not
 * @beta
 */
export declare function useIsAddressRole<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>, role: RolesForContract<TContract>, walletAddress: RequiredParam<WalletAddress>): boolean;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Use this to OVERWRITE the list of addresses that are members of specific roles
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: overwriteRoles,
 *     isLoading,
 *     error,
 *   } = useSetAllRoleMembers(SmartContract);
 *
 *   if (error) {
 *     console.error("failed to overwrite roles", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => overwriteRoles({  rolesWithAddresses: { minter: [] } })}
 *     >
 *       Overwrite Roles
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to overwrite all roles on the contract
 * @beta
 */
export declare function useSetAllRoleMembers<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseMutationResult<void, unknown, { [role in RolesForContract<TContract>]: string[]; }, unknown>;
/**
 * Use this to grant a {@link WalletAddress} a specific role on a {@link SmartContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: grantRole,
 *     isLoading,
 *     error,
 *   } = useGrantRole(SmartContract);
 *
 *   if (error) {
 *     console.error("failed to grant role", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => grantRole({  role: "admin", address: "0x123" })}
 *     >
 *       Grant Role
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to grant a member of a role on the contract
 * @beta
 */
export declare function useGrantRole<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseMutationResult<void, unknown, {
    role: RolesForContract<TContract>;
    address: WalletAddress;
}, unknown>;
/**
 * Use this to revoke a {@link WalletAddress} a specific role on a {@link SmartContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: revokeRole,
 *     isLoading,
 *     error,
 *   } = useRevokeRole(SmartContract);
 *
 *   if (error) {
 *     console.error("failed to revoke role", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => revokeRole({  role: "admin", address: "0x123" })}
 *     >
 *       Revoke Role
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to revoke a role from a member on the contract
 * @beta
 */
export declare function useRevokeRole<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseMutationResult<void, unknown, {
    role: RolesForContract<TContract>;
    address: WalletAddress;
}, unknown>;
