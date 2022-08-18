import { Signer, ethers } from "ethers";
import { Chain, Connector, ConnectorData } from "wagmi";
export interface GnosisConnectorArguments {
    safeAddress: string;
    safeChainId: number;
}
export declare class GnosisSafeConnector extends Connector {
    id: string;
    ready: boolean;
    name: string;
    previousConnector?: Connector<any>;
    private config?;
    private safeSigner?;
    constructor(config: {
        chains?: Chain[];
    });
    connect(): Promise<ConnectorData<any>>;
    private createSafeSigner;
    disconnect(): Promise<void>;
    getAccount(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider(): Promise<ethers.providers.Provider | undefined>;
    getSigner(): Promise<Signer>;
    isAuthorized(): Promise<boolean>;
    protected onAccountsChanged(accounts: string[]): void;
    protected isChainUnsupported(chainId: number): boolean;
    protected onChainChanged(chainId: string | number): void;
    protected onDisconnect(): void;
    setConfiguration(connector: Connector<any>, config: GnosisConnectorArguments): void;
}
