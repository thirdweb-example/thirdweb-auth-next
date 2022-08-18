import { SafeAppProvider } from "@gnosis.pm/safe-apps-provider";
import { Opts as SafeOpts } from "@gnosis.pm/safe-apps-sdk";
import { Chain, Connector } from "wagmi";
export declare type SafeConnectOptions = SafeOpts & {
    doNotAutoConnect?: boolean;
};
export declare class GnosisConnector extends Connector<SafeAppProvider, SafeConnectOptions | undefined> {
    readonly id = "gnosis";
    readonly name = "gnosis";
    ready: boolean;
    private provider?;
    private sdk?;
    private safe?;
    constructor(config: {
        chains?: Chain[];
        options?: SafeConnectOptions;
    });
    connect(): Promise<{
        account: string;
        provider: SafeAppProvider;
        chain: {
            id: number;
            unsupported: boolean;
        };
    }>;
    disconnect(): Promise<void>;
    getAccount(): Promise<string>;
    getChainId(): Promise<number>;
    private getSafeInfo;
    private isSafeApp;
    getProvider(): SafeAppProvider;
    getSigner(): Promise<import("@ethersproject/providers").JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    protected onAccountsChanged(accounts: string[]): void;
    protected isChainUnsupported(chainId: number): boolean;
    protected onChainChanged(chainId: string | number): void;
    protected onDisconnect(): void;
}
