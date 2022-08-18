import { GnosisConnectorArguments } from "./connectors/gnosis-safe";
import { MagicConnectorArguments } from "./connectors/magic";
import { Chain, SupportedChain } from "./constants/chain";
import { QueryClient } from "@tanstack/react-query";
import { ChainOrRpc, IStorage, SDKOptions, SUPPORTED_CHAIN_ID, SignerOrProvider, ThirdwebSDK } from "@thirdweb-dev/sdk/dist/browser";
import { Signer } from "ethers";
import React from "react";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
/**
 * @internal
 */
export declare type InjectedConnectorType = "injected" | "metamask" | {
    name: "injected" | "metamask";
    options?: InjectedConnector["options"];
};
/**
 * @internal
 */
export declare type WalletConnectConnectorType = "walletConnect" | {
    name: "walletConnect";
    options: WalletConnectConnector["options"];
};
/**
 * @internal
 */
export declare type WalletLinkConnectorType = "walletLink" | "coinbase" | {
    name: "walletLink" | "coinbase";
    options: CoinbaseWalletConnector["options"];
};
/**
 * @internal
 */
export declare type MagicConnectorType = "magic" | {
    name: "magic";
    options: Omit<MagicConnectorArguments, "network">;
};
/**
 * @internal
 */
export declare type GnosisConnectorType = "gnosis" | {
    name: "gnosis";
    options: GnosisConnectorArguments;
};
/**
 * @internal
 */
export declare type WalletConnector = InjectedConnectorType | WalletConnectConnectorType | WalletLinkConnectorType | MagicConnectorType | GnosisConnectorType;
/**
 * @internal
 */
export declare type ChainRpc<TSupportedChain extends SupportedChain> = Record<TSupportedChain extends Chain ? TSupportedChain["id"] : TSupportedChain, string>;
export interface ThirdwebAuthConfig {
    /**
     * The backend URL of the authentication endoints. For example, if your endpoints are
     * at /api/auth/login, /api/auth/logout, etc. then this should be set to "/api/auth".
     */
    authUrl: string;
    /**
     * The frontend domain used to generate the login payload.
     * This domain should match the domain used on your auth backend.
     */
    domain: string;
    /**
     * The URL to redirect to after a succesful login.
     */
    loginRedirect?: string;
}
/**
 * the metadata to pass to wallet connection dialog (may show up during the wallet-connection process)
 * @remarks this is only used for wallet connect and wallet link, metamask does not support it
 * @public
 */
export interface DAppMetaData {
    /**
     * the name of your app
     */
    name: string;
    /**
     * optional - a description of your app
     */
    description?: string;
    /**
     * optional - a url that points to a logo (or favicon) of your app
     */
    logoUrl?: string;
    /**
     * optional - the url where your app is hosted
     */
    url?: string;
    /**
     * optional - whether to show the connect dialog in darkmode or not
     */
    isDarkMode?: boolean;
}
/**
 * The possible props for the ThirdwebProvider.
 */
export interface ThirdwebProviderProps<TSupportedChain extends SupportedChain = SupportedChain> {
    /**
     * The {@link SDKOptions | Thirdweb SDK Options} to pass to the thirdweb SDK
     * comes with sensible defaults
     */
    sdkOptions?: SDKOptions;
    /**
     * An array of chainIds or {@link Chain} objects that the dApp supports
     * If not provided, all chains supported by the SDK will be supported by default
     */
    supportedChains?: TSupportedChain[];
    /**
     * An array of connector types (strings) or wallet connector objects that the dApp supports
     * If not provided, will default to metamask (injected), wallet connect and walletlink (coinbase wallet) with sensible defaults
     */
    walletConnectors?: WalletConnector[];
    /**
     * A partial map of chainIds to rpc urls to use for certain chains
     * If not provided, will default to the rpcUrls of the chain objects for the supported chains
     */
    chainRpc?: Partial<ChainRpc<TSupportedChain>>;
    /**
     * Metadata to pass to wallet connect and walletlink wallet connect. (Used to show *which* dApp is being connected to in mobile wallets that support it)
     * Defaults to just the name being passed as `thirdweb powered dApp`.
     */
    dAppMeta?: DAppMetaData;
    /**
     * The chainId that your dApp is running on.
     * While this *can* be `undefined` it is required to be passed. Passing `undefined` will cause no SDK to be instantiated.
     * When passing a chainId, it **must** be part of the `supportedChains` array.
     */
    desiredChainId: TSupportedChain extends Chain ? TSupportedChain["id"] : TSupportedChain | undefined;
    /**
     * The configuration used for thirdweb auth usage. Enables users to login
     * to backends with their wallet.
     * @beta
     */
    authConfig?: ThirdwebAuthConfig;
    /**
     * The storage interface to use with the sdk.
     */
    storageInterface?: IStorage;
    /**
     * The react-query client to use. (Defaults to a default client.)
     * @beta
     */
    queryClient?: QueryClient;
    /**
     * Whether or not to attempt auto-connect to a wallet.
     */
    autoConnect?: boolean;
}
/**
 *
 * The `<ThirdwebProvider />` component lets you control what networks you want users to connect to, what types of wallets can connect to your app, and the settings for the [Typescript SDK](https://docs.thirdweb.com/typescript).
 *
 * @example
 * You can wrap your application with the provider as follows:
 *
 * ```jsx title="App.jsx"
 * import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *   return (
 *     <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
 *       <YourApp />
 *     </ThirdwebProvider>
 *   );
 * };
 * ```
 *
 * @public
 *
 */
export declare const ThirdwebProvider: <TSupportedChain extends SupportedChain = SupportedChain>({ sdkOptions, chainRpc, supportedChains, walletConnectors, dAppMeta, desiredChainId, authConfig, storageInterface, queryClient, autoConnect, children, }: React.PropsWithChildren<ThirdwebProviderProps<TSupportedChain>>) => JSX.Element;
export interface ThirdwebSDKProviderWagmiWrapper extends Pick<ThirdwebProviderProps, "desiredChainId" | "sdkOptions" | "storageInterface"> {
    signer?: Signer;
    provider: ChainOrRpc | SignerOrProvider;
    queryClient?: QueryClient;
}
export interface ThirdwebSDKProviderProps extends Omit<ThirdwebSDKProviderWagmiWrapper, "queryClient"> {
    queryClient?: QueryClient;
}
/**
 * A barebones wrapper around the Thirdweb SDK.
 *
 * You can use this in order to be able to pass a provider & signer directly to the SDK.
 *
 * @remarks Utilizing this provider will mean hooks for wallet management are not available, if you need those please use the {@link ThirdwebProvider} instead.
 *
 * @beta
 */
export declare const ThirdwebSDKProvider: React.FC<React.PropsWithChildren<ThirdwebSDKProviderProps>>;
/**
 *
 * @returns {@link ThirdwebSDK}
 * Access the instance of the thirdweb SDK created by the ThirdwebProvider
 * to call methods using the connected wallet on the desiredChainId.
 * @example
 * ```javascript
 * const sdk = useSDK();
 * ```
 */
export declare function useSDK(): ThirdwebSDK | undefined;
/**
 * @internal
 */
export declare function useDesiredChainId(): number;
/**
 * @internal
 */
export declare function useActiveChainId(): SUPPORTED_CHAIN_ID | undefined;
