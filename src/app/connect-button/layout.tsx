"use client";
import { ThirdwebProvider } from "thirdweb/react";

export default function ThirdwebProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThirdwebProvider><div style={{minHeight: "100vh", display: "grid", placeContent: "center"}}>{children}</div></ThirdwebProvider>;
}
