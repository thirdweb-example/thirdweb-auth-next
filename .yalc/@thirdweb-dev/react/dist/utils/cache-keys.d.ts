import { SupportedChainId } from "../constants/chain";
import { ContractAddress, RequiredParam, WalletAddress } from "../types";
import { QueryClient, QueryKey } from "@tanstack/react-query";
import type { MarketplaceFilter, QueryAllParams, SUPPORTED_CHAIN_ID } from "@thirdweb-dev/sdk/dist/browser";
import { BigNumberish } from "ethers";
/**
 * @internal
 */
export declare function createContractCacheKey(contractAddress?: string, input?: QueryKey): QueryKey;
/**
 @internal
 */
export declare function createCacheKeyWithNetwork(input: QueryKey, chainId: RequiredParam<SUPPORTED_CHAIN_ID>): QueryKey;
/**
 * @internal
 */
export declare function invalidateContractAndBalances(queryClient: QueryClient, contractAddress: RequiredParam<ContractAddress>, chainId: RequiredParam<SUPPORTED_CHAIN_ID>): Promise<unknown>;
/**
 @internal
 */
export declare const cacheKeys: {
    readonly auth: {
        readonly user: () => QueryKey;
    };
    readonly network: {
        readonly active: (chainId: RequiredParam<SUPPORTED_CHAIN_ID>) => QueryKey;
    };
    readonly wallet: {
        readonly balance: (chainId: SupportedChainId, walletAddress: RequiredParam<WalletAddress>, tokenAddress?: ContractAddress) => QueryKey;
    };
    readonly contract: {
        readonly type: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        readonly compilerMetadata: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        readonly typeAndCompilerMetadata: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        readonly metadata: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        readonly extractFunctions: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        readonly call: (contractAddress: RequiredParam<ContractAddress>, functionName: RequiredParam<string>, args: unknown[]) => QueryKey;
        readonly events: {
            readonly getEvents: (contractAddress: RequiredParam<ContractAddress>, eventName: string) => QueryKey;
            readonly getAllEvents: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly nft: {
            readonly get: (contractAddress: RequiredParam<ContractAddress>, tokenId: RequiredParam<BigNumberish>) => QueryKey;
            readonly balanceOf: (contractAddress: RequiredParam<ContractAddress>, owner: RequiredParam<WalletAddress>, tokenId: RequiredParam<BigNumberish>) => QueryKey;
            readonly query: {
                readonly all: (contractAddress: RequiredParam<ContractAddress>, params?: QueryAllParams) => QueryKey;
                readonly totalCirculatingSupply: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
                readonly totalCount: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
                readonly owned: {
                    readonly all: (contractAddress: RequiredParam<ContractAddress>, owner: RequiredParam<WalletAddress>) => QueryKey;
                };
            };
            readonly drop: {
                readonly getAllUnclaimed: (contractAddress: RequiredParam<ContractAddress>, params?: QueryAllParams) => QueryKey;
                readonly totalUnclaimedSupply: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
                readonly totalClaimedSupply: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            };
        };
        readonly token: {
            readonly totalSupply: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            readonly balanceOf: (contractAddress: RequiredParam<ContractAddress>, walletAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly marketplace: {
            readonly getListing: (contractAddress: RequiredParam<ContractAddress>, listingId: RequiredParam<BigNumberish>) => QueryKey;
            readonly getAllListings: (contractAddress: RequiredParam<ContractAddress>, params?: MarketplaceFilter) => QueryKey;
            readonly getActiveListings: (contractAddress: RequiredParam<ContractAddress>, params?: MarketplaceFilter) => QueryKey;
            readonly getBidBufferBps: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            readonly auction: {
                readonly getWinningBid: (contractAddress: RequiredParam<ContractAddress>, listingId: RequiredParam<BigNumberish>) => QueryKey;
                readonly getWinner: (contractAddress: RequiredParam<ContractAddress>, listingId: RequiredParam<BigNumberish>) => QueryKey;
            };
        };
    };
    readonly extensions: {
        readonly claimConditions: {
            readonly getActive: (contractAddress: RequiredParam<ContractAddress>, tokenId?: BigNumberish) => QueryKey;
            readonly getAll: (contractAddress: RequiredParam<ContractAddress>, tokenId?: BigNumberish) => QueryKey;
            readonly getClaimIneligibilityReasons: (contractAddress: RequiredParam<ContractAddress>, params: {
                walletAddress?: WalletAddress;
                quantity: string | number;
            }, tokenId?: BigNumberish) => QueryKey;
        };
        readonly sales: {
            readonly getRecipient: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly royalties: {
            readonly getDefaultRoyaltyInfo: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly platformFees: {
            readonly get: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly metadata: {
            readonly get: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly roles: {
            readonly getAll: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            readonly get: (contractAddress: RequiredParam<ContractAddress>, role: string) => QueryKey;
        };
    };
};
