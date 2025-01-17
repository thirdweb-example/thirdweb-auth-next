"use client";
import type { NextPage } from "next";
import { ConnectButton } from "thirdweb/react";
import { client } from "../../lib/client";
import { generatePayload, isLoggedIn, login, logout } from "./actions/auth";
import { defineChain } from "thirdweb";


const ConnectButtonPage: NextPage = () => {
  return (
    <ConnectButton
      client={client}
      accountAbstraction={{
        chain: defineChain(17000),
        sponsorGas: true,
      }}
      auth={{
        isLoggedIn: async (address) => {
          console.log("checking if logged in!", { address });
          return await isLoggedIn();
        },
        doLogin: async (params) => {
          console.log("logging in!");
          await login(params);
        },
        getLoginPayload: async ({ address }) => generatePayload({ address, chainId: 17000 }),
        doLogout: async () => {
          console.log("logging out!");
          await logout();
        },
      }}
    />
  );
};

export default ConnectButtonPage;
