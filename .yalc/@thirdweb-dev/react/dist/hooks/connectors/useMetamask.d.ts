/**
 * Hook for connecting to a Metamask wallet.
 *
 * ```javascript
 * import { useMetamask } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * We can allow users to connect their metamask wallets as follows:
 * ```javascript
 * import { useMetamask } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const connectWithMetamask = useMetamask()
 *
 *   return (
 *     <button onClick={connectWithMetamask}>
 *       Connect Metamask
 *     </button>
 *   )
 * }
 * ```
 * Here, we use the `useMetamask` hook to handle metamask connection.
 * When a user clicks the button, we'll call the `connectWithMetamask` function, which will prompt users to connect their metamask wallet.
 *
 * @public
 */
export declare function useMetamask(): () => Promise<{
    data?: import("wagmi-core").ConnectorData<any> | undefined;
    error?: Error | undefined;
} | {
    error: Error;
}>;
