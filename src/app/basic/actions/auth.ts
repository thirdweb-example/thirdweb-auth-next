"use server";
import { createAuth } from "thirdweb/auth";
import { client } from "../../../lib/client";

const thirdwebAuth = createAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
  client
});

export const generatePayload = thirdwebAuth.generatePayload;
export const verifyPayload = thirdwebAuth.verifyPayload;
