import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Dipprokash's Portfolio</title>
        <meta name="description" content="Software Devloper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <HeroSection />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
};

export default Home;
