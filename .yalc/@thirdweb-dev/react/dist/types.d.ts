import type { AirdropInput, Amount, EditionDrop, Erc721, Erc721Mintable, Erc1155, Erc1155Mintable, ListingType, NFTDrop, NFTMetadata, Price, SignatureDrop } from "@thirdweb-dev/sdk/dist/browser";
import type { NFTMetadataOrUri } from "@thirdweb-dev/sdk/dist/src/schema";
import type { BigNumberish } from "ethers";
/**
 * Makes a parameter required to be passed, but still allowes it to be undefined.
 *
 * @beta
 */
export declare type RequiredParam<T> = T | undefined;
/**
 * A wallet address.
 * @beta
 */
export declare type WalletAddress = string;
/**
 * A contract address.
 * @beta
 */
export declare type ContractAddress = string;
/**
 * The parameters to pass to the mint and transfer functions.
 *
 * @beta
 */
export declare type TokenParams = {
    to: WalletAddress;
    amount: Amount;
};
/**
 * The parameters to pass to the burn function.
 *
 * @beta
 */
export declare type TokenBurnParams = {
    amount: Amount;
};
/**
 * The possible NFT contract types.
 * @example
 * ```javascript
 * const nftDrop = useNFTDrop(<ContractAddress>);
 * ```
 * @example
 * ```javascript
 * const editionDrop = useEditionDrop(<ContractAddress>);
 * ```
 * @example
 * ```javascript
 * const nftCollection = useNFTCollection(<ContractAddress>);
 * ```
 * @example
 * ```javascript
 * const edition = useEdition(<ContractAddress>);
 * ```
 * @example
 * ```javascript
 * const { contract } = useContract(<ContractAddress>);
 * const nftContract = contract?.nft;
 * ```
 * @beta
 */
export declare type NFTContract = Erc721 | Erc1155;
/**
 * A single NFT token
 * @beta
 */
export declare type NFT<TContract extends NFTContract> = {
    /**
     * The actual metadata of the NFT (name, image, etc)
     */
    metadata: NFTMetadata;
    /**
     * The owner of the nft (this will be an empty string for ERC1155 tokens)
     */
    owner: string;
    /**
     * The type of the NFT (ERC721 or ERC1155)
     */
    type: TContract extends Erc721 ? "ERC721" : "ERC1155";
    /**
     * The total supply of the NFT (this will *always* be 1 for ERC721 tokens)
     */
    supply: TContract extends Erc721 ? 1 : number;
    [key: string]: unknown;
};
/**
 * The params to pass to `useTotalCirculatingSupply`.
 * @beta
 */
export declare type useTotalCirculatingSupplyParams<TContract> = TContract extends Erc1155 ? [contract: RequiredParam<TContract>, tokenId: BigNumberish] : [contract: RequiredParam<TContract>];
/**
 * The params to pass to `useNftBalance`.
 * @beta
 */
export declare type useNFTBalanceParams<TContract> = TContract extends Erc1155 ? [
    contract: RequiredParam<TContract>,
    ownerWalletAddress: RequiredParam<WalletAddress>,
    tokenId: RequiredParam<BigNumberish>
] : [
    contract: RequiredParam<TContract>,
    ownerWalletAddress: RequiredParam<WalletAddress>
];
/**
 * The params to pass to `useTransferNFT`.
 * @beta
 */
export declare type TransferNFTParams<TContract> = TContract extends Erc1155 ? {
    to: WalletAddress;
    tokenId: BigNumberish;
    amount: Amount;
} : {
    to: WalletAddress;
    tokenId: BigNumberish;
};
/**
 * The params to pass to `useTransferBatchNFT`.
 * @beta
 */
export declare type AirdropNFTParams = {
    tokenId: BigNumberish;
    addresses: AirdropInput;
};
/**
 * The params to pass to `useMintNFTSupply`.
 * @beta
 */
export declare type MintNFTSupplyParams = {
    tokenId: BigNumberish;
    additionalSupply: Amount;
    to: WalletAddress;
};
/**
 * The params for the {@link useMintNFT} hook mutation.
 *
 * @beta
 */
export declare type MintNFTParams<TContract extends NFTContract> = TContract extends Erc1155 ? {
    metadata: NFTMetadataOrUri;
    supply: BigNumberish;
    to: WalletAddress;
} : {
    metadata: NFTMetadataOrUri;
    to: WalletAddress;
};
/**
 * The return type of the {@link useMintNFT} hook.
 *
 * @beta
 */
export declare type MintNFTReturnType<TContract> = TContract extends Erc721 ? Awaited<ReturnType<Erc721Mintable["to"]>> : TContract extends Erc1155 ? Awaited<ReturnType<Erc1155Mintable["to"]>> : never;
/**
 * The params for the {@link useBurnNFT} hook mutation.
 *
 * @beta
 */
export declare type BurnNFTParams<TContract extends NFTContract> = TContract extends Erc1155 ? {
    tokenId: BigNumberish;
    amount: Amount;
} : {
    tokenId: BigNumberish;
};
/**
 * The possible DROP contract types.
 * @beta
 */
export declare type DropContract = NFTDrop | EditionDrop | SignatureDrop;
/**
 * The params for the {@link useClaimNFT} hook mutation.
 *
 * @beta
 */
export declare type ClaimNFTParams<TContract extends DropContract> = TContract extends Erc1155 ? {
    to: WalletAddress;
    tokenId: BigNumberish;
    quantity: BigNumberish;
    checkERC20Allowance?: boolean;
} : {
    to: WalletAddress;
    quantity: BigNumberish;
    checkERC20Allowance?: boolean;
};
/**
 * The return type of the {@link useClaimNFT} hook.
 *
 * @beta
 */
export declare type ClaimNFTReturnType<TContract extends DropContract> = TContract extends Erc721 ? Awaited<ReturnType<TContract["claimTo"]>> : TContract extends Erc1155 ? Awaited<ReturnType<TContract["claimTo"]>> : never;
export declare type MakeBidParams = {
    listingId: BigNumberish;
    bid: Price;
};
export declare type BuyNowParams<TListingType = ListingType> = TListingType extends ListingType.Direct ? {
    id: BigNumberish;
    type: ListingType.Direct;
    buyAmount: BigNumberish;
    buyForWallet?: WalletAddress;
} : {
    id: BigNumberish;
    type: ListingType.Auction;
};
export declare type ClaimTokenParams = {
    to: WalletAddress;
    amount: Amount;
    checkERC20Allowance?: boolean;
};
