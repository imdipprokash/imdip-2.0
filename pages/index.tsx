import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dipprokash's Portfolio</title>
        <meta name="description" content="Software Devloper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero"></section>
    </div>
  );
};

export default Home;
