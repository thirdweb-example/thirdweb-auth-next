"use client";

import { useActiveAccount } from "thirdweb/react";
import { generatePayload, verifyPayload } from "../actions/auth";
import { signLoginPayload } from "thirdweb/auth";

export const LoginButton: React.FC = () => {
  const account = useActiveAccount();
  async function handleClick() {
    if (!account) {
      return alert("Please connect your wallet");
    }
    // Step 1: Generate the payload
    const payload = await generatePayload({ address: account.address });
    // Step 2: Sign the payload
    const signatureResult = await signLoginPayload({ account, payload });
    // Step 3: Send the signature to the server for verification
    const finalResult = await verifyPayload(signatureResult);

    alert(finalResult.valid ? "Login successful" : "Login failed");
  }

  return (
    <button disabled={!account} onClick={handleClick}>
      Login
    </button>
  );
};
