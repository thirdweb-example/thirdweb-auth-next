import type { Metadata } from "next";
import "./styles.css";
import { ThirdwebProvider } from "thirdweb/react";

export const metadata: Metadata = {
  title: "thirdweb API Console",
  description: "The unified API for building onchain applications.",
};

export default function ThirdwebProviderLayout({ children }: { children: React.ReactNode }) {
  return <ThirdwebProvider>{children}</ThirdwebProvider>;
}
