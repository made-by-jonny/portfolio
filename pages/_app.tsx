import type { AppProps } from "next/app";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import * as theme from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
};

export default MyApp;
