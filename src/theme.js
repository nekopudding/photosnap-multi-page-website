import { createTheme } from "@mui/material";

const _ = {
  white: 'hsl(0,0%,100%)',
  grey: 'hsl(0,0%,87%)',
  black: 'hsl(0,0%,0%)',

  a1: 'hsl(28,100%,79%)',
  a2: 'hsl(329,36%,59%)',
  a3: 'hsl(229,100%,67%)'
}

// @ts-nocheck @ts-ignore
const theme = createTheme({
  breakpoints: {
    values: {
      // @ts-ignore
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    ..._,
    background: {
      default: _.white,
    },
  },
  typography: {
    fontFamily: "DM Sans",
    fontWeight: 400,
    color: _.black,

    h1: {
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: '48px',
      letterSpacing: 4.17,
    },
    h2: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '25px',
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '25px',
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: 2,
    },
    body: {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '25px',
      letterSpacing: 0,
    }
  },
})


export default theme;