"use client";
import type { NextPage } from "next";
import { ConnectButton, ThirdwebProvider } from "thirdweb/react";
import { LoginButton } from "./components/login-button";
import { client } from "../../lib/client";
import { defineChain } from "thirdweb";

const Basic: NextPage = () => {
  return (
    <ThirdwebProvider>
      <div>
        <h2>Step 1: Connect Wallet</h2>
        <ConnectButton accountAbstraction={{
          chain: defineChain(17000),
          sponsorGas: true
        }} client={client} />
        <h2>Step 2: Sign the login payload</h2>
        <LoginButton />
      </div>
    </ThirdwebProvider>
  );
};

export default Basic;
