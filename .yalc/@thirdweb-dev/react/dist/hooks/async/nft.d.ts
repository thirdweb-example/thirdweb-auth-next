import { AirdropNFTParams, BurnNFTParams, MintNFTParams, MintNFTReturnType, MintNFTSupplyParams, NFT, NFTContract, RequiredParam, TransferNFTParams, WalletAddress, useNFTBalanceParams, useTotalCirculatingSupplyParams } from "../../types";
import { Erc1155, QueryAllParams } from "@thirdweb-dev/sdk/dist/browser";
import { BigNumber, BigNumberish } from "ethers";
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Use this to get an individual NFT token of your {@link NFTContract}.
 *
 * @example
 * ```javascript
 * const nftDrop = useNFTDrop(<ContractAddress>);
 * const { data: nft, isLoading, error } = useNFT(nftDrop, <tokenId>);
 * ```
 * @example
 * ```javascript
 * const { contract } = useContract(<ContractAddress>);
 * const { data: nft, isLoading, error } = useNFT(contract?.nft, <tokenId>);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param tokenId - the tokenId to look up
 * @returns a response object that includes the metadata for the given tokenId
 * @beta
 */
export declare function useNFT<TContract extends NFTContract>(contract: RequiredParam<TContract>, tokenId: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<NFT<TContract>, unknown>;
/**
 * Use this to get a list of NFT tokens of your {@link NFTContract}.
 *
 * @example
 * ```javascript
 * const nftDrop = useNFTDrop(<ContractAddress>);
 * const { data: nfts, isLoading, error } = useNFTs(nftDrop, { start: 0, count: 100 });
 * ```
 * @example
 * ```javascript
 * const { contract } = useContract(<ContractAddress>);
 * const { data: nfts, isLoading, error } = useNFTs(contract?.nft, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param queryParams - query params to pass to the query for the sake of pagination
 * @returns a response object that includes an array of NFTs
 * @beta
 */
export declare function useNFTs<TContract extends NFTContract>(contract: RequiredParam<TContract>, queryParams?: QueryAllParams): import("@tanstack/react-query").UseQueryResult<NFT<TContract>[], unknown>;
/**
 * Use this to get a the total (minted) supply of your {@link NFTContract}.
 *
 *  * @example
 * ```javascript
 * const nftDrop = useNFTDrop(<ContractAddress>);
 * const { data: totalSupply, isLoading, error } = useNFTSupply(nftDrop);
 * ```
 * @example
 * ```javascript
 * const { contract } = useContract(<ContractAddress>);
 * const { data: totalSupply, isLoading, error } = useNFTSupply(contract?.nft);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a response object that incudes the total minted supply
 * @beta
 */
export declare function useTotalCirculatingSupply<TContract extends NFTContract>(...[contract, tokenId]: useTotalCirculatingSupplyParams<TContract>): import("@tanstack/react-query").UseQueryResult<BigNumber, unknown>;
/**
 * Use this to get a the number of tokens in your {@link NFTContract}.
 *
 * @remarks The `total count` and `total supply` are the same for {@link ERC721} based contracts.
 * For {@link ERC1155} the `total count` is the number of NFTs that exist on the contract, **not** the sum of all supply of each token. (Since ERC1155 can have multiple owners per token.)
 *
 * @example
 * ```javascript
 * const nftDrop = useNFTDrop(<ContractAddress>);
 * const { data: totalCount, isLoading, error } = useTotalCount(nftDrop);
 * ```
 * @example
 * ```javascript
 * const { contract } = useContract(<ContractAddress>);
 * const { data: totalCount, isLoading, error } = useTotalCount(contract?.nft);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a response object that incudes the total number of tokens in the contract
 * @beta
 */
export declare function useTotalCount(contract: RequiredParam<NFTContract>): import("@tanstack/react-query").UseQueryResult<BigNumber, unknown>;
/**
 * Use this to get a the owned NFTs for a specific {@link NFTContract} and wallet address.
 *
 * @example
 * ```javascript
 * const nftDrop = useNFTDrop(<ContractAddress>);
 * const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(nftDrop, <OwnerWalletAddress>);
 * ```
 * @example
 * ```javascript
 * const { contract } = useContract(<ContractAddress>);
 * const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(contract?.nft, <OwnerWalletAddress>);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param ownerWalletAddress - the wallet adress to get owned tokens for
 * @returns a response object that includes the list of owned tokens
 * @beta
 */
export declare function useOwnedNFTs<TContract extends NFTContract>(contract: RequiredParam<TContract>, ownerWalletAddress: RequiredParam<WalletAddress>): import("@tanstack/react-query").UseQueryResult<NFT<TContract>[], unknown>;
/**
 * Use this to get a the total balance of a {@link NFTContract} and wallet address.
 *
 *  @example
 * ```javascript
 * const nftDrop = useNFTDrop(<ContractAddress>);
 * const { data: ownerBalance, isLoading, error } = useNFTBalance(nftDrop, <OwnerWalletAddress>);
 * ```
 * @example
 * ```javascript
 * const { contract } = useContract(<ContractAddress>);
 * const { data: ownerBalance, isLoading, error } = useNFTBalance(contract?.nft, <OwnerWalletAddress>);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param ownerWalletAddress - the wallet adress to check the balance of
 * @returns a response object that includes the total balance of the owner
 * @beta
 */
export declare function useNFTBalance<TContract extends NFTContract>(...[contract, ownerWalletAddress, tokenId]: useNFTBalanceParams<TContract>): import("@tanstack/react-query").UseQueryResult<BigNumber, unknown>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Use this to mint a new NFT on your {@link NFTContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const nftDrop = useNFTDrop(<ContractAddress>);
 *   const {
 *     mutate: mintNft,
 *     isLoading,
 *     error,
 *   } = useMintNFT(nftDrop);
 *
 *   if (error) {
 *     console.error("failed to mint nft", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => mintNft({ name: "My awesome NFT!", to: "0x..." })}
 *     >
 *       Mint!
 *     </button>
 *   );
 * };
 * ```
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract(<ContractAddress>);
 *   const {
 *     mutate: mintNft,
 *     isLoading,
 *     error,
 *   } = useMintNFT(contract?.nft);
 *
 *   if (error) {
 *     console.error("failed to mint nft", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => mintNft({ name: "My awesome NFT!", to: "0x..." })}
 *     >
 *       Mint!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a mutation object that can be used to mint a new NFT token to the connected wallet
 * @beta
 */
export declare function useMintNFT<TContract extends NFTContract>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseMutationResult<MintNFTReturnType<TContract>, unknown, MintNFTParams<TContract>, unknown>;
/**
 * Use this to mint a new NFT on your {@link NFTContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const nftDrop = useNFTDrop(<ContractAddress>);
 *   const {
 *     mutate: mintNftSupply,
 *     isLoading,
 *     error,
 *   } = useMintNFTSupply(nftDrop);
 *
 *   if (error) {
 *     console.error("failed to mint additional supply", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => mintNftSupply({ tokenId: 0, additionalSupply: 100, to: "0x..."})}
 *     >
 *       Mint Additional Supply!
 *     </button>
 *   );
 * };
 * ```
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract(<ContractAddress>);
 *   const {
 *     mutate: mintNftSupply,
 *     isLoading,
 *     error,
 *   } = useMintNFTSupply(contract?.nft);
 *
 *   if (error) {
 *     console.error("failed to mint additional supply", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => mintNftSupply({ tokenId: 0, additionalSupply: 100, to: "0x..."})}
 *     >
 *       Mint Additional Supply!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link Erc1155}
 * @returns a mutation object that can be used to mint a more supply of a token id to the provided wallet
 * @beta
 */
export declare function useMintNFTSupply(contract: Erc1155): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/dist/browser").TransactionResultWithId<{
    metadata: {
        [x: string]: import("@thirdweb-dev/sdk/dist/browser").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: string | null | undefined;
        external_url?: string | null | undefined;
        animation_url?: string | null | undefined;
        uri: string;
        id: BigNumber;
    };
    supply: BigNumber;
}>, unknown, MintNFTSupplyParams, unknown>;
/**
 * Use this to transfer tokens on your {@link NFTContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const nftDrop = useNFTDrop(<ContractAddress>);
 *   const {
 *     mutate: transferNFT,
 *     isLoading,
 *     error,
 *   } = useTransferNFT(nftDrop);
 *
 *   if (error) {
 *     console.error("failed to transfer nft", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => transferNFT({ to: "0x...", tokenId: 2 })}
 *     >
 *       Transfer NFT!
 *     </button>
 *   );
 * };
 * ```
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract(<ContractAddress>);
 *   const {
 *     mutate: transferNFT,
 *     isLoading,
 *     error,
 *   } = useTransferNFT(contract?.nft);
 *
 *   if (error) {
 *     console.error("failed to transfer nft", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => transferNFT({ to: "0x...", tokenId: 2 })}
 *     >
 *       Transfer
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a mutation object that can be used to transfer NFTs
 * @beta
 */
