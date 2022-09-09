import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.ADMIN_PRIVATE_KEY || "",
  domain: "example.com",
});

export default ThirdwebAuthHandler();
