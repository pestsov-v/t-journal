import React from "react";
import '../styles/globals.css';
import {AppProps} from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Next practice</title>
        <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
