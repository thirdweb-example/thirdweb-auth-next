import { ContractAddress, RequiredParam } from "../../types";
import type { ContractEvent, EventQueryFilter } from "@thirdweb-dev/sdk/dist/browser";
import { SmartContract } from "@thirdweb-dev/sdk/dist/browser";
import { CallOverrides } from "ethers";
/**
 *
 * @internal
 *
 * @param contractAddress - contract address
 * @returns the contract abi
 */
export declare function useContractAbi(contractAddress: RequiredParam<ContractAddress>): {
    abi: null;
    data: undefined;
    error: unknown;
    isError: true;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<{
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined, unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    abi: null;
    data: undefined;
    error: null;
    isError: false;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "loading";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<{
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined, unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    abi: {
        [x: string]: any;
        type: string;
        name: string;
        outputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
        inputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
    }[] | null;
    data: {
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined;
    error: unknown;
    isError: true;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<{
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined, unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    abi: {
        [x: string]: any;
        type: string;
        name: string;
        outputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
        inputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
    }[] | null;
    data: {
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined;
    error: null;
    isError: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<{
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined, unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
};
/**
 * Use this to get the contract type for a (built-in or custom) contract.
 *
 * @example
 * ```javascript
 * const { data: contractType, isLoading, error } = useContractType("{{contract_address}}");
 * ```
 *
 * @param contractAddress - the address of the deployed contract
 * @returns a response object that includes the contract type of the contract
 * @beta
 */
export declare function useContractType(contractAddress: RequiredParam<ContractAddress>): import("@tanstack/react-query").UseQueryResult<"split" | "custom" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined, unknown>;
/**
 * Use this to get the publish metadata for a deployed contract.
 *
 * @example
 * ```javascript
 * const { data: compilerMetadata, isLoading, error } = useContractCompilerMetadata("{{contract_address}}");
 * ```
 *
 * @param contractAddress - the address of the deployed contract
 * @returns a response object that includes the published metadata (name, abi, bytecode) of the contract
 * @beta
 */
export declare function useContractCompilerMetadata(contractAddress: RequiredParam<ContractAddress>): import("@tanstack/react-query").UseQueryResult<{
    name: string;
    metadata: Record<string, any>;
    abi: {
        [x: string]: any;
        type: string;
        name: string;
        outputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
        inputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
    }[];
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
    licenses: string[];
} | undefined, unknown>;
/**
 * Use this resolve a contract address to a thirdweb (built-in / custom) contract instance.
 *
 * @example
 * ```javascript
 * const { contract, isLoading, error } = useContract("{{contract_address}}");
 * ```
 *
 * @param contractAddress - the address of the deployed contract
 * @returns a response object that includes the contract once it is resolved
 * @beta
 */
export declare function useContract(contractAddress: RequiredParam<ContractAddress>): {
    contract: null;
    data: undefined;
    error: unknown;
    isError: true;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<{
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined, unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    contract: null;
    data: undefined;
    error: null;
    isError: false;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "loading";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<{
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined, unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    contract: SmartContract<import("ethers").BaseContract> | null;
    data: {
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined;
    error: unknown;
    isError: true;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<{
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined, unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    contract: SmartContract<import("ethers").BaseContract> | null;
    data: {
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined;
    error: null;
    isError: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<{
        contractType: "split" | "nft-drop" | "signature-drop" | "nft-collection" | "edition-drop" | "edition" | "token-drop" | "token" | "vote" | "marketplace" | "pack" | "multiwrap" | undefined;
        compilerMetadata: null;
    } | {
        contractType: "custom";
        compilerMetadata: {
            name: string;
            metadata: Record<string, any>;
            abi: {
                [x: string]: any;
                type: string;
                name: string;
                outputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
                inputs: {
                    [x: string]: any;
                    components?: {
                        [x: string]: any;
                        type: string;
                        name: string;
                    }[] | undefined;
                    stateMutability?: string | undefined;
                    type: string;
                    name: string;
                }[];
            }[];
            info: {
                title?: string | undefined;
                author?: string | undefined;
                details?: string | undefined;
                notice?: string | undefined;
            };
            licenses: string[];
        } | undefined;
    } | undefined, unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
};
/**
 * Use this to get the contract metadata for a (built-in or custom) contract.
 *
 * @example
 * ```javascript
 * const { data: contractMetadata, isLoading, error } = useContractMetadata("{{contract_address}}");
 * ```
 *
 * @param contractAddress - the address of the deployed contract
 * @returns a response object that includes the contract metadata of the deployed contract
 * @beta
 */
export declare function useContractMetadata(contractAddress: RequiredParam<ContractAddress>): import("@tanstack/react-query").UseQueryResult<{
    [x: string]: import("@thirdweb-dev/sdk/dist/browser").Json;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}, unknown>;
/**
 @internal
 */
export declare function useContractFunctions(contractAddress: RequiredParam<ContractAddress>): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk/dist/browser").AbiFunction[] | null, unknown>;
/**
 * Use this to get data from a contract read-function call.
 *
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * const { data, isLoading, error } = useContractData(contract, "functionName", ...args);
 *```
 *
 * @param contract - the contract instance of the contract to call a function on
 * @param functionName - the name of the function to call
 * @param args - The arguments to pass to the function (if any), with optional call arguments as the last parameter
 * @returns a response object that includes the data returned by the function call
 *
 * @beta
 */
export declare function useContractData(contract: RequiredParam<ReturnType<typeof useContract>["contract"]>, functionName: RequiredParam<string>, ...args: unknown[] | [...unknown[], CallOverrides]): import("@tanstack/react-query").UseQueryResult<any, unknown>;
/**
 * Use this to get a function to make a write call to your contract
 *
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * const { mutate: myFunction, isLoading, error } = useContractCall(contract, "myFunction");
 *
 * // the function can be called as follows:
 * // myFunction(["param 1", "param 2", ...])
 *```
 *
 * @param contract - the contract instance of the contract to call a function on
 * @param functionName - the name of the function to call
 * @returns a response object that includes the write function to call
 *
 * @beta
 */
export declare function useContractCall(contract: RequiredParam<ReturnType<typeof useContract>["contract"]>, functionName: RequiredParam<string>): import("@tanstack/react-query").UseMutationResult<any, unknown, unknown[] | [...unknown[], CallOverrides] | undefined, unknown>;
/**
 * Use this to query (and subscribe) to all events on a contract.
 *
 * @param contract - the contract instance of the contract to call a function on
 * @param options - options incldues the filters ({@link QueryAllEvents}) for the query as well as if you want to subscribe to real-time updates (default: true)
 * @returns a response object that includes the contract events
 * @beta
 */
export declare function useAllContractEvents(contract: RequiredParam<ReturnType<typeof useContract>["contract"]>, options?: {
    queryFilter?: EventQueryFilter;
    subscribe?: boolean;
}): import("@tanstack/react-query").UseQueryResult<ContractEvent[], unknown>;
/**
 * Use this to query (and subscribe) to a specific event on a contract.
 *
 * @param contract - the contract instance of the contract to call a function on
 * @param options - options incldues the filters ({@link QueryAllEvents}) for the query as well as if you want to subscribe to real-time updates (default: true)
 * @returns a response object that includes the contract events
 * @beta
 */
export declare function useContractEvents(contract: RequiredParam<ReturnType<typeof useContract>["contract"]>, eventName: string, options?: {
    queryFilter?: EventQueryFilter;
    subscribe?: boolean;
}): import("@tanstack/react-query").UseQueryResult<ContractEvent[], unknown>;
