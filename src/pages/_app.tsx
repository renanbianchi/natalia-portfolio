/* eslint-disable import/no-unresolved */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from '../../public/theme';

import { NavBar } from '@/components/Navbar';
import { GlobalStyle } from '@/components/globalstyles';
import { Footer } from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/public/icons/N.svg" />
        <link rel="manifest" href="/favicon/manifest.json" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
