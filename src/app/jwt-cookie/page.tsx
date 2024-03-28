"use client";
import type { NextPage } from "next";
import { ConnectButton } from "thirdweb/react";
import { LoginButton } from "./components/login-button";
import { client } from "../../lib/client";

const JWTCookiePage: NextPage = () => {
  return (
    <div>
      <h2>Step 1: Connect Wallet</h2>
      <ConnectButton client={client} />
      <h2>Step 2: Sign the login payload</h2>
      <LoginButton />
    </div>
  );
};

export default JWTCookiePage;
