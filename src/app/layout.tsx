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

export const metadata = {
  title: 'Natalia - UX/UI Design',
  description: 'Hello And Welcome to my Portfolio',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://natalia-araujo.vercel.app/',
    siteName: 'Natalia Araujo',
    images: [
      {
        url: 'https://natalia-araujo.vercel.app/images/natalia1.webp',
        width: 375,
        height: 339,
        alt: 'Natalia Araujo',
      },
    ],
  },
};

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
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
