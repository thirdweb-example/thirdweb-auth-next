"use client";
import type { NextPage } from "next";
import { ConnectButton } from "thirdweb/react";
import { client } from "../../lib/client";
import { generatePayload, isLoggedIn, login, logout } from "./actions/auth";


const ConnectButtonPage: NextPage = () => {
  return (
    <ConnectButton
      client={client}
      auth={{
        isLoggedIn: async (address) => {
          console.log("checking if logged in!", { address });
          return await isLoggedIn();
        },
        doLogin: async (params) => {
          console.log("logging in!");
          await login(params);
        },
        getLoginPayload: async ({ address }) => generatePayload({ address }),
        doLogout: async () => {
          console.log("logging out!");
          await logout();
        },
      }}
    />
  );
};

export default ConnectButtonPage;
