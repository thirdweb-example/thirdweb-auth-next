/**
 * for now just re-exported
 * @internal
 */
export declare function useConnect(): readonly [{
    readonly data: {
        readonly connected: boolean;
        readonly connector: import("wagmi").Connector<any, any> | undefined;
        readonly connectors: import("wagmi").Connector<any, any>[];
    };
    readonly error: Error | undefined;
    readonly loading: boolean | undefined;
}, (connector: import("wagmi").Connector<any, any>) => Promise<{
    data?: import("wagmi").ConnectorData<any> | undefined;
    error?: Error | undefined;
}>];
