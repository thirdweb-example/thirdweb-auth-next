import { providers } from "ethers";
import type { LoginWithMagicLinkConfiguration, Magic as MagicInstance, MagicSDKAdditionalConfiguration } from "magic-sdk";
import { Chain, Connector } from "wagmi";
export interface MagicConnectorArguments extends MagicSDKAdditionalConfiguration {
    apiKey: string;
    doNotAutoConnect?: boolean;
    rpcUrls: Record<number, string>;
}
export declare class MagicConnector extends Connector {
    readonly id = "magic";
    readonly name = "Magic";
    readonly ready: boolean;
    options: MagicConnectorArguments;
    private configuration?;
    magic?: MagicInstance;
    getConfiguration(): LoginWithMagicLinkConfiguration | undefined;
    constructor(config: {
        chains?: Chain[];
        options: MagicConnectorArguments;
    });
    connect(isAutoConnect?: true): Promise<{
        account: string;
        provider: providers.Web3Provider;
        chain: {
            id: number;
            unsupported: boolean;
        };
    } | {
        account: undefined;
        provider: undefined;
        chain: undefined;
    }>;
    disconnect(): Promise<void>;
    switchChain(chainId: number): Promise<Chain | undefined>;
    getAccount(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider(): providers.Web3Provider;
    getSigner(): Promise<providers.JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    protected onAccountsChanged(accounts: string[]): void;
    protected isChainUnsupported(chainId: number): boolean;
    protected onChainChanged(chainId: string | number): void;
    protected onDisconnect(): void;
    setConfiguration(configuration?: LoginWithMagicLinkConfiguration): void;
}
