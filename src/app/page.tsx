import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href="/basic">Basic Example</Link>
      </li>
      <li>
        <Link href="/jwt-cookie">JWT Cookie</Link>
      </li>
    </ul>
  );
};

export default Home;
