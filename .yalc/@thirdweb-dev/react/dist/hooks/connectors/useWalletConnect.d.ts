/**
 * Hook for connecting to a mobile wallet with Wallet Connect
 *
 * ```javascript
 * import { useWalletConnect } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * We can allows user to connect their mobile wallets as follows:
 * ```javascript
 * import { useWalletConnect } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const connectWithWalletConnect = useWalletConnect()
 *
 *   return (
 *     <button onClick={connectWithWalletConnect}>
 *       Connect WalletConnect
 *     </button>
 *   )
 * }
 * ```
 *
 * When users click this button, a popup will appear on the screen prompting them to scan a QR code from their phone to connect their mobile wallets.
 * Once they scan the QR code from a wallet connect supported mobile wallet, their wallet will then be connected to the page as expected.
 *
 * @public
 */
export declare function useWalletConnect(): () => Promise<{
    data?: import("wagmi-core").ConnectorData<any> | undefined;
    error?: Error | undefined;
}>;
