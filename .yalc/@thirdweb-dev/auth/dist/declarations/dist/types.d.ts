import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { NextApiRequest } from "next";
export declare type ThirdwebAuthRoute = "login" | "logout" | "user";
export declare type ThirdwebAuthConfig = {
    privateKey: string;
    domain: string;
};
export declare type ThirdwebAuthContext = {
    sdk: ThirdwebSDK;
    domain: string;
};
export declare type ThirdwebAuthUser = {
    address: string;
};
export declare type NextApiRequestWithUser = NextApiRequest & {
    user: ThirdwebAuthUser | null;
};
