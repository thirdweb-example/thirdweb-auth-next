import { ClaimNFTParams, ClaimNFTReturnType, DropContract, NFTContract, RequiredParam } from "../../types";
import { NFTDrop, NFTMetadataInput, QueryAllParams, SignatureDrop, UploadProgressEvent } from "@thirdweb-dev/sdk/dist/browser";
/** **********************/
/**       READ HOOKS    **/
/** **********************/
/**
 * Use this to get a list of *unclaimed* NFT tokens of your ERC721 Drop contract.
 *
 * @example
 * ```javascript
 * const { data: unclaimedNfts, isLoading, error } = useUnclaimedNFTs(<YourERC721DropContractInstance>, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a contract that extends the Erc721 spec (nft drop, custom contract that follows the Erc721 & drop spec)
 * @param queryParams - query params to pass to the query for the sake of pagination
 * @returns a response object that includes an array of NFTs that are unclaimed
 * @beta
 */
export declare function useUnclaimedNFTs(contract: RequiredParam<NFTDrop>, queryParams?: QueryAllParams): import("@tanstack/react-query").UseQueryResult<{
    [x: string]: import("@thirdweb-dev/sdk/dist/browser").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: string | null | undefined;
    external_url?: string | null | undefined;
    animation_url?: string | null | undefined;
    uri: string;
    id: import("ethers").BigNumber;
}[], unknown>;
/**
 * Use this to get a list of *claimed* (minted) NFT tokens of your ERC721 Drop contract.
 *
 * @remarks Equivalent to using {@link useNFTs}.
 *
 * @example
 * ```javascript
 * const { data: claimedNFTs, isLoading, error } = useClaimedNFTs(<YourERC721DropContractInstance>, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @param queryParams - query params to pass to the query for the sake of pagination
 * @returns a response object that includes an array of NFTs that are claimed
 * @beta
 */
export declare function useClaimedNFTs(contract: RequiredParam<DropContract>, queryParams?: QueryAllParams): import("@tanstack/react-query").UseQueryResult<import("../../types").NFT<DropContract>[], unknown>;
/**
 *
 * @param contract - an instance of a {@link NFTDrop}
 * @returns a response object that includes the number of NFTs that are unclaimed
 */
export declare function useUnclaimedNFTSupply(contract: RequiredParam<NFTDrop | SignatureDrop>): import("@tanstack/react-query").UseQueryResult<import("ethers").BigNumber, unknown>;
/**
 *
 * @param contract - an instance of a {@link DropContract}
 * @returns a response object that includes the number of NFTs that are claimed
 */
export declare function useClaimedNFTSupply(contract: RequiredParam<DropContract>): import("@tanstack/react-query").UseQueryResult<import("ethers").BigNumber, unknown>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Use this to claim a NFT on your {@link DropContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: claimNft,
 *     isLoading,
 *     error,
 *   } = useClaimNFT(DropContract);
 *
 *   if (error) {
 *     console.error("failed to claim nft", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => claimNft({ to: "0x...", quantity: 1 })}
 *     >
 *       Claim NFT!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @returns a mutation object that can be used to claim a NFT to the wallet specificed in the params
 * @beta
 */
export declare function useClaimNFT<TContract extends DropContract>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseMutationResult<ClaimNFTReturnType<TContract>, unknown, ClaimNFTParams<TContract>, unknown>;
/**
 * Use this to lazy mint a batch of NFTs on your {@link DropContract}
 *
 * @param contract - an instance of a {@link NFTContract} with the drop extension
 * @param onProgress - an optional callback that will be called with the progress of the upload
 * @returns a mutation object that can be used to lazy mint a batch of NFTs
 * @beta
 */
export declare function useLazyMint<TContract extends NFTContract>(contract: RequiredParam<TContract>, onProgress?: (progress: UploadProgressEvent) => void): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/dist/browser").TransactionResultWithId<{
    [x: string]: import("@thirdweb-dev/sdk/dist/browser").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: string | null | undefined;
    external_url?: string | null | undefined;
    animation_url?: string | null | undefined;
    uri: string;
    id: import("ethers").BigNumber;
}>[], unknown, {
    metadatas: NFTMetadataInput[];
}, unknown>;
