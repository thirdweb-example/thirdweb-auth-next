import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/wallets";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
});

export default ThirdwebAuthHandler();
