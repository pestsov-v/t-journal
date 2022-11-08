import React from "react";
import '../styles/globals.css';
import {AppProps} from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps}: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <title>Next create</title>
        <link key={1} rel="icon" href="/favicon2.ico"/>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
