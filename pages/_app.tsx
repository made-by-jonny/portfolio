import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Layout from "../layout";
import GlobalStyle from "../styles/globalStyle";
import * as theme from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
