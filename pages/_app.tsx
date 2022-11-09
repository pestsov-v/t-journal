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
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&family=Nunito:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
