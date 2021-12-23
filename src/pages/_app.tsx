/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

import AppEffect from '../components/AppEffect';
import NavBar from '../components/NavBar';
import Settings from '../components/Settings';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Unofficial Hololive watching tool"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Holo Now</title>
      </Head>
      <AppEffect />
      <div className="App">
        <NavBar />
        <main>
          <Component {...pageProps} />
          <Settings />
        </main>
      </div>
    </RecoilRoot>
  );
}

export default App;
