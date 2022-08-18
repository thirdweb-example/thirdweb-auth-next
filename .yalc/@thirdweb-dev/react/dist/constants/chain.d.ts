import type { Chain as WagmiChain } from "wagmi";
export declare type Chain = WagmiChain;
export declare const defaultSupportedChains: WagmiChain[];
export declare type SupportedChainId = typeof defaultSupportedChains[number]["id"];
export declare type SupportedChain = SupportedChainId | Chain;
