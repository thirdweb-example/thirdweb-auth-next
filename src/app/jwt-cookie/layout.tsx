"use client";
import { ThirdwebProvider } from "thirdweb/react";
import { client } from "../../lib/client";

export default function ThirdwebProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThirdwebProvider client={client}>{children}</ThirdwebProvider>;
}
