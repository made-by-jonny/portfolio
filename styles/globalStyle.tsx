import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.typography.body.size}px;
    overflow-x: hidden;
    line-height: ${({ theme }) => theme.utility.lineHeight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }
  h1,h2,h3,h4,h5,h6 {
      color: ${({ theme }) => theme.colors.dark};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.primaryTitle.size}px;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.secondaryTitle.size}px;
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.tertiaryTitle.size}px;
  }
  
`;

export default GlobalStyle;
