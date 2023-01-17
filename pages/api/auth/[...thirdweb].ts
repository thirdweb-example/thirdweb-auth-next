import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/wallets";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_PRIVATE_KEY || ""),
  domain: "example.com",
});

export default ThirdwebAuthHandler();
