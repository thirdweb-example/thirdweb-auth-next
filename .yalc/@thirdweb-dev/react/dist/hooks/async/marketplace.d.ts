import { MakeBidParams, RequiredParam } from "../../types";
import type { Marketplace, MarketplaceFilter, NewAuctionListing, NewDirectListing } from "@thirdweb-dev/sdk/dist/browser";
import { ListingType } from "@thirdweb-dev/sdk/dist/browser";
import { BigNumber, BigNumberish } from "ethers";
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Use this to get a specific listing from the marketplace.
 *
 * @example
 * ```javascript
 * const { data: listing, isLoading, error } = useListing(<YourMarketplaceContractInstance>, <listingId>);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check
 * @returns a response object that includes an array of listings
 * @beta
 */
export declare function useListing(contract: RequiredParam<Marketplace>, listingId: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk/dist/browser").AuctionListing | import("@thirdweb-dev/sdk/dist/browser").DirectListing, unknown>;
/**
 * Use this to get a list all listings from your marketplace contract.
 *
 * @example
 * ```javascript
 * const { data: listings, isLoading, error } = useListings(<YourMarketplaceContractInstance>, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of listings
 * @beta
 */
export declare function useListings(contract: RequiredParam<Marketplace>, filter?: MarketplaceFilter): import("@tanstack/react-query").UseQueryResult<(import("@thirdweb-dev/sdk/dist/browser").AuctionListing | import("@thirdweb-dev/sdk/dist/browser").DirectListing)[], unknown>;
/**
 * Use this to get a list active listings from your marketplace contract.
 *
 * @example
 * ```javascript
 * const { data: listings, isLoading, error } = useActiveListings(<YourMarketplaceContractInstance>, { seller: "0x...", tokenContract: "0x...", tokenId: 1, start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of listings
 * @beta
 */
export declare function useActiveListings(contract: RequiredParam<Marketplace>, filter?: MarketplaceFilter): import("@tanstack/react-query").UseQueryResult<(import("@thirdweb-dev/sdk/dist/browser").AuctionListing | import("@thirdweb-dev/sdk/dist/browser").DirectListing)[], unknown>;
/**
 * Use this to get a the winning bid for an auction listing from your marketplace contract.
 *
 * @example
 * ```javascript
 * const { data: winningBid, isLoading, error } = useWinningBid(<YourMarketplaceContractInstance>, <listingId>);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the {@link Offer} that is winning the auction
 * @beta
 */
export declare function useWinningBid(contract: RequiredParam<Marketplace>, listingId: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk/dist/browser").Offer | undefined, unknown>;
/**
 * Use this to get the winner of an auction listing from your marketplace contract.
 *
 * @example
 * ```javascript
 * const { data: auctionWinner, isLoading, error } = useAuctionWinner(<YourMarketplaceContractInstance>, <listingId>);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the address of the winner of the auction or undefined if there is no winner yet
 * @beta
 */
export declare function useAuctionWinner(contract: RequiredParam<Marketplace>, listingId: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<string | undefined, unknown>;
/**
 * Use this to get the buffer in basis points between offers from your marketplace contract.
 *
 * @example
 * ```javascript
 * const { data: auctionWinner, isLoading, error } = useBidBuffer(<YourMarketplaceContractInstance>);
 * ```
 *
 * @param contract - an instance of a marketplace contract

 * @returns a response object that includes an array of listings
 * @beta
 */
export declare function useBidBuffer(contract: RequiredParam<Marketplace>): import("@tanstack/react-query").UseQueryResult<BigNumber, unknown>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Use this to create a new Direct Listing on your marketplace contract.
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: createDirectListing,
 *     isLoading,
 *     error,
 *   } = useCreateDirectListing(">>YourMarketplaceContractInstance<<");
 *
 *   if (error) {
 *     console.error("failed to create direct listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => createDirectListing(directListingData)}
 *     >
 *       Create Direct Listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to create a new direct listing
 * @beta
 */
export declare function useCreateDirectListing(contract: RequiredParam<Marketplace>): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/dist/browser").TransactionResultWithId<never>, unknown, NewDirectListing, unknown>;
/**
 * Use this to create a new Auction Listing on your marketplace contract.
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: createAuctionListing,
 *     isLoading,
 *     error,
 *   } = useCreateAuctionListing(">>YourMarketplaceContractInstance<<");
 *
 *   if (error) {
 *     console.error("failed to create auction listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => createAuctionListing(auctionListingData)}
 *     >
 *       Create Auction Listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to create a new auction listing
 * @beta
 */
export declare function useCreateAuctionListing(contract: RequiredParam<Marketplace>): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/dist/browser").TransactionResultWithId<never>, unknown, NewAuctionListing, unknown>;
/**
 * Use this to place a bid on an auction listing from your marketplace contract.
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: makeBid,
 *     isLoading,
 *     error,
 *   } = useMakeBid(">>YourMarketplaceContractInstance<<");
 *
 *   if (error) {
 *     console.error("failed to make a bid", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => makeBid({ listingId: 1, bid: 2 })}
 *     >
 *       Bid!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to make a bid on an auction listing
 * @beta
 */
export declare function useMakeBid(contract: RequiredParam<Marketplace>): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, MakeBidParams, unknown>;
/**
 * Use this to buy out an auction listing from your marketplace contract.
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: buyNow,
 *     isLoading,
 *     error,
 *   } = useBuyNow(">>YourMarketplaceContractInstance<<");
 *
 *   if (error) {
 *     console.error("failed to buyout listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => buyNow({listingId: 1, type: ListingType.Auction})}
 *     >
 *       Buy listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to buy out an auction listing
 * @beta
 */
export declare function useBuyNow(contract: RequiredParam<Marketplace>): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, {
    id: BigNumberish;
    type: ListingType.Direct;
    buyAmount: BigNumberish;
    buyForWallet?: string | undefined;
} | {
    id: BigNumberish;
    type: ListingType.Auction;
}, unknown>;
