'use client'

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Navbar';
import { GlobalStyle } from '@/components/globalstyles';
import NextTopLoader from 'nextjs-toploader';
import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../public/theme';
import Loading from './loading';
import StyledComponentsRegistry from './registry';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <head>
        <title>Natalia - UX/UI Design</title>
        <meta name="description" content="Boas vindas ao meu Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://natalia-araujo.vercel.app/" />
        <meta property="og:site_name" content="Natalia Araujo" />
        <meta property="og:image" content="https://natalia-araujo.vercel.app/images/open-graph.png" />
        <meta property="og:image:width" content="375" />
        <meta property="og:image:height" content="339" />
        <meta property="og:image:alt" content="Natalia Araujo" />
        <meta name="google-site-verification" content="2T41qSxVrHVjWgyynPgK5PAHKmVgkKSCaQjsgcGyl48" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NavBar />
            <NextTopLoader color='#3D4651' />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
