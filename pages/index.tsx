import { useAddress, useDisconnect, useUser, useLogin, useLogout, useMetamask } from '@thirdweb-dev/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();

  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();

  const testWithAuth = async () => {
    const res = await fetch("/api/protected/test");
    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnect}>Disconnect Wallet</button>
          <button onClick={() => login()}>Login with Wallet</button>
          <button onClick={logout}>Logout</button>
          <p>Your address: {address}</p>
          <pre>{JSON.stringify(user)}</pre>
          <br/><br />
          <button onClick={testWithAuth}>Test With Auth</button>
        </>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Home;
