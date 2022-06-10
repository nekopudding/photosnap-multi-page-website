import { createTheme } from "@mui/material";

const _ = {
  white: '#fff',
  grey: '#dfdfdf',
  darkgrey: '#979797',
  black: '#000',

  a1: 'hsl(28,100%,79%)',
  a2: 'hsl(329,36%,59%)',
  a3: 'hsl(229,100%,67%)',
}

// @ts-nocheck @ts-ignore
const theme = createTheme({
  breakpoints: {
    values: {
      // @ts-ignore
      mobile: 0,
      tablet: 750,
      laptop: 1080,
      desktop: 1200,
    },
  },
  palette: {
    ..._,

    gradientBW: `rgba(0,0,0,0.0001) 0%, rgba(0,0,0,0.6612) 100%`,
    horizontalGradient: `linear-gradient(1deg, ${_.a1} 10%, ${_.a2} 40%, ${_.a3} 80%)`,
    verticalGradient: `linear-gradient(88deg, ${_.a1} -10%, ${_.a2} 30%, ${_.a3} 90%)`,
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
      opacity: 0.6
    },
    mobileLinks: {
      fontWeight: 700,
      fontSize: '15px',
      lineHeight: '20px',
      letterSpacing: 2.5,
    },
    mobileH1: {
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: 3.33,
    },
    subheading: {
      fontSize: '13px',
      lineHeight: '17px',
      letterSpacing: 0,
    }
  },
})


export default theme;