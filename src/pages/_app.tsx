/* eslint-disable import/no-unresolved */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import React, { useEffect, useState } from 'react';
import theme from '../../public/theme';

import { NavBar } from '@/components/Navbar';
import { GlobalStyle } from '@/components/globalstyles';
import { Footer } from '@/components/Footer';
import Loading from '@/components/Loading';
import NextTopLoader from 'nextjs-toploader';
import { useLoading } from '@/utils/useLoading';

export default function App({ Component, pageProps }: AppProps) {
  /* const loading = useLoading(); */
  const loading = true;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/public/icons/N.svg" />
        <link rel="manifest" href="/favicon/manifest.json" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {loading ? <Loading /> :
          <>
          <NavBar />
          <NextTopLoader color='#3D4651' />
          <Component {...pageProps} />
          <Footer />
          </>  
        }
      </ThemeProvider>
    </>
  );
}
