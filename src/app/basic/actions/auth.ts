"use server";
import { createAuth } from "thirdweb/auth";

const thirdwebAuth = createAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
});

export const generatePayload = thirdwebAuth.generatePayload;
export const verifyPayload = thirdwebAuth.verifyPayload;
