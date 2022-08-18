/**
 * Hook to get whether the current user is logged in.
 *
 * @returns - Whether the user is logged in or not.
 *
 * @public
 */
export declare function useLoggedIn(): {
    isLoggedIn: boolean | undefined;
    isLoading: boolean;
};
