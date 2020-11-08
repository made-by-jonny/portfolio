import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.colors.dark};
    font-size: ${({ theme }) => theme.typography.body.size};
    font-family: ${({ theme }) => theme.typography.body.font};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
    line-height: ${({ theme }) => theme.utility.lineHeight};
    letter-spacing: 0.01rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  body {
    padding: 0 14.5%;
  }

  * {
    box-sizing: border-box;
  }

  p,h4,h5,h6 {
    line-height:  ${({ theme }) => theme.leading()}px;
    margin-bottom:  ${({ theme }) => theme.leading()}px;
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${({ theme }) => theme.colors.light};
    line-height:  ${({ theme }) => theme.typography.subHeading.lineHeight};
    margin-bottom:  ${({ theme }) => theme.typography.subHeading.marginBottom};
    margin-top:  ${({ theme }) => theme.typography.subHeading.marginTop};  
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.primaryTitle.size};
    line-height:  ${({ theme }) => theme.typography.primaryTitle.lineHeight};
    margin-bottom:  ${({ theme }) =>
      theme.typography.primaryTitle.marginBottom};
    margin-top:  ${({ theme }) => theme.typography.primaryTitle.marginTop};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.secondaryTitle.size};
    line-height:  ${({ theme }) => theme.typography.secondaryTitle.lineHeight};
    margin-bottom:  ${({ theme }) =>
      theme.typography.secondaryTitle.marginBottom};
    margin-top:  ${({ theme }) => theme.typography.secondaryTitle.marginTop};
    font-weight: ${({ theme }) => theme.typography.secondaryTitle.fontWeight}
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.tertiaryTitle.size};
    line-height:  ${({ theme }) => theme.typography.tertiaryTitle.lineHeight};
    margin-bottom:  ${({ theme }) =>
      theme.typography.tertiaryTitle.marginBottom};
    margin-top:  ${({ theme }) => theme.typography.tertiaryTitle.marginTop};
  }

  input, button {
    all: unset;
    padding: ${({ theme }) => theme.components.padding};
  }

  @media (max-width: 946px) {
    body {
      padding: 0 9.7%;
    }
  }

  @media (max-width: 666px) {
    body {
      padding: 0 5%;
    }
  }
`;

export default GlobalStyle;
