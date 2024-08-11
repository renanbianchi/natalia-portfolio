'use client';

/* eslint-disable import/no-unresolved */
import NextTopLoader from 'nextjs-toploader';
import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../public/theme';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Navbar';
import { GlobalStyle } from '@/components/globalstyles';
import Loading from './projects/loading';
import StyledComponentsRegistry from './registry';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <title>Natalia UX/UI Design</title>
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
