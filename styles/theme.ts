export const utility = {
  radio: 1.62,
  rootSize: 16,
  lineHeight: 1.5,
  borderRadius: 0,
};

export const leading = (): number => utility.rootSize * utility.lineHeight;

export const colors = {
  primaryBrand: "#E5C4B0",
  secondaryBrand: "#1E4646",
  tertiaryBrand: "#000",
  dark: "#111",
  text: "#E5C4B0",
  subtleText: "#ccc",
  light: "#fff",
};

export const components = {
  padding: "0.5rem 0.5rem",
  spacing: "0.5rem",
  marginBottom: 0 * leading() + "px",
};

export const typography = {
  body: {
    size: "1rem",
    font: "'Rubik', sans-serif",
  },
  primaryTitle: {
    size: "4rem",
    lineHeight: 2 * leading() + "px",
    marginTop: 3 * leading() + "px",
    marginBottom: 1 * leading() + "px",
  },
  secondaryTitle: {
    size: "2.5rem",
    lineHeight: 1.5 * leading() + "px",
    marginTop: 2 * leading() + "px",
    marginBottom: 1 * leading() + "px",
    fontWeight: 300,
  },
  tertiaryTitle: {
    size: "1.5rem",
    lineHeight: 2 * leading() + "px",
    marginTop: 2.5 * leading() + "px",
    marginBottom: 1 * leading() + "px",
  },
  subHeading: {
    size: "1.5rem",
    lineHeight: 1.5 * leading() + "px",
    marginTop: 2 * leading() + "px",
    marginBottom: 0 * leading() + "px",
  },
  preHeading: {
    size: "0.5rem",
    lineHeight: 1 * leading() + "px",
    marginTop: 1 * leading() + "px",
    marginBottom: 0 * leading() + "px",
  },
  button: {
    size: "1rem",
    lineHeight: 1 * leading() + "px",
    marginTop: 1 * leading() + "px",
    marginBottom: 0 * leading() + "px",
  },
};