export declare function useTransferNFT<TContract extends NFTContract>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, TransferNFTParams<TContract>, unknown>;
/**
 * Use this to transfer tokens on your {@link Erc1155}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const editionDrop = useEditionDrop(<ContractAddress>);
 *   const {
 *     mutate: airdropNFT,
 *     isLoading,
 *     error,
 *   } = useAirdropNFT(editionDrop);
 *
 *   if (error) {
 *     console.error("failed to transfer batch NFTs", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => airdropNFT({
 *          tokenId: 2,
 *          addresses: [{ address: "0x...", quantity: 2 }, { address: "0x...", quantity: 4 } }]
 *       )}
 *     >
 *       Airdrop NFT
 *     </button>
 * };
 * ```
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract(<ContractAddress>);
 *   const {
 *     mutate: airdropNFT,
 *     isLoading,
 *     error,
 *   } = useAirdropNFT(contract?.nft);
 *
 *   if (error) {
 *     console.error("failed to transfer batch NFTs", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => airdropNFT({
 *          tokenId: 2,
 *          addresses: [{ address: "0x...", quantity: 2 }, { address: "0x...", quantity: 4 } }]
 *       )}
 *     >
 *       Airdrop NFT
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link Erc1155}
 * @returns a mutation object that can be used to transfer batch NFTs
 * @beta
 */
export declare function useAirdropNFT(contract: Erc1155): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, AirdropNFTParams, unknown>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Use this to burn an NFT on your {@link NFTContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const nftDrop = useNFTDrop(<ContractAddress>);
 *   const {
 *     mutate: burnNft,
 *     isLoading,
 *     error,
 *   } = useBurnNFT(nftDrop);
 *
 *   if (error) {
 *     console.error("failed to burn nft", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => burnNft({ tokenId: 0 })}
 *     >
 *       Burn!
 *     </button>
 *   );
 * };
 * ```
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract(<ContractAddress>);
 *   const {
 *     mutate: burnNft,
 *     isLoading,
 *     error,
 *   } = useBurnNFT(contract?.nft);
 *
 *   if (error) {
 *     console.error("failed to burn nft", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => burnNft({ tokenId: 0 })}
 *     >
 *       Burn!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a mutation object that can be used to burn an NFT token from the connected wallet
 * @beta
 */
export declare function useBurnNFT<TContract extends NFTContract>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, BurnNFTParams<TContract>, unknown>;
