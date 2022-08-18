/**
 * Hook for getting metadata about the network the current wallet is connected to and switching networks
 *
 * @example
 * ```javascript
 * import { useNetwork, ChainId } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *   const [, switchNetwork] = useNetwork();
 *
 *   return (
 *     <button onClick={() => switchNetwork(ChainId.Polygon)}>
 *        Switch Network
 *     </button>
 *   );
 * };
```
 *
 * It's important to note that some wallet apps do not support programmatic network switching and switchNetwork will be undefined.
 * For those situations, you can typically switch networks in the wallet app this hook will still work.
 *
 * @public
 */
export declare function useNetwork(): readonly [{
    readonly data: {
        readonly chain: {
            id: number;
            unsupported: boolean | undefined;
            name?: string | undefined;
            nativeCurrency?: {
                name: string;
                symbol: string;
                decimals: 18;
            } | undefined;
            rpcUrls?: string[] | undefined;
            blockExplorers?: {
                name: string;
                url: string;
            }[] | undefined;
            testnet?: boolean | undefined;
        } | undefined;
        readonly chains: import("wagmi").Chain[];
    };
    readonly error: Error | undefined;
    readonly loading: boolean | undefined;
}, ((chainId: number) => Promise<{
    data: undefined;
    error: import("wagmi").SwitchChainError;
} | {
    data: import("wagmi").Chain | undefined;
    error: undefined;
}>) | undefined];
