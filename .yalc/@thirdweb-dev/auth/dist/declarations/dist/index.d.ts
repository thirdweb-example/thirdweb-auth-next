import { ThirdwebAuthConfig, ThirdwebAuthUser } from "./types";
import { NextRequest } from "next/server";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next/types";
export * from "./types";
export declare function ThirdwebAuth(cfg: ThirdwebAuthConfig): {
    ThirdwebAuthHandler: (...args: [] | [NextApiRequest, NextApiResponse]) => Promise<void | NextApiResponse<any>> | ((req: NextApiRequest, res: NextApiResponse) => Promise<void | NextApiResponse<any>>);
    getUser: (req: GetServerSidePropsContext["req"] | NextRequest | NextApiRequest) => Promise<ThirdwebAuthUser | null>;
};
