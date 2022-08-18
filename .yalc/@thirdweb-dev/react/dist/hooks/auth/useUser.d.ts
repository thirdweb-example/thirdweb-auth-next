interface ThirdwebAuthUser {
    address: string;
}
/**
 * Hook to get the currently logged in user.
 *
 * @returns - The currently logged in user or null if not logged in, as well as a loading state.
 *
 * @public
 */
export declare function useUser(): {
    user: ThirdwebAuthUser | undefined;
    isLoading: boolean;
};
export {};
