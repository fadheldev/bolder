import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import config from "../config/config.json"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{config.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
