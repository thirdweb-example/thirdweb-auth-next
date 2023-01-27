import {
  ConnectWallet,
  useAddress,
  useLogin,
  useLogout,
  useUser,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address = useAddress();
  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();
  const [secret, setSecret] = useState("null");

  const getSecret = async () => {
    const res = await fetch("/api/secret");
    const data = await res.json();
    setSecret(data.message);
  };

  return (
    <div className={styles.container}>
      {address ? (
        <>
          {user?.address ? (
            <>
              <p>Signed in as: {user?.address}</p>
              <button onClick={logout} className={styles.button}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => login()} className={styles.button}>
              Login with Wallet
            </button>
          )}

          <pre
            style={{
              marginTop: "2rem",
            }}
          >
            Secret: {secret}
          </pre>
          <button onClick={getSecret} className={styles.button}>
            Get Secret
          </button>
        </>
      ) : (
        <ConnectWallet />
      )}
    </div>
  );
};

export default Home;
