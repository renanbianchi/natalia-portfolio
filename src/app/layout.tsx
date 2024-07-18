"use client";
/* eslint-disable import/no-unresolved */
import { ThemeProvider } from "styled-components";
import React, { Suspense, useEffect, useState } from "react";
import theme from "../../public/theme";

import { NavBar } from "@/components/Navbar";
import { GlobalStyle } from "@/components/globalstyles";
import { Footer } from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import Loading from "./projects/loading";
import StyledComponentsRegistry from "./registry";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <title>Natalia UX/UI Design</title>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Suspense fallback={<Loading />}>
            <NavBar />
            <NextTopLoader color='#3D4651' />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
