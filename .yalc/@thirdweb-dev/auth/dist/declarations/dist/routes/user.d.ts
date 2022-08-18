import { ThirdwebAuthContext } from "../types";
import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse, ctx: ThirdwebAuthContext): Promise<void>;
